"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface MetricCardProps {
  title: string
  value: string
  description?: string
}

export default function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="cursor-pointer">
        <CardContent className="p-5 space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
