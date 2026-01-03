"use client";

import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Section } from "@/app/components/Section";
import { BLOG_CARDS } from "@/lib/blog";

export default function BlogSection() {
  return (
    <Section id="blog">
      <div className="mx-auto w-full max-w-6xl px-6 text-center mb-60">
        <Reveal
          as="h2"
          intensity="bold"
          className="text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Blog
        </Reveal>

        <Reveal
          as="p"
          intensity="base"
          delay={0.08}
          className="mt-3 text-sm md:text-base text-muted"
        >
          프로젝트를 진행하며 마주한 고민과 해결 과정을 기록합니다.
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BLOG_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={card.title}
                as="article"
                intensity="soft"
                delay={0.06 * idx}
                className="h-full"
              >
                <Link
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "group relative block h-full rounded-2xl border bg-white/80",
                    "px-6 py-6 md:px-7 md:py-7",
                    "overflow-hidden backdrop-blur-sm transition-all duration-200",
                    "border-black/10 shadow-[0_18px_40px_rgba(15,23,42,0.10)]",
                    "hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] hover:-translate-y-0.5",
                    "cursor-pointer",
                  ].join(" ")}
                >
                  <div
                    aria-hidden
                    className={[
                      "pointer-events-none absolute inset-0 -z-10",
                      card.toneBg,
                      "mask-[radial-gradient(circle_at_top,black,transparent_65%)]",
                    ].join(" ")}
                  />

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
                      <Icon className="h-6 w-6 text-foreground/80 transition group-hover:text-foreground" />
                    </div>

                    <h3 className="text-left text-base font-semibold text-foreground md:text-lg">
                      {card.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-left text-sm text-muted leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-5 flex justify-start">
                    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-foreground/70">
                      {card.meta}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
