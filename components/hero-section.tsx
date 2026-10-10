"use client"

import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import { cdnVideoUrl } from "@/lib/cdn"
import { useLanguage } from "@/components/language-provider"
export default function HeroSection() {
  const { t } = useLanguage()

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
          <source src={cdnVideoUrl("/hero video.mp4")} type="video/mp4" />
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
            {t("hero.badge")}
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
          {t("hero.title1")}<br />{t("hero.title2")}
        </motion.h1>

      </div>
    </section>
  )
}
