"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Building,
  ArrowUpRight,
  Globe,
  Sparkles,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      const message = `*Newsletter Subscription* 🌟\n\n📧 *Email*: ${email}\n\n✨ Thank you for subscribing to Workdan Tour & Travel newsletter!`
      const phoneNumber = "251906700007"
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappURL, "_blank")
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  const packageLinks = [
    { href: "/packages/dubai-tour", label: "Dubai Luxury Tour" },
    { href: "/packages/thailand-tour", label: "Thailand Island Tour" },
    { href: "/packages/china-tour", label: "China Guangzhou Trade Tour" },
    { href: "/packages/delhi-tour", label: "Delhi & Royal India" },
    { href: "/packages/turkey-tour", label: "Turkey & Istanbul Mystique" },
  ]

  const serviceLinks = [
    { href: "/services/travel-planning-consultation", label: "Travel Planning & Consultation" },
    { href: "/services/uae-business-consultant-activities", label: "UAE Business Setup & Advisory" },
    { href: "/services/visa-services", label: "Global Visa Concierge" },
    { href: "/booking", label: "Flight & Hotel Booking" },
  ]

  const socialLinks = [
    { href: "https://facebook.com/workdantravel", icon: FaFacebookF, label: "Facebook" },
    { href: "https://instagram.com/workdantravel", icon: FaInstagram, label: "Instagram" },
    { href: "https://twitter.com/workdantravel", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.youtube.com/@workdan", icon: FaYoutube, label: "YouTube" },
    { href: "https://wa.me/251906700007", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "https://www.tiktok.com/@workdantravel", icon: FaTiktok, label: "TikTok" },
  ]

  return (
    <footer className="relative bg-[#071526] text-stone-300 overflow-hidden border-t border-white/10">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 mb-5 group">
              <Image
                src="/logo/navbar-workdan-logo.png"
                alt="Workdan Tour & Travel Agent"
                width={52}
                height={52}
                className="object-contain"
              />
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Workdan Tour & Travel
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#dfb75c] font-semibold">
                  Bespoke Luxury Agent
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Curating high-end bespoke journeys, verified airline ticketing, 5-star hotel reservations, and turnkey UAE corporate establishment services.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#dfb75c]" />
                <h4 className="font-serif text-sm font-bold text-white">VIP Newsletter</h4>
              </div>
              <p className="text-xs text-stone-400 mb-3">
                Receive private flight deals, seasonal itineraries & visa updates.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/15 text-white placeholder:text-stone-500 focus:border-[#dfb75c] rounded-xl text-xs"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#DFB75C] hover:bg-white text-[#071326] font-serif text-xs font-semibold py-2 rounded-full shadow-[0_4px_14px_0_rgba(223,183,92,0.39)] transition-colors duration-300"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "✓ Subscribed" : "Subscribe to Updates"}
                </Button>
              </form>
            </div>
          </div>

          {/* Packages Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-white mb-4 pb-2 border-b border-white/10">
              Featured Tours
            </h4>
            <ul className="space-y-2.5">
              {packageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-[#dfb75c] text-xs transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-white mb-4 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-[#dfb75c] text-xs transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Hubs / Offices */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-white mb-4 pb-2 border-b border-white/10">
              Global Headquarters & Offices
            </h4>

            {/* Addis Ababa Office */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-xs font-bold text-[#dfb75c] uppercase tracking-wider">
                  Addis Ababa HQ • Ethiopia
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-stone-300">
                  Main Office
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0" />
                  <span className="text-stone-200">+251 906700007 / +251 911625035</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0" />
                  <span>workdantrading@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0 mt-0.5" />
                  <span>Megenagna Wach Bldg. 2nd Floor, Addis Ababa</span>
                </div>
              </div>
            </div>

            {/* UAE Office */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-xs font-bold text-[#dfb75c] uppercase tracking-wider">
                  Sharjah Hub • UAE
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-stone-300">
                  Regional Office
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0" />
                  <span className="text-stone-200">+971 509064877</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0" />
                  <span>workdaneuae@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#dfb75c] flex-shrink-0 mt-0.5" />
                  <span>Sharjah Business Center, Ground Floor, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Quick Contact Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-[#c59b27] hover:border-[#c59b27] transition-all duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-400">
            <Link href="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span>•</span>
            <Link href="/flights" className="hover:text-[#dfb75c] font-medium transition-colors">
              Book A Trip
            </Link>
          </div>

          <p className="text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} Workdan Tour & Travel Agent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
