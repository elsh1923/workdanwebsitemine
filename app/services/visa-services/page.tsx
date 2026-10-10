"use client"

import type React from "react"
import { useState } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  Plane,
  FileCheck,
  Clock,
  Shield,
  Briefcase,
  GraduationCap,
  Heart,
  Phone,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Calendar,
} from "lucide-react"
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

const typeIcons = [<Plane key="1" className="w-6 h-6" />, <Briefcase key="2" className="w-6 h-6" />, <GraduationCap key="3" className="w-6 h-6" />, <Heart key="4" className="w-6 h-6" />]

const destinations = [
  { region: "Europe", countries: ["Schengen Area", "UK", "Ireland", "Switzerland"], time: "5-15" },
  { region: "North America", countries: ["USA", "Canada", "Mexico"], time: "3-30" },
  { region: "Asia Pacific", countries: ["Australia", "New Zealand", "Japan", "Singapore"], time: "3-20" },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Turkey"], time: "1-10" },
]

const nationalities = [["ethiopia", "Ethiopia"], ["india", "India"], ["pakistan", "Pakistan"], ["bangladesh", "Bangladesh"], ["philippines", "Philippines"], ["egypt", "Egypt"], ["nigeria", "Nigeria"], ["other", "Other"]]
const destinationOptions = [["usa", "United States"], ["uk", "United Kingdom"], ["canada", "Canada"], ["australia", "Australia"], ["schengen", "Schengen Area"], ["uae", "United Arab Emirates"], ["singapore", "Singapore"], ["other", "Other"]]
const visaTypes = ["tourist", "business", "student", "work", "family", "transit", "other"]
const timeSlots = [
  ["9:00-10:00", "9:00 AM - 10:00 AM"],
  ["10:30-11:30", "10:30 AM - 11:30 AM"],
  ["12:00-1:00", "12:00 PM - 1:00 PM"],
  ["2:30-3:30", "2:30 PM - 3:30 PM"],
  ["4:00-5:00", "4:00 PM - 5:00 PM"],
  ["5:30-6:30", "5:30 PM - 6:30 PM"],
]
const featureIcons = [<FileCheck key="1" className="w-6 h-6" />, <Clock key="2" className="w-6 h-6" />, <Shield key="3" className="w-6 h-6" />]

