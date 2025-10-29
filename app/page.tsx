import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-8">
      {/* hero text */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-neutral-500">Hi, Im YouVin 👋</p>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          프론트엔드 개발자 · 사용자 경험 집착러
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
          저는 React와 Next.js를 중심으로, 인터랙션이 살아있는 웹 경험을
          만드는 개발자입니다. 장바구니 Optimistic UI, 전역 상태 관리(Zustand),
          디자인 시스템 설계 같은 “실제 제품에 들어가는 문제들”을 해결하는 걸
          좋아해요.
        </p>
      </div>

      {/* quick links */}
      <div className="flex flex-wrap gap-3 text-sm">
        <Link
          href="/projects"
          className="rounded-lg border border-neutral-300 bg-white px-3 py-2 font-medium text-neutral-800 shadow-sm hover:bg-neutral-100"
        >
          내 프로젝트 보러가기 →
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-neutral-200 px-3 py-2 font-medium text-neutral-700 hover:bg-neutral-50"
        >
          나에 대해 더 보기
        </Link>
        <Link
          href="mailto:you@example.com"
          className="rounded-lg border border-neutral-900 bg-neutral-900 px-3 py-2 font-medium text-white hover:bg-neutral-800"
        >
          연락하기
        </Link>
      </div>
    </section>
  );
}
