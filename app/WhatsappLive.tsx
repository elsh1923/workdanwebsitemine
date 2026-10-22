'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '@/components/language-provider'

// Floating WhatsApp button: navy with a gold icon and ring so it matches the site instead of standing out in green.
function WhatsappLive() {
  const { t } = useLanguage()
  const whatsappNumber = "251906700007"
  const message = encodeURIComponent("Hello, I would like to book a tour and travel with your company.")
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${message}&type=phone_number&app_absent=0`

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-8 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("Chat with us on WhatsApp")}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0A1E3F] text-[#DFB75C] border border-[#DFB75C]/60 shadow-[0_8px_24px_rgba(7,19,38,0.35)] hover:bg-[#12305C] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB75C]"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  )
}

export default WhatsappLive
