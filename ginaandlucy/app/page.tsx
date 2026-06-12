'use client'

import { Spotlight } from '@/components/ui/spotlight'
import { Card } from '@/components/ui/card'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { SparklesText } from '@/components/ui/sparkles-text'
import Link from 'next/link'
import { Instagram, Youtube, Mail, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers'
import Image from 'next/image'
import { LatestReels } from '@/components/latest-reels'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function HomePage() {
  const { t } = useLanguage()

  const stats = [
    { label: t('Chaos', 'Chaos'), value: '24/7' },
    { label: t('Boss', 'Boss'), value: '1' },
    { label: t('Mitspracherecht Gina', 'Say in decisions (Gina)'), value: '0%' },
  ]

  const quickLinks = [
    {
      emoji: '📖',
      title: t('Unsere Geschichte', 'Our Story'),
      desc: t(
        'Wie eine Siamkatze und eine Maine Coon ein 47m²-Imperium aufgebaut haben.',
        'How a Siamese cat and a Maine Coon built a 47m² empire.'
      ),
      href: '/about',
      label: t('Zur Story', 'Read the Story'),
    },
    {
      emoji: '🐾',
      title: t('Die Rassen', 'The Breeds'),
      desc: t(
        'Maine Coon vs. Siamkatze — alles was du über die beiden Persönlichkeiten wissen musst.',
        'Maine Coon vs. Siamese — everything you need to know about both personalities.'
      ),
      href: '/rassen',
      label: t('Rassen entdecken', 'Discover the breeds'),
    },
    {
      emoji: '📩',
      title: t('Brand Deals', 'Brand Deals'),
      desc: t(
        'Pet-Brand? Audience-Daten, Pricing & Anfrageformular auf der Press-Seite.',
        'Pet brand? Audience data, pricing & inquiry form on the press page.'
      ),
      href: '/press',
      label: t('Media-Kit', 'Media Kit'),
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
              <SparklesText
                text="Gina"
                className="text-[#a855f7]"
                colors={{ first: '#a855f7', second: '#c084fc' }}
                activeMs={2000}
                pauseMs={5000}
              />
              <br />
              <span className="text-muted-foreground">&</span>{' '}
              <SparklesText
                text="Lucy"
                className="text-[#ff3e8a]"
                colors={{ first: '#ff3e8a', second: '#ff8a3e' }}
                activeMs={2000}
                pauseMs={5000}
              />
            </h1>

            <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
              {t(
                'Gina schläft. Lucy regiert. Der Butler überlebt. Folge dem dramatischsten Katzen-Imperium des Internets. 🐾',
                "Gina sleeps. Lucy rules. The butler survives. Follow the internet's most dramatic cat empire. 🐾"
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://www.instagram.com/therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@therealginaandlucy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TikTok
              </a>
              <Link
                href="/press"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t('Media-Kit', 'Media Kit')}
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

          {/* Right content — Boss & Intern */}
          <motion.div
            className="flex-1 w-full lg:w-auto relative py-8 lg:py-16 pl-6 pb-12"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-[#ff3e8a]/20">
              <Image
                src="/higgsfield/lucy-boss-1.png"
                alt="Lucy, der Boss"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-white text-[11px] font-semibold tracking-wide">Lucy · {t('Der Boss', 'The Boss')}</span>
              </div>
            </div>
            <div className="absolute -bottom-2 left-0 w-44 sm:w-56 rounded-xl overflow-hidden border border-border shadow-xl -rotate-3 aspect-[4/3]">
              <Image
                src="/higgsfield/gina-intern-1.png"
                alt="Gina, die Praktikantin"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-[11px] font-semibold">Gina · {t('Die Praktikantin', 'The Intern')}</span>
              </div>
            </div>
          </motion.div>
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
              src="/higgsfield/lucy-regal-1.png"
              alt="Lucy auf ihrem Thron"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff3e8a]" />
                <span className="text-white text-xs font-semibold">Lucy</span>
                <span className="text-white/60 text-xs">{t('Maine Coon · CEO', 'Maine Coon · CEO')}</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/higgsfield/gina-portrait-1.png"
              alt="Gina"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
                <span className="text-white text-xs font-semibold">Gina</span>
                <span className="text-white/60 text-xs">{t('Siamkatze · Praktikantin', 'Siamese · Intern')}</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Live: latest reels */}
      <LatestReels limit={4} />

      {/* Quick links section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
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

      {/* Newsletter capture */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <NewsletterSignup variant="card" />
      </section>
    </div>
  )
}
