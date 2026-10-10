"use client"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Check, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  popular?: boolean
  link?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  popular,
  link = "/services",
}: ServiceCardProps) {
  const { t } = useLanguage()
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 bg-white dark:bg-[#0D2245] border shadow-md hover:shadow-2xl dark:hover:shadow-[#071326]/80 group ${
        popular
          ? "border-[#C59B27]/70 dark:border-[#DFB75C]/60 ring-1 ring-[#C59B27]/30 dark:ring-[#DFB75C]/20"
          : "border-slate-200/80 dark:border-slate-800 hover:border-[#C59B27]/50 dark:hover:border-[#DFB75C]/40"
      }`}
    >
      {/* Left accent border line */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="whitespace-nowrap bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-[#071326] text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(197,155,39,0.5)]">
            {t("home.svc.featured")}
          </span>
        </div>
      )}

      <div>
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] mb-6 shadow-xs group-hover:bg-[#0A1E3F] group-hover:text-[#DFB75C] group-hover:border-[#0A1E3F] group-hover:shadow-[0_4px_12px_rgba(10,30,63,0.3)] transition-all duration-300">
          <Icon className="h-7 w-7" />
        </div>

        {/* Title & Description */}
        <h3 className="font-serif text-2xl font-bold text-[#0A1E3F] dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-50 dark:bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#C59B27] dark:text-[#DFB75C]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
        <Link
          href={link}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-semibold text-xs tracking-wider uppercase border-2 border-[#C59B27] dark:border-[#DFB75C] text-[#C59B27] dark:text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] hover:border-[#DFB75C] transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(197,155,39,0.35)]"
        >
          <span>{t("home.svc.discover")}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  )
}
