import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import { Cormorant_Garamond, Inter, Noto_Sans_Ethiopic, Noto_Serif_Ethiopic } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsappLive from './WhatsappLive'
import BackToTop from '@/components/back-to-top'
import { LanguageProvider } from '@/components/language-provider'

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Latin fonts have no Ethiopic glyphs; these load for the Amharic version.
const ethiopicSans = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ethiopic-sans',
  display: 'swap',
})

const ethiopicSerif = Noto_Serif_Ethiopic({
  subsets: ['ethiopic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ethiopic-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Workdan Tour & Travel Agent | Bespoke Luxury Journeys',
    template: '%s | Workdan Tour & Travel',
  },
  description: 'Curating bespoke luxury travel journeys, flight bookings, hotel reservations, and business consultation services from Addis Ababa & UAE. IATA certified agency.',
  keywords: ['luxury travel', 'tour agent', 'Ethiopia travel', 'UAE business setup', 'visa services', 'Dubai tour', 'flight booking', 'hotel booking', 'Addis Ababa', 'Workdan'],
  authors: [{ name: 'Workdan Tour & Travel Agent' }],
  creator: 'Workdan Tour & Travel Agent',
  metadataBase: new URL('https://www.workdantravel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.workdantravel.com',
    title: 'Workdan Tour & Travel Agent | Bespoke Luxury Journeys',
    description: 'Curating bespoke luxury travel journeys, flight bookings, hotel reservations, and business consultation. IATA certified agency with offices in Addis Ababa & UAE.',
    siteName: 'Workdan Tour & Travel Agent',
    images: [
      {
        url: '/logo/navbar-workdan-logo.png',
        width: 400,
        height: 400,
        alt: 'Workdan Tour & Travel Agent Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workdan Tour & Travel Agent | Bespoke Luxury Journeys',
    description: 'Curating bespoke luxury travel journeys, flight bookings, hotel reservations, and business consultation.',
    images: ['/logo/navbar-workdan-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${heading.variable} ${body.variable} ${ethiopicSans.variable} ${ethiopicSerif.variable}`}>
      <body className="bg-white dark:bg-[#071526] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
            <BackToTop />
            <WhatsappLive />
          </LanguageProvider>
        </ThemeProvider>
        {/* Tawk.to Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6867e909d7341f191194877a/1ivaucjc0';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Workdan Tour & Travel Agent",
              "url": "https://www.workdantravel.com",
              "logo": "https://www.workdantravel.com/logo/navbar-workdan-logo.png",
              "description": "IATA certified bespoke luxury travel agency specializing in international tour packages, visa services, hotel bookings, and UAE business consultation.",
              "telephone": ["+251906700007", "+251911625035", "+971509064877"],
              "email": ["workdantrading@gmail.com", "workdaneuae@gmail.com"],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Megenagna Wach Building, 2nd Floor",
                  "addressLocality": "Addis Ababa",
                  "addressCountry": "ET"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Sharjah Business Center, Ground Floor",
                  "addressLocality": "Sharjah",
                  "addressCountry": "AE"
                }
              ],
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://facebook.com/workdantravel",
                "https://instagram.com/workdantravel",
                "https://t.me/workdantravel",
                "https://www.youtube.com/@workdan",
                "https://www.tiktok.com/@workdantravel"
              ],
              "areaServed": ["Ethiopia", "UAE", "Global"],
              "priceRange": "$$-$$$"
            })
          }}
        />
      </body>
    </html>
  )
}
