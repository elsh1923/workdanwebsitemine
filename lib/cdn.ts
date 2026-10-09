import map from "./cloudinary-map.json"

const images = map.images as Record<string, string>

// Returns the Cloudinary URL for a /public image, or the original path if it was not uploaded.
export function cdnUrl(src: string, width = 1200, quality: number | "auto" = "auto") {
  const id = images[src] ?? images[safeDecode(src)]
  if (!id) return src
  return `https://res.cloudinary.com/${map.cloud}/image/upload/f_auto,q_${quality},w_${width},c_limit/${id}`
}

const videos = ((map as { videos?: Record<string, string> }).videos ?? {})

// Returns the Cloudinary URL for a /public video, or the original path if it was not uploaded.
export function cdnVideoUrl(src: string) {
  const id = videos[src]
  if (!id) return src
  return `https://res.cloudinary.com/${map.cloud}/video/upload/f_mp4,q_auto/${id}.mp4`
}

function safeDecode(s: string) {
  try {
    return decodeURI(s)
  } catch {
    return s
  }
}
