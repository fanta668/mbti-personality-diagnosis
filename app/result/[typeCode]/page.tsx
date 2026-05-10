// サーバーコンポーネント — generateMetadata で動的OGPを生成
import type { Metadata } from 'next'
import { getPersonalityData } from '@/data/personality-data'
import ResultPageClient from './ResultPageClient'

interface Props {
  params: Promise<{ typeCode: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { typeCode: rawParam } = await params
  const raw = decodeURIComponent(rawParam)
  const [typeCode, subTypeSlug] = raw.split('_')
  // 英語スラグ → 日本語表示名に変換（getPersonalityData のキーに合わせる）
  const subType = subTypeSlug === 'bloom' ? '開花型' : subTypeSlug === 'suppress' ? '抑圧型' : subTypeSlug
  const data = getPersonalityData(typeCode, subType)

  if (!data) {
    return {
      title: '職場パーソナリティ診断',
      description: 'MBTIをベースに、あなたの職場での強み・弱み・向いている仕事を64タイプで診断します。',
    }
  }

  const title = `あなたのタイプは「${data.typeName}」— 職場パーソナリティ診断`
  const description = `${data.typeCode}（${data.subType}）: ${data.catchphrase} 全体の${data.rarity}の希少タイプ。あなたの強み・弱み・向いている職業を詳しく解説。`
  const siteUrl = 'https://mbti-personality-diagnosis.vercel.app'
  const pageUrl = `${siteUrl}/result/${encodeURIComponent(raw)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: '職場パーソナリティ診断',
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: `${siteUrl}/og-image-v2.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@64types_mbti',
      images: [`${siteUrl}/og-image-v2.png`],
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export default function ResultPage() {
  return <ResultPageClient />
}
