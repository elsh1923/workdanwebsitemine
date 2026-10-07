"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Link from "next/link"
import {
  ShieldCheck,
  Users,
  Globe,
  Compass,
  ShoppingBag,
  Clock,
  BadgeCheck,
  X,
  Award,
  HeadphonesIcon,
  Tag,
  Building2,
} from "lucide-react"
import StoryTestimonial from "@/components/story-testimonial"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules"

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { number: "500+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "4", label: "Years Experience" },
  { number: "4.9", label: "Average Rating" },
]

const certificates = [
  {
    title: "Certificate of Appreciation",
    description:
      "For an active participation in reviewing the Zeroing Bureaucracy Charter for government",
    year: "2024",
    image:
      "/certificates/Apprtiaction Certificate-1.png?height=400&width=300&text=ETO+Certificate",
  },
  {
    title: "Certificate of Channel Partnership",
    description: "In recognition for being our valued channel partner",
    year: "2025",
    image:
      "/certificates/WORKDANE CHANNEL PARTNER_CERTFICATE_250227_153946-1.png?height=400&width=300&text=IATA+Certificate",
  },
]

const values = [
  {
    id: 0,
    title: "Authentic Experiences",
    description:
      "We create genuine connections between travelers and local communities, ensuring every journey tells a unique story.",
    Icon: Users,
  },
  {
    id: 1,
    title: "Safety & Security",
    description:
      "Your safety is our top priority. We maintain the highest safety standards and provide 24/7 support throughout your journey.",
    Icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Sustainable Tourism",
    description:
      "We promote responsible travel that benefits local communities and preserves Ethiopia's natural and cultural heritage.",
    Icon: Globe,
  },
  {
    id: 3,
    title: "Expert Guidance",
    description:
      "Our experienced local guides provide deep insights into Ethiopia's history, culture, and hidden treasures.",
    Icon: Compass,
  },
  {
    id: 4,
    title: "Affordable",
    description:
      "We offer competitive rates and flexible packages to suit your budget and preferences.",
    Icon: ShoppingBag,
  },
  {
    id: 5,
    title: "Fast and Reliable",
    description:
      "We guarantee timely delivery and exceptional customer service to ensure a seamless travel experience.",
    Icon: Clock,
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<null | {
    image: string
    title: string
  }>(null)

  const handleOpenCertificate = (cert: { image: string; title: string }) =>
    setSelectedCertificate(cert)

  const handleCloseDialog = () => setSelectedCertificate(null)

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Company</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            About Workdan Tour &amp; Travel
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting Bespoke Journeys Since 2020 — IATA Certified, 500+ Happy Travelers, Dual Hub Office.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">About Us</span>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A1E3F] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ number, label }) => (
              <div key={label}>
                <p className="font-serif text-4xl font-bold text-[#DFB75C]">{number}</p>
                <p className="mt-1 text-sm font-medium text-slate-300 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#071326]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#DFB75C]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
              Who We Are
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left – text */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-6 leading-tight">
                Our Story
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                <strong className="text-[#0A1E3F] dark:text-white">Workdan Tour &amp; Travel</strong> was
                founded in <strong className="text-[#C59B27]">Addis Ababa, Ethiopia</strong>, with a simple
                but powerful vision — to connect the world to the beauty, culture, and warmth of Ethiopia and
                beyond. What started as a passionate, locally-rooted operation has grown into a full-service
                travel company trusted by hundreds of satisfied travelers globally.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                Driven by our commitment to excellence, we expanded our operations to{" "}
                <strong className="text-[#C59B27]">Sharjah, United Arab Emirates</strong>, establishing a dual
                hub that allows us to serve clients across Africa, the Middle East, and beyond. We are proudly{" "}
                <strong className="text-[#0A1E3F] dark:text-white">IATA certified</strong>, a mark of our
                dedication to industry-leading standards.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                We specialize in <em>bespoke travel planning</em>, luxury hotel bookings, visa services, and
                UAE business consultation — crafting journeys that are as unique as the people who take them.
                Every trip we plan is a story we help write together.
              </p>

              {/* Office pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "📍 Addis Ababa, Ethiopia",
                  "📍 Sharjah, UAE",
                  "✈️ IATA Certified",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-50 dark:bg-amber-950/30 text-[#C59B27] border border-amber-200/60 dark:border-amber-800/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right – image grid */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3]">
                <Image
                  src="/about-us.jpg"
                  alt="Workdan Tour & Travel office and team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0D2245] rounded-2xl shadow-xl border border-slate-200 dark:border-[#DFB75C]/20 px-6 py-5 max-w-[260px]">
                <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                  "Every journey is a new chapter — we make yours unforgettable."
                </p>
                <p className="mt-3 text-xs font-semibold text-[#C59B27] uppercase tracking-wider">
                  — Workdan Team
                </p>
              </div>

              {/* Gold accent dot */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#DFB75C]/20 border-2 border-[#DFB75C]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D2245]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/10 text-[#C59B27] border border-[#DFB75C]/30">
              What Drives Us
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">
              Core Values We Offer
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
              We believe travel is more than sightseeing — it&apos;s storytelling.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="group bg-white dark:bg-[#071326] rounded-3xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#DFB75C]/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon container */}
                <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0A1E3F] dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificates ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#071326]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/10 text-[#C59B27] border border-[#DFB75C]/30">
              Accreditations
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white mb-4">
              Our Certifications &amp; Awards
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
              Recognized for our commitment to quality, safety, and professional excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() =>
                  handleOpenCertificate({ image: cert.image, title: cert.title })
                }
                className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-[#DFB75C]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    {/* Gold chip for year */}
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DFB75C]/15 text-[#C59B27] border border-[#DFB75C]/30">
                      {cert.year}
                    </span>
                    {/* Green verified */}
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <BadgeCheck className="w-4 h-4" />
                      <span className="text-xs font-semibold">Verified</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        Certification Year:
                      </span>{" "}
                      {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified banner */}
          <div className="mt-12 max-w-2xl mx-auto text-center bg-[#0A1E3F] dark:bg-[#0D2245] rounded-3xl p-8 border border-[#DFB75C]/20">
            <Award className="w-10 h-10 text-[#DFB75C] mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              All Certifications Verified
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              All our certifications and licenses are current and can be verified with the respective
              issuing authorities. We maintain the highest standards of compliance and regularly update
              our certifications to ensure we meet all industry requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Certificate Dialog (lightbox) ───────────────────────────────── */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleCloseDialog}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-[#0D2245] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section id="stories" className="py-20 bg-slate-50 dark:bg-[#0D2245]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/10 text-[#C59B27] border border-[#DFB75C]/30">
              Traveler Stories
            </span>
            <h2 className="font-serif text-4xl font-bold text-[#0A1E3F] dark:text-white">
              Some Stories From Our Clients
            </h2>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper pb-12"
          >
            <SwiperSlide>
              <StoryTestimonial
                name="Eliyas Birhanu"
                journey="Ethiopian Cultural Experience"
                quote="The experience was truly unforgettable. The guide was knowledgeable and the organization was excellent despite the challenging environment. Standing at the edge of the Erta Ale volcano at night was a once-in-a-lifetime experience."
              />
            </SwiperSlide>
            <SwiperSlide>
              <StoryTestimonial
                name="Meaza Abebe"
                journey="Ethiopian Cultural Experience"
                quote="The experience was truly unforgettable. The guide was knowledgeable and the organization was excellent despite the challenging environment. Standing at the edge of the Erta Ale volcano at night was a once-in-a-lifetime experience."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340]">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DFB75C]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#DFB75C]/15 text-[#DFB75C] border border-[#DFB75C]/30">
            Why Choose Us
          </span>

          <h2 className="font-serif text-4xl font-bold text-white mb-10">
            3 Reasons to Travel With Workdan
          </h2>

          {/* Three reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[
              {
                Icon: ShieldCheck,
                title: "IATA Certified",
                desc: "Internationally accredited — your journey is in safe, professional hands.",
              },
              {
                Icon: HeadphonesIcon,
                title: "24/7 Support",
                desc: "Round-the-clock assistance, whether you're in Addis or across the globe.",
              },
              {
                Icon: Tag,
                title: "Best Rates",
                desc: "Competitive pricing and flexible packages crafted for every budget.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#DFB75C]/40 transition-colors"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#DFB75C]/15 border border-[#DFB75C]/30 text-[#DFB75C]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/flights"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DFB75C] hover:bg-[#C59B27] text-[#071326] font-bold text-base transition-colors duration-300 shadow-lg shadow-[#DFB75C]/25"
          >
            Plan Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
