def analyze_cost_metrics(metrics: dict):
    issues = []

    # Rule 1: Underutilized compute
    if metrics["monthly_cost"] > 200 and metrics["idle_resources"] > 0:
        issues.append({
            "type": "Underutilized Resources",
            "severity": "High",
            "reason": "Resources are running but not fully utilized."
        })

    # Rule 2: Rising cost trend
    trend = metrics.get("trend", [])
    if len(trend) >= 3 and trend[-1]["cost"] > trend[-2]["cost"]:
        issues.append({
            "type": "Cost Spike Detected",
            "severity": "Medium",
            "reason": "Monthly cloud cost is increasing."
        })

    return issues
