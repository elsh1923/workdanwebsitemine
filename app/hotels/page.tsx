'use client'

import React, { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Info, SearchX, SlidersHorizontal, Sparkles, X } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLanguage } from "@/components/language-provider"
import { HotelSearchBar, type HotelSearch } from "@/components/hotels/HotelSearchBar"
import { HotelFilters, type HotelFilterState } from "@/components/hotels/HotelFilters"
import { HotelListCard } from "@/components/hotels/HotelListCard"
import { NativeSelect } from "@/components/flights/fields"
import { addDays, diffDays, toISO, type Currency } from "@/lib/flights"
import { hotels, inBucket } from "@/lib/hotels"

type Sort = "recommended" | "low" | "high"

const emptyFilters: HotelFilterState = { city: "all", prices: [], amenities: [] }

export default function HotelsPage() {
  const { t } = useLanguage()
  const resultsRef = useRef<HTMLDivElement>(null)
  // Dates are filled in after mount so the server and first client render match.
  const [search, setSearch] = useState<HotelSearch>({ city: "all", checkIn: "", checkOut: "", rooms: 1, guests: 2 })
  const [filters, setFilters] = useState<HotelFilterState>(emptyFilters)
  const [sort, setSort] = useState<Sort>("recommended")
  const [currency, setCurrency] = useState<Currency>("USD")
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, offset: 50, duration: 800, easing: "ease-out-cubic" })
    const today = toISO(new Date())
    setSearch((s) => ({ ...s, checkIn: addDays(today, 7), checkOut: addDays(today, 10) }))
  }, [])

  // Destination lives in both the search bar and the sidebar.
  const setCity = (city: HotelSearch["city"]) => {
    setSearch((s) => ({ ...s, city }))
    setFilters((f) => ({ ...f, city }))
  }

  const visible = useMemo(() => {
    const list = hotels.filter(
      (h) =>
        (filters.city === "all" || h.city === filters.city) &&
        (filters.prices.length === 0 || filters.prices.some((id) => inBucket(h.priceUsd, id))) &&
        filters.amenities.every((a) => h.tags.includes(a)),
    )
    if (sort === "low") return [...list].sort((a, b) => a.priceUsd - b.priceUsd)
    if (sort === "high") return [...list].sort((a, b) => b.priceUsd - a.priceUsd)
    return list
  }, [filters, sort])

  const nights = search.checkIn && search.checkOut ? Math.max(diffDays(search.checkIn, search.checkOut), 1) : 1
  const stay = { checkIn: search.checkIn, checkOut: search.checkOut, nights, rooms: search.rooms, guests: search.guests }

  const reset = () => { setFilters(emptyFilters); setSearch((s) => ({ ...s, city: "all" })) }
  const runSearch = () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  const filterPanel = (
    <HotelFilters
      value={filters}
      currency={currency}
      onReset={reset}
      onChange={(v) => { setFilters(v); setSearch((s) => ({ ...s, city: v.city })) }}
    />
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative pt-16 pb-24 sm:pt-20 sm:pb-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("hotels.badge")}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {t("hotels.title")}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("hotels.desc")}
            </p>
            <div className="flex items-center justify-center gap-2 mt-5 text-sm text-slate-400">
              <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
              <span>/</span>
              <span className="text-[#DFB75C]">{t("nav.hotels")}</span>
            </div>
          </div>
        </section>

        {/* Search bar overlaps the header */}
        <div className="relative z-20 -mt-14 container mx-auto px-4 max-w-6xl">
          <HotelSearchBar value={search} onChange={(v) => { setSearch(v); setFilters((f) => ({ ...f, city: v.city })) }} onSearch={runSearch} />
        </div>

        {/* Results */}
        <section ref={resultsRef} className="scroll-mt-24 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              <aside className="hidden lg:block sticky top-24">{filterPanel}</aside>

              <div className="min-w-0">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="mr-auto">
                    <h2 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">
                      {t(visible.length === 1 ? "hotels.count1" : "hotels.count", { n: visible.length })}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {filters.city === "all" ? t("hotels.allDestinations") : t(`hotels.loc.${filters.city}`)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 h-10 px-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D2245] text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    {t("hotels.filters")}
                  </button>
                  <NativeSelect
                    ariaLabel={t("hotels.sort")}
                    value={sort}
                    onChange={(v) => setSort(v as Sort)}
                    options={[
                      { value: "recommended", label: t("hotels.sort.recommended") },
                      { value: "low", label: t("hotels.sort.low") },
                      { value: "high", label: t("hotels.sort.high") },
                    ]}
                  />
                  <NativeSelect
                    ariaLabel={t("hotels.currency")}
                    value={currency}
                    onChange={(v) => setCurrency(v as Currency)}
                    options={[
                      { value: "USD", label: "USD" },
                      { value: "ETB", label: "ETB" },
                    ]}
                  />
                </div>

                <div className="flex items-start gap-2.5 rounded-xl border border-amber-200/70 dark:border-amber-900/50 bg-amber-50/70 dark:bg-amber-950/20 px-4 py-3 mb-6 text-xs sm:text-sm text-[#7a5c10] dark:text-amber-200">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>{t("hotels.sampleNote")}</p>
                </div>

                {visible.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D2245] px-6 py-16 text-center">
                    <SearchX className="w-10 h-10 mx-auto text-slate-400 mb-3" />
                    <h3 className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-white">{t("hotels.noResults")}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-5">{t("hotels.noResultsDesc")}</p>
                    <button type="button" onClick={reset} className="inline-flex items-center rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm px-6 py-2.5 transition-colors">
                      {t("hotels.reset")}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {visible.map((hotel) => (
                      <HotelListCard key={hotel.id} hotel={hotel} currency={currency} stay={stay} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Filters drawer for phones and tablets */}
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <button type="button" aria-label={t("f.close")} className="flex-1 bg-black/60" onClick={() => setFiltersOpen(false)} />
          <div className="w-[88%] max-w-sm overflow-y-auto bg-[#F8FAFC] dark:bg-[#071326] p-4">
            <div className="flex justify-end mb-2">
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label={t("f.close")} className="w-9 h-9 rounded-full bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>
            {filterPanel}
            <button type="button" onClick={() => setFiltersOpen(false)} className="mt-4 w-full rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-sm py-3 transition-colors">
              {t("hotels.showResults", { n: visible.length })}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
