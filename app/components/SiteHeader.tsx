// app/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string; // 카드 스타일(테두리/배경 등)
  dock?: boolean; // 도킹 기능 on/off
  topClass?: string; // 도킹 시 상단 여백
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
  const innerRef = useRef<HTMLDivElement | null>(null); // 실제 가시 너비 측정 대상

  // 1) 초기 높이 기록
  useEffect(() => {
    if (!dock) return;
    if (wrapRef.current) setSpacerH(wrapRef.current.offsetHeight);
  }, [dock]);

  // 2) 도킹 기준점 관찰
  useEffect(() => {
    if (!dock) return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-12px 0px 0px 0px", threshold: 0 }
    );
    if (sentryRef.current) io.observe(sentryRef.current);
    return () => io.disconnect();
  }, [dock]);

  // 3) 도킹 전(=stuck=false) 실제 렌더 폭을 측정해서 저장
  useEffect(() => {
    if (!dock) return;

    const measure = () => {
      if (innerRef.current && !stuck) {
        const rect = innerRef.current.getBoundingClientRect();
        setDockWidth(Math.round(rect.width));
      }
    };

    measure(); // mount 시
    const ro = new ResizeObserver(() => measure());
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [dock, stuck]);

  // --- 네비 내용 (크기/패딩 고정)
  const Nav = (
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <Link
        href="/"
        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
      >
        youvin.dev
      </Link>

      <ul className="flex items-center gap-6 text-sm font-medium">
        {[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/about", label: "About" },
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
    </nav>
  );

  // ── dock off: 그냥 헤더
  if (!dock) return <header className={className}>{Nav}</header>;

  // ── dock on: 위치만 전환, 너비는 도킹 전 측정값으로 픽스
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
        {/* 도킹 전: max-w 컨테이너 / 도킹 후: 측정한 px 너비로 고정 */}
        <div
          ref={innerRef}
          className="mx-auto px-2"
          style={stuck && dockWidth ? { width: dockWidth } : undefined}
        >
          <header
            className={[
              "rounded-2xl border border-secondary/70",
              stuck
                ? "bg-background/80 backdrop-blur-md shadow-lg shadow-black/5"
                : "bg-background/60 backdrop-blur-[2px] shadow-md",
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
