"use client"
import { useState } from "react"
import Link from "next/link"
import { Check, Star, X, Clock, BriefcaseBusiness, PlaneTakeoff, ChevronRight } from "lucide-react"

const services = [
  {
    id: "travel-planning-consultation",
    title: "Travel Planning & Consultation",
    description:
      "Whether you're planning a honeymoon, a solo trip, or a group adventure, our Travel Planning & Consultation service takes the stress out of organizing your journey. Let us build your perfect itinerary — one that matches your style, schedule, and goals.",
    icon: PlaneTakeoff,
    features: [
      "Tailored travel plans based on your interests, time, and budget.",
      "Guidance with document preparation and application tracking.",
      "Expert suggestions on where to go and when to go.",
      "Smart cost breakdowns to make the most of your money.",
      "Personalized advice via call, chat, or in-person.",
    ],
    popular: true,
    fullDescription:
      "Planning a trip should feel exciting not overwhelming. That's where WorkDan Tour & Travel comes in. Our Travel Planning & Consultation service is designed to help you craft the perfect journey from scratch. We begin by listening to your preferences: Are you seeking adventure, rest, exploration, or culture? Once we understand your travel vision, we tailor a custom itinerary that fits your needs, timeline, and budget. Need help figuring out where to go? We offer destination insights based on your travel goals and the time of year. We also assist with visa and passport requirements, helping you gather and submit documents, saving you time and avoiding delays. Whether you're traveling locally or abroad, we'll recommend the best transportation, help you compare flight options, and ensure your accommodation is reliable and comfortable. Plus, we offer ongoing consultation through every stage from planning to departure so you'll never feel lost or confused. Think of us as your personal travel assistant, available to guide you every step of the way.",
    duration: "Varies based on your schedule",
    testimonials: [
      {
        name: "Sarah Johnson",
        location: "New York",
        comment:
          "The custom itinerary created for our family trip was perfect. Every detail was considered, and we experienced the destination in a way we never could have on our own.",
      },
      {
        name: "Michael Chen",
        location: "San Francisco",
        comment:
          "I was amazed by how well they understood what I was looking for. My solo adventure through the historical sites was exactly what I needed.",
      },
    ],
    faq: [
      {
        question: "How far in advance should I book?",
        answer:
          "For the best results, we recommend booking our services at least 3-6 months before your intended travel date. This gives us ample time to create a thoughtful itinerary and secure the best accommodations and experiences, especially during peak seasons.",
      },
      {
        question: "Can you work with specific budget constraints?",
        answer:
          "We pride ourselves on creating memorable experiences for all budgets. During our initial consultation, we'll discuss your budget parameters and craft an itinerary that maximizes your experience while respecting your financial boundaries.",
      },
    ],
  },
  {
    id: "uae-business-consultant",
    title: "UAE Business Consultant Activities",
    description:
      "From company setup to strategic advisory, our UAE Business Consultant services provide end-to-end support for entrepreneurs and corporations looking to establish and grow in the UAE market.",
    icon: BriefcaseBusiness,
    features: [
      "Complete support for Mainland, Free Zone, and Offshore company formation.",
      "Professional document handling, licensing, and visa services.",
      "Expert business strategy and market entry advisory.",
      "Banking, taxation, and legal document assistance under one roof.",
      "Networking, events, and branding support for scaling businesses.",
    ],
    popular: true,
    fullDescription:
      "Setting up and growing a business in the UAE can be complex—but with our expert consulting services, it becomes seamless. We assist you from the very first step: whether you're looking to register a company in a Free Zone, Mainland, or Offshore jurisdiction, or need a trusted local sponsor. Our team also supports you with PRO services for employee visas and legal document processing, financial strategy development, banking setup, tax advisory, and everything in between. We also go beyond the paperwork — organizing corporate events, setting up physical office space, and ensuring your brand is protected with trademark registration and compliance.",
    duration: "Ongoing support based on your business needs",
    testimonials: [
      {
        name: "Fatima Al Mazrouei",
        location: "Dubai",
        comment:
          "The team made my business setup in the Dubai Free Zone fast and hassle-free. From legal paperwork to banking—everything was taken care of.",
      },
      {
        name: "James Turner",
        location: "London",
        comment:
          "I wanted to expand my consultancy into the UAE and was overwhelmed by the regulations. They helped me set up, structure my model, and even hosted my launch event!",
      },
    ],
    faq: [
      {
        question: "Do I need to be in the UAE to start the company formation process?",
        answer:
          "No, many steps can be done remotely. However, some steps like visa stamping and biometric registration may require physical presence depending on your setup type.",
      },
      {
        question: "Which jurisdiction is best — Mainland, Free Zone, or Offshore?",
        answer:
          "It depends on your business activity, client base, and licensing needs. We'll consult with you to determine the most strategic and cost-effective option.",
      },
      {
        question: "Can you help with setting up a corporate bank account?",
        answer:
          "Absolutely. We assist with preparing documentation, arranging meetings, and ensuring compliance to open both personal and business bank accounts.",
      },
    ],
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[number] | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleOpenModal = (service: typeof services[number]) => {
    setSelectedService(service)
    setActiveTab(0)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <BriefcaseBusiness className="w-3.5 h-3.5" />
            <span>What We Offer</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Expert travel planning, luxury experiences, and UAE business consultation — everything you need for a seamless journey.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Services</span>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5" />
                <span>The Workdan Difference</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                Crafting Unforgettable Travel Experiences
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                At Workdan Tour &amp; Travel, we believe that travel should be more than just visiting places — it should be about creating stories that last a lifetime. Our carefully designed services ensure that your journey will be filled with authentic experiences, cultural insights, and breathtaking moments.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                Whether you're seeking adventure, cultural immersion, or a perfectly planned itinerary that hits all the highlights, our expert team is here to make your travel dreams a reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group rounded-3xl p-6 sm:p-8 bg-[#0A1E3F] dark:bg-[#0D2245] border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-[#DFB75C]" />
                <h3 className="font-serif text-lg font-bold text-white">Why Choose Our Services</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Local expertise and authentic experiences",
                  "Personalized attention to your preferences",
                  "Sustainable and responsible travel practices",
                  "24/7 support throughout your journey",
                  "Unique access to hidden gems and local communities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#DFB75C]/20 border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#DFB75C]" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#071326]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              <span>Our Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Explore our range of specialized services designed to make your travel and business ambitions a reality.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300"
                >
                  {service.popular && (
                    <span className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold bg-[#DFB75C]/15 text-[#C59B27] dark:text-[#DFB75C] border border-[#DFB75C]/30">
                      Popular
                    </span>
                  )}

                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#C59B27] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleOpenModal(service)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-[#C59B27] dark:text-[#DFB75C] border-2 border-[#C59B27] dark:border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>Client Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                location: "New York",
                quote: "The custom itinerary created for our family trip was perfect. Every detail was considered, and we experienced the destination in a way we never could have on our own.",
              },
              {
                name: "Michael Chen",
                location: "San Francisco",
                quote: "I was amazed by how well they understood what I was looking for. My solo adventure through the historical sites was exactly what I needed.",
              },
              {
                name: "Emma Rodriguez",
                location: "Madrid",
                quote: "The guided tour package was perfect for our first visit. We saw so much in just 7 days, and our guide made everything seamless.",
              },
            ].map((t) => (
              <div key={t.name} className="group rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DFB75C] text-[#DFB75C]" />
                  ))}
                </div>
                <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#0A1E3F] dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0D2245]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Our travel experts are ready to help you plan the perfect journey. Contact us for a free consultation and let us help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#C59B27] dark:text-[#DFB75C] border-2 border-[#C59B27] dark:border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Details Modal ─────────────────────────────────────── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0D2245] rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#0A1E3F] px-6 py-5 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#DFB75C]/20 border border-[#DFB75C]/40 flex items-center justify-center text-[#DFB75C]">
                  <selectedService.icon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-lg font-bold text-white">{selectedService.title}</h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D2245]">
              {["Overview", "Testimonials", "FAQ"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-sm font-semibold transition-colors ${
                    activeTab === i
                      ? "border-b-2 border-[#DFB75C] text-[#C59B27] dark:text-[#DFB75C]"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#C59B27]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === 0 && (
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedService.fullDescription}
                  </p>
                  <div className="flex items-center gap-2 mb-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl px-4 py-3">
                    <Clock className="w-4 h-4 text-[#C59B27]" />
                    <span className="text-sm font-medium text-[#9E7B1C] dark:text-[#DFB75C]">{selectedService.duration}</span>
                  </div>
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-3">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedService.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#C59B27] mt-0.5 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-4">
                  {selectedService.testimonials.map((t, i) => (
                    <div key={i} className="p-4 rounded-2xl border-l-4 border-[#DFB75C] bg-amber-50/50 dark:bg-amber-950/20">
                      <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 mb-2">&ldquo;{t.comment}&rdquo;</p>
                      <p className="text-xs font-semibold text-[#C59B27]">{t.name} — {t.location}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-5">
                  {selectedService.faq.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white text-sm mb-1">{item.question}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.answer}</p>
                      {i < selectedService.faq.length - 1 && <hr className="mt-4 border-slate-200 dark:border-slate-800" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button onClick={handleCloseModal} className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                Close
              </button>
              <Link
                href="/contact"
                onClick={handleCloseModal}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] transition-colors"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
