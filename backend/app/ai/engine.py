from app.ai.rules import analyze_cost_metrics
from app.ai.context import build_context

def generate_ai_insights(metrics: dict):
    issues = analyze_cost_metrics(metrics)
    context = build_context(metrics, issues)

    insights = []

    for issue in issues:
        insights.append({
            "title": issue["type"],
            "severity": issue["severity"],
            "description": issue["reason"],
            "recommendation": "Review resource usage and optimize configuration."
        })

    return insights, context
