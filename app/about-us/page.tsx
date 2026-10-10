"use client"

import { useState } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  ShieldCheck,
  Users,
  Globe,
  Compass,
  ShoppingBag,
  Clock,
  BadgeCheck,
  X,
  Award,
  HeadphonesIcon,
  Tag,
  Building2,
} from "lucide-react"
import StoryTestimonial from "@/components/story-testimonial"
import { RichText } from "@/components/rich-text"
import { useLanguage } from "@/components/language-provider"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules"

// ─── Data (text comes from the dictionary) ───────────────────────────────────

const stats = [
  { number: "500+", key: "about.stat.travelers" },
  { number: "50+", key: "about.stat.destinations" },
  { number: "4", key: "about.stat.years" },
  { number: "4.9", key: "about.stat.rating" },
]

const certificates = [
  { n: 1, year: "2024", image: "/certificates/Apprtiaction Certificate-1.png" },
  { n: 2, year: "2025", image: "/certificates/WORKDANE CHANNEL PARTNER_CERTFICATE_250227_153946-1.png" },
]

const values = [
  { id: 0, Icon: Users },
  { id: 1, Icon: ShieldCheck },
  { id: 2, Icon: Globe },
  { id: 3, Icon: Compass },
  { id: 4, Icon: ShoppingBag },
  { id: 5, Icon: Clock },
]

const reasons = [
  { n: 1, Icon: ShieldCheck, title: "packages.why.iata.title" },
  { n: 2, Icon: HeadphonesIcon, title: "packages.why.support.title" },
  { n: 3, Icon: Tag, title: "packages.why.rates.title" },
]

const sectionBadge =
  "inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/10 text-[#C59B27] border border-[#DFB75C]/30"

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const { t } = useLanguage()
  const brand = t("brand.name")
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    image: string
    title: string
  }>(null)

  const handleCloseDialog = () => setSelectedCertificate(null)

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t("about.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("about.title", { brand })}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("about.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("nav.about")}</span>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1E3F] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ number, key }) => (
              <div key={key}>
                <p className="font-serif text-4xl font-bold text-[#DFB75C]">{number}</p>
                <p className="mt-1 text-sm font-medium text-slate-300 uppercase tracking-wider">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#071326]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#DFB75C]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
              {t("about.who")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left – text */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-6 leading-tight">
                {t("about.storyTitle")}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                <RichText text={t("about.p1", { brand })} boldClass="text-[#0A1E3F] dark:text-white" />
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                <RichText text={t("about.p2")} boldClass="text-[#0A1E3F] dark:text-white" />
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                <RichText text={t("about.p3")} />
              </p>

              {/* Office pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  `📍 ${t("about.pill.addis")}`,
                  `📍 ${t("about.pill.sharjah")}`,
                  `✈️ ${t("about.pill.iata")}`,
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-50 dark:bg-amber-950/30 text-[#C59B27] border border-amber-200/60 dark:border-amber-800/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right – image grid */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3]">
                <Image
                  src="/about-us.jpg"
                  alt="Workdan Tour & Travel office and team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0D2245] rounded-2xl shadow-xl border border-slate-200 dark:border-[#DFB75C]/20 px-6 py-5 max-w-[260px]">
                <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                  {t("about.quote")}
                </p>
                <p className="mt-3 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                  {t("about.quoteBy")}
                </p>
              </div>

              {/* Gold accent dot */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#DFB75C]/20 border-2 border-[#DFB75C]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D2245]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <span className={sectionBadge}>
              {t("about.values.badge")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
              {t("about.values.desc")}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ id, Icon }) => (
              <div
                key={id}
                className="group bg-white dark:bg-[#071326] rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#DFB75C]/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon container */}
                <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">
                  {t(`about.v${id}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {t(`about.v${id}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificates ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#071326]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <span className={sectionBadge}>
              {t("about.cert.badge")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">
              {t("about.cert.title")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
              {t("about.cert.desc")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certificates.map((cert) => {
              const title = t(`about.cert.${cert.n}.title`)
              return (
                <div
                  key={cert.n}
                  onClick={() => setSelectedCertificate({ image: cert.image, title })}
                  className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-[#DFB75C]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={t("about.cert.alt", { title })}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      {/* Gold chip for year */}
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DFB75C]/15 text-[#C59B27] border border-[#DFB75C]/30">
                        {cert.year}
                      </span>
                      {/* Green verified */}
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <BadgeCheck className="w-4 h-4" />
                        <span className="text-xs font-semibold">{t("about.cert.verified")}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`about.cert.${cert.n}.desc`)}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        <span className="font-semibold text-slate-600 dark:text-slate-300">
                          {t("about.cert.year")}
                        </span>{" "}
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Verified banner */}
          <div className="mt-12 max-w-2xl mx-auto text-center bg-[#0A1E3F] dark:bg-[#0D2245] rounded-3xl p-8 border border-[#DFB75C]/20">
            <Award className="w-10 h-10 text-[#DFB75C] mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              {t("about.cert.bannerTitle")}
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t("about.cert.bannerDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Certificate Dialog (lightbox) ───────────────────────────────── */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleCloseDialog}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-[#0D2245] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label={t("about.close")}
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section id="stories" className="py-20 bg-slate-50 dark:bg-[#0D2245]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <span className={sectionBadge}>
              {t("about.stories.badge")}
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white">
              {t("about.stories.title")}
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper !pb-14"
          >
            {[1, 2].map((n) => (
              <SwiperSlide key={n}>
                <StoryTestimonial
                  name={t(`home.story.${n}.name`)}
                  journey={t("about.story.journey")}
                  quote={t("about.story.quote")}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/15 text-[#DFB75C] border border-[#DFB75C]/30">
            {t("about.why.badge")}
          </span>

          <h2 className="font-serif text-4xl font-bold text-white mb-10">
            {t("about.why.title")}
          </h2>

          {/* Three reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {reasons.map(({ n, Icon, title }) => (
              <div
                key={n}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#DFB75C]/40 transition-colors"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#DFB75C]/15 border border-[#DFB75C]/30 text-[#DFB75C]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-2">{t(title)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(`about.why.${n}.desc`)}</p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/flights"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-base transition-colors duration-300 shadow-lg shadow-[#DFB75C]/25"
          >
            {t("nav.planJourney")}
          </Link>
        </div>
      </section>
    </div>
  )
}
