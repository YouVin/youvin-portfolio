import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 섹션 간 간격 */}
      <div className="space-y-[14vh] md:space-y-[18vh] lg:space-y-[20vh]">
        {/* S1: 내 소개 */}
        <Section id="about">
          <div className="mx-auto w-full max-w-5xl px-6">
            <Reveal
              as="p"
              intensity="soft"
              className="text-sm font-medium text-neutral-500"
            >
              Hi, I’m YouVin 👋
            </Reveal>

            <Reveal
              as="h1"
              delay={0.06}
              intensity="bold"
              className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl"
            >
              사용자의 체감 반응 속도에 집착하는 프론트엔드 개발자
            </Reveal>

            <Reveal
              as="p"
              delay={0.12}
              intensity="base"
              className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600"
            >
              React · Next.js · Zustand로 인터랙션이 살아있는 웹 경험을
              만듭니다.
            </Reveal>

            <Reveal delay={0.18} intensity="soft" className="mt-6">
              <Link
                href="#skills"
                className="inline-block rounded-lg border bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
              >
                내 기술 보러가기 ↓
              </Link>
            </Reveal>
          </div>
        </Section>

        {/* S2: 내 기술 소개 */}
        <Section id="skills" className="bg-neutral-50">
          <div className="mx-auto w-full max-w-5xl px-6">
            <Reveal
              as="h2"
              intensity="bold"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              이렇게 만듭니다
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <Reveal delay={0.04} intensity="soft">
                <SkillBadge label="Optimistic UI" />
              </Reveal>
              <Reveal delay={0.07} intensity="soft">
                <SkillBadge label="Server–Client State Sync" />
              </Reveal>
              <Reveal delay={0.1} intensity="soft">
                <SkillBadge label="Zustand" />
              </Reveal>
              <Reveal delay={0.13} intensity="soft">
                <SkillBadge label="React · Next.js" />
              </Reveal>
              <Reveal delay={0.16} intensity="soft">
                <SkillBadge label="Design System / Tokens" />
              </Reveal>
              <Reveal delay={0.19} intensity="soft">
                <SkillBadge label="Testing / Storybook" />
              </Reveal>
            </div>

            <Reveal delay={0.24} intensity="soft" className="mt-8">
              <Link
                href="#projects"
                className="inline-block rounded-lg border px-3 py-2 text-sm hover:bg-white"
              >
                프로젝트 보러가기 ↓
              </Link>
            </Reveal>
          </div>
        </Section>

        {/* S3: 프로젝트 소개 */}
        <Section id="projects">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Reveal
              as="h2"
              intensity="bold"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            >
              대표 프로젝트
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal delay={0.05} intensity="base">
                <ProjectCard
                  title="도토리섬 — Cart Optimistic UI"
                  tags={["React", "Next.js", "Zustand"]}
                  href="/projects/cart"
                  src="/images/project-cart.jpg"
                />
              </Reveal>

              <Reveal delay={0.1} intensity="base">
                <ProjectCard
                  title="결제 플로우 안정화"
                  tags={["State Sync", "Error/Loading UX"]}
                  href="/projects/order"
                  src="/images/project-order.jpg"
                />
              </Reveal>

              <Reveal delay={0.15} intensity="base">
                <ProjectCard
                  title="Design System 작업"
                  tags={["Design Tokens", "Storybook"]}
                  href="/projects/design-system"
                  src="/images/project-ds.jpg"
                />
              </Reveal>
            </div>

            <Reveal delay={0.22} intensity="soft" className="mt-8">
              <Link
                href="/projects"
                className="inline-block rounded-lg border bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                모든 프로젝트 보기 →
              </Link>
            </Reveal>
          </div>
        </Section>
      </div>
    </main>
  );
}
