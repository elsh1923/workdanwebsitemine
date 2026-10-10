"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "@/components/cdn-image"
import { usePathname } from "next/navigation"
import {
  Menu,
  Home,
  Package,
  Settings,
  Users,
  ChevronDown,
  Building,
  Globe,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Plane,
  FileCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"

const packagesItems = [
  { id: "dubai", href: "/packages/dubai-tour" },
  { id: "china", href: "/packages/china-tour" },
  { id: "thailand", href: "/packages/thailand-tour" },
  { id: "delhi", href: "/packages/delhi-tour" },
  { id: "turkey", href: "/packages/turkey-tour" },
]

const servicesItems = [
  { id: "planning", href: "/services/travel-planning-consultation", icon: Compass },
  { id: "uae", href: "/services/uae-business-consultant-activities", icon: Building },
  { id: "visa", href: "/services/visa-services", icon: Globe },
  { id: "pcc", href: "/services/uae-pcc-attestation", icon: FileCheck },
]

const triggerClass = (active: boolean) =>
  `font-semibold text-[13px] bg-transparent hover:bg-slate-100/60 dark:hover:bg-white/5 data-[state=open]:bg-slate-100/60 dark:data-[state=open]:bg-white/5 transition-colors ${
    active
      ? "text-[#C59B27] dark:text-[#DFB75C] border-b-2 border-[#C59B27] dark:border-[#DFB75C] !rounded-none"
      : "text-slate-700 dark:text-slate-200 hover:text-[#0A1E3F] dark:hover:text-white"
  }`

const linkClass = (active: boolean) =>
  `px-3 py-2 text-[13px] font-semibold transition-colors whitespace-nowrap ${
    active
      ? "text-[#C59B27] dark:text-[#DFB75C] border-b-2 border-[#C59B27] dark:border-[#DFB75C]"
      : "text-slate-700 dark:text-slate-200 hover:text-[#0A1E3F] dark:hover:text-white"
  }`

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full h-16 bg-white border-b border-[#C59B27]/15">
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-80" />
      </header>
    )
  }

  const topLinks = [
    { href: "/flights", label: t("nav.flights"), match: "/flights" },
    { href: "/hotels", label: t("nav.hotels"), match: "/hotels" },
    { href: "/about-us", label: t("nav.about"), match: "/about-us" },
    { href: "/gallery", label: t("nav.gallery"), match: "/gallery" },
    { href: "/contact", label: t("nav.contact"), match: "/contact" },
  ]

  const mobileLinkClass =
    "flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#0A1E3F] dark:hover:text-white py-2 border-b border-slate-100 dark:border-slate-800"
  const mobileStrongLinkClass =
    "flex items-center gap-3 text-sm font-semibold text-[#0A1E3F] dark:text-white py-2 border-b border-slate-100 dark:border-slate-800"
  const mobileSubLinkClass =
    "block text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#0A1E3F] dark:hover:text-white py-1.5"
  const mobileTriggerClass =
    "flex items-center justify-between w-full text-sm font-medium text-slate-700 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/95 dark:bg-[#071326]/95 backdrop-blur-md border-b border-[#C59B27]/15 dark:border-[#C59B27]/10 transition-all duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.40)]" : ""}`}>
      {/* Gold accent line at very top */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-80" />
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden bg-white rounded-full shadow-sm border border-[#C59B27]/30 dark:border-[#C59B27]/20 group-hover:border-[#C59B27]/60 transition-colors duration-300 group-hover:shadow-[0_0_12px_rgba(197,155,39,0.25)]">
            <Image
              src="/logo/navbar-workdan-logo.png"
              alt="Workdan Tour & Travel Agent"
              fill
              sizes="40px"
              className="object-contain object-[53%_50%] scale-[1.22]"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="font-serif text-[15px] sm:text-[17px] font-bold tracking-tight text-[#0A1E3F] dark:text-white group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C] transition-colors block whitespace-nowrap">
              {t("brand.name")}
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-widest text-[#9E7B1C] dark:text-[#DFB75C]/80 font-semibold uppercase block">
              {t("nav.brandTag")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={linkClass(pathname === "/")}>
                  {t("nav.home")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass(pathname.startsWith("/packages"))}>
                {t("nav.destinations")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[500px] p-5 bg-white dark:bg-[#0A1C38] shadow-2xl rounded-2xl border border-slate-200/70 dark:border-slate-800">
                  <div className="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] dark:text-[#DFB75C]">
                      {t("nav.curatedDestinations")}
                    </span>
                    <Link href="/packages" className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#0A1E3F] dark:hover:text-white flex items-center gap-1 font-medium">
                      {t("nav.viewAll")} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {packagesItems.map((item) => (
                      <NavigationMenuLink key={item.id} asChild>
                        <Link
                          href={item.href}
                          className="group block select-none rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C]">
                              {t(`nav.pkg.${item.id}.title`)}
                            </span>
                            <span className="text-[10px] bg-amber-50 dark:bg-amber-950/40 text-[#9E7B1C] dark:text-[#DFB75C] font-semibold px-2 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-900/50">
                              {t(`nav.pkg.${item.id}.tag`)}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{t(`nav.pkg.${item.id}.desc`)}</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={triggerClass(pathname.startsWith("/services"))}>
                {t("nav.services")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[480px] p-5 bg-white dark:bg-[#0A1C38] shadow-2xl rounded-2xl border border-slate-200/70 dark:border-slate-800">
                  <div className="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] dark:text-[#DFB75C]">
                      {t("nav.specializedServices")}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {servicesItems.map((item) => (
                      <NavigationMenuLink key={item.id} asChild>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                        >
                          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 flex items-center justify-center text-[#C59B27] dark:text-[#DFB75C] group-hover:bg-[#0A1E3F] group-hover:text-[#DFB75C] transition-colors flex-shrink-0 mt-0.5">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#C59B27] dark:group-hover:text-[#DFB75C]">
                              {t(`nav.svc.${item.id}.title`)}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{t(`nav.svc.${item.id}.desc`)}</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {topLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href} className={linkClass(pathname.startsWith(link.match))}>
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Button, Language & Dark Theme Toggle */}
        <div className="hidden xl:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <Link
            href="/flights"
            className="btn-gold-shimmer relative inline-flex items-center justify-center px-5 py-2 rounded-full font-serif text-[13px] font-semibold text-[#071326] bg-[#DFB75C] hover:bg-[#C59B27] shadow-[0_4px_18px_rgba(197,155,39,0.45)] hover:shadow-[0_6px_24px_rgba(197,155,39,0.35)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            {t("nav.planJourney")}
          </Link>
        </div>

        {/* Mobile Menu, Language & Theme Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("nav.toggleMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px] p-6 bg-white dark:bg-[#071326] text-slate-900 dark:text-white flex flex-col justify-between">
              <div>
                <SheetHeader className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <Image
                      src="/logo/navbar-workdan-logo.png"
                      alt="Workdan Tour & Travel Agent"
                      width={40}
                      height={40}
                    />
                    <div>
                      <span className="font-serif text-base font-bold text-[#0A1E3F] dark:text-white block">
                        {t("brand.name")}
                      </span>
                      <span className="text-[10px] text-[#9E7B1C] dark:text-[#DFB75C] font-semibold tracking-wider uppercase">
                        {t("nav.brandTag")}
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-4">
                  <Link href="/" className={mobileStrongLinkClass} onClick={() => setIsOpen(false)}>
                    <Home className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.home")}</span>
                  </Link>

                  <Link href="/flights" className={mobileStrongLinkClass} onClick={() => setIsOpen(false)}>
                    <Plane className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.flights")}</span>
                  </Link>

                  <Link href="/hotels" className={mobileStrongLinkClass} onClick={() => setIsOpen(false)}>
                    <Building2 className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.hotels")}</span>
                  </Link>

                  <Link href="/about-us" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                    <Users className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.about")}</span>
                  </Link>

                  <Collapsible>
                    <CollapsibleTrigger className={mobileTriggerClass}>
                      <div className="flex items-center gap-3">
                        <Package className="h-4 w-4 text-[#C59B27]" />
                        <span>{t("nav.destinationsPackages")}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-2 ml-7">
                      {packagesItems.map((item) => (
                        <Link key={item.id} href={item.href} className={mobileSubLinkClass} onClick={() => setIsOpen(false)}>
                          {t(`nav.pkg.${item.id}.title`)}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className={mobileTriggerClass}>
                      <div className="flex items-center gap-3">
                        <Settings className="h-4 w-4 text-[#C59B27]" />
                        <span>{t("nav.services")}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-2 ml-7">
                      {servicesItems.map((item) => (
                        <Link key={item.id} href={item.href} className={mobileSubLinkClass} onClick={() => setIsOpen(false)}>
                          {t(`nav.svc.${item.id}.title`)}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link href="/gallery" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                    <Compass className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.gallery")}</span>
                  </Link>

                  <Link href="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
                    <Mail className="h-4 w-4 text-[#C59B27]" />
                    <span>{t("nav.contactUs")}</span>
                  </Link>
                </nav>
              </div>

              <div className="pt-6 space-y-3">
                <Link
                  href="/flights"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block py-3 rounded-full font-serif text-sm font-semibold text-[#071326] bg-[#DFB75C] hover:bg-white transition-colors duration-300 shadow-md"
                >
                  {t("nav.planJourney")}
                </Link>
                <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>+251 906700007</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
