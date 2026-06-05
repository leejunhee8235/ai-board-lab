from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "JungleLog"
    database_url: str = "postgresql+psycopg://junglelog:junglelog@localhost:5432/junglelog"
    openai_api_key: str | None = None

    class Config:
        env_file = ".env"


settings = Settings()

