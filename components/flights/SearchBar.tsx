"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Calendar, ChevronDown, Minus, Plus, Search, ArrowLeftRight, MessageCircle } from "lucide-react"
import { NativeSelect } from "./fields"
import { useLanguage } from "@/components/language-provider"
import {
  SearchState, TripType, airports, airportLabel, cabins, channels, airlineNames,
  fmtField, addDays, diffDays, paxTotal,
} from "@/lib/flights"

const trips: { id: TripType; key: string }[] = [
  { id: "one-way", key: "search.oneWay" },
  { id: "round-trip", key: "search.roundTrip" },
  { id: "multi-city", key: "search.multiCity" },
]

function Counter({ label, hint, value, min, max, onChange }: {
  label: string; hint: string; value: number; min: number; max: number; onChange: (v: number) => void
}) {
  const { t } = useLanguage()
  const btn = "w-8 h-8 rounded-full border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-200 hover:border-[#C59B27] hover:text-[#C59B27] disabled:opacity-35 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
  return (
    <div className="flex items-center justify-between gap-6 py-2">
      <div>
        <p className="text-sm font-semibold text-[#0A1E3F] dark:text-white">{label}</p>
        <p className="text-xs text-slate-400">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" aria-label={t("search.fewer", { what: label })} className={btn} disabled={value <= min} onClick={() => onChange(value - 1)}><Minus className="w-3.5 h-3.5" /></button>
        <span className="w-4 text-center text-sm font-semibold text-[#0A1E3F] dark:text-white">{value}</span>
        <button type="button" aria-label={t("search.more", { what: label })} className={btn} disabled={value >= max} onClick={() => onChange(value + 1)}><Plus className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  )
}

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const { t } = useLanguage()
  return (
    <label className="relative flex items-center gap-3 cursor-pointer min-w-0 flex-1">
      <Calendar className="w-7 h-7 text-slate-400 shrink-0" strokeWidth={1.5} />
      <div className="min-w-0">
        <div className="font-semibold text-[#0A1E3F] dark:text-white whitespace-nowrap">{fmtField(value, t)}</div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
      <input
        type="date"
        value={value}
        aria-label={label}
        onChange={(e) => e.target.value && onChange(e.target.value)}
        onClick={(e) => { try { e.currentTarget.showPicker() } catch {} }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </label>
  )
}

