// =================================================================
// background-config.ts
// 全16タイプ × 開花/抑圧 のビジュアル設定
// =================================================================

export type MotifShape =
  | 'shield' | 'heart' | 'star' | 'lightning' | 'gear'
  | 'leaf'   | 'anchor' | 'sun' | 'butterfly' | 'prism'
  | 'moon'   | 'lightbulb' | 'tower' | 'crown' | 'sparkle'
  | 'hexagon' | 'wave' | 'eye'

// ─── SVG path 定義（viewBox + path） ────────────────────────────────
export const MOTIF_PATHS: Record<MotifShape, { viewBox: string; path: string; stroke?: boolean }> = {
  shield: {
    viewBox: '0 0 200 200',
    path: 'M100 10 L180 50 L180 110 Q180 160 100 190 Q20 160 20 110 L20 50 Z',
  },
  heart: {
    viewBox: '0 0 100 95',
    path: 'M50 90 L8 45 Q-5 28 15 15 Q35 2 50 28 Q65 2 85 15 Q105 28 92 45 Z',
  },
  star: {
    viewBox: '0 0 100 100',
    path: 'M50 5 L61 35 H95 L68 57 L79 91 L50 70 L21 91 L32 57 L5 35 H39 Z',
  },
  lightning: {
    viewBox: '0 0 100 100',
    path: 'M58 4 L18 54 H50 L42 96 L82 46 H50 Z',
  },
  gear: {
    viewBox: '0 0 100 100',
    path: 'M43 2 H57 L60 15 Q66 17 71 21 L84 15 L93 24 L87 37 Q91 43 91 50 Q91 57 87 63 L93 76 L84 85 L71 79 Q66 83 60 85 L57 98 H43 L40 85 Q34 83 29 79 L16 85 L7 76 L13 63 Q9 57 9 50 Q9 43 13 37 L7 24 L16 15 L29 21 Q34 17 40 15 Z M50 35 A15 15 0 1 1 50 65 A15 15 0 0 1 50 35 Z',
  },
  leaf: {
    viewBox: '0 0 100 100',
    path: 'M50 5 Q90 5 90 50 Q90 90 50 95 Q20 80 15 55 Q10 30 50 5 Z M50 95 L50 30',
    stroke: true,
  },
  anchor: {
    viewBox: '0 0 100 100',
    path: 'M50 5 C62 5 72 15 72 27 C72 37 65 46 55 49 L55 60 H68 V68 H55 V80 C65 77 73 70 77 60 L83 63 C77 78 64 88 50 90 C36 88 23 78 17 63 L23 60 C27 70 35 77 45 80 V68 H32 V60 H45 L45 49 C35 46 28 37 28 27 C28 15 38 5 50 5 Z M50 5 A8 8 0 1 1 50 21 A8 8 0 0 1 50 5 Z',
  },
  sun: {
    viewBox: '0 0 100 100',
    path: 'M50 20 A30 30 0 1 1 50 80 A30 30 0 0 1 50 20 Z M50 2 V12 M50 88 V98 M17 17 L24 24 M76 76 L83 83 M2 50 H12 M88 50 H98 M17 83 L24 76 M76 24 L83 17',
    stroke: true,
  },
  butterfly: {
    viewBox: '0 0 100 100',
    path: 'M50 50 Q20 20 5 30 Q-5 50 15 65 Q30 75 50 55 M50 50 Q80 20 95 30 Q105 50 85 65 Q70 75 50 55 M50 55 L50 90',
    stroke: true,
  },
  prism: {
    viewBox: '0 0 100 100',
    path: 'M50 5 L95 90 H5 Z',
  },
  moon: {
    viewBox: '0 0 100 100',
    path: 'M65 15 A38 38 0 1 1 25 75 A28 28 0 0 0 65 15 Z',
  },
  lightbulb: {
    viewBox: '0 0 100 100',
    path: 'M50 10 A30 30 0 0 1 80 40 C80 56 70 64 66 70 H34 C30 64 20 56 20 40 A30 30 0 0 1 50 10 Z M38 78 H62 M40 86 H60 M45 94 H55',
    stroke: true,
  },
  tower: {
    viewBox: '0 0 100 100',
    path: 'M10 95 V45 L50 10 L90 45 V95 Z M40 95 V62 H60 V95',
  },
  crown: {
    viewBox: '0 0 100 100',
    path: 'M5 75 L15 30 L35 55 L50 5 L65 55 L85 30 L95 75 Z M5 80 H95 V90 H5 Z',
  },
  sparkle: {
    viewBox: '0 0 100 100',
    path: 'M50 5 L55 42 H92 L62 65 L73 98 L50 78 L27 98 L38 65 L8 42 H45 Z M50 5 L54 30 L50 35 L46 30 Z M50 95 L54 70 L50 65 L46 70 Z M5 50 L30 46 L35 50 L30 54 Z M95 50 L70 46 L65 50 L70 54 Z',
  },
  hexagon: {
    viewBox: '0 0 100 100',
    path: 'M50 5 L90 27 V73 L50 95 L10 73 V27 Z',
  },
  wave: {
    viewBox: '0 0 200 80',
    path: 'M0 40 C25 10 50 70 75 40 S125 10 150 40 S175 70 200 40',
    stroke: true,
  },
  eye: {
    viewBox: '0 0 100 60',
    path: 'M5 30 Q50 -10 95 30 Q50 70 5 30 Z M50 15 A15 15 0 1 1 50 45 A15 15 0 0 1 50 15 Z',
  },
}

