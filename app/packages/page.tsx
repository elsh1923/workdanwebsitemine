"use client";

import { useState } from "react";
import Image from "@/components/cdn-image";
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

import { packages } from "@/lib/packages";
import { useLanguage } from "@/components/language-provider";

// ─── Filter Categories ────────────────────────────────────────────────────────

const filters = ["All Destinations", "Luxury", "Cultural", "Tropical", "Heritage"];

// ─── Trust Pillars ────────────────────────────────────────────────────────────

const trustPillars = [
  { icon: Award, id: "iata" },
  { icon: ShieldCheck, id: "vip" },
  { icon: Headphones, id: "support" },
  { icon: CheckCircle2, id: "rates" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All Destinations");

  const filtered =
    activeFilter === "All Destinations"
      ? packages
      : packages.filter((p) => p.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-white transition-colors duration-300">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden px-4">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#DFB75C] uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            {t("packages.badge")}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("packages.title")}
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 mb-6">
            {t("packages.desc")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#DFB75C]" /> {t("packages.stat1")}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#DFB75C]" /> {t("packages.stat2")}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#DFB75C]" /> {t("packages.stat3")}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("common.home")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("packages.breadcrumb")}</span>
          </div>
        </div>
      </section>

      {/* ── Filter Strip ────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 border-b border-slate-200 dark:border-white/5 bg-white/85 dark:bg-[#071326]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 scrollbar-none">
          <Filter className="h-4 w-4 shrink-0 text-[#DFB75C]" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "border-[#DFB75C] bg-[#DFB75C] text-[#071326]"
                  : "border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:border-[#DFB75C]/60 hover:text-[#9E7B1C] dark:hover:text-[#DFB75C]"
              }`}
            >
              {t(`packages.filter.${f}`)}
            </button>
          ))}
        </div>
      </section>

      {/* ── Packages Grid ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-400">
            {t("packages.empty")}
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
      <section className="bg-white dark:bg-[#0A1E3F] py-20 px-4 border-y border-slate-200/70 dark:border-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#9E7B1C] dark:text-[#DFB75C]">
              {t("packages.why.kicker")}
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#0A1E3F] dark:text-white md:text-4xl">
              {t("packages.why.title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map(({ icon: Icon, id }) => (
              <div
                key={id}
                className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#DFB75C]/60 hover:bg-amber-50/60 dark:hover:border-[#DFB75C]/40 dark:hover:bg-[#DFB75C]/5"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#DFB75C]/40 bg-[#DFB75C]/10 transition-all duration-300 group-hover:bg-[#DFB75C]/20">
                  <Icon className="h-7 w-7 text-[#C59B27] dark:text-[#DFB75C]" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-[#0A1E3F] dark:text-white">
                  {t(`packages.why.${id}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t(`packages.why.${id}.desc`)}</p>
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
            {t("packages.cta.badge")}
          </div>

          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            {t("packages.cta.title1")}{" "}
            <span className="bg-gradient-to-r from-[#DFB75C] to-[#C59B27] bg-clip-text text-transparent">
              {t("packages.cta.title2")}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            {t("packages.cta.desc")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/flights"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#DFB75C] to-[#C59B27] px-8 py-4 font-semibold text-[#071326] shadow-lg shadow-[#DFB75C]/20 transition-all duration-300 hover:shadow-[#DFB75C]/40 hover:scale-105"
            >
              {t("packages.cta.plan")}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#DFB75C]/50 hover:bg-white/10"
            >
              {t("packages.cta.talk")}
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
  const { t } = useLanguage();
  return (
    <Link
      href={pkg.href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1E3F]/60 shadow-sm dark:shadow-none backdrop-blur-sm transition-all duration-500 hover:border-[#DFB75C]/50 hover:shadow-2xl hover:shadow-[#DFB75C]/10 hover:-translate-y-1"
    >
      {/* Image wrapper */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={pkg.image}
          alt={t(`pkg.${pkg.id}.title`)}
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
              {t(`tag.${tag}`)}
            </span>
          ))}
        </div>

        {/* Duration + Rating — bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-[#071326]/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 text-[#DFB75C]" />
            {pkg.duration.replace("Days", t("common.days"))}
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
        <h3 className="mb-2 font-serif text-xl font-bold text-[#0A1E3F] dark:text-white transition-colors duration-300 group-hover:text-[#9E7B1C] dark:group-hover:text-[#DFB75C]">
          {t(`pkg.${pkg.id}.title`)}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {t(`pkg.${pkg.id}.desc`)}
        </p>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4">
          <div>
            <p className="text-xs text-slate-500">{t("common.startingFrom")}</p>
            <p className="font-serif text-xl font-bold text-[#9E7B1C] dark:text-[#DFB75C]">
              {pkg.price}
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-[#C59B27]/50 dark:border-[#DFB75C]/40 bg-[#DFB75C]/10 px-4 py-2 text-sm font-medium text-[#9E7B1C] dark:text-[#DFB75C] transition-all duration-300 group-hover:bg-[#DFB75C] group-hover:text-[#071326]">
            {t("common.exploreTour")}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
