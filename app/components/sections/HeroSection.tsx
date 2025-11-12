"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative isolate overflow-visible md:overflow-hidden"
    >
      {/* 원형 글로우: CSS 변수(--g)로 크기 제어 → 정원 유지 */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute left-1/2 top-1/2 -z-10
          -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full
          [--g:min(60vw,700px)]
          [width:var(--g)] [height:var(--g)]
          [background:radial-gradient(closest-side,rgba(201,181,156,0.28)_0%,transparent_70%)]
        "
      />

      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <Reveal
          as="h1"
          intensity="bold"
          className="mt-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl"
        >
          안녕하세요,
          <br /> 프론트엔드 개발자 <br />
          <span className="from-primary to-foreground/70 bg-clip-text text-primary">
            유빈
          </span>
          입니다.
        </Reveal>

        <Reveal
          intensity="base"
          className="mt-5 leading-relaxed text-base text-muted md:text-lg"
        >
          사용자가 자연스럽게 이해하고 사용할 수 있는 UI를 만듭니다.
          <br />
          <span className="text-foreground/80">
            제 포트폴리오를 방문해주셔서 감사합니다.
          </span>
        </Reveal>

        {/* CTA */}
        <Reveal intensity="soft" className="mt-8 flex justify-center gap-3">
          <Link
            href="/about"
            className="
              rounded-xl border border-primary bg-primary/15
              px-4 py-2 text-sm font-semibold text-foreground
              hover:bg-primary/25 transition-colors
            "
          >
            이력서 보기
          </Link>

          <Link
            href="/projects"
            className="
              rounded-xl border border-foreground/15
              px-4 py-2 text-sm font-semibold text-foreground
              hover:bg-secondary transition-colors
            "
          >
            프로젝트
          </Link>
        </Reveal>

        {/* 키워드 라벨 */}
        <Reveal
          intensity="soft"
          className="mt-10 flex items-center justify-center gap-2 text-xs text-muted"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
          <span>반응속도 · 상태 동기화 · 디자인 시스템</span>
        </Reveal>
      </div>
    </Section>
  );
}
