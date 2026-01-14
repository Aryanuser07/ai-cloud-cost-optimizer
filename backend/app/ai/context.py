def build_context(metrics: dict, issues: list):
    context = {
        "summary": {
            "monthly_cost": metrics["monthly_cost"],
            "idle_resources": metrics["idle_resources"],
            "potential_savings": metrics["potential_savings"]
        },
        "issues_detected": issues
    }

    return context
