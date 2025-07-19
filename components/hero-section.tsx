"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/hero-section/Time TOUR.png?height=800&width=1200",
    title: "Explore The World",
    subtitle: "",
    buttonText: "Book Now",
    buttonLink: "/packages/dubai-tour",
  },
  {
    id: 2,
    image: "/hero-section/flight.png?height=800&width=1200",
    title: "Book Your Flight",
    subtitle: "Seamless travel starts here.",
    buttonText: "Book Now",
    buttonLink: "/booking?page=flight",
  },
  {
    id: 3,
    image: "/hero-section/travel-planning-consultation.png?height=800&width=1200",
    title: "Plan Your Journey",
    subtitle: "Expert travel consultation.",
    buttonText: "Book Now",
    buttonLink: "/services/travel-planning-consultation",
  },
  {
    id: 4,
    image: "/hero-section/hotel.png?height=800&width=1200",
    title: "Luxury Stays",
    subtitle: "Book your dream hotel.",
    buttonText: "Book Now",
    buttonLink: "/booking?page=hotel",
  },
  {
    id: 5,
    image: "/hero-section/business-consultation.png?height=800&width=1200",
    title: "Business Solutions",
    subtitle: "Your UAE partner.",
    buttonText: "Book Now",
    buttonLink: "/services/uae-business-consultant-activities",
  }
]

const textVariants = {
  hidden: {
    opacity: 8,
    y: 50,
    scale: 0.9,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 5,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const AnimatedText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
    const words = text.split(" ")

    return (
      <motion.div className={className} initial="hidden" animate="visible">
        {words.map((word, i) => (
          <motion.span key={i} custom={i + delay} variants={wordVariants} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
<section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          // key={currentSlide}
          // initial={{ opacity: 0, scale: 1.1 }}
          // animate={{ opacity: 1, scale: 1 }}
          // exit={{ opacity: 0, scale: 0.9 }}
          // transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-slate-500"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b" />        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-4xl mx-auto"
            >
              {/* Main Title with Gradient */}
              <AnimatedText
                text={slides[currentSlide].title}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r text-blue-950 bg-clip-text text-transparent leading-tight"
              />

              {/* Subtitle */}
              <motion.div custom={2} variants={textVariants} className="mb-8">
                <p className="text-xl md:text-2xl font-bold lg:text-3xl text-blue-600 tracking-wide">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl group"
                  asChild
                >
                  <a href={slides[currentSlide].buttonLink} className="flex items-center gap-2">
                    <span className="relative z-10">{slides[currentSlide].buttonText}</span>
                    <Play className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          {/* <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isAutoPlaying ? "bg-white/20 text-white" : "bg-white/10 text-white/60"
            } hover:bg-white/30`}
          >
            <Play className={`w-4 h-4 ${isAutoPlaying ? "" : "opacity-50"}`} />
          </button> */}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
      </button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-white/60">
          {/* <span className="text-sm mb-2 font-light">Scroll to explore</span> */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
