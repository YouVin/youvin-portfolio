// app/components/sections/SkillsSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";

type Variant = "teaser" | "full";

type SkillIcon = {
  label: string;
  src?: string;
};

type SkillCategory = {
  id: string;
  title: string;
  toneBg: string;
  skills: SkillIcon[];
};

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.18),transparent_60%)]",
    skills: [
      { label: "React", src: "/icons/frontend/react.svg" },
      { label: "Next.js", src: "/icons/frontend/nextdotjs.svg" },
      { label: "TypeScript", src: "/icons/frontend/typescript.svg" },
      { label: "JavaScript", src: "/icons/frontend/javascript.svg" },
      { label: "HTML5", src: "/icons/frontend/html5.svg" },
      { label: "Tailwind CSS", src: "/icons/frontend/tailwindcss.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.20),transparent_60%)]",
    skills: [
      { label: "Node.js" },
      { label: "Express" },
      { label: "MongoDB" },
      { label: "JWT Auth" },
    ],
  },
  {
    id: "design",
    title: "Design",
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_60%)]",
    skills: [
      { label: "Figma" },
      { label: "Design System" },
      { label: "UI Prototype" },
    ],
  },
  {
    id: "tools",
    title: "Tools · Others",
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_60%)]",
    skills: [
      { label: "VS Code" },
      { label: "Git" },
      { label: "GitHub" },
      { label: "Cloudinary" },
      { label: "Notion" },
      { label: "Slack" },
      { label: "Vercel" },
      { label: "Koyeb" },
    ],
  },
];

export default function SkillsSection({
  variant = "teaser",
}: {
  variant?: Variant;
}) {
  const wrapper = variant === "full" ? "max-w-6xl" : "max-w-5xl";
  const visibleCategories =
    variant === "teaser" ? CATEGORIES.slice(0, 4) : CATEGORIES;

  return (
    <Section id="skills">
      <div className={`mx-auto w-full ${wrapper} px-6 text-center`}>
        {/* 헤더 */}
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Skills
        </Reveal>

        {/* 2×2 카드 */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visibleCategories.map((cat, idx) => (
            <Reveal
              key={cat.id}
              as="article"
              intensity="soft"
              delay={0.06 * idx}
              className="h-full"
            >
              <div
                className={[
                  "relative h-full rounded-2xl border border-black/5 bg-white/80",
                  "px-6 py-5 md:px-7 md:py-6",
                  "shadow-[0_18px_40px_rgba(15,23,42,0.06)]",
                  "flex flex-col items-center justify-between overflow-hidden",
                  "backdrop-blur-sm",
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
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex h-11 min-w-[2.6rem] items-center justify-center rounded-xl bg-white/90 px-3 text-[10px] font-medium text-muted shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-black/5 md:h-12 md:text-[11px]"
                    >
                      {skill.src ? (
                        <Image
                          src={skill.src}
                          alt={skill.label}
                          width={24}
                          height={24}
                          className="h-5 w-5 md:h-6 md:w-6"
                        />
                      ) : (
                        <span>{skill.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 전체 보기 버튼 */}
        {variant === "teaser" && (
          <Reveal intensity="soft" className="my-20">
            <Link
              href="/skills"
              className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-4 py-2 text-xs md:text-sm font-medium text-foreground hover:bg-white/80 hover:border-foreground/30 transition-colors"
            >
              전체 스킬 보기
            </Link>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
