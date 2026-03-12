'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface HeartFavoriteProps {
  initialLiked?: boolean
  onToggle?: (liked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
}

export function HeartFavorite({ initialLiked = false, onToggle, size = 'md' }: HeartFavoriteProps) {
  const [isLiked, setIsLiked] = useState(initialLiked)

  const sizeMap = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  const paddingMap = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
  }

  const handleClick = () => {
    const next = !isLiked
    setIsLiked(next)
    onToggle?.(next)
  }

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.85 }}
      className={`rounded-full ${paddingMap[size]} transition-colors hover:bg-white/10`}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <motion.div
        animate={{ scale: isLiked ? [1, 1.4, 1] : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Heart
          className={`${sizeMap[size]} transition-colors ${
            isLiked ? 'fill-[#ff3e8a] text-[#ff3e8a]' : 'text-zinc-400'
          }`}
        />
      </motion.div>
    </motion.button>
  )
}
