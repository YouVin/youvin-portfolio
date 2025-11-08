"use client";
import Link from "next/link";
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
    <Section id="about" className={variant === "full" ? "bg-white" : ""}>
      <div className={`mx-auto w-full ${wrapper} px-6`}>
        <Reveal
          as="p"
          intensity="soft"
          className="text-sm font-medium text-neutral-500"
        >
          Hi, I’m YouVin 👋
        </Reveal>

        <Reveal
          as="h1"
          intensity="bold"
          className={`mt-2 font-bold tracking-tight text-neutral-900 ${heading}`}
        >
          사용자의 체감 반응 속도에 집착하는 프론트엔드 개발자
        </Reveal>

        <Reveal
          intensity="base"
          className={`mt-4 ${descMax} text-base leading-relaxed text-neutral-600`}
        >
          React · Next.js · Zustand로 인터랙션이 살아있는 웹 경험을 만듭니다.
        </Reveal>

        {variant === "teaser" ? (
          <Reveal intensity="soft" className="mt-6">
            <Link
              href="/about"
              className="inline-block rounded-lg border bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
            >
              About 자세히 보기 →
            </Link>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
