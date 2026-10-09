"use client"

import { ChevronDown } from "lucide-react"

type Option = string | { value: string; label: string }

export function NativeSelect({
  value, onChange, options, ariaLabel, variant = "pill", className = "",
}: {
  value: string
  onChange: (v: string) => void
  options: Option[]
  ariaLabel: string
  variant?: "pill" | "field"
  className?: string
}) {
  const base =
    variant === "pill"
      ? "h-10 pl-4 pr-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0D2245] text-sm text-slate-700 dark:text-slate-200 hover:border-[#C59B27]/60"
      : "h-12 pl-4 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1C38] text-sm text-slate-900 dark:text-white"
  return (
    <div className={`relative inline-block ${className}`}>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${base} w-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B27]/50 focus:border-[#C59B27] transition`}
      >
        {options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
    </div>
  )
}
