// app/components/sections/SkillsSection.tsx
"use client";

import { useState } from "react";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";

import {
  CATEGORIES,
  ICON_MAP,
  BRAND_COLOR,
  TAB_COLOR,
  type Variant,
  type SkillCategoryId,
} from "@/lib/skills";

export default function SkillsSection({
  variant = "teaser",
}: {
  variant?: Variant;
}) {
  const wrapper = variant === "full" ? "max-w-6xl" : "max-w-5xl";
  const visibleCategories =
    variant === "teaser" ? CATEGORIES.slice(0, 4) : CATEGORIES;

  const [activeId, setActiveId] = useState<SkillCategoryId | null>(null);

  return (
    <Section id="skills">
      <div className={`mx-auto w-full ${wrapper}  px-6 text-center mt-50`}>
        {/* 헤더 */}
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Skills
        </Reveal>

        {/* 탭 바 */}
        <Reveal
          as="div"
          intensity="soft"
          className="mt-6 flex items-center justify-center gap-4 md:gap-6"
        >
          {CATEGORIES.map((cat) => {
            const active = activeId === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveId((prev) => (prev === cat.id ? null : cat.id));
                }}
                className={[
                  "text-sm md:text-base font-medium transition-colors cursor-pointer",
                  active
                    ? TAB_COLOR[cat.id]
                    : "text-muted hover:text-foreground/80",
                ].join(" ")}
              >
                {cat.title}
              </button>
            );
          })}
        </Reveal>

        {/* 2×2 카드 */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visibleCategories.map((cat, idx) => {
            const activeForCard =
              activeId === null ? true : cat.id === activeId;
            return (
              <Reveal
                key={cat.id}
                as="article"
                intensity="soft"
                delay={0.06 * idx}
                className="h-full"
              >
                <div
                  className={[
                    "relative h-full rounded-2xl border bg-white/80",
                    "px-6 py-5 md:px-7 md:py-6",
                    "flex flex-col items-center justify-between overflow-hidden backdrop-blur-sm",
                    "transition-all duration-200",
                    activeForCard
                      ? "border-black/10 shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
                      : "border-black/5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] opacity-85",
                  ].join(" ")}
                >
                  {/* 은은한 배경 스팟 */}
                  <div
                    aria-hidden
                    className={[
                      "pointer-events-none absolute inset-0 -z-10",
                      cat.toneBg,
                      "mask-[radial-gradient(circle_at_top,black,transparent_65%)]",
                    ].join(" ")}
                  />

                  {/* 제목 */}
                  <div className="flex flex-col items-center gap-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  {/* 아이콘/뱃지 그리드 */}
                  <div className="mt-4 flex flex-wrap justify-center gap-3 md:gap-3.5">
                    {cat.skills.map((skill) => {
                      const IconComp = ICON_MAP[skill.label];
                      const brandColor = BRAND_COLOR[skill.label] ?? "#44403c";

                      return (
                        <div
                          key={skill.label}
                          className={[
                            "flex h-11 min-w-[2.6rem] items-center justify-center rounded-xl bg-white/90 px-3 text-[10px] font-medium shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-black/5 md:h-12 md:text-[11px]",
                            "transition-all duration-200",
                            activeForCard ? "opacity-100" : "opacity-60",
                          ].join(" ")}
                        >
                          {IconComp ? (
                            <IconComp
                              className="h-5 w-5 md:h-6 md:w-6 transition-all duration-200"
                              style={{
                                color: activeForCard ? brandColor : "#a8a29e",
                              }}
                            />
                          ) : (
                            <span className="text-[10px] md:text-[11px] text-muted">
                              {skill.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
