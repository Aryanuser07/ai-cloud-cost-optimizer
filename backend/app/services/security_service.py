def get_security_summary():
    # Placeholder security findings
    return {
        "critical": 1,
        "high": 2,
        "medium": 4,
        "issues": [
            {
                "title": "Public S3 Bucket Detected",
                "severity": "Critical",
                "description": "S3 bucket publicly accessible.",
                "recommendation": "Restrict public access and tighten IAM policies.",
            },
        ],
    }
