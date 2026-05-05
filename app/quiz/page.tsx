'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { QUESTIONS, QUESTIONS_PER_PAGE, TOTAL_PAGES } from '@/data/questions'
import { calcTypeCode, Answers } from '@/lib/calcType'

const SCALE_LABELS = [
  { value: 1, label: 'まったく\nそう思わない' },
  { value: 2, label: 'そう思わない' },
  { value: 3, label: 'どちらとも\nいえない' },
  { value: 4, label: 'そう思う' },
  { value: 5, label: 'とても\nそう思う' },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0) // 0-indexed
  const [answers, setAnswers] = useState<Answers>({})
  const topRef = useRef<HTMLDivElement>(null)

  const pageQuestions = QUESTIONS.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  )

  // このページの全問が回答済みかチェック
  const allAnswered = pageQuestions.every(q => answers[q.id] !== undefined)

  // 進捗率（%）
  const answeredCount = Object.keys(answers).length
  const progressPercent = Math.round((answeredCount / QUESTIONS.length) * 100)

  // ページが変わったらトップへスクロール
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentPage])

  function handleAnswer(questionId: number, value: number) {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  function handleNext() {
    if (!allAnswered) return

    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(prev => prev + 1)
    } else {
      // 最終ページ → 結果計算 → リダイレクト
      const typeCode = calcTypeCode(answers)
      router.push(`/result/${encodeURIComponent(typeCode)}`)
    }
  }

  const isLastPage = currentPage === TOTAL_PAGES - 1

  return (
    <div
      ref={topRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* ── 進捗バー ─────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">
              職場パーソナリティ診断
            </span>
            <span className="text-sm font-bold text-indigo-600">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1 text-right">
            {currentPage + 1} / {TOTAL_PAGES} ページ（全{QUESTIONS.length}問）
          </p>
        </div>
      </div>

      {/* ── 質問リスト ────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {pageQuestions.map((q, idx) => {
          const globalIdx = currentPage * QUESTIONS_PER_PAGE + idx + 1
          const answered = answers[q.id]

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl shadow-sm border p-6 transition-all duration-200 ${
                answered
                  ? 'border-indigo-200 shadow-indigo-100'
                  : 'border-slate-100'
              }`}
            >
              {/* 問番号 + 質問文 */}
              <div className="flex gap-3 items-start mb-5">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                  {globalIdx}
                </span>
                <p className="text-slate-800 font-medium leading-relaxed">
                  {q.text}
                </p>
              </div>

              {/* 5段階スケール */}
              <div className="flex gap-2 justify-between">
                {SCALE_LABELS.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(q.id, value)}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 rounded-xl border-2 transition-all duration-150 cursor-pointer
                      ${
                        answered === value
                          ? 'border-indigo-500 bg-indigo-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'
                      }`}
                  >
                    {/* ラジオ円 */}
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                        ${
                          answered === value
                            ? 'border-indigo-500 bg-indigo-500'
                            : 'border-slate-300'
                        }`}
                    >
                      {answered === value && (
                        <span className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </span>
                    {/* ラベル */}
                    <span
                      className={`text-center leading-tight whitespace-pre-line text-xs
                        ${answered === value ? 'text-indigo-600 font-semibold' : 'text-slate-500'}`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}

        {/* ── 次へ / 結果を見る ボタン ──────────────── */}
        <div className="pt-2 pb-10">
          <button
            onClick={handleNext}
            disabled={!allAnswered}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-200
              ${
                allAnswered
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
          >
            {!allAnswered
              ? `あと ${pageQuestions.filter(q => answers[q.id] === undefined).length} 問 回答してください`
              : isLastPage
              ? '結果を見る →'
              : `次のページへ → （${currentPage + 2} / ${TOTAL_PAGES}）`}
          </button>
          {!allAnswered && (
            <p className="text-center text-xs text-slate-400 mt-2">
              このページの全問に回答すると次へ進めます
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
