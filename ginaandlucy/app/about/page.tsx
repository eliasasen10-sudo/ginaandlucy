'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useLanguage } from '@/components/providers'

export default function AboutPage() {
  const { t } = useLanguage()

  const funFacts = [
    {
      emoji: '🧑‍💼',
      title: t('Die Familie', 'The Family'),
      desc: t(
        'Die Familie hat Gina & Lucy erlaubt, sich im Netz zu zeigen. Einzige Bedingung: die Familie bleibt anonym. Wer hinter dem Account steckt, bleibt geheim. Gina und Lucy sind die Stars. Die Familie kümmert sich um den Rest.',
        'The family allowed Gina & Lucy to appear online. One condition: the family stays anonymous. Who is behind the account remains a secret. Gina and Lucy are the stars. The family handles the rest.'
      ),
    },
    {
      emoji: '🏠',
      title: t('Das Reich', 'The Kingdom'),
      desc: t(
        '47m² Altbau, 2. OG, Südbalkon. 100% unter katzischer Kontrolle. Die Familie darf bleiben, vorerst.',
        '47m² apartment, 2nd floor, south balcony. 100% under feline control. The family may stay, for now.'
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          📖 {t('Die echte Geschichte', 'The real story')}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          {t('Wer sind', 'Who are')}{' '}
          <span className="text-[#ff3e8a]">Gina & Lucy</span>?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {t(
            'Eine Siamkatze & eine Maine Coon. Ein Apartment. Ein überarbeiteter Butler. Eine Mission: die Weltherrschaft. Das ist ihre Geschichte. Weitgehend wahr. Meistens.',
            'A Siamese cat & a Maine Coon. An apartment. An overworked butler. One mission: world domination. This is their story. Mostly true. Usually.'
          )}
        </p>
      </motion.div>

      {/* Gina */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-12 items-center"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <Image src="/gini.jpeg" alt="Gina" width={500} height={500} className="rounded-2xl w-full object-cover border border-border" />
          <div className="flex items-center gap-2 mt-3 px-1">
            <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
            <span className="text-foreground text-sm font-semibold">Gina</span>
            <span className="text-muted-foreground text-xs">{t('Siamkatze', 'Siamese cat')}</span>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Gina</strong>{' '}
            {t(
                'ist die Entspannung in Katzenform. Sie schläft den ganzen Tag und nutzt jede bequeme Gelegenheit die sich bietet. Sofa, Laptop, Gesicht der Familie. Alles gut. Sie ist die unkomplizierteste Person im Haushalt, solange die Familie sie nicht zu lange draußen warten lässt. Dann gibt es einen Blick der keine weiteren Erklärungen braucht.',
                "is relaxation in cat form. She sleeps all day and takes every comfortable opportunity available. Sofa, laptop, family's face. All fine. She is the most uncomplicated person in the household, as long as the family doesn't make her wait outside too long. Then comes a look that needs no further explanation."
              )}
          </p>
        </div>
      </motion.div>

      {/* Lucy */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-16 items-center"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div>
          <Image src="/Lucy.png" alt="Lucy" width={500} height={500} className="rounded-2xl w-full object-cover border border-border" />
          <div className="flex items-center gap-2 mt-3 px-1">
            <div className="w-2 h-2 rounded-full bg-[#ff3e8a]" />
            <span className="text-foreground text-sm font-semibold">Lucy</span>
            <span className="text-muted-foreground text-xs">Maine Coon</span>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Lucy</strong>{' '}
            {t(
                'ist nochmal eine ganz andere Geschichte. Sie ist dominant, eine echte Diva und lässt sich gar nichts sagen. Die Familie traut sich nicht mal sie hochzuheben weil das Risiko einfach zu groß ist. Kratzer, Fleischwunden, vollständige Niederlage. Sie hat 2023 den Thron übernommen und ist seitdem nicht mehr aufzuhalten. Ob die Familie noch lange im Haus bleiben darf ist täglich neu ungewiss.',
                "is a completely different story. She is dominant, a total diva and takes no orders from anyone. The family doesn't even dare pick her up because the risk is simply too high. Scratches, wounds, total defeat. She took the throne in 2023 and has been unstoppable ever since. Whether the family gets to stay in the house is uncertain on a daily basis."
              )}
          </p>
        </div>
      </motion.div>

      {/* Closing sentence */}
      <p className="text-muted-foreground text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
        {t(
            '2026 hatten die beiden beim gemeinsamen Instagram-Scrollen auf dem Sofa der Familie die Idee: selbst durchstarten. Seitdem wächst @therealginaandlucy und das Ziel ist klar. Influencer werden, Internet-Stars sein, Weltherrschaft sichern.',
            "In 2026, while scrolling Instagram together on the family's sofa, the two had the idea: to make it big themselves. Since then @therealginaandlucy has been growing and the goal is clear: become influencers, be internet stars, secure world domination."
          )}
        <br /><br />
        <span className="text-[#ff3e8a] font-medium">
          {`${t('Der Plan läuft.', 'The plan is running.')} ©ginaandlucy | ${t('Alle Rechte vorbehalten.', 'All Rights Reserved.')}`}
        </span>
      </p>

      {/* Fun Facts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
          {t('Weitere Infos', 'More Info')}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {funFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="p-5 h-full hover:border-[#ff3e8a]/30 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl mb-3">{fact.emoji}</div>
                  <h3 className="font-bold text-foreground mb-2">{fact.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{fact.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA-Block: weiter erkunden */}
      <div className="grid sm:grid-cols-2 gap-3 mt-8">
        <a
          href="/feed"
          className="group p-6 rounded-2xl bg-card border border-border hover:border-[#ff3e8a]/40 transition-colors"
        >
          <div className="text-2xl mb-2">🎬</div>
          <h3 className="font-semibold text-foreground mb-1">
            {t('Sieh dir Reels an', 'Watch their reels')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t(
              'Die letzten Posts von Instagram & YouTube, live geladen.',
              'The latest posts from Instagram & YouTube, loaded live.'
            )}
          </p>
          <span className="text-[#ff3e8a] text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            {t('Zum Feed', 'To the feed')} →
          </span>
        </a>
        <a
          href="/press"
          className="group p-6 rounded-2xl bg-card border border-border hover:border-[#ff3e8a]/40 transition-colors"
        >
          <div className="text-2xl mb-2">📩</div>
          <h3 className="font-semibold text-foreground mb-1">
            {t('Brand-Partnership?', 'Brand partnership?')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t(
              'Media-Kit, Audience-Daten, Pricing & Kontaktformular.',
              'Media kit, audience data, pricing & contact form.'
            )}
          </p>
          <span className="text-[#ff3e8a] text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            {t('Zur Press-Seite', 'To the press page')} →
          </span>
        </a>
      </div>
    </div>
  )
}
