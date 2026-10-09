"use client"

import React, { useState, useEffect } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  MapPin, Star, Clock, Users, Check, X, ChevronDown, ChevronUp,
  Compass, ShoppingBag, Plane, Hotel, Shield, Camera, Sparkles, Award,
  ArrowRight, Calendar, Phone, MessageCircle, CheckCircle2, Building2,
} from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

interface BookingFormData {
  fullName: string; email: string; phone: string; participants: string
  preferredDate: string; packageTier: string; comments: string
}
interface FAQItem { question: string; answer: string; isOpen: boolean }

function SectionHeader({ badge, title, subtitle, light = false }: {
  badge: string; title: string; subtitle?: string; light?: boolean
}) {
  return (
    <div className="mb-10">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${light ? "bg-white/10 border border-white/20 text-[#DFB75C]" : "bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C]"}`}>
        <Sparkles className="w-3 h-3" />{badge}
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-[#0A1E3F] dark:text-white"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-base leading-relaxed max-w-2xl ${light ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>{subtitle}</p>}
    </div>
  )
}

export default function DelhiTourPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState("Premium")
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "", email: "", phone: "", participants: "1",
    preferredDate: "", packageTier: "Premium", comments: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({})
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    { question: "What are the visa requirements for India?", answer: "Ethiopian passport holders require an Indian tourist visa. Workdan handles the complete e-Visa application (available for 171+ countries) — documentation, submission, and tracking. Tourist e-Visas are typically approved within 3–5 working days.", isOpen: false },
    { question: "What is the best time to visit Delhi?", answer: "October to March is ideal — temperatures are pleasant (8–25 °C) and perfect for monument sightseeing. Summer (April–June) reaches 45 °C and is best avoided outdoors. Monsoon (July–September) brings lush greenery with occasional heavy rain but fewer crowds.", isOpen: false },
    { question: "Is Delhi safe for tourists?", answer: "Delhi is generally safe for tourists when sensible precautions are taken. Our tours include experienced local guides, 24/7 emergency support, and pre-vetted vehicles. We brief all travellers on local customs, dress codes for religious sites, and neighbourhood safety.", isOpen: false },
    { question: "Can I visit the Taj Mahal on this trip?", answer: "Yes — our Premium and Luxury packages include a full-day Agra trip (3 hrs by express train from Delhi) to visit the Taj Mahal, Agra Fort, and Mehtab Bagh at sunset. The Standard tier can add this as an optional day trip.", isOpen: false },
    { question: "What is included in the package price?", answer: "All packages include return flights, Indian visa processing, hotel accommodation, airport transfers, and listed tour activities. Premium adds private guided tours, Taj Mahal day trip, and cultural dinner evenings. Full inclusions confirmed at booking.", isOpen: false },
    { question: "How do I book?", answer: "Send your enquiry via WhatsApp or the booking form. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and guide you from visa to boarding — all handled under one roof.", isOpen: false },
  ])

  useEffect(() => { AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 }) }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof BookingFormData]) setFormErrors(prev => ({ ...prev, [name]: "" }))
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
      const message = `📍 *Booking Request — Delhi & Royal India Tour*\n\n👤 *Name:* ${fullName}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n🎯 *Package:* ${packageTier}\n👥 *Participants:* ${participants}\n📅 *Travel Date:* ${preferredDate}\n📝 *Notes:* ${comments || "N/A"}\n\nPlease confirm availability and next steps.`.trim()
      window.open(`https://wa.me/251906700007?text=${encodeURIComponent(message)}`, "_blank")
      setIsModalOpen(false)
      setFormData({ fullName: "", email: "", phone: "", participants: "1", preferredDate: "", packageTier: "Premium", comments: "" })
    }
  }

  const toggleFAQ = (index: number) => setFaqItems(prev => prev.map((item, i) => i === index ? { ...item, isOpen: !item.isOpen } : item))

  const activities = [
    { name: "Taj Mahal Day Trip", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Express train to Agra — Taj Mahal, Agra Fort & Mehtab Bagh sunset viewpoint" },
    { name: "Old Delhi Heritage Walk", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Red Fort, Jama Masjid, Chandni Chowk spice market & Humayun's Tomb" },
    { name: "Shopping at Markets", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Connaught Place, Dilli Haat, Lajpat Nagar & Janpath for textiles & crafts" },
    { name: "Rajasthan Day Tour", price: "Add-on", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Jaipur Pink City — Amber Fort, City Palace & Hawa Mahal in one day" },
  ]

  const packages = [
    {
      name: "Standard", price: "65,000", currency: "ETB", nights: "5 Nights / 6 Days", hotel: "3–4 ★ Hotel",
      color: "border-slate-200 dark:border-slate-700", badge: null,
      features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group Delhi city tour", "Red Fort & Humayun Tomb"],
    },
    {
      name: "Premium", price: "99,000", currency: "ETB", nights: "7 Nights / 8 Days", hotel: "5 ★ Hotel",
      color: "border-[#C59B27] dark:border-[#DFB75C]", badge: "Most Popular",
      features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private Delhi tour", "Taj Mahal Agra day trip", "Old Delhi food walk", "Rajasthan optional add-on"],
    },
    {
      name: "Luxury", price: "Contact Us", currency: "", nights: "10 Nights / 11 Days", hotel: "Oberoi / Leela Palace",
      color: "border-slate-200 dark:border-slate-700", badge: "Bespoke",
      features: ["Business class flights", "VIP visa processing", "Chauffeured transfers", "All meals included", "Private historian guide", "Golden Triangle tour", "Luxury train experience", "Personal concierge"],
    },
  ]

  const itinerary = [
    { day: "Day 1", title: "Arrival in Delhi", icon: Plane, activities: ["Airport pick-up in private transfer", "Hotel check-in & welcome briefing", "Evening walk in Lodhi Garden", "Welcome dinner at a rooftop restaurant"] },
    { day: "Day 2", title: "Old Delhi Heritage", icon: Camera, activities: ["Red Fort morning tour", "Jama Masjid & Chandni Chowk spice market", "Rickshaw ride through Old Delhi lanes", "Humayun's Tomb & Lodhi Colony murals"] },
    { day: "Day 3", title: "New Delhi Monuments", icon: Building2, activities: ["India Gate & Rajpath ceremonial boulevard", "Qutub Minar UNESCO World Heritage site", "Lotus Temple & Akshardham Temple", "Connaught Place evening shopping"] },
    { day: "Day 4", title: "Taj Mahal Agra Day Trip", icon: Compass, activities: ["Express train to Agra (2.5 hrs)", "Taj Mahal sunrise or afternoon visit", "Agra Fort & Itmad-ud-Daulah (Baby Taj)", "Return to Delhi — evening free"] },
    { day: "Day 5", title: "Shopping & Departure", icon: ShoppingBag, activities: ["Dilli Haat handicrafts & textiles", "Lajpat Nagar market for fabrics & spices", "Farewell North Indian thali lunch", "Airport transfer & departure"] },
  ]

  const included = [
    "Return flights (Addis Ababa ↔ Delhi)", "Indian Tourist Visa processing",
    "4-star / 5-star hotel (per tier)", "Private airport transfers both ways",
    "Professional licensed tour guide", "Taj Mahal day trip (Premium+)",
    "Entrance fees to all listed sites", "Daily breakfast at hotel",
  ]
  const excluded = [
    "Personal spending & shopping", "Travel insurance (recommended)",
    "Rajasthan day tour (Standard tier)", "Lunch & dinner (Standard tier)",
    "Gratuities / tips for guides",
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <Image src="/delhi.png" alt="Taj Mahal and Delhi heritage" fill className="object-cover object-center" priority quality={100} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#0A1E3F]/55 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 container mx-auto px-4 pb-14 pt-28">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 font-medium">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span><Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span><span className="text-[#DFB75C]">Delhi Tour</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-5">
            <MapPin className="w-3.5 h-3.5" />Delhi & Agra, India 🇮🇳
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 max-w-3xl">
            Delhi &<br />Royal India Tour
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Imperial Mughal grandeur, the world's most beautiful monument, vibrant bazaars, and the spice-laden soul of Old Delhi — India in all its glory.
          </p>
          <div className="flex flex-wrap gap-3">
            {[{ icon: Clock, label: "5–10 Days" }, { icon: Users, label: "1–20 Travelers" }, { icon: Star, label: "4.9 / 5 Rating", fill: true }, { icon: Award, label: "IATA Certified Agency" }].map(({ icon: Icon, label, fill }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                <Icon className={`w-4 h-4 text-[#DFB75C] ${fill ? "fill-[#DFB75C]" : ""}`} />{label}
              </div>
            ))}
            <div className="flex items-center gap-2 bg-[#DFB75C]/20 backdrop-blur-md border border-[#DFB75C]/50 px-5 py-2 rounded-full text-[#DFB75C] text-sm font-bold">From 65,000 ETB / person</div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#0A1E3F] border-y border-[#DFB75C]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#DFB75C]/15">
            {[{ icon: Shield, label: "Visa Guarantee", sub: "99% approval rate" }, { icon: Hotel, label: "5-Star Hotels", sub: "Partnered properties" }, { icon: Plane, label: "Return Flights", sub: "Included in price" }, { icon: Phone, label: "24/7 Support", sub: "Dedicated travel desk" }].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <div className="w-10 h-10 rounded-xl bg-[#DFB75C]/10 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-[#DFB75C]" /></div>
                <div><p className="text-white text-sm font-semibold">{label}</p><p className="text-slate-400 text-xs">{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN 2-COL LAYOUT */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-14 items-start">
          <div className="lg:col-span-2 space-y-20">

            {/* Activities */}
            <div data-aos="fade-up">
              <SectionHeader badge="Activities" title="Experiences Awaiting You" subtitle="Ancient wonders, royal palaces, spice markets, and the iconic Taj Mahal — all in one journey." />
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
                      <span className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full shadow ${price === "Included" ? "bg-emerald-500 text-white" : "bg-[#DFB75C] text-[#071326]"}`}>{price}</span>
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
                  <div key={pkg.name} onClick={() => setSelectedTier(pkg.name)} className={`relative rounded-2xl border-2 bg-white dark:bg-[#0D2245] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selectedTier === pkg.name ? "border-[#C59B27] dark:border-[#DFB75C] shadow-[0_8px_30px_rgba(197,155,39,0.2)]" : pkg.color + " shadow-sm"}`}>
                    {pkg.badge && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="whitespace-nowrap bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-[#071326] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow">{pkg.badge}</span></div>}
                    <div className="mt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">{pkg.name}</p>
                      <div className="flex items-end gap-1 mb-1"><span className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">{pkg.price}</span>{pkg.currency && <span className="text-sm text-slate-400 mb-0.5">{pkg.currency}</span>}</div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">{pkg.nights}</p>
                      <p className="text-xs font-medium text-[#C59B27] dark:text-[#DFB75C] mb-4">{pkg.hotel}</p>
                      <div className="space-y-2.5">{pkg.features.map((f) => (<div key={f} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] flex-shrink-0 mt-0.5" /><span className="text-xs text-slate-600 dark:text-slate-300">{f}</span></div>))}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div data-aos="fade-up">
              <SectionHeader badge="Itinerary" title="5-Day Sample Journey" subtitle="A flexible guide to your India experience — every day can be tailored to your pace." />
              <div className="mt-8 space-y-0">
                {itinerary.map(({ day, title, activities: acts, icon: Icon }, index) => (
                  <div key={day} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#0A1E3F] dark:bg-[#0D2245] border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0 shadow-md"><Icon className="w-5 h-5 text-[#DFB75C]" /></div>
                      {index < itinerary.length - 1 && <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#DFB75C]/40 to-transparent min-h-[32px]" />}
                    </div>
                    <div className="pb-8 flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] dark:text-[#DFB75C]">{day}</span>
                      <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3 mt-1">{title}</h4>
                      <ul className="space-y-1.5">{acts.map((a) => (<li key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><ArrowRight className="w-3.5 h-3.5 text-[#DFB75C] flex-shrink-0 mt-0.5" />{a}</li>))}</ul>
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
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" />Included</h4>
                  <ul className="space-y-3">{included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
                </div>
                <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2"><X className="w-5 h-5 text-rose-400" />Not Included</h4>
                  <ul className="space-y-3">{excluded.map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400"><X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800"><p className="text-xs text-slate-400 leading-relaxed">Travel insurance can be arranged — ask your consultant for options.</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5" data-aos="fade-left">
              <div className="bg-white dark:bg-[#0D2245] rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] px-6 pt-6 pb-8 relative">
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1 relative z-10">Starting from</p>
                  <div className="flex items-end gap-1 relative z-10"><span className="font-serif text-4xl font-bold text-[#DFB75C]">65,000</span><span className="text-slate-300 text-sm mb-1.5">ETB / person</span></div>
                  <p className="text-slate-400 text-xs mt-1.5 relative z-10">Premium from 99,000 ETB · Luxury on request</p>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {["Return flights included", "Visa processing handled", "Private airport transfers", "5-star hotel (Premium tier)", "Taj Mahal day trip (Premium+)"].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"><div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-[#C59B27] dark:text-[#DFB75C]" /></div>{f}</div>
                  ))}
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <button onClick={() => { setFormData(p => ({ ...p, packageTier: selectedTier })); setIsModalOpen(true) }} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_18px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"><Calendar className="w-4 h-4" />Book Delhi Tour</button>
                  <a href="https://wa.me/251906700007?text=Hi%2C%20I%27m%20interested%20in%20the%20Delhi%20Tour%20package." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all duration-300"><MessageCircle className="w-4 h-4" />Chat on WhatsApp</a>
                  <a href="tel:+251906700007" className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C] hover:text-[#C59B27] transition-all duration-300"><Phone className="w-4 h-4" />+251 906 700 007</a>
                </div>
              </div>
              <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DFB75C] text-[#DFB75C]" />)}</div><span className="font-bold text-[#0A1E3F] dark:text-white text-sm">4.9 / 5</span></div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">"Seeing the Taj Mahal at sunrise was life-changing. Workdan arranged everything perfectly — visa, hotel, guide, Agra train." — Tigist M., Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#071326] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up"><SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before booking your India journey." /></div>
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="80">
            {faqItems.map((faq, index) => (
              <div key={index} className={`rounded-2xl border overflow-hidden transition-all duration-300 ${faq.isOpen ? "border-[#C59B27]/60 dark:border-[#DFB75C]/40 shadow-md" : "border-slate-200/80 dark:border-slate-800"} bg-white dark:bg-[#0D2245]`}>
                <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-5 text-left flex items-center justify-between group" aria-expanded={faq.isOpen}>
                  <span className="font-semibold text-[#0A1E3F] dark:text-white pr-4 group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C] transition-colors">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${faq.isOpen ? "bg-[#DFB75C] text-[#071326]" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`}>{faq.isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</div>
                </button>
                {faq.isOpen && <div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-800/60 pt-4"><p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6"><Sparkles className="w-3.5 h-3.5" />Limited Spots Available</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">Ready to Discover<br />Royal India?</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Book your consultation today — our travel experts respond within 2 hours and handle everything from visa to boarding pass.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_6px_24px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"><Calendar className="w-5 h-5" />Book Your Tour Now</button>
            <a href="https://wa.me/251906700007?text=Hi%2C%20I%27d%20like%20a%20free%20consultation%20for%20the%20Delhi%20Tour." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"><MessageCircle className="w-5 h-5" />Free Consultation</a>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div><h3 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">Book Delhi Tour</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We'll confirm within 2 hours via WhatsApp</p></div>
                <button onClick={() => { setIsModalOpen(false); setFormErrors({}) }} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" aria-label="Close"><X className="w-5 h-5 text-slate-500" /></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Package Tier</label>
                  <select name="packageTier" value={formData.packageTier} onChange={handleInputChange} className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50">
                    <option value="Standard">Standard — From 65,000 ETB</option>
                    <option value="Premium">Premium — From 99,000 ETB</option>
                    <option value="Luxury">Luxury — Custom Quote</option>
                  </select>
                </div>
                {[{ id: "fullName", label: "Full Name *", type: "text", placeholder: "Your full name" }, { id: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" }, { id: "phone", label: "Phone / WhatsApp *", type: "tel", placeholder: "+251 9xx xxx xxxx" }].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{label}</label>
                    <input id={id} name={id} type={type} value={formData[id as keyof BookingFormData]} onChange={handleInputChange} placeholder={placeholder} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 transition-colors ${formErrors[id as keyof BookingFormData] ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors[id as keyof BookingFormData] && <p className="text-red-500 text-xs mt-1">{formErrors[id as keyof BookingFormData]}</p>}
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="participants" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Travelers *</label>
                    <input id="participants" name="participants" type="number" min="1" max="20" value={formData.participants} onChange={handleInputChange} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${formErrors.participants ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors.participants && <p className="text-red-500 text-xs mt-1">{formErrors.participants}</p>}
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Travel Date *</label>
                    <input id="preferredDate" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleInputChange} min={new Date().toISOString().split("T")[0]} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${formErrors.preferredDate ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{formErrors.preferredDate}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="comments" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">Special Requests</label>
                  <textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange} placeholder="Taj Mahal visit, Rajasthan extension, honeymoon package..." rows={3} className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => { setIsModalOpen(false); setFormErrors({}) }} className="flex-1 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 py-3 rounded-full text-sm font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] transition-all duration-300">Send via WhatsApp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
