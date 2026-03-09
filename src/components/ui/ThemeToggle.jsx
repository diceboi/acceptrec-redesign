"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-current/20 bg-current/5 transition-all duration-300 hover:border-teal-5/50 hover:bg-teal-5/10 hover:text-teal-4 cursor-pointer text-[var(--text-primary)]"
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark
            ? "rotate(0deg) scale(1)"
            : "rotate(-90deg) scale(0.5)",
        }}
      >
        <IconMoon size={16} strokeWidth={1.5} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark
            ? "rotate(90deg) scale(0.5)"
            : "rotate(0deg) scale(1)",
        }}
      >
        <IconSun size={16} strokeWidth={1.5} />
      </span>
    </button>
  );
}
