"use client";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";

type Variant = "teaser" | "full";

export default function AboutSection({
  variant = "teaser",
}: {
  variant?: Variant;
}) {
  const wrapper = variant === "full" ? "max-w-6xl" : "max-w-5xl";
  const heading =
    variant === "full" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl";
  const descMax = variant === "full" ? "max-w-3xl" : "max-w-2xl";

  return (
    <Section
      id="about"
      className={`hero-bg ${variant === "full" ? "py-28 md:py-36" : ""}`}
    >
      <div className={`mx-auto w-full ${wrapper} px-6`}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.9fr]">
          {/* LEFT: 텍스트 */}
          <div>
            <Reveal
              as="h1"
              intensity="bold"
              className={`mt-3 font-bold tracking-tight text-primary ${heading}`}
            >
              <br className="hidden md:block" /> 프론트엔드 개발자
            </Reveal>

            <Reveal
              intensity="base"
              className={`mt-4 ${descMax} text-base leading-relaxed text-foreground/75`}
            >
              React · Next.js · Zustand로 인터랙션이 살아있는 웹 경험을
              만듭니다.
            </Reveal>

            {/* 키워드 3개 */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Reveal
                intensity="soft"
                className="rounded-2xl border border-primary/15 bg-panel/70 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-primary">
                  반응속도 우선
                </div>
                <p className="mt-1 text-sm text-muted">
                  Optimistic UI, 디바운스/스로틀, 스켈레톤/프리페치로 체감 속도
                  향상.
                </p>
              </Reveal>
              <Reveal
                intensity="soft"
                className="rounded-2xl border border-primary/15 bg-panel/70 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-primary">
                  차분한 안정성
                </div>
                <p className="mt-1 text-sm text-muted">
                  서버–클라이언트 상태 동기화, 에러/로딩 설계로 흔들림 없는
                  흐름.
                </p>
              </Reveal>
              <Reveal
                intensity="soft"
                className="rounded-2xl border border-primary/15 bg-panel/70 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-primary">
                  디자인 시스템
                </div>
                <p className="mt-1 text-sm text-muted">
                  토큰·타이포 스케일·컴포넌트 규칙으로 일관된 UI/UX.
                </p>
              </Reveal>
            </div>

            {/* 버튼 */}
            {variant === "teaser" && (
              <Reveal intensity="soft" className="mt-8">
                <Link
                  href="/about"
                  className="inline-block rounded-lg border border-primary/25 bg-accent/60 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:border-primary/40 hover:text-primary transition-colors"
                >
                  About 자세히 보기 →
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
