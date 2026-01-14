from fastapi import APIRouter
from app.ai.engine import generate_ai_insights

router = APIRouter()

@router.get("/insights")
def get_ai_insights():
    metrics = {
        "monthly_cost": 260,
        "idle_resources": 3,
        "potential_savings": 72,
        "trend": [
            {"month": "Aug", "cost": 120},
            {"month": "Sep", "cost": 150},
            {"month": "Oct", "cost": 210},
            {"month": "Nov", "cost": 180},
            {"month": "Dec", "cost": 260},
        ]
    }

    insights, context = generate_ai_insights(metrics)

    return {
        "insights": insights,
        "context": context
    }
