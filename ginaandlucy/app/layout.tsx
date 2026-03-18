import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Gina & Lucy — The chaotic life of two cats',
  description: 'The official website of ginaandlucy.official — 14.200 Follower auf Instagram. Siamese chaos guaranteed.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
