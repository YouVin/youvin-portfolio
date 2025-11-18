"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, MouseEvent } from "react";
import Reveal from "@/app/components/Reveal";

type Props = {
  className?: string;
  dock?: boolean;
  topClass?: string;
};

type NavItem = {
  label: string;
  sectionId: string;
  href: string;
};

export default function SiteHeader({
  className = "",
  dock = false,
  topClass = "top-6",
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const [stuck, setStuck] = useState(false);
  const [spacerH, setSpacerH] = useState(0);
  const [dockWidth, setDockWidth] = useState<number | null>(null);

  const sentryRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const nav: NavItem[] = [
    { label: "Skills", sectionId: "skills", href: "/#skills" },
    { label: "Projects", sectionId: "projects", href: "/#projects" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    const isHome = pathname === "/";

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(item.sectionId);
      if (!el) return;

      const headerOffset = 88;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const targetY = rect.top + scrollTop - headerOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    } else {
      // 홈이 아닐 때는 /#skills 로 이동
      // (Link의 기본 동작 그대로 두고 싶으면 이 부분은 비워두면 됨)
      // e.preventDefault();
      // router.push(item.href);
    }
  };

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
        {nav.map((item) => (
          <li key={item.sectionId}>
            <Link
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="transition-colors text-muted hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
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

  // ── dock on
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
