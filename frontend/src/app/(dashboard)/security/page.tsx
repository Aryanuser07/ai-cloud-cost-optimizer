"use client"

import { useEffect, useState } from "react"
import { Shield } from "lucide-react"
import SecurityMetricCard from "@/components/security-metric-card"
import SecurityIssueCard from "@/components/security-issue-card"
import { fetchSecurityIssues } from "@/lib/api"

export default function SecurityPage() {
  const [issues, setIssues] = useState<any[]>([])

  useEffect(() => {
    fetchSecurityIssues().then((res) => setIssues(res.issues || res))
  }, [])

  const critical = issues.filter((i) => i.severity === "Critical").length
  const high = issues.filter((i) => i.severity === "High").length
  const medium = issues.filter((i) => i.severity === "Medium").length

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Shield className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Security & DevSecOps</h1>
      </div>

      <p className="text-sm text-muted-foreground max-w-2xl">
        Security risks detected during CI/CD, container scanning, and
        infrastructure analysis.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SecurityMetricCard
          title="Critical Issues"
          value={String(critical)}
          description="Immediate action required"
        />
        <SecurityMetricCard
          title="High Severity"
          value={String(high)}
          description="Fix before next release"
        />
        <SecurityMetricCard
          title="Medium Severity"
          value={String(medium)}
          description="Monitor and plan remediation"
        />
      </div>

      {/* Issues */}
      {issues.length === 0 ? (
        <p>Loading security issues...</p>
      ) : (
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <SecurityIssueCard
              key={index}
              title={issue.title}
              severity={issue.severity}
              description={issue.description}
              recommendation={issue.recommendation}
            />
          ))}
        </div>
      )}
    </div>
  )
}
