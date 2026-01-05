"use client";

import Link from "next/link";
import { FiMail } from "react-icons/fi";

export default function FloatingContactButton() {
  return (
    <Link
      href="mailto:dbqls1210@gmail.com"
      aria-label="메일로 연락하기"
      className={[
        "fixed bottom-10 z-50",
        "right-[clamp(1rem,5vw,4rem)]",
        "inline-flex items-center gap-2 rounded-full",
        "border border-black/10 bg-white/85 backdrop-blur-md",
        "px-4 py-3 text-sm font-semibold text-foreground",
        "shadow-[0_18px_45px_rgba(15,23,42,0.16)]",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.20)]",
        "cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/20",
      ].join(" ")}
    >
      <FiMail className="h-5 w-5" />
      <span className="hidden sm:inline">Contact</span>
    </Link>
  );
}
