"use client"

import { useEffect, useState } from "react"
import MetricCard from "@/components/metric-card"
import CostChart from "@/components/charts/cost-chart"
import { fetchDashboardMetrics } from "@/lib/api"

export default function DashboardPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetchDashboardMetrics().then(setData).catch(console.error)
  }, [])

  if (!data) return <p>Loading dashboard...</p>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Cloud Cost Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Monthly Cost" value={`$${data.monthly_cost}`} />
        <MetricCard title="Idle Resources" value={String(data.idle_resources)} />
        <MetricCard title="Potential Savings" value={`$${data.potential_savings}`} />
      </div>

      <div className="border rounded-lg p-6">
        <CostChart />
      </div>
    </div>
  )
}
