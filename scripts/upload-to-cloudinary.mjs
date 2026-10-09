// Usage: npm run upload-images [-- --dry-run] [-- --force]
// Uploads images from /public to Cloudinary and records them in lib/cloudinary-map.json.
import { createHash } from "node:crypto"
import { openAsBlob, readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs"
import { join, relative, extname, sep } from "node:path"

const root = process.cwd()
const publicDir = join(root, "public")
const mapPath = join(root, "lib", "cloudinary-map.json")
const exts = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"])
const dryRun = process.argv.includes("--dry-run")
const force = process.argv.includes("--force")

if (!process.env.CLOUDINARY_URL) {
  console.error("CLOUDINARY_URL is missing. Run through npm so .env.local is loaded.")
  process.exit(1)
}
let url
try {
  url = new URL(process.env.CLOUDINARY_URL)
} catch {
  console.error('CLOUDINARY_URL is not valid. It should look like: CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>')
  process.exit(1)
}
const apiKey = decodeURIComponent(url.username)
const apiSecret = decodeURIComponent(url.password)
const cloud = url.hostname

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  )
}

const slug = (s) => s.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "")
const files = walk(publicDir).filter((f) => exts.has(extname(f).toLowerCase()))

const existing = existsSync(mapPath) ? JSON.parse(readFileSync(mapPath, "utf8")) : { cloud, images: {} }
const sameCloud = existing.cloud === cloud
const map = { cloud, images: sameCloud ? existing.images : {}, videos: sameCloud ? (existing.videos ?? {}) : {} }

const jobs = []
const seen = new Map()
for (const file of files) {
  const rel = relative(publicDir, file).split(sep).join("/")
  const key = "/" + rel
  const noExt = rel.slice(0, rel.length - extname(rel).length)
  let publicId = "workdan/" + noExt.split("/").map(slug).join("/")
  if (seen.has(publicId)) publicId += "-" + extname(rel).slice(1).toLowerCase()
  if (seen.has(publicId)) {
    console.error(`Name clash: "${key}" and "${seen.get(publicId)}" both become ${publicId}. Rename one and retry.`)
    process.exit(1)
  }
  seen.set(publicId, key)
  if (!force && map.images[key]) continue
  jobs.push({ file, key, publicId, mb: statSync(file).size / 1048576 })
}

console.log(`${files.length} images found, ${jobs.length} to upload to cloud "${cloud}".`)
if (dryRun) {
  jobs.forEach((j) => console.log(`  ${j.mb.toFixed(1)} MB  ${j.key}  ->  ${j.publicId}`))
  process.exit(0)
}

async function upload(job) {
  const timestamp = Math.floor(Date.now() / 1000)
  const toSign = `overwrite=true&public_id=${job.publicId}&timestamp=${timestamp}${apiSecret}`
  const form = new FormData()
  form.set("file", await openAsBlob(job.file), job.key.split("/").pop())
  form.set("public_id", job.publicId)
  form.set("overwrite", "true")
  form.set("timestamp", String(timestamp))
  form.set("api_key", apiKey)
  form.set("signature", createHash("sha1").update(toSign).digest("hex"))
  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method: "POST", body: form })
  const data = await res.json()
  if (!res.ok) throw new Error(data?.error?.message || res.statusText)
  return data.public_id
}

let done = 0
let failed = 0
const queue = [...jobs]
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (queue.length) {
      const job = queue.shift()
      try {
        map.images[job.key] = await upload(job)
        done++
        console.log(`[${done + failed}/${jobs.length}] ok   ${job.key}`)
      } catch (err) {
        failed++
        console.error(`[${done + failed}/${jobs.length}] FAIL ${job.key} — ${err.message}`)
      }
      writeFileSync(mapPath, JSON.stringify(map, null, 2))
    }
  }),
)
writeFileSync(mapPath, JSON.stringify(map, null, 2))
console.log(`Done. ${done} uploaded, ${failed} failed. Map saved to lib/cloudinary-map.json`)
if (failed) process.exitCode = 1
