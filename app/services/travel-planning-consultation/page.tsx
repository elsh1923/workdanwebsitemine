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

function TravelConsultation() {
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

  const services = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Destination Research",
      description: "Comprehensive research on destinations tailored to your preferences and budget",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Itinerary Planning",
      description: "Detailed day-by-day itineraries with activities, dining, and accommodation recommendations",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Coordination",
      description: "Specialized planning for family trips, corporate retreats, and group adventures",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "VIP Experiences",
      description: "Access to exclusive experiences and premium accommodations worldwide",
    },
  ]

  const faqs = [
    {
      question: "How long does a typical consultation take?",
      answer:
        "Our initial consultation typically lasts 60-90 minutes, during which we'll discuss your travel preferences, budget, timeline, and create a preliminary plan outline.",
    },
    {
      question: "What's included in the consultation fee?",
      answer:
        "The consultation includes a detailed discussion of your travel needs, a preliminary itinerary outline, destination recommendations, and a follow-up summary document with our recommendations.",
    },
    {
      question: "Do you handle bookings or just provide recommendations?",
      answer:
        "We offer both services! We can provide detailed recommendations for you to book independently, or we can handle all bookings on your behalf for a comprehensive travel planning experience.",
    },
    {
      question: "How far in advance should I book a consultation?",
      answer:
        "We recommend booking at least 2-3 months before your intended travel date for optimal planning time, though we can accommodate shorter timelines based on availability.",
    },
    {
      question: "What if I need to reschedule my consultation?",
      answer:
        "We understand plans change! You can reschedule your consultation up to 24 hours before the scheduled time without any additional fees.",
    },
    {
      question: "Do you specialize in certain types of travel?",
      answer:
        "While we plan all types of travel, our specialties include luxury travel, adventure tourism, cultural immersion experiences, and multi-destination trips.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <PlaneTakeoff className="w-3.5 h-3.5" />
            <span>Expert Service</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Travel Planning &amp; Consultation
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Transform your travel dreams into perfectly crafted experiences with our expert consultation services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#DFB75C] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Travel Planning</span>
          </div>
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Your Consultation
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
                <PlaneTakeoff className="w-3.5 h-3.5" />
                <span>Tailored for You</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                Expert Travel Planning Tailored to You
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                Our comprehensive travel consultation service combines years of industry expertise with personalized
                attention to create unforgettable travel experiences. Whether you're planning a romantic getaway, family
                vacation, or corporate retreat, we handle every detail so you can focus on making memories.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                From destination research and itinerary planning to booking coordination and on-trip support, we're your
                dedicated travel partners every step of the way.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Happy Travelers</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <div className="font-serif text-2xl font-bold text-[#C59B27] mb-1">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Destinations Covered</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Our Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              What We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group rounded-3xl p-6 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300 text-center">
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
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
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Duration</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">60-90 minutes initial consultation</p>
            </div>
            <div>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                <span className="font-bold text-xl text-[#C59B27]">$</span>
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Starting Price</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">From $0-$150 per consultation</p>
            </div>
            <div>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27]">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">Availability</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">7 days a week, flexible scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
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
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-2xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0A1E3F] dark:text-white hover:text-[#C59B27] dark:hover:text-[#DFB75C]">
                  {faq.question}
                </AccordionTrigger>
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Plan Your Perfect Trip?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Book your consultation today and let&apos;s start crafting your dream travel experience.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* ── Booking Modal ─────────────────────────────────────────────── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] border border-slate-200 dark:border-slate-800 rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white">Book Your Consultation</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="fullName" type="text" placeholder="Enter your full name" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="email" type="email" placeholder="Enter your email" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input id="phone" type="tel" placeholder="Enter your phone number" className="pl-10 rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredDate" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Consultation Date *</Label>
              <Input id="preferredDate" type="date" className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="preferredTime" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preferred Time Slot *</Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className="rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]">
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00-10:30">9:00 AM - 10:30 AM</SelectItem>
                  <SelectItem value="11:00-12:30">11:00 AM - 12:30 PM</SelectItem>
                  <SelectItem value="1:00-2:30">1:00 PM - 2:30 PM</SelectItem>
                  <SelectItem value="3:00-4:30">3:00 PM - 4:30 PM</SelectItem>
                  <SelectItem value="5:00-6:30">5:00 PM - 6:30 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="travelNeeds" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Brief Description of Travel Needs</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Textarea id="travelNeeds" placeholder="Tell us about your travel plans, preferences, budget, etc." className="pl-10 min-h-[100px] resize-none rounded-xl border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F]" value={formData.travelNeeds} onChange={(e) => handleInputChange("travelNeeds", e.target.value)} />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1 rounded-full border-slate-300 dark:border-slate-700" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" className="flex-1 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">Submit Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TravelConsultation
