"use client"
import { useState } from "react"
import Link from "next/link"
import { Check, Star, X, Clock, BriefcaseBusiness, PlaneTakeoff, ChevronRight, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

// All text comes from the dictionary (keys svc.<id>.*).
const services = [
  {
    id: "planning",
    titleKey: "nav.svc.planning.title",
    icon: PlaneTakeoff,
    featureCount: 5,
    popular: true,
    testimonials: [
      { person: "sarah", loc: "newyork", key: "t1" },
      { person: "michael", loc: "sanfrancisco", key: "t2" },
    ],
    faqCount: 2,
  },
  {
    id: "uae",
    titleKey: "nav.svc.uae.title",
    icon: BriefcaseBusiness,
    featureCount: 5,
    popular: true,
    testimonials: [
      { person: "fatima", loc: "dubai", key: "t1" },
      { person: "james", loc: "london", key: "t2" },
    ],
    faqCount: 3,
  },
  {
    id: "pcc",
    titleKey: "nav.svc.pcc.title",
    icon: ShieldCheck,
    featureCount: 5,
    popular: false,
    testimonials: [] as { person: string; loc: string; key: string }[],
    faqCount: 3,
  },
]

type Service = (typeof services)[number]

const badge =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[#9E7B1C] dark:text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-3"

const clientQuotes = [
  { person: "sarah", loc: "newyork", key: "svc.planning.t1" },
  { person: "michael", loc: "sanfrancisco", key: "svc.planning.t2" },
  { person: "emma", loc: "madrid", key: "svc.planning.t3" },
]

export default function ServicesPage() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleOpenModal = (service: Service) => {
    setSelectedService(service)
    setActiveTab(0)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  const features = (s: Service) => Array.from({ length: s.featureCount }, (_, i) => t(`svc.${s.id}.f${i + 1}`))

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] dark:bg-[#071326] text-slate-900 dark:text-slate-100">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#071326] via-[#0A1E3F] to-[#0c2340] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #DFB75C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#C59B27]/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#DFB75C] text-xs font-bold uppercase tracking-wider mb-6">
            <BriefcaseBusiness className="w-3.5 h-3.5" />
            <span>{t("svc.badge")}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            {t("svc.title")}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("svc.heroDesc")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-[#DFB75C] transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <span className="text-[#DFB75C]">{t("nav.services")}</span>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0A1C38] border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={badge}>
                <Star className="w-3.5 h-3.5" />
                <span>{t("packages.why.kicker")}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1E3F] dark:text-white tracking-tight mb-6">
                {t("svc.diff.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-5">
                {t("svc.diff.p1", { brand: t("brand.name") })}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                {t("svc.diff.p2")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("nav.contactUs")}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group rounded-3xl p-6 sm:p-8 bg-[#0A1E3F] dark:bg-[#0D2245] border border-slate-800 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-[#DFB75C]" />
                <h3 className="font-serif text-lg font-bold text-white">{t("svc.why.title")}</h3>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#DFB75C]/20 border border-[#DFB75C]/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#DFB75C]" />
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">{t(`svc.why.${n}`)}</span>
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
            <div className={badge}>
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              <span>{t("svc.offerings")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("svc.title")}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {t("svc.gridDesc")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0D2245] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300"
                >
                  {service.popular && (
                    <span className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold bg-[#DFB75C]/15 text-[#C59B27] dark:text-[#DFB75C] border border-[#DFB75C]/30">
                      {t("svc.popular")}
                    </span>
                  )}

                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[#C59B27] group-hover:bg-[#DFB75C]/10 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0A1E3F] dark:text-white mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {t(`svc.${service.id}.desc`)}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{t("svc.keyFeatures")}</p>
                    <ul className="space-y-2">
                      {features(service).map((feature, i) => (
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
                    {t("svc.viewDetails")}
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
            <div className={badge}>
              <Star className="w-3.5 h-3.5" />
              <span>{t("svc.clients.badge")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1E3F] dark:text-white tracking-tight">
              {t("svc.clients.title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {clientQuotes.map((q) => (
              <div key={q.person} className="group rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] dark:bg-[#071326] border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-[#C59B27]/60 dark:hover:border-[#DFB75C]/50 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#DFB75C] text-[#DFB75C]" />
                  ))}
                </div>
                <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed mb-5">
                  &ldquo;{t(q.key)}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#0A1E3F] dark:text-white text-sm">{t(`svc.person.${q.person}`)}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t(`svc.loc.${q.loc}`)}</p>
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
            {t("svc.cta.title")}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            {t("svc.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_14px_rgba(197,155,39,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("nav.contactUs")}
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-[#C59B27] dark:text-[#DFB75C] border-2 border-[#C59B27] dark:border-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300"
            >
              {t("svc.viewPackages")}
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
                <h2 className="font-serif text-lg font-bold text-white">{t(selectedService.titleKey)}</h2>
              </div>
              <button
                onClick={handleCloseModal}
                aria-label={t("f.close")}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D2245]">
              {(["svc.tab.overview", "svc.tab.testimonials", "svc.tab.faq"] as const).map((tab, i) => (
                (i !== 1 || selectedService.testimonials.length > 0) && (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-sm font-semibold transition-colors ${
                    activeTab === i
                      ? "border-b-2 border-[#DFB75C] text-[#C59B27] dark:text-[#DFB75C]"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#C59B27]"
                  }`}
                >
                  {t(tab)}
                </button>
                )
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === 0 && (
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {t(`svc.${selectedService.id}.full`, { brand: t("brand.name") })}
                  </p>
                  <div className="flex items-center gap-2 mb-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl px-4 py-3">
                    <Clock className="w-4 h-4 text-[#C59B27]" />
                    <span className="text-sm font-medium text-[#9E7B1C] dark:text-[#DFB75C]">{t(`svc.${selectedService.id}.duration`)}</span>
                  </div>
                  <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white mb-3">{t("svc.keyFeatures")}</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {features(selectedService).map((f, i) => (
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
                  {selectedService.testimonials.map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl border-l-4 border-[#DFB75C] bg-amber-50/50 dark:bg-amber-950/20">
                      <p className="font-serif text-sm italic text-slate-700 dark:text-slate-200 mb-2">&ldquo;{t(`svc.${selectedService.id}.${item.key}`)}&rdquo;</p>
                      <p className="text-xs font-semibold text-[#C59B27]">{t(`svc.person.${item.person}`)} — {t(`svc.loc.${item.loc}`)}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-5">
                  {Array.from({ length: selectedService.faqCount }, (_, i) => i + 1).map((n) => (
                    <div key={n}>
                      <h4 className="font-serif font-bold text-[#0A1E3F] dark:text-white text-sm mb-1">{t(`svc.${selectedService.id}.faq${n}.q`)}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{t(`svc.${selectedService.id}.faq${n}.a`)}</p>
                      {n < selectedService.faqCount && <hr className="mt-4 border-slate-200 dark:border-slate-800" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button onClick={handleCloseModal} className="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                {t("f.close")}
              </button>
              <Link
                href="/contact"
                onClick={handleCloseModal}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] transition-colors"
              >
                {t("svc.bookService")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

