"use client"

import { useLanguage } from "@/components/providers"
import { cn } from "@/lib/utils"

interface LangToggleProps {
  className?: string
}

export function LangToggle({ className }: LangToggleProps) {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      className={cn(
        "flex items-center h-8 rounded-full px-1 gap-0.5 border transition-all duration-300 cursor-pointer",
        "bg-zinc-950 border-zinc-800 dark:bg-zinc-950 dark:border-zinc-800",
        "light:bg-white light:border-zinc-200",
        className
      )}
      aria-label="Toggle language"
    >
      <span
        className={cn(
          "text-xs font-semibold px-2 py-1 rounded-full transition-all duration-200",
          lang === "de"
            ? "bg-[#ff3e8a] text-white"
            : "text-zinc-500 dark:text-zinc-500"
        )}
      >
        DE
      </span>
      <span
        className={cn(
          "text-xs font-semibold px-2 py-1 rounded-full transition-all duration-200",
          lang === "en"
            ? "bg-[#ff3e8a] text-white"
            : "text-zinc-500 dark:text-zinc-500"
        )}
      >
        EN
      </span>
    </button>
  )
}
