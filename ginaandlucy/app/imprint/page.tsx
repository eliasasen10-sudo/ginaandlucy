'use client'

import { useLanguage } from '@/components/providers'

export default function ImprintPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-black tracking-tighter mb-8">
        {t('Impressum', 'Imprint')}
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('Angaben gemäß § 5 TMG', 'Information per § 5 TMG')}
          </h2>
          <p className="text-muted-foreground">
            Elias Asen<br />
            München, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('Kontakt', 'Contact')}
          </h2>
          <p className="text-muted-foreground">
            E-Mail:{' '}
            <a
              href="mailto:info@ginaandlucy.com"
              className="text-[#ff3e8a] hover:underline"
            >
              info@ginaandlucy.com
            </a>
            <br />
            Website:{' '}
            <a
              href="https://www.ginaandlucy.com"
              className="text-[#ff3e8a] hover:underline"
            >
              www.ginaandlucy.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t(
              'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
              'Responsible for content per § 55 Abs. 2 RStV'
            )}
          </h2>
          <p className="text-muted-foreground">
            Elias Asen<br />
            München, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('Haftungsausschluss', 'Disclaimer')}
          </h2>
          <h3 className="text-base font-medium mb-2">
            {t('Haftung für Inhalte', 'Liability for Content')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {t(
              'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
              'The content of our pages has been created with the greatest care. However, we cannot guarantee the accuracy, completeness, or topicality of the content.'
            )}
          </p>

          <h3 className="text-base font-medium mb-2">
            {t('Urheberrecht', 'Copyright')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
              'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('KI-Augmentierter Content', 'AI-Augmented Content')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Einige der auf unseren Social-Media-Kanälen veröffentlichten Inhalte werden mit KI-Technologie augmentiert (z. B. Animationen über Image-to-Video-Modelle). Die abgebildeten Katzen Gina (Siamkatze) und Lucy (Maine Coon) existieren real. KI wird ausschließlich zur kreativen Erweiterung des Contents eingesetzt, niemals zur Erstellung irreführender Inhalte.',
              "Some of the content published on our social media channels is augmented with AI technology (e.g., animations via image-to-video models). The cats depicted, Gina (Siamese cat) and Lucy (Maine Coon), exist in real life. AI is used exclusively to creatively enhance content, never to create misleading content."
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
