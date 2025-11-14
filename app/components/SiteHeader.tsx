// app/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/app/components/Reveal";

type Props = {
  className?: string;
  dock?: boolean;
  topClass?: string;
};

export default function SiteHeader({
  className = "",
  dock = false,
  topClass = "top-6",
}: Props) {
  const pathname = usePathname();

  // --- 도킹 관련 상태
  const [stuck, setStuck] = useState(false);
  const [spacerH, setSpacerH] = useState(0);
  const [dockWidth, setDockWidth] = useState<number | null>(null);

  const sentryRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dock) return;
    if (wrapRef.current) setSpacerH(wrapRef.current.offsetHeight);
  }, [dock]);

  useEffect(() => {
    if (!dock) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-12px 0px 0px 0px", threshold: 0 }
    );
    if (sentryRef.current) io.observe(sentryRef.current);
    return () => io.disconnect();
  }, [dock]);

  useEffect(() => {
    if (!dock) return;

    const measure = () => {
      if (innerRef.current && !stuck) {
        const rect = innerRef.current.getBoundingClientRect();
        setDockWidth(Math.round(rect.width));
      }
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [dock, stuck]);

  const Nav = (
    <Reveal
      as="nav"
      intensity="soft"
      delay={0.06}
      className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
    >
      <Link
        href="/"
        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
      >
        youvin.dev
      </Link>

      <ul className="flex items-center gap-6 text-sm font-medium">
        {[
          { href: "/skills", label: "Skills" },
          { href: "/projects", label: "Projects" },
        ].map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  active ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href="https://github.com/YouVin"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-secondary/70 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary/60 hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </li>
      </ul>
    </Reveal>
  );

  // ── dock off: 그냥 헤더
  if (!dock) return <header className={className}>{Nav}</header>;

  // ── dock on: 위치 전환만 담당 (여기에는 transform 안 걸림!)
  return (
    <div className="relative">
      <div ref={sentryRef} className="absolute -top-1 h-1 w-full" aria-hidden />
      <div style={{ height: stuck ? spacerH : 0 }} />

      <div
        ref={wrapRef}
        className={[
          stuck ? "fixed" : "sticky",
          topClass,
          "inset-x-0 z-50 transition-colors duration-300",
        ].join(" ")}
      >
        <div
          ref={innerRef}
          className="mx-auto px-2"
          style={stuck && dockWidth ? { width: dockWidth } : undefined}
        >
          <header
            className={[
              "rounded-2xl border border-zinc-200/70",
              "transition-all duration-500 ease-out",
              stuck
                ? "bg-white/70 backdrop-blur-md shadow-lg shadow-black/5"
                : "bg-white/50 backdrop-blur-sm shadow-sm",
              className,
            ].join(" ")}
          >
            {Nav}
          </header>
        </div>
      </div>
    </div>
  );
}
