'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Home, Info, PawPrint, ShoppingBag, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LangToggle } from '@/components/ui/lang-toggle'
import { ExpandableTabs } from '@/components/ui/expandable-tabs'
import { useLanguage } from '@/components/providers'

const routes = [
  { href: '/',        icon: Home,        labelDe: 'Home',      labelEn: 'Home' },
  { href: '/about',   icon: Info,        labelDe: 'Über uns',  labelEn: 'About' },
  { href: '/rassen',  icon: PawPrint,    labelDe: 'Rassen',    labelEn: 'Breeds' },
  { href: '/merch',   icon: ShoppingBag, labelDe: 'Merch',     labelEn: 'Merch' },
  { href: '/feed',    icon: Play,        labelDe: 'Feed',      labelEn: 'Feed' },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const activeIndex = routes.findIndex((r) => r.href === pathname)

  const tabs = routes.map((r) => ({
    title: t(r.labelDe, r.labelEn),
    icon: r.icon,
  }))

  const handleTabChange = (index: number | null) => {
    if (index !== null) router.push(routes[index].href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight shrink-0">
            <span className="text-2xl">🐾</span>
            <span className="text-foreground">gina</span>
            <span className="text-[#ff3e8a]">&</span>
            <span className="text-foreground">lucy</span>
          </Link>

          {/* Desktop nav — ExpandableTabs */}
          <div className="hidden md:flex items-center gap-3">
            <ExpandableTabs
              tabs={tabs}
              selected={activeIndex >= 0 ? activeIndex : null}
              onChange={handleTabChange}
            />
            <Link
              href="/merch"
              className="px-4 py-2 rounded-xl bg-[#ff3e8a] text-white text-sm font-semibold hover:bg-[#ff3e8a]/80 transition-colors"
            >
              {t('Shop', 'Shop')}
            </Link>
            <div className="flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>
          </div>

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
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === route.href
                    ? 'bg-[#ff3e8a]/10 text-[#ff3e8a]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <route.icon className="h-4 w-4" />
                {t(route.labelDe, route.labelEn)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
