'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '🧠',
    title: '6軸・64タイプで深く分析',
    desc: 'MBTIの4軸に加え、自信度・職場適合度を独自スコアで判定。あなたの「今の職場での姿」に特化した診断です。',
  },
  {
    icon: '🌱',
    title: '開花型 vs 抑圧型の判定',
    desc: '同じMBTIタイプでも、職場環境によって強みが活かされているかが変わります。本来の力を発揮できているか確認できます。',
  },
  {
    icon: '💼',
    title: '向いている職業がわかる',
    desc: 'あなたのタイプに合った職業と「意外な適職」を提示。キャリアの可能性を新しい角度から見直せます。',
  },
  {
    icon: '⚡',
    title: '60問・約5分で完了',
    desc: '10問ずつ区切ったページ構成で、サクサク答えられます。途中で疲れにくい設計です。',
  },
]

export default function TopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* ── ヒーロー ───────────────────────────── */}
      <main className="max-w-2xl mx-auto px-4 pt-16 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* バッジ */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-600 mb-6">
            職場パーソナリティ診断 — 64タイプ
          </span>

          {/* タイトル */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
            あなたの
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              「職場での本当の姿」
            </span>
            を知ろう
          </h1>

          {/* サブコピー */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            MBTIをベースに、あなたの職場での強み・弱み・向いている仕事を
            64タイプで徹底分析。今の環境で開花できているかもわかります。
          </p>

          {/* CTAボタン */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/quiz"
              className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold shadow-lg shadow-indigo-200 hover:shadow-xl transition-shadow"
            >
              診断スタート（全60問・約5分）
            </Link>
          </motion.div>

          <p className="text-xs text-slate-400 mt-3">
            無料 · 登録不要 · 結果はすぐ表示
          </p>
        </motion.div>

        {/* ── 特徴カード ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 text-left"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
            >
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="font-bold text-slate-800 mb-1">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── 下部CTA ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/quiz"
              className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-bold shadow-lg shadow-indigo-200"
            >
              今すぐ診断してみる →
            </Link>
          </motion.div>
          <p className="text-xs text-slate-400 mt-3">
            ※ 本診断は娯楽・自己啓発を目的としたものです。医療・心理的診断ではありません。
          </p>
        </motion.div>
      </main>
    </div>
  )
}
