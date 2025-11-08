"use client";

import { useUIStore } from "@/lib/store/uiStore";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useUIStore((s) => s.theme);

  const wrapperClass =
    theme === "dark"
      ? "min-h-screen bg-neutral-950 text-neutral-100"
      : "min-h-screen bg-white text-neutral-900";

  return <div className={wrapperClass}>{children}</div>;
}
