'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const timeline = [
  {
    year: '2021',
    title: 'Lucy & Manfred kommen ins Haus',
    desc: 'Lucy wird 2021 geboren und zieht mit ihrem Bruder Manfred ein. Schnell wird ihr klar: sie kann nicht mit Männern. Manfred wird aus dem Haus verbannt. Lucy: unbeeindruckt.',
  },
  {
    year: '2021',
    title: 'Der Butler bringt Gina',
    desc: 'Um Lucy Gesellschaft zu geben, holt der Butler Gina — 8 Monate älter als Lucy, reinrassige Siamkatze, sofortiges Selbstbewusstsein. Gina ist von Anfang an größer und hat das Sagen. Lucy akzeptiert das vorläufig.',
  },
  {
    year: '2023',
    title: 'Lucy übernimmt den Thron',
    desc: 'Innerhalb von zwei Jahren wächst Lucy auf das Dreifache von Ginas Größe heran. Die Machtverhältnisse verschieben sich still und leise. Gina behauptet bis heute, sie habe das freiwillig abgegeben.',
  },
  {
    year: '2026',
    title: 'Die Idee: selbst Insta-Stars werden',
    desc: 'Beim gemeinsamen Instagram-Scrollen auf dem Sofa des Butlers haben Gina & Lucy die zündende Idee: Wenn andere das können, können wir das auch — und besser. Der Account @ginaandlucy.official geht live.',
  },
  {
    year: '2026',
    title: 'Das Imperium wächst 🚀',
    desc: 'Die Community wächst, der Content läuft — und das Ziel ist klar: Internet-Stars werden, Influencer-Status erreichen, Weltherrschaft sichern. Schritt 1 ✅. Der Rest folgt.',
  },
  {
    year: '2026',
    title: '14.200 Follower & counting',
    desc: 'Der Plan zur Weltherrschaft schreitet voran. Schritt 1 (viral gehen) ✅. Schritt 2 (???). Schritt 3 (Herrschaft) 🔜',
  },
]

const funFacts = [
  { emoji: '😴', title: 'Gina', desc: 'Schläft den ganzen Tag — jede bequeme Gelegenheit wird sofort genutzt. Die unkomplizierteste Person im Haushalt. Wird aber sauer, wenn der Butler sie zu lange im Kalten lässt. Dann gibt es einen Blick, der tötet.' },
  { emoji: '👹', title: 'Lucy', desc: 'Dominant. Eine echte Diva. Lässt sich gar nichts sagen. Der Butler traut sich nicht mal, sie hochzuheben — sonst gibt es Kratzer am Körper und er wird regelrecht zerfleischt. Sie hat den Thron eingenommen und ist seitdem nicht mehr zu stoppen.' },
  { emoji: '🧑‍💼', title: 'Der Butler', desc: 'Lebt in ständiger Angst vor Lucy. Traut sich nicht, sie anzufassen. Fragt sich täglich, ob er noch lange im Haus bleiben darf. Tatsächliche Aufgaben: Futter, Fotos, Kratzer versorgen, existieren.' },
  { emoji: '🏠', title: 'Das Reich', desc: '47m² Münchner Altbau, 2. OG, Südbalkon. 100% unter katzischer Kontrolle. Der Butler darf bleiben — vorerst.' },
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
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Wer sind{' '}
          <span className="text-[#ff3e8a]">Gina & Lucy</span>?
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Eine Siamkatze & eine Maine Coon. Ein Apartment in München. Ein überarbeiteter Butler. Eine Mission: die Weltherrschaft.
          Das ist ihre Geschichte. Weitgehend wahr. Meistens.
        </p>
      </motion.div>

      {/* Main story */}
      <motion.div
        className="grid lg:grid-cols-2 gap-8 mb-16 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <Image
            src="https://placehold.co/500x500/1a1a1a/ff3e8a?text=Gina+%26+Lucy+🐾"
            alt="Gina und Lucy"
            width={500}
            height={500}
            className="rounded-2xl w-full object-cover border border-[#2a2a2a]"
          />
        </div>
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            <strong className="text-white">Gina</strong> ist die Entspannung in Katzenform. Sie schläft den ganzen Tag, nutzt jede bequeme Möglichkeit — Sofa, Laptop, Gesicht des Butlers — und ist die unkomplizierteste Person im Haushalt. Solange der Butler sie nicht zu lange im Kalten lässt. Denn dann gibt es einen Blick, der keine weiteren Erklärungen braucht.
          </p>
          <p>
            <strong className="text-white">Lucy</strong> ist eine andere Geschichte. Dominant, eine echte Diva — sie lässt sich gar nichts sagen. Der Butler traut sich nicht einmal, sie hochzuheben. Zu groß das Risiko: Kratzer am Körper, Fleischwunden, vollständige Niederlage. Sie hat 2023 den Thron übernommen und ist seitdem nicht mehr zu stoppen. Ob der Butler noch lange im Haus bleiben darf — ungewiss.
          </p>
          <p>
            2026, beim gemeinsamen Instagram-Scrollen, hatten die beiden die Idee: <strong className="text-white">selbst durchstarten.</strong> Seitdem wächst @ginaandlucy.official — und das Ziel ist klar: Influencer, Internet-Stars, Weltherrschaft.
          </p>
          <p className="text-[#ff3e8a] font-medium">
            Der Plan läuft. ©ginaandlucy | All Rights Reserved.
          </p>
        </div>
      </motion.div>

      {/* Fun Facts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Die Hauptcharaktere</h2>
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
                  <h3 className="font-bold text-white mb-2">{fact.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{fact.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">Die Karriere-Timeline</h2>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2a2a2a]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/30 flex items-center justify-center z-10">
                  <span className="text-[#ff3e8a] text-xs font-bold">{item.year}</span>
                </div>
                {/* Content */}
                <Card className="flex-1 p-4">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
