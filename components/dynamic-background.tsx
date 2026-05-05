"use client"

import { motion } from "framer-motion"
import {
  BackgroundConfig,
  MOTIF_PATHS,
  getVariantSpeedMult,
} from "@/components/background-config"

interface DynamicBackgroundProps {
  config: BackgroundConfig
  typeCode?: string // "-A" / "-T" のアニメーション速度調整に使用
}

export function DynamicBackground({ config, typeCode = "ISFJ-T" }: DynamicBackgroundProps) {
  const speedMult = getVariantSpeedMult(typeCode)
  const d = config.animationDuration * speedMult // duration 倍率

  const largeMeta = MOTIF_PATHS[config.largeMotifShape]
  const smallMeta = MOTIF_PATHS[config.smallMotifShape]

  // stroke モチーフは fill="none" stroke を使う
  const largeProps = largeMeta.stroke
    ? { fill: "none", stroke: config.largeMotifColor, strokeWidth: 5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    : { fill: config.largeMotifColor }

  const smallProps = smallMeta.stroke
    ? { fill: "none", stroke: config.smallMotifColor, strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    : { fill: config.smallMotifColor }

  const largeSmallProps = largeMeta.stroke
    ? { fill: "none", stroke: config.largeMotifColor, strokeWidth: 5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    : { fill: config.largeMotifColor }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ backgroundColor: config.bgColor }}
    >
      {/* ── 大型メインモチーフ（右上） ─────────────────────────── */}
      <motion.svg
        className="absolute -top-20 -right-32"
        style={{ width: 500, height: 500, opacity: config.motifOpacity }}
        viewBox={largeMeta.viewBox}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: config.motifOpacity, scale: 1 }}
        transition={{ duration: 1.5 * d }}
      >
        <motion.path
          d={largeMeta.path}
          {...largeProps}
          animate={{
            scale: [1, 1.04, 1],
            opacity: largeMeta.stroke ? undefined : [1, 0.8, 1],
          }}
          style={{ transformOrigin: "center" }}
          transition={{ duration: 8 * d, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* ── 浮遊する丸①（左中） ───────────────────────────────── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 80, height: 80,
          top: "32%", left: "8%",
          background: config.blobColor1,
        }}
        animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
        transition={{ duration: 6 * d, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── 浮遊する丸②（左中下） ─────────────────────────────── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 48, height: 48,
          top: "50%", left: "4%",
          background: config.blobColor2,
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5 * d, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── 回転リング（右上寄り） ─────────────────────────────── */}
      <motion.div
        className="absolute"
        style={{ top: "18%", right: "14%", width: 128, height: 128 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40 * d, repeat: Infinity, ease: "linear" }}
      >
        {[0, 12, 24].map((inset, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              inset,
              border: `1.5px solid ${config.primaryColor}`,
              opacity: 0.10 - i * 0.02,
            }}
          />
        ))}
      </motion.div>

      {/* ── 小型モチーフ①（左中央） ───────────────────────────── */}
      <motion.svg
        className="absolute"
        style={{
          top: "40%", left: "7%",
          width: 64, height: 64,
          opacity: config.motifOpacity * 1.2,
        }}
        viewBox={smallMeta.viewBox}
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 7 * d, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={smallMeta.path} {...smallProps} />
      </motion.svg>

      {/* ── 小型モチーフ②（右中央） ───────────────────────────── */}
      <motion.svg
        className="absolute"
        style={{
          top: "60%", right: "11%",
          width: 48, height: 48,
          opacity: config.motifOpacity * 0.9,
        }}
        viewBox={largeMeta.viewBox}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5 * d, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path d={largeMeta.path} {...largeSmallProps} />
      </motion.svg>

      {/* ── 小型モチーフ③（左下） ─────────────────────────────── */}
      <motion.svg
        className="absolute"
        style={{
          bottom: "18%", left: "15%",
          width: 36, height: 36,
          opacity: config.motifOpacity * 0.7,
        }}
        viewBox={smallMeta.viewBox}
        animate={{ y: [0, -5, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9 * d, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <path d={smallMeta.path} {...smallProps} />
      </motion.svg>

      {/* ── オーガニックブロブ①（左下） ──────────────────────── */}
      <motion.div
        className="absolute blob-1"
        style={{
          width: 160, height: 160,
          bottom: "28%", left: "2%",
          background: config.blobColor1,
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10 * d, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── オーガニックブロブ②（右下） ──────────────────────── */}
      <motion.div
        className="absolute blob-2"
        style={{
          width: 192, height: 192,
          bottom: "8%", right: "4%",
          background: config.blobColor2,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 12 * d, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── スパークルアクセント①（右上） ────────────────────── */}
      <motion.div
        className="absolute select-none"
        style={{
          top: "14%", right: "14%",
          color: config.accentColor,
          fontSize: "24px",
          opacity: 0.3,
          lineHeight: 1,
        }}
        animate={{
          scale:   [1, 1.25, 1],
          opacity: [0.2, config.blobOpacity * 2.5, 0.2],
        }}
        transition={{ duration: 2 * d, repeat: Infinity }}
      >
        ✦
      </motion.div>

      {/* ── スパークルアクセント②（左下） ────────────────────── */}
      <motion.div
        className="absolute select-none"
        style={{
          bottom: "22%", left: "8%",
          color: config.accentColor,
          fontSize: "18px",
          opacity: 0.25,
          lineHeight: 1,
        }}
        animate={{
          scale:   [1, 1.3, 1],
          opacity: [0.18, config.blobOpacity * 2, 0.18],
        }}
        transition={{ duration: 2.5 * d, repeat: Infinity, delay: 0.5 }}
      >
        ✦
      </motion.div>

      {/* ── スパークルアクセント③（中央左上） ───────────────── */}
      <motion.div
        className="absolute select-none"
        style={{
          top: "30%", left: "28%",
          color: config.secondaryColor,
          fontSize: "14px",
          opacity: 0.2,
          lineHeight: 1,
        }}
        animate={{
          scale:   [1, 1.4, 1],
          opacity: [0.12, config.blobOpacity * 1.5, 0.12],
        }}
        transition={{ duration: 3 * d, repeat: Infinity, delay: 1 }}
      >
        ✦
      </motion.div>

      {/* ── ドットパターン ─────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `radial-gradient(${config.primaryColor} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── 上部グラデーションオーバーレイ ────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${config.blobColor1} 0%, transparent 100%)`,
          opacity: 0.5,
        }}
      />
    </div>
  )
}
