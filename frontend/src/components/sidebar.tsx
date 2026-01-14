import Link from "next/link"
import { LayoutDashboard, Brain, Shield } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4">
      <h1 className="mb-8 text-xl font-bold">
        FinOps<span className="text-primary">AI</span>
      </h1>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/ai-insights"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <Brain size={18} />
          AI Insights
        </Link>

        <Link
          href="/security"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          <Shield size={18} />
          Security
        </Link>
      </nav>
    </aside>
  )
}
