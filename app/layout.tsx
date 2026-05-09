import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const siteUrl = 'https://mbti-personality-diagnosis.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '職場パーソナリティ診断 — 64タイプで本当の自分を知ろう',
    template: '%s | 職場パーソナリティ診断',
  },
  description:
    'MBTIをベースに、あなたの職場での強み・弱み・向いている仕事を64タイプで徹底分析。「開花型」か「抑圧型」かもわかる、職場特化のパーソナリティ診断。無料・登録不要。',
  keywords: ['MBTI', '性格診断', '職場', '適職', 'パーソナリティ', '無料診断', '開花型', '抑圧型'],
  openGraph: {
    title: '職場パーソナリティ診断 — 64タイプで本当の自分を知ろう',
    description:
      'MBTIをベースに、あなたの職場での強み・弱み・向いている仕事を64タイプで分析。無料・登録不要で約5分で完了。',
    url: siteUrl,
    siteName: '職場パーソナリティ診断',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: '職場パーソナリティ診断 — 64タイプで本当の自分を知ろう',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '職場パーソナリティ診断 — 64タイプで本当の自分を知ろう',
    description:
      'MBTIをベースに職場での強み・弱み・適職を診断。開花型か抑圧型かもわかる。無料・約5分。',
    site: '@ShanTai45129',
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'PoakqXd4-MKZw2ZpgyixkQEBvHkprsYu_mTmEqPpznI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" style={{ backgroundColor: '#fafcfc' }}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3784046816126575"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased" style={{ backgroundColor: '#fafcfc' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
