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

function VisaServices() {
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

  const services = [
    { icon: <Plane className="w-6 h-6" />, title: "Tourist Visas", description: "Leisure travel visas for vacation, sightseeing, and short-term visits worldwide" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Business Visas", description: "Professional travel visas for meetings, conferences, and business activities" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Student Visas", description: "Educational visas for study abroad programs, universities, and academic exchanges" },
    { icon: <Heart className="w-6 h-6" />, title: "Family Visas", description: "Reunion visas for family visits, spouse visas, and dependent applications" },
  ]

  const destinations = [
    { region: "Europe", countries: ["Schengen Area", "UK", "Ireland", "Switzerland"], processingTime: "5-15 days" },
    { region: "North America", countries: ["USA", "Canada", "Mexico"], processingTime: "3-30 days" },
    { region: "Asia Pacific", countries: ["Australia", "New Zealand", "Japan", "Singapore"], processingTime: "3-20 days" },
    { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Turkey"], processingTime: "1-10 days" },
  ]

  const faqs = [
    { question: "How long does visa processing typically take?", answer: "Processing times vary by destination and visa type. Tourist visas typically take 3-15 business days, while business and student visas may take 2-6 weeks. We provide accurate timelines during consultation based on your specific requirements." },
    { question: "What documents do I need for a visa application?", answer: "Common requirements include a valid passport, completed application form, passport photos, proof of accommodation, travel itinerary, financial statements, and travel insurance. Specific requirements vary by destination and visa type." },
    { question: "Can you guarantee visa approval?", answer: "While we cannot guarantee approval (as this is the embassy's decision), our expert guidance and thorough application preparation significantly increase your chances of success. We have a 95%+ approval rate across all visa types." },
    { question: "What if my visa application is rejected?", answer: "In case of rejection, we provide detailed feedback on the reasons and assist with reapplication strategies. We also offer appeal services where applicable and help strengthen your application for future submissions." },
    { question: "Do you provide expedited visa services?", answer: "Yes, we offer expedited processing for urgent travel needs where available. Express services can reduce processing times by 50-70% for an additional fee, subject to embassy availability." },
    { question: "Can you help with visa extensions or renewals?", answer: "We assist with visa extensions, renewals, and status changes. Our team helps navigate the requirements for extending your stay or changing your visa category while in the destination country." },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <Plane className="w-3.5 h-3.5" />
            <span>Global Visa Solutions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Professional Visa Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Expert visa consultation and application assistance for seamless international travel.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Visa Services</span>
          </div>
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Visa Consultation
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
                <Shield className="w-3.5 h-3.5" />
                <span>Expert Guidance</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                Comprehensive Visa Solutions Worldwide
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                Navigate the complex world of international visas with confidence. Our expert team provides personalized
                consultation and end-to-end application support for all types of visas, ensuring your travel plans proceed
                smoothly and efficiently.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                From tourist and business visas to student and family reunification applications, we handle every detail
                with precision and care, backed by years of experience and deep knowledge of global immigration requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">50,000+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Visas Processed</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">95%+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Approval Rate</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>Visa Types</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Visa Types We Handle
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

      {/* ── Global Destinations ───────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Coverage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Global Destinations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="group rounded-3xl p-6 bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white">{dest.region}</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold text-[#C59B27] dark:text-[#DFB75C] border border-[#DFB75C]/40 bg-amber-50/50 dark:bg-amber-950/20">
                    {dest.processingTime}
                  </span>
                </div>
                <div className="space-y-2">
                  {dest.countries.map((country, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3 h-3 text-[#C59B27] flex-shrink-0" />
                      {country}
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
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Document Review</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Comprehensive document verification and preparation assistance</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Fast Processing</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Expedited services available for urgent travel needs</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Success Guarantee</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">95%+ approval rate with expert application guidance</p>
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Visa Application?</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Get expert guidance and ensure your visa application success with our professional consultation services.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Schedule Visa Consultation
          </button>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white flex items-center gap-2">
              <Plane className="w-6 h-6 text-[#C59B27]" />
              Book Visa Consultation
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name (as per passport) *</Label>
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
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nationality/Passport Country *</Label>
              <Select value={formData.nationality} onValueChange={(value) => handleInputChange("nationality", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select your nationality" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethiopia">Ethiopia</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="philippines">Philippines</SelectItem>
                  <SelectItem value="egypt">Egypt</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Destination Country *</Label>
              <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select destination" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="schengen">Schengen Area</SelectItem>
                  <SelectItem value="uae">United Arab Emirates</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Visa Type *</Label>
              <Select value={formData.visaType} onValueChange={(value) => handleInputChange("visaType", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]"><SelectValue placeholder="Select visa type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourist">Tourist/Visitor Visa</SelectItem>
                  <SelectItem value="business">Business Visa</SelectItem>
                  <SelectItem value="student">Student Visa</SelectItem>
                  <SelectItem value="work">Work Visa</SelectItem>
                  <SelectItem value="family">Family/Spouse Visa</SelectItem>
                  <SelectItem value="transit">Transit Visa</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="travelDate" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Intended Travel Date</Label>
              <div className="relative"><Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input id="travelDate" type="date" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.travelDate} onChange={(e) => handleInputChange("travelDate", e.target.value)} min={new Date().toISOString().split("T")[0]} /></div>
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
                  <SelectItem value="9:00-10:00">9:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10:30-11:30">10:30 AM - 11:30 AM</SelectItem>
                  <SelectItem value="12:00-1:00">12:00 PM - 1:00 PM</SelectItem>
                  <SelectItem value="2:30-3:30">2:30 PM - 3:30 PM</SelectItem>
                  <SelectItem value="4:00-5:00">4:00 PM - 5:00 PM</SelectItem>
                  <SelectItem value="5:30-6:30">5:30 PM - 6:30 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="additionalInfo" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Additional Information</Label>
              <div className="relative"><MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Textarea id="additionalInfo" placeholder="Any specific questions, previous visa history, or additional details..." className="pl-10 min-h-[100px] resize-none rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.additionalInfo} onChange={(e) => handleInputChange("additionalInfo", e.target.value)} /></div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">Book Consultation</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VisaServices
