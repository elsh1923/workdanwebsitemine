import Script from 'next/script'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsappLive from './WhatsappLive'

export const metadata: Metadata = {
  title: 'Werkdan Tour and Travel',
  description: 'Werkdan Tour and Travel',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){
                m=c.createElement(h),
                p=c.getElementsByTagName(h)[0],
                m.async=1,
                m.src=i,
                p.parentNode.insertBefore(m,p)
              }(
                document,
                "script",
                "https://chimpstatic.com/mcjs-connected/js/users/57449e8ecc51299264551675f/b7ab15da10a0de831d4a98c4e.js"
              );
            `,
          }}
        />
      </Head> */}
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
        <WhatsappLive />
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
      </body>
    </html>
  )
}
