# 職場パーソナリティ診断（旧サイト）

MBTIをベースにした職場特化のパーソナリティ診断サイト。
16タイプ × A/T（自信型/慎重型） × 開花型/抑圧型 = **64タイプ** で診断結果を表示する。

- 技術: Next.js (App Router) / React / TypeScript / Tailwind CSS / framer-motion / recharts
- 起動: `pnpm install` → `pnpm dev`（ビルドは `pnpm build`）

## 画面と流れ

```
/            トップページ（診断への導入）
/quiz        診断ページ（60問 = 10問 × 6ページ、リッカート5段階）
/result/[typeCode]   結果ページ（例: /result/ISFJ-T_bloom）
/privacy     プライバシーポリシー
```

1. `/quiz` で回答 → `lib/calcType.ts` の `calcTypeCode()` がタイプを判定
2. `?p=` に6軸の実測スコアを付けて `/result/ISFJ-T_bloom?p=35-60-28-71-44-65` へ遷移
3. 結果ページはスコアをチャート表示。`?p=` がないURL（シェアされたリンク）はタイプ標準値を表示

回答は localStorage（キー: `wpq_quiz_progress_v1`）に自動保存され、
リロードしても続きから再開できる。診断完了時に自動クリア。

## フォルダ構成

```
app/                    ページ本体（App Router）
  layout.tsx            共通レイアウト・サイト全体のメタデータ・Analytics/AdSense
  page.tsx              トップ
  quiz/page.tsx         診断（進捗バー・戻るボタン・途中保存）
  result/[typeCode]/
    page.tsx            サーバー側。タイプ別OGPを generateMetadata で生成
    ResultPageClient.tsx 結果画面の本体（クライアント側）
  robots.ts / sitemap.ts SEO用

components/             結果ページ用の表示部品
  animated-radar-chart  レーダーチャート（recharts）
  animated-score-bar    スコアバー
  personality-card      結果ヘッダーのタイプカード
  content-section       強み/弱み等のセクション枠
  share-card            X共有・テキストコピー
  dynamic-background / background-config  タイプ別の背景演出
  ui/                   shadcn/ui（使用中の button / card のみ）

data/                   診断コンテンツ（64タイプ分すべて実データ）
  questions.ts          60問の質問定義（軸・方向つき）
  types.ts              共通型定義（PersonalityData）
  types-sj.ts / -nt.ts / -nf.ts / -sp.ts  気質グループ別のタイプデータ
  personality-data.ts   タイプデータの集約と getPersonalityData()

lib/
  calcType.ts           判定ロジック（軸スコア計算・typeCode算出・6軸%のURLエンコード）
  utils.ts              cn() ユーティリティ

public/                 アイコン・OGP画像（og-image-v2.png が現行）
```

## 免責

本診断は娯楽・自己啓発目的であり、医療・心理的な診断ではない旨を
トップ・結果・プライバシーの3箇所に明記している。
