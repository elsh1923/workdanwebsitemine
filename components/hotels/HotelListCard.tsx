"use client"

import Image from "@/components/cdn-image"
import { Check, MapPin, MessageCircle, ShieldCheck, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { formatMoney, fmtMeta, type Currency } from "@/lib/flights"
import type { Hotel } from "@/lib/hotels"

export interface StayInfo {
  checkIn: string
  checkOut: string
  nights: number
  rooms: number
  guests: number
}

export function HotelListCard({ hotel, currency, stay }: { hotel: Hotel; currency: Currency; stay: StayInfo }) {
  const { t } = useLanguage()
  const nightly = formatMoney(hotel.priceUsd, currency)
  const total = formatMoney(hotel.priceUsd * Math.max(stay.nights, 1) * stay.rooms, currency)

  // The WhatsApp message stays in English so the sales team always reads the same text.
  const dates = stay.checkIn && stay.checkOut
    ? `from ${fmtMeta(stay.checkIn)} to ${fmtMeta(stay.checkOut)} (${stay.nights} night${stay.nights === 1 ? "" : "s"})`
    : "(dates to be confirmed)"
  const message = `Hello Workdan Sales! I would like to book the ${hotel.english.name} in ${hotel.english.location} ${dates} for ${stay.rooms} room${stay.rooms === 1 ? "" : "s"} and ${stay.guests} guest${stay.guests === 1 ? "" : "s"}. Could you confirm availability and the final price?`
  const whatsappUrl = `https://wa.me/251906700007?text=${encodeURIComponent(message)}`

  return (
    <article className="group grid md:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr_210px] overflow-hidden rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#C59B27]/50 dark:hover:border-[#DFB75C]/40 transition-all duration-300">
      {/* Photo */}
      <div className="relative h-52 md:h-auto md:row-span-2 xl:row-span-1 overflow-hidden bg-slate-900">
        <Image
          src={hotel.imageSrc}
          alt={t(`hotels.${hotel.id}.name`)}
          fill
          sizes="(max-width: 768px) 100vw, 260px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0A1E3F]/90 px-3 py-1 text-[11px] font-bold text-[#DFB75C] border border-[#DFB75C]/40">
          {t("hotels.pick")}
        </span>
      </div>

      {/* Details */}
      <div className="min-w-0 p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1E3F] dark:text-white">{t(`hotels.${hotel.id}.name`)}</h3>
          <div className="flex items-center gap-0.5" aria-label={t("hotels.class", { n: hotel.stars })}>
            {[...Array(hotel.stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#DFB75C] text-[#DFB75C]" />)}
          </div>
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-[#9E7B1C] dark:text-[#DFB75C] font-medium">
          <MapPin className="w-3.5 h-3.5" />
          {t(`hotels.loc.${hotel.city}`)}
        </p>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">{t(`hotels.${hotel.id}.desc`)}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              {t(`hotels.${hotel.id}.a${n}`)}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          {t("hotels.vip")}
        </p>
      </div>

      {/* Price */}
      <div className="md:col-start-2 xl:col-start-3 border-t xl:border-t-0 xl:border-l border-dashed border-slate-200 dark:border-slate-700 p-5 flex flex-wrap xl:flex-col items-center xl:items-end justify-between gap-4 bg-slate-50/60 dark:bg-[#0A1C38]/40">
        <div className="xl:text-right">
          <p className="text-xs text-slate-500 dark:text-slate-400">{t("hotels.from")}</p>
          <p className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white tabular-nums leading-tight">{nightly}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t("hotels.perNight")} · {t("hotels.taxes")}</p>
          {stay.checkIn && stay.checkOut && (
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {t("hotels.estTotal", { nights: t(stay.nights === 1 ? "hotels.night" : "hotels.nights", { n: stay.nights }), amount: total })}
            </p>
          )}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm px-6 py-3 shadow-[0_4px_14px_rgba(197,155,39,0.35)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4" />
          {t("hotels.book")}
        </a>
      </div>
    </article>
  )
}
