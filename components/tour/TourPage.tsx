"use client"

import React, { useState, useEffect } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  MapPin, Star, Clock, Users, Check, X, ChevronDown, ChevronUp,
  Compass, Anchor, ShoppingBag, Plane, Hotel, Shield, Camera, Sparkles, Award,
  ArrowRight, Calendar, Phone, MessageCircle, CheckCircle2, Building2,
  type LucideIcon,
} from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLanguage } from "@/components/language-provider"
import type { TourConfig, TourPackage, TourActivity, DayIcon } from "@/lib/tours"

interface BookingFormData {
  fullName: string; email: string; phone: string; participants: string
  preferredDate: string; packageTier: string; comments: string
}

const dayIcons: Record<DayIcon, LucideIcon> = { Plane, Camera, Anchor, Compass, ShoppingBag, Building2 }

const tierBorder = (name: string) =>
  name === "Premium" ? "border-[#C59B27] dark:border-[#DFB75C]" : "border-slate-200 dark:border-slate-700"

function SectionHeader({ badge, title, subtitle, light = false }: {
  badge: string; title: string; subtitle?: string; light?: boolean
}) {
  return (
    <div className="mb-10">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
        light ? "bg-white/10 border border-white/20 text-[#DFB75C]"
              : "bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C]"
      }`}>
        <Sparkles className="w-3 h-3" />{badge}
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-[#0A1E3F] dark:text-white"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-base leading-relaxed max-w-2xl ${light ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}>{subtitle}</p>}
    </div>
  )
}

const initialForm: BookingFormData = {
  fullName: "", email: "", phone: "", participants: "1", preferredDate: "", packageTier: "Premium", comments: "",
}

export default function TourPage({ tour }: { tour: TourConfig }) {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState("Premium")
  const [formData, setFormData] = useState<BookingFormData>(initialForm)
  // Errors hold translation keys (English text), translated at render.
  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({})
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [detail, setDetail] = useState<TourPackage | null>(null)
  const [activity, setActivity] = useState<TourActivity | null>(null)

  useEffect(() => { AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 }) }, [])

  // Close the package or activity details with Escape.
  useEffect(() => {
    if (!detail && !activity) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDetail(null); setActivity(null) } }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [detail, activity])

  const tourName = t(tour.shortName)
  const prices = Object.fromEntries(tour.packages.map((p) => [p.name, p.price]))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof BookingFormData]) setFormErrors((prev) => ({ ...prev, [name]: "" }))
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
    if (!validateForm()) return
    const { fullName, email, phone, participants, preferredDate, packageTier, comments } = formData
    // WhatsApp message stays in English so the travel desk can read every request.
    const message = `📍 *Booking Request — ${tour.waName}*\n\n👤 *Name:* ${fullName}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n🎯 *Package:* ${packageTier}\n👥 *Participants:* ${participants}\n📅 *Travel Date:* ${preferredDate}\n📝 *Notes:* ${comments || "N/A"}\n\nPlease confirm availability and next steps.`.trim()
    window.open(`https://wa.me/251906700007?text=${encodeURIComponent(message)}`, "_blank")
    setIsModalOpen(false)
    setFormData(initialForm)
  }

  const closeModal = () => { setIsModalOpen(false); setFormErrors({}) }
  const waHref = (text: string) => `https://wa.me/251906700007?text=${encodeURIComponent(text)}`

  const heroChips: { icon: LucideIcon; label: string; fill?: boolean }[] = [
    { icon: Clock, label: t("5–10 Days") },
    { icon: Users, label: t("1–20 Travelers") },
    { icon: Star, label: t("4.9 / 5 Rating"), fill: true },
    { icon: Award, label: t("IATA Certified Agency") },
  ]
  const trustItems: { icon: LucideIcon; label: string; sub: string }[] = [
    { icon: Shield, label: t("Visa Guarantee"), sub: t("{n}% approval rate", { n: tour.approval }) },
    { icon: Hotel, label: t(tour.trustHotels), sub: t("Partnered properties") },
    { icon: Plane, label: t("Return Flights"), sub: t("Included in price") },
    { icon: Phone, label: t("24/7 Support"), sub: t("Dedicated travel desk") },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <Image src={tour.heroImage} alt={t(tour.heroAlt)} fill className="object-cover object-center" priority quality={100} sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#0A1E3F]/55 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 container mx-auto px-4 pb-14 pt-28">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 font-medium">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("Home")}</Link>
            <span>/</span><Link href="/packages" className="hover:text-[#DFB75C] transition-colors">{t("Packages")}</Link>
            <span>/</span><span className="text-[#DFB75C]">{tourName}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-5">
            <MapPin className="w-3.5 h-3.5" />{t(tour.location)} {tour.flag}
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-5 max-w-3xl">
            {t(tour.titleLines[0])}<br />{t(tour.titleLines[1])}
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">{t(tour.description)}</p>
          <div className="flex flex-wrap gap-3">
            {heroChips.map(({ icon: Icon, label, fill }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                <Icon className={`w-4 h-4 text-[#DFB75C] ${fill ? "fill-[#DFB75C]" : ""}`} />{label}
              </div>
            ))}
            <div className="flex items-center gap-2 bg-[#DFB75C]/20 backdrop-blur-md border border-[#DFB75C]/50 px-5 py-2 rounded-full text-[#DFB75C] text-sm font-bold">
              {t("From {price} ETB / person", { price: tour.fromPrice })}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#0A1E3F] border-y border-[#DFB75C]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#DFB75C]/15">
            {trustItems.map(({ icon: Icon, label, sub }) => (
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
              <SectionHeader badge={t("Activities")} title={t("Experiences Awaiting You")} subtitle={t(tour.activitiesIntro)} />
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {tour.activities.map((act) => {
                  const { name, price, img, desc } = act
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setActivity(act)}
                      aria-label={`${t(name)} — ${t("View details")}`}
                      className="group relative block w-full text-left rounded-2xl overflow-hidden aspect-video shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB75C]"
                    >
                      <Image src={img} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" quality={90} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/40 to-transparent" />
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0A1E3F] shadow-lg transition-transform duration-300 group-hover:scale-105">
                        {t("View details")}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="font-serif text-xl font-bold text-white mb-1">{t(name)}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{t(desc)}</p>
                        </div>
                        <span className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full shadow ${price === "Included" ? "bg-emerald-500 text-white" : "bg-[#DFB75C] text-[#071326]"}`}>{t(price)}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Package Tiers */}
            <div data-aos="fade-up">
              <SectionHeader badge={t("Packages")} title={t("Choose Your Experience")} subtitle={t("All packages are fully customisable. Prices shown per person — group discounts available.")} />
              <div className="grid md:grid-cols-3 gap-5 mt-8">
                {tour.packages.map((pkg) => (
                  <div key={pkg.name} onClick={() => setSelectedTier(pkg.name)} className={`relative rounded-2xl border-2 bg-white dark:bg-[#0D2245] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selectedTier === pkg.name ? "border-[#C59B27] dark:border-[#DFB75C] shadow-[0_8px_30px_rgba(197,155,39,0.2)]" : tierBorder(pkg.name) + " shadow-sm"}`}>
                    {pkg.badge && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="whitespace-nowrap bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-[#071326] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow">{t(pkg.badge)}</span></div>}
                    <div className="mt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">{t(pkg.name)}</p>
                      <div className="flex items-end gap-1 mb-1">
                        <span className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">{t(pkg.price)}</span>
                        {pkg.price !== "Contact Us" && <span className="text-sm text-slate-400 mb-0.5">{t("ETB")}</span>}
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">{t(pkg.nights)}</p>
                      <p className="text-xs font-medium text-[#C59B27] dark:text-[#DFB75C] mb-4">{t(pkg.hotel)}</p>
                      <div className="space-y-2.5">{pkg.features.map((f) => (<div key={f} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] flex-shrink-0 mt-0.5" /><span className="text-xs text-slate-600 dark:text-slate-300">{t(f)}</span></div>))}</div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setSelectedTier(pkg.name); setDetail(pkg) }}
                        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#C59B27] dark:border-[#DFB75C] py-2.5 text-xs font-bold text-[#9E7B1C] dark:text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-colors"
                      >
                        {t("View details")}<ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div data-aos="fade-up">
              <SectionHeader badge={t("Itinerary")} title={t("5-Day Sample Journey")} subtitle={t(tour.itineraryIntro)} />
              <div className="mt-8 space-y-0">
                {tour.itinerary.map(({ title, activities: acts, icon }, index) => {
                  const Icon = dayIcons[icon]
                  return (
                    <div key={title} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-[#0A1E3F] dark:bg-[#0D2245] border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0 shadow-md"><Icon className="w-5 h-5 text-[#DFB75C]" /></div>
                        {index < tour.itinerary.length - 1 && <div className="w-px flex-1 my-2 bg-gradient-to-b from-[#DFB75C]/40 to-transparent min-h-[32px]" />}
                      </div>
                      <div className="pb-8 flex-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] dark:text-[#DFB75C]">{t("Day {n}", { n: index + 1 })}</span>
                        <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3 mt-1">{t(title)}</h4>
                        <ul className="space-y-1.5">{acts.map((a) => (<li key={a} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><ArrowRight className="w-3.5 h-3.5 text-[#DFB75C] flex-shrink-0 mt-0.5" />{t(a)}</li>))}</ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Included / Excluded */}
            <div data-aos="fade-up">
              <SectionHeader badge={t("Package Details")} title={t("What's Included")} />
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" />{t("Included")}</h4>
                  <ul className="space-y-3">{tour.included.map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />{t(item)}</li>))}</ul>
                </div>
                <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm">
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-4 flex items-center gap-2"><X className="w-5 h-5 text-rose-400" />{t("Not Included")}</h4>
                  <ul className="space-y-3">{tour.excluded.map((item) => (<li key={item} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400"><X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />{t(item)}</li>))}</ul>
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800"><p className="text-xs text-slate-400 leading-relaxed">{t("Travel insurance can be arranged — ask your consultant for options.")}</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5" data-aos="fade-up">
              <div className="bg-white dark:bg-[#0D2245] rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] px-6 pt-6 pb-8 relative">
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1 relative z-10">{t("Starting from")}</p>
                  <div className="flex items-end gap-1 relative z-10"><span className="font-serif text-4xl font-bold text-[#DFB75C]">{tour.fromPrice}</span><span className="text-slate-300 text-sm mb-1.5">{t("ETB / person")}</span></div>
                  <p className="text-slate-400 text-xs mt-1.5 relative z-10">{t("Premium from {price} ETB · Luxury on request", { price: tour.premiumPrice })}</p>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {tour.stickyFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"><div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-[#C59B27] dark:text-[#DFB75C]" /></div>{t(f)}</div>
                  ))}
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <button onClick={() => { setFormData((p) => ({ ...p, packageTier: selectedTier })); setIsModalOpen(true) }} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_18px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"><Calendar className="w-4 h-4" />{t("Book {tour}", { tour: tourName })}</button>
                  <a href={waHref(`Hi, I'm interested in the ${tour.waName} package.`)} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all duration-300"><MessageCircle className="w-4 h-4" />{t("Chat on WhatsApp")}</a>
                  <a href="tel:+251906700007" className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C] hover:text-[#C59B27] transition-all duration-300"><Phone className="w-4 h-4" />+251 906 700 007</a>
                </div>
              </div>
              <div className="bg-white dark:bg-[#0D2245] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3"><div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DFB75C] text-[#DFB75C]" />)}</div><span className="font-bold text-[#0A1E3F] dark:text-white text-sm">4.9 / 5</span></div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">&ldquo;{t(tour.testimonial.quote)}&rdquo; — {t(tour.testimonial.author)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#071326] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up"><SectionHeader badge={t("FAQ")} title={t("Frequently Asked Questions")} subtitle={t(tour.faqIntro)} /></div>
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="80">
            {tour.faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.q} className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? "border-[#C59B27]/60 dark:border-[#DFB75C]/40 shadow-md" : "border-slate-200/80 dark:border-slate-800"} bg-white dark:bg-[#0D2245]`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between group" aria-expanded={isOpen}>
                    <span className="font-semibold text-[#0A1E3F] dark:text-white pr-4 group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C] transition-colors">{t(faq.q)}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#DFB75C] text-[#071326]" : "bg-slate-100 dark:bg-slate-800 text-slate-400"}`}>{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</div>
                  </button>
                  {isOpen && <div className="px-6 pb-5 border-t border-slate-100 dark:border-slate-800/60 pt-4"><p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{t(faq.a)}</p></div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6"><Sparkles className="w-3.5 h-3.5" />{t(tour.ctaBadge)}</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">{t(tour.ctaTitle[0])}<br />{t(tour.ctaTitle[1])}</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{t("Book your consultation today — our travel experts respond within 2 hours and handle everything from visa to boarding pass.")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_6px_24px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"><Calendar className="w-5 h-5" />{t("Book Your Tour Now")}</button>
            <a href={waHref(`Hi, I'd like a free consultation for the ${tour.waName}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"><MessageCircle className="w-5 h-5" />{t("Free Consultation")}</a>
          </div>
        </div>
      </section>

      {/* ACTIVITY DETAILS */}
      {activity && (() => {
        const act = activity
        const activityMsg = `Hi Workdan Sales! I'm interested in "${act.name}" on the ${tour.waName} package. Could you share the details and pricing?`
        const availability =
          act.price === "Included"
            ? t("Included in your package. Your sales consultant will confirm the timing in your itinerary.")
            : act.price === "Add-on"
              ? t("Optional add-on. Our sales team confirms the price and timing for your trip.")
              : t("Indicative price: {price}. Our sales team confirms the final price and timing.", { price: t(act.price) })
        return (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50" onClick={() => setActivity(null)}>
            <div role="dialog" aria-modal="true" aria-label={t(act.name)} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-[#0D2245] rounded-t-3xl sm:rounded-3xl w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl">
              <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                <Image src={act.img} alt={t(act.name)} fill className="object-cover" sizes="(max-width: 640px) 100vw, 576px" quality={90} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/30 to-transparent" />
                <button onClick={() => setActivity(null)} className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors" aria-label={t("Close")}><X className="w-5 h-5 text-white" /></button>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white min-w-0">{t(act.name)}</h3>
                  <span className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full shadow ${act.price === "Included" ? "bg-emerald-500 text-white" : "bg-[#DFB75C] text-[#071326]"}`}>{t(act.price)}</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-sm font-medium text-[#0A1E3F] dark:text-white leading-relaxed">{t(act.desc)}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-3">
                    <Clock className="w-5 h-5 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{t("Duration")}</p>
                      <p className="text-sm font-medium text-[#0A1E3F] dark:text-white">{t(act.duration)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-3">
                    <Calendar className="w-5 h-5 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{t("Timing")}</p>
                      <p className="text-sm font-medium text-[#0A1E3F] dark:text-white">{t(act.timing)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t("About this activity")}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t(act.about)}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("Highlights")}</h4>
                  <ul className="space-y-2.5">
                    {act.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />{t(h)}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("Requirements")}</h4>
                  <ul className="space-y-2.5">
                    {act.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><ArrowRight className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />{t(r)}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("Rules and good to know")}</h4>
                  <ul className="space-y-2.5">
                    {act.rules.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><Shield className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />{t(r)}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t("Times are typical. Our sales team confirms the exact schedule for your trip.")}</p>
                </div>

                <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 px-4 py-3 space-y-1.5">
                  <p className="text-sm text-[#7a5c10] dark:text-amber-200">{availability}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t("Payment is arranged with our sales team. You never pay online on this website.")}</p>
                </div>

                <div className="space-y-3">
                  <a href={waHref(activityMsg)} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"><MessageCircle className="w-4 h-4" />{t("Contact Sales about this activity")}</a>
                  <a href="tel:+251906700007" className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C] hover:text-[#C59B27] transition-colors"><Phone className="w-4 h-4" />{t("Call Sales")}: +251 906 700 007</a>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* PACKAGE DETAILS */}
      {detail && (() => {
        const custom = detail.price === "Contact Us"
        const packageMsg = `Hi Workdan Sales! I'd like to book the ${detail.name} package of the ${tour.waName}. Please confirm availability, the final price and how to pay.`
        const steps = [
          { title: "Contact our sales team", desc: "Message or call us on WhatsApp with your preferred dates and number of travelers." },
          { title: "Get your confirmed quote", desc: "We confirm availability, the final price and send you an invoice." },
          { title: "Pay through sales", desc: "We guide you through the payment options. You never pay online on this website." },
          { title: "Travel with peace of mind", desc: "We handle your visa, tickets and bookings and support you until you are back home." },
        ]
        return (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50" onClick={() => setDetail(null)}>
            <div role="dialog" aria-modal="true" aria-label={`${t(detail.name)} — ${tourName}`} onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-[#0D2245] rounded-t-3xl sm:rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] px-6 pt-6 pb-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DFB75C]">{tourName}</p>
                    {detail.badge && <span className="bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-[#071326] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">{t(detail.badge)}</span>}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">{t(detail.name)}</h3>
                  <p className="mt-1 text-sm text-slate-300">{t(detail.nights)} · {t(detail.hotel)}</p>
                </div>
                <button onClick={() => setDetail(null)} className="p-2 -mr-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0" aria-label={t("Close")}><X className="w-5 h-5 text-white" /></button>
              </div>

              <div className="p-6 space-y-7">
                <div className="flex flex-wrap items-end justify-between gap-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 px-5 py-4">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{custom ? t("Custom quote") : t("Starting from")}</p>
                    <p className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white">
                      {custom ? t("Contact Us") : <>{detail.price} <span className="text-base font-sans font-medium text-slate-500">{t("ETB")} / {t("person")}</span></>}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[16rem]">{t("Final price is confirmed by our sales team for your dates and group size.")}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t("About this package")}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t(`tier.${detail.name}.about`)}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold text-[#0A1E3F] dark:text-white">{t("Best for")}:</span> {t(`tier.${detail.name}.best`)}</p>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("What's included in this package")}</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {detail.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />{t(f)}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("Sample journey")}</h4>
                  <ol className="space-y-2">
                    {tour.itinerary.map((d, i) => (
                      <li key={d.title} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <span className="shrink-0 rounded-md bg-[#0A1E3F] dark:bg-[#071326] text-[#DFB75C] text-xs font-bold px-2 py-0.5 mt-0.5">{t("Day {n}", { n: i + 1 })}</span>
                        {t(d.title)}
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("Requirements and rules")}</h4>
                  <ul className="space-y-2.5">
                    {[
                      "A valid passport, usually with at least 6 months' validity",
                      "The visa documents our team asks for (we guide you step by step)",
                      "Travel insurance is recommended",
                      "Prices are per person and confirmed by our sales team for your dates and group size",
                      "Itineraries can change with weather, public holidays or local rules",
                      "Dress modestly at religious sites and follow your guide's instructions",
                      "Cancellation and refund terms are written in your quote; ask our sales team before you pay",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><Shield className="w-4 h-4 text-[#C59B27] dark:text-[#DFB75C] shrink-0 mt-0.5" />{t(r)}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-3">{t("How to book and pay")}</h4>
                  <ol className="space-y-3">
                    {steps.map((st, i) => (
                      <li key={st.title} className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-[#DFB75C] text-[#071326] text-xs font-bold flex items-center justify-center">{i + 1}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#0A1E3F] dark:text-white">{t(st.title)}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{t(st.desc)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-3 pt-1">
                  <a href={waHref(packageMsg)} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"><MessageCircle className="w-4 h-4" />{t("Contact Sales to Book")}</a>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <a href="tel:+251906700007" className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C] hover:text-[#C59B27] transition-colors"><Phone className="w-4 h-4" />{t("Call Sales")}: +251 906 700 007</a>
                    <button onClick={() => { setFormData((p) => ({ ...p, packageTier: detail.name })); setDetail(null); setIsModalOpen(true) }} className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] transition-colors"><Calendar className="w-4 h-4" />{t("Fill booking form")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* BOOKING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div><h3 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">{t("Book {tour}", { tour: tourName })}</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("We'll confirm within 2 hours via WhatsApp")}</p></div>
                <button onClick={closeModal} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" aria-label={t("Close")}><X className="w-5 h-5 text-slate-500" /></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{t("Package Tier")}</label>
                  <select name="packageTier" value={formData.packageTier} onChange={handleInputChange} className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50">
                    <option value="Standard">{t("{tier} — From {price} ETB", { tier: t("Standard"), price: prices.Standard })}</option>
                    <option value="Premium">{t("{tier} — From {price} ETB", { tier: t("Premium"), price: prices.Premium })}</option>
                    <option value="Luxury">{t("Luxury — Custom Quote")}</option>
                  </select>
                </div>
                {[{ id: "fullName", label: "Full Name *", type: "text", placeholder: "Your full name" }, { id: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" }, { id: "phone", label: "Phone / WhatsApp *", type: "tel", placeholder: "+251 9xx xxx xxxx" }].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{t(label)}</label>
                    <input id={id} name={id} type={type} value={formData[id as keyof BookingFormData]} onChange={handleInputChange} placeholder={t(placeholder)} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 transition-colors ${formErrors[id as keyof BookingFormData] ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors[id as keyof BookingFormData] && <p className="text-red-500 text-xs mt-1">{t(formErrors[id as keyof BookingFormData] as string)}</p>}
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="participants" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{t("Travelers *")}</label>
                    <input id="participants" name="participants" type="number" min="1" max="20" value={formData.participants} onChange={handleInputChange} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${formErrors.participants ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors.participants && <p className="text-red-500 text-xs mt-1">{t(formErrors.participants)}</p>}
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{t("Travel Date *")}</label>
                    <input id="preferredDate" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleInputChange} min={new Date().toISOString().split("T")[0]} className={`w-full rounded-xl border px-3 py-2.5 text-sm bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 ${formErrors.preferredDate ? "border-red-400" : "border-slate-200 dark:border-slate-700"}`} />
                    {formErrors.preferredDate && <p className="text-red-500 text-xs mt-1">{t(formErrors.preferredDate)}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="comments" className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">{t("Special Requests")}</label>
                  <textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange} placeholder={t(tour.commentsPlaceholder)} rows={3} className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-slate-900 dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#DFB75C]/50 resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={closeModal} className="flex-1 py-3 rounded-full text-sm font-semibold border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 transition-colors">{t("Cancel")}</button>
                  <button type="submit" className="flex-1 py-3 rounded-full text-sm font-bold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] transition-all duration-300">{t("Send via WhatsApp")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
