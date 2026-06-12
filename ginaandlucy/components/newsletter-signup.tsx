'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers'
import { Mail, Check } from 'lucide-react'

interface Props {
  /** Variant for visual context: 'compact' for footer, 'card' for hero/sections */
  variant?: 'compact' | 'card'
}

/**
 * Newsletter Signup, sends email to Beehiiv via embedded form action.
 * Replace BEEHIIV_PUB_ID with the actual publication ID once Beehiiv is set up.
 *
 * For now: simple mailto-fallback so the form is visually complete and
 * the signup flow can be replaced later with real Beehiiv-API integration
 * without changing component placement.
 */
export function NewsletterSignup({ variant = 'compact' }: Props) {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !email.includes('@')) return

    setLoading(true)
    try {
      const r = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!r.ok) {
        setError(t('Fehler beim Eintragen', 'Subscription failed'))
        return
      }
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError(t('Netzwerk-Fehler', 'Network error'))
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'card') {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff3e8a]/5 to-[#a855f7]/5 border border-[#ff3e8a]/20">
        <div className="max-w-md mx-auto text-center">
          <Mail className="h-8 w-8 text-[#ff3e8a] mx-auto mb-4" />
          <h3 className="text-2xl font-black tracking-tight mb-2">
            {t('Cat Comedy Monday', 'Cat Comedy Monday')}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {t(
              'Jeden Montag das Beste aus Gina & Lucys Woche. Plus Behind-the-Scenes wie wir die Reels mit KI bauen.',
              'Every Monday the best of Gina & Lucy\'s week. Plus behind-the-scenes on how we build the reels with AI.'
            )}
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-[#ff3e8a] font-medium">
              <Check className="h-5 w-5" />
              {t('Eingetragen! Check deinen Posteingang.', 'Signed up! Check your inbox.')}
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('deine@email.de', 'your@email.com')}
                  required
                  disabled={loading}
                  aria-label={t('Email-Adresse', 'Email address')}
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-[#ff3e8a] focus:outline-none text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {loading ? t('Sende...', 'Sending...') : t('Abonnieren', 'Subscribe')}
                </button>
              </form>
              {error && (
                <p className="text-xs text-red-500 mt-2">{error}</p>
              )}
            </>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            {t('Kein Spam. Jederzeit kündbar.', 'No spam. Unsubscribe anytime.')}
          </p>
        </div>
      </div>
    )
  }

  // compact (footer) variant
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-semibold text-sm">
        {t('Newsletter', 'Newsletter')}
      </h4>
      {submitted ? (
        <div className="flex items-center gap-2 text-[#ff3e8a] text-sm font-medium">
          <Check className="h-4 w-4" />
          {t('Eingetragen!', 'Signed up!')}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('Email', 'Email')}
              required
              disabled={loading}
              aria-label={t('Email-Adresse', 'Email address')}
              className="flex-1 px-3 py-2 rounded-lg bg-background border border-border focus:border-[#ff3e8a] focus:outline-none text-xs disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-3 py-2 rounded-lg bg-[#ff3e8a] text-white text-xs font-semibold hover:bg-[#ff3e8a]/80 transition-colors disabled:opacity-50"
            >
              {loading ? '...' : t('Go', 'Go')}
            </button>
          </form>
          {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
        </>
      )}
    </div>
  )
}
