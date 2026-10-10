'use client'

import React, { useEffect } from "react"
import Link from "next/link"
import HotelCard from "@/components/hotel-card"
import { Sparkles } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLanguage } from "@/components/language-provider"

const featuredHotels = [
  {
    id: "burj",
    english: { name: "Burj Al Arab Jumeirah", location: "Dubai, UAE" },
    place: "dubai",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ciragan",
    english: { name: "Çırağan Palace Kempinski", location: "Istanbul, Turkey" },
    place: "istanbul",
    imageSrc: "https://images.unsplash.com/photo-1541480601022-2308c0f01587?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fourseasons",
    english: { name: "Four Seasons Hotel", location: "Guangzhou, China" },
    place: "guangzhou",
    imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "atlantis",
    english: { name: "Atlantis The Royal", location: "Dubai, UAE" },
    place: "dubai",
    imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "peninsula",
    english: { name: "The Peninsula", location: "Istanbul, Turkey" },
    place: "istanbul",
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "rosewood",
    english: { name: "Rosewood", location: "Guangzhou, China" },
    place: "guangzhou",
    imageSrc: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=800&auto=format&fit=crop",
  },
]

export default function HotelsPage() {
  const { t } = useLanguage()

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("hotels.badge")}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {t("hotels.title")}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("hotels.desc")}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
              <span>/</span>
              <span className="text-[#DFB75C]">{t("nav.hotels")}</span>
            </div>
          </div>
        </section>

        {/* Hotels Grid Section */}
        <section className="py-20 bg-white dark:bg-[#071326]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredHotels.map((hotel, index) => (
                <div key={hotel.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <HotelCard
                    name={t(`hotels.${hotel.id}.name`)}
                    location={t(`hotels.loc.${hotel.place}`)}
                    description={t(`hotels.${hotel.id}.desc`)}
                    imageSrc={hotel.imageSrc}
                    amenities={[1, 2, 3, 4].map((n) => t(`hotels.${hotel.id}.a${n}`))}
                    stars={5}
                    contactName={hotel.english.name}
                    contactLocation={hotel.english.location}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
