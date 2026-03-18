import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Navbar } from '@/components/navbar'
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
          <footer className="border-t border-border mt-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-bold">
                <span className="text-xl">🐾</span>
                <span>gina</span>
                <span className="text-[#ff3e8a]">&</span>
                <span>lucy</span>
              </div>
              <p className="text-muted-foreground text-sm text-center">
                © 2024 ginaandlucy.official — All Rights Reserved.<br className="sm:hidden" />
                {' '}The world domination is in progress. 😼
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ginaandlucy.official" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-sm">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-[#ff3e8a] transition-colors text-sm">YouTube</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
