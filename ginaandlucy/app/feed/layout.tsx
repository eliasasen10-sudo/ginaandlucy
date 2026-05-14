import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Live Feed',
  description:
    'Die letzten Reels von Instagram und Shorts von YouTube — live aus den Accounts, alle 30 Minuten aktualisiert.',
  alternates: { canonical: 'https://www.ginaandlucy.com/feed' },
  openGraph: {
    title: 'Live Feed · Gina & Lucy',
    description: 'Echte Posts. Direkt vom Account. Auto-Update alle 30 Min.',
    url: 'https://www.ginaandlucy.com/feed',
  },
}

export default function FeedLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
