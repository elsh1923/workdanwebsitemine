import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, MapPin } from "lucide-react"

interface DestinationCardProps {
  title: string
  description: string
  imageSrc: string
  icon?: ReactNode
  tags: string[]
  price?: string
  link?: string
  duration?: string
}

export default function DestinationCard({
  title,
  description,
  imageSrc,
  icon,
  tags,
  price = "Inquire for Rates",
  link = "/packages",
  duration = "7-10 Days",
}: DestinationCardProps) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl dark:hover:shadow-[#0A1C38]/80 hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 h-full">
      {/* Gold top accent bar — reveals on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C59B27] via-[#F0D07E] to-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
      <div>
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-slate-900">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-semibold tracking-wide bg-[#0A1E3F]/85 backdrop-blur-md text-[#DFB75C] rounded-full border border-[#C59B27]/40 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-[#DFB75C]" />
              {duration}
            </span>
            <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg text-[#DFB75C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DFB75C]" />
              ))}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C] transition-colors mb-2.5">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/60 dark:bg-[#0A1C38]/50 mt-auto flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block">
            Starting from
          </span>
          <span className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-[#DFB75C]">
            {price}
          </span>
        </div>
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-transparent border-2 border-[#C59B27] text-[#C59B27] dark:text-[#DFB75C] dark:border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] hover:border-[#DFB75C] transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(197,155,39,0.4)]"
        >
          <span>Explore Tour</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  )
}
