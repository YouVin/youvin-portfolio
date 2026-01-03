"use client";

import Link from "next/link";
import { Section } from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";
import { SiTistory, SiNotion } from "react-icons/si";

const BLOG_LINKS = [
  {
    label: "Tistory",
    href: "https://youvin.tistory.com",
    icon: SiTistory,
  },
];

export default function BlogSection() {
  return (
    <Section id="blog" className="my-50">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal
          as="h2"
          intensity="bold"
          className="text-xl md:text-2xl font-extrabold"
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

        <Reveal
          as="div"
          intensity="soft"
          delay={0.16}
          className="mt-6 flex justify-center gap-3"
        >
          {BLOG_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-4 py-2 text-sm font-medium text-foreground/90 transition hover:bg-white/80 hover:border-foreground/25"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
