"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { createContext, useContext, useState, type ReactNode } from "react"

// ── Language Context ──────────────────────────────────────────
type Lang = "de" | "en"

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (de: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  t: (de) => de,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de")
  const t = (de: string, en: string) => (lang === "de" ? de : en)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ── Root Providers ────────────────────────────────────────────
export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <LanguageProvider>{children}</LanguageProvider>
    </NextThemesProvider>
  )
}
