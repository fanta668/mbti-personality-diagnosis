"use client"

import { motion } from "framer-motion"

interface AnimatedScoreBarProps {
  label: string
  description: string
  value: number
  color: string
  delay?: number
}

export function AnimatedScoreBar({
  label,
  description,
  value,
  color,
  delay = 0,
}: AnimatedScoreBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="space-y-1.5"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-lg font-bold"
          style={{ color }}
        >
          {value}%
        </motion.span>
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">{description}</p>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}
