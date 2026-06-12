import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Rassen, Siamkatze & Maine Coon',
  description:
    'Alles über Gina (Siamkatze) und Lucy (Maine Coon): Charakter, Herkunft, Pflege und warum diese beiden Rassen so unterschiedlich ticken.',
  alternates: { canonical: 'https://www.ginaandlucy.com/rassen' },
}

export default function RassenLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
