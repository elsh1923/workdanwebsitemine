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

function ContactPage() {
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
    <div className="min-h-screen bg-white dark:bg-[#071326]">
      {/* ── Hero Section ── */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <img
          src="/about-us/aboutUs-hero-section.png"
          alt="Contact Workdan Tour & Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#DFB75C] font-medium tracking-widest uppercase text-sm mb-4">
            Workdan Tour &amp; Travel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Contact{" "}
            <span className="text-[#DFB75C]">Us</span>
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to embark on your next adventure? We&apos;re here to help you
            plan the perfect journey — reach out today.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 bg-slate-50 dark:bg-[#071326]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Contact Form (2/3 width) ── */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]">
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-8 py-6">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-[#DFB75C]" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-slate-300 mt-1">
                    Fill out the form below and we&apos;ll get back to you within
                    minutes via WhatsApp.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-slate-700 dark:text-slate-300 font-medium"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-slate-700 dark:text-slate-300 font-medium"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27]"
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Service */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-slate-700 dark:text-slate-300 font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+xxx xxxx xxxx"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="service"
                          className="text-slate-700 dark:text-slate-300 font-medium"
                        >
                          Service Interest
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger className="border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="desert-safari">
                              Desert Safari
                            </SelectItem>
                            <SelectItem value="city-tours">City Tours</SelectItem>
                            <SelectItem value="adventure-packages">
                              Adventure Packages
                            </SelectItem>
                            <SelectItem value="travel-planning">
                              Travel Planning &amp; Consultation
                            </SelectItem>
                            <SelectItem value="business-consulting">
                              UAE Business Consulting
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-slate-700 dark:text-slate-300 font-medium"
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="border-slate-300 dark:border-slate-700 dark:bg-[#0A1E3F] dark:text-white focus:ring-[#C59B27]/40 focus:border-[#C59B27] min-h-[130px]"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-[#DFB75C] hover:bg-white text-[#071326] font-semibold py-3 text-base rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* ── Sidebar (1/3 width) ── */}
            <div className="space-y-6">

              {/* Contact Details */}
              <Card className="shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]">
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#DFB75C]" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Addresses */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#DFB75C]/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Office Addresses
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        Sharjah Business Center,
                        <br />
                        Ground Floor, UAE
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                        Megenagna Wach Bldg. 2nd Floor,
                        <br />
                        1000 Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#DFB75C]/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Phone Numbers
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Main: +251 906 700 007
                        <br />
                        WhatsApp: +251 906 700 007
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#DFB75C]/15 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#DFB75C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Email Addresses
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
              <Card className="shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]">
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#DFB75C]" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        Monday – Sunday
                      </span>
                      <span className="text-[#DFB75C] font-semibold">
                        24 / 7 Open
                      </span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>Emergency Support:</strong> Available 24 / 7 for
                        existing bookings
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]">
                <CardHeader className="bg-[#0A1E3F] text-white rounded-t-2xl px-6 py-5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#DFB75C]" />
                    Quick Contact
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
                      WhatsApp Chat
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] rounded-full justify-center gap-2"
                    asChild
                  >
                    <a href="tel:+251906700007">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ── Map Section ── */}
          <div className="mt-16">
            <Card className="shadow-xl border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0D2245]">
              <CardHeader className="bg-[#0A1E3F] text-white px-8 py-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#DFB75C]" />
                  Find Our Addis Ababa Office
                </CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  Megenagna Wach Bldg. 2nd Floor, Addis Ababa, Ethiopia
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  title="Workdan Tour & Travel – Addis Ababa Office"
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
            Ready to Plan Your{" "}
            <span className="text-[#DFB75C]">Dream Journey?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Our team is available 24 / 7 to help you craft the perfect travel
            experience — wherever in the world you want to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#DFB75C] hover:bg-white text-[#071326] font-semibold px-8 py-3 rounded-full text-base transition-colors duration-200 flex items-center gap-2"
              asChild
            >
              <Link href="/flights">
                Plan Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] px-8 py-3 rounded-full text-base font-semibold transition-colors duration-200"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
