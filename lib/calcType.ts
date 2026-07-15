// =================================================================
// calcType.ts — 診断スコア計算ロジック
// 60問の回答（1〜5）から typeCode を算出する
// 例: 'ISFJ-T_bloom'
// =================================================================

import { QUESTIONS } from '@/data/questions'

// 回答マップ: { 質問ID: スコア(1〜5) }
export type Answers = Record<number, number>

interface AxisScore {
  EI: number  // プラス = E寄り、マイナス = I寄り
  SN: number  // プラス = S寄り、マイナス = N寄り
  TF: number  // プラス = T寄り、マイナス = F寄り
  JP: number  // プラス = J寄り、マイナス = P寄り
  AT: number  // プラス = A寄り、マイナス = T寄り
  bloom: number // プラス = 開花寄り、マイナス = 抑圧寄り
}

/**
 * 回答データから各軸のスコアを計算する
 * スコアは 1〜5 の回答を -2〜+2 に変換して加算
 */
function calcAxisScores(answers: Answers): AxisScore {
  const scores: AxisScore = { EI: 0, SN: 0, TF: 0, JP: 0, AT: 0, bloom: 0 }

  for (const question of QUESTIONS) {
    const raw = answers[question.id]
    if (raw === undefined) continue

    // 1〜5 → -2〜+2 に変換（3=中立=0）
    const normalized = raw - 3

    const { axis, direction } = question

    if (axis === 'EI') {
      scores.EI += direction === 'E' ? normalized : -normalized
    } else if (axis === 'SN') {
      scores.SN += direction === 'S' ? normalized : -normalized
    } else if (axis === 'TF') {
      scores.TF += direction === 'T' ? normalized : -normalized
    } else if (axis === 'JP') {
      scores.JP += direction === 'J' ? normalized : -normalized
    } else if (axis === 'AT') {
      // direction: 'A' = 自信型寄り, 'AT' = 激動型寄り
      scores.AT += direction === 'A' ? normalized : -normalized
    } else if (axis === 'bloom') {
      // direction: 'bloom' = 開花寄り, 'suppress' = 抑圧寄り
      scores.bloom += direction === 'bloom' ? normalized : -normalized
    }
  }

  return scores
}

/**
 * 回答データから typeCode を算出する
 * 返り値例: 'ISFJ-T_bloom'
 */
export function calcTypeCode(answers: Answers): string {
  const scores = calcAxisScores(answers)

  const E_or_I = scores.EI >= 0 ? 'E' : 'I'
  const S_or_N = scores.SN >= 0 ? 'S' : 'N'
  const T_or_F = scores.TF >= 0 ? 'T' : 'F'
  const J_or_P = scores.JP >= 0 ? 'J' : 'P'
  const A_or_T = scores.AT >= 0 ? '-A' : '-T'
  const bloom_or_suppress = scores.bloom >= 0 ? 'bloom' : 'suppress'

  const mbti = `${E_or_I}${S_or_N}${T_or_F}${J_or_P}${A_or_T}`
  return `${mbti}_${bloom_or_suppress}`
}

/**
 * 各軸のスコアを 0〜100% に変換して返す（UIの進捗バー等に使用）
 * 各軸は10問 × 最大±2 = 最大±20 なので、50+(score/20*50) で 0〜100 に収める
 */
export function calcAxisPercents(answers: Answers): Record<string, number> {
  const scores = calcAxisScores(answers)
  const toPercent = (v: number) => Math.round(Math.min(100, Math.max(0, 50 + (v / 20) * 50)))

  return {
    E: toPercent(scores.EI),      // 高いほどE
    I: toPercent(-scores.EI),     // 高いほどI
    S: toPercent(scores.SN),
    N: toPercent(-scores.SN),
    T: toPercent(scores.TF),
    F: toPercent(-scores.TF),
    J: toPercent(scores.JP),
    P: toPercent(-scores.JP),
    A: toPercent(scores.AT),
    AT_turbulent: toPercent(-scores.AT),
    bloom: toPercent(scores.bloom),
    suppress: toPercent(-scores.bloom),
  }
}

// =================================================================
// 6軸スコアのURL受け渡し（結果ページでチャートに実測値を出すため）
// 形式: "E-S-T-J-A-bloom" 各0〜100の整数をハイフン区切り 例: "35-60-28-71-44-65"
// =================================================================

/** URLクエリに載せる6軸スコア（E,S,T,J,A,bloom 側の%） */
export interface AxisPercents6 {
  E: number
  S: number
  T: number
  J: number
  A: number
  bloom: number
}

/** 回答から6軸スコアをURLパラメータ文字列にエンコードする */
export function encodeAxisPercents(answers: Answers): string {
  const p = calcAxisPercents(answers)
  return [p.E, p.S, p.T, p.J, p.A, p.bloom].join('-')
}

/** URLパラメータ文字列を6軸スコアに復元する。不正な値なら null */
export function decodeAxisPercents(param: string | null): AxisPercents6 | null {
  if (!param) return null
  const parts = param.split('-').map(Number)
  if (parts.length !== 6) return null
  if (parts.some(v => !Number.isInteger(v) || v < 0 || v > 100)) return null
  const [E, S, T, J, A, bloom] = parts
  return { E, S, T, J, A, bloom }
}
