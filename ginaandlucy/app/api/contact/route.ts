/**
 * Brand-Inquiry Contact API.
 *
 * Receives form from /press, sends email via Namecheap Private Email SMTP.
 *
 * Env vars (in .env.local locally, Vercel env in prod):
 *   SMTP_HOST       — default: mail.privateemail.com
 *   SMTP_PORT       — default: 465
 *   SMTP_USER       — full email address (info@ginaandlucy.com)
 *   SMTP_PASS       — mailbox password
 *   CONTACT_TO      — recipient (defaults to SMTP_USER)
 *
 * Honeypot field "website" must be empty (bot trap).
 */

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Body = {
  name?: string
  email?: string
  company?: string
  budget?: string
  message?: string
  website?: string // honeypot
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  let body: Body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot — bots usually fill all fields
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ success: true })
  }

  const name = (body.name || '').trim().slice(0, 120)
  const email = (body.email || '').trim().toLowerCase().slice(0, 200)
  const company = (body.company || '').trim().slice(0, 200)
  const budget = (body.budget || '').trim().slice(0, 80)
  const message = (body.message || '').trim().slice(0, 5000)

  if (!name || !email || !email.includes('@') || !message || message.length < 10) {
    return NextResponse.json(
      { error: 'Bitte fülle alle Pflichtfelder aus (Name, gültige Email, Nachricht ≥ 10 Zeichen).' },
      { status: 400 }
    )
  }

  const host = process.env.SMTP_HOST || 'mail.privateemail.com'
  const port = Number(process.env.SMTP_PORT || 465)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO || user

  if (!user || !pass) {
    console.warn('[contact] SMTP not configured — logging only:', { name, email, company, budget, message })
    return NextResponse.json({
      success: true,
      delivered: false,
      note: 'Lead logged but SMTP not configured.',
    })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const subject = `[Brand Inquiry] ${company || name}${budget ? ` · ${budget}` : ''}`
  const text = [
    `Neue Brand-Anfrage von ginaandlucy.com`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || '—'}`,
    `Budget:  ${budget || '—'}`,
    ``,
    `Nachricht:`,
    message,
  ].join('\n')

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;color:#222">
      <h2 style="margin:0 0 16px;color:#ff3e8a">Brand Inquiry · ginaandlucy.com</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:6px 0;color:#888">Name</td><td style="padding:6px 0;font-weight:600">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#888">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#888">Company</td><td style="padding:6px 0">${escapeHtml(company) || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#888">Budget</td><td style="padding:6px 0">${escapeHtml(budget) || '—'}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;font-size:14px;color:#888;text-transform:uppercase;letter-spacing:0.05em">Nachricht</h3>
      <div style="white-space:pre-wrap;padding:16px;background:#f7f7f8;border-radius:8px;font-size:14px;line-height:1.5">${escapeHtml(message)}</div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Gina & Lucy Site" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })
    return NextResponse.json({ success: true, delivered: true })
  } catch (e) {
    console.error('[contact] SMTP send failed:', e)
    return NextResponse.json(
      { error: 'Email konnte nicht versendet werden. Schreib direkt an info@ginaandlucy.com.' },
      { status: 502 }
    )
  }
}
