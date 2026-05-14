'use client'

import Link from 'next/link'
import { Home, ArrowRight, Instagram, Youtube } from 'lucide-react'
import { useLanguage } from '@/components/providers'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6 select-none" aria-hidden="true">😺</div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          404 · {t('Verlaufen', 'Lost in the apartment')}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          {t('Diese Seite hat', 'This page has')}{' '}
          <span className="text-[#ff3e8a]">{t('Lucy versteckt', 'been hidden by Lucy')}</span>.
        </h1>
        <p className="text-muted-foreground mb-8">
          {t(
            'Wahrscheinlich liegt sie gerade drauf und schläft. Hier gehts zurück:',
            'She is probably napping on it. Here is the way back:'
          )}
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Home className="h-4 w-4" />
            {t('Zur Startseite', 'Back to home')}
          </Link>
          <Link
            href="/feed"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border font-semibold text-sm hover:bg-muted transition-colors"
          >
            {t('Live Feed', 'Live Feed')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex gap-4 justify-center text-muted-foreground">
          <a
            href="https://www.instagram.com/ginaandlucy.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#ff3e8a] transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/@ginaandlucy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#ff3e8a] transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
