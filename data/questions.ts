// =================================================================
// questions.ts — 診断質問データ（60問）
// 6軸 × 10問: E/I, S/N, T/F, J/P, A/T（-A/-T), bloom（開花/抑圧）
// axis: 'EI' | 'SN' | 'TF' | 'JP' | 'AT' | 'bloom'
// direction: どちら側を測る質問か
//   EI: 'E' = 外向寄り, 'I' = 内向寄り
//   SN: 'S' = 感覚寄り, 'N' = 直感寄り
//   TF: 'T' = 思考寄り, 'F' = 感情寄り
//   JP: 'J' = 判断寄り, 'P' = 知覚寄り
//   AT: 'A' = 自信型寄り, 'T' = 激動型寄り
//   bloom: 'bloom' = 開花寄り, 'suppress' = 抑圧寄り
// score: 「そう思う（5）〜そう思わない（1）」の5段階
// =================================================================

export type Axis = 'EI' | 'SN' | 'TF' | 'JP' | 'AT' | 'bloom'
export type Direction = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' | 'A' | 'AT' | 'bloom' | 'suppress'

export interface Question {
  id: number
  text: string
  axis: Axis
  direction: Direction  // この方向にスコアが加算される
}

export const QUESTIONS: Question[] = [
  // ── E / I 軸（外向 vs 内向）──────────────────────────────
  {
    id: 1,
    text: '会議やグループ作業では、積極的に発言する方だ',
    axis: 'EI',
    direction: 'E',
  },
  {
    id: 2,
    text: '初対面の人ともすぐに打ち解けて話せる',
    axis: 'EI',
    direction: 'E',
  },
  {
    id: 3,
    text: '人と関わったあとは充実感より疲労感を覚えることが多い',
    axis: 'EI',
    direction: 'I',
  },
  {
    id: 4,
    text: '大勢のパーティーより少人数でじっくり話す方が好きだ',
    axis: 'EI',
    direction: 'I',
  },
  {
    id: 5,
    text: 'チームで取り組む仕事は一人で進める仕事より楽しい',
    axis: 'EI',
    direction: 'E',
  },
  {
    id: 6,
    text: '考えをまとめるとき、誰かに話しながらの方が整理しやすい',
    axis: 'EI',
    direction: 'E',
  },
  {
    id: 7,
    text: '仕事の後はひとりで静かに過ごすことでエネルギーを回復する',
    axis: 'EI',
    direction: 'I',
  },
  {
    id: 8,
    text: '自分の意見を発信することに抵抗は少ない方だ',
    axis: 'EI',
    direction: 'E',
  },
  {
    id: 9,
    text: '深く関われる数少ない友人・同僚を大切にする方だ',
    axis: 'EI',
    direction: 'I',
  },
  {
    id: 10,
    text: '電話よりメールや文章でやり取りする方が気楽だ',
    axis: 'EI',
    direction: 'I',
  },

  // ── S / N 軸（感覚 vs 直感）──────────────────────────────
  {
    id: 11,
    text: '計画を立てるとき、具体的な手順や数字から考え始める',
    axis: 'SN',
    direction: 'S',
  },
  {
    id: 12,
    text: '実績や前例のある方法を優先する方だ',
    axis: 'SN',
    direction: 'S',
  },
  {
    id: 13,
    text: '「なぜそうなるのか」という背景や意味に強く興味を持つ',
    axis: 'SN',
    direction: 'N',
  },
  {
    id: 14,
    text: '将来のビジョンや可能性の話をしているとき最も生き生きする',
    axis: 'SN',
    direction: 'N',
  },
  {
    id: 15,
    text: '細かい事実やデータを丁寧に確認してから判断する',
    axis: 'SN',
    direction: 'S',
  },
  {
    id: 16,
    text: '直感やひらめきを信じて行動することがよくある',
    axis: 'SN',
    direction: 'N',
  },
  {
    id: 17,
    text: '目の前の現実的な問題に集中して取り組む方が得意だ',
    axis: 'SN',
    direction: 'S',
  },
  {
    id: 18,
    text: '複数の情報をつなげてパターンや意味を見つけるのが好きだ',
    axis: 'SN',
    direction: 'N',
  },
  {
    id: 19,
    text: '仕事では理論より経験から学ぶことの方が多い',
    axis: 'SN',
    direction: 'S',
  },
  {
    id: 20,
    text: '斬新なアイデアや新しい概念に惹かれる方だ',
    axis: 'SN',
    direction: 'N',
  },

  // ── T / F 軸（思考 vs 感情）──────────────────────────────
  {
    id: 21,
    text: '意思決定では、感情より論理や客観的な基準を重視する',
    axis: 'TF',
    direction: 'T',
  },
  {
    id: 22,
    text: '誰かを批判するとき、相手の感情より正確さを優先する',
    axis: 'TF',
    direction: 'T',
  },
  {
    id: 23,
    text: 'チームの雰囲気や人間関係の状態が気になって仕事に影響する',
    axis: 'TF',
    direction: 'F',
  },
  {
    id: 24,
    text: '誰かが困っているとつい手を差し伸べてしまう',
    axis: 'TF',
    direction: 'F',
  },
  {
    id: 25,
    text: '感情的になっている相手に対して冷静に対処できる',
    axis: 'TF',
    direction: 'T',
  },
  {
    id: 26,
    text: '仕事の成果より「人が喜んでくれること」にやりがいを感じる',
    axis: 'TF',
    direction: 'F',
  },
  {
    id: 27,
    text: '議論では感情論より筋道の通った理屈の方が説得力があると思う',
    axis: 'TF',
    direction: 'T',
  },
  {
    id: 28,
    text: '人の気持ちに共感することが自然とできる',
    axis: 'TF',
    direction: 'F',
  },
  {
    id: 29,
    text: '不公平・不合理なことに対して冷静に指摘できる',
    axis: 'TF',
    direction: 'T',
  },
  {
    id: 30,
    text: '誰かと対立するよりも和解や調和を選ぶことが多い',
    axis: 'TF',
    direction: 'F',
  },

  // ── J / P 軸（判断 vs 知覚）──────────────────────────────
  {
    id: 31,
    text: '仕事は期限より早めに終わらせるよう計画を立てる',
    axis: 'JP',
    direction: 'J',
  },
  {
    id: 32,
    text: 'デスクや作業環境は整理整頓されている方が仕事しやすい',
    axis: 'JP',
    direction: 'J',
  },
  {
    id: 33,
    text: '予定外の変更や割り込みがあってもうまく対応できる',
    axis: 'JP',
    direction: 'P',
  },
  {
    id: 34,
    text: '締め切りが近づくと集中力が増して効率よく動ける',
    axis: 'JP',
    direction: 'P',
  },
  {
    id: 35,
    text: '旅行や予定はあらかじめしっかり計画する方が好きだ',
    axis: 'JP',
    direction: 'J',
  },
  {
    id: 36,
    text: '選択肢をできるだけ多く持っておきたいと思う方だ',
    axis: 'JP',
    direction: 'P',
  },
  {
    id: 37,
    text: 'やることリストやスケジュール管理ツールを活用している',
    axis: 'JP',
    direction: 'J',
  },
  {
    id: 38,
    text: '決断を先延ばしにしてもっと情報を集めたいと感じることがある',
    axis: 'JP',
    direction: 'P',
  },
  {
    id: 39,
    text: '物事にはっきりとした結論を出すことで安心する',
    axis: 'JP',
    direction: 'J',
  },
  {
    id: 40,
    text: '決まったルーティンより毎日違うことをする方が好きだ',
    axis: 'JP',
    direction: 'P',
  },

  // ── A / T 軸（Assertive自信型 vs Turbulent激動型）────────
  {
    id: 41,
    text: '自分の判断に自信を持って行動できる方だ',
    axis: 'AT',
    direction: 'A',
  },
  {
    id: 42,
    text: '失敗しても引きずらず、すぐに次に切り替えられる',
    axis: 'AT',
    direction: 'A',
  },
  {
    id: 43,
    text: '他人の評価や視線が気になって行動をためらうことがある',
    axis: 'AT',
    direction: 'AT',
  },
  {
    id: 44,
    text: 'うまくいかないとき、自分を強く責めてしまう',
    axis: 'AT',
    direction: 'AT',
  },
  {
    id: 45,
    text: 'ストレスを感じても比較的早く元に戻れる方だ',
    axis: 'AT',
    direction: 'A',
  },
  {
    id: 46,
    text: '完璧でないと気が済まないことがよくある',
    axis: 'AT',
    direction: 'AT',
  },
  {
    id: 47,
    text: '自分の長所・強みをはっきり言葉にできる',
    axis: 'AT',
    direction: 'A',
  },
  {
    id: 48,
    text: 'ちょっとしたミスや批判が頭から離れないことがある',
    axis: 'AT',
    direction: 'AT',
  },
  {
    id: 49,
    text: '感情の波が少なく、安定した気持ちで過ごせている',
    axis: 'AT',
    direction: 'A',
  },
  {
    id: 50,
    text: '物事が順調でないとき不安や焦りを強く感じる方だ',
    axis: 'AT',
    direction: 'AT',
  },

  // ── 開花 / 抑圧 軸（職場で強みが活かされているか）────────
  {
    id: 51,
    text: '今の職場では自分の強みを発揮できていると感じる',
    axis: 'bloom',
    direction: 'bloom',
  },
  {
    id: 52,
    text: '仕事のやり方や裁量が自分に合っていると感じる',
    axis: 'bloom',
    direction: 'bloom',
  },
  {
    id: 53,
    text: '職場の人間関係や環境がストレスになっていることが多い',
    axis: 'bloom',
    direction: 'suppress',
  },
  {
    id: 54,
    text: '本来の自分を抑えて仕事をしていると感じることがある',
    axis: 'bloom',
    direction: 'suppress',
  },
  {
    id: 55,
    text: '上司や同僚から自分の能力を認められていると感じる',
    axis: 'bloom',
    direction: 'bloom',
  },
  {
    id: 56,
    text: '仕事でモチベーションを保つのが難しいと感じることが多い',
    axis: 'bloom',
    direction: 'suppress',
  },
  {
    id: 57,
    text: '職場で自分らしく行動できていると思う',
    axis: 'bloom',
    direction: 'bloom',
  },
  {
    id: 58,
    text: '自分の意見や提案が職場で通りにくいと感じる',
    axis: 'bloom',
    direction: 'suppress',
  },
  {
    id: 59,
    text: '仕事を通じて成長できていると感じている',
    axis: 'bloom',
    direction: 'bloom',
  },
  {
    id: 60,
    text: '職場の価値観や文化が自分に合っていないと感じることが多い',
    axis: 'bloom',
    direction: 'suppress',
  },
]

// ページ分割（10問ずつ6ページ）
export const QUESTIONS_PER_PAGE = 10
export const TOTAL_PAGES = 6
