"use client"

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react"

interface AirplaneRevealProps {
  children: ReactNode
  direction?: "left-to-right" | "right-to-left"
}

export default function AirplaneReveal({
  children,
  direction = "left-to-right",
}: AirplaneRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const targetProgress = useRef(0)
  const smoothProgress = useRef(0)
  const lastScrollY = useRef(0)
  const scrollingDown = useRef(true)
  const rafId = useRef<number>(0)
  const hasCompleted = useRef(false)
  const [render, setRender] = useState({
    progress: 0,
    isInView: false,
    isScrollingDown: true,
    contentRevealed: false,
  })

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animate = useCallback(() => {
    // Smooth interpolation — lower = smoother & more cinematic
    smoothProgress.current = lerp(smoothProgress.current, targetProgress.current, 0.045)

    // Snap to target if very close (avoid infinite micro-updates)
    if (Math.abs(smoothProgress.current - targetProgress.current) < 0.0005) {
      smoothProgress.current = targetProgress.current
    }

    // Mark content as fully revealed once plane crosses ~85%
    if (smoothProgress.current > 0.85) {
      hasCompleted.current = true
    }

    setRender((prev) => {
      const newContentRevealed = prev.contentRevealed || hasCompleted.current
      if (
        Math.abs(prev.progress - smoothProgress.current) < 0.0003 &&
        prev.isScrollingDown === scrollingDown.current &&
        prev.contentRevealed === newContentRevealed
      )
        return prev
      return {
        ...prev,
        progress: smoothProgress.current,
        isScrollingDown: scrollingDown.current,
        contentRevealed: newContentRevealed,
      }
    })

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    lastScrollY.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRender((prev) => ({ ...prev, isInView: true }))
        } else {
          // When section leaves viewport, check if it went above (user scrolled past it)
          // If so, reset so the plane flies again on next scroll-down visit
          const rect = section.getBoundingClientRect()
          if (rect.bottom < 0) {
            // Section is above viewport — reset animation for next visit
            targetProgress.current = 0
            smoothProgress.current = 0
            hasCompleted.current = false
            setRender({
              progress: 0,
              isInView: false,
              isScrollingDown: true,
              contentRevealed: false,
            })
          }
        }
      },
      { threshold: 0.02 }
    )

    observer.observe(section)

    const handleScroll = () => {
      if (!section) return

      // Detect scroll direction
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current + 1) {
        scrollingDown.current = true
      } else if (currentScrollY < lastScrollY.current - 1) {
        scrollingDown.current = false
      }
      lastScrollY.current = currentScrollY

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const start = windowHeight
      const end = windowHeight * 0.15
      const current = rect.top

      if (current >= start) {
        targetProgress.current = 0
      } else if (current <= end) {
        targetProgress.current = 1
      } else {
        targetProgress.current = (start - current) / (start - end)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    // Start animation loop
    rafId.current = requestAnimationFrame(animate)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [animate])

  const { progress, isInView, isScrollingDown, contentRevealed } = render
  const isLTR = direction === "left-to-right"

  // Airplane position — smooth glide using current progress
  const planeX = isLTR ? -10 + progress * 114 : 110 - progress * 114

  // Reveal wipe — once content has been fully revealed, keep it visible
  const revealPercent = contentRevealed ? 100 : Math.min(progress * 1.2, 1) * 100
  const clipPath = isLTR
    ? `inset(0 ${100 - revealPercent}% 0 0)`
    : `inset(0 0 0 ${100 - revealPercent}%)`

  // Gentle vertical bobbing — sine wave for natural float
  const bobY = Math.sin(progress * Math.PI * 2.5) * 4

  // Subtle tilt based on movement
  const tiltDeg = isLTR
    ? -2 + progress * 1.5
    : 2 - progress * 1.5

  // Plane visible when scrolling DOWN and in transit range
  const planeOpacity =
    isInView && isScrollingDown && progress > 0.01 && progress < 0.96 ? 1 : 0

  // Contrail length grows as plane moves
  const trailWidth = 80 + progress * 300

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Airplane + contrail */}
      <div
        className="absolute z-30 pointer-events-none"
        style={{
          left: `${planeX}%`,
          top: "36px",
          transform: `translateX(-50%) translateY(${bobY}px) rotate(${tiltDeg}deg) scaleX(${isLTR ? 1 : -1})`,
          opacity: planeOpacity,
          transition: "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          filter: "drop-shadow(0 2px 6px rgba(7, 19, 38, 0.18))",
          willChange: "transform, left, opacity",
        }}
      >
        {/* Primary vapor contrail */}
        <div
          style={{
            position: "absolute",
            top: "calc(50% - 1px)",
            [isLTR ? "right" : "left"]: "100%",
            transform: "translateY(-50%)",
            width: `${trailWidth}px`,
            height: "2px",
            background: isLTR
              ? "linear-gradient(to left, rgba(223,183,92,0.9), rgba(223,183,92,0.3) 50%, transparent)"
              : "linear-gradient(to right, rgba(223,183,92,0.9), rgba(223,183,92,0.3) 50%, transparent)",
            borderRadius: "2px",
          }}
        />
        {/* Broad glow wake */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            [isLTR ? "right" : "left"]: "100%",
            transform: "translateY(-50%)",
            width: `${trailWidth * 0.7}px`,
            height: "14px",
            background: isLTR
              ? "linear-gradient(to left, rgba(223,183,92,0.14), transparent)"
              : "linear-gradient(to right, rgba(223,183,92,0.18), transparent)",
            filter: "blur(10px)",
            borderRadius: "12px",
          }}
        />
        {/* Simple side-view plane: one gold silhouette, thin outline, no detail */}
        <svg
          width="76"
          height="28"
          viewBox="0 0 100 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* Wing */}
          <path d="M46 20 L32 33 L44 33 L68 20 Z" fill="#DFB75C" stroke="#9E7B1C" strokeWidth="1.6" />
          {/* Tail fin */}
          <path d="M8 17 L3 5 L13 5 L28 16 Z" fill="#DFB75C" stroke="#9E7B1C" strokeWidth="1.6" />
          {/* Body */}
          <path d="M4 17 L80 15 C92 15 98 18 98 19 C98 20 92 23 80 23 L24 23 C13 23 7 20 4 17 Z" fill="#DFB75C" stroke="#9E7B1C" strokeWidth="1.6" />
        </svg>
      </div>

      {/* Revealed content */}
      <div
        style={{
          clipPath: isInView ? clipPath : (isLTR ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"),
          willChange: "clip-path",
        }}
      >
        {children}
      </div>

      {/* Subtle background placeholder while content is hidden */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,30,63,0.015) 0%, rgba(197,155,39,0.02) 100%)",
          opacity: isInView ? Math.max(0, 1 - progress * 1.5) : 1,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  )
}

