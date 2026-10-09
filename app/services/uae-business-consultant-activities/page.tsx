"use client"

import type React from "react"
import { useState } from "react"
import Image from "@/components/cdn-image"
import Link from "next/link"
import {
  Building2,
  FileText,
  Users,
  Globe,
  TrendingUp,
  Phone,
  Mail,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function UAEBusinessConsultant() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    businessNeeds: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { fullName, email, phone, company, businessType, consultationType, preferredDate, preferredTime, businessNeeds } = formData
    const message = `
🇦🇪 *UAE Business Consultation Request* 🌟

👤 *From*: ${fullName}
📧 *Email*: ${email}
📞 *Phone*: ${phone}
🏢 *Company*: ${company || 'N/A'}
🏢 *Business Type*: ${businessType}
🏢 *Consultation Type*: ${consultationType}
📅 *Preferred Date*: ${preferredDate}
⏰ *Preferred Time*: ${preferredTime}
✈️ *Business Needs*: ${businessNeeds || 'N/A'}

✨ Please confirm availability. Looking forward to starting my UAE business journey! 🚀
`.trim()
    const phoneNumber = "251906700007"
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setIsModalOpen(false)
    setFormData({ fullName: "", email: "", phone: "", company: "", businessType: "", consultationType: "", preferredDate: "", preferredTime: "", businessNeeds: "" })
  }

  const services = [
    { icon: <Building2 className="w-6 h-6" />, title: "Company Formation", description: "Complete business setup including mainland, free zone, and offshore company registration" },
    { icon: <FileText className="w-6 h-6" />, title: "Licensing & Permits", description: "Professional, trade, and commercial license acquisition with regulatory compliance" },
    { icon: <Globe className="w-6 h-6" />, title: "Market Entry Strategy", description: "Strategic planning for entering UAE markets with local insights and partnerships" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Business Growth", description: "Expansion strategies, investment opportunities, and scaling your UAE operations" },
  ]

  const emirates = [
    { name: "Dubai", specialties: ["Free Zones", "Tourism", "Real Estate", "Technology"] },
    { name: "Abu Dhabi", specialties: ["Oil & Gas", "Government", "Healthcare", "Education"] },
    { name: "Sharjah", specialties: ["Manufacturing", "Logistics", "Arts & Culture"] },
    { name: "Ajman", specialties: ["SME Setup", "Cost-Effective Solutions"] },
  ]

  const faqs = [
    { question: "What types of business entities can be formed in the UAE?", answer: "The UAE offers various business structures including Limited Liability Companies (LLC), Free Zone Companies, Branch Offices, Representative Offices, and Sole Proprietorships. Each has different ownership requirements, benefits, and operational scopes." },
    { question: "How long does it take to set up a business in the UAE?", answer: "Timeline varies by emirate and business type. Mainland companies typically take 1-2 weeks, while free zone companies can be established in 3-7 working days. We expedite the process through our established relationships with authorities." },
    { question: "Do I need a local partner for my UAE business?", answer: "For mainland companies, UAE nationals must hold 51% ownership, though 100% foreign ownership is allowed in certain sectors. Free zone companies allow 100% foreign ownership. We help identify the best structure for your needs." },
    { question: "What are the costs involved in setting up a UAE business?", answer: "Costs vary significantly based on business type, location, and activities. Initial setup costs range from AED 5,000 to AED 50,000+. We provide detailed cost breakdowns during consultation based on your specific requirements." },
    { question: "What ongoing compliance requirements exist for UAE businesses?", answer: "UAE businesses must maintain annual renewals, submit audited accounts, comply with VAT regulations (if applicable), and meet employment visa requirements. We provide ongoing compliance support to ensure your business remains in good standing." },
    { question: "Can you help with banking and financial services setup?", answer: "Yes, we assist with corporate bank account opening, payment gateway setup, and connections with financial institutions. Our relationships with major UAE banks streamline the account opening process." },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            <span>🇦🇪 UAE Business Hub</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            UAE Business Consultant Activities
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your gateway to successful business establishment and growth in the United Arab Emirates.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">UAE Business</span>
          </div>
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Schedule Business Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── About Section ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Expert Consulting</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                Expert UAE Business Consulting Services
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                Navigate the UAE&apos;s dynamic business landscape with confidence. Our comprehensive consulting services
                combine deep local expertise with international best practices to ensure your business success in one of
                the world&apos;s most strategic commercial hubs.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                From initial market research and company formation to ongoing compliance and growth strategies, we&apos;re your
                trusted partners in building a thriving UAE business presence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">70+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Companies Established</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <Image src="/services/uae-business-consultant-activities/uae-business-consultation.jpg" alt="UAE business consultation" width={600} height={500} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Core Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Our Core Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group rounded-3xl p-6 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emirates ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Coverage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Emirates We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emirates.map((emirate, index) => (
              <div key={index} className="group rounded-3xl p-6 bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 transition-all duration-300">
                <h3 className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-white mb-4 text-center">{emirate.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {emirate.specialties.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium border border-[#DFB75C]/40 text-[#C59B27] dark:text-[#DFB75C] bg-amber-50/50 dark:bg-amber-950/20">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details Strip ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Consultation Duration</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">90-120 minutes comprehensive session</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <span className="font-bold text-sm text-[#C59B27]">AED</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Starting Price</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Free until the licensing is established</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Delivery</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">In-person, virtual, or hybrid sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>FAQs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-[#0A1E3F] dark:text-white hover:text-[#C59B27] dark:hover:text-[#DFB75C]">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0D2245]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your UAE Business Journey?</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards UAE business success.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Your Business Consultation
          </button>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white flex items-center gap-2">
              <span>🇦🇪</span>
              Book UAE Business Consultation
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name *</Label>
              <div className="relative"><User className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="fullName" type="text" placeholder="Enter your full name" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address *</Label>
              <div className="relative"><Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="email" type="email" placeholder="Enter your email" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number *</Label>
              <div className="relative"><Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="phone" type="tel" placeholder="Enter your phone number" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required /></div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="company" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Company (if applicable)</Label>
              <div className="relative"><Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="company" type="text" placeholder="Enter your company name" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} /></div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Business Type/Industry *</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select your business type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology & IT</SelectItem>
                  <SelectItem value="trading">Trading & Import/Export</SelectItem>
                  <SelectItem value="consulting">Agriculture</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Consultation Type *</Label>
              <Select value={formData.consultationType} onValueChange={(value) => handleInputChange("consultationType", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select consultation type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="company-formation">Company Formation</SelectItem>
                  <SelectItem value="licensing">Business Licensing</SelectItem>
                  <SelectItem value="market-entry">Market Entry Strategy</SelectItem>
                  <SelectItem value="business-expansion">Business Expansion</SelectItem>
                  <SelectItem value="compliance">Compliance & Legal</SelectItem>
                  <SelectItem value="general">General Business Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredDate" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Consultation Date *</Label>
              <Input id="preferredDate" type="date" className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Time Slot *</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select a time slot" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00-10:30">9:00 AM - 10:30 AM</SelectItem>
                  <SelectItem value="11:00-12:30">11:00 AM - 12:30 PM</SelectItem>
                  <SelectItem value="2:00-3:30">2:00 PM - 3:30 PM</SelectItem>
                  <SelectItem value="4:00-5:30">4:00 PM - 5:30 PM</SelectItem>
                  <SelectItem value="6:00-7:30">6:00 PM - 7:30 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="businessNeeds" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Business Requirements</Label>
              <div className="relative"><MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Textarea id="businessNeeds" placeholder="Describe your business challenges and specific requirements for UAE market entry or expansion..." className="pl-10 min-h-[100px] resize-none rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.businessNeeds} onChange={(e) => handleInputChange("businessNeeds", e.target.value)} /></div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">Submit Consultation Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UAEBusinessConsultant
