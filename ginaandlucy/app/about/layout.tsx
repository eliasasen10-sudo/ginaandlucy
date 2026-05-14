import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Wie aus einer Siamkatze und einer Maine Coon das größte Katzen-Imperium Münchens wurde. Die Geschichte von Gina, Lucy und ihrem Butler.',
  alternates: { canonical: 'https://www.ginaandlucy.com/about' },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
