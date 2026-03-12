'use client'

import { motion } from 'framer-motion'
import { HeartFavorite } from '@/components/ui/heart-favorite-shadcnui'
import { Play, Eye } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const reels = [
  { id: 1, views: '10.400', label: 'Gina backen 🍞', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🐱+Backen', caption: 'Ich helfe beim Backen 💅' },
  { id: 2, views: '4.952', label: 'Lucy auf Eis ⛸️', image: 'https://placehold.co/400x600/1a1a1a/ff8a3e?text=🐈+Eis', caption: 'Olympics 2028 ich komme' },
  { id: 3, views: '8.989', label: 'Starren Contest 👀', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=👀+Stare', caption: 'Ich verliere nie.' },
  { id: 4, views: '1,6 Mio.', label: 'Drucker-Battle 🖨️', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🖨️+WTF', caption: 'Wer hat das hier installiert?' },
  { id: 5, views: '23.100', label: 'Farmer Gina 👒', image: 'https://placehold.co/400x600/1a1a1a/3eff8a?text=👒+Farm', caption: 'Das Landleben ruft. Kurz.' },
  { id: 6, views: '7.441', label: 'Tür-Philosophie 🚪', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=🚪+Hmm', caption: 'Offen oder zu? Existenziell.' },
  { id: 7, views: '44.200', label: 'Gym Bro Lucy 💪', image: 'https://placehold.co/400x600/1a1a1a/ff3e8a?text=💪+Gym', caption: 'Gains incoming. Fear me.' },
  { id: 8, views: '9.800', label: 'Baumarkt Chaos 🔨', image: 'https://placehold.co/400x600/1a1a1a/ff8a3e?text=🔨+Chaos', caption: 'Wir helfen beim Heimwerken.' },
]

function ReelCard({ reel }: { reel: typeof reels[0] }) {
  const [liked, setLiked] = useState(false)

  // Persist likes in localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`liked-reel-${reel.id}`)
    if (saved === 'true') setLiked(true)
  }, [reel.id])

  const handleToggle = (val: boolean) => {
    setLiked(val)
    localStorage.setItem(`liked-reel-${reel.id}`, String(val))
  }

  return (
    <div className="group relative rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#ff3e8a]/40 transition-all duration-300 cursor-pointer">
      <Image
        src={reel.image}
        alt={reel.label}
        width={400}
        height={600}
        className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
        </div>
        <p className="text-white text-xs font-medium px-4 text-center leading-snug">{reel.caption}</p>
      </div>

      {/* Bottom bar */}
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
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Die besten <span className="text-[#ff3e8a]">Momente</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Hover zum Anschauen. ❤️ zum Liken. Das Chaos ist gratis.
        </p>
      </motion.div>

      {/* Profile strip (like Instagram) */}
      <motion.div
        className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff3e8a] flex-shrink-0">
          <Image
            src="https://placehold.co/56x56/1a1a1a/ff3e8a?text=🐾"
            alt="Profile"
            width={56}
            height={56}
          />
        </div>
        <div className="flex-1">
          <div className="font-bold text-white">ginaandlucy.official</div>
          <div className="text-zinc-400 text-sm">Digital Creator · München</div>
        </div>
        <div className="hidden sm:flex gap-6 text-center">
          {[['131', 'Beiträge'], ['14.200', 'Follower'], ['5', 'Gefolgt']].map(([val, label]) => (
            <div key={label}>
              <div className="font-bold text-white text-sm">{val}</div>
              <div className="text-zinc-500 text-xs">{label}</div>
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/ginaandlucy.official"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[#ff3e8a] text-white text-xs font-semibold hover:bg-[#ff3e8a]/80 transition-colors flex-shrink-0"
        >
          Folgen
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
