"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";
import { SkillBadge } from "@/app/components/SkillBadge";

type Variant = "teaser" | "full";

export default function SkillsSection({
  variant = "teaser",
}: {
  variant?: Variant;
}) {
  const wrapper = variant === "full" ? "max-w-6xl" : "max-w-5xl";
  const gridCols =
    variant === "full"
      ? "sm:grid-cols-3 md:grid-cols-4"
      : "sm:grid-cols-2 md:grid-cols-3";

  return (
    <Section id="skills">
      <div className={`mx-auto w-full ${wrapper} px-6`}>
        {/* 상단 헤딩 */}
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          이렇게 만듭니다
        </Reveal>

        {/* 스킬 뱃지 */}
        <div className={`mt-6 grid gap-3 ${gridCols}`}>
          {[
            "Optimistic UI",
            "Server–Client State Sync",
            "Design System / Tokens",
            "React · Next.js",
            "Zustand",
            "Testing / Storybook",
          ].map((skill) => (
            <Reveal key={skill} intensity="soft">
              <SkillBadge label={skill} />
            </Reveal>
          ))}

          {variant === "full" && (
            <>
              <Reveal intensity="soft">
                <SkillBadge label="E2E / Playwright" />
              </Reveal>
              <Reveal intensity="soft">
                <SkillBadge label="Accessibility" />
              </Reveal>
            </>
          )}
        </div>

        {/* 버튼 */}
        {variant === "teaser" && (
          <Reveal intensity="soft" className="mt-8">
            <Link
              href="/skills"
              className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-white"
            >
              Skills 자세히 보기 →
            </Link>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
