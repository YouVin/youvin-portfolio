// app/components/sections/HeroSection.tsx
"use client";

import Link from "next/link";
import { Section } from "@/app/components/Section";
import SiteHeader from "../SiteHeader";
import Reveal from "@/app/components/Reveal";

export default function HeroSection() {
  return (
    <Section id="hero" className="relative isolate overflow-visible">
      {/* ===== BACKDROP ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-24 md:-left-32 h-[52rem] w-[52rem] rounded-full blur-3xl bg-[radial-gradient(closest-side,var(--hero-red)_0%,transparent_72%)] opacity-80" />
        <div className="absolute -top-32 -right-24 md:-right-32 h-[54rem] w-[54rem] rounded-full blur-3xl bg-[radial-gradient(closest-side,var(--hero-teal)_0%,transparent_72%)] opacity-80" />
        <div className="absolute inset-x-0 -top-20 h-[520px] [mask-image:linear-gradient(to_bottom,black_46%,transparent)] bg-[radial-gradient(1100px_380px_at_50%_0%,var(--color-panel)/50%_0%,transparent_65%)]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="mx-auto max-w-2xl px-6 pt-10 pb-4 text-center md:pt-10">
        {/* 로고 슬롯 */}
        <Reveal
          as="div"
          intensity="soft"
          delay={0.0}
          className="mx-auto h-8 w-8 md:h-9 md:w-9"
        >
          {/* <Image src="/logo.svg" alt="logo" width={36} height={36}/> */}
        </Reveal>

        {/* 헤드라인(2줄) */}
        <Reveal
          as="h1"
          intensity="bold"
          delay={0.08}
          className="text-center font-extrabold leading-tight tracking-tight"
        >
          <span className="block text-[26px] md:text-[30px] text-muted font-semibold">
            안녕하세요, <span className="text-foreground">웹 개발자</span>
          </span>
          <span className="block text-[40px] md:text-[48px] text-primary mt-1">
            황유빈입니다.
          </span>
        </Reveal>

        {/* 서브 카피 */}
        <Reveal
          as="p"
          intensity="base"
          delay={0.16}
          className="mt-8 text-[12px] md:text-sm leading-relaxed text-muted"
        >
          배경에 간단한 그라디언트를 더하고, 핵심 메시지를 명확하게.
          <br className="hidden md:block" />
          사용자에게 제품의 가치를 가장 빠르게 전달합니다.
        </Reveal>

        {/* CTA 버튼들 */}
        <Reveal
          as="div"
          intensity="soft"
          delay={0.24}
          className="mt-8 flex justify-center gap-2.5"
        >
          <Link
            href="/projects"
            className="rounded-full border border-foreground/80 bg-foreground text-background px-3.5 py-1.5 text-xs md:text-sm font-semibold hover:opacity-90 transition"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-foreground/30 px-3.5 py-1.5 text-xs md:text-sm font-semibold text-foreground hover:bg-secondary/50 transition"
          >
            이력서 보기
          </Link>
        </Reveal>

        {/* 도킹 헤더 */}
        <div className="mt-8">
          <SiteHeader dock topClass="top-6" />
        </div>
      </div>
    </Section>
  );
}
