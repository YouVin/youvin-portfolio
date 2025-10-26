// lib/projects.ts

export type Project = {
  slug: string; // URL용. 예: "dotori-island"
  title: string; // 화면에 보여줄 이름
  period: string; // 작업 기간. 예: "2025.06 - 2025.07"
  stack: string[]; // 사용 기술들
  summary: string; // 프로젝트 카드에서 한 줄로 보여줄 요약
  description: string[]; // 상세 페이지에서 여러 문단으로 보여줄 본문
  role: string[]; // 내가 한 일 bullet 포인트
  github: string; // 깃허브 repo URL
  demo?: string; // 데모 URL 있으면 넣기 (없으면 안 넣어도 됨)
  thumbnail?: string; // 나중에 썸네일 이미지 경로 (public/images/...)
};

// 임시 데이터 (초안)
// TODO: 유빈 실제 내용으로 나중에 세부 튜닝

export const projects: Project[] = [
  {
    slug: "dotori-island",
    title: "도토리섬 (Dotori Island)",
    period: "2025.06 - 2025.07",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind CSS"],
    summary:
      "굿즈 커머스 + 커뮤니티 플랫폼. 장바구니, 주문/결제 흐름, 사용자 프로필(주민증)까지 직접 구현.",
    description: [
      "도토리섬은 귀여운 굿즈/소품을 판매하고, 또 섬 주민처럼 프로필을 꾸미는 컨셉의 커머스 + 커뮤니티 플랫폼입니다.",
      "장바구니 수량 변경에 Optimistic UI, 디바운싱, 전역 상태 동기화를 조합해 즉각적인 피드백을 주면서도 서버 상태와 어긋나지 않도록 했습니다.",
      "주문/결제 페이지는 상위 Wrapper 컴포넌트에서 데이터를 한 번에 패칭하고 하위 컴포넌트에 props로 내려주는 구조로 작성했습니다. 이 흐름으로 렌더링 과정을 예측 가능하게 만들고, 비동기 호출 난발을 줄였습니다.",
    ],
    role: [
      "전역 상태 관리(Zustand) 설계 및 구현",
      "장바구니 수량 변경 Optimistic UI + 디바운스 처리",
      "주문/결제 페이지 구조화 (서버/클라이언트 컴포넌트 분리)",
      "Tailwind 기반 공통 UI 컴포넌트 정리",
    ],
    github: "https://github.com/YouVin", // TODO: 실제 도토리섬 repo로 교체
    demo: "", // 배포 URL 있으면 넣기
    thumbnail: "/images/dotori.png",
  },
  {
    slug: "7zzang-arcade",
    title: "7짱 오락실",
    period: "2025.05",
    stack: ["JavaScript", "HTML", "CSS"],
    summary:
      "순수 JS로 만든 미니 게임 아케이드 컬렉션. 이벤트 처리와 상태 관리 중심으로 개발.",
    description: [
      "7짱 오락실은 여러 개의 미니 게임을 하나의 웹 아케이드처럼 묶어둔 프로젝트입니다.",
      "각 게임은 순수 JavaScript만으로 상태 업데이트, 충돌 판정, 점수 계산 등을 구현했고, 팀 단위 협업으로 브랜치 전략과 병합 흐름을 실제처럼 경험했습니다.",
    ],
    role: [
      "게임 로직(상태 업데이트 / 이벤트 핸들링) 구현",
      "Git 브랜치 전략으로 협업 (기능 브랜치 → main 머지)",
      "UI/UX 디테일 개선",
    ],
    github: "https://github.com/YouVin", // TODO: 실제 7짱 레포 링크로 바꿀 것
    thumbnail: "/images/arcade.png",
  },
  {
    slug: "burgerking-clone",
    title: "버거킹 클론 랜딩",
    period: "2025.04",
    stack: ["HTML", "CSS", "Responsive Layout"],
    summary:
      "실제 브랜드의 랜딩 페이지를 시맨틱 마크업과 반응형 레이아웃으로 재현.",
    description: [
      "버거킹 웹 페이지 레이아웃을 분석하고, HTML 시맨틱 태그와 CSS만으로 반응형 구조를 재현했습니다.",
      "특히 헤더/내비 영역과 프로모션 카드 섹션의 반응형 동작을 중심으로 '디자인 → 코드' 전환 능력을 보여주는 프로젝트입니다.",
    ],
    role: [
      "시맨틱 HTML 마크업 작성",
      "모바일/데스크톱 반응형 레이아웃 구현",
      "공통 컴포넌트화 가능한 CSS 패턴 정리",
    ],
    github: "https://github.com/YouVin",
    thumbnail: "/images/burgerking.png",
  },
  {
    slug: "greeni",
    title: "그리니 (Greeni)",
    period: "2025.03",
    stack: ["Vue"],
    summary:
      "식물/친환경 컨셉의 서비스 프로토타입. Vue 기반으로 주요 화면과 상태 흐름을 설계.",
    description: [
      "그리니는 친환경/식물 테마의 서비스로, Vue 기반 SPA 아키텍처를 사용해 화면 간 라우팅과 상태 변경 흐름을 설계했습니다.",
    ],
    role: [
      "핵심 화면 레이아웃/내비게이션 구조 설계",
      "주요 상태 흐름(입력 → 반영) 구성",
    ],
    github: "https://github.com/YouVin",
    thumbnail: "/images/greeni.png",
  },
  {
    slug: "flutter-app",
    title: "Flutter 앱 프로토타입",
    period: "2025.02",
    stack: ["Flutter", "Dart"],
    summary:
      "Flutter 위젯 트리 기반으로 화면과 라우팅을 설계한 모바일 앱 프로토타입.",
    description: [
      "Flutter로 모바일 앱의 초기 구조(화면 전환, 위젯 단위 컴포넌트화, 상태 흐름)를 설계했습니다.",
    ],
    role: [
      "페이지 라우팅 구성",
      "재사용 가능한 위젯 컴포넌트화",
      "UI 구조 확장성 고려",
    ],
    github: "https://github.com/YouVin",
    thumbnail: "/images/flutter.png",
  },
];

// 특정 slug로 프로젝트 찾는 헬퍼
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
