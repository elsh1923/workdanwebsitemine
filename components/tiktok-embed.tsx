interface TikTokEmbedProps {
  videoId: string
  title?: string
}

const playerParams = new URLSearchParams({
  controls: "1",
  progress_bar: "1",
  play_button: "1",
  volume_control: "1",
  fullscreen_button: "1",
  timestamp: "0",
  music_info: "0",
  description: "0",
  rel: "0",
  loop: "0",
  autoplay: "0",
}).toString()

export default function TikTokEmbed({ videoId, title }: TikTokEmbedProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full max-w-[325px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A1E3F] border border-slate-700/40 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="h-8 w-8 rounded-full border-2 border-[#DFB75C] border-t-transparent animate-spin" />
        </div>
        <iframe
          src={`https://www.tiktok.com/player/v1/${videoId}?${playerParams}`}
          title={title ?? "TikTok video"}
          loading="lazy"
          allow="fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <a
        href={`https://www.tiktok.com/@workdantravel/video/${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#C59B27] dark:hover:text-[#DFB75C] transition-colors"
      >
        Watch on TikTok ↗
      </a>
    </div>
  )
}
