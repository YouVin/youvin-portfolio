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
    <Section id="skills" className="bg-neutral-50">
      <div className={`mx-auto w-full ${wrapper} px-6`}>
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          이렇게 만듭니다
        </Reveal>

        <div className={`mt-6 grid gap-3 ${gridCols}`}>
          <Reveal intensity="soft">
            <SkillBadge label="Optimistic UI" />
          </Reveal>
          <Reveal intensity="soft">
            <SkillBadge label="Server–Client State Sync" />
          </Reveal>
          <Reveal intensity="soft">
            <SkillBadge label="Design System / Tokens" />
          </Reveal>
          <Reveal intensity="soft">
            <SkillBadge label="React · Next.js" />
          </Reveal>
          <Reveal intensity="soft">
            <SkillBadge label="Zustand" />
          </Reveal>
          <Reveal intensity="soft">
            <SkillBadge label="Testing / Storybook" />
          </Reveal>
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

        {variant === "teaser" ? (
          <Reveal intensity="soft" className="mt-8">
            <Link
              href="/skills"
              className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-white"
            >
              Skills 자세히 보기 →
            </Link>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
