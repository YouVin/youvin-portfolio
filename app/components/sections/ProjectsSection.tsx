"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";
import { FiGithub } from "react-icons/fi";
import { projectsSection } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="relative isolate overflow-visible bg-transparent my-50"
    >
      {/* 섹션 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute -top-20 -left-10 h-104 w-104 rounded-full blur-3xl
            bg-[radial-gradient(closest-side,rgba(248,113,113,0.18),transparent_70%)]
          "
        />
        <div
          className="
            absolute -top-20 -right-10 h-120 w-120 rounded-full blur-3xl
            bg-[radial-gradient(closest-side,rgba(45,212,191,0.20),transparent_70%)]
          "
        />
        <div
          className="
            absolute inset-x-0 top-30 h-[420px]
            mask-[linear-gradient(to_bottom,black_35%,transparent)]
            bg-[radial-gradient(900px_320px_at_50%_0%,rgba(236,252,245,0.9)_0%,transparent_70%)]
          "
        />
      </div>

      <div className="mx-auto w-full  max-w-5xl px-6">
        {/* 헤더 영역 */}
        <Reveal
          as="div"
          intensity="base"
          className="mb-6 flex flex-col items-center text-center md:mb-8"
        >
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-xs text-muted md:text-sm">
            사용자 흐름을 기준으로 설계하고,
            <br className="hidden md:block" />
            설계 · 개발 · 디자인까지, 한 번에 다뤄본 경험들을 담고 있어요.
          </p>
        </Reveal>

        {/* 카드 그리드 */}
        <div className="mt-6 grid gap-5 md:mt-8 md:grid-cols-2">
          {projectsSection.map((project, idx) => (
            <Reveal
              key={project.id}
              as="div"
              intensity="soft"
              delay={0.06 * idx}
            >
              {/* 카드 전체를 상세페이지 링크로 */}
              <Link href={`/projects/${project.id}`} className="group block">
                <div
                  className={[
                    "relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white/85",
                    "px-5 py-5 md:px-6 md:py-6",
                    "shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm",
                    "transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]",
                  ].join(" ")}
                >
                  {/* 카드 상단 얇은 컬러 스트립 */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-rose-200 via-emerald-200 to-sky-200" />

                  {/* 내부 내용 */}
                  <div className="flex flex-col gap-4">
                    {/* 상단: 로고 + 이름 */}
                    <div className="flex items-start gap-3">
                      {project.logoSrc ? (
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                          <Image
                            src={project.logoSrc}
                            alt={project.logoAlt ?? project.name}
                            fill
                            sizes="64px"
                            className="object-contain p-2"
                          />
                        </div>
                      ) : (
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-semibold text-emerald-700">
                          {project.name[0]}
                        </div>
                      )}

                      <div className="flex-1 text-left">
                        <h3 className="text-sm font-semibold text-foreground md:text-base">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-[12px] md:text-sm leading-relaxed text-neutral-700 whitespace-pre-line">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {/* 기술 스택 뱃지들 */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-zinc-50/90 px-2.5 py-1 text-[10px] font-medium text-zinc-600 ring-1 ring-zinc-200 group-hover:bg-zinc-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 푸터: GitHub 버튼 */}
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400">
                        {project.id}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            project.githubUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 cursor-pointer"
                      >
                        <FiGithub className="h-4 w-4" />
                        <span>GitHub</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
