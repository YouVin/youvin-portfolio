"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";
import SiteHeader from "../SiteHeader";

export default function HeroSection() {
  return (
    <Section id="hero" className="relative isolate overflow-visible">
      {/* 배경 글로우 */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute left-1/2 top-1/2 -z-10
          -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full
          [--g:min(58vw,680px)] [width:var(--g)] [height:var(--g)]
          [background:radial-gradient(closest-side,rgba(201,181,156,0.28)_0%,transparent_70%)]
        "
      />

      <div className="mx-auto max-w-4xl px-6 pt-24 pb-14 text-center md:pt-32">
        <Reveal
          as="h1"
          intensity="bold"
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
        >
          안녕하세요,
          <br />
          프론트엔드 개발자 <span className="text-primary">유빈</span>
          입니다.
        </Reveal>

        <Reveal
          intensity="base"
          className="mt-4 text-sm md:text-base leading-relaxed text-muted"
        >
          사용자가 자연스럽게 이해하고 사용할 수 있는 UI를 만듭니다.
          <br />
          <span className="text-foreground/80">
            제 포트폴리오를 방문해주셔서 감사합니다.
          </span>
        </Reveal>

        {/* CTA */}
        <Reveal intensity="soft" className="mt-6 flex justify-center gap-3">
          <Link
            href="/about"
            className="rounded-xl border border-primary bg-primary/15 px-4 py-2 text-sm font-semibold text-foreground hover:bg-primary/25 transition-colors"
          >
            이력서 보기
          </Link>
          <Link
            href="/projects"
            className="rounded-xl border border-foreground/15 px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            프로젝트
          </Link>
        </Reveal>

        {/* 키워드 */}
        <Reveal
          intensity="soft"
          className="mt-6 flex items-center justify-center gap-2 text-xs text-muted"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
          <span>반응속도 · 상태 동기화 · 디자인 시스템</span>
        </Reveal>

        {/* ▼ 도킹 헤더 */}
        <div className="mt-10">
          <SiteHeader dock topClass="top-6" />
        </div>
      </div>
    </Section>
  );
}
