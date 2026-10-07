"use client"

import { useRef, useCallback } from "react"

interface TikTokEmbedProps {
  videoId: string
  title?: string
}

export default function TikTokEmbed({ videoId, title }: TikTokEmbedProps) {
  const ref = useRef<HTMLDivElement>(null)

  const loadEmbed = useCallback(() => {
    const el = ref.current
    if (!el || el.dataset.loaded) return
    el.dataset.loaded = "true"

    // Show spinner while embed initialises
    el.innerHTML = `
      <div style="width:325px;aspect-ratio:9/16;border-radius:16px;background:#0A1E3F;border:1px solid rgba(100,116,139,0.4);display:flex;align-items:center;justify-content:center;">
        <div style="width:32px;height:32px;border:2px solid #DFB75C;border-top-color:transparent;border-radius:50%;animation:tt-spin 0.8s linear infinite;"></div>
      </div>
      <style>@keyframes tt-spin{to{transform:rotate(360deg)}}</style>`

    // Inject blockquote after a short breath
    setTimeout(() => {
      if (!ref.current) return
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

      const scriptId = `tiktok-script-${videoId}`
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script")
        script.id = scriptId
        script.src = "https://www.tiktok.com/embed.js"
        script.async = true
        document.body.appendChild(script)
      }
    }, 200)
  }, [videoId])

  return (
    <div ref={ref} className="w-full flex justify-center">
      {/* Placeholder — replaced imperatively on click, no React re-render needed */}
      <div className="w-[325px] aspect-[9/16] rounded-2xl bg-[#0A1E3F] border border-slate-700/60 flex flex-col items-center justify-center gap-5 px-6">
        {/* TikTok icon ring */}
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
          </svg>
        </div>

        {title && (
          <p className="text-white/70 text-xs text-center leading-relaxed">{title}</p>
        )}

        <button
          onClick={loadEmbed}
          className="px-6 py-2.5 rounded-full bg-[#DFB75C] text-[#071326] text-xs font-bold hover:bg-[#C59B27] transition-colors cursor-pointer"
        >
          ▶ Load Video
        </button>

        <a
          href={`https://www.tiktok.com/@workdantravel/video/${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 text-[11px] hover:text-[#DFB75C] transition-colors"
        >
          Watch on TikTok ↗
        </a>
      </div>
    </div>
  )
}
