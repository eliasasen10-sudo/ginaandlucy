'use client'

import { useLanguage } from '@/components/providers'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-xl">🐾</span>
          <span>gina</span>
          <span className="text-[#ff3e8a]">&</span>
          <span>lucy</span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          © 2024 ginaandlucy.official — {t('Alle Rechte vorbehalten.', 'All Rights Reserved.')}<br className="sm:hidden" />
          {' '}{t('Die Weltherrschaft ist in Arbeit.', 'The world domination is in progress.')} 😼
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/ginaandlucy.official" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-sm">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-sm">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
