'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Über uns' },
  { href: '/rassen', label: 'Rassen' },
  { href: '/merch', label: 'Merch' },
  { href: '/feed', label: 'Feed' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="text-2xl">🐾</span>
            <span className="text-white">gina</span>
            <span className="text-[#ff3e8a]">&</span>
            <span className="text-white">lucy</span>
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
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/merch"
              className="ml-2 px-4 py-2 rounded-lg bg-[#ff3e8a] text-white text-sm font-semibold hover:bg-[#ff3e8a]/80 transition-colors"
            >
              Shop now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-[#2a2a2a] mt-0 pt-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[#ff3e8a]/10 text-[#ff3e8a]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
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
