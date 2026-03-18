'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LangToggle } from '@/components/ui/lang-toggle'
import { useLanguage } from '@/components/providers'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    { href: '/', label: t('Home', 'Home') },
    { href: '/about', label: t('Über uns', 'About') },
    { href: '/rassen', label: t('Rassen', 'Breeds') },
    { href: '/merch', label: t('Merch', 'Merch') },
    { href: '/feed', label: t('Feed', 'Feed') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="text-2xl">🐾</span>
            <span className="text-foreground">gina</span>
            <span className="text-[#ff3e8a]">&</span>
            <span className="text-foreground">lucy</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[#ff3e8a]/10 text-[#ff3e8a]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/merch"
              className="ml-2 px-4 py-2 rounded-lg bg-[#ff3e8a] text-white text-sm font-semibold hover:bg-[#ff3e8a]/80 transition-colors"
            >
              {t('Shop', 'Shop')}
            </Link>
            <div className="ml-3 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile: toggles + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-border mt-0 pt-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[#ff3e8a]/10 text-[#ff3e8a]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
