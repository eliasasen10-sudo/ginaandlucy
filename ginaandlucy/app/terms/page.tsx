'use client'

import { useLanguage } from '@/components/providers'

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-black tracking-tighter mb-8">
        {t('Nutzungsbedingungen', 'Terms of Service')}
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('1. Geltungsbereich', '1. Scope')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Diese Nutzungsbedingungen regeln die Beziehung zwischen dem Betreiber von ginaandlucy.com (Elias Asen, München) und den Nutzern der Website sowie der zugehörigen Social-Media-Kanäle (@ginaandlucy.official auf Instagram, YouTube, Facebook).',
              'These terms govern the relationship between the operator of ginaandlucy.com (Elias Asen, Munich) and users of the website and associated social media channels (@ginaandlucy.official on Instagram, YouTube, Facebook).'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('2. Inhalte und Urheberrecht', '2. Content and Copyright')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Alle Inhalte auf dieser Website und unseren Social-Media-Kanälen (Bilder, Videos, Texte, Reels) sind urheberrechtlich geschützt. Eine Weiterverwendung außerhalb privater Nutzung ist nur mit ausdrücklicher schriftlicher Genehmigung erlaubt.',
              'All content on this website and our social media channels (images, videos, texts, reels) is protected by copyright. Reuse outside of private use is only permitted with express written permission.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('3. Brand Partnerships & Kooperationen', '3. Brand Partnerships & Collaborations')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Für Brand-Kooperationen wenden Sie sich bitte an info@ginaandlucy.com oder nutzen Sie unser Press-Formular unter /press. Sponsored Posts werden gemäß deutscher Werbe-Richtlinien als Werbung gekennzeichnet (Werbung / Anzeige / paid partnership).',
              'For brand collaborations, please contact info@ginaandlucy.com or use our press form at /press. Sponsored posts are labeled as advertising in accordance with German advertising guidelines (Werbung / Anzeige / paid partnership).'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('4. Haftung', '4. Liability')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Die Inhalte dienen ausschließlich der Unterhaltung. Für Schäden, die durch die Nutzung der Inhalte entstehen, übernehmen wir keine Haftung, sofern keine grobe Fahrlässigkeit oder Vorsatz vorliegt.',
              'The content is for entertainment purposes only. We assume no liability for damages caused by the use of the content, unless there is gross negligence or intent.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('5. Änderungen', '5. Changes')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Die aktuelle Version ist stets auf dieser Seite einsehbar.',
              'We reserve the right to change these terms at any time. The current version is always available on this page.'
            )}
          </p>
        </section>

        <p className="text-xs text-muted-foreground mt-12">
          {t('Stand', 'Last updated')}: 2026-05-14
        </p>
      </div>
    </div>
  )
}
