// Usage: node --env-file=.env.local scripts/cloudinary-list.mjs
// Lists image assets in the Cloudinary account (never prints credentials).
let url
try {
  url = new URL(process.env.CLOUDINARY_URL)
} catch {
  console.error("CLOUDINARY_URL is not valid.")
  process.exit(1)
}
const auth = "Basic " + Buffer.from(`${decodeURIComponent(url.username)}:${decodeURIComponent(url.password)}`).toString("base64")
const base = `https://api.cloudinary.com/v1_1/${url.hostname}`

let next
let all = []
do {
  const res = await fetch(`${base}/resources/image?max_results=500${next ? `&next_cursor=${next}` : ""}`, { headers: { Authorization: auth } })
  const data = await res.json()
  if (!res.ok) {
    console.error("Cloudinary error:", data?.error?.message || res.statusText)
    process.exit(1)
  }
  all = all.concat(data.resources)
  next = data.next_cursor
} while (next)

console.log(`${all.length} image(s) in account "${url.hostname}"`)
all.forEach((r) => console.log(`  ${r.public_id}  (${r.format}, ${(r.bytes / 1048576).toFixed(1)} MB, ${r.created_at})`))
