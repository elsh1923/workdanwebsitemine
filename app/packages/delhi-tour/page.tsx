"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, X, ChevronDown, ChevronUp, Building, Plane, MapPin, Camera } from "lucide-react"
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

function DelhiTour() {
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
      question: "What are the visa requirements for visiting India and Delhi?",
      answer:
        "Most foreign nationals require a visa to enter India. We provide comprehensive visa assistance including e-Visa applications (available for 171+ countries), traditional visa processing, and document preparation. Tourist e-Visas are typically valid for 30-365 days depending on the type. Required documents include a valid passport (6+ months validity), recent photograph, and proof of travel arrangements. Our visa service team handles the entire process, from application submission to tracking and collection, ensuring a smooth and hassle-free experience for your Delhi adventure.",
      isOpen: false,
    },
    {
      question: "What's the best time to visit Delhi, and what should I expect weather-wise?",
      answer:
        "Delhi experiences three distinct seasons: winter (November-February) with pleasant temperatures of 5-25°C, ideal for sightseeing; summer (March-June) with hot temperatures reaching 45°C, best avoided for outdoor activities; and monsoon (July-October) with heavy rainfall and humidity. Winter is the peak tourist season offering perfect weather for exploring monuments, markets, and outdoor attractions. We recommend avoiding summer months unless you're comfortable with extreme heat. Monsoon season offers lush greenery and fewer crowds but requires flexibility due to occasional heavy rains.",
      isOpen: false,
    },
    {
      question: "How safe is Delhi for tourists, and what precautions should I take?",
      answer:
        "Delhi is generally safe for tourists when proper precautions are taken. The city has significant police presence, especially around tourist areas and monuments. We recommend staying in reputable accommodations, using registered tour operators, avoiding isolated areas after dark, and being cautious with street food initially. Our tours include experienced local guides who ensure your safety and provide cultural insights. We offer 24/7 emergency support, travel insurance recommendations, and safety briefings. Women travelers should dress modestly, especially when visiting religious sites, and consider joining group tours for added security and cultural understanding.",
      isOpen: false,
    },
    {
      question: "What makes Delhi's food scene so special, and can you accommodate dietary restrictions?",
      answer:
        "Delhi is India's culinary capital, offering an incredible diversity of regional cuisines, street food, and fine dining experiences. From spicy chaat at Chandni Chowk to Mughlai delicacies in Old Delhi, and from South Indian dosas to Punjabi paranthas, the city represents all of India's culinary traditions. We can accommodate all dietary requirements including vegetarian, vegan, Jain, halal, kosher, and allergy-specific needs. Our food tours include visits to legendary eateries, cooking classes with local families, spice market explorations, and dining experiences ranging from street vendors to Michelin-recommended restaurants, ensuring you experience Delhi's gastronomic heritage safely and authentically.",
      isOpen: false,
    },
    {
      question: "What cultural etiquette should I be aware of when visiting Delhi's monuments and religious sites?",
      answer:
        "Delhi's rich cultural heritage requires respectful behavior at historical and religious sites. Remove shoes before entering temples, mosques, and gurdwaras; cover your head at Sikh temples and some mosques; dress modestly covering shoulders and knees; avoid leather items at Jain temples; maintain silence in prayer areas; and ask permission before photographing people. During festivals like Diwali, Holi, or Eid, expect crowds and modified schedules. Our cultural orientation sessions help you understand local customs, religious practices, and social etiquette. We provide appropriate clothing recommendations and cultural context to ensure you interact respectfully with local communities while fully appreciating Delhi's diverse spiritual and historical heritage.",
      isOpen: false,
    },
  ])

  const packageFeatures = [
    {
      icon: Plane,
      title: "Complete Ticketing Services",
      description:
        "Comprehensive flight booking assistance including international arrivals, domestic connections, and special fare negotiations.",
    },
    {
      icon: Building,
      title: "Professional Visa Services",
      description:
        "Expert visa application support including document preparation, embassy liaison, e-Visa processing, and expedited services.",
    },
    {
      icon: MapPin,
      title: "Heritage & Cultural Tours",
      description:
        "Expertly guided explorations of Delhi's UNESCO World Heritage sites, Mughal monuments, colonial architecture, and vibrant markets.",
    },
    {
      icon: Camera,
      title: "Photography & Experience Tours",
      description:
        "Specialized photography tours capturing Delhi's architectural marvels, street life, and cultural festivals.",
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
📍 *Booking Request - Delhi Tour*

👤 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
👥 *Participants:* ${participants}
📅 *Preferred Date:* ${preferredDate}
📝 *Comments:* ${comments || "N/A"}

Please provide Delhi tour packages with ticketing and visa assistance.
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
            <span>Delhi & Royal India</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">Delhi & Royal India Tour</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">Imperial architecture, vibrant bazaars, Mughal heritage, and the iconic Taj Mahal in the heart of royal India.</p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#DFB75C] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Delhi Tour</span>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative min-h-[800px] rounded-2xl overflow-hidden">
              <Image
                // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/delhi-AnphEITETinn0KYXusKxbyE4chYSpE.jpeg"
                src="/packages/delhi-tour/delhi-herosection.jpeg?height=450&width=700"
                alt="Delhi Tour Main"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Red Fort" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="India Gate" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=150&width=200" alt="Lotus Temple" fill className="object-cover" />
              </div>
            </div> */}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-4">Discover India&apos;s Magnificent Capital</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Delhi stands as a living testament to India&apos;s extraordinary history, where seven ancient cities layer
                upon each other to create one of the world&apos;s most fascinating capitals. This sprawling metropolis of
                over 30 million people seamlessly weaves together 3,000 years of history, from the legendary
                Indraprastha of the Mahabharata to the modern seat of the world&apos;s largest democracy.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Our comprehensive Delhi experiences reveal the city&apos;s many layers - from UNESCO World Heritage sites and
                architectural marvels to vibrant markets, world-class museums, and culinary adventures that showcase
                India&apos;s incredible diversity. With expert guides, comfortable transportation, and complete travel
                support including visa assistance, we ensure your Delhi journey is both enriching and effortless.
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-[#DFB75C]/10 p-6 rounded-2xl border border-[#DFB75C]/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Starting from</p>
                  <p className="font-serif text-3xl font-bold text-[#DFB75C]">190,000 Birr</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">per person</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Visa assistance included</p>
                  <p className="text-sm text-emerald-600 font-medium">Expert local guides</p>
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
              <h3 className="font-serif text-2xl font-semibold text-slate-900 dark:text-white mb-4">Iconic Monuments & Cultural Treasures</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Red Fort & Old Delhi Heritage</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Explore the magnificent Red Fort (Lal Qila), a UNESCO World Heritage site and symbol of Mughal
                      power.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">New Delhi & Colonial Grandeur</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Discover the planned city of New Delhi with its wide tree-lined avenues and impressive colonial
                      architecture.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Qutub Complex & Ancient Delhi</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Marvel at the Qutub Minar, a 73-meter tall victory tower and UNESCO World Heritage site
                      representing the beginning of Muslim rule in India.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#DFB75C]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#DFB75C] font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">Modern Marvels & Spiritual Sites</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Experience Delhi&apos;s contemporary architectural wonders including the Lotus Temple, a Bahá&apos;í House
                      of Worship known for its flower-like design and peaceful atmosphere welcoming all faiths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Immersion Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Immersive Delhi Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Culinary Adventures</h3>
                <p className="text-gray-600 leading-relaxed">
                  Embark on gastronomic journeys through Delhi's legendary food scene, from street food tours in Old
                  Delhi sampling chaat, paranthas, and jalebis, to fine dining experiences featuring regional Indian
                  cuisines. Join cooking classes with local families, explore spice markets with expert guides, visit
                  traditional sweet shops, and discover why Delhi is considered India's food capital with influences
                  from across the subcontinent.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Arts & Crafts Heritage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover Delhi's rich artistic traditions through visits to artisan workshops in areas like Karol Bagh
                  and Dilli Haat. Watch master craftsmen create intricate jewelry, textiles, pottery, and metalwork
                  using techniques passed down through generations. Participate in hands-on workshops learning
                  traditional arts like miniature painting, block printing, and embroidery while supporting local
                  artisan communities and preserving cultural heritage.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Historical Narratives</h3>
                <p className="text-gray-600 leading-relaxed">
                  Delve deep into Delhi's fascinating history through specialized heritage walks, museum visits, and
                  storytelling sessions with expert historians. Explore lesser-known monuments, archaeological sites,
                  and hidden gems while learning about the city's role in shaping Indian civilization. Visit world-class
                  museums, attend cultural performances, and engage with local historians who bring Delhi's incredible
                  past to life through compelling narratives and archaeological evidence.
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Delhi?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Book your Delhi adventure today and discover the incredible history, culture, and heritage of India&apos;s
            magnificent capital with our expert guidance and comprehensive services.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] text-lg px-8 py-4 h-auto font-bold rounded-full shadow-lg shadow-[#DFB75C]/20"
          >
            Book Your Delhi Tour
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-[#0D2245] rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Book Delhi Tour</h3>
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
                    placeholder="Historical sites, food tours, cultural experiences? Visa assistance needed? Any special requirements..."
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

export default DelhiTour
