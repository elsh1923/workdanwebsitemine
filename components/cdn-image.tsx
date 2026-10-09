"use client"

import Image, { type ImageProps } from "next/image"
import cloudinaryLoader from "@/lib/cloudinary-loader"

// Drop-in replacement for next/image that serves uploaded images from Cloudinary.
export default function CdnImage(props: ImageProps) {
  return <Image loader={cloudinaryLoader} {...props} />
}
