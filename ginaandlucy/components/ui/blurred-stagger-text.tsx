"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurredStaggerProps {
  text: string
  className?: string
  /** "char" for headings, "word" for paragraphs. Default: "char" */
  splitBy?: "char" | "word"
  /** Stagger delay between items. Default: 0.015 */
  stagger?: number
  /** Duration per item. Default: 0.3 */
  duration?: number
  /** Use whileInView (scroll-triggered). Default: true */
  inView?: boolean
}

export const BlurredStagger = ({
  text,
  className,
  splitBy = "char",
  stagger = 0.015,
  duration = 0.3,
  inView = true,
}: BlurredStaggerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger },
    },
  }

  const itemAnimation = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show:   { opacity: 1, filter: "blur(0px)" },
  }

  const animateProps = inView
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-40px" } }
    : { initial: "hidden", animate: "show" }

  const items = splitBy === "word" ? text.split(" ") : text.split("")

  return (
    <motion.span
      variants={container}
      {...animateProps}
      className={cn("inline whitespace-normal break-words", className)}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemAnimation}
          transition={{ duration }}
          style={{ display: "inline" }}
        >
          {splitBy === "word" ? (index < items.length - 1 ? item + " " : item) : item}
        </motion.span>
      ))}
    </motion.span>
  )
}
