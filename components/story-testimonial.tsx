"use client"

import Image from "@/components/cdn-image"
import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface StoryTestimonialProps {
  name: string
  journey: string
  quote: string
  imageSrc?: string
  location?: string
}

export default function StoryTestimonial({
  name,
  journey,
  quote,
  imageSrc,
  location,
}: StoryTestimonialProps) {
  const { t } = useLanguage()
  return (
    <div className="bg-white dark:bg-[#0D2245] rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg max-w-3xl mx-auto my-4 text-left">
      <div className="flex items-center justify-between mb-6">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-[#C59B27] dark:text-[#DFB75C]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C59B27] dark:fill-[#DFB75C]" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-[#DFB75C]/40" />
      </div>

      {/* Quote */}
      <blockquote className="font-serif text-lg sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed italic mb-8">
        "{quote}"
      </blockquote>

      {/* User info */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#DFB75C]/60 shadow-xs bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center font-serif text-lg font-bold text-[#C59B27] dark:text-[#DFB75C]">
          {imageSrc && imageSrc !== "/placeholder.svg" ? (
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white">{name}</h4>
          <p className="text-xs text-[#9E7B1C] dark:text-[#DFB75C] font-semibold">{journey}</p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block">{location ?? t("home.story.verified")}</span>
        </div>
      </div>
    </div>
  )
}
