'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const maineCoonTraits = [
  { icon: '📏', label: 'Größe', value: 'Bis zu 120 cm Körperlänge, 8–12 kg Gewicht' },
  { icon: '🧶', label: 'Fell', value: 'Langes, seidiges Fell mit dichter Unterwolle — wasserdicht' },
  { icon: '🧠', label: 'Intelligenz', value: 'Extrem lernfähig, kann Tricks erlernen wie ein Hund' },
  { icon: '💬', label: 'Stimme', value: 'Charakteristisches Trillern & Chirpen statt normalem Miauen' },
  { icon: '❤️', label: 'Wesen', value: 'Verspielt, sozial, treu — die "Hunde unter den Katzen"' },
  { icon: '🌍', label: 'Herkunft', value: 'Maine, USA — eine der ältesten natürlichen Rassen Nordamerikas' },
]

const siameseTraits = [
  { icon: '👁️', label: 'Augen', value: 'Intensiv blaue Mandelaugen — unverkennbar weltweit' },
  { icon: '🎨', label: 'Fell', value: 'Kurz, glatt, mit typischen "Points" an Ohren, Pfoten & Schwanz' },
  { icon: '👑', label: 'Persönlichkeit', value: 'Dominant, selbstbewusst, absolut überzeugt von ihrer Einzigartigkeit' },
  { icon: '📢', label: 'Kommunikation', value: 'Eine der lautesten Katzenrassen — sagen immer was sie denken' },
  { icon: '🤝', label: 'Bindung', value: 'Extrem menschenbezogen — will immer dabei sein, immer' },
  { icon: '🌍', label: 'Herkunft', value: 'Thailand (ehem. Siam) — eine der ältesten dokumentierten Rassen der Welt' },
]

const comparison = [
  { trait: 'Größe', maineCoon: 'Groß bis sehr groß', siamese: 'Mittelgroß, schlank' },
  { trait: 'Fell', maineCoon: 'Lang, dicht, pflegeintensiv', siamese: 'Kurz, glatt, pflegeleicht' },
  { trait: 'Lautstärke', maineCoon: 'Eher leise, trillert', siamese: 'Sehr laut & gesprächig' },
  { trait: 'Energie', maineCoon: 'Verspielt, aber entspannt', siamese: 'Hochenergetisch, temperamentvoll' },
  { trait: 'Kindgeeignet', maineCoon: 'Sehr gut', siamese: 'Gut, braucht Beschäftigung' },
  { trait: 'Andere Tiere', maineCoon: 'Sehr verträglich', siamese: 'Kann eifersüchtig werden' },
]

