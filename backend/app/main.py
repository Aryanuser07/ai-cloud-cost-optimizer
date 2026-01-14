from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import dashboard, ai_insights, security

app = FastAPI(
    title="FinOpsAI Backend",
    description="Backend APIs for AI-Powered Cloud Cost Optimizer",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard.router, prefix="/api/dashboard", tags=["Dashboard"])
app.include_router(ai_insights.router, prefix="/api/ai", tags=["AI Insights"])
app.include_router(security.router, prefix="/api/security", tags=["Security"])

@app.get("/")
def root():
    return {"status": "Backend running"}
