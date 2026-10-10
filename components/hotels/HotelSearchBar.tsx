"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Calendar, ChevronDown, MapPin, Minus, Plus, Search, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { fmtField, addDays, diffDays } from "@/lib/flights"
import { cities, type CityId } from "@/lib/hotels"

export interface HotelSearch {
  city: "all" | CityId
  checkIn: string
  checkOut: string
  rooms: number
  guests: number
}

const iconCls = "w-6 h-6 text-slate-400 shrink-0"

function Cell({ icon, label, children, className = "" }: { icon: ReactNode; label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative flex items-center gap-3 min-w-0 px-5 py-4 ${className}`}>
      {icon}
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</div>
        {children}
      </div>
    </div>
  )
}

function Counter({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  const btn = "w-8 h-8 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 hover:border-[#C59B27] hover:text-[#C59B27] disabled:opacity-35 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
  return (
    <div className="flex items-center justify-between gap-6 py-2">
      <p className="text-sm font-semibold text-[#0A1E3F] dark:text-white">{label}</p>
      <div className="flex items-center gap-3">
        <button type="button" aria-label={`− ${label}`} className={btn} disabled={value <= min} onClick={() => onChange(value - 1)}><Minus className="w-3.5 h-3.5" /></button>
        <span className="w-5 text-center text-sm font-semibold text-[#0A1E3F] dark:text-white">{value}</span>
        <button type="button" aria-label={`+ ${label}`} className={btn} disabled={value >= max} onClick={() => onChange(value + 1)}><Plus className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  )
}

export function HotelSearchBar({ value, onChange, onSearch }: { value: HotelSearch; onChange: (v: HotelSearch) => void; onSearch: () => void }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const set = (patch: Partial<HotelSearch>) => onChange({ ...value, ...patch })

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [open])

  const setCheckIn = (d: string) => {
    const gap = value.checkOut ? Math.max(diffDays(value.checkIn || d, value.checkOut), 1) : 1
    set({ checkIn: d, checkOut: !value.checkOut || diffDays(d, value.checkOut) < 1 ? addDays(d, gap) : value.checkOut })
  }

  const dateField = (label: string, val: string, onPick: (v: string) => void, min?: string) => (
    <label className="relative block cursor-pointer">
      <div className="font-semibold text-[#0A1E3F] dark:text-white whitespace-nowrap truncate">
        {val ? fmtField(val, t) : t("hotels.selectDate")}
      </div>
      <input
        type="date"
        value={val}
        min={min}
        aria-label={label}
        onChange={(e) => e.target.value && onPick(e.target.value)}
        onClick={(e) => { try { e.currentTarget.showPicker() } catch {} }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </label>
  )

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSearch() }}
      className="bg-white dark:bg-[#0D2245] rounded-3xl shadow-2xl shadow-[#071326]/20 border border-slate-200/70 dark:border-slate-700/60"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr_auto] divide-y md:divide-y-0 lg:divide-x divide-slate-200/80 dark:divide-slate-700/60">
        <Cell icon={<MapPin className={iconCls} strokeWidth={1.5} />} label={t("hotels.search.destination")}>
          <div className="relative">
            <select
              aria-label={t("hotels.search.destination")}
              value={value.city}
              onChange={(e) => set({ city: e.target.value as HotelSearch["city"] })}
              className="w-full appearance-none bg-transparent pr-6 font-semibold text-[#0A1E3F] dark:text-white focus:outline-none cursor-pointer truncate"
            >
              <option value="all">{t("hotels.allDestinations")}</option>
              {cities.map((c) => <option key={c} value={c}>{t(`hotels.loc.${c}`)}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </Cell>

        <Cell icon={<Calendar className={iconCls} strokeWidth={1.5} />} label={t("hotels.search.checkIn")}>
          {dateField(t("hotels.search.checkIn"), value.checkIn, setCheckIn)}
        </Cell>

        <Cell icon={<Calendar className={iconCls} strokeWidth={1.5} />} label={t("hotels.search.checkOut")}>
          {dateField(t("hotels.search.checkOut"), value.checkOut, (d) => set({ checkOut: d }), value.checkIn ? addDays(value.checkIn, 1) : undefined)}
        </Cell>

        <div ref={ref} className="relative">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="w-full text-left"
          >
            <Cell icon={<Users className={iconCls} strokeWidth={1.5} />} label={t("hotels.search.guests")}>
              <div className="flex items-center gap-2 font-semibold text-[#0A1E3F] dark:text-white">
                <span className="truncate">
                  {t(value.rooms === 1 ? "hotels.room" : "hotels.rooms", { n: value.rooms })}, {t(value.guests === 1 ? "hotels.guest" : "hotels.guests", { n: value.guests })}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
              </div>
            </Cell>
          </button>
          {open && (
            <div className="absolute z-30 top-full left-4 right-4 sm:right-auto sm:w-72 mt-1 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-700 shadow-2xl p-4">
              <Counter label={t("hotels.roomsLabel")} value={value.rooms} min={1} max={5}
                onChange={(v) => set({ rooms: v, guests: Math.max(value.guests, v) })} />
              <Counter label={t("hotels.guestsLabel")} value={value.guests} min={value.rooms} max={12} onChange={(v) => set({ guests: v })} />
              <button type="button" onClick={() => setOpen(false)} className="mt-3 w-full h-10 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-sm font-bold transition-colors">{t("hotels.done")}</button>
            </div>
          )}
        </div>

        <div className="p-3 md:col-span-2 lg:col-span-1 flex">
          <button
            type="submit"
            className="w-full lg:w-auto lg:px-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm min-h-[52px] shadow-[0_6px_20px_rgba(197,155,39,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Search className="w-4 h-4" />
            {t("hotels.search.button")}
          </button>
        </div>
      </div>
    </form>
  )
}
