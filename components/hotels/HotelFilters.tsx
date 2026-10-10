"use client"

import type { ReactNode } from "react"
import { useLanguage } from "@/components/language-provider"
import { formatMoney, type Currency } from "@/lib/flights"
import { amenityIds, cities, hotels, inBucket, priceBuckets, type AmenityId, type CityId } from "@/lib/hotels"

export interface HotelFilterState {
  city: "all" | CityId
  prices: string[]
  amenities: AmenityId[]
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="py-5 border-t border-slate-200/80 dark:border-slate-700/60 first:border-t-0 first:pt-0">
      <h3 className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white mb-3">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

function Option({ type, checked, label, count, onChange }: { type: "checkbox" | "radio"; checked: boolean; label: string; count: number; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 cursor-pointer group">
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 accent-[#C59B27] cursor-pointer"
      />
      <span className="flex-1 min-w-0 group-hover:text-[#9E7B1C] dark:group-hover:text-[#DFB75C] transition-colors">{label}</span>
      <span className="text-xs text-slate-400 tabular-nums">{count}</span>
    </label>
  )
}

export function HotelFilters({ value, onChange, onReset, currency }: {
  value: HotelFilterState
  onChange: (v: HotelFilterState) => void
  onReset: () => void
  currency: Currency
}) {
  const { t } = useLanguage()
  const toggle = <T extends string>(list: T[], item: T) => (list.includes(item) ? list.filter((x) => x !== item) : [...list, item])
  const m = (usd: number) => formatMoney(usd, currency)

  const bucketLabel = (b: (typeof priceBuckets)[number]) =>
    b.min === 0 ? t("hotels.p.under", { a: m(b.max) })
    : b.max === Infinity ? t("hotels.p.over", { a: m(b.min) })
    : t("hotels.p.range", { a: m(b.min), b: m(b.max) })

  const active = value.city !== "all" || value.prices.length > 0 || value.amenities.length > 0

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-white">{t("hotels.filters")}</h2>
        {active && (
          <button type="button" onClick={onReset} className="text-sm font-semibold text-[#9E7B1C] dark:text-[#DFB75C] hover:underline">
            {t("hotels.reset")}
          </button>
        )}
      </div>

      <Group title={t("hotels.f.destination")}>
        <Option type="radio" checked={value.city === "all"} label={t("hotels.allDestinations")} count={hotels.length} onChange={() => onChange({ ...value, city: "all" })} />
        {cities.map((c) => (
          <Option key={c} type="radio" checked={value.city === c} label={t(`hotels.loc.${c}`)} count={hotels.filter((h) => h.city === c).length} onChange={() => onChange({ ...value, city: c })} />
        ))}
      </Group>

      <Group title={t("hotels.f.price")}>
        {priceBuckets.map((b) => (
          <Option key={b.id} type="checkbox" checked={value.prices.includes(b.id)} label={bucketLabel(b)} count={hotels.filter((h) => inBucket(h.priceUsd, b.id)).length} onChange={() => onChange({ ...value, prices: toggle(value.prices, b.id) })} />
        ))}
      </Group>

      <Group title={t("hotels.f.amenities")}>
        {amenityIds.map((a) => (
          <Option key={a} type="checkbox" checked={value.amenities.includes(a)} label={t(`hotels.am.${a}`)} count={hotels.filter((h) => h.tags.includes(a)).length} onChange={() => onChange({ ...value, amenities: toggle(value.amenities, a) })} />
        ))}
      </Group>
    </div>
  )
}
