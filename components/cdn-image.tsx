"use client"

import Image, { type ImageProps } from "next/image"
import cloudinaryLoader from "@/lib/cloudinary-loader"
import { cdnBlurUrl } from "@/lib/cdn"

// Drop-in replacement for next/image that serves uploaded images from Cloudinary.
// Cover-style fill images get an instant blurred preview behind them while they load.
export default function CdnImage(props: ImageProps) {
  const blur =
    props.fill && typeof props.src === "string" && props.className?.includes("object-cover")
      ? cdnBlurUrl(props.src)
      : undefined

  const style = blur
    ? { backgroundImage: `url(${blur})`, backgroundSize: "cover", backgroundPosition: "center", ...props.style }
    : props.style

  return <Image loader={cloudinaryLoader} {...props} style={style} />
}
