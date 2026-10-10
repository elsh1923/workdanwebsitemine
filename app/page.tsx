"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"
import Image from "@/components/cdn-image"
import {
  BriefcaseBusiness,
  PlaneTakeoff,
  FileCheck,
  ShieldCheck,
  Compass,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  Send,
  Star,
  Play,
} from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules"

import HeroSection from "@/components/hero-section"
import FeaturedPackages from "@/components/featured-packages"
import DestinationCard from "@/components/destination-card"
import ServiceCard from "@/components/service-card"
import StoryTestimonial from "@/components/story-testimonial"
import TimezonesDisplay from "@/components/time-zones-dIsplay"
import AirplaneReveal from "@/components/airplane-reveal"
import TikTokEmbed from "@/components/tiktok-embed"
import { useLanguage } from "@/components/language-provider"

const tiktokVideos = [
  { id: "7693554664184499463", title: "ዱባይ መሄድ ይፈልጋሉ? 🇦🇪 Dubai travel packages" },
  { id: "7541752458876439814", title: "How to setup your business in UAE 🇦🇪" },
  { id: "7578119720675577099", title: "Welcome to China Guangzhou 🇨🇳 — visa, ticket & hotel" },
]

const destinations = [
  {
    id: "dubai",
    imageSrc: "/dubai-front.png",
    tags: ["Modern Luxury", "Desert Safari", "Skyline"],
    price: "$1,890+",
    duration: "5-7 Days",
    link: "/packages/dubai-tour",
  },
  {
    id: "turkey",
    imageSrc: "/turkey-front.png",
    tags: ["Historic Marvels", "Aegean Coast", "Bosphorus"],
    price: "$1,680+",
    duration: "6-8 Days",
    link: "/packages/turkey-tour",
  },
  {
    id: "china",
    imageSrc: "/china-front.png",
    tags: ["Trade & Commerce", "Cultural Heritage", "Skyline"],
    price: "$2,250+",
    duration: "8-10 Days",
    link: "/packages/china-tour",
  },
]

const services = [
  { id: "planning", icon: PlaneTakeoff, link: "/services/travel-planning-consultation", popular: true },
  { id: "uae", icon: BriefcaseBusiness, link: "/services/uae-business-consultant-activities", popular: true },
  { id: "visa", icon: FileCheck, link: "/services/visa-services", popular: false },
  { id: "pcc", icon: ShieldCheck, link: "/services/uae-pcc-attestation", popular: false },
]

const sectionBadge =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3"

