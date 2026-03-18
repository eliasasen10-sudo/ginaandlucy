'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useLanguage } from '@/components/providers'

export default function RassenPage() {
  const { t } = useLanguage()

  const maineCoonTraits = [
    { icon: '📏', labelDe: 'Größe', labelEn: 'Size', valueDe: 'Bis zu 120 cm Körperlänge, 8–12 kg Gewicht', valueEn: 'Up to 120 cm body length, 8–12 kg weight' },
    { icon: '🧶', labelDe: 'Fell', labelEn: 'Coat', valueDe: 'Langes, seidiges Fell mit dichter Unterwolle — wasserdicht', valueEn: 'Long, silky coat with thick undercoat — water-resistant' },
    { icon: '🧠', labelDe: 'Intelligenz', labelEn: 'Intelligence', valueDe: 'Extrem lernfähig, kann Tricks erlernen wie ein Hund', valueEn: 'Extremely trainable, can learn tricks like a dog' },
    { icon: '💬', labelDe: 'Stimme', labelEn: 'Voice', valueDe: 'Charakteristisches Trillern & Chirpen statt normalem Miauen', valueEn: 'Characteristic trilling & chirping instead of normal meowing' },
    { icon: '❤️', labelDe: 'Wesen', labelEn: 'Nature', valueDe: 'Verspielt, sozial, treu — die "Hunde unter den Katzen"', valueEn: 'Playful, social, loyal — the "dogs among cats"' },
    { icon: '🌍', labelDe: 'Herkunft', labelEn: 'Origin', valueDe: 'Maine, USA — eine der ältesten natürlichen Rassen Nordamerikas', valueEn: 'Maine, USA — one of the oldest natural breeds in North America' },
  ]

  const siameseTraits = [
    { icon: '👁️', labelDe: 'Augen', labelEn: 'Eyes', valueDe: 'Intensiv blaue Mandelaugen — unverkennbar weltweit', valueEn: 'Intensely blue almond eyes — unmistakable worldwide' },
    { icon: '🎨', labelDe: 'Fell', labelEn: 'Coat', valueDe: 'Kurz, glatt, mit typischen "Points" an Ohren, Pfoten & Schwanz', valueEn: 'Short, smooth, with typical "points" on ears, paws & tail' },
    { icon: '👑', labelDe: 'Persönlichkeit', labelEn: 'Personality', valueDe: 'Dominant, selbstbewusst, absolut überzeugt von ihrer Einzigartigkeit', valueEn: 'Dominant, self-confident, absolutely convinced of their uniqueness' },
    { icon: '📢', labelDe: 'Kommunikation', labelEn: 'Communication', valueDe: 'Eine der lautesten Katzenrassen — sagen immer was sie denken', valueEn: 'One of the loudest cat breeds — always say what they think' },
    { icon: '🤝', labelDe: 'Bindung', labelEn: 'Bonding', valueDe: 'Extrem menschenbezogen — will immer dabei sein, immer', valueEn: 'Extremely human-oriented — always wants to be there, always' },
    { icon: '🌍', labelDe: 'Herkunft', labelEn: 'Origin', valueDe: 'Thailand (ehem. Siam) — eine der ältesten dokumentierten Rassen der Welt', valueEn: 'Thailand (formerly Siam) — one of the oldest documented breeds in the world' },
  ]

  const comparison = [
    { traitDe: 'Größe', traitEn: 'Size', maineCoonDe: 'Groß bis sehr groß', maineCoonEn: 'Large to very large', siameseDe: 'Mittelgroß, schlank', sameseEn: 'Medium-sized, slim' },
    { traitDe: 'Fell', traitEn: 'Coat', maineCoonDe: 'Lang, dicht, pflegeintensiv', maineCoonEn: 'Long, dense, high-maintenance', siameseDe: 'Kurz, glatt, pflegeleicht', sameseEn: 'Short, smooth, low-maintenance' },
    { traitDe: 'Lautstärke', traitEn: 'Noise level', maineCoonDe: 'Eher leise, trillert', maineCoonEn: 'Rather quiet, trills', siameseDe: 'Sehr laut & gesprächig', sameseEn: 'Very loud & talkative' },
    { traitDe: 'Energie', traitEn: 'Energy', maineCoonDe: 'Verspielt, aber entspannt', maineCoonEn: 'Playful, but relaxed', siameseDe: 'Hochenergetisch, temperamentvoll', sameseEn: 'High-energy, temperamental' },
    { traitDe: 'Kindgeeignet', traitEn: 'Kid-friendly', maineCoonDe: 'Sehr gut', maineCoonEn: 'Very good', siameseDe: 'Gut, braucht Beschäftigung', sameseEn: 'Good, needs stimulation' },
    { traitDe: 'Andere Tiere', traitEn: 'Other animals', maineCoonDe: 'Sehr verträglich', maineCoonEn: 'Very compatible', siameseDe: 'Kann eifersüchtig werden', sameseEn: 'Can get jealous' },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          🐾 {t('Rasseporträt', 'Breed Portrait')}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          {t('Die Rassen hinter dem', 'The breeds behind the')}{' '}
          <span className="text-[#ff3e8a]">{t('Imperium', 'Empire')}</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {t(
            'Zwei Rassen. Zwei Welten. Eine gemeinsame Mission. Hier erfährst du, was Gina & Lucy so besonders macht — jenseits des Chaos.',
            'Two breeds. Two worlds. One shared mission. Find out what makes Gina & Lucy so special — beyond the chaos.'
          )}
        </p>
      </motion.div>

      {/* Maine Coon Section */}
      <motion.section className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{t('Rasse 01', 'Breed 01')}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
              {t("Lucy's Rasse", "Lucy's Breed")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-2 text-foreground">Maine Coon</h2>
            <p className="text-muted-foreground text-sm font-medium mb-4 uppercase tracking-wider">
              {t('Die größte Hauskatzenrasse der Welt', 'The largest domestic cat breed in the world')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Die Maine Coon ist ein Naturwunder. In den rauhen Wäldern des US-Bundesstaats Maine entstanden, entwickelte sie ein dickes, wasserabweisendes Fell, kräftige Pfoten (oft mit Schneeschuhen — sog. Polydaktylie) und einen robusten Körperbau, der für harte Winter gemacht ist.',
                'The Maine Coon is a wonder of nature. Originating in the rugged forests of the US state of Maine, it developed a thick, water-resistant coat, strong paws (often with snowshoes — called polydactyly) and a robust body built for harsh winters.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Was Maine Coons besonders macht: ihr',
                'What makes Maine Coons special: their'
              )}{' '}
              <strong className="text-foreground">
                {t('dominantes, selbstbewusstes Wesen', 'dominant, self-confident nature')}
              </strong>
              {t(
                '. Sie entscheiden selbst, wann sie Nähe wollen — und wann nicht. Annäherungsversuche ohne ihre Zustimmung enden selten gut. Lucy ist dafür das perfekte Beispiel: ihr Butler hebt sie nicht an. Er traut sich schlicht nicht.',
                ". They decide for themselves when they want closeness — and when they don't. Approaching them without their consent rarely ends well. Lucy is the perfect example: her butler doesn't pick her up. He simply doesn't dare."
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('Mit einem Gewicht von bis zu', 'With a weight of up to')}{' '}
              <strong className="text-foreground">12 kg</strong>{' '}
              {t('und einer Körperlänge von bis zu', 'and a body length of up to')}{' '}
              <strong className="text-foreground">120 cm</strong>{' '}
              {t(
                '(inkl. Schwanz) sind sie die Riesen unter den Hauskatzen — und sie wissen es.',
                '(incl. tail) they are the giants among domestic cats — and they know it.'
              )}
            </p>
          </div>
          <div>
            <Image src="/Lucy.png" alt="Maine Coon" width={600} height={500} className="rounded-2xl w-full object-cover border border-border" />
            <p className="text-muted-foreground text-xs mt-2 text-center">
              {t('Maine Coon — bekannt für ihr üppiges Fell und ihre majestätische Erscheinung', 'Maine Coon — known for its lush coat and majestic appearance')}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {maineCoonTraits.map((trait, i) => (
            <motion.div key={trait.labelDe} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 * i }}>
              <Card className="p-4 h-full hover:border-amber-500/30 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{trait.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t(trait.labelDe, trait.labelEn)}</div>
                      <div className="text-sm text-foreground leading-relaxed">{t(trait.valueDe, trait.valueEn)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <p className="text-amber-400 text-sm font-semibold mb-1">💡 {t('Wusstest du?', 'Did you know?')}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Die Maine Coon "Stewie" hält den Guinness-Weltrekord als längste Hauskatze aller Zeiten —',
              'The Maine Coon "Stewie" holds the Guinness World Record as the longest domestic cat of all time —'
            )}{' '}
            <strong className="text-foreground">123,19 cm</strong>{' '}
            {t('von Nase bis Schwanzspitze. Lucys Karriere hat also noch Luft nach oben.', 'from nose to tail tip. So Lucy\'s career still has room to grow.')}
          </p>
        </div>
      </motion.section>

      {/* Siamese Section */}
      <motion.section className="mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{t('Rasse 02', 'Breed 02')}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-semibold mb-4">
              {t("Gina's Rasse", "Gina's Breed")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-2 text-foreground">
              {t('Siamkatze', 'Siamese Cat')}
            </h2>
            <p className="text-muted-foreground text-sm font-medium mb-4 uppercase tracking-wider">
              {t('Eine der ältesten Rassen der Welt', 'One of the oldest breeds in the world')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Die Siamkatze ist kein Haustier. Sie ist eine Persönlichkeit. Bereits in alten siamesischen Manuskripten aus dem 14. Jahrhundert erwähnt, gelten sie als heilige Tempel-Katzen — und das wissen sie ganz genau.',
                'The Siamese cat is not a pet. It is a personality. Already mentioned in ancient Siamese manuscripts from the 14th century, they are considered sacred temple cats — and they know this very well.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('Das markanteste Merkmal: die', 'The most striking feature: the')}{' '}
              <strong className="text-foreground">{t('tiefblauen Mandelaugen', 'deep blue almond eyes')}</strong>{' '}
              {t(
                'und das sogenannte "Point-Muster" — das Fell ist cremeweiß am Körper und dunkel an Ohren, Pfoten, Schwanz und Gesicht.',
                'and the so-called "point pattern" — the coat is creamy white on the body and dark on the ears, paws, tail and face.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('Siamkatzen wie Gina sind die', 'Siamese cats like Gina are the')}{' '}
              <strong className="text-foreground">{t('unkompliziertesten Seelen', 'most uncomplicated souls')}</strong>{' '}
              {t(
                '— solange alles nach ihren Vorstellungen läuft. Sie schlafen, entspannen, und sind erstaunlich genügsam. Aber wehe, der Butler lässt sie zu lange im Kalten stehen.',
                "— as long as everything goes their way. They sleep, relax, and are remarkably content. But woe betide the butler who leaves them out in the cold for too long."
              )}
            </p>
          </div>
          <div className="lg:order-1">
            <Image src="/gini.jpeg" alt="Siamese Cat" width={600} height={500} className="rounded-2xl w-full object-cover border border-border" />
            <p className="text-muted-foreground text-xs mt-2 text-center">
              {t('Siamkatze — unverwechselbare blaue Augen und das klassische Point-Muster', 'Siamese cat — unmistakable blue eyes and the classic point pattern')}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {siameseTraits.map((trait, i) => (
            <motion.div key={trait.labelDe} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 * i }}>
              <Card className="p-4 h-full hover:border-[#ff3e8a]/30 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{trait.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t(trait.labelDe, trait.labelEn)}</div>
                      <div className="text-sm text-foreground leading-relaxed">{t(trait.valueDe, trait.valueEn)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-xl bg-[#ff3e8a]/5 border border-[#ff3e8a]/20">
          <p className="text-[#ff3e8a] text-sm font-semibold mb-1">💡 {t('Wusstest du?', 'Did you know?')}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('Siamkatzen sind', 'Siamese cats are')}{' '}
            <strong className="text-foreground">{t('soziale Wesen', 'social creatures')}</strong>{' '}
            {t(
              'und leiden unter Einsamkeit. Viele Experten empfehlen, sie zu zweit zu halten — was erklärt, warum Gina Lucy ins Haus eingeladen hat. Offiziell. Behauptet sie jedenfalls.',
              'and suffer from loneliness. Many experts recommend keeping them in pairs — which explains why Gina invited Lucy into the house. Officially. So she claims anyway.'
            )}
          </p>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{t('Vergleich', 'Comparison')}</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="text-2xl font-black tracking-tighter mb-6 text-center text-foreground">
          Maine Coon <span className="text-muted-foreground">vs.</span> {t('Siamkatze', 'Siamese Cat')}
        </h2>

        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-card border-b border-border">
            <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('Eigenschaft', 'Trait')}</div>
            <div className="p-4 text-xs font-semibold text-amber-400 uppercase tracking-wider border-l border-border">
              🦁 Maine Coon
              <span className="block text-muted-foreground normal-case tracking-normal font-normal">Lucy</span>
            </div>
            <div className="p-4 text-xs font-semibold text-[#ff3e8a] uppercase tracking-wider border-l border-border">
              👁️ {t('Siamkatze', 'Siamese')}
              <span className="block text-muted-foreground normal-case tracking-normal font-normal">Gina</span>
            </div>
          </div>
          {comparison.map((row, i) => (
            <div key={row.traitDe} className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-background' : 'bg-subtle'}`}>
              <div className="p-4 text-sm text-muted-foreground font-medium">{t(row.traitDe, row.traitEn)}</div>
              <div className="p-4 text-sm text-foreground border-l border-border">{t(row.maineCoonDe, row.maineCoonEn)}</div>
              <div className="p-4 text-sm text-foreground border-l border-border">{t(row.siameseDe, row.sameseEn)}</div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
          {t(
            'Alle Angaben beziehen sich auf typische Rassemerkmale. Gina & Lucy behalten sich vor, alle Statistiken zu ignorieren und ihr eigenes Ding zu machen. Wie immer.',
            'All information refers to typical breed characteristics. Gina & Lucy reserve the right to ignore all statistics and do their own thing. As always.'
          )}
        </p>
      </motion.section>
    </div>
  )
}
