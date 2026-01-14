def get_insights():
    # Placeholder static insights - replace with real analysis pipeline
    return [
        {
            "title": "Idle EC2 Instance Detected",
            "severity": "High",
            "description": "EC2 instance has <10% CPU over 7d.",
            "recommendation": "Resize or schedule shutdown during off-hours.",
        },
        {
            "title": "Over-Provisioned Storage",
            "severity": "Medium",
            "description": "EBS volumes show minimal activity.",
            "recommendation": "Archive or delete unused volumes.",
        },
    ]
