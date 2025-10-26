"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/lib/store/uiStore";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  // Zustand에서 theme과 toggle 불러오기
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);

  // 다크모드인지 여부
  const isDark = theme === "dark";

  return (
    <header className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        {/* left: logo / name */}
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 hover:opacity-80 dark:text-neutral-100"
        >
          youvin.dev
        </Link>

        {/* right side */}
        <div className="flex items-center gap-4">
          {/* nav links */}
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-neutral-900 dark:hover:text-white ${
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-600 dark:text-neutral-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* GitHub 버튼 */}
            <li>
              <a
                href="https://github.com/YouVin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
              >
                GitHub
              </a>
            </li>
          </ul>

          {/* theme toggle button */}
          <button
            onClick={toggleTheme}
            className="rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}