function VisaServices() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    destination: "",
    visaType: "",
    travelDate: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // The WhatsApp message is always English so the sales team reads one format.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, phone, nationality, destination, visaType, travelDate, preferredDate, preferredTime, additionalInfo } = formData
    const message = `
 *Visa Consultation Request* 🌟

👤 *From*: ${fullName}
📧 *Email*: ${email}
📞 *Phone*: ${phone}
 *Nationality/Passport Country*: ${nationality}
 *Destination Country*: ${destination}
 *Visa Type*: ${visaType}
📅 *Intended Travel Date*: ${travelDate}
📅 *Preferred Date*: ${preferredDate}
⏰ *Preferred Time*: ${preferredTime}
📝 *Additional Information*: ${additionalInfo || 'N/A'}

✨ Please confirm availability. Looking forward to starting my visa journey! 🚀
`.trim()
    const phoneNumber = "251906700007"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setIsModalOpen(false)
    setFormData({ fullName: "", email: "", phone: "", nationality: "", destination: "", visaType: "", travelDate: "", preferredDate: "", preferredTime: "", additionalInfo: "" })
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
            <Plane className="w-3.5 h-3.5" />
            <span>{t("visa.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("visa.title")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("visa.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">{t("nav.services")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("visa.breadcrumb")}</span>
          </div>
          <div className="mt-8">
            <button onClick={() => setIsModalOpen(true)} className={bookButton}>
              {t("visa.book")}
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
                <Shield className="w-3.5 h-3.5" />
                <span>{t("visa.about.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                {t("visa.about.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">{t("visa.about.p1")}</p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">{t("visa.about.p2")}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">50,000+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t("visa.stat.processed")}</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">95%+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t("visa.stat.approval")}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <Image src="/services/visa-services/visa-services-mid.jpg" alt="Visa consultation and documentation" width={600} height={450} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Types ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <Plane className="w-3.5 h-3.5" />
              <span>{t("visa.types.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("visa.types.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n, index) => (
              <div key={n} className="group rounded-3xl p-6 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className={`${iconBox} group-hover:bg-[#DFB75C]/10 transition-colors`}>{typeIcons[index]}</div>
                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t(`visa.t${n}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t(`visa.t${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Destinations ───────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("uae.coverage")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("visa.dest.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div key={dest.region} className="group rounded-3xl p-6 bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white">{t(`visa.region.${dest.region}`)}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold text-[#C59B27] dark:text-[#DFB75C] border border-[#DFB75C]/40 bg-amber-50/50 dark:bg-amber-950/20">
                    {t(`visa.time.${dest.time}`)}
                  </span>
                </div>
                <div className="space-y-2">
                  {dest.countries.map((country) => (
                    <div key={country} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3 h-3 text-[#C59B27] flex-shrink-0" />
                      {t(`country.${country}`)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Features Strip ────────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[1, 2, 3].map((n, index) => (
                <div key={n}>
                  <div className={iconBox}>{featureIcons[index]}</div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t(`visa.f${n}.title`)}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{t(`visa.f${n}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
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
              <AccordionItem key={n} value={`item-${n}`} className="bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-[#0A1E3F] dark:text-white hover:text-[#C59B27] dark:hover:text-[#DFB75C]">{t(`visa.faq${n}.q`)}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(`visa.faq${n}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0D2245]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t("visa.cta.title")}</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {t("visa.cta.desc")}
          </p>
          <button onClick={() => setIsModalOpen(true)} className={bookButton}>
            {t("visa.cta.btn")}
          </button>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white flex items-center gap-2">
              <Plane className="w-6 h-6 text-[#C59B27]" />
              {t("visa.form.title")}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className={labelCls}>{t("f.fullNamePassport")}</Label>
              <div className="relative"><User className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="fullName" type="text" placeholder={t("f.fullNamePh")} className={`pl-10 ${inputCls}`} value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className={labelCls}>{t("f.email")}</Label>
              <div className="relative"><Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="email" type="email" placeholder={t("f.emailPh")} className={`pl-10 ${inputCls}`} value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className={labelCls}>{t("f.phone")}</Label>
              <div className="relative"><Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="phone" type="tel" placeholder={t("f.phonePh")} className={`pl-10 ${inputCls}`} value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label className={labelCls}>{t("visa.form.nationality")}</Label>
              <Select value={formData.nationality} onValueChange={(value) => handleInputChange("nationality", value)}>
                <SelectTrigger className={inputCls}><SelectValue placeholder={t("visa.form.nationalityPh")} /></SelectTrigger>
                <SelectContent>
                  {nationalities.map(([value, name]) => <SelectItem key={value} value={value}>{t(`country.${name}`)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className={labelCls}>{t("visa.form.destination")}</Label>
              <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
                <SelectTrigger className={inputCls}><SelectValue placeholder={t("visa.form.destinationPh")} /></SelectTrigger>
                <SelectContent>
                  {destinationOptions.map(([value, name]) => <SelectItem key={value} value={value}>{t(`country.${name}`)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className={labelCls}>{t("visa.form.visaType")}</Label>
              <Select value={formData.visaType} onValueChange={(value) => handleInputChange("visaType", value)}>
                <SelectTrigger className={inputCls}><SelectValue placeholder={t("visa.form.visaTypePh")} /></SelectTrigger>
                <SelectContent>
                  {visaTypes.map((v) => <SelectItem key={v} value={v}>{t(`visa.vt.${v}`)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="travelDate" className={labelCls}>{t("visa.form.travelDate")}</Label>
              <div className="relative"><Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="travelDate" type="date" className={`pl-10 ${inputCls}`} value={formData.travelDate} onChange={(e) => handleInputChange("travelDate", e.target.value)} min={new Date().toISOString().split("T")[0]} /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredDate" className={labelCls}>{t("f.prefDate")}</Label>
              <Input id="preferredDate" type="date" className={inputCls} value={formData.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="space-y-1.5">
              <Label className={labelCls}>{t("f.prefTime")}</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className={inputCls}><SelectValue placeholder={t("f.selectTime")} /></SelectTrigger>
                <SelectContent>
                  {timeSlots.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="additionalInfo" className={labelCls}>{t("visa.form.info")}</Label>
              <div className="relative"><MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Textarea id="additionalInfo" placeholder={t("visa.form.infoPh")} className={`pl-10 min-h-[100px] resize-none ${inputCls}`} value={formData.additionalInfo} onChange={(e) => handleInputChange("additionalInfo", e.target.value)} /></div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>{t("f.cancel")}</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">{t("visa.form.submit")}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VisaServices
