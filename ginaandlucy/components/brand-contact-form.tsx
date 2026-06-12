'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/providers'
import { Send, Check, Mail } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const BUDGETS = [
  { value: '<500',     labelDe: 'unter 500 €',      labelEn: 'under €500' },
  { value: '500-1000', labelDe: '500 – 1.000 €',    labelEn: '€500 – €1,000' },
  { value: '1000-3000',labelDe: '1.000 – 3.000 €',  labelEn: '€1,000 – €3,000' },
  { value: '3000+',    labelDe: '3.000 € und mehr', labelEn: '€3,000+' },
  { value: 'tbd',      labelDe: 'noch offen',       labelEn: 'to be discussed' },
]

export function BrandContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus('sending')

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      company: String(fd.get('company') || ''),
      budget: String(fd.get('budget') || ''),
      message: String(fd.get('message') || ''),
      website: String(fd.get('website') || ''), // honeypot
    }

    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await r.json().catch(() => ({}))
      if (!r.ok) {
        setError(data?.error || t('Etwas ist schiefgelaufen.', 'Something went wrong.'))
        setStatus('error')
        return
      }
      setStatus('success')
      form.reset()
    } catch {
      setError(t('Netzwerk-Fehler. Versuch es nochmal.', 'Network error. Please try again.'))
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl border border-[#ff3e8a]/30 bg-[#ff3e8a]/5 text-center">
        <div className="w-12 h-12 rounded-full bg-[#ff3e8a] text-white flex items-center justify-center mx-auto mb-4">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">
          {t('Anfrage empfangen!', 'Inquiry received!')}
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          {t(
            'Wir melden uns innerhalb von 48h. Bei dringenden Sachen direkt an info@ginaandlucy.com.',
            'We will get back to you within 48h. For urgent matters, email info@ginaandlucy.com directly.'
          )}
        </p>
      </div>
    )
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-[#ff3e8a] focus:outline-none text-sm disabled:opacity-50 placeholder:text-muted-foreground/60'

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot, hidden from humans, attractive to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">
            {t('Name', 'Name')} <span className="text-[#ff3e8a]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            disabled={status === 'sending'}
            placeholder={t('Max Mustermann', 'Jane Doe')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">
            {t('Email', 'Email')} <span className="text-[#ff3e8a]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            disabled={status === 'sending'}
            placeholder={t('brand@firma.de', 'brand@company.com')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-medium text-muted-foreground mb-1.5">
            {t('Firma / Brand', 'Company / Brand')}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={200}
            disabled={status === 'sending'}
            placeholder={t('Pet-Food GmbH', 'Pet-Food Inc.')}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-muted-foreground mb-1.5">
            {t('Budget-Rahmen', 'Budget range')}
          </label>
          <select
            id="budget"
            name="budget"
            disabled={status === 'sending'}
            className={inputCls + ' cursor-pointer'}
            defaultValue=""
          >
            <option value="">{t(', bitte wählen ,', ', please select ,')}</option>
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {t(b.labelDe, b.labelEn)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">
          {t('Nachricht', 'Message')} <span className="text-[#ff3e8a]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          disabled={status === 'sending'}
          placeholder={t(
            'Erzähl uns kurz: Welches Produkt, welche Plattform(en), Zeitraum, was ist das Ziel?',
            'Tell us briefly: which product, which platform(s), timeframe, what is the goal?'
          )}
          className={inputCls + ' resize-none'}
        />
      </div>

      {error && (
        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between pt-2">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <Mail className="h-3.5 w-3.5" />
          {t('Lieber direkt mailen?', 'Prefer email?')}{' '}
          <a href="mailto:info@ginaandlucy.com" className="text-[#ff3e8a] hover:underline">
            info@ginaandlucy.com
          </a>
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff3e8a] to-[#ff8a3e] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
        >
          {status === 'sending' ? (
            t('Sende...', 'Sending...')
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t('Anfrage senden', 'Send inquiry')}
            </>
          )}
        </button>
      </div>
    </form>
  )
}
