'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { HeartFavorite } from '@/components/ui/heart-favorite-shadcnui'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/components/providers'

function MerchCard({ product }: {
  product: {
    id: number; nameDe: string; nameEn: string; price: string;
    categoryDe: string; categoryEn: string; rating: number; reviews: number;
    badgeDe: string | null; badgeEn: string | null; image: string;
    descDe: string; descEn: string;
  }
}) {
  const { t } = useLanguage()
  const [inCart, setInCart] = useState(false)

  return (
    <Card className="group overflow-hidden hover:border-[#ff3e8a]/30 transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={t(product.nameDe, product.nameEn)}
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badgeDe && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-background/80 text-foreground text-xs font-medium backdrop-blur-sm">
            {t(product.badgeDe, product.badgeEn ?? product.badgeDe)}
          </span>
        )}
        <div className="absolute top-2 right-2">
          <HeartFavorite size="sm" />
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider text-[#ff3e8a] font-semibold">
            {t(product.categoryDe, product.categoryEn)}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {product.rating} ({product.reviews})
          </div>
        </div>
        <h3 className="font-semibold text-foreground text-sm mb-1 leading-snug">
          {t(product.nameDe, product.nameEn)}
        </h3>
        <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
          {t(product.descDe, product.descEn)}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">{product.price}€</span>
          <button
            onClick={() => setInCart(!inCart)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
              inCart
                ? 'bg-[#ff3e8a]/10 text-[#ff3e8a] border border-[#ff3e8a]/30'
                : 'bg-[#ff3e8a] text-white hover:bg-[#ff3e8a]/80'
            }`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {inCart ? t('Im Warenkorb', 'In cart') : t('In den Warenkorb', 'Add to cart')}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MerchPage() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      nameDe: '"Professional Couch Tester" Hoodie',
      nameEn: '"Professional Couch Tester" Hoodie',
      price: '39,99',
      categoryDe: 'Kleidung',
      categoryEn: 'Clothing',
      rating: 4.9,
      reviews: 142,
      badgeDe: '🔥 Bestseller',
      badgeEn: '🔥 Bestseller',
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Hoodie+🐾',
      descDe: 'Für alle, die Ginas Lebensstil teilen. Weich, warm, lazy.',
      descEn: "For everyone who shares Gina's lifestyle. Soft, warm, lazy.",
    },
    {
      id: 2,
      nameDe: 'Gina & Lucy Tasse',
      nameEn: 'Gina & Lucy Mug',
      price: '14,99',
      categoryDe: 'Küche',
      categoryEn: 'Kitchen',
      rating: 5.0,
      reviews: 89,
      badgeDe: '⭐ Top-Rated',
      badgeEn: '⭐ Top-Rated',
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Tasse+☕',
      descDe: 'Kaffee schmeckt besser mit Katzengesichtern drauf. Wissenschaftlich bewiesen.',
      descEn: 'Coffee tastes better with cat faces on it. Scientifically proven.',
    },
    {
      id: 3,
      nameDe: '"Not lazy, conserving energy" T-Shirt',
      nameEn: '"Not lazy, conserving energy" T-Shirt',
      price: '24,99',
      categoryDe: 'Kleidung',
      categoryEn: 'Clothing',
      rating: 4.8,
      reviews: 67,
      badgeDe: null,
      badgeEn: null,
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=T-Shirt+😴',
      descDe: 'Lucys persönliche Lebensphilosophie, jetzt als tragbares Statement.',
      descEn: "Lucy's personal life philosophy, now as a wearable statement.",
    },
    {
      id: 4,
      nameDe: 'Katzenpfoten-Socken (3er Pack)',
      nameEn: 'Cat Paw Socks (3-pack)',
      price: '9,99',
      categoryDe: 'Accessoires',
      categoryEn: 'Accessories',
      rating: 4.7,
      reviews: 213,
      badgeDe: '💕 Fan-Fav',
      badgeEn: '💕 Fan-Fav',
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Socken+🐾',
      descDe: 'Dreimal Pfötchen. Einmal Chaos. Immer cute.',
      descEn: 'Three paws. One chaos. Always cute.',
    },
    {
      id: 5,
      nameDe: 'Handyhülle mit Siamkatzen-Print',
      nameEn: 'Phone Case with Siamese Print',
      price: '19,99',
      categoryDe: 'Tech',
      categoryEn: 'Tech',
      rating: 4.6,
      reviews: 54,
      badgeDe: '📱 Neu',
      badgeEn: '📱 New',
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Case+📱',
      descDe: 'Kompatibel mit iPhone & Samsung. Nicht kompatibel mit langweiligem Design.',
      descEn: 'Compatible with iPhone & Samsung. Not compatible with boring design.',
    },
    {
      id: 6,
      nameDe: 'Gina & Lucy Katzen-Kissen',
      nameEn: 'Gina & Lucy Cat Pillow',
      price: '29,99',
      categoryDe: 'Wohnen',
      categoryEn: 'Home',
      rating: 4.9,
      reviews: 101,
      badgeDe: null,
      badgeEn: null,
      image: 'https://placehold.co/400x400/1a1a1a/ff3e8a?text=Kissen+🛋️',
      descDe: 'Für Couch-Tests der Spitzenklasse. Gina-approved.',
      descEn: 'For top-class couch testing. Gina-approved.',
    },
  ]

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
          🛍️ {t('Offizieller Merch', 'Official Merch')}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-foreground">
          {t('Der', 'The')} <span className="text-[#ff3e8a]">{t('Shop', 'Shop')}</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {t(
            'Trag das Chaos mit Stolz. 100% Gina & Lucy approved. Der Butler bekommt keine Provision.',
            'Wear the chaos with pride. 100% Gina & Lucy approved. The butler gets no commission.'
          )}
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
            <p className="font-semibold text-foreground text-sm">
              {t('Gratis Versand ab 49€', 'Free shipping from €49')}
            </p>
            <p className="text-muted-foreground text-xs">
              {t(
                'Nur noch wenig und Gina schickt es persönlich. Fast.',
                'Just a little more and Gina will ship it personally. Almost.'
              )}
            </p>
          </div>
        </div>
        <span className="text-[#ff3e8a] font-bold text-sm whitespace-nowrap">
          {t('Code:', 'Code:')} PFOETCHEN10
        </span>
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
