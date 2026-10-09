import { cdnUrl } from "./cdn"

// Custom next/image loader: serves uploaded images from Cloudinary, everything else as before.
export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const url = cdnUrl(src, width, quality ?? "auto")
  if (url !== src) return url
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`
}
