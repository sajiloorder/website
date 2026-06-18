"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative
        w-[52px]
        h-[22px]
        rounded-full
        overflow-hidden
        select-none
      "
    >
      {/* Track */}
      <div
        className={`
          absolute inset-0 rounded-full
          transition-colors duration-300
          ${
            isDark
              ? "bg-[#1f1f1f]"
              : "bg-[#ececec]"
          }
        `}
      />

      {/* Text */}
      <span
        className={`
          absolute inset-0
          flex items-center
          text-[7px]
          font-medium
          tracking-[0.15em]
          transition-all duration-300
          ${
            isDark
              ? "justify-start pl-[6px] text-white/70"
              : "justify-end pr-[6px] text-black/60"
          }
        `}
      >
        {isDark ? "DARK" : "LIGHT"}
      </span>

      {/* Knob */}
      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          w-[18px]
          h-[18px]
          rounded-full
          flex items-center justify-center
          shadow-md
          transition-all duration-300 ease-out
          ${
            isDark
              ? "translate-x-[31px] bg-[#2b2b2b]"
              : "translate-x-[2px] bg-white"
          }
        `}
      >
        <span className="text-[9px]">
          {isDark ? "🌙" : "☀️"}
        </span>
      </div>
    </button>
  );
}