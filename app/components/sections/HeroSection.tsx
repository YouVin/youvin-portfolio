"use client";

import Link from "next/link";
import { Section } from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";

export default function HeroSection() {
  return (
    <Section id="hero" fullHeight className="relative isolate overflow-visible">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute -top-24 -left-10 md:-left-16
            h-192 w-3xl rounded-full blur-[80px]
            bg-[radial-gradient(closest-side,var(--hero-red)_0%,transparent_75%)]
          "
        />
        <div
          className="
            absolute -top-28 -right-10 md:-right-16
            h-200 w-200 rounded-full blur-[80px]
            bg-[radial-gradient(closest-side,var(--hero-teal)_0%,transparent_75%)]
          "
        />
        <div
          className="
            absolute inset-x-0 -top-20 h-[520px]
            mask-[linear-gradient(to_bottom,black_44%,transparent)]
            bg-[radial-gradient(1000px_340px_at_50%_0%,var(--color-panel)/55%_0%,transparent_65%)]
          "
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-4 text-center md:pt-10">
        <Reveal
          as="div"
          intensity="soft"
          delay={0.0}
          className="mx-auto h-8 w-8 md:h-9 md:w-9"
          initialShow
        ></Reveal>

        <Reveal
          as="h1"
          intensity="bold"
          delay={0.08}
          initialShow
          className="text-center font-extrabold leading-tight tracking-tight"
        >
          <span className="block text-[28px] md:text-[34px] text-muted font-semibold">
            안녕하세요, <span className="text-foreground">웹 개발자</span>
          </span>
          <span className="block text-[44px] md:text-[52px] text-primary mt-1">
            황유빈입니다.
          </span>
        </Reveal>

        <Reveal
          as="p"
          intensity="base"
          delay={0.16}
          initialShow
          className="mt-8 text-sm md:text-base leading-relaxed text-muted"
        >
          배경에 간단한 그라디언트를 더하고, 핵심 메시지를 명확하게.
          <br className="hidden md:block" />
          사용자에게 제품의 가치를 가장 빠르게 전달합니다.
        </Reveal>

        <Reveal
          as="div"
          intensity="soft"
          delay={0.24}
          initialShow
          className="mt-8 flex justify-center gap-2.5"
        >
          <Link
            href="/about"
            className="rounded-full border border-foreground/30 px-3.5 py-1.5 text-sm md:text-base font-semibold text-foreground hover:bg-secondary/50 transition"
          >
            이력서 다운로드
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
