'use client'

import { motion } from 'framer-motion'
import { Play, Eye, Heart, MessageCircle, Instagram, Youtube, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/providers'

type FeedItem = {
  id: string
  source: 'instagram' | 'youtube'
  type: 'reel' | 'video' | 'image' | 'carousel'
  permalink: string
  thumbnail: string | null
  caption: string
  timestamp: string
  likes?: number
  comments?: number
  views?: number
}

type Filter = 'all' | 'instagram' | 'youtube'

function formatNumber(n?: number): string {
  if (n === undefined || n === null) return ','
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

function FeedCard({ item }: { item: FeedItem }) {
  const isYouTube = item.source === 'youtube'
  const SourceIcon = isYouTube ? Youtube : Instagram
  const sourceColor = isYouTube ? '#ff0000' : '#ff3e8a'

  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden border border-border hover:border-[#ff3e8a]/40 transition-all duration-300 block bg-card"
    >
      <div className="relative aspect-[2/3] bg-muted">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={item.caption || 'Cat content'}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">🐾</div>
        )}

        {/* Source badge top-left */}
        <div
          className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium"
          style={{ borderLeft: `2px solid ${sourceColor}` }}
        >
          <SourceIcon className="h-3 w-3" />
          <span>{isYouTube ? 'YouTube' : 'Instagram'}</span>
        </div>

        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="h-5 w-5 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Stats footer */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
          <div className="flex items-center gap-3 text-white text-xs">
            {item.views !== undefined && (
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{formatNumber(item.views)}</span>
              </div>
            )}
            {item.likes !== undefined && (
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{formatNumber(item.likes)}</span>
              </div>
            )}
            {item.comments !== undefined && (
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>{formatNumber(item.comments)}</span>
              </div>
            )}
            <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
          </div>
        </div>
      </div>

      {item.caption && (
        <div className="p-3">
          <p className="text-foreground text-xs leading-snug line-clamp-2">{item.caption}</p>
        </div>
      )}
    </a>
  )
}

export default function FeedPage() {
  const { t } = useLanguage()
  const [items, setItems] = useState<FeedItem[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const r = await fetch('/api/feed', { cache: 'no-store' })
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        const data = (await r.json()) as { items: FeedItem[] }
        if (!cancelled) setItems(data.items)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'unknown')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = items.filter((i) => filter === 'all' || i.source === filter)
  const igCount = items.filter((i) => i.source === 'instagram').length
  const ytCount = items.filter((i) => i.source === 'youtube').length

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3e8a] animate-pulse" />
          {t('Live Feed', 'Live Feed')}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          {t('Echte', 'Real')} <span className="text-[#ff3e8a]">{t('Posts', 'Posts')}</span>.{' '}
          {t('Direkt', 'Straight')} <span className="text-[#a855f7]">{t('vom', 'from')}</span>{' '}
          {t('Account', 'the source')}.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t(
            'Die letzten Reels von Instagram und Shorts von YouTube, automatisch geladen, alle 30 Min aktualisiert.',
            'The latest reels from Instagram and shorts from YouTube, auto-loaded, refreshed every 30 minutes.'
          )}
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-[#ff3e8a] text-white'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          {t('Alle', 'All')} ({items.length})
        </button>
        <button
          onClick={() => setFilter('instagram')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            filter === 'instagram'
              ? 'bg-[#ff3e8a] text-white'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          <Instagram className="h-4 w-4" />
          Instagram ({igCount})
        </button>
        <button
          onClick={() => setFilter('youtube')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            filter === 'youtube'
              ? 'bg-[#ff3e8a] text-white'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          <Youtube className="h-4 w-4" />
          YouTube ({ytCount})
        </button>
      </div>

      {/* States: loading, error, empty, grid */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3" aria-label="Loading feed">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[2/3] rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-center py-16 max-w-md mx-auto">
          <div className="text-5xl mb-4">😿</div>
          <h3 className="font-bold text-foreground mb-2">
            {t('Feed konnte nicht geladen werden', 'Could not load feed')}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {t(
              'Schau direkt auf Instagram oder YouTube vorbei, alle Posts sind dort live.',
              'Check directly on Instagram or YouTube, all posts are live there.'
            )}
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.instagram.com/therealginaandlucy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#ff3e8a] text-white text-sm font-semibold flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://www.youtube.com/@therealginaandlucy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-semibold flex items-center gap-2"
            >
              <Youtube className="h-4 w-4" /> YouTube
            </a>
          </div>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          {t('Keine Posts in dieser Auswahl.', 'No posts in this selection.')}
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
            >
              <FeedCard item={item} />
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA bottom */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          {t('Mehr sehen? Folge uns direkt:', 'Want more? Follow us directly:')}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://www.instagram.com/therealginaandlucy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" /> @therealginaandlucy
          </a>
          <a
            href="https://www.youtube.com/@therealginaandlucy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-card border border-border text-foreground font-semibold text-sm flex items-center gap-2"
          >
            <Youtube className="h-4 w-4" /> @ginaandlucy
          </a>
        </div>
      </div>
    </div>
  )
}
