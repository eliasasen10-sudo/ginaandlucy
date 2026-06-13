import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Providers } from '@/components/providers'
import { Analytics } from '@vercel/analytics/react'

const SITE_URL = 'https://www.ginaandlucy.com'
const SITE_NAME = 'Gina & Lucy'
const DESCRIPTION =
  'Cat-Comedy mit AI-Magic. Gina (Siamkatze) und Lucy (Maine Coon) erobern das Internet. Lucy ist der Boss, Gina leidet.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gina & Lucy, The chaotic life of two cats',
    template: '%s · Gina & Lucy',
  },
  description: DESCRIPTION,
  keywords: [
    'Cat Comedy',
    'AI Cat Content',
    'Pet Influencer',
    'Maine Coon',
    'Siamkatze',
    'Cat Reels',
    'Brand Partnership',
    
    'Gina and Lucy',
  ],
  authors: [{ name: 'Elias Asen' }],
  creator: 'Elias Asen',
  publisher: 'Gina & Lucy',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Gina & Lucy, The chaotic life of two cats',
    description: DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Gina & Lucy, Cat-Comedy mit AI-Magic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gina & Lucy, The chaotic life of two cats',
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'tiktok-developers-site-verification': 'lhUih76eabeUNeEsMoEcXaAKA2w5LhU5',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/opengraph-image`,
      email: 'info@ginaandlucy.com',
      sameAs: [
        'https://www.instagram.com/therealginaandlucy',
        'https://www.youtube.com/@therealginaandlucy',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#creator`,
      name: 'Elias Asen',
      url: SITE_URL,
      jobTitle: 'Digital Creator',
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['de-DE', 'en-US'],
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
