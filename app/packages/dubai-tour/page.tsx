"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, X, ChevronDown, ChevronUp, Building, Anchor, ShoppingBag, Compass, MapPin } from "lucide-react"
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

function DubaiTour() {
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
      question: "What's the best time to visit Dubai?",
      answer:
        "The best time to visit Dubai is between November and March when temperatures are cooler and more comfortable for outdoor activities. However, Dubai offers year-round attractions with air-conditioned venues during the hotter months.",
      isOpen: false,
    },
    {
      question: "Do I need a visa to visit Dubai?",
      answer:
        "Visa requirements depend on your nationality. Many countries receive visa-on-arrival or visa-free entry. We recommend checking with UAE embassy or our travel consultants for specific requirements based on your passport.",
      isOpen: false,
    },
    {
      question: "What should I wear in Dubai?",
      answer:
        "Dubai is quite liberal, but modest dress is recommended, especially when visiting religious sites or traditional areas. Light, breathable fabrics are ideal. Swimwear is appropriate at beaches and pools.",
      isOpen: false,
    },
    {
      question: "Are your tours suitable for families?",
      answer:
        "All our Dubai tours are family-friendly and can be customized for different age groups. We offer special arrangements for children and elderly guests to ensure everyone enjoys the experience.",
      isOpen: false,
    },
    {
      question: "What's included in the tour packages?",
      answer:
        "Our packages typically include professional guide services, transportation, entrance fees to attractions, refreshments, and hotel pickup/drop-off. Specific inclusions vary by tour type - detailed information is provided for each package.",
      isOpen: false,
    },
  ])

  const packageFeatures = [
    {
      icon: Building,
      title: "Luxury City Tours",
      description: "Explore Dubai's iconic landmarks and modern marvels with expert guides",
    },
    {
      icon: Compass,
      title: "Desert Safari Adventure",
      description: "Experience thrilling dune bashing and authentic Bedouin culture",
    },
    {
      icon: Anchor,
      title: "Yacht & Cruise Experience",
      description: "Luxury yacht charters and scenic cruises along Dubai's coastline",
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Cultural Tours",
      description: "Discover traditional souks, modern malls, and Dubai's rich heritage",
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
📍 *Booking Request - Dubai Tour*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
👥 *Participants:* ${participants}
📅 *Preferred Date:* ${preferredDate}
📝 *Comments:* ${comments || "N/A"}

Please confirm availability and provide tour options.
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
            <span>Dubai, UAE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">Dubai Luxury Tour</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">Futuristic marvels, desert glamping under Arabian skies, world-class dining, and ultra-luxurious beachfront resorts.</p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Dubai Tour</span>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative h-[770px] rounded-2xl overflow-hidden w-full">
              <Image
                src="/packages/dubai-tour/landscape.jpeg"
                alt="Dubai Main Tour Image"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Burj Khalifa" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Dubai Marina" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Dubai Mall" fill className="object-cover" />
              </div>
            </div> */}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-4">Complete Dubai Experience</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Experience the best of Dubai with our comprehensive tour packages. From world-class city attractions and
                thrilling desert adventures to luxury yacht experiences and cultural discoveries, we offer unforgettable
                journeys tailored to your preferences.
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-[#DFB75C]/10 p-6 rounded-2xl border border-[#DFB75C]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Starting from</p>
                  <p className="font-serif text-3xl font-bold text-[#DFB75C]">74,657 birr</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">per person</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Customizable packages</p>
                  <p className="text-sm text-emerald-600 font-medium">Free consultation</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-6">Our Services</h3>
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
                    <p className="font-medium text-slate-900 dark:text-white">Burj Khalifa & Downtown Dubai</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Visit the world's tallest building and explore the vibrant downtown area
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Dubai Marina & JBR Beach</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Luxury waterfront dining, shopping, and beach activities</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Old Dubai & Traditional Souks</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Experience authentic culture at Gold Souk, Spice Souk, and Al Fahidi
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Palm Jumeirah & Atlantis</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Iconic man-made island with luxury resorts and attractions</p>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Dubai?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Book your Dubai adventure today and discover why millions choose Dubai as their premier travel destination.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-lg px-8 py-4 h-auto font-bold rounded-full shadow-lg shadow-[#DFB75C]/20"
          >
            Book Your Dubai Tour
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Book Dubai Tour</h3>
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
                    placeholder="Which tours interest you most? Any special requirements..."
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

export default DubaiTour