export default function RassenPage() {
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
          🐾 Rasseporträt
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          Die Rassen hinter dem{' '}
          <span className="text-[#ff3e8a]">Imperium</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Zwei Rassen. Zwei Welten. Eine gemeinsame Mission. Hier erfährst du, was Gina & Lucy
          so besonders macht — jenseits des Chaos.
        </p>
      </motion.div>

      {/* Maine Coon Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Rasse 01</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
              Lucy's Rasse
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-2 text-foreground">
              Maine Coon
            </h2>
            <p className="text-muted-foreground text-sm font-medium mb-4 uppercase tracking-wider">Die größte Hauskatzenrasse der Welt</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Maine Coon ist ein Naturwunder. In den rauhen Wäldern des US-Bundesstaats Maine entstanden,
              entwickelte sie ein dickes, wasserabweisendes Fell, kräftige Pfoten (oft mit Schneeschuhen — sog.
              Polydaktylie) und einen robusten Körperbau, der für harte Winter gemacht ist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Was Maine Coons besonders macht: ihr <strong className="text-foreground">dominantes, selbstbewusstes Wesen</strong>.
              Sie entscheiden selbst, wann sie Nähe wollen — und wann nicht. Annäherungsversuche ohne ihre Zustimmung
              enden selten gut. Lucy ist dafür das perfekte Beispiel: ihr Butler hebt sie nicht an. Er traut sich schlicht nicht.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mit einem Gewicht von bis zu <strong className="text-foreground">12 kg</strong> und einer Körperlänge
              von bis zu <strong className="text-foreground">120 cm</strong> (inkl. Schwanz) sind sie die Riesen unter den Hauskatzen —
              und sie wissen es. Sie haben den Thron eingenommen und geben ihn nicht mehr her.
            </p>
          </div>
          <div>
            <Image
              src="/Lucy.png"
              alt="Maine Coon Katze"
              width={600}
              height={500}
              className="rounded-2xl w-full object-cover border border-border"
            />
            <p className="text-muted-foreground text-xs mt-2 text-center">
              Maine Coon — bekannt für ihr üppiges Fell und ihre majestätische Erscheinung
            </p>
          </div>
        </div>

        {/* Maine Coon Traits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {maineCoonTraits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Card className="p-4 h-full hover:border-amber-500/30 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{trait.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{trait.label}</div>
                      <div className="text-sm text-foreground leading-relaxed">{trait.value}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="mt-6 p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <p className="text-amber-400 text-sm font-semibold mb-1">💡 Wusstest du?</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Die Maine Coon "Stewie" hält den Guinness-Weltrekord als längste Hauskatze aller Zeiten —
            <strong className="text-foreground"> 123,19 cm</strong> von Nase bis Schwanzspitze. Lucys Karriere hat also noch Luft nach oben.
          </p>
        </div>
      </motion.section>

      {/* Siamese Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Rasse 02</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-semibold mb-4">
              Gina's Rasse
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-2 text-foreground">
              Siamkatze
            </h2>
            <p className="text-muted-foreground text-sm font-medium mb-4 uppercase tracking-wider">Eine der ältesten Rassen der Welt</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Siamkatze ist kein Haustier. Sie ist eine Persönlichkeit. Bereits in alten siamesischen
              Manuskripten aus dem 14. Jahrhundert erwähnt, gelten sie als heilige Tempel-Katzen — und
              das wissen sie ganz genau.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Das markanteste Merkmal: die <strong className="text-foreground">tiefblauen Mandelaugen</strong> und
              das sogenannte "Point-Muster" — das Fell ist cremeweiß am Körper und dunkel an Ohren,
              Pfoten, Schwanz und Gesicht. Dieses Muster entsteht durch eine temperaturabhängige
              Genmutation: kühlere Körperteile werden dunkler.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Siamkatzen wie Gina sind die <strong className="text-foreground">unkompliziertesten Seelen</strong> —
              solange alles nach ihren Vorstellungen läuft. Sie schlafen, entspannen, und sind erstaunlich genügsam.
              Aber wehe, der Butler lässt sie zu lange im Kalten stehen. Dann gibt es diesen Blick.
              Kurz. Vernichtend. Unmissverständlich.
            </p>
          </div>
          <div className="lg:order-1">
            <Image
              src="/gini.jpeg"
              alt="Siamkatze"
              width={600}
              height={500}
              className="rounded-2xl w-full object-cover border border-border"
            />
            <p className="text-muted-foreground text-xs mt-2 text-center">
              Siamkatze — unverwechselbare blaue Augen und das klassische Point-Muster
            </p>
          </div>
        </div>

        {/* Siamese Traits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {siameseTraits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Card className="p-4 h-full hover:border-[#ff3e8a]/30 transition-colors">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{trait.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{trait.label}</div>
                      <div className="text-sm text-foreground leading-relaxed">{trait.value}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="mt-6 p-5 rounded-xl bg-[#ff3e8a]/5 border border-[#ff3e8a]/20">
          <p className="text-[#ff3e8a] text-sm font-semibold mb-1">💡 Wusstest du?</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Siamkatzen sind <strong className="text-foreground">soziale Wesen</strong> und leiden unter Einsamkeit.
            Viele Experten empfehlen, sie zu zweit zu halten — was erklärt, warum Gina Lucy
            ins Haus eingeladen hat. Offiziell. Behauptet sie jedenfalls.
          </p>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Vergleich</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h2 className="text-2xl font-black tracking-tighter mb-6 text-center text-foreground">
          Maine Coon <span className="text-muted-foreground">vs.</span> Siamkatze
        </h2>

        <div className="rounded-2xl border border-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-card border-b border-border">
            <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Eigenschaft</div>
            <div className="p-4 text-xs font-semibold text-amber-400 uppercase tracking-wider border-l border-border">
              🦁 Maine Coon
              <span className="block text-muted-foreground normal-case tracking-normal font-normal">Lucy</span>
            </div>
            <div className="p-4 text-xs font-semibold text-[#ff3e8a] uppercase tracking-wider border-l border-border">
              👁️ Siamkatze
              <span className="block text-muted-foreground normal-case tracking-normal font-normal">Gina</span>
            </div>
          </div>

          {/* Table Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.trait}
              className={`grid grid-cols-3 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-background' : 'bg-subtle'}`}
            >
              <div className="p-4 text-sm text-muted-foreground font-medium">{row.trait}</div>
              <div className="p-4 text-sm text-foreground border-l border-border">{row.maineCoon}</div>
              <div className="p-4 text-sm text-foreground border-l border-border">{row.siamese}</div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
          Alle Angaben beziehen sich auf typische Rassemerkmale. Gina & Lucy behalten sich vor, alle Statistiken
          zu ignorieren und ihr eigenes Ding zu machen. Wie immer.
        </p>
      </motion.section>
    </div>
  )
}
