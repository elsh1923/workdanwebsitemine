'use client'

import React, { useEffect, useState } from 'react'
import { Clock, Globe } from 'lucide-react'

function TimezonesDisplay() {
  const [times, setTimes] = useState({
    'Addis Ababa': '',
    Dubai: '',
    London: '',
    Guangzhou: '',
  })

  const updateTimes = () => {
    const format = (tz: string) =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: tz,
      }).format(new Date())

    setTimes({
      'Addis Ababa': format('Africa/Addis_Ababa'),
      Dubai: format('Asia/Dubai'),
      London: format('Europe/London'),
      Guangzhou: format('Asia/Shanghai'),
    })
  }

  useEffect(() => {
    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  const timezoneDetails: Record<string, { country: string; gmt: string }> = {
    'Addis Ababa': { country: 'Headquarters • Ethiopia', gmt: 'GMT+3' },
    Dubai: { country: 'Regional Hub • UAE', gmt: 'GMT+4' },
    London: { country: 'European Partner • UK', gmt: 'GMT+1' },
    Guangzhou: { country: 'Asia Operations • China', gmt: 'GMT+8' },
  }

  return (
    <section className="relative py-12 px-4 bg-gradient-to-r from-[#071526] via-[#0c2340] to-[#071526] border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8 text-[#dfb75c]">
          <Globe className="w-4 h-4" />
          <span className="text-xs uppercase font-semibold tracking-widest text-[#dfb75c]">
            Global Operations & Real-Time Desk
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {Object.entries(times).map(([city, time]) => (
            <div
              key={city}
              className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#dfb75c]/40 transition-all duration-300 group"
            >
              <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#dfb75c] transition-colors block">
                {city}
              </span>
              <span className="text-[11px] text-stone-400 block mt-0.5">
                {timezoneDetails[city]?.country}
              </span>

              <div className="my-3 flex items-center justify-center gap-1.5 text-stone-400">
                <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                <span className="text-xs font-mono text-[#e8c879]">
                  {timezoneDetails[city]?.gmt}
                </span>
              </div>

              <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-widest bg-black/20 py-1.5 px-3 rounded-lg border border-white/5 inline-block">
                {time || '--:--:--'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimezonesDisplay
