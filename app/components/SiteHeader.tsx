"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
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
  const [stuck, setStuck] = useState(false);
  const [spacerH, setSpacerH] = useState(0);
  const [dockWidth, setDockWidth] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sentryRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const nav: NavItem[] = [
    { label: "Skills", sectionId: "skills", href: "/#skills" },
    { label: "Projects", sectionId: "projects", href: "/#projects" },
    { label: "Blog", sectionId: "blog", href: "/#blog" },
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
      className="flex items-center justify-between px-4 h-12"
    >
      <Link
        href="/"
        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
      >
        youvin.dev
      </Link>

      <ul className="items-center gap-6 text-sm font-medium hidden sm:flex">
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

      {/* 모바일 햄버거 버튼 */}
      <div className="flex sm:hidden text-sm font-medium items-center gap-2">
        <a
          href="https://github.com/YouVin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub 프로필로 이동"
          className="rounded-full bg-white/95 shadow-md shadow-black/10 p-1.5
             hover:bg-zinc-50 transition-colors"
        >
          <FiGithub className="text-lg" />
        </a>

        <button
          type="button"
          aria-label="섹션 메뉴 열기"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-full bg-white/95 shadow-md shadow-black/10 p-1.75
             hover:bg-zinc-50 transition-colors"
        >
          {mobileOpen ? (
            <FiX className="text-md" />
          ) : (
            <FiMenu className="text-md" />
          )}
        </button>

        {/* 모바일 드롭다운 메뉴 */}
        {mobileOpen && (
          <div
            className="absolute inset-x-0 top-14 mx-0 w-full
             rounded-2xl border border-zinc-200
             bg-white/20 shadow-xl shadow-black/15 backdrop-blur-lg"
          >
            <ul className="flex flex-col gap-0.5 py-2 text-sm font-medium">
              {nav.map((item) => (
                <li key={item.sectionId}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setMobileOpen(false);
                    }}
                    className="block px-4 py-2 text-muted hover:text-primary
                       hover:bg-zinc-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
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
