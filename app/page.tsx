"use client"

import { motion } from "framer-motion"
import { AnimatedRadarChart } from "@/components/animated-radar-chart"
import { AnimatedScoreBar } from "@/components/animated-score-bar"
import { PersonalityCard } from "@/components/personality-card"
import { ContentSection, JobItem, AdviceList } from "@/components/content-section"
import { ShareCard } from "@/components/share-card"
import { DynamicBackground } from "@/components/dynamic-background"
import { getBackgroundConfig } from "@/components/background-config"
import { Card } from "@/components/ui/card"

// Sample data - In a real app, this would come from props or API
const personalityData = {
  typeName: "守護者",
  typeCode: "ISFJ-T",
  subType: "開花型",
  rarity: "2.8%",
  subtitle: "Warm Guardian — 静かな献身で、チームを内側から支える存在",
  catchphrase: "あなたがいるから、この場所は安心できる。",
}

const radarData = [
  { axis: "内面度", value: 78, fullMark: 100 },
  { axis: "実行力", value: 84, fullMark: 100 },
  { axis: "信頼度", value: 82, fullMark: 100 },
  { axis: "開花度", value: 88, fullMark: 100 },
]

const scoreData = [
  { label: "内面度", description: "感情・価値観の理解とコントロール", value: 78, color: "oklch(0.55 0.18 290)" },
  { label: "実行力", description: "確実な行動と成果への直結度", value: 84, color: "oklch(0.60 0.15 165)" },
  { label: "信頼度", description: "他者から頼りにされる程度", value: 82, color: "oklch(0.50 0.15 250)" },
  { label: "開花度", description: "本来の自分の発揮度・総合結果", value: 88, color: "oklch(0.55 0.15 140)" },
]

const adviceItems = [
  "自分の貢献を言語化する習慣をつける。週に一度、「今週自分がチームに与えた価値」を書き出すと評価面談での説得力が劇的に上がります。",
  "「断る練習」を小さなところから始める。「今週は難しいですが来週ならできます」という言い方は、関係を壊さず自分を守る最初の一歩です。",
  "感謝を受け取ることに慣れる。褒められたとき「たいしたことないです」と返すのをやめ、「ありがとうございます」で終わらせてみてください。",
  "影響力を広げるために、自分の意見を「提案」という形で出す練習をする。「こうするとよくなるかもしれません」という柔らかい表現から始めると自分らしく発言できます。",
  "エネルギーの総量を管理する。消耗のサインは行動より感情に先に出ます。小さなイライラや空虚感を見逃さないでください。",
  "中長期のキャリア目標を持つ。縁の下の力持ちで終わらず、その能力をリーダーシップやマネジメントに活かす道も十分に開かれています。",
]

