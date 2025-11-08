"use client";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";
import { ProjectCard } from "@/app/components/ProjectCard";

type Variant = "teaser" | "full";

export default function ProjectsSection({
  variant = "teaser",
}: {
  variant?: Variant;
}) {
  const wrapper = "max-w-6xl";
  const gridCols =
    variant === "full"
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section id="projects">
      <div className={`mx-auto w-full ${wrapper} px-6`}>
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          대표 프로젝트
        </Reveal>

        <div className={`mt-8 grid gap-5 ${gridCols}`}>
          <Reveal intensity="base">
            <ProjectCard
              title="도토리섬 — Cart Optimistic UI"
              tags={["React", "Next.js", "Zustand"]}
              href="/projects/cart"
              src="/images/project-cart.jpg"
            />
          </Reveal>
          <Reveal intensity="base">
            <ProjectCard
              title="결제 플로우 안정화"
              tags={["State Sync", "Error/Loading UX"]}
              href="/projects/order"
              src="/images/project-order.jpg"
            />
          </Reveal>
          <Reveal intensity="base">
            <ProjectCard
              title="Design System 작업"
              tags={["Design Tokens", "Storybook"]}
              href="/projects/design-system"
              src="/images/project-ds.jpg"
            />
          </Reveal>
          {variant === "full" && <>{/* 더 많은 카드 배치 가능 */}</>}
        </div>

        {variant === "teaser" ? (
          <Reveal intensity="soft" className="mt-8">
            <Link
              href="/projects"
              className="inline-block rounded-lg border bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              모든 프로젝트 보기 →
            </Link>
          </Reveal>
        ) : null}
      </div>
    </Section>
  );
}
