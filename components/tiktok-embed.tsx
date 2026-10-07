"use client"

import { useEffect, useRef } from "react"

interface TikTokEmbedProps {
  videoId: string
  loadDelay?: number
}

export default function TikTokEmbed({ videoId, loadDelay = 0 }: TikTokEmbedProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        setTimeout(() => {
          if (!ref.current) return

          // Inject the blockquote (replaces placeholder)
          ref.current.innerHTML = `
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@workdantravel/video/${videoId}"
              data-video-id="${videoId}"
              data-embed-from="embed_page"
              style="max-width:325px;min-width:0px;">
              <section>
                <a target="_blank" href="https://www.tiktok.com/@workdantravel?refer=embed" rel="noopener noreferrer">
                  @workdantravel
                </a>
              </section>
            </blockquote>`

          // Each video gets its own script instance so they don't race
          const scriptId = `tiktok-embed-js-${videoId}`
          if (!document.getElementById(scriptId)) {
            const script = document.createElement("script")
            script.id = scriptId
            script.src = "https://www.tiktok.com/embed.js"
            script.async = true
            document.body.appendChild(script)
          }
        }, loadDelay)
      },
      { threshold: 0.1, rootMargin: "100px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [videoId, loadDelay])

  return (
    <div ref={ref} className="w-full flex justify-center">
      {/* Placeholder shown until embed loads */}
      <div className="w-[325px] aspect-[9/16] rounded-2xl bg-[#0A1E3F] border border-slate-700/60 flex flex-col items-center justify-center gap-3">
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#DFB75C]/50" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
        </svg>
        <span className="text-slate-500 text-xs tracking-wide">@workdantravel</span>
      </div>
    </div>
  )
}
