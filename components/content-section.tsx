"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ContentSectionProps {
  label: string
  title: string
  children: ReactNode
  accentColor?: string
  delay?: number
  badge?: {
    text: string
    variant: "bloom" | "suppress"
  }
}

export function ContentSection({ 
  label, 
  title, 
  children, 
  accentColor = "bg-teal", 
  delay = 0,
  badge
}: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden"
    >
      <div className="flex">
        <div className={`w-1.5 ${accentColor} shrink-0`} />
        <div className="p-5 md:p-6 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            {label}
          </p>
          {badge && (
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
              badge.variant === "bloom" 
                ? "bg-green-light text-green" 
                : "bg-amber-light text-amber"
            }`}>
              {badge.text}
            </span>
          )}
          <h3 className="text-base md:text-lg font-bold text-foreground mb-4 leading-relaxed">
            {title}
          </h3>
          <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface JobItemProps {
  name: string
  reason: string
  isSurprise?: boolean
}

export function JobItem({ name, reason, isSurprise = false }: JobItemProps) {
  return (
    <div className="py-4 border-b border-border/50 last:border-b-0 first:pt-0 last:pb-0">
      <div className={`text-[15px] font-bold mb-1 flex items-center gap-2 flex-wrap ${
        isSurprise ? "text-teal-dark" : "text-foreground"
      }`}>
        {name}
        {isSurprise && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-teal-light text-teal-dark">
            意外な適職
          </span>
        )}
      </div>
      <p className="text-[14px] text-muted-foreground leading-relaxed">{reason}</p>
    </div>
  )
}

interface AdviceListProps {
  items: string[]
}

export function AdviceList({ items }: AdviceListProps) {
  return (
    <ul className="space-y-0">
      {items.map((item, index) => (
        <li 
          key={index}
          className="text-[15px] text-muted-foreground leading-relaxed py-3 pl-6 border-b border-border/50 last:border-b-0 relative"
        >
          <span className="absolute left-0 text-teal font-bold">→</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
