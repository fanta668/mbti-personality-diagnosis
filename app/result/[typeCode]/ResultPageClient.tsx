"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { AnimatedRadarChart } from "@/components/animated-radar-chart"
import { AnimatedScoreBar } from "@/components/animated-score-bar"
import { PersonalityCard } from "@/components/personality-card"
import { ContentSection, JobItem, AdviceList } from "@/components/content-section"
import { ShareCard } from "@/components/share-card"
import { DynamicBackground } from "@/components/dynamic-background"
import { getBackgroundConfig } from "@/components/background-config"
import { getPersonalityData } from "@/data/personality-data"
import { Card } from "@/components/ui/card"

export default function ResultPageClient() {
  const params = useParams()

  // URLは /result/ISFJ-T_開花型 の形式
  const raw = decodeURIComponent(params.typeCode as string)
  const [typeCode, subType] = raw.split('_')

  const data = getPersonalityData(typeCode, subType)

  // データが見つからない場合
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-500 mb-2">タイプが見つかりません</p>
          <p className="text-gray-400 text-sm">{typeCode} / {subType}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <DynamicBackground
        config={getBackgroundConfig(data.typeCode, data.subType)}
        typeCode={data.typeCode}
      />

      <main className="relative z-10">
        <PersonalityCard
          typeName={data.typeName}
          typeCode={data.typeCode}
          subType={data.subType}
          rarity={data.rarity}
          subtitle={data.subtitle}
          catchphrase={data.catchphrase}
        />

        <div className="max-w-3xl mx-auto px-4 pb-12 -mt-4">

          {/* スコア分析 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <Card className="bg-card border-border/50 p-5 md:p-6 shadow-sm rounded-2xl">
              <div className="grid md:grid-cols-[200px_1fr] gap-6 items-center">
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    4軸スコア分析
                  </p>
                  <AnimatedRadarChart data={data.radarData} />
                </div>
                <div className="space-y-4">
                  {data.scoreData.map((score, index) => (
                    <AnimatedScoreBar
                      key={score.label}
                      label={score.label}
                      description={score.description}
                      value={score.value}
                      color={score.color}
                      delay={0.3 + index * 0.1}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.section>

          {/* シェア */}
          <section className="mb-4">
            <ShareCard
              typeName={data.typeName}
              typeCode={data.typeCode}
              subType={data.subType}
              rarity={data.rarity}
              catchphrase={data.catchphrase}
            />
          </section>

          {/* 他者からの見られ方 */}
          <section className="mb-4">
            <ContentSection
              label="他者からの見られ方"
              title={data.perceptionTitle}
              accentColor="bg-teal"
              delay={0}
            >
              {data.perception.map((p, i) => <p key={i}>{p}</p>)}
            </ContentSection>
          </section>

          {/* 強み・弱み */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">強み・弱み</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <section className="grid md:grid-cols-2 gap-4 mb-4">
            <ContentSection
              label="職場での強み"
              title={data.strengthTitle}
              accentColor="bg-green"
              delay={0}
            >
              {data.strengths.map((p, i) => <p key={i}>{p}</p>)}
            </ContentSection>
            <ContentSection
              label="職場での弱み"
              title={data.weaknessTitle}
              accentColor="bg-amber"
              delay={0.1}
            >
              {data.weaknesses.map((p, i) => <p key={i}>{p}</p>)}
            </ContentSection>
          </section>

          {/* 開花・抑圧の状態 */}
          <section className="mb-4">
            <ContentSection
              label="開花・抑圧の状態"
              title={data.bloomTitle}
              accentColor={data.subType === '開花型' ? 'bg-green' : 'bg-amber'}
              delay={0}
              badge={{ text: `現在：${data.subType}`, variant: data.subType === '開花型' ? 'bloom' : 'suppress' }}
            >
              {data.bloomState.map((p, i) => <p key={i}>{p}</p>)}
            </ContentSection>
          </section>

          {/* キャリア */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">キャリア診断</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 向いている職業 */}
          <section className="mb-4">
            <ContentSection
              label="向いている職業"
              title={data.jobTitle}
              accentColor="bg-blue"
              delay={0}
            >
              <div>
                {data.jobs.map((job, i) => (
                  <JobItem key={i} name={job.name} reason={job.reason} />
                ))}
              </div>
            </ContentSection>
          </section>

          {/* 意外な適職 */}
          <section className="mb-4">
            <ContentSection
              label="意外な適職"
              title={data.surpriseJobTitle}
              accentColor="bg-purple"
              delay={0}
            >
              <div>
                {data.surpriseJobs.map((job, i) => (
                  <JobItem key={i} name={job.name} reason={job.reason} isSurprise />
                ))}
              </div>
            </ContentSection>
          </section>

          {/* 改善アドバイス */}
          <section className="mb-4">
            <ContentSection
              label="改善アドバイス"
              title={data.adviceTitle}
              accentColor="bg-teal"
              delay={0}
            >
              <AdviceList items={data.advice} />
            </ContentSection>
          </section>

          {/* フッター */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-6 pb-2"
          >
            <p className="text-muted-foreground/60 text-[11.5px] leading-relaxed">
              本診断は娯楽・自己啓発を目的としたものです。医療・心理的な診断ではありません。
              <br />
              結果はあくまで参考としてご活用ください。
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  )
}
