"use client"

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Aug", cost: 120 },
  { month: "Sep", cost: 150 },
  { month: "Oct", cost: 210 },
  { month: "Nov", cost: 180 },
  { month: "Dec", cost: 260 },
]

export default function CostChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="cost"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
