'use client'

import React from 'react'
import Image from "@/components/cdn-image"
import Link from 'next/link'
import { motion } from 'motion/react'
import { useLanguage } from '@/components/language-provider'

function WhatsappLive() {
    const { t } = useLanguage();
    const whatsappNumber = "251906700007";
    const baseUrl = "https://api.whatsapp.com/send/";
    const encodedMessage = `Hello, I would like to book a tour and travel with your company.`;
    const WhatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-8 z-50">
    <motion.div
      className="relative group cursor-pointer"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
    >
      {/* Ping effect — placed behind */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping z-0"></span>

      {/* WhatsApp button — placed in front */}
      <a
        href={WhatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("Chat with us on WhatsApp")}
        className="relative z-10 block"
      >
        <Image
          src="/whatsappIcon.png"
          alt={t("WhatsApp Chat")}
          width={64}
          height={64}
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-white shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </a>
    </motion.div>
  </div>
  )
}

export default WhatsappLive
