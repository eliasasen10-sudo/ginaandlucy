/**
 * Live Feed API — fetches latest Instagram media + YouTube videos.
 *
 * Env vars (in .env.local locally, Vercel env in prod):
 *   META_ACCESS_TOKEN           — long-lived Page Access Token
 *   META_INSTAGRAM_BUSINESS_ID  — IG Business Account ID
 *   YOUTUBE_API_KEY             — Data API v3 key
 *   YOUTUBE_CHANNEL_ID          — UC… channel ID
 *
 * Cached for 30 min via Next.js revalidate so we don't hammer Meta/YT quotas.
 */

import { NextResponse } from 'next/server'

export const revalidate = 1800 // 30 minutes

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

async function fetchInstagram(): Promise<FeedItem[]> {
  // Disabled during relaunch: old account token would surface old-account media.
  // Re-enable once META_ACCESS_TOKEN + META_INSTAGRAM_BUSINESS_ID point to @therealginaandlucy.
  if (!process.env.FEED_INSTAGRAM_ENABLED) return []

  const token = process.env.META_ACCESS_TOKEN
  const igId = process.env.META_INSTAGRAM_BUSINESS_ID
  if (!token || !igId) return []

  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'permalink',
    'timestamp',
    'like_count',
    'comments_count',
  ].join(',')

  const url = `https://graph.facebook.com/v18.0/${igId}/media?fields=${fields}&limit=12&access_token=${token}`

  const r = await fetch(url, { next: { revalidate: 1800 } })
  if (!r.ok) {
    console.error('IG feed error', r.status, await r.text().catch(() => ''))
    return []
  }

  const data = (await r.json()) as {
    data: Array<{
      id: string
      caption?: string
      media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
      media_url?: string
      thumbnail_url?: string
      permalink: string
      timestamp: string
      like_count?: number
      comments_count?: number
    }>
  }

  return data.data.map((m) => ({
    id: `ig-${m.id}`,
    source: 'instagram' as const,
    type:
      m.media_type === 'VIDEO'
        ? 'reel'
        : m.media_type === 'CAROUSEL_ALBUM'
          ? 'carousel'
          : 'image',
    permalink: m.permalink,
    thumbnail: m.thumbnail_url || m.media_url || null,
    caption: (m.caption || '').slice(0, 140),
    timestamp: m.timestamp,
    likes: m.like_count,
    comments: m.comments_count,
  }))
}

// New channel (@therealginaandlucy), hardcoded so a stale env var can't surface the old channel.
const YT_CHANNEL_ID = 'UCynG0WhDXdRnSzQo_1Ep36A'

async function fetchYouTube(): Promise<FeedItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = YT_CHANNEL_ID
  if (!apiKey || !channelId) return []

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=12&key=${apiKey}`
  const r = await fetch(searchUrl, { next: { revalidate: 1800 } })
  if (!r.ok) {
    console.error('YT search error', r.status, await r.text().catch(() => ''))
    return []
  }

  const search = (await r.json()) as {
    items: Array<{
      id: { videoId: string }
      snippet: {
        title: string
        publishedAt: string
        thumbnails: {
          medium?: { url: string }
          high?: { url: string }
          maxres?: { url: string }
        }
      }
    }>
  }

  const videoIds = search.items.map((i) => i.id.videoId).filter(Boolean).join(',')
  if (!videoIds) return []

  const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
  const sr = await fetch(statsUrl, { next: { revalidate: 1800 } })
  const stats = sr.ok
    ? ((await sr.json()) as {
        items: Array<{ id: string; statistics: { viewCount?: string; likeCount?: string; commentCount?: string } }>
      })
    : { items: [] }

  const statsMap = new Map(stats.items.map((s) => [s.id, s.statistics]))

  return search.items.map((v) => {
    const s = statsMap.get(v.id.videoId) || {}
    return {
      id: `yt-${v.id.videoId}`,
      source: 'youtube' as const,
      type: 'video' as const,
      permalink: `https://www.youtube.com/watch?v=${v.id.videoId}`,
      thumbnail:
        v.snippet.thumbnails.maxres?.url ||
        v.snippet.thumbnails.high?.url ||
        v.snippet.thumbnails.medium?.url ||
        null,
      caption: v.snippet.title.slice(0, 140),
      timestamp: v.snippet.publishedAt,
      views: s.viewCount ? Number(s.viewCount) : undefined,
      likes: s.likeCount ? Number(s.likeCount) : undefined,
      comments: s.commentCount ? Number(s.commentCount) : undefined,
    }
  })
}

export async function GET() {
  const [ig, yt] = await Promise.all([
    fetchInstagram().catch((e) => {
      console.error('IG fetch crash', e)
      return [] as FeedItem[]
    }),
    fetchYouTube().catch((e) => {
      console.error('YT fetch crash', e)
      return [] as FeedItem[]
    }),
  ])

  const combined = [...ig, ...yt].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return NextResponse.json({
    items: combined,
    counts: { instagram: ig.length, youtube: yt.length },
    fetchedAt: new Date().toISOString(),
  })
}
