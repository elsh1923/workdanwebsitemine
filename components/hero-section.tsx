"use client"

import { useState } from "react"

import Link from "next/link"
import { motion } from "motion/react"
import { MapPin, Calendar, Users, Search, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function HeroSection() {
  const [destination, setDestination] = useState("")
  const [dateRange, setDateRange] = useState("June - Aug 29")
  const [guestCount, setGuestCount] = useState("2 Guests")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const target = destination ? `/packages?search=${encodeURIComponent(destination)}` : "/packages"
    window.location.href = target
  }

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#071326]">
      {/* Video Background — Uploaded Klickpin Travel Reel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 brightness-[0.82]"
        >
          <source src="/hero video.mp4" type="video/mp4" />
          {/* Fallback static image if video cannot play */}
          Your browser does not support the video tag.
        </video>
        {/* Subtle Dark & Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#071326]/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-8 flex flex-col items-center text-center">
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFB75C] shadow-lg mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#DFB75C]" />
          <span className="text-xs font-semibold tracking-wider uppercase">
            Workdan Bespoke Luxury Travel Agent
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#DFB75C] drop-shadow-lg max-w-4xl leading-[1.12]"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          Unforgettable Journey,<br />Limitless World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl drop-shadow-md"
        >
          Tailored itineraries, verified 5-star accommodations, and seamless international flight bookings crafted for discerning travelers.
        </motion.p>

        {/* Glassmorphic Search / Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mt-8"
        >
          <form
            onSubmit={handleSearch}
            className="p-3 md:p-3.5 rounded-2xl bg-white/90 dark:bg-[#0D2245]/90 backdrop-blur-xl border border-white/80 dark:border-slate-700 shadow-2xl flex flex-col md:flex-row items-center gap-3 text-left"
          >
            {/* Destination Field */}
            <div className="flex-1 w-full flex flex-col">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 px-3 uppercase tracking-wider mb-1">
                Destination
              </label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3.5 h-4 w-4 text-[#C59B27] dark:text-[#DFB75C]" />
                <input
                  type="text"
                  placeholder="Where to? (e.g. Dubai, China, Turkey)"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#071326] rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 focus:border-[#C59B27] transition-all"
                />
              </div>
            </div>

            {/* Dates Field */}
            <div className="w-full md:w-56 flex flex-col">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 px-3 uppercase tracking-wider mb-1">
                Dates
              </label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-3.5 h-4 w-4 text-[#C59B27] dark:text-[#DFB75C]" />
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#071326] rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 focus:border-[#C59B27] transition-all"
                />
              </div>
            </div>

            {/* Guests Field */}
            <div className="w-full md:w-44 flex flex-col">
              <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 px-3 uppercase tracking-wider mb-1">
                Guests
              </label>
              <div className="relative flex items-center">
                <Users className="absolute left-3.5 h-4 w-4 text-[#C59B27] dark:text-[#DFB75C]" />
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 bg-white dark:bg-[#071326] rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 focus:border-[#C59B27] appearance-none cursor-pointer transition-all"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3-4 Guests">3-4 Guests</option>
                  <option value="5+ Group">5+ Group</option>
                </select>
                <span className="absolute right-3 pointer-events-none text-slate-400 text-xs">▼</span>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto self-end pt-1 md:pt-0">
              <Button
                type="submit"
                className="w-full md:w-auto h-[46px] px-8 rounded-full font-serif text-base font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_0_rgba(223,183,92,0.39)] hover:shadow-[0_6px_20px_rgba(223,183,92,0.23)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-[#071326]" />
                <span>Search</span>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
