# JungleLog

React, FastAPI, PostgreSQL 기반의 게시판에 AI 응용 기능을 결합하는 프로젝트입니다.

## 프로젝트 개요

JungleLog는 크래프톤 정글 학습 기록, 트러블슈팅, 프로젝트 회고, 포트폴리오 자료를 관리하기 위한 AI 게시판입니다.

첫 번째 목표는 AI 기능 없이 기본 게시판 기능을 안정적으로 구현하는 것입니다.

- 회원가입 / 로그인
- 게시글 CRUD
- 댓글
- 태그
- 페이징
- 검색

게시판 기반이 안정화된 뒤에는 다음 AI 기능을 순차적으로 추가합니다.

- RAG 기반 관련 학습 기록 추천 및 요약
- MCP 기반 GitHub API 연동
- Agent 기반 포트폴리오 작성 도우미

## 디렉터리 구조

```txt
junglelog/
  frontend/          React 클라이언트 애플리케이션
  backend/           FastAPI 서버 애플리케이션
  docs/              아키텍처 문서, 스크린샷, 데모 자료
  README.md          프로젝트 문서
  .gitignore         Git 제외 규칙
  docker-compose.yml 로컬 개발 서비스 설정
```

## 프론트엔드 역할

프론트엔드는 사용자가 직접 보는 화면과 상호작용을 담당합니다.

- 페이지 라우팅
- 로그인 / 회원가입 화면
- 게시글 목록, 상세, 작성 화면
- 백엔드 API 호출
- 로그인 상태와 사용자 정보 관리
- AI 기능 결과 표시

## 백엔드 역할

백엔드는 API, 비즈니스 로직, 데이터베이스 접근, AI 연동을 담당합니다.

- 인증 / 권한 처리
- 게시글, 댓글, 태그 API
- PostgreSQL 연결
- RAG 검색 및 요약 API
- MCP JSON-RPC 도구 게이트웨이
- Agent 실행 루프

## 계획 아키텍처

```txt
React Frontend
  -> FastAPI Backend
    -> PostgreSQL
    -> OpenAI API
    -> MCP Server / GitHub API
```

## 다음 단계

1. React 앱 기본 환경을 구성합니다.
2. FastAPI 앱 기본 환경을 구성합니다.
3. Docker Compose로 PostgreSQL을 연결합니다.
4. 기본 게시판 API를 구현합니다.
5. 게시판 기능이 동작한 뒤 OpenAI API를 연동합니다.
6. RAG, MCP, Agent 기능을 순차적으로 확장합니다.
