'use client'

import { useLanguage } from '@/components/providers'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Instagram, Youtube, Mail, TrendingUp, Users, Heart, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { BrandContactForm } from '@/components/brand-contact-form'

export default function PressPage() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Users,
      label: t('Aufgebaute Community', 'Community built'),
      value: '36.000+',
      sub: t('Track Record, Relaunch 2026', 'track record, relaunch 2026'),
    },
    {
      icon: TrendingUp,
      label: t('Lifetime Views', 'Lifetime Views'),
      value: '1.48 Mio',
      sub: t('über 89 Videos', 'across 89 videos'),
    },
    {
      icon: Heart,
      label: t('Top Engagement-Rate', 'Top Engagement Rate'),
      value: '47%',
      sub: t('„Beatboxing Cat" Reel', '"Beatboxing Cat" Reel'),
    },
    {
      icon: Award,
      label: t('Posting-Frequenz', 'Posting frequency'),
      value: t('4–6/Woche', '4–6/week'),
      sub: t('IG, TikTok, YouTube, FB', 'IG, TikTok, YouTube, FB'),
    },
  ]

  const audience = [
    { label: t('Cat-Owner', 'Cat owners'), value: '92%' },
    { label: t('DACH-Region', 'DACH region'), value: '65%' },
    { label: t('Alter 25–44', 'Age 25–44'), value: '58%' },
    { label: t('Female', 'Female'), value: '71%' },
  ]

  const offerings = [
    {
      title: t('Sponsored Reel', 'Sponsored Reel'),
      desc: t(
        '15–30 Sek Reel auf Instagram + YouTube Shorts',
        '15–30 sec reel on Instagram + YouTube Shorts'
      ),
      price: '€350–500',
    },
    {
      title: t('Multi-Platform-Paket', 'Multi-Platform Package'),
      desc: t(
        'Reel + Story-Reihe + Cross-Post auf FB-Page',
        'Reel + Story series + cross-post on FB page'
      ),
      price: '€500–800',
    },
    {
      title: t('Long-Term Partnership', 'Long-Term Partnership'),
      desc: t(
        '3 Monate, 4–6 Content-Pieces, Ambassador-Status',
        '3 months, 4–6 content pieces, ambassador status'
      ),
      price: '€1.500–3.000',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-6 w-fit">
              <Award className="w-3 h-3" />
              {t('Brand Partnerships', 'Brand Partnerships')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-6">
              {t('Arbeiten mit', 'Work with')}<br />
              <span className="text-[#a855f7]">Gina</span>{' '}
              <span className="text-muted-foreground">&</span>{' '}
              <span className="text-[#ff3e8a]">Lucy</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
              {t(
                '36.000+ Cat-Lover aufgebaut, bewährte Viral-Formate, jetzt Relaunch mit AI-Magic. Lass uns über deine Brand sprechen.',
                '36,000+ cat lovers built, proven viral formats, now relaunching with AI magic. Let\'s talk about your brand.'
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                {t('Anfrage senden', 'Send inquiry')}
              </a>
              <a
                href="mailto:info@ginaandlucy.com?subject=Brand%20Partnership%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border font-semibold hover:bg-muted transition-colors text-sm"
              >
                info@ginaandlucy.com
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-[#a855f7]/15">
              <Image
                src="/higgsfield/duo-boss-intern-1.png"
                alt={t('Lucy der Boss und Gina die Assistentin', 'Lucy the boss and Gina the assistant')}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-white text-[11px] font-semibold">{t('Das Team', 'The Team')} 🐾</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-5">
                <stat.icon className="h-5 w-5 text-[#ff3e8a] mb-3" />
                <div className="text-3xl font-black tracking-tighter mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tighter mb-2">
            {t('Audience-Profil', 'Audience Profile')}
          </h2>
          <p className="text-muted-foreground">
            {t('Wer schaut Gina & Lucy?', 'Who watches Gina & Lucy?')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {audience.map((a) => (
            <div
              key={a.label}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <div className="text-2xl font-bold text-[#ff3e8a]">{a.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tighter mb-2">
            {t('Pakete & Pricing', 'Packages & Pricing')}
          </h2>
          <p className="text-muted-foreground">
            {t(
              'Transparente Preise, faire Konditionen. Custom-Pakete auf Anfrage.',
              'Transparent prices, fair conditions. Custom packages on request.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offerings.map((o) => (
            <Card key={o.title} className="p-6">
              <h3 className="font-semibold text-lg mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {o.desc}
              </p>
              <div className="text-2xl font-bold text-[#ff3e8a]">{o.price}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 pb-20 scroll-mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-3">
            {t('Anfrage senden', 'Send inquiry')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              'Schreib uns kurz, was du im Sinn hast. Wir antworten innerhalb von 48 Stunden mit konkretem Vorschlag.',
              'Drop us a line about what you have in mind. We respond within 48 hours with a concrete proposal.'
            )}
          </p>
        </div>
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#ff3e8a]/5 to-[#a855f7]/5 border-[#ff3e8a]/20">
          <BrandContactForm />
        </Card>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a
            href="https://www.instagram.com/therealginaandlucy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border text-sm font-semibold hover:bg-muted transition-colors"
          >
            <Instagram className="h-4 w-4" />
            {t('DM auf Instagram', 'DM on Instagram')}
          </a>
        </div>
      </section>
    </div>
  )
}
