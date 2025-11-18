// app/components/sections/SkillsSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiNotion,
  SiSlack,
  SiVercel,
  SiJsonwebtokens,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Variant = "teaser" | "full";

type SkillIcon = {
  label: string;
  src?: string;
};

type SkillCategoryId = "frontend" | "backend" | "design" | "tools";

type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  toneBg: string;
  skills: SkillIcon[];
};

const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  "Tailwind CSS": SiTailwindcss,

  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  "JWT Auth": SiJsonwebtokens,

  Figma: SiFigma,

  Git: SiGit,
  GitHub: SiGithub,
  Cloudinary: SiCloudinary,
  Notion: SiNotion,
  Slack: SiSlack,
  Vercel: SiVercel,
};

const BRAND_COLOR: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  "Tailwind CSS": "#38BDF8",

  "Node.js": "#539E43",
  Express: "#000000",
  MongoDB: "#47A248",
  "JWT Auth": "#000000",

  Figma: "#F24E1E",

  Git: "#F05032",
  GitHub: "#181717",
  Cloudinary: "#3448C5",
  Notion: "#000000",
  Slack: "#4A154B",
  Vercel: "#000000",
};

const TAB_COLOR: Record<SkillCategoryId, string> = {
  frontend: "text-[#d9a8a8]",
  backend: "text-[#9bc7b5]",
  design: "text-[#a7c0e8]",
  tools: "text-[#d6c3a4]",
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
      { label: "Node.js", src: "/icons/backend/nodedotjs.svg" },
      { label: "Express", src: "/icons/backend/express.svg" },
      { label: "MongoDB", src: "/icons/backend/mongodb.svg" },
      { label: "JWT Auth", src: "/icons/backend/nodedotjs.svg" },
    ],
  },
  {
    id: "design",
    title: "Design",
    toneBg:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_60%)]",
    skills: [{ label: "Figma", src: "/icons/design/figma.svg" }],
  },
  {
    id: "tools",
    title: "Tools",
    toneBg:
      "bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_60%)]",
    skills: [
      { label: "Git", src: "/icons/tools/git.svg" },
      { label: "GitHub", src: "/icons/tools/github.svg" },
      { label: "Cloudinary", src: "/icons/tools/cloudinary.svg" },
      { label: "Notion", src: "/icons/tools/notion.svg" },
      { label: "Slack", src: "/icons/tools/slack.svg" },
      { label: "Vercel", src: "/icons/tools/vercel.svg" },
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

  const [activeId, setActiveId] = useState<SkillCategoryId>("frontend");
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <Section id="skills">
      <div className={`mx-auto w-full ${wrapper}  px-6 text-center`}>
        {/* 헤더 */}
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Skills
        </Reveal>

        {/* 탭 바 (텍스트 컬러만 바뀌는 형태) */}
        <Reveal
          as="div"
          intensity="soft"
          className="mt-6 flex items-center justify-center gap-4 md:gap-6"
        >
          {CATEGORIES.map((cat) => {
            const active = hasInteracted && cat.id === activeId;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveId(cat.id);
                  setHasInteracted(true);
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
            const activeForCard = hasInteracted ? cat.id === activeId : true;

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
