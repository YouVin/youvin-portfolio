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

  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);
  const isDark = theme === "dark";

  return (
    <header
      className="
        w-full 
        bg-background/85 backdrop-blur-md 
        border-b border-secondary/60
      "
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          youvin.dev
        </Link>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Nav Links */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      transition-colors 
                      hover:text-primary
                      ${isActive ? "text-foreground" : "text-muted"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* GitHub Button */}
            <li>
              <a
                href="https://github.com/YouVin"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg border border-secondary/70 
                  px-3 py-1.5 text-xs font-semibold 
                  text-foreground 
                  hover:bg-secondary/60 hover:text-primary 
                  transition-colors
                "
              >
                GitHub
              </a>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              rounded-md border border-secondary/70 
              bg-panel px-2 py-1 
              text-xs font-medium text-foreground 
              hover:bg-secondary/50 hover:text-primary 
              transition-colors
            "
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}
