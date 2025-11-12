"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function MorphHeader() {
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById("hero-sentinel");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setCompact(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        compact
          ? "bg-glass border-b border-panel/50 shadow-sm"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 브랜드(히어로일 땐 크고, 컴팩트에선 작게) */}
        <Link
          href="/"
          className={[
            "font-bold tracking-tight transition-all",
            compact ? "text-lg" : "text-2xl",
            "text-ink",
          ].join(" ")}
          style={{
            letterSpacing: compact ? "-0.01em" : "-0.02em",
          }}
        >
          <span className="text-primary">youvin</span>.dev
        </Link>

        {/* 네비 + CTA */}
        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-6">
            {NAV.map((n) => {
              const active =
                n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={[
                      "text-sm transition-colors",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    ].join(" ")}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/projects"
            className={[
              "rounded-full px-3 py-1.5 text-sm font-medium transition-all",
              compact
                ? "bg-[color:var(--primary)]/20 text-ink hover:bg-[color:var(--primary)]/30"
                : "bg-[color:var(--primary)]/25 text-ink hover:bg-[color:var(--primary)]/35",
              "border border-panel/50",
            ].join(" ")}
          >
            보러가기 →
          </Link>
        </div>
      </nav>
    </header>
  );
}
