import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Check, ArrowRight } from "lucide-react"

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
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 bg-white dark:bg-[#0D2245] border shadow-md hover:shadow-2xl dark:hover:shadow-blue-950/50 ${
        popular
          ? "border-[#C59B27] dark:border-[#DFB75C] ring-1 ring-[#C59B27]/40"
          : "border-slate-200/80 dark:border-slate-800 hover:border-[#C59B27]/50 dark:hover:border-[#DFB75C]/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 right-6">
          <span className="bg-gradient-to-r from-[#DFB75C] via-[#C59B27] to-[#9E7B1C] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
            Featured Service
          </span>
        </div>
      )}

      <div>
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] mb-6 shadow-xs">
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
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
        <Link
          href={link}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-semibold text-xs tracking-wider uppercase border border-[#DFB75C] text-[#DFB75C] hover:bg-[#DFB75C] hover:text-[#071326] transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_14px_0_rgba(223,183,92,0.39)]"
        >
          <span>Discover Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
