// =================================================================
// types.ts — 共通型定義
// =================================================================

export interface JobItem {
  name: string
  reason: string
  isSurprise?: boolean
}

export interface PersonalityData {
  typeCode: string        // 例: "ISFJ-T"
  subType: string         // "開花型" | "抑圧型"
  typeName: string        // 例: "守護者"
  subtitle: string        // 英語サブタイトル
  rarity: string          // 例: "2.8%"
  catchphrase: string
  radarData: { axis: string; value: number; fullMark: number }[]
  scoreData: { label: string; description: string; value: number; color: string }[]
  perception: string[]    // 他者からの見られ方（3段落）
  strengths: string[]     // 職場での強み（2〜3段落）
  weaknesses: string[]    // 職場での弱み（2〜3段落）
  bloomState: string[]    // 開花/抑圧の状態説明（3段落）
  jobs: JobItem[]         // 向いている職業×4
  surpriseJobs: JobItem[] // 意外な適職×4
  advice: string[]        // 改善アドバイス×6
  strengthTitle: string
  weaknessTitle: string
  perceptionTitle: string
  bloomTitle: string
  jobTitle: string
  surpriseJobTitle: string
  adviceTitle: string
}
