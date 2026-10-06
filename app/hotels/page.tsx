'use client'

import React, { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HotelCard from "@/components/hotel-card"
import BackToTop from "@/components/back-to-top"
import { Star, Building, Sparkles } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function HotelsPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  const featuredHotels = [
    {
      name: "Burj Al Arab Jumeirah",
      location: "Dubai, UAE",
      description: "The global icon of Arabian luxury. Experience unparalleled opulence with private butler service, underwater dining, and exclusive access to the Burj Al Arab Terrace.",
      imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
      amenities: ["Private Beach", "Butler Service", "Talise Spa", "Infinity Pool"],
      stars: 5,
    },
    {
      name: "Çırağan Palace Kempinski",
      location: "Istanbul, Turkey",
      description: "Experience the grandeur of the Ottoman Empire at this stunning palace on the Bosphorus. A seamless blend of historical luxury and modern sophistication.",
      imageSrc: "https://images.unsplash.com/photo-1541480601022-2308c0f01587?q=80&w=800&auto=format&fit=crop",
      amenities: ["Bosphorus View", "Heated Pool", "Palace Spa", "Helipad"],
      stars: 5,
    },
    {
      name: "Four Seasons Hotel",
      location: "Guangzhou, China",
      description: "Soaring above the Pearl River, this architectural masterpiece occupies the top floors of the IFC. Breathtaking cityscapes, Michelin-starred dining, and cloud-level spa serenity.",
      imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=800&auto=format&fit=crop",
      amenities: ["Sky Lobby", "Michelin Dining", "Cloud Spa", "Executive Club"],
      stars: 5,
    },
    {
      name: "Atlantis The Royal",
      location: "Dubai, UAE",
      description: "A new standard of luxury in Dubai. Featuring daring architecture, celebrity chef restaurants, and the most spectacular pool landscapes in the world.",
      imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
      amenities: ["Cloud 22 Pool", "Nobu by the Beach", "AWAY Spa", "Skyblaze Fountain"],
      stars: 5,
    },
    {
      name: "The Peninsula",
      location: "Istanbul, Turkey",
      description: "Set along the dazzling Bosphorus waterfront in the historic Karaköy district, this is a showcase of Turkish artistry and world-class Peninsula luxury.",
      imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      amenities: ["Private Boat Dock", "Rooftop Restaurant", "Indoor Pool", "Luxury Boutiques"],
      stars: 5,
    },
    {
      name: "Rosewood",
      location: "Guangzhou, China",
      description: "At 108 stories high, it's the tallest 5-star hotel in the world. Experience ultra-luxury lifestyle with panoramic views, sky bars, and unparalleled service.",
      imageSrc: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=800&auto=format&fit=crop",
      amenities: ["Sky Bar", "Sense Spa", "Indoor Pool", "Butler Service"],
      stars: 5,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="relative py-20 bg-[#0A1E3F] text-white overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#DFB75C]/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFB75C] shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-[#DFB75C]" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Workdan Exclusive Stays
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Luxury <span className="text-[#DFB75C]">Accommodations</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
              Browse our handpicked selection of the world's most prestigious hotels across our prime destinations. Experience unmatched luxury and let our VIP concierges handle your reservations.
            </p>
          </div>
        </section>

        {/* Hotels Grid Section */}
        <section className="py-20 bg-white dark:bg-[#071326]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredHotels.map((hotel, index) => (
                <div key={hotel.name} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <HotelCard {...hotel} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
