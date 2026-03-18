'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Timeline } from '@/components/ui/timeline'
import { BlurredStagger } from '@/components/ui/blurred-stagger-text'
import Image from 'next/image'
import { useLanguage } from '@/components/providers'

export default function AboutPage() {
  const { t } = useLanguage()

  const timelineData = [
    {
      title: '2021',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('Lucy & Manfred kommen ins Haus', 'Lucy & Manfred move in')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Lucy wird 2021 geboren und zieht mit ihrem Bruder Manfred ein. Schnell wird ihr klar: sie kann nicht mit Männern. Manfred wird aus dem Haus verbannt. Lucy: unbeeindruckt.',
              'Lucy is born in 2021 and moves in with her brother Manfred. She quickly realizes: she cannot stand men. Manfred gets banned from the house. Lucy: unbothered.'
            )}
          </p>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('Neues Familienmitglied: Gina', 'New family member: Gina')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Um Lucy Gesellschaft zu geben, holt der Butler Gina — 8 Monate älter als Lucy, reinrassige Siamkatze, sofortiges Selbstbewusstsein. Gina ist von Anfang an größer und hat das Sagen. Lucy akzeptiert das vorläufig.',
              "To give Lucy company, the butler gets Gina — 8 months older than Lucy, purebred Siamese, instant confidence. Gina is bigger from the start and calls the shots. Lucy accepts this. For now."
            )}
          </p>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('Lucy übernimmt den Thron', 'Lucy takes the throne')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Innerhalb von zwei Jahren wächst Lucy auf das Dreifache von Ginas Größe heran. Die Machtverhältnisse verschieben sich still und leise. Gina behauptet bis heute, sie habe das freiwillig abgegeben.',
              'Within two years, Lucy grows to three times Gina\'s size. The power dynamics shift quietly. Gina claims to this day she gave it up voluntarily.'
            )}
          </p>
        </div>
      ),
    },
    {
      title: '2026',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('Die Idee: selbst Insta-Stars werden', 'The idea: become Insta-stars themselves')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Beim gemeinsamen Instagram-Scrollen auf dem Sofa des Butlers haben Gina & Lucy die zündende Idee: Wenn andere das können, können wir das auch — und besser. Der Account @ginaandlucy.official geht live.',
              "While scrolling Instagram together on the butler's sofa, Gina & Lucy have the big idea: if others can do it, so can we — and better. The @ginaandlucy.official account goes live."
            )}
          </p>
        </div>
      ),
    },
    {
      title: '2026',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('Das Imperium wächst 🚀', 'The empire grows 🚀')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Die Community wächst, der Content läuft — und das Ziel ist klar: Internet-Stars werden, Influencer-Status erreichen, Weltherrschaft sichern. Schritt 1 ✅. Der Rest folgt.',
              'The community grows, the content is flowing — and the goal is clear: become internet stars, reach influencer status, secure world domination. Step 1 ✅. The rest follows.'
            )}
          </p>
        </div>
      ),
    },
    {
      title: '2026',
      content: (
        <div>
          <h3 className="font-semibold text-foreground text-base mb-1">
            {t('14.200 Follower & counting', '14,200 followers & counting')}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              'Der Plan zur Weltherrschaft schreitet voran. Schritt 1 (viral gehen) ✅. Schritt 2 (???). Schritt 3 (Herrschaft) 🔜',
              'The world domination plan is progressing. Step 1 (go viral) ✅. Step 2 (???). Step 3 (domination) 🔜'
            )}
          </p>
        </div>
      ),
    },
  ]

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
        '47m² Münchner Altbau, 2. OG, Südbalkon. 100% unter katzischer Kontrolle. Die Familie darf bleiben — vorerst.',
        '47m² Munich old building, 2nd floor, south balcony. 100% under feline control. The family may stay — for now.'
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          📖 <BlurredStagger text={t('Die echte Geschichte', 'The real story')} stagger={0.03} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          <BlurredStagger text={t('Wer sind', 'Who are')} stagger={0.04} />{' '}
          <span className="text-[#ff3e8a]"><BlurredStagger text="Gina & Lucy" stagger={0.04} /></span>?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          <BlurredStagger
            text={t(
              'Eine Siamkatze & eine Maine Coon. Ein Apartment in München. Ein überarbeiteter Butler. Eine Mission: die Weltherrschaft. Das ist ihre Geschichte. Weitgehend wahr. Meistens.',
              'A Siamese cat & a Maine Coon. An apartment in Munich. An overworked butler. One mission: world domination. This is their story. Mostly true. Usually.'
            )}
            splitBy="word"
            stagger={0.04}
            duration={0.25}
          />
        </p>
      </motion.div>

      {/* Gina */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-12 items-center"
        initial={{ opacity: 0, y: 20 }}
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
            <BlurredStagger
              text={t(
                'ist die Entspannung in Katzenform. Sie schläft den ganzen Tag und nutzt jede bequeme Gelegenheit die sich bietet. Sofa, Laptop, Gesicht der Familie. Alles gut. Sie ist die unkomplizierteste Person im Haushalt, solange die Familie sie nicht zu lange draußen warten lässt. Dann gibt es einen Blick der keine weiteren Erklärungen braucht.',
                "is relaxation in cat form. She sleeps all day and takes every comfortable opportunity available. Sofa, laptop, family's face. All fine. She is the most uncomplicated person in the household — as long as the family doesn't make her wait outside too long. Then comes a look that needs no further explanation."
              )}
              splitBy="word"
              stagger={0.03}
              duration={0.22}
            />
          </p>
        </div>
      </motion.div>

      {/* Lucy */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-16 items-center"
        initial={{ opacity: 0, y: 20 }}
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
            <BlurredStagger
              text={t(
                'ist nochmal eine ganz andere Geschichte. Sie ist dominant, eine echte Diva und lässt sich gar nichts sagen. Die Familie traut sich nicht mal sie hochzuheben weil das Risiko einfach zu groß ist. Kratzer, Fleischwunden, vollständige Niederlage. Sie hat 2023 den Thron übernommen und ist seitdem nicht mehr aufzuhalten. Ob die Familie noch lange im Haus bleiben darf ist täglich neu ungewiss.',
                "is a completely different story. She is dominant, a total diva and takes no orders from anyone. The family doesn't even dare pick her up because the risk is simply too high. Scratches, wounds, total defeat. She took the throne in 2023 and has been unstoppable ever since. Whether the family gets to stay in the house is uncertain on a daily basis."
              )}
              splitBy="word"
              stagger={0.03}
              duration={0.22}
            />
          </p>
        </div>
      </motion.div>

      {/* Closing sentence */}
      <p className="text-muted-foreground text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
        <BlurredStagger
          text={t(
            '2026 hatten die beiden beim gemeinsamen Instagram-Scrollen auf dem Sofa der Familie die Idee: selbst durchstarten. Seitdem wächst @ginaandlucy.official und das Ziel ist klar. Influencer werden, Internet-Stars sein, Weltherrschaft sichern.',
            "In 2026, while scrolling Instagram together on the family's sofa, the two had the idea: to make it big themselves. Since then @ginaandlucy.official has been growing and the goal is clear: become influencers, be internet stars, secure world domination."
          )}
          splitBy="word"
          stagger={0.035}
          duration={0.22}
        />
        <br /><br />
        <span className="text-[#ff3e8a] font-medium">
          <BlurredStagger
            text={`${t('Der Plan läuft.', 'The plan is running.')} ©ginaandlucy | ${t('Alle Rechte vorbehalten.', 'All Rights Reserved.')}`}
            stagger={0.02}
          />
        </span>
      </p>

      {/* Fun Facts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
          <BlurredStagger text={t('Weitere Infos', 'More Info')} stagger={0.04} />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {funFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
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

      {/* Timeline */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center text-foreground">
          <BlurredStagger text={t('Die Karriere-Timeline', 'The Career Timeline')} stagger={0.04} />
        </h2>
        <Timeline data={timelineData} />
      </div>
    </div>
  )
}
