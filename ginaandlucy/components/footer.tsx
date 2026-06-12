'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/providers'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { Instagram, Youtube, Mail } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Top: Newsletter + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold mb-3">
              <span className="text-2xl">🐾</span>
              <span>gina</span>
              <span className="text-[#ff3e8a]">&</span>
              <span>lucy</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              {t(
                'Cat-Comedy mit AI-Magic. Gina (Siamkatze) und Lucy (Maine Coon) erobern das Internet — eine Reel nach der anderen.',
                'Cat comedy with AI magic. Gina (Siamese) and Lucy (Maine Coon) conquer the internet — one reel at a time.'
              )}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="mailto:info@ginaandlucy.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-2 text-sm">
            <h4 className="font-semibold mb-1">
              {t('Navigation', 'Navigation')}
            </h4>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
            >
              {t('Über uns', 'About')}
            </Link>
            <Link
              href="/rassen"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
            >
              {t('Rassen', 'Breeds')}
            </Link>
            <Link
              href="/feed"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
            >
              {t('Feed', 'Feed')}
            </Link>
            <Link
              href="/press"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors"
            >
              {t('Press / Brand Deals', 'Press / Brand Deals')}
            </Link>
          </div>

          {/* Newsletter signup */}
          <div>
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        {/* Bottom: Legal + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            © 2026 therealginaandlucy —{' '}
            {t('Alle Rechte vorbehalten.', 'All Rights Reserved.')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/imprint"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-xs"
            >
              {t('Impressum', 'Imprint')}
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-xs"
            >
              {t('Datenschutz', 'Privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-xs"
            >
              {t('AGB', 'Terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
