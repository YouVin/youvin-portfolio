// lib/projects.ts

export type Project = {
  slug: string;
  title: string;
  period: string;
  stack: string[];
  summary: string;
  description?: string[]; // ← optional
  role?: string[]; // ← optional
  github: string;
  demo?: string;
  thumbnail?: string;
  heroImage?: string;
  previewImages?: {
    src: string;
    caption?: string;
  }[];
  techSections?: TechSection[];
};

// 새 타입
export type TechSection = {
  title: string;
  body: string;
  // "single-vertical" | "single-horizontal" | "multi-vertical"
  layout: "single-vertical" | "single-horizontal" | "multi-vertical";
  images: string[]; // 한 장만 필요해도 배열로
};

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
    slug: "today-keyword",
    title: "TodayKeyword",
    period: "2022.07 - 2022.11",
    stack: [
      "Flutter",
      "Dart",
      "GetX",
      "Firebase Auth",
      "Kakao Login",
      "Google Sign-In",
      "SlidingUpPanel",
    ],
    summary:
      "위치 기반 로컬 추천 커뮤니티 앱. 주변 장소 리뷰, 사진, 키워드 태그, 지도 기반 추천까지 한 화면에서 볼 수 있는 모바일 MVP.",
    github: "https://github.com/YouVin/TodayKeyword.FrontEnd",
    heroImage: "/images/todaykeyword-hero.jpg",

    previewImages: [
      {
        src: "/images/todaykeyword-hero.jpg",
      },
      {
        src: "/images/todaykeyword-screens.jpg",
      },
    ],

    techSections: [
      {
        title: "상태 관리 (GetX) & 위젯 구조",
        body: "피드, 댓글, parentComment 상태 등을 GetX 컨트롤러에 분리해 관리했습니다. 위젯은 최대한 dumb하게 유지해 재렌더를 줄였고, 댓글/대댓글 흐름, 좋아요/북마크 상태 같은 인터랙션 로직을 명확하게 추적할 수 있도록 했습니다.",
        layout: "single-vertical",
        images: ["/images/Community(1).png"],
      },
      {
        title: "SlidingUpPanel 온보딩 플로우",
        body: "로그인 화면을 단순 버튼 나열이 아니라 ‘온보딩 랜딩’처럼 설계했습니다. 화면 하단에서 회원가입 패널이 올라오고, 닉네임/소속/프로필 이미지를 입력하도록 했습니다. 사용자는 앱을 떠나지 않고 가입을 끝낼 수 있어 이탈이 줄어듭니다.",
        layout: "multi-vertical",
        images: ["/images/LoginFragmnet.png"],
      },
      {
        title: "소셜 로그인 & Firebase Auth 연동",
        body: "Kakao / Google / Apple 로그인 버튼을 Flutter에서 커스텀 UI로 만들고, FirebaseAuthService(GetX)를 통해 실제 인증 액션을 트리거하게 했습니다. 이 구조로 추후 백엔드 없이도 MVP 단계 사용자 테스트가 가능했습니다.",
        layout: "single-vertical",
        images: ["/images/LoginFragment(1).png"],
      },
      {
        title: "지도 기반 추천 & 매장 상세 정보",
        body: "지도를 중심으로 주변 가게를 탐색하고, 가게 카드에서 평점, 영업시간, 위치, 인기 키워드 해시태그, 리뷰까지 한 번에 볼 수 있게 했습니다. 단순 지도 마커가 아니라 ‘바로 결정할 수 있는 정보 카드’를 설계한 게 핵심입니다.",
        layout: "single-vertical",
        images: ["/images/MapFragment(3).png"],
      },
    ],
  },
];

// 특정 slug로 프로젝트 찾는 헬퍼
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
