"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  ShieldCheck,
  FileSearch,
  Landmark,
  Building2,
  PackageCheck,
  Home,
  Briefcase,
  Rocket,
  BadgeCheck,
  Check,
  Phone,
  Mail,
  User,
  MessageSquare,
  MapPin,
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
const bookButton =
  "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
const cardCls =
  "group rounded-3xl p-6 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300 text-center"

const stepIcons = [FileSearch, Landmark, Building2, PackageCheck]
const whoIcons = [Home, Briefcase, Rocket, BadgeCheck]
// English labels are used in the WhatsApp message so the team always reads the same text.
const documents = [
  { id: "pcc", en: "Police Clearance Certificate (PCC)" },
  { id: "birth", en: "Birth certificate" },
  { id: "marriage", en: "Marriage certificate" },
  { id: "education", en: "Educational certificate (degree / diploma)" },
  { id: "business", en: "Commercial / business document" },
  { id: "other", en: "Other document" },
]
const emptyForm = { fullName: "", email: "", phone: "", issuingCountry: "", document: "", additionalInfo: "" }

export default function UaePccAttestation() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  const handleInputChange = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }))

  // The WhatsApp message is always English so the team reads one format.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, phone, issuingCountry, document: documentId, additionalInfo } = formData
    const documentName = documents.find((x) => x.id === documentId)?.en ?? documentId
    const message = `
*UAE PCC Attestation Request* 🌟

👤 *From*: ${fullName}
📧 *Email*: ${email}
📞 *Phone*: ${phone}
🌍 *PCC Issuing Country*: ${issuingCountry}
📄 *Document to attest*: ${documentName}
📝 *Additional Information*: ${additionalInfo || "N/A"}

Please confirm the required documents and timeline.
`.trim()
    window.open(`https://wa.me/251906700007?text=${encodeURIComponent(message)}`, "_blank")
    setIsModalOpen(false)
    setFormData(emptyForm)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("pcc.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">{t("pcc.title")}</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{t("pcc.heroDesc")}</p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">{t("nav.services")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("pcc.breadcrumb")}</span>
          </div>
          <div className="mt-8">
            <button onClick={() => setIsModalOpen(true)} className={bookButton}>{t("pcc.book")}</button>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={badge}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("pcc.about.badge")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">{t("pcc.about.title")}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">{t("pcc.about.p1")}</p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{t("pcc.about.p2")}</p>
            </div>
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0A1E3F] dark:bg-[#0D2245] border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <FileSearch className="w-5 h-5 text-[#DFB75C]" />
                <h3 className="font-serif text-lg font-bold text-white">{t("pcc.docs.title")}</h3>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#DFB75C]/20 border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#DFB75C]" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{t(`pcc.docs.${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>{t("pcc.steps.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">{t("pcc.steps.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={n} className={`relative ${cardCls}`}>
                  <span className="absolute top-4 right-5 font-serif text-3xl font-bold text-[#DFB75C]/30">{n}</span>
                  <div className={`${iconBox} group-hover:bg-[#DFB75C]/10 transition-colors`}><Icon className="w-6 h-6" /></div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t(`pcc.s${n}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t(`pcc.s${n}.desc`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Who needs it ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className={badge}>
              <MapPin className="w-3.5 h-3.5" />
              <span>{t("pcc.who.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">{t("pcc.who.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n, i) => {
              const Icon = whoIcons[i]
              return (
                <div key={n} className={cardCls}>
                  <div className={`${iconBox} group-hover:bg-[#DFB75C]/10 transition-colors`}><Icon className="w-6 h-6" /></div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{t(`pcc.w${n}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t(`pcc.w${n}.desc`)}</p>
                </div>
              )
            })}
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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">{t("home.faq.title")}</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4].map((n) => (
              <AccordionItem key={n} value={`item-${n}`} className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-[#0A1E3F] dark:text-white hover:text-[#C59B27] dark:hover:text-[#DFB75C]">{t(`pcc.faq${n}.q`)}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(`pcc.faq${n}.a`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0D2245]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t("pcc.cta.title")}</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">{t("pcc.cta.desc")}</p>
          <button onClick={() => setIsModalOpen(true)} className={bookButton}>{t("pcc.cta.btn")}</button>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#C59B27]" />
              {t("pcc.form.title")}
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
              <Label htmlFor="issuingCountry" className={labelCls}>{t("pcc.form.issuing")}</Label>
              <Input id="issuingCountry" type="text" placeholder={t("pcc.form.issuingPh")} className={inputCls} value={formData.issuingCountry} onChange={(e) => handleInputChange("issuingCountry", e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label className={labelCls}>{t("pcc.form.document")}</Label>
              <Select value={formData.document} onValueChange={(value) => handleInputChange("document", value)} required>
                <SelectTrigger className={inputCls}><SelectValue placeholder={t("pcc.form.documentPh")} /></SelectTrigger>
                <SelectContent>
                  {documents.map((x) => <SelectItem key={x.id} value={x.id}>{t(`pcc.doc.${x.id}`)}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="additionalInfo" className={labelCls}>{t("pcc.form.notes")}</Label>
              <Textarea id="additionalInfo" placeholder={t("pcc.form.notesPh")} className={`min-h-[100px] resize-none ${inputCls}`} value={formData.additionalInfo} onChange={(e) => handleInputChange("additionalInfo", e.target.value)} />
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>{t("f.cancel")}</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">{t("pcc.form.submit")}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
