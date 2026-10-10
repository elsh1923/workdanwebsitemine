"use client"

import Image from "@/components/cdn-image"
import { Star, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface HotelCardProps {
  name: string
  location: string
  description: string
  imageSrc: string
  amenities: string[]
  stars?: number
  // English names used in the WhatsApp message so the sales team always reads the same text
  contactName?: string
  contactLocation?: string
}

export default function HotelCard({
  name,
  location,
  description,
  imageSrc,
  amenities,
  stars = 5,
  contactName,
  contactLocation,
}: HotelCardProps) {
  const { t } = useLanguage()
  // WhatsApp contact message pre-filled with hotel name
  const contactMessage = encodeURIComponent(`Hello Workdan Sales! I am interested in booking a stay at the ${contactName ?? name} in ${contactLocation ?? location}. Could you provide more details?`)
  const whatsappUrl = `https://wa.me/251906700007?text=${contactMessage}`

  return (
    <div className="group rounded-3xl overflow-hidden bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl dark:hover:shadow-blue-950/50 hover:border-[#DFB75C]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      <div>
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-slate-900">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top Location Badge */}
          <div className="absolute top-4 left-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold tracking-wide bg-[#0A1E3F]/85 backdrop-blur-md text-[#DFB75C] rounded-full border border-[#DFB75C]/40 shadow-sm">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-0.5 bg-black/50 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-[#DFB75C]">
              {[...Array(stars)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DFB75C]" />
              ))}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1E3F] dark:text-white group-hover:text-[#DFB75C] transition-colors mb-2.5">
            {name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
            {description}
          </p>

          {/* Amenities tags */}
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 rounded-md border border-slate-200 dark:border-slate-800"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0A1C38]/40 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full font-semibold text-xs tracking-wider uppercase border border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_14px_0_rgba(223,183,92,0.39)]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t("hotels.inquire")}</span>
        </a>
      </div>
    </div>
  )
}
