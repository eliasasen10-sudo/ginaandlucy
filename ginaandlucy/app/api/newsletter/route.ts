/**
 * Newsletter subscription API route.
 *
 * Receives email from <NewsletterSignup/>, forwards to Beehiiv.
 * Beehiiv handles the welcome email + double-opt-in if configured.
 *
 * Env vars needed (in .env.local locally, in Vercel env in production):
 *   BEEHIIV_API_KEY
 *   BEEHIIV_PUBLICATION_ID
 */

import { NextResponse } from 'next/server'

const BEEHIIV_API = 'https://api.beehiiv.com/v2'

export async function POST(req: Request) {
  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.BEEHIIV_API_KEY
  const pubId = process.env.BEEHIIV_PUBLICATION_ID
  if (!apiKey || !pubId) {
    console.error('Newsletter API: Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID')
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const r = await fetch(`${BEEHIIV_API}/publications/${pubId}/subscriptions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: 'website',
      utm_medium: 'footer',
    }),
  })

  if (!r.ok) {
    const detail = await r.text().catch(() => '')
    console.error('Beehiiv error', r.status, detail)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
