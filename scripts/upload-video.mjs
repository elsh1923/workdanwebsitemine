// Usage: npm run upload-video -- "public/hero video.mp4"
// Uploads one video to Cloudinary and records it in lib/cloudinary-map.json (under "videos").
import { createHash } from "node:crypto"
import { openAsBlob, readFileSync, writeFileSync, existsSync } from "node:fs"
import { join, relative, extname, resolve, sep } from "node:path"

const arg = process.argv[2]
if (!arg) {
  console.error('Usage: npm run upload-video -- "public/<file>.mp4"')
  process.exit(1)
}

let url
try {
  url = new URL(process.env.CLOUDINARY_URL)
} catch {
  console.error("CLOUDINARY_URL is missing or not valid. Run through npm so .env.local is loaded.")
  process.exit(1)
}
const apiKey = decodeURIComponent(url.username)
const apiSecret = decodeURIComponent(url.password)
const cloud = url.hostname

const root = process.cwd()
const publicDir = join(root, "public")
const file = resolve(root, arg)
const rel = relative(publicDir, file).split(sep).join("/")
if (rel.startsWith("..") || !existsSync(file)) {
  console.error("File must exist inside the public/ folder.")
  process.exit(1)
}

const key = "/" + rel
const slug = (s) => s.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "")
const noExt = rel.slice(0, rel.length - extname(rel).length)
const publicId = "workdan/" + noExt.split("/").map(slug).join("/")

const timestamp = Math.floor(Date.now() / 1000)
const toSign = `overwrite=true&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`
const form = new FormData()
form.set("file", await openAsBlob(file), rel.split("/").pop())
form.set("public_id", publicId)
form.set("overwrite", "true")
form.set("timestamp", String(timestamp))
form.set("api_key", apiKey)
form.set("signature", createHash("sha1").update(toSign).digest("hex"))

console.log(`Uploading ${key} ...`)
const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/video/upload`, { method: "POST", body: form })
const data = await res.json()
if (!res.ok) {
  console.error("Upload failed:", data?.error?.message || res.statusText)
  process.exit(1)
}

const mapPath = join(root, "lib", "cloudinary-map.json")
const map = existsSync(mapPath) ? JSON.parse(readFileSync(mapPath, "utf8")) : { cloud, images: {} }
map.cloud = cloud
map.videos = { ...(map.videos ?? {}), [key]: data.public_id }
writeFileSync(mapPath, JSON.stringify(map, null, 2))
console.log(`Done: ${data.public_id} (${(data.bytes / 1048576).toFixed(1)} MB, ${data.duration?.toFixed?.(1)}s). Map updated.`)
