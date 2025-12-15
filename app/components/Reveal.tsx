"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type YMode = number | "auto";
type Intensity = "soft" | "base" | "bold";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  once?: boolean;
  className?: string;
  children?: ReactNode;
  y?: YMode;
  intensity?: Intensity;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  initialShow?: boolean;
}

export default function Reveal({
  as: Comp = "div",
  delay = 0,
  once = true,
  className = "",
  children = null,
  y = "auto",
  intensity = "base",
  duration = 0.7,
  threshold = 0.45,
  rootMargin = "0px 0px -25% 0px",
  initialShow = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState<boolean>(initialShow);
  const [yAuto, setYAuto] = useState<number>(24);

  const scale = useMemo(() => {
    switch (intensity) {
      case "soft":
        return 0.1;
      case "bold":
        return 0.18;
      default:
        return 0.14;
    }
  }, [intensity]);

  useEffect(() => {
    if (initialShow) return;

    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const raw = rect.height * scale + vh * 0.02;
      const ypx = Math.max(12, Math.min(raw, 56));
      setYAuto(Math.round(ypx));
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(el);
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
    };
  }, [scale, initialShow]);

  useEffect(() => {
    if (initialShow) return;

    const el = ref.current;
    if (!el) return;

    let timeoutId: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => setShow(true), delay * 1000);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      io.disconnect();
    };
  }, [delay, once, threshold, rootMargin, initialShow]);

  const yStart = typeof y === "number" ? y : yAuto;

  return (
    <Comp
      ref={ref}
      className={`will-change-transform transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transform: show ? "translateY(0px)" : `translateY(${yStart}px)`,
        opacity: show ? 1 : 0,
        filter: show ? "blur(0px)" : "blur(2px)",
      }}
    >
      {children}
    </Comp>
  );
}
