"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl border border-stone-200/60 bg-white/10 ${className}`} />
    )
  }

  const isDark = resolvedTheme === "dark" || theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-9 h-9 rounded-xl border border-stone-200/80 dark:border-blue-900/60 bg-stone-50/80 dark:bg-[#0c2340]/80 hover:bg-stone-100 dark:hover:bg-[#16335c] text-stone-700 dark:text-[#dfb75c] transition-all duration-200 shadow-xs ${className}`}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 text-[#dfb75c]" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 text-[#0c2340]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
