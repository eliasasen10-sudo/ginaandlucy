'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'

const timelineData = [
  {
    title: '2021',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">Lucy & Manfred kommen ins Haus</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Lucy wird 2021 geboren und zieht mit ihrem Bruder Manfred ein. Schnell wird ihr klar: sie kann nicht mit Männern. Manfred wird aus dem Haus verbannt. Lucy: unbeeindruckt.
        </p>
      </div>
    ),
  },
  {
    title: '2021',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">Neues Familienmitglied: Gina</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Um Lucy Gesellschaft zu geben, holt der Butler Gina — 8 Monate älter als Lucy, reinrassige Siamkatze, sofortiges Selbstbewusstsein. Gina ist von Anfang an größer und hat das Sagen. Lucy akzeptiert das vorläufig.
        </p>
      </div>
    ),
  },
  {
    title: '2023',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">Lucy übernimmt den Thron</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Innerhalb von zwei Jahren wächst Lucy auf das Dreifache von Ginas Größe heran. Die Machtverhältnisse verschieben sich still und leise. Gina behauptet bis heute, sie habe das freiwillig abgegeben.
        </p>
      </div>
    ),
  },
  {
    title: '2026',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">Die Idee: selbst Insta-Stars werden</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Beim gemeinsamen Instagram-Scrollen auf dem Sofa des Butlers haben Gina & Lucy die zündende Idee: Wenn andere das können, können wir das auch — und besser. Der Account @ginaandlucy.official geht live.
        </p>
      </div>
    ),
  },
  {
    title: '2026',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">Das Imperium wächst 🚀</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Die Community wächst, der Content läuft — und das Ziel ist klar: Internet-Stars werden, Influencer-Status erreichen, Weltherrschaft sichern. Schritt 1 ✅. Der Rest folgt.
        </p>
      </div>
    ),
  },
  {
    title: '2026',
    content: (
      <div>
        <h3 className="font-semibold text-foreground text-base mb-1">14.200 Follower & counting</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Der Plan zur Weltherrschaft schreitet voran. Schritt 1 (viral gehen) ✅. Schritt 2 (???). Schritt 3 (Herrschaft) 🔜
        </p>
      </div>
    ),
  },
]

const funFacts = [
  { emoji: '🧑‍💼', title: 'Die Familie', desc: 'Die Familie hat Gina & Lucy erlaubt, sich im Netz zu zeigen. Einzige Bedingung: die Familie bleibt anonym. Wer hinter dem Account steckt, bleibt geheim. Gina und Lucy sind die Stars. Die Familie kümmert sich um den Rest.' },
  { emoji: '🏠', title: 'Das Reich', desc: '47m² Münchner Altbau, 2. OG, Südbalkon. 100% unter katzischer Kontrolle. Die Familie darf bleiben — vorerst.' },
]

export default function AboutPage() {
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
          📖 Die echte Geschichte
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          Wer sind{' '}
          <span className="text-[#ff3e8a]">Gina & Lucy</span>?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Eine Siamkatze & eine Maine Coon. Ein Apartment in München. Ein überarbeiteter Butler. Eine Mission: die Weltherrschaft.
          Das ist ihre Geschichte. Weitgehend wahr. Meistens.
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
          <Image
            src="/gini.jpeg"
            alt="Gina"
            width={500}
            height={500}
            className="rounded-2xl w-full object-cover border border-border"
          />
          <div className="flex items-center gap-2 mt-3 px-1">
            <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
            <span className="text-foreground text-sm font-semibold">Gina</span>
            <span className="text-muted-foreground text-xs">Siamkatze</span>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Gina</strong> ist die Entspannung in Katzenform. Sie schläft den ganzen Tag und nutzt jede bequeme Gelegenheit die sich bietet. Sofa, Laptop, Gesicht der Familie. Alles gut. Sie ist die unkomplizierteste Person im Haushalt, solange die Familie sie nicht zu lange draußen warten lässt. Dann gibt es einen Blick der keine weiteren Erklärungen braucht.
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
          <Image
            src="/Lucy.png"
            alt="Lucy"
            width={500}
            height={500}
            className="rounded-2xl w-full object-cover border border-border"
          />
          <div className="flex items-center gap-2 mt-3 px-1">
            <div className="w-2 h-2 rounded-full bg-[#ff3e8a]" />
            <span className="text-foreground text-sm font-semibold">Lucy</span>
            <span className="text-muted-foreground text-xs">Maine Coon</span>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Lucy</strong> ist nochmal eine ganz andere Geschichte. Sie ist dominant, eine echte Diva und lässt sich gar nichts sagen. Die Familie traut sich nicht mal sie hochzuheben weil das Risiko einfach zu groß ist. Kratzer, Fleischwunden, vollständige Niederlage. Sie hat 2023 den Thron übernommen und ist seitdem nicht mehr aufzuhalten. Ob die Familie noch lange im Haus bleiben darf ist täglich neu ungewiss.
          </p>
        </div>
      </motion.div>

      {/* Closing sentence */}
      <motion.p
        className="text-muted-foreground text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        2026 hatten die beiden beim gemeinsamen Instagram-Scrollen auf dem Sofa der Familie die Idee: <strong className="text-foreground">selbst durchstarten.</strong> Seitdem wächst @ginaandlucy.official und das Ziel ist klar. Influencer werden, Internet-Stars sein, Weltherrschaft sichern.
        <br /><br />
        <span className="text-[#ff3e8a] font-medium">Der Plan läuft. ©ginaandlucy | All Rights Reserved.</span>
      </motion.p>

      {/* Fun Facts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Weitere Infos</h2>
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
        <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Die Karriere-Timeline</h2>
        <Timeline data={timelineData} />
      </div>
    </div>
  )
}
