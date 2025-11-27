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

// ── TechSection 타입 (video 지원 버전) ─────────────────
export type TechSection = {
  title: string;
  body: string;
  // "single-vertical" | "single-horizontal" | "multi-vertical"
  layout: "single-vertical" | "single-horizontal" | "multi-vertical";
  images?: string[]; // 필요하면 쓰는 옵션
  video?: string; // mp4 넣을 때 사용
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
    github: "https://github.com/YouVin/Final-10-console.10g",
    thumbnail: "",
    heroImage: "/images/dotori.png",

    techSections: [
      {
        title: "옵티미스틱 장바구니 수량 변경",
        body:
          "PATCH → GET 재조회까지 기다리던 기존 수량 변경 흐름을 옵티미스틱 UI로 전환했습니다.\n" +
          "버튼 클릭 시 즉시 Zustand 스토어의 수량을 올리고, 서버 요청은 백그라운드에서 처리합니다.\n" +
          "요청 실패 시에는 이전 수량으로 롤백해 UI와 서버 상태를 다시 맞춰줍니다.",
        layout: "multi-vertical",
        video: "/videos/dotori-cart-optimistic.mp4",
      },
      {
        title: "디바운싱 기반 PATCH 호출 최소화",
        body:
          "사용자가 수량 버튼을 여러 번 빠르게 눌러도 마지막 입력만 서버에 반영되도록 디바운싱을 적용했습니다.\n" +
          "상품별 타이머를 관리해 300ms 안의 중복 입력은 모두 취소하고 한 번의 PATCH만 전송합니다.\n" +
          "이 덕분에 장바구니 수량 변경이 부드럽게 보이면서도 서버 부하를 줄였습니다.",
        layout: "single-horizontal",
        images: ["/images/dotori-cart-debounce.png"],
      },
      {
        title: "useMemo로 합계 계산 캐싱",
        body:
          "선택된 상품 목록과 수량, 배송비만 의존성으로 두고 useMemo로 총 금액을 계산했습니다.\n" +
          "변경이 없는 렌더에서는 이전 계산 결과를 재사용해 불필요한 reduce 연산을 막았습니다.\n" +
          "향후 쿠폰·프로모션 규칙이 추가되더라도 동일한 패턴으로 확장 가능하게 설계했습니다.",
        layout: "single-horizontal",
        images: ["/images/dotori-cart-total.png"],
      },
      {
        title: "Zustand 부분 구독 + Row 단위 렌더링",
        body:
          "장바구니 부모는 전체 quantities 대신 합계에 필요한 최소 상태만 구독하도록 분리했습니다.\n" +
          "각 CartItem 컴포넌트는 selector로 자신의 id에 해당하는 수량만 구독하고, React.memo로 감쌌습니다.\n" +
          "그 결과 한 상품의 수량을 바꿔도 해당 Row와 합계 영역만 다시 렌더링되도록 최적화했습니다.",
        layout: "single-horizontal",
        images: ["/images/dotori-cart-row.png"],
      },
    ],
  },

  {
    slug: "7zzang-arcade",
    title: "7짱 오락실",
    period: "2025.05",
    stack: ["TypeScript", "Canvas", "Firebase", "SAT.js", "HTML", "CSS"],
    summary:
      "순수 TS/Canvas로 만든 미니 게임 아케이드 컬렉션. 메인 오락기 화면과 개별 게임을 하나의 경험처럼 엮는 데 집중했습니다.",
    description: [
      "7짱 오락실은 여러 개의 미니 게임을 하나의 웹 아케이드처럼 묶어둔 프로젝트입니다.",
      "각 게임은 TypeScript와 Canvas API만으로 상태 업데이트, 충돌 판정, 점수 계산 등을 구현했고, 공통으로 사용하는 BGM, 점수 저장 구조를 설계해 일관된 UX를 만들었습니다.",
      "그 중 ‘제7우주(The Seventh Space)’는 직접 설계한 탄막 구조, 보스 페이즈, 폭발 이펙트까지 포함한 스페이스 슈팅 게임입니다.",
    ],
    role: [
      "메인 오락기 화면(게임 선택, 코인 애니메이션, BGM 토글) 구현",
      "제7우주 게임 전체 로직 (상태 업데이트 / 충돌 판정 / 점수 시스템) 개발",
      "Firestore 기반 하이스코어 저장 & 리더보드 UI 구현",
      "Canvas (폭발, 배경 스크롤, 라이프/스코어 HUD) 연출 설계",
    ],
    github: "https://github.com/YouVin/JS-07-7zzang-Arcade",
    thumbnail: "/images/arcade.png",
    heroImage: "/images/7zzang-hero.png",

    previewImages: [
      {
        src: "/images/7zzang-main-preview.png",
        caption: "7짱 오락실 메인 화면 – 코인 슬롯과 게임 선택 UI",
      },
      {
        src: "/images/7space-gameplay.png",
        caption: "제7우주 플레이 화면",
      },
    ],

    techSections: [
      {
        title: "반응형 일러스트 스케일링 줌 인터랙션",
        body:
          "1. 5200×2600 원본 일러스트를 뷰포트 비율에 맞춰\n 실시간 스케일링하는 로직을 구현했습니다.\n\n" +
          "2. 코인 투입 시 scale로 자연스럽게 확대하여\n 오락기 앞에 다가가는 인터랙션을 구성했습니다.\n\n" +
          "3. 바깥 영역 클릭 시 스케일을 자동 복구해 공간형 UX를 유지했습니다.",
        layout: "multi-vertical",
        video: "/images/7zzang-main.mp4",
      },
      {
        title: "SAT.js 충돌 판정 최적화",
        body:
          "SAT.js 충돌 판정, 탄환·적·보스의 히트 정확도를 높였습니다.\n" +
          "Set 구조로 중복 충돌을 한 프레임 안에서 관리했습니다.",
        layout: "single-horizontal",
        images: ["/images/7space-collision.png"],
      },
      {
        title: "Config 기반 웨이브 생성, 라운드/보스 전환",
        body:
          "rows·cols·padding 값으로 웨이브를 자동 생성합니다.\n" +
          "적 배열의 다음 이동을 예측해 벽 충돌 전 방향을 전환합니다.\n" +
          "웨이브 종료 시 보너스를 지급하고 탄환·이펙트를 정리합니다.\n" +
          "전환 후 전용 BGM과 패턴을 가진 보스전으로 이어집니다.",
        layout: "single-horizontal",
        images: ["/images/7space-boss.png"],
      },
      {
        title: "Canvas 기반 UX 연출",
        body:
          "글로벌 alpha 토글로 무적 깜빡임 효과를 구현했습니다.\n" +
          "HUD 요소를 단일 렌더 루프에서 처리해 UI를 유지했습니다.",
        layout: "single-horizontal",
        images: ["/images/7space-effects.png"],
      },
    ],
  },
  {
    slug: "greenie",
    title: "그리니 (Greeni)",
    period: "2025.03",
    stack: ["Vue 3", "Quasar", "TypeScript"],
    summary:
      "커뮤니티 기능 중심의 Vue 프로젝트. 게시글 피드 정렬, 페이지네이션, 댓글·대댓글 구조를 직접 설계하고 구현했습니다.",

    description: [
      "그리니는 친환경·식물 콘셉트의 커뮤니티 서비스로, Vue + Quasar 기반으로 제작한 프로젝트입니다.",
      "특히 ‘커뮤니티 피드’와 ‘댓글/대댓글 시스템’ 전체를 직접 설계·구현해, 화면 구성부터 사용자 흐름 개선까지 경험한 프로젝트입니다.",
    ],

    role: [
      "정렬(추천순/최신순)과 페이지네이션이 있는 커뮤니티 피드 개발",
      "카드형 게시글 목록 디자인 및 반응형 UI 설계",
      "댓글/대댓글(계층형 스레드) 구조 설계 및 렌더링 로직 구현",
      "댓글 좋아요·답글 토글 등 사용자 인터랙션 개발",
      "‘xx분 전/xx시간 전’ 같은 통일된 시간 표시 유틸 작성",
    ],

    github: "https://github.com/YouVin/greenie",
    thumbnail: "/images/greeni.png",

    heroImage: "/images/greeni-hero.png",

    previewImages: [
      {
        src: "/images/greeni-feed.png",
        caption: "게시글 피드 – 추천순/최신순 정렬과 카드형 리스트",
      },
      {
        src: "/images/greeni-comments.png",
        caption: "댓글/대댓글 구조 – 들여쓰기 기반 스레드 UI",
      },
    ],

    techSections: [
      {
        title: "추천순·최신순으로 정렬되는 커뮤니티 피드",
        body:
          "추천순에서는 좋아요 많은 글이 먼저 보이고,\n 최신순에서는 새 글이 바로 보이도록 설계했습니다.\n\n" +
          "정렬 기준 변경 시 즉시 UI가 반응하도록 탭과 API 정렬 옵션을 함께 구성했습니다.",
        layout: "single-horizontal",
        images: ["/images/greeni-feed-sort.png"],
      },

      {
        title: "카드형 게시글 목록 + 페이지네이션",
        body:
          "모바일에서도 레이아웃이 자연스럽게 정렬되도록\n 반응형으로 구성했습니다.\n\n" +
          "페이지 이동 시 현재 페이지 상태를 유지하며\n 서버에서 필요한 부분만 가져오도록 했습니다.",
        layout: "single-horizontal",
        images: ["/images/greeni-feed-pagination.png"],
      },

      {
        title: "댓글·대댓글(스레드) 구조 직접 설계",
        body:
          "댓글은 부모 댓글 → 그 아래 대댓글 형태로\n 직접 구조를 만들었습니다.\n\n" +
          "댓글은 parentId로 묶고, 같은 그룹의 댓글끼리는\n 시간 순으로 정렬했습니다.",
        layout: "single-horizontal",
        images: ["/images/greeni-comment-thread.png"],
      },

      {
        title: "좋아요·답글·시간 표시 등 사용자 경험 개선",
        body:
          "댓글 좋아요 상태를 빠르게 토글할 수 있도록\n Set 기반 구조로 처리했습니다.\n\n" +
          "‘답글 쓰기’ 버튼을 누르면 해당 댓글 바로 아래\n 입력창이 열리도록 UX를 구성했습니다.",
        layout: "single-horizontal",
        images: ["/images/greeni-comment-interaction.png"],
      },
    ],
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
        title: "검색(Search) 기능 UI",
        body:
          "Flutter와 GetX로 지도 검색 기능을 개발했습니다.\n" +
          "검색창에 디바운싱을 적용해 불필요한 API 호출을 줄이고, " +
          "상태 관리를 통해 로딩·결과·에러를 일관되게 제어했습니다.\n" +
          "WebView를 활용해 지도 마커 데이터를 동기화하고, " +
          "필터 선택, 위치 기반 탐색, 신규 마커 등록까지 지원하여 " +
          "사용자가 직관적으로 검색할 수 있는 UX를 완성했습니다.",
        layout: "multi-vertical",
        images: [
          "/images/search-1.png",
          "/images/search-2.png",
          "/images/search-3.png",
        ],
      },
      {
        title: "상태 관리 (GetX) & 위젯 구조",
        body:
          "피드·댓글·대댓글·좋아요 상태를 GetX 컨트롤러로 분리 후\n" +
          "UI는 Dumb 위젯으로 구성해 로직을 완전히 분리하고,\n 불필요한 렌더링을 최소화했습니다.\n" +
          "상태 흐름을 명확히 추적할 수 있도록 구조를 단순화했습니다.",
        layout: "single-vertical",
        images: ["/images/Community(1).png"],
      },
      {
        title: "SlidingUpPanel 온보딩 플로우",
        body:
          "로그인 화면을 온보딩 경험 중심으로 재설계했습니다.\n" +
          "SlidingUpPanel로 회원가입 패널이 나오도록 구현했습니다.\n" +
          "닉네임·소속·프로필 입력을 한 화면에서 처리해 이탈률을 줄였습니다.",
        layout: "single-vertical",
        images: ["/images/LoginFragmnet.png"],
      },
      {
        title: "소셜 로그인 & Firebase Auth 연동",
        body:
          "Kakao, Google, Apple 로그인 UI를 커스터마이징했습니다.\n" +
          "FirebaseAuthService(GetX)로 인증 로직을 모듈화하고,\n 모든 채널의 흐름을 통합했습니다.\n" +
          "백엔드 연동 시 수정만으로 확장 가능한 구조를 설계했습니다.",
        layout: "single-vertical",
        images: ["/images/LoginFragment(1).png"],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
