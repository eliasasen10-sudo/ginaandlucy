'use client'

import { useRef, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const SLIDES = [
  {
    src: '/gini.jpeg',
    alt: 'Gina',
    label: 'Gina',
    sublabel: 'Siamkatze',
    dot: '#a855f7',
    quote: null,
  },
  {
    src: '/Lucy.png',
    alt: 'Lucy auf dem Tisch',
    label: 'Lucy',
    sublabel: 'Maine Coon',
    dot: '#ff3e8a',
    quote: null,
  },
  {
    src: '/giniandlucy.png',
    alt: 'Gina & Lucy',
    label: 'Gina & Lucy',
    sublabel: 'Das Imperium',
    dot: '#ff3e8a',
    dot2: '#a855f7',
    quote: null,
  },
  {
    src: '/Lucy Gini-18yearsold.jpeg',
    alt: 'Lucy & Gina – 18 years old',
    label: 'Gina & Lucy',
    sublabel: '18 years old',
    dot: '#a855f7',
    quote: {
      text: '"I won the fight."',
      author: '— Gina',
      emoji: '👑',
    },
  },
  {
    src: '/MerryCristmasLucy.JPG',
    alt: 'Merry Christmas Lucy',
    label: 'Lucy',
    sublabel: 'Merry Christmas 🎄',
    dot: '#ff3e8a',
    quote: null,
  },
  {
    src: '/justChilling.jpeg',
    alt: 'Just Chilling',
    label: 'Just Chilling',
    sublabel: 'No context needed',
    dot: '#a855f7',
    quote: {
      text: '"Let me sleep."',
      author: '— Gina',
      emoji: '😴',
    },
  },
]

export function LucyCursor() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const rotateX = useSpring(0, { stiffness: 150, damping: 25 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 25 })

  const slide = SLIDES[index]

  const goTo = (next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + SLIDES.length) % SLIDES.length)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    rotateX.set(((y - rect.height / 2) / rect.height) * -10)
    rotateY.set(((x - rect.width / 2) / rect.width) * 10)
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 })
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setGlare((g) => ({ ...g, opacity: 0 }))
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  }

  return (
    <div className="w-full h-full flex items-center justify-center gap-4">

      {/* Prev button */}
      <button
        onClick={() => goTo(index - 1, -1)}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Card + quote column */}
      <div className="flex items-center gap-4 flex-1 justify-center">

        {/* 3D Card */}
        <div style={{ perspective: 900 }} className="relative">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative rounded-3xl overflow-hidden cursor-none select-none w-[300px] lg:w-[360px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-[2rem] blur-2xl -z-10 pointer-events-none opacity-60"
              style={{ background: slide.dot }}
            />

            {/* Slide image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={slide.src}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Glare */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300"
                style={{
                  opacity: glare.opacity,
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55) 0%, transparent 60%)`,
                }}
              />

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 pointer-events-none">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: slide.dot }} />
                {'dot2' in slide && slide.dot2 && (
                  <div className="w-2 h-2 rounded-full animate-pulse -ml-1" style={{ background: slide.dot2 }} />
                )}
                <span className="text-white text-sm font-semibold tracking-wide">{slide.label}</span>
                <span className="text-zinc-400 text-xs">{slide.sublabel}</span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
            </div>

            {/* Dots indicator */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{ background: i === index ? slide.dot : '#3f3f3f' }}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Funny quote — only for specific slides */}
        <AnimatePresence mode="wait">
          {slide.quote && (
            <motion.div
              key={slide.src + '-quote'}
              initial={{ opacity: 0, x: 20, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="hidden lg:flex flex-col max-w-[140px] select-none"
            >
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4 shadow-xl relative">
                <span className="text-2xl block mb-2">{slide.quote.emoji}</span>
                <p className="text-white text-sm font-semibold leading-snug mb-2">
                  {slide.quote.text}
                </p>
                <p className="text-[#a855f7] text-xs font-bold">{slide.quote.author}</p>
                {/* little arrow pointing left */}
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-[#2a2a2a]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Next button */}
      <button
        onClick={() => goTo(index + 1, 1)}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

    </div>
  )
}
