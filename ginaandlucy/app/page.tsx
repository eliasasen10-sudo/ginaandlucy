'use client'

import { LucyCursor } from '@/components/ui/lucy-cursor'
import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Link from 'next/link'
import { Instagram, Youtube, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers'
import Image from 'next/image'

export default function HomePage() {
  const { t } = useLanguage()

  const stats = [
    { label: t('Beiträge', 'Posts'), value: '131' },
    { label: t('Follower', 'Followers'), value: '14.200' },
    { label: t('Gefolgt', 'Following'), value: '5' },
  ]

  const quickLinks = [
    {
      emoji: '📖',
      title: t('Unsere Geschichte', 'Our Story'),
      desc: t(
        'Erfahre wie eine Siamkatze und eine Maine Coon die Weltherrschaft planen.',
        'Learn how a Siamese cat and a Maine Coon are planning world domination.'
      ),
      href: '/about',
      label: t('Zur Story', 'Read the Story'),
    },
    {
      emoji: '🛍️',
      title: t('Merch Shop', 'Merch Shop'),
      desc: t(
        'Hoodies, Tassen, Socken — alles mit Katzenfaktor.',
        'Hoodies, mugs, socks — all with cat factor.'
      ),
      href: '/merch',
      label: t('Zum Shop', 'To the Shop'),
    },
    {
      emoji: '🎬',
      title: t('Meme Feed', 'Meme Feed'),
      desc: t(
        'Die besten Momente. Mit Like-Button. Natürlich.',
        'The best moments. With a like button. Obviously.'
      ),
      href: '/feed',
      label: t('Zum Feed', 'To the Feed'),
    },
  ]

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
              {t('Das chaotische', 'The chaotic')}<br />
              {t('Leben von', 'life of')}{' '}
              <span className="text-[#a855f7]">Gina</span>
              <br />
              <span className="text-muted-foreground">&</span>{' '}
              <span className="text-[#ff3e8a]">Lucy</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
              {t(
                'Gina schläft. Lucy regiert. Der Butler überlebt. Folge dem größten Katzen-Imperium Münchens. 🐾',
                "Gina sleeps. Lucy rules. The butler survives. Follow Munich's biggest cat empire. 🐾"
              )}
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
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <Link
                href="/merch"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                {t('Merch Shop', 'Merch Shop')}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
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

      {/* Scroll Animation Section */}
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-3">
              {t('Das Imperium in Bildern', 'The empire in pictures')}
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight">
              {t('Gina schläft.', 'Gina sleeps.')}<br />
              <span className="text-[#a855f7]">{t('Lucy regiert.', 'Lucy rules.')}</span>{' '}
              <span className="text-[#ff3e8a]">{t('Chaos garantiert.', 'Chaos guaranteed.')}</span>
            </h2>
          </div>
        }
      >
        <div className="h-full w-full grid grid-cols-2 gap-3 p-2">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/gini.jpeg"
              alt="Gina"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
                <span className="text-white text-xs font-semibold">Gina</span>
                <span className="text-white/60 text-xs">{t('Siamkatze', 'Siamese cat')}</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/Lucy.png"
              alt="Lucy"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff3e8a]" />
                <span className="text-white text-xs font-semibold">Lucy</span>
                <span className="text-white/60 text-xs">Maine Coon</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Quick links section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map((item) => (
            <Card key={item.title} className="p-6 group hover:border-[#ff3e8a]/40 transition-colors">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.desc}</p>
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
