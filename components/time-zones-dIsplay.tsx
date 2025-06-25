'use client'

import Image from "next/image"
import React, { useEffect, useState } from 'react'

function TimezonesDisplay() {
  const [times, setTimes] = useState({
    Dubai: '',
    London: '',
    'Addis Ababa': '',
    China: '',
  })

  const updateTimes = () => {
    const format = (tz: string) =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: tz,
      }).format(new Date())

    setTimes({
      Dubai: format('Asia/Dubai'),
      London: format('Europe/London'),
      'Addis Ababa': format('Africa/Addis_Ababa'),
      China: format('Asia/Shanghai')
    })
  }

  useEffect(() => {
    updateTimes()
    const interval = setInterval(updateTimes, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-11 px-4 text-black">

      {/* Content */}
      <div className="max-w-6xl mx-auto flex justify-center gap-12 flex-wrap">
        {Object.entries(times).map(([city, time]) => (
          <div key={city} className="text-center">
            <div className="text-white-900 text-2xl font-semibold">{city}</div>
            <div className="h-1 w-6 mx-auto bg-blue-600 mt-1 mb-2 rounded-sm"          data-aos="slide-right"
            ></div>
            <div className="text-white-900 text-xl font-semibold">{time}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimezonesDisplay
