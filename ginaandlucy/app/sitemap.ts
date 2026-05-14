import type { MetadataRoute } from 'next'

const BASE = 'https://www.ginaandlucy.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/',        priority: 1.0, freq: 'weekly' },
    { path: '/about',   priority: 0.8, freq: 'monthly' },
    { path: '/rassen',  priority: 0.7, freq: 'monthly' },
    { path: '/feed',    priority: 0.9, freq: 'daily' },
    { path: '/press',   priority: 0.9, freq: 'monthly' },
    { path: '/imprint', priority: 0.3, freq: 'yearly' },
    { path: '/privacy', priority: 0.3, freq: 'yearly' },
    { path: '/terms',   priority: 0.3, freq: 'yearly' },
  ]

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))
}
