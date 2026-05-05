"use client"

import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ShareCardProps {
  typeName: string
  typeCode: string
  subType: string
  rarity: string
  catchphrase: string
}

export function ShareCard({
  typeName,
  typeCode,
  subType,
  rarity,
  catchphrase,
}: ShareCardProps) {
  const [copied, setCopied] = useState(false)

  const shareText = `職場パーソナリティ診断やってみた 🌿
結果は「${typeName}」(${typeCode} ${subType})
全体の${rarity}という希少タイプでした。
「${catchphrase}」
#職場パーソナリティ診断`

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl bg-gradient-to-br from-teal via-teal/90 to-teal-dark p-6 overflow-hidden shadow-lg"
    >
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blob-2"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="relative z-10">
        <p className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-1">
          結果をシェアする
        </p>
        <h3 className="text-white font-bold text-base mb-4">
          あなたのタイプを友人・同僚に教えよう
        </h3>

        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10">
          <p className="text-white/90 text-sm whitespace-pre-line leading-relaxed">
            {shareText}
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            asChild
            className="flex-1 bg-white text-teal-dark hover:bg-white/90 font-bold shadow-md"
          >
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Xでシェアする
            </a>
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
