from datetime import datetime, timedelta, timezone


def create_access_token(subject: str, expires_minutes: int = 60) -> dict[str, str]:
    expires_at = datetime.now(timezone.utc) + timedelta(minutes=expires_minutes)
    return {"sub": subject, "expires_at": expires_at.isoformat()}

