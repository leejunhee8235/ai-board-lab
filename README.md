# JungleLog

React, FastAPI, PostgreSQL 기반 게시판에 AI 응용 기능을 결합하는 개인 과제 프로젝트입니다.

JungleLog는 정글 수강생이 학습 기록, 트러블슈팅, 프로젝트 회고, 면접 질문, 포트폴리오 자료를 관리하고 코치가 기록을 보고 피드백할 수 있는 AI 게시판을 목표로 합니다.

## 현재 구현 상태

현재 단계는 **백엔드 연결 전 React mock UI 단계**입니다.
서버 API, DB 저장, 실제 OpenAI/RAG/MCP/Agent 호출 없이 `mockData`와 `useState`로 화면 흐름을 확인합니다.

구현된 화면/기능:

- STUDENT / COACH mock role 전환
- 역할별 사이드바 메뉴 분기
- 접근 제한 UI
- 상단 알림 드롭다운
- 대시보드 CTA 라우트 연결
- 전체 게시글 목록, 카테고리 필터, 검색
- 게시글 상세 mock data 연결
- 게시글 작성 / 수정 / 삭제 mock 동작
- 댓글 작성 mock 동작
- 내 기록 필터와 검색
- 포트폴리오 프로젝트 검색
- GitHub 프로젝트 등록 mock 동작
- 포트폴리오 프로젝트별 연결 기록 표시
- 기록 연결하기 mock UI
- 포트폴리오 상태 변경 mock UI
- AI 도우미 프로젝트 선택 기반 생성 UI
- 포트폴리오 글 / 면접 예상 질문 mock 생성
- 코치 리뷰 요청 생성/취소 mock UI
- 코치 리뷰 인박스 검색/필터/상태 변경 mock UI
- 코치 리뷰 상태 `최종 확인` 추가

## 현재 라우트

| Route | 화면 | 접근 |
| --- | --- | --- |
| `/` | 대시보드 | STUDENT |
| `/login` | 로그인 | 공통 |
| `/signup` | 회원가입 | 공통 |
| `/posts` | 전체 게시글 | STUDENT, COACH |
| `/posts?category=learning-log` | 학습 로그 필터 목록 | STUDENT, COACH |
| `/posts/:id` | 게시글 상세 | STUDENT, COACH |
| `/posts/new` | 게시글 작성 | STUDENT |
| `/posts/:id/edit` | 게시글 수정 | STUDENT |
| `/my-records` | 내 기록 | STUDENT |
| `/portfolio` | 포트폴리오 관리 | STUDENT |
| `/ai-assistant` | AI 도우미 | STUDENT |
| `/coach-review` | 학생: 리뷰 요청 / 코치: 리뷰 인박스 | STUDENT, COACH |
| `/settings` | 설정 | STUDENT, COACH |

## 현재 화면 구성

```txt
frontend/src/app/
  api/             백엔드 API 호출 함수 위치
  components/      공통 UI 컴포넌트
  contexts/        전역 상태 Context 위치
  data/            mock data
  hooks/           재사용 hook 위치
  layouts/         AuthLayout, MainLayout
  pages/
    ai/            AI 도우미
    auth/          로그인 / 회원가입
    coach/         코치 리뷰
    dashboard/     대시보드
    portfolio/     포트폴리오 관리
    posts/         게시글 / 내 기록
    settings/      설정
  types/           공통 타입 위치
  routes.tsx       라우트 정의
```

자세한 구조 기준은 [docs/project-structure.md](docs/project-structure.md)에 정리합니다.

## Mock UI에서 동작하는 것

- `useState`로 입력값, 선택값, 검색어, 필터 상태를 관리합니다.
- `mockData.ts`의 posts, portfolioProjects, reviewRequests, notifications를 화면에 연결합니다.
- 게시글 작성/수정/삭제는 실제 저장 없이 안내 문구와 라우트 이동만 수행합니다.
- 댓글 작성은 현재 상세 화면의 local state에만 추가됩니다.
- 리뷰 요청 취소는 `대기 중` 상태일 때 mock 목록에서 제거됩니다.
- 기록 연결하기는 현재 포트폴리오 화면의 local state만 변경합니다.
- AI 도우미 저장은 실제 DB 저장 없이 mock 안내 문구만 표시합니다.

## 백엔드 연결 후 구현 예정

- 실제 회원가입 / 로그인
- JWT 기반 role 판별과 라우트 보호
- 게시글 CRUD API
- 댓글 저장 / 삭제 API
- 태그 API
- 페이징 API
- DB full-text search
- 포트폴리오 프로젝트 저장 / 조회 API
- 프로젝트-게시글 연결 저장 API
- 코치 리뷰 요청 생성 / 취소 / 상태 변경 API
- 알림 API
- GitHub API 또는 MCP 기반 repo 분석
- OpenAI API 호출
- RAG 검색과 요약
- Agent 실행 루프

## 실행 방법

프론트엔드 개발 서버:

```bash
cd frontend
npm install
npm run dev
```

프론트엔드 빌드 확인:

```bash
cd frontend
npm run build
```

로컬 PostgreSQL 실행:

```bash
docker compose up -d
```

## 코드 컨벤션과 문서화 기준

- 구현 전 [docs/code.md](docs/code.md)를 먼저 확인합니다.
- K&R brace 스타일을 지킵니다.
- 제어문 중괄호를 생략하지 않습니다.
- 함수/변수명은 의미가 드러나게 작성합니다.
- 불필요한 주석은 피하고, 백엔드 연결 예정 부분은 `TODO backend`로 구분합니다.
- 구현이 끝나면 README와 [docs/study.md](docs/study.md)를 함께 업데이트합니다.

## 다음 작업 예정

1. 현재 mock UI를 기준으로 코드 흐름 학습
2. FastAPI 백엔드 기본 라우터 구성
3. PostgreSQL 모델 설계
4. 회원가입 / 로그인 API 구현
5. 게시글 CRUD API 구현
6. 프론트 mock data를 실제 API 응답으로 교체
7. GitHub MCP, RAG, AI Agent 기능 순차 연결
