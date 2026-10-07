"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"
import Image from "next/image"
import {
  BriefcaseBusiness,
  PlaneTakeoff,
  FileCheck,
  Compass,
  Sparkles,
  ShieldCheck,
  Award,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  Star,
  Play,
} from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules"

import HeroSection from "@/components/hero-section"
import DestinationCard from "@/components/destination-card"
import ServiceCard from "@/components/service-card"
import StoryTestimonial from "@/components/story-testimonial"
import TimezonesDisplay from "@/components/time-zones-dIsplay"
import AirplaneReveal from "@/components/airplane-reveal"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    })

    // Load TikTok embed.js after blockquotes are in the DOM
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
    if (!existing) {
      const script = document.createElement("script")
      script.src = "https://www.tiktok.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const tiktokVideos = [
    { id: "7693554664184499463" },
    { id: "7541752458876439814" },
    { id: "7578119720675577099" },
  ]

  const destinationItems = [
    {
      title: "Dubai, UAE",
      description: "Immerse in futuristic marvels, desert glamping under Arabian skies, world-class dining, and ultra-luxurious beachfront resorts.",
      imageSrc: "/dubai-front.png",
      tags: ["Modern Luxury", "Desert Safari", "Skyline"],
      price: "$1,890+",
      duration: "5-7 Days",
      link: "/packages/dubai-tour",
    },
    {
      title: "Istanbul, Turkey",
      description: "Where East meets West along the Bosphorus Strait. Explore Ottoman palaces, the Hagia Sophia, and hot air balloons over Cappadocia.",
      imageSrc: "/turkey-front.png",
      tags: ["Historic Marvels", "Aegean Coast", "Bosphorus"],
      price: "$1,680+",
      duration: "6-8 Days",
      link: "/packages/turkey-tour",
    },
  ]


  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <HeroSection />

        {/* Unified Trust & Accreditation Strip */}
        <div className="relative z-20 -mt-12 sm:-mt-16">
          <AirplaneReveal direction="left-to-right">
            <section className="container mx-auto px-4 max-w-7xl">
              <div className="bg-white dark:bg-[#0D2245] rounded-[2rem] py-10 sm:py-12 px-6 sm:px-10 border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] shadow-xs flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-[#0A1E3F] dark:text-white block">IATA Certified</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Accredited Global Agency</span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] shadow-xs flex-shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-[#0A1E3F] dark:text-white block">Dual Hub Presence</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Addis Ababa & UAE Offices</span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] shadow-xs flex-shrink-0">
                      <Star className="w-6 h-6 fill-[#DFB75C]" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-[#0A1E3F] dark:text-white block">5-Star Rated Service</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">5,000+ Satisfied Travelers</span>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] shadow-xs flex-shrink-0">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-[#0A1E3F] dark:text-white block">24/7 Concierge</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Dedicated Tour Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AirplaneReveal>
        </div>


        {/* Curated Destinations Section */}
        <AirplaneReveal direction="right-to-left">
          <section id="destinations" className="py-24 container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Handpicked Itineraries</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                Destinations That Tell a Story
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Each destination is meticulously curated by our travel architects to deliver unforgettable memories, private encounters, and seamless luxury.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              {destinationItems.map((item, index) => (
                <div key={item.title} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                  <DestinationCard {...item} />
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-serif text-sm font-bold text-[#DFB75C] bg-transparent border-2 border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] shadow-sm hover:shadow-[0_4px_14px_0_rgba(223,183,92,0.39)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>View All Exclusive Packages</span>
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
                  VIP Travel Club
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
                  Join Our Telegram Channel for Exclusive Offers & Instant Alerts
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Be the first to receive flash flight specials, seasonal holiday promotions, luxury hotel perks, and visa policy updates.
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
                  <span>Join Telegram Channel</span>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Comprehensive Travel Concierge</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                Our Signature Services
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you are arranging a family holiday, corporate establishment, or international visa processing, we provide turnkey excellence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 pt-6">
              <ServiceCard
                title="Travel Planning & Consultation"
                description="Custom itinerary building, luxury hotel bookings, airline reservations, and VIP ground transfers tailored to your unique travel style."
                icon={PlaneTakeoff}
                features={[
                  "Personalized vacation, honeymoon & family itineraries",
                  "Verified 5-star hotel & private resort selections",
                  "Direct airline reservations with optimal schedules",
                  "Expert destination insights and 24/7 advisory",
                ]}
                popular={true}
                link="/services/travel-planning-consultation"
              />

              <ServiceCard
                title="UAE Business Consultant Activities"
                description="End-to-end strategic advisory for entrepreneurs and enterprises setting up operations, branch offices, and trade in the UAE."
                icon={BriefcaseBusiness}
                features={[
                  "Mainland, Free Zone, and Offshore company formation",
                  "Trade licenses, investor visas & corporate bank setup",
                  "Legal document processing and embassy attestations",
                  "Strategic market entry advisory & local sponsorship",
                ]}
                popular={true}
                link="/services/uae-business-consultant-activities"
              />

              <ServiceCard
                title="Global Visa Assistance & Concierge"
                description="Reliable, high-accuracy visa filing support and embassy documentation management for tourists, business travelers, and students."
                icon={FileCheck}
                features={[
                  "Tourist, Business, Transit, and Medical visa filing",
                  "Thorough document review to maximize approval rate",
                  "Embassy appointment scheduling & interview preparation",
                  "Expedited tracking and real-time status notifications",
                ]}
                popular={false}
                link="/services/visa-services"
              />
            </div>
          </section>
        </AirplaneReveal>

        {/* TikTok Social Proof Section */}
        <AirplaneReveal direction="left-to-right">
          <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                  <span>Follow @workdantravel</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                  See Our Journeys in Action
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Behind-the-scenes moments, destination highlights, and travel inspiration — straight from our TikTok.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                {tiktokVideos.map((video) => (
                  <div key={video.id} className="w-full flex justify-center">
                    <blockquote
                      className="tiktok-embed"
                      cite={`https://www.tiktok.com/@workdantravel/video/${video.id}`}
                      data-video-id={video.id}
                      data-embed-from="embed_page"
                      style={{ maxWidth: "325px", minWidth: "0px", width: "100%" }}
                    >
                      <section>
                        <a
                          target="_blank"
                          href="https://www.tiktok.com/@workdantravel?refer=embed"
                          rel="noopener noreferrer"
                        >
                          @workdantravel
                        </a>
                      </section>
                    </blockquote>
                  </div>
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
                  Follow Us on TikTok
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                  <Star className="w-3.5 h-3.5 fill-[#DFB75C]" />
                  <span>Client Experiences</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                  Traveler Chronicles
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
                  Discover how we have transformed travel dreams into seamless, lifetime memories for our esteemed guests.
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
                className="pb-12"
              >
                <SwiperSlide>
                  <StoryTestimonial
                    name="Eliyas Birhanu"
                    journey="Bespoke Dubai & Luxury Leisure Tour"
                    quote="The entire journey was impeccably coordinated. From airport VIP reception to our beachfront villa, Workdan took care of every single detail with true professionalism. Highly recommended for anyone wanting hassle-free travel."
                    location="Addis Ababa, Ethiopia"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StoryTestimonial
                    name="Meaza Abebe"
                    journey="UAE Business Setup & Visa Consultation"
                    quote="Navigating UAE company registration and residency visas can be daunting, but Workdan’s team in Sharjah made it effortless. Their local knowledge, integrity, and swift communication are unmatched."
                    location="Dubai, UAE"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <StoryTestimonial
                    name="Dawit Tadesse"
                    journey="China Trade Fair & Guangzhou Tour"
                    quote="Attending the Canton Fair was seamless with their guided package. Hotel bookings, local translation, and transportation were perfectly on schedule. Will definitely book our next group tour with Workdan."
                    location="Guangzhou / Addis Ababa"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </AirplaneReveal>

        {/* About Heritage & Mission Section */}
        <AirplaneReveal direction="left-to-right">
          <section id="about" className="py-24 container mx-auto px-4 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div data-aos="fade-right">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>Our Heritage & Vision</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white mb-6 tracking-tight">
                  Crafting Stories That Stay With You Forever
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                  Workdan Tour & Travel Agent was founded on the fundamental principle that travel should transcend ordinary sightseeing — it should be an enriching journey that sparks inspiration and connects people across continents.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                  With established offices in Addis Ababa, Ethiopia and Sharjah, UAE, we bridge international destinations with bespoke service, certified air ticketing, luxury holiday curation, and professional business establishment solutions.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800">
                    <span className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white block">10+</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Years Combined Experience</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800">
                    <span className="font-serif text-3xl font-bold text-[#C59B27] dark:text-[#DFB75C] block">100%</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">IATA Compliant Standards</span>
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
                    "Travel is the only thing you buy that makes you richer."
                  </p>
                  <span className="text-[11px] text-[#9E7B1C] dark:text-[#DFB75C] font-bold block mt-1">
                    Workdan Travel Philosophy
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Everything you need to know about booking with Workdan Tour & Travel.
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              {[
                {
                  q: "How do I book a tour or flight with Workdan?",
                  a: "You can book directly through our website using the 'Plan Your Journey' booking form, or contact us via WhatsApp (+251 906700007) or email. Our team will respond within minutes to confirm your booking.",
                },
                {
                  q: "What destinations do you cover?",
                  a: "We specialize in international luxury packages including Dubai (UAE), China (Guangzhou & Shanghai), Istanbul (Turkey), Bangkok & Phuket (Thailand), and Delhi (India). We also handle custom destinations upon request.",
                },
                {
                  q: "Do you provide visa assistance?",
                  a: "Yes — our Global Visa Concierge service covers tourist, business, transit, and medical visas. We handle documentation review, embassy appointment scheduling, and provide real-time status updates.",
                },
                {
                  q: "What does the UAE Business Consultation service include?",
                  a: "We offer end-to-end UAE company formation for Mainland, Free Zone, and Offshore setups. This includes trade licenses, investor visas, corporate bank account setup, legal document processing, and embassy attestations.",
                },
                {
                  q: "Is IATA certification important and are you certified?",
                  a: "Yes — IATA (International Air Transport Association) certification ensures we meet global aviation and ticketing standards. Workdan Tour & Travel is fully IATA accredited, guaranteeing verified airline ticketing and financial security for clients.",
                },
                {
                  q: "Do you have offices in both Ethiopia and the UAE?",
                  a: "Yes. Our main office is at Megenagna Wach Building, 2nd Floor, Addis Ababa, Ethiopia. Our regional office is at Sharjah Business Center, Ground Floor, UAE. Both offices provide 24/7 concierge support.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0D2245] shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <span className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white group-open:text-[#C59B27] dark:group-open:text-[#DFB75C] transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] text-sm font-bold group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="150">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                Still have questions? Our team is happy to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-sm font-bold text-[#DFB75C] border-2 border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Our Team</span>
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
