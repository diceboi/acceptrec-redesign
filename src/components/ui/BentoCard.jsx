"use client";

import Link from "next/link";

export function BentoCard({
  href = "#",
  icon: Icon,
  title,
  description,
  className = "",
  titleClassName = "",
  isTeal = false,
  noArrow = false,
  children,
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl p-8 flex flex-col transition-all duration-300 w-full h-full ${
        isTeal
          ? "bg-[#00A99D] text-white hover:bg-[#009b90]"
          : "border border-white/5 bg-[#1c2230] hover:border-white/10 hover:bg-[#232938]"
      } ${className}`}
    >
      {/* Background elements if teal */}
      {isTeal ? (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
      ) : (
        /* Subtle glow for dark cards on hover */
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/0 to-[#00A99D]/0 transition-all duration-500 group-hover:from-[#00A99D]/3 group-hover:to-transparent pointer-events-none"></div>
      )}

      {/* Content wrapper - top aligned */}
      <div className="relative z-10 flex flex-col items-start h-full">
        {Icon && (
          <div
            className={`mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
              isTeal
                ? "bg-white/20 backdrop-blur-sm text-white"
                : "bg-[#00A99D] text-white"
            }`}
          >
            <Icon size={28} stroke={1.5} />
          </div>
        )}

        {title && (
          <h3
            className={`mb-3 font-semibold leading-tight transition-colors duration-300 ${
              isTeal ? "text-white" : "text-white group-hover:text-[#00A99D]"
            } ${titleClassName || "text-[22px]"}`}
          >
            {title}
          </h3>
        )}

        {description && (
          <p
            className={`text-[15px] leading-relaxed mb-6 ${
              isTeal ? "text-white/90" : "text-[#8B98AB]"
            }`}
          >
            {description}
          </p>
        )}

        {/* Children (e.g. for custom stats or modified content) */}
        {children && <div className="mt-auto w-full">{children}</div>}
      </div>

      {/* Floating Arrow - bottom right, appears on hover (suppressed when noArrow=true) */}
      {!noArrow && (
        <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 z-20">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              isTeal ? "bg-white text-[#00A99D]" : "bg-[#00A99D] text-white"
            } shadow-lg`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      )}
    </Link>
  );
}
