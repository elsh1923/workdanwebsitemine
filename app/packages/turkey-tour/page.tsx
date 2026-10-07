"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, X, ChevronDown, ChevronUp, Building, Utensils, Plane, MapPin } from "lucide-react"
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

function TurkeyTour() {
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
      question: "What are the visa requirements for visiting Turkey, and how easy is the application process?",
      answer:
        "Turkey offers convenient e-Visa services for citizens of many countries, making the application process simple and fast. Most tourists can obtain an e-Visa online within minutes for stays up to 90 days. Citizens of some countries can enter visa-free for shorter periods. We provide complete visa assistance including document preparation, application submission, and status tracking. Required documents typically include a valid passport (6+ months validity), travel itinerary, and proof of accommodation. Our visa service ensures you have all necessary documentation for a smooth entry into Turkey.",
      isOpen: false,
    },
    {
      question: "When is the best time to visit Turkey, and what should I expect weather-wise?",
      answer:
        "Turkey has diverse climate zones, but generally the best time to visit is during spring (April-May) and autumn (September-November) when temperatures are pleasant and crowds are smaller. Summer (June-August) is perfect for coastal areas but can be very hot in central regions like Cappadocia. Winter (December-March) offers fewer crowds and beautiful snow-capped landscapes, ideal for Istanbul's indoor attractions and thermal springs. Cappadocia's hot air balloon flights operate year-round but are most reliable in spring and autumn. We help you choose the perfect time based on your preferred activities and destinations.",
      isOpen: false,
    },
    {
      question: "How safe is Turkey for tourists, and what should I know about local customs?",
      answer:
        "Turkey is generally very safe for tourists, with well-developed tourism infrastructure and helpful local people. Major tourist areas have good security presence and English-speaking support. Turkish culture is welcoming and hospitable - you'll often be invited for tea! When visiting mosques, dress modestly (cover shoulders, knees, and head for women), remove shoes before entering, and avoid visiting during prayer times. Tipping is appreciated but not mandatory (10-15% at restaurants). Learning basic Turkish phrases like 'Merhaba' (hello) and 'Teşekkür ederim' (thank you) is greatly appreciated by locals.",
      isOpen: false,
    },
    {
      question: "What makes Turkish cuisine so special, and can you accommodate dietary restrictions?",
      answer:
        "Turkish cuisine is a delicious fusion of Mediterranean, Central Asian, and Middle Eastern influences, featuring fresh ingredients, aromatic spices, and diverse cooking techniques. From kebabs and mezes to baklava and Turkish delight, the food reflects Turkey's position at the crossroads of continents. We can accommodate all dietary requirements including vegetarian, vegan, halal, kosher, and allergy-specific needs. Turkish cuisine naturally offers many vegetarian options, and our food tours include visits to local markets, cooking classes, and dining experiences ranging from street food to Ottoman palace cuisine.",
      isOpen: false,
    },
    {
      question: "What should I know about shopping in Turkey, and are there any cultural considerations?",
      answer:
        "Turkey offers incredible shopping experiences from historic bazaars to modern malls. The Grand Bazaar and Spice Bazaar in Istanbul are must-visits where bargaining is expected and part of the cultural experience. Start by offering 30-50% of the asking price and negotiate respectfully. Popular purchases include Turkish carpets, ceramics, jewelry, leather goods, spices, and textiles. Always shop from reputable dealers, especially for expensive items like carpets. We provide shopping tours with trusted vendors, cultural context about traditional crafts, and guidance on bargaining etiquette to ensure authentic and fair purchases.",
      isOpen: false,
    },
  ])

  const packageFeatures = [
    {
      icon: Building,
      title: "3 Star Hotel Stay",
      description:
        "Comfortable accommodations in well-located 3-star hotels featuring traditional Turkish hospitality.",
    },
    {
      icon: Utensils,
      title: "Daily Breakfast",
      description:
        "Authentic Turkish breakfast experiences featuring turkish traditional breakfasts.",
    },
    {
      icon: Plane,
      title: "Ticket & Visa Services",
      description:
        "Complete travel arrangement support including flight bookings, domestic transportation, e-Visa application assistance.",
    },
    {
      icon: MapPin,
      title: "Guided Cultural Tours",
      description:
        "Expert local guides providing deep insights into Turkey's rich history, from Byzantine and Ottoman heritage.",
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
📍 *Booking Request - Turkey Tour*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
👥 *Participants:* ${participants}
📅 *Preferred Date:* ${preferredDate}
📝 *Comments:* ${comments || "N/A"}

Please provide Turkey tour packages available for booking.
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
            <span>Istanbul, Turkey</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">Istanbul, Turkey Tour</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">Where East meets West along the Bosphorus Strait. Ottoman palaces, the Hagia Sophia, and hot air balloons over Cappadocia.</p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Turkey Tour</span>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/turkey-hero-i7pH93Mau5TafynYOUKlDs0ufc7pmt.jpeg"
                alt="Turkey Tour Main"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Hagia Sophia" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Cappadocia Balloons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Turkish Cuisine"
                  fill
                  className="object-cover"
                />
              </div>
            </div> */}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-4">Discover the Crossroads of Civilizations</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Turkey is a mesmerizing country that straddles two continents, offering travelers an extraordinary
                journey through layers of history, culture, and natural beauty.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                From the bustling streets of Istanbul, where Byzantine churches stand alongside Ottoman mosques and
                modern skyscrapers, to the otherworldly landscapes of Cappadocia with its fairy chimneys and floating
                hot air balloons, Turkey offers contrasts that continually surprise and delight.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Our carefully crafted Turkey tours ensure you experience the country's most iconic destinations while
                discovering hidden gems known only to locals. From comfortable accommodations and authentic Turkish
                breakfasts to expert guides and seamless travel arrangements.
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-[#DFB75C]/10 p-6 rounded-2xl border border-[#DFB75C]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Starting from</p>
                  <p className="font-serif text-3xl font-bold text-[#DFB75C]">350,000 Birr</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">per person</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Hotels & breakfast included</p>
                  <p className="text-sm text-emerald-600 font-medium">Visa assistance provided</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-6">What's Included</h3>
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
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Legendary Destinations & Magical Experiences
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Istanbul - The Imperial City</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Explore the magnificent city that was once the capital of both Byzantine and Ottoman empires.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Cappadocia - Land of Fairy Tales</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Experience one of the world's most surreal landscapes, where volcanic eruptions and erosion have
                      created a wonderland of fairy chimneys, cave churches, and underground cities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Pamukkale - Cotton Castle</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Witness the natural wonder of Pamukkale's white travertine terraces, formed over millennia by
                      mineral-rich thermal waters cascading down the mountainside.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Ephesus & Ancient Wonders</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Step back in time at Ephesus, one of the best-preserved ancient cities in the world and former
                      home to the Temple of Artemis, one of the Seven Wonders of the Ancient World.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Experiences Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Authentic Turkish Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Turkish Bath & Wellness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience the ancient tradition of Turkish hammam, a cleansing and relaxation ritual that has been
                  part of Turkish culture for centuries. Enjoy professional massage treatments, steam baths, and
                  exfoliation in historic bathhouses with beautiful marble interiors. Visit natural thermal springs in
                  Pamukkale and other locations, and discover traditional Turkish wellness practices that promote both
                  physical and spiritual well-being.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Culinary Adventures</h3>
                <p className="text-gray-600 leading-relaxed">
                  Embark on a gastronomic journey through Turkey's diverse regional cuisines, from Ottoman palace dishes
                  to street food specialties. Join cooking classes to learn how to make traditional dishes like kebabs,
                  börek, and baklava. Visit local markets, spice bazaars, and family-run restaurants. Experience Turkish
                  tea culture, sample regional wines, and discover why Turkish cuisine is considered one of the world's
                  great culinary traditions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Arts & Crafts Heritage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover Turkey's rich artistic traditions through visits to artisan workshops and cultural centers.
                  Watch master craftsmen create beautiful Turkish carpets, ceramics, jewelry, and textiles using
                  techniques passed down through generations. Participate in hands-on workshops learning traditional
                  arts like calligraphy, tile painting, and carpet weaving. Visit museums and galleries showcasing both
                  historical artifacts and contemporary Turkish art.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Turkey?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Book your Turkish adventure today and discover the magical land where East meets West, with comfortable
            accommodations and authentic experiences included.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-lg px-8 py-4 h-auto font-bold rounded-full shadow-lg shadow-[#DFB75C]/20"
          >
            Book Your Turkey Tour
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Book Turkey Tour</h3>
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
                    placeholder="Istanbul focus, Cappadocia balloon ride, cultural experiences? Any special requirements..."
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

export default TurkeyTour