// `error` is a translation key, so the message follows the language toggle.
export function SearchBar({ value, onChange, onSubmit, error }: {
  value: SearchState
  onChange: (v: SearchState) => void
  onSubmit: () => void
  error?: string
}) {
  const { t } = useLanguage()
  const [paxOpen, setPaxOpen] = useState(false)
  const paxRef = useRef<HTMLDivElement>(null)
  const set = (patch: Partial<SearchState>) => onChange({ ...value, ...patch })

  useEffect(() => {
    if (!paxOpen) return
    const close = (e: MouseEvent) => { if (!paxRef.current?.contains(e.target as Node)) setPaxOpen(false) }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [paxOpen])

  const total = paxTotal(value)
  const swap = () => set({ from: value.to, to: value.from })
  const setDepart = (d: string) => {
    const gap = Math.max(diffDays(value.depart, value.ret), 0)
    set({ depart: d, ret: diffDays(d, value.ret) < 0 ? addDays(d, gap) : value.ret })
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit() }}
      className="bg-white dark:bg-[#0D2245] rounded-[2rem] shadow-2xl shadow-[#071326]/20 border border-slate-200/70 dark:border-slate-700/60"
    >
      <div className="flex flex-wrap items-center gap-2.5 px-5 sm:px-8 pt-6 pb-5">
        {trips.map((trip) => (
          <button
            key={trip.id}
            type="button"
            onClick={() => set({ trip: trip.id })}
            aria-pressed={value.trip === trip.id}
            className={`h-10 px-5 rounded-full text-sm font-semibold transition-all ${
              value.trip === trip.id
                ? "bg-[#0A1E3F] text-white shadow-lg shadow-[#0A1E3F]/25 dark:bg-[#DFB75C] dark:text-[#071326]"
                : "bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#C59B27]/60"
            }`}
          >
            {t(trip.key)}
          </button>
        ))}
        <NativeSelect
          ariaLabel={t("search.cabinLabel")}
          value={value.cabin}
          onChange={(v) => set({ cabin: v as SearchState["cabin"] })}
          options={cabins.map((c) => ({ value: c, label: t(`cabin.${c}`) }))}
        />

        <div className="relative" ref={paxRef}>
          <button
            type="button"
            aria-expanded={paxOpen}
            onClick={() => setPaxOpen((o) => !o)}
            className="h-10 pl-4 pr-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D2245] text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2 hover:border-[#C59B27]/60 transition-colors"
          >
            {t(total === 1 ? "pax.passenger" : "pax.passengers", { n: total })}
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${paxOpen ? "rotate-180" : ""}`} />
          </button>
          {paxOpen && (
            <div className="absolute z-30 top-12 left-0 w-72 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-700 shadow-2xl p-4">
              <Counter label={t("search.adults")} hint={t("search.adultsHint")} value={value.adults} min={1} max={9}
                onChange={(v) => set({ adults: v, infants: Math.min(value.infants, v) })} />
              <Counter label={t("search.children")} hint={t("search.childrenHint")} value={value.children} min={0} max={8} onChange={(v) => set({ children: v })} />
              <Counter label={t("search.infants")} hint={t("search.infantsHint")} value={value.infants} min={0} max={value.adults} onChange={(v) => set({ infants: v })} />
              <button type="button" onClick={() => setPaxOpen(false)} className="mt-3 w-full h-10 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-sm font-bold transition-colors">{t("search.done")}</button>
            </div>
          )}
        </div>

        <NativeSelect
          ariaLabel={t("search.airlineLabel")}
          value={value.airline}
          onChange={(v) => set({ airline: v })}
          options={["All Airlines", ...airlineNames].map((a) => ({ value: a, label: t(`airline.${a}`) }))}
        />
        <NativeSelect
          ariaLabel={t("search.channelLabel")}
          value={value.channel}
          onChange={(v) => set({ channel: v })}
          options={channels.map((c) => ({ value: c, label: t(`channel.${c}`) }))}
        />
      </div>

      <div className="border-t border-slate-200/80 dark:border-slate-700/60 px-5 sm:px-8 py-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-4 lg:flex-[2.4] min-w-0">
          <div className="flex-1 min-w-0">
            <input
              list="airport-options"
              value={value.from}
              onChange={(e) => set({ from: e.target.value })}
              onFocus={(e) => e.currentTarget.select()}
              aria-label={t("search.fromLabel")}
              placeholder={t("search.fromPlaceholder")}
              className="w-full bg-transparent font-semibold text-[#0A1E3F] dark:text-white placeholder:text-slate-300 focus:outline-none truncate"
            />
            <div className="text-sm text-slate-400">{t("search.fromLabel")}</div>
          </div>
          <button type="button" onClick={swap} aria-label={t("search.swap")} className="self-start sm:self-auto shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-[#C59B27] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <ArrowLeftRight className="w-5 h-5 hidden sm:block" strokeWidth={1.5} />
            <ArrowRight className="w-5 h-5 sm:hidden" strokeWidth={1.5} />
          </button>
          <div className="flex-1 min-w-0">
            <input
              list="airport-options"
              value={value.to}
              onChange={(e) => set({ to: e.target.value })}
              onFocus={(e) => e.currentTarget.select()}
              aria-label={t("search.toLabel")}
              placeholder={t("search.toPlaceholder")}
              className="w-full bg-transparent font-semibold text-[#0A1E3F] dark:text-white placeholder:text-slate-300 focus:outline-none truncate"
            />
            <div className="text-sm text-slate-400">{t("search.toLabel")}</div>
          </div>
          <datalist id="airport-options">
            {airports.map((a) => <option key={a.code} value={airportLabel(a)}>{a.city}</option>)}
          </datalist>
        </div>

        <div className="hidden lg:block w-px self-stretch bg-slate-200 dark:bg-slate-700" />

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 lg:flex-1">
          <DateField label={t("search.depart")} value={value.depart} onChange={setDepart} />
          {value.trip === "round-trip" && <DateField label={t("search.return")} value={value.ret} onChange={(d) => set({ ret: d })} />}
        </div>

        <button
          type="submit"
          aria-label={t("search.submit")}
          className="shrink-0 h-14 lg:w-14 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#C59B27]/30 hover:-translate-y-0.5 transition-all"
        >
          <Search className="w-6 h-6" />
          <span className="lg:hidden">{t("search.submit")}</span>
        </button>
      </div>

      {value.trip === "multi-city" && (
        <div className="mx-5 sm:mx-8 mb-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/50 px-4 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#7a5f14] dark:text-[#DFB75C]">
          {t("search.multiNote")}
          <a href="https://wa.me/251906700007?text=Hi%2C%20I%20need%20a%20multi-city%20flight%20quote." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold underline underline-offset-2">
            <MessageCircle className="w-4 h-4" />{t("search.multiLink")}
          </a>
        </div>
      )}
      {error && <p role="alert" className="mx-5 sm:mx-8 mb-6 text-sm font-medium text-rose-500">{t(error)}</p>}
    </form>
  )
}
