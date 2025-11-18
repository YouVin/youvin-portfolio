import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface UIState {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolved: "light" | "dark" =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;

  root.classList.toggle("dark", resolved === "dark");
  root.setAttribute("data-theme", resolved);
}

export const useUIStore = create<UIState>((set, get) => ({
  theme: "light",
  setTheme: (t) => {
    set({ theme: t });
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", t);
      applyTheme(t);
    }
  },
  toggleTheme: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    get().setTheme(next);
  },
}));

export function initThemeOnce() {
  if (typeof window === "undefined") return;
  try {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial: Theme =
      saved === "light" || saved === "system" ? saved : "dark"; // 기본 dark
    useUIStore.getState().setTheme(initial);
  } catch {}
}
