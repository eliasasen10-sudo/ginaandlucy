'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube, Play, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'

type FeedItem = {
  id: string
  source: 'instagram' | 'youtube'
  permalink: string
  thumbnail: string | null
  caption: string
}

export function LatestReels({ limit = 4 }: { limit?: number }) {
  const { t } = useLanguage()
  const [items, setItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch('/api/feed')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: { items: FeedItem[] }) => {
        if (!cancelled) setItems(data.items.slice(0, limit))
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [limit])

  // If error and no fallback content makes sense — hide section entirely
  if (error && !loading) return null

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3e8a] animate-pulse" />
            {t('Aktuell aus dem Feed', 'Fresh from the feed')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter">
            {t('Die letzten', 'Latest')} <span className="text-[#ff3e8a]">{t('Posts', 'posts')}</span>
          </h2>
        </div>
        <Link
          href="/feed"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#ff3e8a] hover:gap-2 transition-all"
        >
          {t('Alle ansehen', 'See all')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {loading &&
          Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="aspect-[2/3] rounded-xl bg-muted animate-pulse" />
          ))}

        {!loading &&
          items.map((item) => {
            const SourceIcon = item.source === 'youtube' ? Youtube : Instagram
            const sourceColor = item.source === 'youtube' ? '#ff0000' : '#ff3e8a'
            return (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[2/3] rounded-xl overflow-hidden border border-border hover:border-[#ff3e8a]/40 transition-all duration-300 block bg-muted"
              >
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.caption || 'Cat content'}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">🐾</div>
                )}
                <div
                  className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium"
                  style={{ borderLeft: `2px solid ${sourceColor}` }}
                >
                  <SourceIcon className="h-3 w-3" />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-4 w-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </a>
            )
          })}
      </div>
    </section>
  )
}
