"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RichText } from "@/components/rich-text"
import { useLanguage } from "@/components/language-provider"

const fieldCls =
  "border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27]"
const labelCls = "text-slate-700 dark:text-slate-300 font-medium"
const cardCls =
  "shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]"
const iconCircle = "w-10 h-10 bg-[#DFB75C]/15 rounded-full flex items-center justify-center flex-shrink-0"

const serviceOptions = ["desert-safari", "city-tours", "adventure-packages", "travel-planning", "business-consulting", "other"]

function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // The WhatsApp message is always English so the sales team reads one format.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, phone, service, message } = formData

    // Build WhatsApp message
    const messages = `
*Name*: ${name}
*Email*: ${email}
*Phone*: ${phone}
*Service*: ${service}
*Message*: ${message || "N/A"}
    `.trim()

    // WhatsApp redirect URL
    const phoneNumber = "251906700007"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages)}`

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">
      {/* ── Hero Section ── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t("ct.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("nav.contactUs")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("ct.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("nav.contact")}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 bg-slate-50 dark:bg-[#071326]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Contact Form (2/3 width) ── */}
            <div className="lg:col-span-2">
              <Card className={cardCls}>
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-8 py-6">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-[#DFB75C]" />
                    {t("ct.form.title")}
                  </CardTitle>
                  <CardDescription className="text-slate-300 mt-1">
                    {t("ct.form.desc")}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className={labelCls}>
                          {t("ct.form.name")} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder={t("ct.form.namePh")}
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={fieldCls}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className={labelCls}>
                          {t("ct.form.email")} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("ct.form.emailPh")}
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={fieldCls}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Service */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className={labelCls}>
                          {t("ct.form.phone")}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+xxx xxxx xxxx"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className={fieldCls}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className={labelCls}>
                          {t("ct.form.service")}
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className={fieldCls}>
                            <SelectValue placeholder={t("ct.form.servicePh")} />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((s) => (
                              <SelectItem key={s} value={s}>{t(`ct.svc.${s}`)}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className={labelCls}>
                        {t("ct.form.message")} <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t("ct.form.messagePh")}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`${fieldCls} min-h-[130px]`}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-[#DFB75C] hover:bg-white text-[#071326] font-semibold py-3 text-base rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      {t("ct.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* ── Sidebar (1/3 width) ── */}
            <div className="space-y-6">

              {/* Contact Details */}
              <Card className={cardCls}>
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#DFB75C]" />
                    {t("ct.info.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Addresses */}
                  <div className="flex items-start gap-4">
                    <div className={iconCircle}>
                      <MapPin className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {t("ct.info.addresses")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {t("ct.addr.sharjah1")}
                        <br />
                        {t("ct.addr.sharjah2")}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                        {t("ct.addr.addis1")}
                        <br />
                        {t("ct.addr.addis2")}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className={iconCircle}>
                      <Phone className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {t("ct.info.phones")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {t("ct.info.main")} +251 906 700 007
                        <br />
                        {t("ct.info.whatsapp")} +251 906 700 007
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className={iconCircle}>
                      <Mail className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {t("ct.info.emails")}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        workdantrading@gmail.com
                        <br />
                        workdaneuae@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className={cardCls}>
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#DFB75C]" />
                    {t("ct.hours.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {t("ct.hours.days")}
                      </span>
                      <span className="text-[#DFB75C] font-semibold">
                        {t("ct.hours.open")}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>{t("ct.hours.emergency")}</strong> {t("ct.hours.emergencyDesc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className={cardCls}>
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#DFB75C]" />
                    {t("ct.quick.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full justify-center gap-2"
                    asChild
                  >
                    <a
                      href="https://wa.me/251906700007"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="h-5 w-5" />
                      {t("ct.quick.whatsapp")}
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] rounded-full justify-center gap-2"
                    asChild
                  >
                    <a href="tel:+251906700007">
                      <Phone className="h-5 w-5" />
                      {t("ct.quick.call")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ── Map Section ── */}
          <div className="mt-16">
            <Card className={cardCls}>
              <CardHeader className="bg-[#0A1E3F] text-white px-8 py-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#DFB75C]" />
                  {t("ct.map.title")}
                </CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  {t("ct.map.address")}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  title={t("ct.map.iframe")}
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d982.3220655754247!2d38.7614!3d9.0108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMzguOSJOIDM4wrA0NiczNi41IkU!5e0!3m2!1sen!2set!4v1696000000000!5m2!1sen!2set"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-[#0A1E3F] to-[#071326] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            <RichText text={t("ct.cta.title")} goldClass="text-[#DFB75C]" />
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {t("ct.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#DFB75C] hover:bg-white text-[#071326] font-semibold px-8 py-3 rounded-full text-base transition-colors duration-200 flex items-center gap-2"
              asChild
            >
              <Link href="/flights">
                {t("nav.planJourney")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] px-8 py-3 rounded-full text-base font-semibold transition-colors duration-200"
              asChild
            >
              <Link href="/packages">{t("svc.viewPackages")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
