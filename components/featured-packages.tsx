"use client"

import { useEffect, useState } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Star } from "lucide-react"
import { packages } from "@/lib/packages"
import { useLanguage } from "@/components/language-provider"

const INTERVAL = 5000

export default function FeaturedPackages() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const stopped = paused || reduced

  useEffect(() => {
    if (stopped) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % packages.length), INTERVAL)
    return () => clearTimeout(timer)
  }, [index, stopped])

  const go = (n: number) => setIndex((n + packages.length) % packages.length)
  const pkg = packages[index]

  return (
    <div className="relative z-20 -mt-[clamp(10rem,34vh,19rem)] container mx-auto px-4 pb-4 flex justify-center">
      <section
        aria-roledescription="carousel"
        aria-label={t("featured.label")}
        aria-live={stopped ? "polite" : "off"}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-[#071326]/90 backdrop-blur-xl shadow-2xl shadow-black/30"
      >
        <div className="flex items-center justify-between gap-3 px-5 pt-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#DFB75C]/15 border border-[#DFB75C]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#DFB75C]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DFB75C] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DFB75C]" />
            </span>
            {t("featured.title")}
          </span>
          <span className="text-xs font-medium text-slate-300 tabular-nums">{index + 1} / {packages.length}</span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-[230px_1fr] gap-4 sm:gap-6 p-5"
          >
            <div className="relative h-40 sm:h-auto sm:min-h-[190px] overflow-hidden rounded-2xl">
              <Image src={pkg.heroImage} alt={t(`pkg.${pkg.id}.title`)} fill sizes="(max-width: 640px) 100vw, 230px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/60 to-transparent" />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#071326]/75 px-3 py-1 text-xs font-medium text-slate-100">
                <Clock className="h-3.5 w-3.5 text-[#DFB75C]" />{pkg.duration.replace("Days", t("common.days"))}
              </span>
            </div>

            <div className="flex flex-col text-left min-w-0">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {pkg.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="rounded-full border border-[#DFB75C]/40 bg-[#DFB75C]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#DFB75C]">{t(`tag.${tag}`)}</span>
                ))}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">{t(`pkg.${pkg.id}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 line-clamp-2">{t(`pkg.${pkg.id}.desc`)}</p>
              <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">{t("common.startingFrom")}</p>
                  <p className="font-serif text-2xl font-bold text-[#DFB75C] leading-none flex items-baseline gap-3">
                    {pkg.price}
                    <span className="inline-flex items-center gap-1 text-xs font-sans font-medium text-slate-300">
                      <Star className="h-3.5 w-3.5 fill-[#DFB75C] text-[#DFB75C]" />{pkg.rating}
                    </span>
                  </p>
                </div>
                <Link
                  href={pkg.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] px-6 py-2.5 text-sm font-bold text-[#071326] shadow-lg shadow-[#DFB75C]/20 transition-colors"
                >
                  {t("common.exploreTour")}<ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4 px-5 pb-4">
          <div className="flex items-center gap-2" role="group" aria-label={t("featured.choose")}>
            {packages.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => go(i)}
                aria-label={t("featured.show", { title: t(`pkg.${p.id}.title`) })}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-7 bg-[#DFB75C]" : "w-2 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => go(index - 1)} aria-label={t("featured.prev")} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-200 hover:border-[#DFB75C] hover:text-[#DFB75C] transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label={t("featured.next")} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-200 hover:border-[#DFB75C] hover:text-[#DFB75C] transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="h-0.5 bg-white/10">
          <motion.div
            key={`${index}-${stopped}`}
            className="h-full origin-left bg-[#DFB75C]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: stopped ? 0 : 1 }}
            transition={{ duration: stopped ? 0 : INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      </section>
    </div>
  )
}
