'use client'

import { useLanguage } from '@/components/providers'

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-black tracking-tighter mb-8">
        {t('Datenschutzerklärung', 'Privacy Policy')}
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('1. Verantwortlicher', '1. Controller')}
          </h2>
          <p className="text-muted-foreground">
            Elias Asen<br />
            München, Deutschland<br />
            E-Mail:{' '}
            <a
              href="mailto:info@ginaandlucy.com"
              className="text-[#ff3e8a] hover:underline"
            >
              info@ginaandlucy.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('2. Erhebung und Verarbeitung von Daten', '2. Data Collection and Processing')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (Browser-Typ, Betriebssystem, Referrer-URL, Uhrzeit, IP-Adresse). Diese Daten sind technisch erforderlich, um die Inhalte unserer Website korrekt auszuliefern. Eine Auswertung erfolgt anonymisiert über Vercel Analytics.',
              'When visiting our website, information of a general nature is automatically collected (browser type, operating system, referrer URL, time, IP address). This data is technically necessary to correctly deliver the content of our website. An evaluation is carried out anonymously via Vercel Analytics.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('3. Kontaktformular & E-Mail', '3. Contact Form & Email')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',
              'When you send us inquiries via contact form or email, your information will be stored for the purpose of processing the request and for any follow-up questions. We will not pass on this data without your consent. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest).'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('4. Newsletter (Beehiiv)', '4. Newsletter (Beehiiv)')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Für den Newsletter-Versand nutzen wir Beehiiv. Bei der Anmeldung wird deine E-Mail-Adresse zur Versendung des Newsletters erhoben und gespeichert. Eine Abmeldung ist jederzeit über den Unsubscribe-Link in jeder E-Mail möglich. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.',
              'We use Beehiiv to send our newsletter. When you sign up, your email address is collected and stored for sending the newsletter. You can unsubscribe at any time via the unsubscribe link in every email. Legal basis: Art. 6 (1) (a) GDPR.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('5. Social Media (Instagram, YouTube, Facebook)', '5. Social Media (Instagram, YouTube, Facebook)')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Auf unserer Website befinden sich Links zu unseren Social-Media-Profilen (Instagram, YouTube, Facebook). Beim Klick auf diese Links wirst du zur jeweiligen Plattform weitergeleitet. Es gelten dann deren Datenschutzbestimmungen.',
              'Our website contains links to our social media profiles (Instagram, YouTube, Facebook). When you click these links, you will be redirected to the respective platform, where their privacy policies apply.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('6. Cookies', '6. Cookies')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Diese Website verwendet ausschließlich technisch notwendige Cookies (z. B. für Theme-Speicherung Light/Dark Mode). Es werden keine Tracking-Cookies von Drittanbietern ohne deine Einwilligung gesetzt.',
              'This website only uses technically necessary cookies (e.g., for theme storage light/dark mode). No tracking cookies from third parties are set without your consent.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('7. Affiliate-Links', '7. Affiliate Links')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Wir verwenden auf unserer Website Affiliate-Links (z. B. Amazon Associates). Wenn du über diese Links Produkte kaufst, erhalten wir eine kleine Provision. Für dich entstehen keine zusätzlichen Kosten. Diese Provisionen helfen uns, die Website kostenlos zu halten.',
              'We use affiliate links on our website (e.g., Amazon Associates). When you purchase products through these links, we receive a small commission. There are no additional costs for you. These commissions help us keep the website free.'
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            {t('8. Deine Rechte', '8. Your Rights')}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit deiner personenbezogenen Daten. Wende dich dazu einfach an info@ginaandlucy.com.',
              'You have the right at any time to obtain information, rectification, deletion, restriction of processing, and data portability of your personal data. Simply contact info@ginaandlucy.com.'
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
