"use client"

import React, { useState, useEffect } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  MapPin, Star, Clock, Users, Check, X, ChevronDown, ChevronUp,
  Compass, Anchor, ShoppingBag, Plane, Hotel, Shield, Camera, Sparkles, Award,
  ArrowRight, Calendar, Phone, MessageCircle, CheckCircle2,
} from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

interface BookingFormData {
  fullName: string
  email: string
  phone: string
  participants: string
  preferredDate: string
  packageTier: string
  comments: string
}

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

/* ─── Small reusable badge + heading ─── */
function SectionHeader({ badge, title, subtitle, light = false }: {
  badge: string; title: string; subtitle?: string; light?: boolean
}) {
  return (
    <div className="mb-10">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
        light
          ? "bg-white/10 border border-white/20 text-[#DFB75C]"
          : "bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C]"
      }`}>
        <Sparkles className="w-3 h-3" />
        {badge}
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
        light ? "text-white" : "text-[#0A1E3F] dark:text-white"
      }`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed max-w-2xl ${light ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function DubaiTourPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState("Premium")
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "", email: "", phone: "", participants: "1",
    preferredDate: "", packageTier: "Premium", comments: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({})
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What's the best time to visit Dubai?",
      answer: "November to March offers the most comfortable weather (18–30 °C) and is ideal for outdoor activities, desert safaris, and beach days. Summer months are intensely hot but indoor attractions remain world-class and hotel rates drop significantly.",
      isOpen: false,
    },
    {
      question: "Do I need a visa for Dubai?",
      answer: "Visa requirements vary by nationality. Ethiopian passport holders require a pre-approved UAE visa. Workdan handles your complete visa application — we have a 99 % approval record and manage all documentation, embassy submissions, and tracking.",
      isOpen: false,
    },
    {
      question: "What is included in the package price?",
      answer: "All packages include return flights, hotel accommodation, airport transfers, visa processing, and listed tour activities. Premium and Luxury tiers add private guides, desert safari with BBQ dinner, and 5-star dining experiences. A detailed inclusions sheet is shared on booking.",
      isOpen: false,
    },
    {
      question: "Can the itinerary be customised?",
      answer: "Absolutely. Every Workdan package is built around your preferences. Extend your stay, swap activities, add a yacht charter, or arrange a private shopping concierge — simply mention your wish list during consultation and we craft it around your budget.",
      isOpen: false,
    },
    {
      question: "Are these tours family-friendly?",
      answer: "Yes. We accommodate solo travellers, couples, families with young children, and group corporate trips. Theme park days, kid-friendly beaches, and family suites at partnered hotels can all be arranged on request.",
      isOpen: false,
    },
    {
      question: "How do I confirm my booking?",
      answer: "Send your enquiry via WhatsApp or the booking form below. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and guide you through the full process — from visa to boarding.",
      isOpen: false,
    },
  ])

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 })
  }, [])

  /* ── form handlers ── */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof BookingFormData]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const errors: Partial<BookingFormData> = {}
    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address"
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.participants || parseInt(formData.participants) < 1) errors.participants = "At least 1 participant"
    if (!formData.preferredDate) errors.preferredDate = "Please select a date"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const { fullName, email, phone, participants, preferredDate, packageTier, comments } = formData
      const message = `
📍 *Booking Request — Dubai Tour*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🎯 *Package:* ${packageTier}
👥 *Participants:* ${participants}
📅 *Travel Date:* ${preferredDate}
📝 *Notes:* ${comments || "N/A"}

Please confirm availability and next steps.`.trim()

      window.open(`https://wa.me/251906700007?text=${encodeURIComponent(message)}`, "_blank")
      setIsModalOpen(false)
      setFormData({ fullName: "", email: "", phone: "", participants: "1", preferredDate: "", packageTier: "Premium", comments: "" })
    }
  }

  const toggleFAQ = (index: number) => {
    setFaqItems(prev => prev.map((item, i) => i === index ? { ...item, isOpen: !item.isOpen } : item))
  }

  /* ─── data ─── */

  const itinerary = [
    {
      day: "Day 1", title: "Arrival & Downtown Dubai",
      activities: ["Airport pick-up in private transfer", "Hotel check-in & welcome briefing", "Evening at Burj Khalifa observation deck (124th floor)", "Dubai Fountain show & The Dubai Mall"],
      icon: Plane,
    },
    {
      day: "Day 2", title: "Desert Safari Adventure",
      activities: ["Morning free / optional morning city tour", "Afternoon: Red dune bashing in 4×4 Land Cruiser", "Camel ride & sandboarding", "Bedouin camp BBQ dinner with live entertainment"],
      icon: Compass,
    },
    {
      day: "Day 3", title: "Heritage & Old Dubai",
      activities: ["Al Fahidi Historical District walking tour", "Dubai Museum visit", "Abra ride across Dubai Creek", "Gold Souk & Spice Souk exploration", "Sunset at Dubai Frame"],
      icon: Camera,
    },
    {
      day: "Day 4", title: "Palm Jumeirah & Marina",
      activities: ["Palm Jumeirah monorail to Atlantis", "Aquaventure Waterpark (optional, Premium+)", "Dubai Marina Walk & JBR beach", "Evening yacht dinner cruise (Luxury tier)"],
      icon: Anchor,
    },
    {
      day: "Day 5", title: "Shopping & Departure",
      activities: ["Morning: Mall of the Emirates or Dubai Mall", "Ski Dubai (optional)", "Farewell lunch at a rooftop restaurant", "Airport drop-off & departure"],
      icon: ShoppingBag,
    },
  ]

  const included = [
    "Return flights (Addis Ababa ↔ Dubai)", "UAE Tourist Visa processing",
    "5-star / 4-star hotel (per tier)", "Private airport transfers both ways",
    "Professional licensed tour guide", "Desert Safari with BBQ dinner",
    "Entrance fees to all listed sites", "Daily breakfast at hotel",
  ]
  const excluded = [
    "Personal spending & shopping", "Travel insurance (recommended)",
    "Optional activities not in itinerary", "Lunch & dinner (Standard tier)",
    "Gratuities / tips for guides",
  ]

  const packages = [
    {
      name: "Standard",
      price: "74,657",
      currency: "ETB",
      nights: "5 Nights / 6 Days",
      hotel: "3–4 ★ Hotel",
      color: "border-slate-200 dark:border-slate-700",
      badge: null,
      features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group city tour", "Desert safari (shared)"],
    },
    {
      name: "Premium",
      price: "115,000",
      currency: "ETB",
      nights: "7 Nights / 8 Days",
      hotel: "5 ★ Hotel",
      color: "border-[#C59B27] dark:border-[#DFB75C]",
      badge: "Most Popular",
      features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private city tour", "Desert safari (private 4×4)", "Burj Khalifa At The Top", "Dubai Marina cruise"],
    },
    {
      name: "Luxury",
      price: "Contact Us",
      currency: "",
      nights: "10 Nights / 11 Days",
      hotel: "Burj Al Arab / Atlantis",
      color: "border-slate-200 dark:border-slate-700",
      badge: "Bespoke",
      features: ["Business class flights", "Visa VIP processing", "Chauffeured Rolls-Royce", "All meals included", "Private guide all days", "Private yacht evening", "Helicopter city tour", "Personal concierge service"],
    },
  ]

  const activities = [
    {
      name: "City Tour",
      price: "100 AED",
      img: "/city tour image.png",
      desc: "Guided tour of Dubai's iconic landmarks — Burj Khalifa, Dubai Frame, Downtown & more",
    },
    {
      name: "Desert Safari",
      price: "100 AED",
      img: "/ChatGPT Image Oct 8, 2026, 10_31_03 PM.png",
      desc: "4×4 dune bashing, camel rides, sandboarding & traditional Bedouin BBQ dinner",
    },
    {
      name: "Cruise Dinner",
      price: "150 AED",
      img: "/cruise dinner.png",
      desc: "Elegant dinner cruise on Dubai Creek or Marina — breathtaking skyline views",
    },
    {
      name: "Dhow Cruise",
      price: "Included",
      img: "/cruise dinner.png",
      desc: "Traditional wooden dhow sunset sail on Dubai Creek — a timeless experience",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <Image
          src="/ChatGPT Image Oct 8, 2026, 10_18_51 PM.png"
          alt="Dubai luxury skyline at dusk"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#0A1E3F]/55 to-transparent" />
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative z-10 container mx-auto px-4 pb-14 pt-28">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 font-medium">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Dubai Tour</span>
          </nav>

          {/* location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-5">
            <MapPin className="w-3.5 h-3.5" />
            Dubai, United Arab Emirates 🇦🇪
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 max-w-3xl">
            Dubai<br />Luxury Tour
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Futuristic skyscrapers, golden desert safaris, world-class dining, and ultra-luxurious beachfront resorts — an Arabian journey unlike any other.
          </p>

          {/* stat pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock,  label: "5–10 Days" },
              { icon: Users,  label: "1–20 Travelers" },
              { icon: Star,   label: "4.9 / 5 Rating", fill: true },
              { icon: Award,  label: "IATA Certified Agency" },
            ].map(({ icon: Icon, label, fill }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                <Icon className={`w-4 h-4 text-[#DFB75C] ${fill ? "fill-[#DFB75C]" : ""}`} />
                {label}
              </div>
            ))}
            <div className="flex items-center gap-2 bg-[#DFB75C]/20 backdrop-blur-md border border-[#DFB75C]/50 px-5 py-2 rounded-full text-[#DFB75C] text-sm font-bold">
              From 74,657 ETB / person
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST BAR ═══════════════════ */}
      <div className="bg-[#0A1E3F] border-y border-[#DFB75C]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#DFB75C]/15">
            {[
              { icon: Shield,   label: "Visa Guarantee",   sub: "99% approval rate" },
              { icon: Hotel,    label: "5-Star Hotels",    sub: "Partnered properties" },
              { icon: Plane,    label: "Return Flights",   sub: "Included in price" },
              { icon: Phone,    label: "24/7 Support",     sub: "Dedicated travel desk" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <div className="w-10 h-10 rounded-xl bg-[#DFB75C]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#DFB75C]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{label}</p>
                  <p className="text-slate-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════ MAIN 2-COL LAYOUT ═══════════════════ */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-14 items-start">

          {/* ── Left Content ── */}
          <div className="lg:col-span-2 space-y-20">

            {/* Activities */}
            <div data-aos="fade-up">
              <SectionHeader
                badge="Activities"
                title="Experiences Awaiting You"
                subtitle="Premium activities available as add-ons or already included in select package tiers."
              />
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {activities.map(({ name, price, img, desc }) => (
                  <div key={name} className="group relative rounded-2xl overflow-hidden aspect-video shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <Image src={img} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" quality={90} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-serif text-xl font-bold text-white mb-1">{name}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                      </div>
                      <span className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full shadow ${
                        price === "Included"
                          ? "bg-emerald-500 text-white"
                          : "bg-[#DFB75C] text-[#071326]"
                      }`}>
                        {price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Tiers */}
            <div data-aos="fade-up">
              <SectionHeader badge="Packages" title="Choose Your Experience" subtitle="All packages are fully customisable. Prices shown per person — group discounts available." />
              <div className="grid md:grid-cols-3 gap-5 mt-8">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    onClick={() => setSelectedTier(pkg.name)}
                    className={`relative rounded-2xl border-2 bg-white dark:bg-[#0D2245] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      selectedTier === pkg.name
                        ? "border-[#C59B27] dark:border-[#DFB75C] shadow-[0_8px_30px_rgba(197,155,39,0.2)]"
                        : pkg.color + " shadow-sm"
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="whitespace-nowrap bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-[#071326] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow">
                          {pkg.badge}
                        </span>
                      </div>
                    )}
                    <div className="mt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">{pkg.name}</p>
                      <div className="flex items-end gap-1 mb-1">
                        <span className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">{pkg.price}</span>
                        {pkg.currency && <span className="text-sm text-slate-400 mb-0.5">{pkg.currency}</span>}
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">{pkg.nights}</p>
                      <p className="text-xs font-medium text-[#C59B27] dark:text-[#DFB75C] mb-4">{pkg.hotel}</p>
                      <div className="space-y-2.5">
                        {pkg.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-600 dark:text-slate-300">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div data-aos="fade-up">
              <SectionHeader badge="Itinerary" title="5-Day Sample Journey" subtitle="A flexible guide to your Dubai experience — every day can be tailored to your pace." />
              <div className="mt-8 space-y-0">
                {itinerary.map(({ day, title, activities, icon: Icon }, index) => (
                  <div key={day} className="flex gap-5">
                    {/* timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1E3F] dark:bg-[#0D2245] border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-5 h-5 text-[#DFB75C]" />
                      </div>
                      {index < itinerary.length - 1 && (
                        <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#DFB75C]/40 to-transparent min-h-[32px]" />
                      )}
                    </div>
                    {/* content */}
                    <div className="pb-8 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] dark:text-[#DFB75C]">{day}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{title}</h4>
                      <ul className="space-y-1.5">
                        {activities.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <ArrowRight className="w-3.5 h-3.5 text-[#DFB75C] flex-shrink-0 mt-0.5" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Excluded */}
            <div data-aos="fade-up">
              <SectionHeader badge="Package Details" title="What's Included" />
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Included
                  </h4>
                  <ul className="space-y-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-rose-400" />
                    Not Included
                  </h4>
                  <ul className="space-y-3">
                    {excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                        <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 leading-relaxed">Travel insurance can be arranged — ask your consultant for options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sticky Booking Card ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5" data-aos="fade-left">
              {/* Pricing card */}
              <div className="bg-white dark:bg-[#0D2245] rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] px-6 pt-6 pb-8 relative">
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1 relative z-10">Starting from</p>
                  <div className="flex items-end gap-1 relative z-10">
                    <span className="font-serif text-4xl font-bold text-[#DFB75C]">74,657</span>
                    <span className="text-slate-300 text-sm mb-1.5">ETB / person</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1.5 relative z-10">Premium from 115,000 ETB · Luxury on request</p>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {[
                    "Return flights included",
                    "Visa processing handled",
                    "Private airport transfers",
                    "5-star hotel (Premium tier)",
                    "Desert safari with BBQ dinner",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#C59B27] dark:text-[#DFB75C]" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <button
                    onClick={() => { setFormData(p => ({ ...p, packageTier: selectedTier })); setIsModalOpen(true) }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_18px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Dubai Tour
                  </button>
                  <a
                    href="https://wa.me/251906700007?text=Hi%2C%20I%27m%20interested%20in%20the%20Dubai%20Tour%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+251906700007"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C] hover:text-[#C59B27] transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    +251 906 700 007
                  </a>
                </div>
              </div>

              {/* Rating card */}
              <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DFB75C] text-[#DFB75C]" />)}
                  </div>
                  <span className="font-bold text-[#0A1E3F] dark:text-white text-sm">4.9 / 5</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  "Workdan made our Dubai trip absolutely flawless. Every detail was handled perfectly — from the visa to the desert safari." — Selam T., Addis Ababa
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#071326] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before booking your Dubai journey." />
          </div>
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="80">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  faq.isOpen
                    ? "border-[#C59B27]/60 dark:border-[#DFB75C]/40 shadow-md"
                    : "border-slate-200/80 dark:border-slate-800"
                } bg-white dark:bg-[#0D2245]`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group"
                  aria-expanded={faq.isOpen}
                >
                  <span className="font-semibold text-[#0A1E3F] dark:text-white pr-4 group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    faq.isOpen ? "bg-[#DFB75C] text-[#071326]" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                  }`}>
                    {faq.isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {faq.isOpen && (
                  <div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#DFB75C]/8 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Spots Available
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Ready to Experience<br />Dubai?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book your consultation today — our travel experts respond within 2 hours and handle everything from visa to boarding pass.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_6px_24px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book Your Tour Now
            </button>
            <a
              href="https://wa.me/251906700007?text=Hi%2C%20I%27d%20like%20a%20free%20consultation%20for%20the%20Dubai%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BOOKING MODAL ═══════════════════ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">Book Dubai Tour</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We'll confirm within 2 hours via WhatsApp</p>
                </div>
                <button
                  onClick={() => { setIsModalOpen(false); setFormErrors({}) }}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Package tier selector */}
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Package Tier</label>
                  <select
                    name="packageTier"
                    value={formData.packageTier}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50"
                  >
                    <option value="Standard">Standard — From 74,657 ETB</option>
                    <option value="Premium">Premium — From 115,000 ETB</option>
                    <option value="Luxury">Luxury — Custom Quote</option>
                  </select>
                </div>

                {[
                  { id: "fullName",  label: "Full Name *",          type: "text",  placeholder: "Your full name" },
                  { id: "email",     label: "Email Address *",      type: "email", placeholder: "your@email.com" },
                  { id: "phone",     label: "Phone / WhatsApp *",   type: "tel",   placeholder: "+251 9xx xxx xxxx" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{label}</label>
                    <input
                      id={id} name={id} type={type}
                      value={formData[id as keyof BookingFormData]}
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 transition-colors ${
                        formErrors[id as keyof BookingFormData] ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {formErrors[id as keyof BookingFormData] && (
                      <p className="text-red-500 text-xs mt-1">{formErrors[id as keyof BookingFormData]}</p>
                    )}
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="participants" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Travelers *</label>
                    <input
                      id="participants" name="participants" type="number" min="1" max="20"
                      value={formData.participants}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${
                        formErrors.participants ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {formErrors.participants && <p className="text-red-500 text-xs mt-1">{formErrors.participants}</p>}
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Travel Date *</label>
                    <input
                      id="preferredDate" name="preferredDate" type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${
                        formErrors.preferredDate ? "border-red-400" : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {formErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{formErrors.preferredDate}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="comments" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Special Requests</label>
                  <textarea
                    id="comments" name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Custom activities, dietary needs, honeymoon package..."
                    rows={3}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setIsModalOpen(false); setFormErrors({}) }}
                    className="flex-1 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-full text-sm font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] transition-all duration-300"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
