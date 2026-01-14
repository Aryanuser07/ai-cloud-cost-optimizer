"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

type Severity = "Critical" | "High" | "Medium"

const severityVariant: Record<
  Severity,
  "destructive" | "secondary" | "outline"
> = {
  Critical: "destructive",
  High: "secondary",
  Medium: "outline",
}

export default function SecurityIssueCard({
  title,
  severity,
  description,
  recommendation,
}: {
  title: string
  severity: Severity
  description: string
  recommendation: string
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <Badge variant={severityVariant[severity]}>{severity}</Badge>
          </div>

          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="rounded-md bg-muted p-3 text-sm">
            <span className="font-medium">AI Recommendation: </span>
            {recommendation}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
