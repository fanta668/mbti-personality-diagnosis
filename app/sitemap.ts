import type { MetadataRoute } from 'next'

const siteUrl = 'https://mbti-personality-diagnosis.vercel.app'

const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ',
]
const VARIANTS = ['-A', '-T']
const SUBTYPES = ['bloom', 'suppress']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // 64タイプ分の結果ページ（例: /result/ISFJ-T_bloom）
  const resultPages: MetadataRoute.Sitemap = []
  for (const mbti of MBTI_TYPES) {
    for (const variant of VARIANTS) {
      for (const subtype of SUBTYPES) {
        const typeCode = `${mbti}${variant}`
        resultPages.push({
          url: `${siteUrl}/result/${typeCode}_${subtype}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      }
    }
  }

  return [...staticPages, ...resultPages]
}
