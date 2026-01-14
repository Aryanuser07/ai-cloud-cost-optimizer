from fastapi import APIRouter

router = APIRouter()

@router.get("/metrics")
def get_dashboard_metrics():
    return {
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
