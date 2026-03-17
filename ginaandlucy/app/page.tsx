'use client'

import { LucyCursor } from '@/components/ui/lucy-cursor'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Instagram, Youtube, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Beiträge', value: '131' },
  { label: 'Follower', value: '14.200' },
  { label: 'Gefolgt', value: '5' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#ff3e8a" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-0 lg:min-h-[calc(100vh-4rem)]">
          {/* Left content */}
          <motion.div
            className="flex-1 z-10 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3e8a] animate-pulse" />
              Digital Creators 😼
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
              The chaotic<br />
              life of{' '}
              <span className="text-[#a855f7]">Gina</span>
              <br />
              <span className="text-zinc-400">&</span>{' '}
              <span className="text-[#ff3e8a]">Lucy</span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-md mb-8 leading-relaxed">
              Gina schläft. Lucy regiert. Der Butler überlebt.
              Folge dem größten Katzen-Imperium Münchens. 🐾
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://www.instagram.com/ginaandlucy.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#2a2a2a] transition-colors"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <Link
                href="/merch"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#2a2a2a] transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                Merch Shop
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right content — Lucy */}
          <div className="flex-1 w-full lg:w-auto h-[420px] lg:h-[calc(100vh-4rem)] relative">
            <LucyCursor />
          </div>
        </div>
      </section>

      {/* Quick links section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              emoji: '📖',
              title: 'Unsere Geschichte',
              desc: 'Erfahre wie eine Siamkatze und eine Maine Coon die Weltherrschaft planen.',
              href: '/about',
              label: 'Zur Story',
            },
            {
              emoji: '🛍️',
              title: 'Merch Shop',
              desc: 'Hoodies, Tassen, Socken — alles mit Katzenfaktor.',
              href: '/merch',
              label: 'Zum Shop',
            },
            {
              emoji: '🎬',
              title: 'Meme Feed',
              desc: 'Die besten Momente. Mit Like-Button. Natürlich.',
              href: '/feed',
              label: 'Zum Feed',
            },
          ].map((item) => (
            <Card key={item.title} className="p-6 group hover:border-[#ff3e8a]/40 transition-colors">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-[#ff3e8a] text-sm font-medium hover:gap-2 transition-all"
              >
                {item.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
