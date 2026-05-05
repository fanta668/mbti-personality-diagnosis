import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '職場パーソナリティ診断のプライバシーポリシーページです。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* ヘッダー */}
        <div className="mb-10">
          <Link href="/" className="text-indigo-500 text-sm hover:underline">
            ← トップへ戻る
          </Link>
          <h1 className="text-2xl font-bold text-slate-800 mt-4">
            プライバシーポリシー
          </h1>
          <p className="text-slate-500 text-sm mt-1">最終更新日：2026年5月</p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">基本方針</h2>
            <p>
              本サイト「職場パーソナリティ診断」（以下「当サイト」）は、ユーザーの個人情報の保護を重要と考え、適切な管理・取り扱いに努めます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">収集する情報</h2>
            <p>
              当サイトでは、診断の回答データは一切サーバーに保存しません。回答はお使いのブラウザ上のみで処理され、外部に送信されることはありません。
            </p>
            <p className="mt-2">
              ただし、アクセス解析・広告配信のために以下の情報が自動的に収集される場合があります。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>IPアドレス</li>
              <li>ブラウザの種類・バージョン</li>
              <li>アクセスしたページのURL</li>
              <li>アクセス日時</li>
              <li>Cookie情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">Cookieの使用について</h2>
            <p>
              当サイトでは、アクセス解析および広告配信の目的でCookieを使用しています。Cookieとは、ウェブサイトがお使いのブラウザに保存する小さなテキストファイルです。
            </p>
            <p className="mt-2">
              ブラウザの設定からCookieを無効にすることができますが、一部の機能が正常に動作しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">広告配信について（Google AdSense）</h2>
            <p>
              当サイトでは、Google LLC が提供する広告配信サービス「Google AdSense」を利用する場合があります。Google AdSenseは、ユーザーの興味・関心に基づいた広告を表示するためにCookieを使用します。
            </p>
            <p className="mt-2">
              Googleによる広告Cookieの使用は、
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline mx-1"
              >
                Googleの広告に関するポリシー
              </a>
              に準じています。広告のパーソナライズを無効にしたい場合は、
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline mx-1"
              >
                広告設定ページ
              </a>
              からオプトアウトできます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">アクセス解析について</h2>
            <p>
              当サイトでは、サービス改善のためにVercel Analyticsを利用しています。収集されたデータは匿名化されており、個人を特定する情報は含まれません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">免責事項</h2>
            <p>
              本診断は娯楽・自己啓発を目的としたものであり、医療的・心理的な診断ではありません。診断結果はあくまで参考としてご活用ください。当サイトの利用によって生じた損害について、運営者は一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">プライバシーポリシーの変更</h2>
            <p>
              本ポリシーは、必要に応じて予告なく変更する場合があります。変更後のポリシーは本ページに掲載した時点で効力を発するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">お問い合わせ</h2>
            <p>
              本ポリシーに関するお問い合わせは、X（旧Twitter）のDMにてご連絡ください。
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <Link href="/" className="text-indigo-500 hover:underline text-sm">
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
