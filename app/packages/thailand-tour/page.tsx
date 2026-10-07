"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, X, ChevronDown, ChevronUp, Building, Utensils, Bus, Plane, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface BookingFormData {
  fullName: string
  email: string
  phone: string
  participants: string
  preferredDate: string
  comments: string
}

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

function ThailandTour() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    participants: "1",
    preferredDate: "",
    comments: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<BookingFormData>>({})
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "Do I need a visa to visit Thailand?",
      answer:
        "Many nationalities can enter Thailand visa-free for 30-60 days depending on your passport. We provide complete visa guidance and can assist with visa applications if required for your specific nationality.",
      isOpen: false,
    },
    {
      question: "What's the best time to visit Thailand?",
      answer:
        "Thailand has three seasons: cool (November-February), hot (March-May), and rainy (June-October). The cool season offers the most pleasant weather, while each season has its unique charm and activities.",
      isOpen: false,
    },
    {
      question: "What are the must-visit places in Thailand?",
      answer:
        "Popular destinations include Bangkok (temples, markets, nightlife), Chiang Mai (culture, mountains), Phuket and Krabi (beaches), Ayutthaya (ancient ruins), and Koh Samui (tropical paradise). We customize itineraries based on your interests.",
      isOpen: false,
    },
    {
      question: "Is Thailand safe for tourists?",
      answer:
        "Thailand is generally very safe for tourists and known for its hospitality. We provide 24/7 support, local guides, and safety briefings. Standard travel precautions are recommended, especially in crowded areas.",
      isOpen: false,
    },
    {
      question: "What about food and dietary requirements?",
      answer:
        "Thai cuisine is world-renowned and diverse. We can accommodate all dietary requirements including vegetarian, vegan, halal, and allergy-specific needs. Our packages include breakfast and dinner at quality restaurants.",
      isOpen: false,
    },
  ])

  const packageFeatures = [
    {
      icon: Building,
      title: "5 Star Hotels",
      description: "Luxury accommodations with world-class amenities and service",
    },
    {
      icon: Utensils,
      title: "Breakfast & Dinner",
      description: "Authentic Thai cuisine and international dining experiences",
    },
    {
      icon: Bus,
      title: "City Tours",
      description: "Guided tours to temples, markets, and cultural attractions",
    },
    {
      icon: Plane,
      title: "Visa Free",
      description: "Hassle-free travel with visa assistance and guidance",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name as keyof BookingFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const errors: Partial<BookingFormData> = {}

    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required"
    if (!formData.participants || Number.parseInt(formData.participants) < 1) {
      errors.participants = "At least 1 participant is required"
    }
    if (!formData.preferredDate) errors.preferredDate = "Please select a preferred date"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const { fullName, email, phone, participants, preferredDate, comments } = formData

      // Message structure
      const message = `
📍 *Booking Request - Thailand Tour*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
👥 *Participants:* ${participants}
📅 *Preferred Date:* ${preferredDate}
📝 *Comments:* ${comments || "N/A"}

Please provide Thailand tour packages available for booking.
      `.trim()

      // WhatsApp redirect URL (your business number below)
      const phoneNumber = "251906700007" // <- Replace with your WhatsApp number (without +)
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

      // Open WhatsApp
      window.open(whatsappURL, "_blank")

      // Optional: Reset form and close modal
      setIsModalOpen(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        participants: "1",
        preferredDate: "",
        comments: "",
      })
    }
  }

  const toggleFAQ = (index: number) => {
    setFaqItems((prev) => prev.map((item, i) => (i === index ? { ...item, isOpen: !item.isOpen } : item)))
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormErrors({})
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Thailand Island Paradise</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">Thailand Island Paradise</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">Crystal waters, tropical retreats, ancient temples, and exquisite Thai cuisine in paradise destinations.</p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Thailand Tour</span>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative h-[830px] rounded-2xl overflow-hidden">
              <Image
                src="/packages/thailand-tour/thailand.jpeg"
                alt="Thailand Tour Main"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Thai Temple" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Thai Beach" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Thai Food" fill className="object-cover" />
              </div>
            </div> */}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-4">Amazing Thailand Experience</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Discover the magic of Thailand with our premium tour packages. From ancient temples and bustling markets
                to pristine beaches and delicious cuisine, experience the perfect blend of culture, adventure, and
                relaxation in the Land of Smiles.
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-[#DFB75C]/10 p-6 rounded-2xl border border-[#DFB75C]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Starting from</p>
                  <p className="font-serif text-3xl font-bold text-[#DFB75C]">150,000 Birr</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">per person</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">All meals included</p>
                  <p className="text-sm text-emerald-600 font-medium">5-star luxury</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-6">What&apos;s Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {packageFeatures.map((feature, index) => (
                  <Card key={index} className="border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#C59B27]/60 transition-all bg-white dark:bg-[#0D2245]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#DFB75C]/10 rounded-lg">
                          <feature.icon className="w-5 h-5 text-[#DFB75C]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tour Highlights */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-4">Popular Destinations</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Bangkok - The Capital</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Grand Palace, Wat Pho, floating markets, and vibrant street life
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Chiang Mai - Cultural Heart</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Ancient temples, night bazaars, and mountain adventures</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Phuket - Beach Paradise</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Stunning beaches, water sports, and tropical island hopping</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Ayutthaya - Ancient Kingdom</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">UNESCO World Heritage ruins and historical temples</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white dark:bg-[#071326]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-[#0D2245] transition-colors"
                  aria-expanded={faq.isOpen}
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {faq.isOpen && (
                  <div className="px-6 pb-4 bg-slate-50 dark:bg-[#0D2245]">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-[#DFB75C]/8 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Thai Adventure?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Book your Thailand tour today and experience the perfect blend of culture, cuisine, and tropical paradise
            with our luxury packages.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-lg px-8 py-4 h-auto font-bold rounded-full shadow-lg shadow-[#DFB75C]/20"
          >
            Book Your Thailand Tour
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Book Thailand Tour</h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.fullName ? "border-red-500" : ""}`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.email ? "border-red-500" : ""}`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.phone ? "border-red-500" : ""}`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="participants" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Number of Participants *
                  </Label>
                  <Input
                    id="participants"
                    name="participants"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.participants ? "border-red-500" : ""}`}
                  />
                  {formErrors.participants && <p className="text-red-500 text-sm mt-1">{formErrors.participants}</p>}
                </div>

                <div>
                  <Label htmlFor="preferredDate" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Preferred Date *
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.preferredDate ? "border-red-500" : ""}`}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {formErrors.preferredDate && <p className="text-red-500 text-sm mt-1">{formErrors.preferredDate}</p>}
                </div>

                <div>
                  <Label htmlFor="comments" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Tour Preferences & Special Requests
                  </Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Beach or cultural focus? Dietary requirements? Any special requests..."
                    rows={3}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal} className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold">
                    Submit Booking
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ThailandTour
