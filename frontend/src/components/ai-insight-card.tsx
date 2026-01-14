"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

type Severity = "High" | "Medium" | "Low"

const severityColor: Record<
  Severity,
  "destructive" | "secondary" | "outline"
> = {
  High: "destructive",
  Medium: "secondary",
  Low: "outline",
}

interface AIInsightCardProps {
  title: string
  severity: Severity
  description: string
  recommendation: string
}

export default function AIInsightCard({
  title,
  severity,
  description,
  recommendation,
}: AIInsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <Badge variant={severityColor[severity]}>
              {severity} Impact
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          <div className="rounded-md bg-muted p-3 text-sm">
            <span className="font-medium">AI Recommendation: </span>
            {recommendation}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
