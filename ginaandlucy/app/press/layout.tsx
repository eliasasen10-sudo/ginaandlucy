import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Press & Brand Deals',
  description:
    'Media-Kit für Brand-Manager: 22.817 IG-Follower, 13.256 YT-Subscriber, 1.48M Views. Audience-Profile, Engagement-Raten, Pricing für Sponsored Reels und Long-Term Partnerships.',
  alternates: { canonical: 'https://www.ginaandlucy.com/press' },
  openGraph: {
    title: 'Press & Brand Deals · Gina & Lucy',
    description:
      'Pet-Brand? Hier findest du Audience-Profile, Engagement-Raten und Pricing-Tiers für Reel-Kooperationen.',
    url: 'https://www.ginaandlucy.com/press',
  },
}

export default function PressLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
