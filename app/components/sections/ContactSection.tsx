"use client";

import Link from "next/link";
import { Section } from "@/app/components/Section";
import Reveal from "@/app/components/Reveal";
import { FiMail, FiGithub } from "react-icons/fi";

const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:youvin@email.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/YouVin",
    icon: FiGithub,
  },
];

export default function ContactSection() {
  return (
    <Section id="contact" className="my-50">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal
          as="h2"
          intensity="bold"
          className="text-xl md:text-2xl font-extrabold"
        >
          Contact Me
        </Reveal>

        <Reveal
          as="p"
          intensity="base"
          delay={0.08}
          className="mt-3 text-sm md:text-base text-muted"
        >
          궁금한 점이나 협업 제안이 있다면 편하게 연락 주세요.
        </Reveal>

        <Reveal
          as="div"
          intensity="soft"
          delay={0.16}
          className="mt-6 flex justify-center gap-3"
        >
          {CONTACT_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/20 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary/50"
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
