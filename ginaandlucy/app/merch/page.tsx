'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { HeartFavorite } from '@/components/ui/heart-favorite-shadcnui'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: '"Professional Couch Tester" Hoodie',
    price: '39,99',
    category: 'Kleidung',
    rating: 4.9,
    reviews: 142,
    badge: '🔥 Bestseller',
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Hoodie+🐾',
    desc: 'Für alle, die Ginas Lebensstil teilen. Weich, warm, lazy.',
  },
  {
    id: 2,
    name: 'Gina & Lucy Tasse',
    price: '14,99',
    category: 'Küche',
    rating: 5.0,
    reviews: 89,
    badge: '⭐ Top-Rated',
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Tasse+☕',
    desc: 'Kaffee schmeckt besser mit Katzengesichtern drauf. Wissenschaftlich bewiesen.',
  },
  {
    id: 3,
    name: '"Not lazy, conserving energy" T-Shirt',
    price: '24,99',
    category: 'Kleidung',
    rating: 4.8,
    reviews: 67,
    badge: null,
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=T-Shirt+😴',
    desc: 'Lucys persönliche Lebensphilosophie, jetzt als tragbares Statement.',
  },
  {
    id: 4,
    name: 'Katzenpfoten-Socken (3er Pack)',
    price: '9,99',
    category: 'Accessoires',
    rating: 4.7,
    reviews: 213,
    badge: '💕 Fan-Fav',
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Socken+🐾',
    desc: 'Dreimal Pfötchen. Einmal Chaos. Immer cute.',
  },
  {
    id: 5,
    name: 'Handyhülle mit Siamkatzen-Print',
    price: '19,99',
    category: 'Tech',
    rating: 4.6,
    reviews: 54,
    badge: '📱 Neu',
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Case+📱',
    desc: 'Kompatibel mit iPhone & Samsung. Nicht kompatibel mit langweiligem Design.',
  },
  {
    id: 6,
    name: 'Gina & Lucy Katzen-Kissen',
    price: '29,99',
    category: 'Wohnen',
    rating: 4.9,
    reviews: 101,
    badge: null,
    image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Kissen+🛋️',
    desc: 'Für Couch-Tests der Spitzenklasse. Gina-approved.',
  },
]

function MerchCard({ product }: { product: typeof products[0] }) {
  const [inCart, setInCart] = useState(false)

  return (
    <Card className="group overflow-hidden hover:border-[#ff3e8a]/30 transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-[#0a0a0a]/80 text-white text-xs font-medium backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute top-2 right-2">
          <HeartFavorite size="sm" />
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider text-[#ff3e8a] font-semibold">{product.category}</span>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {product.rating} ({product.reviews})
          </div>
        </div>

        <h3 className="font-semibold text-white text-sm mb-1 leading-snug">{product.name}</h3>
        <p className="text-zinc-500 text-xs mb-3 leading-relaxed">{product.desc}</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">{product.price}€</span>
          <button
            onClick={() => setInCart(!inCart)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
              inCart
                ? 'bg-[#ff3e8a]/10 text-[#ff3e8a] border border-[#ff3e8a]/30'
                : 'bg-[#ff3e8a] text-white hover:bg-[#ff3e8a]/80'
            }`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {inCart ? 'Im Warenkorb' : 'In den Warenkorb'}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MerchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3e8a]/10 border border-[#ff3e8a]/20 text-[#ff3e8a] text-xs font-medium mb-4">
          🛍️ Official Merch
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
          Der <span className="text-[#ff3e8a]">Shop</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Trag das Chaos mit Stolz. 100% Gina & Lucy approved.
          Der Butler bekommt keine Provision.
        </p>
      </motion.div>

      {/* Banner */}
      <motion.div
        className="mb-8 p-4 rounded-xl bg-[#ff3e8a]/5 border border-[#ff3e8a]/20 flex flex-col sm:flex-row items-center justify-between gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎁</span>
          <div>
            <p className="font-semibold text-white text-sm">Gratis Versand ab 49€</p>
            <p className="text-zinc-400 text-xs">Nur noch wenig und Gina schickt es persönlich. Fast.</p>
          </div>
        </div>
        <span className="text-[#ff3e8a] font-bold text-sm whitespace-nowrap">Code: PFOETCHEN10</span>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          >
            <MerchCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
