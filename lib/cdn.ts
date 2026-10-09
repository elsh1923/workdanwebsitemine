import map from "./cloudinary-map.json"

const images = map.images as Record<string, string>

// Returns the Cloudinary URL for a /public image, or the original path if it was not uploaded.
export function cdnUrl(src: string, width = 1200, quality: number | "auto" = "auto") {
  const id = images[src] ?? images[safeDecode(src)]
  if (!id) return src
  // q_100 is lossless-size heavy; "auto:best" looks the same at a fraction of the bytes.
  const q = typeof quality === "number" && quality >= 95 ? "auto:best" : quality
  return `https://res.cloudinary.com/${map.cloud}/image/upload/f_auto,q_${q},w_${width},c_limit/${id}`
}

// Tiny blurred preview (about 1 KB) shown while the full image loads.
export function cdnBlurUrl(src: string) {
  const id = images[src] ?? images[safeDecode(src)]
  if (!id) return undefined
  return `https://res.cloudinary.com/${map.cloud}/image/upload/f_auto,q_30,w_32,e_blur:400/${id}`
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
