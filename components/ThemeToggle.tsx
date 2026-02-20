'use client';

import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 shadow-soft transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-white"
    >
      {isDark ? (
        <span className="text-xs">☀️</span>
      ) : (
        <span className="text-xs">🌙</span>
      )}
    </button>
  );
}

