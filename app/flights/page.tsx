"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Plane, ChevronDown, ArrowRight, Check, SearchX, Pencil } from "lucide-react"
import { SearchBar } from "@/components/flights/SearchBar"
import { NativeSelect } from "@/components/flights/fields"
import { useLanguage } from "@/components/language-provider"
import {
  Currency, Flight, SearchState, airportLabel, defaultSearch, formatMoney, getFlights,
  priceLeg, resolveAirport, paxTotal, addDays, diffDays, fmtMeta, fmtStrip, fmtField,
} from "@/lib/flights"

type Step = "outbound" | "return"

export default function FlightsPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const searchRef = useRef<HTMLDivElement>(null)
  const listTopRef = useRef<HTMLDivElement>(null)
  const airlineRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState<SearchState>(defaultSearch)
  const [applied, setApplied] = useState<SearchState>(defaultSearch)
  const [error, setError] = useState("")
  const [step, setStep] = useState<Step>("outbound")
  const [outbound, setOutbound] = useState<Flight | null>(null)
  const [hiddenAirlines, setHiddenAirlines] = useState<string[]>([])
  const [airlineOpen, setAirlineOpen] = useState(false)
  const [cur, setCur] = useState<Currency>("USD")
  const [open, setOpen] = useState<string | null>(null)

  useEffect(() => {
    if (!airlineOpen) return
    const close = (e: MouseEvent) => { if (!airlineRef.current?.contains(e.target as Node)) setAirlineOpen(false) }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [airlineOpen])

  const from = resolveAirport(applied.from)!
  const to = resolveAirport(applied.to)!
  const isRound = applied.trip === "round-trip"
  const legFrom = step === "outbound" ? from : to
  const legTo = step === "outbound" ? to : from
  const legDate = step === "outbound" ? applied.depart : applied.ret

  const routeFlights = useMemo(() => {
    return getFlights(legFrom.code, legTo.code).filter(
      (f) =>
        (applied.airline === "All Airlines" || f.airline === applied.airline) &&
        (applied.channel === "All Channels" || f.channel === applied.channel),
    )
  }, [legFrom.code, legTo.code, applied.airline, applied.channel])

  const flights = routeFlights.filter((f) => !hiddenAirlines.includes(f.airline))
  const routeAirlines = Array.from(new Set(routeFlights.map((f) => f.airline)))

  // `error` holds a translation key so the message follows the language toggle.
  const submit = () => {
    if (form.trip === "multi-city") {
      setError("flights.err.multi")
      return
    }
    const f = resolveAirport(form.from)
    const dest = resolveAirport(form.to)
    if (!f || !dest) return setError("flights.err.airports")
    if (f.code === dest.code) return setError("flights.err.same")
    const next = { ...form, from: airportLabel(f), to: airportLabel(dest) }
    setError("")
    setForm(next)
    setApplied(next)
    setStep("outbound")
    setOutbound(null)
    setOpen(null)
    setHiddenAirlines([])
  }

  const pickDate = (d: string) => {
    if (step === "outbound") {
      const gap = Math.max(diffDays(applied.depart, applied.ret), 0)
      const ret = diffDays(d, applied.ret) < 0 ? addDays(d, gap) : applied.ret
      const next = { ...applied, depart: d, ret }
      setApplied(next)
      setForm((f) => ({ ...f, depart: d, ret }))
    } else {
      setApplied({ ...applied, ret: d })
      setForm((f) => ({ ...f, ret: d }))
    }
    setOpen(null)
  }

  const select = (f: Flight) => {
    if (isRound && step === "outbound") {
      setOutbound(f)
      setStep("return")
      setOpen(null)
      listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    const q = new URLSearchParams({
      dep: (isRound ? outbound! : f).tplId,
      from: from.code,
      to: to.code,
      d: applied.depart,
      a: String(applied.adults),
      c: String(applied.children),
      i: String(applied.infants),
      cabin: applied.cabin,
      cur,
    })
    if (isRound) { q.set("ret", f.tplId); q.set("r", applied.ret) }
    router.push(`/flights/checkout?${q.toString()}`)
  }

  const stripStart = addDays(legDate, -1)
  const strip = Array.from({ length: 8 }, (_, i) => addDays(stripStart, i))
  const minDate = step === "return" ? applied.depart : null
  const pax = { adults: applied.adults, children: applied.children, infants: applied.infants }
  const total = paxTotal(applied)
  const travelers = (n: number) => t(n === 1 ? "pax.traveler" : "pax.travelers", { n })
  const [titlePre, titlePost] = t("flights.title").split("{route}")

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#071326] pb-24">
      <section className="relative pt-24 pb-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-4">
            <Plane className="w-3.5 h-3.5" /><span>{t("flights.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">{t("flights.heroTitle")}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link><span>/</span><span className="text-[#DFB75C]">{t("nav.flights")}</span>
          </div>
        </div>
      </section>

      <div ref={searchRef} className="container mx-auto max-w-6xl px-4 -mt-16 relative z-20">
        <SearchBar value={form} onChange={setForm} onSubmit={submit} error={error} />
      </div>

      <div ref={listTopRef} className="container mx-auto max-w-6xl px-4 pt-14 scroll-mt-24">
        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
          {titlePre}<span className="text-[#C59B27] dark:text-[#DFB75C]">{t("flights.route", { from: legFrom.code, to: legTo.code })}</span>{titlePost}
        </h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-2 gap-y-1">
          <span>{t(flights.length === 1 ? "flights.count.one" : "flights.count.other", { n: flights.length })}</span><span aria-hidden>·</span>
          <span>{t(isRound ? "flights.roundTrip" : "flights.oneWay")}</span><span aria-hidden>·</span>
          <span>{fmtMeta(applied.depart, t)}{isRound && ` - ${fmtMeta(applied.ret, t)}`}</span><span aria-hidden>·</span>
          <span>
            {t(applied.adults === 1 ? "pax.adult" : "pax.adults", { n: applied.adults })} {t("pax.children", { n: applied.children })} {t("pax.infants", { n: applied.infants })}
          </span><span aria-hidden>·</span>
          <span>{t(`cabin.${applied.cabin}`)}</span>
        </p>

        <div className="mt-8 bg-white dark:bg-[#0D2245] rounded-3xl shadow-lg shadow-slate-200/70 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-x-auto">
          <div className="grid grid-cols-8 min-w-[760px]">
            {strip.map((d) => {
              const { weekday, day } = fmtStrip(d, t)
              const active = d === legDate
              const disabled = minDate !== null && diffDays(minDate, d) < 0
              return (
                <button
                  key={d}
                  type="button"
                  disabled={disabled}
                  onClick={() => pickDate(d)}
                  aria-pressed={active}
                  className={`py-6 px-2 text-center transition-colors disabled:cursor-not-allowed disabled:opacity-35 ${
                    active ? "text-[#C59B27] dark:text-[#DFB75C] font-bold" : "text-[#0A1E3F] dark:text-slate-200 hover:bg-amber-50/70 dark:hover:bg-white/5"
                  }`}
                >
                  <span className="block">{weekday},</span>
                  <span className="block">{day}</span>
                  {active && <span className="mt-2 mx-auto block h-0.5 w-8 rounded-full bg-[#DFB75C]" />}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-sans text-xl text-[#0A1E3F] dark:text-white">
            {t(step === "outbound" ? "flights.selectDeparture" : "flights.selectReturn")}
          </h3>
          <button
            type="button"
            onClick={() => searchRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
            className="h-11 px-6 rounded-xl bg-[#0A1E3F] hover:bg-[#12305c] dark:bg-white/10 dark:hover:bg-white/15 text-white text-sm font-semibold transition-colors"
          >
            {t("flights.modify")}
          </button>
        </div>

        {step === "return" && outbound && (
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-[#DFB75C]/50 bg-amber-50/70 dark:bg-[#DFB75C]/10 px-5 py-3 text-sm">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#7a5f14] dark:text-[#DFB75C]"><Check className="w-4 h-4" />{t("flights.departureSelected")}</span>
            <span className="text-[#0A1E3F] dark:text-white">
              {outbound.flightNumber} · {outbound.from} → {outbound.to} · {fmtField(applied.depart, t)} · {outbound.depTime}
            </span>
            <button type="button" onClick={() => { setStep("outbound"); setOutbound(null) }} className="ml-auto inline-flex items-center gap-1.5 font-semibold text-[#9E7B1C] dark:text-[#DFB75C] hover:underline">
              <Pencil className="w-3.5 h-3.5" />{t("flights.change")}
            </button>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative" ref={airlineRef}>
            <button
              type="button"
              aria-expanded={airlineOpen}
              onClick={() => setAirlineOpen((o) => !o)}
              className="h-11 pl-5 pr-4 rounded-full border border-[#0A1E3F]/70 dark:border-slate-500 bg-white dark:bg-[#0D2245] text-sm text-[#0A1E3F] dark:text-white flex items-center gap-2 hover:border-[#C59B27] transition-colors"
            >
              {t("flights.filterAirlines")}{hiddenAirlines.length > 0 && <span className="text-[#9E7B1C] dark:text-[#DFB75C] font-semibold">{routeAirlines.length - hiddenAirlines.filter((a) => routeAirlines.includes(a)).length}</span>}
              <ChevronDown className={`w-4 h-4 transition-transform ${airlineOpen ? "rotate-180" : ""}`} />
            </button>
            {airlineOpen && (
              <div className="absolute z-30 top-full mt-2 left-0 w-64 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-700 shadow-2xl p-3">
                {routeAirlines.map((a) => {
                  const on = !hiddenAirlines.includes(a)
                  return (
                    <label key={a} className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => setHiddenAirlines((h) => (on ? [...h, a] : h.filter((x) => x !== a)))}
                        className="w-4 h-4 accent-[#C59B27]"
                      />
                      <span className="text-sm text-[#0A1E3F] dark:text-slate-200">{t(`airline.${a}`)}</span>
                    </label>
                  )
                })}
                {hiddenAirlines.length > 0 && (
                  <button type="button" onClick={() => setHiddenAirlines([])} className="mt-1 w-full text-center text-xs font-semibold text-[#9E7B1C] dark:text-[#DFB75C] py-2 hover:underline">{t("flights.showAll")}</button>
                )}
              </div>
            )}
          </div>
          <NativeSelect
            ariaLabel={t("flights.currencyLabel")}
            value={cur}
            onChange={(v) => setCur(v as Currency)}
            options={[{ value: "USD", label: t("flights.currency", { cur: "USD" }) }, { value: "ETB", label: t("flights.currency", { cur: "ETB" }) }]}
            className="[&_select]:h-11 [&_select]:border-[#0A1E3F]/70 dark:[&_select]:border-slate-500 [&_select]:text-[#0A1E3F] dark:[&_select]:text-white"
          />
          {cur === "ETB" && <span className="text-xs text-slate-400">{t("flights.rateNote")}</span>}
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {flights.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D2245] py-16 px-6 text-center">
              <SearchX className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              <p className="font-semibold text-[#0A1E3F] dark:text-white">{t("flights.noneTitle")}</p>
              <p className="text-sm text-slate-500 mt-1">{t("flights.noneDesc")}</p>
            </div>
          )}
          {flights.map((f) => {
            const price = priceLeg(f, pax, applied.cabin)
            const isOpen = open === f.id
            return (
              <div key={f.id} className={`bg-white dark:bg-[#0D2245] rounded-[1.75rem] border transition-all duration-300 ${isOpen ? "border-[#DFB75C]/60 shadow-xl" : "border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-200/60 dark:shadow-none hover:border-[#DFB75C]/40"}`}>
                <div onClick={() => select(f)} className="cursor-pointer px-5 sm:px-8 py-6 grid grid-cols-[auto_1fr_auto] md:grid-cols-[72px_1.1fr_1.1fr_0.7fr_1fr_auto] items-center gap-x-5 gap-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A1E3F] to-[#16335c] flex items-center justify-center text-[#DFB75C] font-bold tracking-wide shadow-md">{f.code}</div>
                  <div>
                    <p className="text-lg font-bold text-[#0A1E3F] dark:text-white">
                      {f.depTime} - {f.arrTime}{f.nextDay && <sup className="ml-0.5 text-[10px] text-[#C59B27]">+1</sup>}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t(`airline.${f.airline}`)}</p>
                  </div>
                  <button type="button" aria-expanded={isOpen} aria-label={t("flights.details")} onClick={(e) => { e.stopPropagation(); setOpen(isOpen ? null : f.id) }} className="md:hidden w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500">
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className="col-span-2 md:col-span-1 order-4 md:order-none">
                    <p className="font-bold text-[#0A1E3F] dark:text-white">{f.from} - {f.to}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{durationText(f.durationMinutes, t)}</p>
                  </div>
                  <p className="order-5 md:order-none font-bold text-[#0A1E3F] dark:text-white">
                    {f.stops === 0 ? t("flights.direct") : t("flights.oneStop", { via: f.via ?? "" })}
                  </p>
                  <div className="order-6 md:order-none md:text-right">
                    <p className="text-lg font-bold text-[#9E7B1C] dark:text-[#DFB75C]">{formatMoney(price.total, cur)}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t("flights.flightNo", { n: f.flightNumber.split(" ")[1] })}{total > 1 && ` · ${travelers(total)}`}</p>
                  </div>
                  <div className="order-7 md:order-none col-span-3 md:col-span-1 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); select(f) }}
                      className="flex-1 md:flex-none h-11 px-6 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      {t("flights.select")}<ArrowRight className="w-4 h-4" />
                    </button>
                    <button type="button" aria-expanded={isOpen} aria-label={t("flights.details")} onClick={(e) => { e.stopPropagation(); setOpen(isOpen ? null : f.id) }} className="hidden md:flex w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors">
                      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-slate-100 dark:border-slate-800 px-5 sm:px-8 py-6 grid md:grid-cols-[1.4fr_1fr] gap-8">
                    <div className="flex items-stretch gap-4">
                      <div className="flex flex-col items-center py-1">
                        <span className="w-3 h-3 rounded-full border-2 border-[#C59B27] bg-white dark:bg-[#0D2245]" />
                        <span className="flex-1 w-px bg-gradient-to-b from-[#C59B27] to-[#DFB75C]/30 my-1" />
                        <span className="w-3 h-3 rounded-full bg-[#C59B27]" />
                      </div>
                      <div className="flex flex-col justify-between gap-6">
                        <div>
                          <p className="font-bold text-[#0A1E3F] dark:text-white">{f.depTime} · {fmtField(legDate, t)}</p>
                          <p className="text-sm text-slate-500">{airportName(f.from)} ({f.from})</p>
                        </div>
                        <p className="text-xs text-slate-400">{durationText(f.durationMinutes, t)} · {f.stops === 0 ? t("flights.nonStop") : t("flights.via", { via: f.via ?? "" })} · {f.flightNumber}</p>
                        <div>
                          <p className="font-bold text-[#0A1E3F] dark:text-white">{f.arrTime}{f.nextDay && ` ${t("flights.nextDay")}`}</p>
                          <p className="text-sm text-slate-500">{airportName(f.to)} ({f.to})</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between"><dt className="text-slate-500">{t("flights.fare", { pax: travelers(total) })}</dt><dd className="font-medium text-[#0A1E3F] dark:text-white">{formatMoney(price.base, cur)}</dd></div>
                        <div className="flex justify-between"><dt className="text-slate-500">{t("flights.taxes")}</dt><dd className="font-medium text-[#0A1E3F] dark:text-white">{formatMoney(price.taxes, cur)}</dd></div>
                        <div className="flex justify-between"><dt className="text-slate-500">{t("flights.serviceFee")}</dt><dd className="font-medium text-[#0A1E3F] dark:text-white">{formatMoney(price.fee, cur)}</dd></div>
                        <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-2 text-base"><dt className="font-bold text-[#0A1E3F] dark:text-white">{t("flights.total")}</dt><dd className="font-bold text-[#9E7B1C] dark:text-[#DFB75C]">{formatMoney(price.total, cur)}</dd></div>
                      </dl>
                      <button
                        type="button"
                        onClick={() => select(f)}
                        className="mt-5 w-full h-12 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-[#C59B27]/25 transition-colors"
                      >
                        {t(isRound && step === "outbound" ? "flights.selectReturnCta" : "flights.selectFlight")}<ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function airportName(code: string) {
  return resolveAirport(`(${code})`)?.name ?? code
}

function durationText(minutes: number, t: (key: string, vars?: Record<string, string | number>) => string) {
  return t("flights.duration", { h: Math.floor(minutes / 60), m: minutes % 60 })
}
