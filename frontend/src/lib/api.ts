const API_BASE = "http://127.0.0.1:8000"

export async function fetchDashboardMetrics() {
  const res = await fetch(`${API_BASE}/api/dashboard/metrics`)
  if (!res.ok) throw new Error("Failed to fetch dashboard metrics")
  return res.json()
}

export async function fetchAIInsights() {
  const res = await fetch(`${API_BASE}/api/ai/insights`)
  if (!res.ok) throw new Error("Failed to fetch AI insights")
  return res.json()
}

export async function fetchSecurityIssues() {
  const res = await fetch(`${API_BASE}/api/security/issues`)
  if (!res.ok) throw new Error("Failed to fetch security issues")
  return res.json()
}