// ─── コンフィグ型定義 ────────────────────────────────────────────────
export interface BackgroundConfig {
  bgColor: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  largeMotifShape: MotifShape
  largeMotifColor: string
  smallMotifShape: MotifShape
  smallMotifColor: string
  blobColor1: string
  blobColor2: string
  // 開花/抑圧で変化するパラメータ
  motifOpacity: number
  blobOpacity: number
  animationDuration: number // 倍率: 1.0=標準, 1.5=ゆっくり
}

// ─── 開花/抑圧ヘルパー ───────────────────────────────────────────────
type BaseConfig = Omit<BackgroundConfig, 'motifOpacity' | 'blobOpacity' | 'animationDuration'>

function bloom(base: BaseConfig): BackgroundConfig {
  return { ...base, motifOpacity: 0.10, blobOpacity: 0.12, animationDuration: 1.0 }
}
function suppress(base: BaseConfig): BackgroundConfig {
  return { ...base, motifOpacity: 0.05, blobOpacity: 0.06, animationDuration: 1.6 }
}

// ─── 全タイプ設定 ────────────────────────────────────────────────────
export const BACKGROUND_CONFIGS: Record<string, BackgroundConfig> = {

  // ════════════════════════════
  //  Sentinels（SJ）— 誠実・秩序
  // ════════════════════════════

  'ISFJ-bloom': bloom({
    bgColor: '#fafcfc',
    primaryColor: '#1D9E75', secondaryColor: '#185FA5', accentColor: '#1D9E75',
    largeMotifShape: 'shield', largeMotifColor: '#3d9e8f',
    smallMotifShape: 'heart',  smallMotifColor: '#4a8ab8',
    blobColor1: 'rgba(29,158,117,0.12)', blobColor2: 'rgba(24,95,165,0.08)',
  }),
  'ISFJ-suppress': suppress({
    bgColor: '#f8fafa',
    primaryColor: '#6a9890', secondaryColor: '#6a7f98', accentColor: '#6a9890',
    largeMotifShape: 'shield', largeMotifColor: '#5a8880',
    smallMotifShape: 'heart',  smallMotifColor: '#5a6f88',
    blobColor1: 'rgba(100,140,130,0.07)', blobColor2: 'rgba(100,120,140,0.05)',
  }),

  'ISTJ-bloom': bloom({
    bgColor: '#fafbfc',
    primaryColor: '#185FA5', secondaryColor: '#2c2c2a', accentColor: '#185FA5',
    largeMotifShape: 'anchor', largeMotifColor: '#185FA5',
    smallMotifShape: 'hexagon', smallMotifColor: '#444441',
    blobColor1: 'rgba(24,95,165,0.10)', blobColor2: 'rgba(44,44,42,0.07)',
  }),
  'ISTJ-suppress': suppress({
    bgColor: '#f9fafc',
    primaryColor: '#5a7898', secondaryColor: '#606060', accentColor: '#5a7898',
    largeMotifShape: 'anchor', largeMotifColor: '#4a6888',
    smallMotifShape: 'hexagon', smallMotifColor: '#505050',
    blobColor1: 'rgba(24,95,165,0.05)', blobColor2: 'rgba(60,60,60,0.04)',
  }),

  'ESTJ-bloom': bloom({
    bgColor: '#fafbfa',
    primaryColor: '#4E8A1A', secondaryColor: '#185FA5', accentColor: '#4E8A1A',
    largeMotifShape: 'tower', largeMotifColor: '#4E8A1A',
    smallMotifShape: 'hexagon', smallMotifColor: '#185FA5',
    blobColor1: 'rgba(78,138,26,0.10)', blobColor2: 'rgba(24,95,165,0.07)',
  }),
  'ESTJ-suppress': suppress({
    bgColor: '#f9faf9',
    primaryColor: '#6a8840', secondaryColor: '#5a7898', accentColor: '#6a8840',
    largeMotifShape: 'tower', largeMotifColor: '#5a7830',
    smallMotifShape: 'hexagon', smallMotifColor: '#4a6888',
    blobColor1: 'rgba(78,138,26,0.05)', blobColor2: 'rgba(24,95,165,0.04)',
  }),

  'ESFJ-bloom': bloom({
    bgColor: '#fdfaf9',
    primaryColor: '#D85A30', secondaryColor: '#BA7517', accentColor: '#D85A30',
    largeMotifShape: 'sun', largeMotifColor: '#D85A30',
    smallMotifShape: 'heart', smallMotifColor: '#BA7517',
    blobColor1: 'rgba(216,90,48,0.10)', blobColor2: 'rgba(186,117,23,0.08)',
  }),
  'ESFJ-suppress': suppress({
    bgColor: '#fcf9f8',
    primaryColor: '#9a6848', secondaryColor: '#8f7038', accentColor: '#9a6848',
    largeMotifShape: 'sun', largeMotifColor: '#8a5838',
    smallMotifShape: 'heart', smallMotifColor: '#7a6028',
    blobColor1: 'rgba(216,90,48,0.05)', blobColor2: 'rgba(186,117,23,0.04)',
  }),

  // ════════════════════════════
  //  Analysts（NT）— 知性・構築
  // ════════════════════════════

  'INTJ-bloom': bloom({
    bgColor: '#fbfafd',
    primaryColor: '#534AB7', secondaryColor: '#185FA5', accentColor: '#534AB7',
    largeMotifShape: 'star', largeMotifColor: '#534AB7',
    smallMotifShape: 'hexagon', smallMotifColor: '#185FA5',
    blobColor1: 'rgba(83,74,183,0.10)', blobColor2: 'rgba(24,95,165,0.07)',
  }),
  'INTJ-suppress': suppress({
    bgColor: '#f9f8fc',
    primaryColor: '#7a74a8', secondaryColor: '#5a6a8f', accentColor: '#7a74a8',
    largeMotifShape: 'star', largeMotifColor: '#6a6898',
    smallMotifShape: 'hexagon', smallMotifColor: '#5a6080',
    blobColor1: 'rgba(83,74,183,0.05)', blobColor2: 'rgba(24,95,165,0.04)',
  }),

  'INTP-bloom': bloom({
    bgColor: '#fafbfb',
    primaryColor: '#1D9E75', secondaryColor: '#534AB7', accentColor: '#1D9E75',
    largeMotifShape: 'gear', largeMotifColor: '#2d8070',
    smallMotifShape: 'hexagon', smallMotifColor: '#534AB7',
    blobColor1: 'rgba(29,158,117,0.09)', blobColor2: 'rgba(83,74,183,0.07)',
  }),
  'INTP-suppress': suppress({
    bgColor: '#f9fafa',
    primaryColor: '#5a9080', secondaryColor: '#7a74a8', accentColor: '#5a9080',
    largeMotifShape: 'gear', largeMotifColor: '#4a7868',
    smallMotifShape: 'hexagon', smallMotifColor: '#6a6898',
    blobColor1: 'rgba(29,158,117,0.05)', blobColor2: 'rgba(83,74,183,0.04)',
  }),

  'ENTJ-bloom': bloom({
    bgColor: '#fdfafa',
    primaryColor: '#A32D2D', secondaryColor: '#BA7517', accentColor: '#A32D2D',
    largeMotifShape: 'crown', largeMotifColor: '#a03030',
    smallMotifShape: 'lightning', smallMotifColor: '#BA7517',
    blobColor1: 'rgba(163,45,45,0.10)', blobColor2: 'rgba(186,117,23,0.08)',
  }),
  'ENTJ-suppress': suppress({
    bgColor: '#fdf9f9',
    primaryColor: '#8f5050', secondaryColor: '#8f7030', accentColor: '#8f5050',
    largeMotifShape: 'crown', largeMotifColor: '#7a4848',
    smallMotifShape: 'lightning', smallMotifColor: '#7a6028',
    blobColor1: 'rgba(163,45,45,0.05)', blobColor2: 'rgba(186,117,23,0.04)',
  }),

  'ENTP-bloom': bloom({
    bgColor: '#fdfbfa',
    primaryColor: '#BA7517', secondaryColor: '#534AB7', accentColor: '#BA7517',
    largeMotifShape: 'lightbulb', largeMotifColor: '#c07818',
    smallMotifShape: 'sparkle', smallMotifColor: '#534AB7',
    blobColor1: 'rgba(186,117,23,0.11)', blobColor2: 'rgba(83,74,183,0.07)',
  }),
  'ENTP-suppress': suppress({
    bgColor: '#fdfaf8',
    primaryColor: '#8f7038', secondaryColor: '#7a74a8', accentColor: '#8f7038',
    largeMotifShape: 'lightbulb', largeMotifColor: '#7a6028',
    smallMotifShape: 'sparkle', smallMotifColor: '#6a6898',
    blobColor1: 'rgba(186,117,23,0.05)', blobColor2: 'rgba(83,74,183,0.04)',
  }),

  // ════════════════════════════
  //  Diplomats（NF）— 共感・理想
  // ════════════════════════════

  'INFJ-bloom': bloom({
    bgColor: '#fcfafd',
    primaryColor: '#534AB7', secondaryColor: '#BA7517', accentColor: '#534AB7',
    largeMotifShape: 'prism', largeMotifColor: '#534AB7',
    smallMotifShape: 'eye', smallMotifColor: '#BA7517',
    blobColor1: 'rgba(83,74,183,0.10)', blobColor2: 'rgba(186,117,23,0.07)',
  }),
  'INFJ-suppress': suppress({
    bgColor: '#fbfafc',
    primaryColor: '#7a74a8', secondaryColor: '#8f7038', accentColor: '#7a74a8',
    largeMotifShape: 'prism', largeMotifColor: '#6a6898',
    smallMotifShape: 'eye', smallMotifColor: '#7a6028',
    blobColor1: 'rgba(83,74,183,0.05)', blobColor2: 'rgba(186,117,23,0.04)',
  }),

  'INFP-bloom': bloom({
    bgColor: '#fdfafc',
    primaryColor: '#D4537E', secondaryColor: '#534AB7', accentColor: '#D4537E',
    largeMotifShape: 'moon', largeMotifColor: '#D4537E',
    smallMotifShape: 'sparkle', smallMotifColor: '#534AB7',
    blobColor1: 'rgba(212,83,126,0.10)', blobColor2: 'rgba(83,74,183,0.07)',
  }),
  'INFP-suppress': suppress({
    bgColor: '#fcf9fb',
    primaryColor: '#9a6878', secondaryColor: '#7a74a8', accentColor: '#9a6878',
    largeMotifShape: 'moon', largeMotifColor: '#8a5870',
    smallMotifShape: 'sparkle', smallMotifColor: '#6a6898',
    blobColor1: 'rgba(212,83,126,0.05)', blobColor2: 'rgba(83,74,183,0.04)',
  }),

  'ENFJ-bloom': bloom({
    bgColor: '#fdfbf8',
    primaryColor: '#BA7517', secondaryColor: '#1D9E75', accentColor: '#BA7517',
    largeMotifShape: 'sun', largeMotifColor: '#c07818',
    smallMotifShape: 'sparkle', smallMotifColor: '#1D9E75',
    blobColor1: 'rgba(186,117,23,0.12)', blobColor2: 'rgba(29,158,117,0.08)',
  }),
  'ENFJ-suppress': suppress({
    bgColor: '#fcfaf8',
    primaryColor: '#8f7038', secondaryColor: '#5a9080', accentColor: '#8f7038',
    largeMotifShape: 'sun', largeMotifColor: '#7a6028',
    smallMotifShape: 'sparkle', smallMotifColor: '#4a7868',
    blobColor1: 'rgba(186,117,23,0.05)', blobColor2: 'rgba(29,158,117,0.04)',
  }),

  'ENFP-bloom': bloom({
    bgColor: '#fafcfb',
    primaryColor: '#1D9E75', secondaryColor: '#D4537E', accentColor: '#1D9E75',
    largeMotifShape: 'butterfly', largeMotifColor: '#1D9E75',
    smallMotifShape: 'sparkle', smallMotifColor: '#D4537E',
    blobColor1: 'rgba(29,158,117,0.10)', blobColor2: 'rgba(212,83,126,0.07)',
  }),
  'ENFP-suppress': suppress({
    bgColor: '#f9fbfa',
    primaryColor: '#5a9080', secondaryColor: '#9a6878', accentColor: '#5a9080',
    largeMotifShape: 'butterfly', largeMotifColor: '#4a7868',
    smallMotifShape: 'sparkle', smallMotifColor: '#8a5870',
    blobColor1: 'rgba(29,158,117,0.05)', blobColor2: 'rgba(212,83,126,0.04)',
  }),

  // ════════════════════════════
  //  Explorers（SP）— 自由・感覚
  // ════════════════════════════

  'ISTP-bloom': bloom({
    bgColor: '#fafafa',
    primaryColor: '#5F5E5A', secondaryColor: '#A32D2D', accentColor: '#5F5E5A',
    largeMotifShape: 'gear', largeMotifColor: '#5F5E5A',
    smallMotifShape: 'lightning', smallMotifColor: '#A32D2D',
    blobColor1: 'rgba(95,94,90,0.10)', blobColor2: 'rgba(163,45,45,0.07)',
  }),
  'ISTP-suppress': suppress({
    bgColor: '#f9f9f9',
    primaryColor: '#808078', secondaryColor: '#8f5050', accentColor: '#808078',
    largeMotifShape: 'gear', largeMotifColor: '#707068',
    smallMotifShape: 'lightning', smallMotifColor: '#7a4848',
    blobColor1: 'rgba(95,94,90,0.05)', blobColor2: 'rgba(163,45,45,0.04)',
  }),

  'ISFP-bloom': bloom({
    bgColor: '#fafcf9',
    primaryColor: '#4E8A1A', secondaryColor: '#1D9E75', accentColor: '#4E8A1A',
    largeMotifShape: 'leaf', largeMotifColor: '#4E8A1A',
    smallMotifShape: 'wave', smallMotifColor: '#1D9E75',
    blobColor1: 'rgba(78,138,26,0.10)', blobColor2: 'rgba(29,158,117,0.08)',
  }),
  'ISFP-suppress': suppress({
    bgColor: '#f9fbf8',
    primaryColor: '#6a8840', secondaryColor: '#5a9080', accentColor: '#6a8840',
    largeMotifShape: 'leaf', largeMotifColor: '#5a7830',
    smallMotifShape: 'wave', smallMotifColor: '#4a7868',
    blobColor1: 'rgba(78,138,26,0.05)', blobColor2: 'rgba(29,158,117,0.04)',
  }),

  'ESTP-bloom': bloom({
    bgColor: '#fdfafa',
    primaryColor: '#A32D2D', secondaryColor: '#BA7517', accentColor: '#A32D2D',
    largeMotifShape: 'lightning', largeMotifColor: '#a03030',
    smallMotifShape: 'sparkle', smallMotifColor: '#BA7517',
    blobColor1: 'rgba(163,45,45,0.12)', blobColor2: 'rgba(186,117,23,0.08)',
  }),
  'ESTP-suppress': suppress({
    bgColor: '#fdf9f9',
    primaryColor: '#8f5050', secondaryColor: '#8f7038', accentColor: '#8f5050',
    largeMotifShape: 'lightning', largeMotifColor: '#7a4848',
    smallMotifShape: 'sparkle', smallMotifColor: '#7a6028',
    blobColor1: 'rgba(163,45,45,0.05)', blobColor2: 'rgba(186,117,23,0.04)',
  }),

  'ESFP-bloom': bloom({
    bgColor: '#fdfafc',
    primaryColor: '#D4537E', secondaryColor: '#BA7517', accentColor: '#D4537E',
    largeMotifShape: 'sparkle', largeMotifColor: '#D4537E',
    smallMotifShape: 'star', smallMotifColor: '#BA7517',
    blobColor1: 'rgba(212,83,126,0.11)', blobColor2: 'rgba(186,117,23,0.08)',
  }),
  'ESFP-suppress': suppress({
    bgColor: '#fcf9fb',
    primaryColor: '#9a6878', secondaryColor: '#8f7038', accentColor: '#9a6878',
    largeMotifShape: 'sparkle', largeMotifColor: '#8a5870',
    smallMotifShape: 'star', smallMotifColor: '#7a6028',
    blobColor1: 'rgba(212,83,126,0.05)', blobColor2: 'rgba(186,117,23,0.04)',
  }),
}

// ─── 設定取得ユーティリティ ─────────────────────────────────────────
export function getBackgroundConfig(
  typeCode: string,     // 例: "ISFJ-T" or "ISFJ-A"
  subType: string,      // 例: "開花型" or "抑圧型"
): BackgroundConfig {
  const baseType = typeCode.replace(/-[AT]$/, '')       // "ISFJ"
  const variant  = subType === '開花型' ? 'bloom' : 'suppress'
  const key      = `${baseType}-${variant}`
  return BACKGROUND_CONFIGS[key] ?? BACKGROUND_CONFIGS['ISFJ-bloom']
}

// -A/-T バリアントのアニメーション倍率
export function getVariantSpeedMult(typeCode: string): number {
  return typeCode.endsWith('-A') ? 0.75 : 1.0
}
