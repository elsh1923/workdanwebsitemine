"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/50 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/delhi-AnphEITETinn0KYXusKxbyE4chYSpE.jpeg"
          alt="Delhi Tour Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Delhi Tour</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            A trip to explore Delhi - where ancient empires meet modern India. Discover the heart of the nation through
            magnificent Mughal monuments, bustling bazaars, and vibrant street life that tells the story of India's
            incredible journey through time.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>2-7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>All Group Sizes</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/delhi-AnphEITETinn0KYXusKxbyE4chYSpE.jpeg"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover India's Magnificent Capital</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Delhi stands as a living testament to India's extraordinary history, where seven ancient cities layer
                upon each other to create one of the world's most fascinating capitals. This sprawling metropolis of
                over 30 million people seamlessly weaves together 3,000 years of history, from the legendary
                Indraprastha of the Mahabharata to the modern seat of the world's largest democracy.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our comprehensive Delhi experiences reveal the city's many layers - from UNESCO World Heritage sites and
                architectural marvels to vibrant markets, world-class museums, and culinary adventures that showcase
                India's incredible diversity. With expert guides, comfortable transportation, and complete travel
                support including visa assistance, we ensure your Delhi journey is both enriching and effortless.
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-3xl font-bold text-orange-600">₹4,999</p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Visa assistance included</p>
                  <p className="text-sm text-green-600 font-medium">Expert local guides</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {packageFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <feature.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tour Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Iconic Monuments & Cultural Treasures</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Red Fort & Old Delhi Heritage</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Explore the magnificent Red Fort (Lal Qila), a UNESCO World Heritage site and symbol of Mughal
                      power.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">New Delhi & Colonial Grandeur</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Discover the planned city of New Delhi with its wide tree-lined avenues and impressive colonial
                      architecture.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Qutub Complex & Ancient Delhi</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Marvel at the Qutub Minar, a 73-meter tall victory tower and UNESCO World Heritage site
                      representing the beginning of Muslim rule in India.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Modern Marvels & Spiritual Sites</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Experience Delhi's contemporary architectural wonders including the Lotus Temple, a Bahá'í House
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={faq.isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {faq.isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {faq.isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Explore Delhi?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Book your Delhi adventure today and discover the incredible history, culture, and heritage of India's
            magnificent capital with our expert guidance and comprehensive services.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 h-auto font-semibold"
          >
            Book Your Delhi Tour
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Book Delhi Tour</h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
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
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
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
                  <Label htmlFor="participants" className="text-sm font-medium text-gray-700">
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
                  <Label htmlFor="preferredDate" className="text-sm font-medium text-gray-700">
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
                  <Label htmlFor="comments" className="text-sm font-medium text-gray-700">
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
                  <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700">
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
