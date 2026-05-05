"use client"

import { motion } from "framer-motion"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

interface RadarData {
  axis: string
  value: number
  fullMark: number
}

interface AnimatedRadarChartProps {
  data: RadarData[]
}

export function AnimatedRadarChart({ data }: AnimatedRadarChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[220px] relative"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid 
            stroke="rgba(0,0,0,0.08)" 
            strokeWidth={1}
          />
          <PolarAngleAxis 
            dataKey="axis" 
            tick={{ 
              fill: "oklch(0.45 0.02 60)", 
              fontSize: 11,
              fontWeight: 500 
            }}
            tickLine={false}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            tick={false}
            axisLine={false}
          />
          <Radar
            name="スコア"
            dataKey="value"
            stroke="oklch(0.60 0.15 165)"
            strokeWidth={2}
            fill="oklch(0.60 0.15 165)"
            fillOpacity={0.2}
            dot={{
              r: 4,
              fill: "oklch(0.60 0.15 165)",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
