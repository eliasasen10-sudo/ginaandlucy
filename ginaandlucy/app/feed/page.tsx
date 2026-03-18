'use client'

import { motion } from 'framer-motion'
import { HeartFavorite } from '@/components/ui/heart-favorite-shadcnui'
import { Play, Eye } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/providers'

const reels = [
  { id: 1, views: '10.400', labelDe: 'Gina backen 🍞', labelEn: 'Gina baking 🍞', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🐱+Backen', captionDe: 'Ich helfe beim Backen 💅', captionEn: 'I help with baking 💅' },
  { id: 2, views: '4.952', labelDe: 'Lucy auf Eis ⛸️', labelEn: 'Lucy on ice ⛸️', image: 'https://placehold.co/400x600/1a1a1a/ff8a3e?text=🐈+Eis', captionDe: 'Olympics 2028 ich komme', captionEn: 'Olympics 2028 here I come' },
  { id: 3, views: '8.989', labelDe: 'Starren Contest 👀', labelEn: 'Staring Contest 👀', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=👀+Stare', captionDe: 'Ich verliere nie.', captionEn: 'I never lose.' },
  { id: 4, views: '1,6 Mio.', labelDe: 'Drucker-Battle 🖨️', labelEn: 'Printer Battle 🖨️', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🖨️+WTF', captionDe: 'Wer hat das hier installiert?', captionEn: 'Who installed this thing?' },
  { id: 5, views: '23.100', labelDe: 'Farmer Gina 👒', labelEn: 'Farmer Gina 👒', image: 'https://placehold.co/400x600/1a1a1a/3eff8a?text=👒+Farm', captionDe: 'Das Landleben ruft. Kurz.', captionEn: 'Country life calls. Briefly.' },
  { id: 6, views: '7.441', labelDe: 'Tür-Philosophie 🚪', labelEn: 'Door Philosophy 🚪', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🚪+Hmm', captionDe: 'Offen oder zu? Existenziell.', captionEn: 'Open or closed? Existential.' },
  { id: 7, views: '44.200', labelDe: 'Gym Bro Lucy 💪', labelEn: 'Gym Bro Lucy 💪', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=💪+Gym', captionDe: 'Gains incoming. Fear me.', captionEn: 'Gains incoming. Fear me.' },
  { id: 8, views: '9.800', labelDe: 'Baumarkt Chaos 🔨', labelEn: 'Hardware Store Chaos 🔨', image: 'https://placehold.co/400x600/1a1a1a/ff8a3e?text=🔨+Chaos', captionDe: 'Wir helfen beim Heimwerken.', captionEn: 'We help with DIY.' },
]

function ReelCard({ reel }: { reel: typeof reels[0] }) {
  const { t } = useLanguage()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(`liked-reel-${reel.id}`)
    if (saved === 'true') setLiked(true)
  }, [reel.id])

  const handleToggle = (val: boolean) => {
    setLiked(val)
    localStorage.setItem(`liked-reel-${reel.id}`, String(val))
  }

  return (
    <div className="group relative rounded-xl overflow-hidden border border-border hover:border-[#ff3e8a]/40 transition-all duration-300 cursor-pointer">
      <Image
        src={reel.image}
        alt={t(reel.labelDe, reel.labelEn)}
        width={400}
        height={600}
        className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
        </div>
        <p className="text-white text-xs font-medium px-4 text-center leading-snug">
          {t(reel.captionDe, reel.captionEn)}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
        <div className="flex items-center gap-1 text-white text-xs">
          <Eye className="h-3.5 w-3.5" />
          <span>{reel.views}</span>
        </div>
        <HeartFavorite size="sm" initialLiked={liked} onToggle={handleToggle} />
      </div>
    </div>
  )
}

export default function FeedPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          🎬 Reels Feed
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          {t('Die besten', 'The best')} <span className="text-[#ff3e8a]">{t('Momente', 'Moments')}</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t(
            'Hover zum Anschauen. ❤️ zum Liken. Das Chaos ist gratis.',
            'Hover to watch. ❤️ to like. The chaos is free.'
          )}
        </p>
      </motion.div>

      {/* Profile strip */}
      <motion.div
        className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-card border border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff3e8a] flex-shrink-0">
          <Image src="https://placehold.co/56x56/1a1a1a/ff3e8a?text=🐾" alt="Profile" width={56} height={56} />
        </div>
        <div className="flex-1">
          <div className="font-bold text-foreground">ginaandlucy.official</div>
          <div className="text-muted-foreground text-sm">Digital Creator · München</div>
        </div>
        <div className="hidden sm:flex gap-6 text-center">
          {[
            ['131', t('Beiträge', 'Posts')],
            ['14.200', t('Follower', 'Followers')],
            ['5', t('Gefolgt', 'Following')],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="font-bold text-foreground text-sm">{val}</div>
              <div className="text-muted-foreground text-xs">{label}</div>
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/ginaandlucy.official"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[#ff3e8a] text-white text-xs font-semibold hover:bg-[#ff3e8a]/80 transition-colors flex-shrink-0"
        >
          {t('Folgen', 'Follow')}
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
          >
            <ReelCard reel={reel} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