export default function Home() {
  const { t } = useLanguage()

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <HeroSection />

        <FeaturedPackages />

        {/* Curated Destinations Section */}
        <AirplaneReveal direction="right-to-left">
          <section id="destinations" className="py-24 container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
              <div className={sectionBadge}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("home.dest.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                {t("home.dest.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {t("home.dest.desc")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
              {destinations.map(({ id, ...item }, index) => (
                <div key={id} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                  <DestinationCard
                    {...item}
                    title={t(`home.dest.${id}.title`)}
                    description={t(`home.dest.${id}.desc`)}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-serif text-sm font-bold text-[#DFB75C] bg-transparent border-2 border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] shadow-sm hover:shadow-[0_4px_14px_0_rgba(223,183,92,0.39)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>{t("home.dest.viewAll")}</span>
                <ArrowRight className="w-4 h-4 text-[#DFB75C] group-hover:text-[#071326] transition-colors" />
              </Link>
            </div>
          </section>
        </AirplaneReveal>

        {/* Telegram VIP Travel Club Banner */}
        <AirplaneReveal direction="left-to-right">
          <section className="py-20 container mx-auto px-4 max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A1E3F] via-[#0F2752] to-[#071326] p-8 sm:p-12 text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="relative z-10 max-w-xl text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DFB75C] block mb-2">
                  {t("home.tg.badge")}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
                  {t("home.tg.title")}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t("home.tg.desc")}
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0">
                <a
                  href="https://t.me/workdantravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-serif text-base font-bold text-[#071326] bg-[#DFB75C] hover:bg-white shadow-[0_4px_14px_0_rgba(223,183,92,0.39)] hover:shadow-[0_6px_20px_rgba(223,183,92,0.23)] transition-all duration-300 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 text-[#071326]" />
                  <span>{t("home.tg.cta")}</span>
                </a>
              </div>

              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C59B27]/15 blur-3xl pointer-events-none" />
            </div>
          </section>
        </AirplaneReveal>

        {/* Specialized Services Section */}
        <AirplaneReveal direction="right-to-left">
          <section id="services" className="py-24 container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
              <div className={sectionBadge}>
                <Compass className="w-3.5 h-3.5" />
                <span>{t("home.svc.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                {t("home.svc.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {t("home.svc.desc")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 pt-6">
              {services.map(({ id, icon, link, popular }) => (
                <ServiceCard
                  key={id}
                  title={t(`home.svc.${id}.title`)}
                  description={t(`home.svc.${id}.desc`)}
                  icon={icon}
                  features={[1, 2, 3, 4].map((n) => t(`home.svc.${id}.f${n}`))}
                  popular={popular}
                  link={link}
                />
              ))}
            </div>
          </section>
        </AirplaneReveal>

        {/* TikTok Social Proof Section */}
        <AirplaneReveal direction="left-to-right">
          <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
                <div className={sectionBadge}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                  <span>{t("home.tt.badge")}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                  {t("home.tt.title")}
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {t("home.tt.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {tiktokVideos.map((video) => (
                  <TikTokEmbed
                    key={video.id}
                    videoId={video.id}
                    title={video.title}
                  />
                ))}
              </div>

              <div className="text-center mt-4" data-aos="fade-up">
                <a
                  href="https://www.tiktok.com/@workdantravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-serif text-sm font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_18px_rgba(197,155,39,0.45)] hover:shadow-[0_6px_24px_rgba(197,155,39,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                  {t("home.tt.follow")}
                </a>
              </div>
            </div>
          </section>
        </AirplaneReveal>

        {/* Traveler Chronicles / Testimonials */}
        <AirplaneReveal direction="right-to-left">
          <section id="stories" className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
                <div className={sectionBadge}>
                  <Star className="w-3.5 h-3.5 fill-[#DFB75C]" />
                  <span>{t("home.story.badge")}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                  {t("home.story.title")}
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
                  {t("home.story.desc")}
                </p>
              </div>

              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                className="!pb-14"
              >
                {[1, 2, 3].map((n) => (
                  <SwiperSlide key={n}>
                    <StoryTestimonial
                      name={t(`home.story.${n}.name`)}
                      journey={t(`home.story.${n}.journey`)}
                      quote={t(`home.story.${n}.quote`)}
                      location={t(`home.story.${n}.location`)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </AirplaneReveal>

        {/* About Heritage & Mission Section */}
        <AirplaneReveal direction="left-to-right">
          <section id="about" className="py-24 container mx-auto px-4 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div data-aos="fade-right">
                <div className={sectionBadge}>
                  <Award className="w-3.5 h-3.5" />
                  <span>{t("home.about.badge")}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white mb-6 tracking-tight">
                  {t("home.about.title")}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                  {t("home.about.p1")}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                  {t("home.about.p2")}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800">
                    <span className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white block">10+</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{t("home.about.years")}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800">
                    <span className="font-serif text-3xl font-bold text-[#C59B27] dark:text-[#DFB75C] block">100%</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{t("home.about.iata")}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800" data-aos="fade-left">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
                  alt="Workdan bespoke travel story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-[#0A1E3F]/95 backdrop-blur-md border border-white/60 dark:border-slate-700 shadow-xl">
                  <p className="font-serif text-sm font-bold text-[#0A1E3F] dark:text-white">
                    {t("home.about.quote")}
                  </p>
                  <span className="text-[11px] text-[#9E7B1C] dark:text-[#DFB75C] font-bold block mt-1">
                    {t("home.about.philosophy")}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </AirplaneReveal>

        {/* FAQ Section */}
        <AirplaneReveal direction="right-to-left">
          <section className="py-24 container mx-auto px-4 max-w-4xl">
            <div className="max-w-3xl mx-auto text-center mb-14" data-aos="fade-up">
              <div className={sectionBadge}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t("home.faq.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                {t("home.faq.title")}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {t("home.faq.desc")}
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <details
                  key={n}
                  className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0D2245] shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <span className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white group-open:text-[#C59B27] dark:group-open:text-[#DFB75C] transition-colors">
                      {t(`home.faq.${n}.q`)}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] text-sm font-bold group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    {t(`home.faq.${n}.a`)}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="150">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                {t("home.faq.still")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-sm font-bold text-[#DFB75C] border-2 border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t("home.faq.contact")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </AirplaneReveal>

        {/* Global Timezones Display */}
        <AirplaneReveal direction="left-to-right">
          <TimezonesDisplay />
        </AirplaneReveal>
      </main>
    </div>
  )
}
