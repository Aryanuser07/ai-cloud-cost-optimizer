from fastapi import APIRouter

router = APIRouter()

@router.get("/issues")
def get_security_issues():
    return [
        {
            "title": "Public S3 Bucket Detected",
            "severity": "Critical",
            "description": "S3 bucket is publicly accessible.",
            "recommendation": "Restrict public access and apply least-privilege IAM policies."
        },
        {
            "title": "Outdated Base Image",
            "severity": "High",
            "description": "Docker image uses outdated OS with known vulnerabilities.",
            "recommendation": "Update base image and rebuild container."
        }
    ]
