"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  Filter,
  ShieldCheck,
  Award,
  Headphones,
  CheckCircle2,
} from "lucide-react";

// ─── Package Data ────────────────────────────────────────────────────────────

const packages = [
  {
    id: "dubai-tour",
    title: "Dubai Luxury Tour",
    href: "/packages/dubai-tour",
    image: "/packages/dubai-tour/dubai-hero-section.jpeg",
    tags: ["Modern Luxury", "Desert Safari", "Skyline"],
    categories: ["Luxury"],
    price: "$1,890+",
    priceRaw: 1890,
    duration: "5-7 Days",
    rating: 4.9,
    reviews: 148,
    description:
      "Immerse in futuristic marvels, desert glamping under Arabian skies, world-class dining, and ultra-luxurious beachfront resorts.",
  },
  {
    id: "china-tour",
    title: "China Guangzhou & Shanghai",
    href: "/packages/china-tour",
    image: "/packages/china-tour/package-china.jpeg",
    tags: ["Cultural Heritage", "Trade & Commerce", "Ancient"],
    categories: ["Cultural"],
    price: "$2,250+",
    priceRaw: 2250,
    duration: "8-10 Days",
    rating: 4.8,
    reviews: 112,
    description:
      "Discover the harmonic blend of ancient dynasties, imperial gardens, futuristic metropolises, and vibrant Cantonese culinary heritage.",
  },
  {
    id: "turkey-tour",
    title: "Istanbul, Turkey",
    href: "/packages/turkey-tour",
    image: "/packages/turkey-tour/turkey-hero.jpeg",
    tags: ["Historic Marvels", "Aegean Coast", "Bosphorus"],
    categories: ["Cultural", "Heritage"],
    price: "$1,680+",
    priceRaw: 1680,
    duration: "6-8 Days",
    rating: 4.9,
    reviews: 96,
    description:
      "Where East meets West along the Bosphorus Strait. Explore Ottoman palaces, the Hagia Sophia, and hot air balloons over Cappadocia.",
  },
  {
    id: "thailand-tour",
    title: "Thailand Island Paradise",
    href: "/packages/thailand-tour",
    image: "/packages/thailand-tour/thailand.jpeg",
    tags: ["Tropical", "Islands", "Temples"],
    categories: ["Tropical"],
    price: "$1,590+",
    priceRaw: 1590,
    duration: "7-9 Days",
    rating: 4.8,
    reviews: 134,
    description:
      "Crystal waters, tropical retreats, ancient temples, and exquisite Thai cuisine in paradise destinations.",
  },
  {
    id: "delhi-tour",
    title: "Delhi & Royal India",
    href: "/packages/delhi-tour",
    image: "/packages/delhi-tour/delhi-herosection.jpeg",
    tags: ["Heritage", "Imperial", "Bazaars"],
    categories: ["Heritage", "Cultural"],
    price: "$1,450+",
    priceRaw: 1450,
    duration: "6-8 Days",
    rating: 4.7,
    reviews: 89,
    description:
      "Imperial architecture, vibrant bazaars, Mughal heritage, and the iconic Taj Mahal in the heart of royal India.",
  },
];

// ─── Filter Categories ────────────────────────────────────────────────────────

const filters = ["All Destinations", "Luxury", "Cultural", "Tropical", "Heritage"];

// ─── Trust Pillars ────────────────────────────────────────────────────────────

const trustPillars = [
  {
    icon: Award,
    title: "IATA Certified",
    desc: "Internationally accredited travel professionals you can trust.",
  },
  {
    icon: ShieldCheck,
    title: "VIP Access",
    desc: "Exclusive hotel upgrades, lounge access, and priority boarding.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock assistance wherever you are in the world.",
  },
  {
    icon: CheckCircle2,
    title: "Best Rates",
    desc: "Competitive pricing with no hidden fees — guaranteed.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState("All Destinations");

  const filtered =
    activeFilter === "All Destinations"
      ? packages
      : packages.filter((p) => p.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#071326] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden px-4">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#DFB75C] uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Exclusive Itineraries
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Curated Luxury Packages
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 mb-6">
            Handcrafted journeys to the world&apos;s most extraordinary destinations —
            designed for the discerning traveller who expects nothing less than
            perfection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#DFB75C]" /> 5 Iconic Destinations
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#DFB75C]" /> 4.8+ Average Rating
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#DFB75C]" /> 5 – 10 Day Itineraries
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">Packages</span>
          </div>
        </div>
      </section>

      {/* ── Filter Strip ────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 border-b border-white/5 bg-[#071326]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 scrollbar-none">
          <Filter className="h-4 w-4 shrink-0 text-[#DFB75C]" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "border-[#DFB75C] bg-[#DFB75C] text-[#071326]"
                  : "border-white/20 bg-white/5 text-slate-300 hover:border-[#DFB75C]/60 hover:text-[#DFB75C]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Packages Grid ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-400">
            No packages found for this category.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* ── Why Travel With Us ──────────────────────────────────────────── */}
      <section className="bg-[#0A1E3F] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#DFB75C]">
              The Workdan Difference
            </p>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Why Travel With Us?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#DFB75C]/40 hover:bg-[#DFB75C]/5"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFB75C]/30 bg-[#DFB75C]/10 transition-all duration-300 group-hover:bg-[#DFB75C]/20">
                  <Icon className="h-7 w-7 text-[#DFB75C]" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0D2245] px-4 py-24">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full bg-[#DFB75C]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFB75C]/40 bg-[#DFB75C]/10 px-5 py-2 text-sm font-medium text-[#DFB75C]">
            <Sparkles className="h-4 w-4" />
            Start Your Journey Today
          </div>

          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#DFB75C] to-[#C59B27] bg-clip-text text-transparent">
              Book?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Let our travel experts craft a bespoke itinerary tailored to your
            dreams. No cookie-cutter trips — just extraordinary experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/flights"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#DFB75C] to-[#C59B27] px-8 py-4 font-semibold text-[#071326] shadow-lg shadow-[#DFB75C]/20 transition-all duration-300 hover:shadow-[#DFB75C]/40 hover:scale-105"
            >
              Plan Your Journey
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#DFB75C]/50 hover:bg-white/10"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Package Card ─────────────────────────────────────────────────────────────

function PackageCard({
  pkg,
}: {
  pkg: (typeof packages)[number];
}) {
  return (
    <Link
      href={pkg.href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A1E3F]/60 backdrop-blur-sm transition-all duration-500 hover:border-[#DFB75C]/40 hover:shadow-2xl hover:shadow-[#DFB75C]/10 hover:-translate-y-1"
    >
      {/* Image wrapper */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/80 via-transparent to-transparent" />

        {/* Tags — top left */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {pkg.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#DFB75C]/40 bg-[#071326]/70 px-3 py-0.5 text-xs font-medium text-[#DFB75C] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Duration + Rating — bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-[#071326]/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 text-[#DFB75C]" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-[#071326]/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-[#DFB75C] text-[#DFB75C]" />
            {pkg.rating}
            <span className="text-slate-400">({pkg.reviews})</span>
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-serif text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#DFB75C]">
          {pkg.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
          {pkg.description}
        </p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <p className="text-xs text-slate-500">Starting from</p>
            <p className="font-serif text-xl font-bold text-[#DFB75C]">
              {pkg.price}
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-[#DFB75C]/40 bg-[#DFB75C]/10 px-4 py-2 text-sm font-medium text-[#DFB75C] transition-all duration-300 group-hover:bg-[#DFB75C] group-hover:text-[#071326]">
            Explore Tour
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
