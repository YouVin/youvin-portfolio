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
  y?: YMode; // number | "auto"
  intensity?: Intensity; // "auto"일 때 강도 힌트(옵션)
  duration?: number;
  threshold?: number;
  rootMargin?: string;
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
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);
  const [yAuto, setYAuto] = useState<number>(24);

  // 강도별 배율(취향에 맞게 조절 가능)
  const scale = useMemo(() => {
    switch (intensity) {
      case "soft":
        return 0.1;
      case "bold":
        return 0.18;
      default:
        return 0.14; // base
    }
  }, [intensity]);

  // 요소/뷰포트 크기 기반으로 y 계산해서 클램프
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // 기준: 요소 높이의 일부 + 뷰포트 비율을 섞어서 자연스럽게
      const raw = rect.height * scale + vh * 0.02;
      // 과도한 점프 방지: 12px ~ 56px 사이로 클램프
      const ypx = Math.max(12, Math.min(raw, 56));
      setYAuto(Math.round(ypx));
    };

    compute();

    // 리사이즈/글꼴 로딩/콘텐츠 변화 대응
    const ro = new ResizeObserver(() => compute());
    ro.observe(el);
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
    };
  }, [scale]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = window.setTimeout(() => setShow(true), delay * 1000);
          if (once) io.disconnect();
          return () => window.clearTimeout(t);
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, once, threshold, rootMargin]);

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
