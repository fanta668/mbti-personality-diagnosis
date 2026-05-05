"use client"

import { motion } from "framer-motion"

interface PersonalityCardProps {
  typeName: string
  typeCode: string
  subType: string
  rarity: string
  subtitle: string
  catchphrase: string
}

export function PersonalityCard({
  typeName,
  typeCode,
  subType,
  rarity,
  subtitle,
  catchphrase,
}: PersonalityCardProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Playful background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-blue-light/50 to-purple-light/70" />
      
      {/* Floating decorative blobs */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-teal/15 blob-1"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 -left-16 w-48 h-48 bg-purple/10 blob-2"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute -bottom-10 right-1/4 w-40 h-40 bg-blue/10 blob-3"
        animate={{ 
          y: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Sparkle decorations */}
      <motion.div 
        className="absolute top-16 right-16 text-2xl text-amber/60"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute bottom-24 left-8 text-lg text-teal/50"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute top-32 left-1/3 text-sm text-purple/40"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        ✦
      </motion.div>

      <div className="relative z-10 px-5 py-10 md:px-8 md:py-14 max-w-3xl mx-auto">
        {/* Badges */}
        <motion.div 
          className="flex flex-wrap items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-white/80 text-teal-dark border border-teal/20 backdrop-blur-sm shadow-sm">
            {typeCode} · {subType}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-light/90 text-amber border border-amber/20 backdrop-blur-sm shadow-sm">
            <span className="text-[10px]">✦</span>
            全体の{rarity}
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-teal-dark mb-2 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {typeName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-sm md:text-base text-muted-foreground mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Catchphrase */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white/70 backdrop-blur-sm border-l-4 border-teal rounded-r-xl px-4 py-3 shadow-sm">
            <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
              {catchphrase}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
