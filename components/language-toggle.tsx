"use client"

import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const next = lang === "en" ? t("lang.switchToAmharic") : t("lang.switchToEnglish")
  const segment = (active: boolean) =>
    `rounded-full px-2.5 py-1.5 leading-none transition-colors ${
      active ? "bg-[#0A1E3F] text-white dark:bg-[#DFB75C] dark:text-[#071326]" : "text-slate-500 dark:text-slate-400"
    }`

  return (
    <>
      {/* Phones: one compact button that shows the language you can switch to */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={next}
        title={next}
        className="sm:hidden inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-[#C59B27]/40 bg-white/60 px-1.5 text-[12px] font-bold text-[#0A1E3F] dark:border-[#DFB75C]/30 dark:bg-white/5 dark:text-[#DFB75C]"
      >
        <span lang={lang === "en" ? "am" : "en"}>{lang === "en" ? "አማ" : "EN"}</span>
      </button>

      {/* Tablet and up: both languages with the active one highlighted */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={next}
        title={next}
        className="hidden sm:inline-flex h-9 items-center rounded-full border border-[#C59B27]/40 bg-white/60 p-0.5 text-[11px] font-bold dark:border-[#DFB75C]/30 dark:bg-white/5 hover:border-[#C59B27] transition-colors"
      >
        <span className={segment(lang === "en")}>EN</span>
        <span lang="am" className={segment(lang === "am")}>አማ</span>
      </button>
    </>
  )
}
