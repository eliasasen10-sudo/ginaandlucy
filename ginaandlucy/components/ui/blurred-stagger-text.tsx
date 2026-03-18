"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurredStaggerProps {
  text: string
  className?: string
  /** Use whileInView (scroll-triggered) instead of on-mount. Default: true */
  inView?: boolean
  /** Stagger delay between each character. Default: 0.015 */
  stagger?: number
  /** Duration per character. Default: 0.3 */
  duration?: number
}

export const BlurredStagger = ({
  text,
  className,
  inView = true,
  stagger = 0.015,
  duration = 0.3,
}: BlurredStaggerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show:   { opacity: 1, filter: "blur(0px)" },
  }

  const animateProps = inView
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-50px" } }
    : { initial: "hidden", animate: "show" }

  return (
    <motion.span
      variants={container}
      {...animateProps}
      className={cn("inline whitespace-normal break-words", className)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration }}
          style={{ display: "inline" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}
