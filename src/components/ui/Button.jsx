import React from "react";
import { cn } from "@/lib/utils";

/**
 * Two-variant button system:
 *   variant="primary"   – teal filled  (main action)
 *   variant="secondary" – ghost outline (supporting action)
 *
 * Both use rounded-xl (moderate rounding, not fully round).
 * Size: sm | md | lg
 */
export const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary", // primary | secondary
      size = "md", // sm | md | lg
      ...props
    },
    ref,
  ) => {
    const base =
      "cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-[length:var(--text-base)]",
      lg: "h-13 px-8 text-base",
    };

    const variants = {
      // ── Main CTA: teal filled ──────────────────────────────────
      primary: "bg-teal-5 text-white hover:bg-teal-6",

      // ── Supporting: glass outline ──────────────────────────────
      secondary:
        "border border-white/25 bg-white/8 text-white backdrop-blur-sm hover:border-white/45 hover:bg-white/15",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
