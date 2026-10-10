"use client"

import type React from "react"
import { useState } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, Star, Phone, Mail, User, MessageSquare, PlaneTakeoff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"

const badge =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3"
const iconBox =
  "mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]"
const inputCls = "rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"
const labelCls = "text-sm font-semibold text-slate-700 dark:text-slate-300"

const offerIcons = [<MapPin key="1" className="w-6 h-6" />, <Calendar key="2" className="w-6 h-6" />, <Users key="3" className="w-6 h-6" />, <Star key="4" className="w-6 h-6" />]
const timeSlots = ["9:00-10:30", "11:00-12:30", "1:00-2:30", "3:00-4:30", "5:00-6:30"]
const timeLabels: Record<string, string> = {
  "9:00-10:30": "9:00 AM - 10:30 AM",
  "11:00-12:30": "11:00 AM - 12:30 PM",
  "1:00-2:30": "1:00 PM - 2:30 PM",
  "3:00-4:30": "3:00 PM - 4:30 PM",
  "5:00-6:30": "5:00 PM - 6:30 PM",
}

function TravelConsultation() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    travelNeeds: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // The WhatsApp message is always English so the sales team reads one format.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, phone, preferredDate, preferredTime, travelNeeds } = formData
    const message = `
🌍 *Travel Consultation Request* 🌟

👤 *From*: ${fullName}
📧 *Email*: ${email}
📞 *Phone*: ${phone}
📅 *Preferred Date*: ${preferredDate}
⏰ *Preferred Time*: ${preferredTime}
✈️ *Travel Needs*: ${travelNeeds || 'N/A'}

✨ Please confirm availability. Looking forward to planning an amazing trip! 🚀
`.trim()
    const phoneNumber = "251906700007"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setIsModalOpen(false)
    setFormData({ fullName: "", email: "", phone: "", preferredDate: "", preferredTime: "", travelNeeds: "" })
  }

  const bookButton =
    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <PlaneTakeoff className="w-3.5 h-3.5" />
            <span>{t("tp.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("home.svc.planning.title")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("tp.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">{t("nav.services")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("tp.breadcrumb")}</span>
          </div>
          <div className="mt-8">
            <button onClick={() => setIsModalOpen(true)} className={bookButton}>
              {t("tp.book")}
            </button>
          </div>
        </div>
      </section>

      {/* ── About Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={badge}>
                <PlaneTakeoff className="w-3.5 h-3.5" />
                <span>{t("tp.about.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                {t("tp.about.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">{t("tp.about.p1")}</p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">{t("tp.about.p2")}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t("about.stat.travelers")}</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t("tp.stat.destinations")}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <Image
                  src="/services/uae-business-consultant-activities/uae-business-consultation.jpg"
                  alt="Travel planning consultation"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <Star className="w-3.5 h-3.5" />
              <span>{t("svc.offerings")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("tp.offer.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n, index) => (
              <div key={n} className="group rounded-3xl p-6 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className={`${iconBox} group-hover:bg-[#DFB75C]/10 transition-colors duration-300`}>
                  {offerIcons[index]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t(`tp.s${n}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t(`tp.s${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details Strip ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className={iconBox}><Clock className="w-6 h-6" /></div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t("tp.d1.title")}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{t("tp.d1.desc")}</p>
            </div>
            <div>
              <div className={iconBox}><span className="font-bold text-xl text-[#C59B27]">$</span></div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t("tp.d2.title")}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{t("tp.d2.desc")}</p>
            </div>
            <div>
              <div className={iconBox}><Calendar className="w-6 h-6" /></div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t("tp.d3.title")}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{t("tp.d3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t("faq.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("home.faq.title")}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <AccordionItem
                key={n}
                value={`item-${n}`}
                className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0A1E3F] dark:text-white hover:text-[#C59B27] dark:hover:text-[#DFB75C]">
                  {t(`tp.faq${n}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(`tp.faq${n}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0D2245]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("tp.cta.title")}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {t("tp.cta.desc")}
          </p>
          <button onClick={() => setIsModalOpen(true)} className={bookButton}>
            {t("tp.cta.btn")}
          </button>
        </div>
      </section>

      {/* ── Booking Modal ─────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">{t("tp.book")}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className={labelCls}>{t("f.fullName")}</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="fullName" type="text" placeholder={t("f.fullNamePh")} className={`pl-10 ${inputCls}`} value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className={labelCls}>{t("f.email")}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="email" type="email" placeholder={t("f.emailPh")} className={`pl-10 ${inputCls}`} value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className={labelCls}>{t("f.phone")}</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="phone" type="tel" placeholder={t("f.phonePh")} className={`pl-10 ${inputCls}`} value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredDate" className={labelCls}>{t("f.prefDate")}</Label>
              <Input id="preferredDate" type="date" className={inputCls} value={formData.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredTime" className={labelCls}>{t("f.prefTime")}</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className={inputCls}>
                  <SelectValue placeholder={t("f.selectTime")} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{timeLabels[slot]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="travelNeeds" className={labelCls}>{t("tp.form.needs")}</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Textarea id="travelNeeds" placeholder={t("tp.form.needsPh")} className={`pl-10 min-h-[100px] resize-none ${inputCls}`} value={formData.travelNeeds} onChange={(e) => handleInputChange("travelNeeds", e.target.value)} />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>{t("f.cancel")}</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">{t("tp.form.submit")}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TravelConsultation