export default function MBTIResultPage() {
  return (
    <div className="min-h-screen relative">
      {/* Type-specific dynamic background */}
      <DynamicBackground
        config={getBackgroundConfig(personalityData.typeCode, personalityData.subType)}
        typeCode={personalityData.typeCode}
      />

      <main className="relative z-10">
        {/* Hero - Personality Card */}
        <PersonalityCard
          typeName={personalityData.typeName}
          typeCode={personalityData.typeCode}
          subType={personalityData.subType}
          rarity={personalityData.rarity}
          subtitle={personalityData.subtitle}
          catchphrase={personalityData.catchphrase}
        />

        <div className="max-w-3xl mx-auto px-4 pb-12 -mt-4">
          {/* Analysis Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <Card className="bg-card border-border/50 p-5 md:p-6 shadow-sm rounded-2xl">
              <div className="grid md:grid-cols-[200px_1fr] gap-6 items-center">
                {/* Radar Chart */}
                <div className="flex flex-col items-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    4軸スコア分析
                  </p>
                  <AnimatedRadarChart data={radarData} />
                </div>
                
                {/* Score Bars */}
                <div className="space-y-4">
                  {scoreData.map((score, index) => (
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

          {/* Share Section */}
          <section className="mb-4">
            <ShareCard
              typeName={personalityData.typeName}
              typeCode={personalityData.typeCode}
              subType={personalityData.subType}
              rarity={personalityData.rarity}
              catchphrase={personalityData.catchphrase}
            />
          </section>

          {/* 他者からの見られ方 */}
          <section className="mb-4">
            <ContentSection
              label="他者からの見られ方"
              title="「頼れる縁の下の力持ち」として認識されている"
              accentColor="bg-teal"
              delay={0}
            >
              <p>あなたは職場において、派手な存在感こそないものの、確実に「いてくれてよかった」と思われるタイプです。誰かが困っているとき、言わなくても気づいて動いている。そのさりげない配慮が、チームの中で静かな信頼として積み上がっています。</p>
              <p>上司からは「細かいことを任せられる人」として評価されており、同僚からは「話しやすい・相談しやすい」という印象を持たれています。特に新人や立場の弱いメンバーからは、無意識に頼りにされることが多く、あなたの存在がチームの心理的安全性を底上げしています。</p>
              <p>ただし、その献身的な姿勢が当たり前とみなされてしまうこともあります。「いて当然の人」と思われるリスクを持っているため、自分の貢献を適切に可視化することが重要です。あなたの働きは、決して「当たり前」ではありません。</p>
            </ContentSection>
          </section>

          {/* 強み・弱みセクションの区切り */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">強み・弱み</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 強み・弱み Grid */}
          <section className="grid md:grid-cols-2 gap-4 mb-4">
            <ContentSection
              label="職場での強み"
              title="細部への気配りと継続力"
              accentColor="bg-green"
              delay={0}
            >
              <p>タスクの抜け漏れを防ぐ観察眼と、約束を守り続ける誠実さが最大の武器です。チームが見落としがちな「小さな問題」を先回りしてつぶす力があります。</p>
              <p>感情的にぶれにくい安定感も強みで、混乱した状況でも冷静にサポートに回れます。一度関係を築いた人への継続的なサポートは群を抜いており、長期的信頼の構築において他の追随を許しません。</p>
            </ContentSection>
            <ContentSection
              label="職場での弱み"
              title="自己主張の薄さと抱え込み癖"
              accentColor="bg-amber"
              delay={0.1}
            >
              <p>自分の意見や成果を前に出すことへの抵抗感が強く、評価の場面で損をしやすい傾向があります。頼まれると断れない性質から、キャパオーバーに気づかず抱え込んでしまうリスクがあります。</p>
              <p>変化への適応にも時間がかかる傾向があり、急な方針転換や新しい環境への順応は得意ではありません。</p>
            </ContentSection>
          </section>

          {/* 開花・抑圧の状態 */}
          <section className="mb-4">
            <ContentSection
              label="開花・抑圧の状態"
              title="あなたの本来の力が、今この環境で正しく発揮されています"
              accentColor="bg-green"
              delay={0}
              badge={{ text: "現在：開花型", variant: "bloom" }}
            >
              <p>開花型のISFJ-Tは、自分の献身的な性質が「消耗」ではなく「充実」として感じられている状態です。誰かの役に立っていることが自分のエネルギー源になっており、チームへの貢献が喜びと直結しています。</p>
              <p>今のあなたは、他者のためにという動機が健全な形で機能しており、自然体で場に溶け込めています。「疲れているけど、なぜか嫌じゃない」という感覚があるなら、それが開花のサインです。</p>
              <p>この状態を維持するために最も重要なのは、「自分を守る境界線」を意識し続けることです。開花型であっても境界線が崩れると急速に抑圧型へ転落するリスクがあります。今の充実感を長く保つために、意図的に休む勇気を持ってください。</p>
            </ContentSection>
          </section>

          {/* キャリア診断の区切り */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">キャリア診断</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 向いている職業 */}
          <section className="mb-4">
            <ContentSection
              label="向いている職業"
              title="あなたの強みが自然に活きる仕事"
              accentColor="bg-blue"
              delay={0}
            >
              <div>
                <JobItem 
                  name="医療・看護師" 
                  reason="細やかな観察力と献身性が直接患者の安心につながる職種。「気づいて動く」という行動パターンが、医療現場では命を守る力に変わります。" 
                />
                <JobItem 
                  name="人事・労務" 
                  reason="社員一人ひとりの状態に気を配りながら、正確な業務管理を両立できる強みが直結します。制度の裏側で人を支える役割はあなたにとって天職に近いです。" 
                />
                <JobItem 
                  name="カスタマーサポート" 
                  reason="共感力と丁寧な対応で顧客満足度を自然に高められます。感情的な顧客を落ち着かせる場面でも、あなたの安定感が最大の武器になります。" 
                />
                <JobItem 
                  name="教育・保育" 
                  reason="相手の状態を察知して寄り添う力が、子どもや学習者との信頼関係の土台になります。長期的に関わることで真価を発揮するタイプの仕事です。" 
                />
              </div>
            </ContentSection>
          </section>

          {/* 意外な適職 */}
          <section className="mb-4">
            <ContentSection
              label="意外な適職"
              title="向いていないと思っていても、実は力を発揮しやすい仕事"
              accentColor="bg-purple"
              delay={0}
            >
              <div>
                <JobItem 
                  name="プロジェクトマネージャー" 
                  reason="リーダー気質がないと思いがちですが、細部管理・スケジュール遵守・メンバーへの気配りはPMの核心スキルそのものです。声が大きいだけがリーダーではありません。" 
                  isSurprise
                />
                <JobItem 
                  name="品質管理・QA" 
                  reason="見落としを防ぐ観察眼と妥協しない誠実さは競合他者が真似できない強みです。製品・サービスの品質を守る最後の砦として活躍できます。" 
                  isSurprise
                />
                <JobItem 
                  name="社内SE・情報システム" 
                  reason="社員の困りごとに寄り添う姿勢が、技術力以上の信頼を生む職種です。「あの人に聞けば解決する」という存在になれる素地がISFJ-Tには自然に備わっています。" 
                  isSurprise
                />
                <JobItem 
                  name="コンプライアンス・内部監査" 
                  reason="ルールを守ることへの誠実さと、場の空気を読みながら指摘できる繊細さが両立して初めて機能する職種。信頼ベースで組織を正せる稀有な人材になれます。" 
                  isSurprise
                />
              </div>
            </ContentSection>
          </section>

          {/* 改善アドバイス */}
          <section className="mb-4">
            <ContentSection
              label="改善アドバイス"
              title="開花状態をさらに高め、キャリアに活かすために"
              accentColor="bg-teal"
              delay={0}
            >
              <AdviceList items={adviceItems} />
            </ContentSection>
          </section>

          {/* Footer / Disclaimer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center pt-6 pb-2"
          >
            <p className="text-muted-foreground/60 text-[11.5px] leading-relaxed">
              本診断は娯楽・自己啓発を目的としたものです。医療・心理的な診断で���ありません。
              <br />
              結果はあくまで参考としてご活用ください。
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  )
}
