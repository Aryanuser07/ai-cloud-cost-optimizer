from pydantic import BaseModel
from typing import Optional, List


class DashboardMetrics(BaseModel):
    monthly_cost: float
    idle_resources: int
    potential_savings: float


class Insight(BaseModel):
    title: str
    severity: str
    description: str
    recommendation: str


class SecurityIssue(BaseModel):
    title: str
    severity: str
    description: str
    recommendation: str


class SecuritySummary(BaseModel):
    critical: int
    high: int
    medium: int
    issues: List[SecurityIssue]
