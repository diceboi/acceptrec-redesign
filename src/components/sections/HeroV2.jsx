"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Google Rating hook (same as Hero.jsx) ─────────────────────────────────
function useGoogleRating() {
  const [data, setData] = useState({ rating: "4.8", loading: true });
  useEffect(() => {
    fetch("/api/google-rating")
      .then((r) => r.json())
      .then((d) =>
        setData({
          rating: d.rating ? d.rating.toFixed(1) : "4.8",
          loading: false,
        }),
      )
      .catch(() => setData({ rating: "4.8", loading: false }));
  }, []);
  return data;
}

// ─── Animated wavy tech lines canvas ──────────────────────────────────────────
function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Lines with varying sharpness / opacity — pure teal-5 brand colour
    const lines = [
      {
        y: 0.1,
        amp: 40,
        freq: 0.0052,
        speed: 0.36,
        opacity: 0.12,
        width: 1.5,
        blur: 0,
      },
      {
        y: 0.21,
        amp: 20,
        freq: 0.0075,
        speed: 0.55,
        opacity: 0.06,
        width: 1.0,
        blur: 2.5,
      },
      {
        y: 0.33,
        amp: 55,
        freq: 0.0036,
        speed: 0.26,
        opacity: 0.16,
        width: 2.0,
        blur: 0,
      },
      {
        y: 0.44,
        amp: 14,
        freq: 0.0092,
        speed: 0.68,
        opacity: 0.04,
        width: 0.8,
        blur: 3,
      },
      {
        y: 0.55,
        amp: 48,
        freq: 0.0046,
        speed: 0.33,
        opacity: 0.13,
        width: 1.5,
        blur: 0,
      },
      {
        y: 0.65,
        amp: 26,
        freq: 0.0064,
        speed: 0.5,
        opacity: 0.07,
        width: 1.2,
        blur: 1.5,
      },
      {
        y: 0.76,
        amp: 62,
        freq: 0.0029,
        speed: 0.2,
        opacity: 0.15,
        width: 2.2,
        blur: 0,
      },
      {
        y: 0.86,
        amp: 17,
        freq: 0.0088,
        speed: 0.6,
        opacity: 0.05,
        width: 0.9,
        blur: 2,
      },
      {
        y: 0.94,
        amp: 34,
        freq: 0.0055,
        speed: 0.44,
        opacity: 0.09,
        width: 1.3,
        blur: 0,
      },
    ];

    const draw = (t) => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      lines.forEach((l) => {
        ctx.save();
        if (l.blur > 0) ctx.filter = `blur(${l.blur}px)`;
        ctx.beginPath();
        ctx.moveTo(0, H * l.y);
        for (let x = 0; x <= W; x += 3) {
          ctx.lineTo(x, H * l.y + Math.sin(x * l.freq + t * l.speed) * l.amp);
        }
        ctx.strokeStyle = `rgba(0,165,165,${l.opacity})`;
        ctx.lineWidth = l.width;
        ctx.stroke();
        ctx.restore();
      });
    };

    const loop = (ts) => {
      draw(ts / 1000);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}

// ─── Mini sparkline ────────────────────────────────────────────────────────────
function Sparkline({ data, color = "var(--color-teal-5)", h = 30, w = 80 }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const rng = max - min || 1;
  const pts = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * w},${h - ((v - min) / rng) * (h - 6) - 3}`,
    )
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Attendance bar ────────────────────────────────────────────────────────────
function AttendanceBar({ value = 97.8 }) {
  return (
    <div className="mt-2">
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-teal-5), var(--color-teal-4))",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.7 }}
        />
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-white/30">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

// ─── Interactive Dashboard Panel ──────────────────────────────────────────────
const MENU_ITEMS = [
  { label: "Overview" },
  { label: "Sites" },
  { label: "Workforce" },
  { label: "Bookings" },
  { label: "Communications" },
  { label: "Reviews" },
  { label: "Reports" },
  { label: "Settings" },
];

const SHIFT_STATS = [
  { label: "Booked", value: 40, accent: false },
  { label: "On Site", value: 38, accent: true },
  { label: "Replaced", value: 2, warn: true },
  { label: "Absent", value: 0, muted: true },
];

function DashboardPanel() {
  const [active, setActive] = useState(0);
  const [today, setToday] = useState("15 May");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long" }),
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
      className="glass-card w-full overflow-hidden rounded-2xl"
      style={{
        maxWidth: 560,
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,165,165,0.08)",
      }}
    >
      {/* Mobile header (logo only, no sidebar) */}
      <div className="hero-v2-dash-sidebar flex items-center justify-between border-b border-white/5 px-4 py-3 lg:hidden">
        <span className="text-[18px] font-extrabold tracking-tight text-white">
          WI<span className="text-teal-5">²</span>
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-[11px] text-white/35">Auto refresh</span>
        </div>
      </div>

      {/* Desktop: sidebar + content side by side */}
      <div className="flex">
        {/* Sidebar — hidden on mobile */}
        <div
          className="hero-v2-dash-sidebar hidden lg:flex flex-col border-r border-white/5 py-5"
          style={{ width: 148, flexShrink: 0 }}
        >
          {/* Logo */}
          <div className="border-b border-white/5 pb-4 pl-4 pr-4 mb-3">
            <span className="text-[18px] font-extrabold tracking-tight text-white">
              WI<span className="text-teal-5">²</span>
            </span>
          </div>

          {MENU_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-active={i === active ? "true" : "false"}
              className="wi2-menu-btn flex items-center gap-2 px-4 py-2 text-left text-xs transition-all duration-150"
              style={{
                fontWeight: i === active ? 600 : 400,
                background:
                  i === active ? "rgba(0,165,165,0.14)" : "transparent",
                border: "none",
                borderLeftWidth: 2,
                borderLeftStyle: "solid",
                borderLeftColor: i === active ? "var(--color-teal-5)" : "transparent",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-3 p-4 lg:p-5 min-w-0">
          {/* Header row — desktop only (mobile has its own header above) */}
          <div className="hidden lg:flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">
                  Morning Shift
                </span>
                <span className="text-xs text-white/30">▾</span>
              </div>
              <div className="mt-0.5 text-[11px] text-white/35">
                Today, {today} · Leicester DC
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
              <span className="text-[11px] text-white/35">Auto refresh</span>
            </div>
          </div>

          {/* Mobile shift info */}
          <div className="flex items-center justify-between lg:hidden">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-white">
                  Morning Shift
                </span>
                <span className="text-xs text-white/30">▾</span>
              </div>
              <div className="text-[11px] text-white/35">
                Today, {today} · Leicester DC
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-1.5 lg:gap-2">
            {SHIFT_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${
                    s.accent ? "rgba(0,165,165,0.22)" : "rgba(255,255,255,0.06)"
                  }`,
                }}
              >
                <div className="mb-1 text-[9px] lg:text-[10px] text-white/38">
                  {s.label}
                </div>
                <div
                  className="text-lg lg:text-xl font-bold leading-none"
                  style={{
                    color: s.accent
                      ? "var(--color-teal-4)"
                      : s.warn
                        ? "var(--color-yellow-4)"
                        : s.muted
                          ? "rgba(255,255,255,0.25)"
                          : "#fff",
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Middle cards */}
          <div className="grid grid-cols-2 gap-2">
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="mb-1.5 text-[11px] text-white/38">
                Average Worker Rating
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl lg:text-2xl font-bold text-white">
                  4.7
                </span>
                <span className="text-yellow-4 text-base">&#9733;</span>
              </div>
              <Sparkline data={[4, 5, 3, 6, 5, 7, 6, 8, 7, 9]} />
              <div className="mt-1 text-[10px] text-white/25">
                Based on 286 reviews
              </div>
            </div>

            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="mb-1.5 text-[11px] text-white/38">
                Workers Returning Next Week
              </div>
              <div className="text-xl lg:text-2xl font-bold text-white">31</div>
              <Sparkline
                data={[28, 30, 27, 31, 29, 32, 30, 31, 31, 31]}
                color="var(--color-purple-2)"
              />
              <div className="mt-1 text-[11px] text-teal-5">
                ↑ 12% vs last week
              </div>
            </div>
          </div>

          {/* Attendance */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[11px] text-white/38">Attendance Today</div>
            <div className="text-xl lg:text-2xl font-bold text-white">
              97.8%
            </div>
            <AttendanceBar value={97.8} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Bottom 3-col stats bar ────────────────────────────────────────────────────
const BOTTOM_STATS = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
    value: "4.8 Google rating",
    sub: "Based on 286 reviews",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    value: "1,200+ workers daily",
    sub: "Across all sites",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    value: "ISO 9001 Certified",
    sub: "Quality you can trust",
  },
];

// ─── HeroV2 ───────────────────────────────────────────────────────────────────
export function HeroV2() {
  const { rating, loading } = useGoogleRating();

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-navy-900 pt-20">
      {/* ── Animated wavy tech background ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TechBackground />
      </div>

      {/* ── Glow blobs (same pattern as Hero.jsx) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "70%",
            width: "55%",
            left: "-10%",
            top: "-10%",
            background: "var(--color-teal-5)",
            opacity: 0.11,
            filter: "blur(90px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "55%",
            right: "-10%",
            top: "-5%",
            background: "var(--color-purple-5)",
            opacity: 0.18,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* ── Dot pattern overlay ── */}
      <div className="pointer-events-none absolute inset-0 z-0 dot-pattern opacity-20" />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 px-6 lg:py-16 pb-8 lg:grid-cols-2 lg:gap-8">
        {/* LEFT — Text */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal-5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-sm font-semibold text-teal-4">
              Trusted by 190+ companies across the UK
            </span>
          </motion.div>

          {/* Hidden SEO H1 */}
          <h1 className="sr-only">
            Industrial Recruitment Agency Across Leicester, Coventry & Tamworth
          </h1>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Recruitment fills shifts.
            </h2>
            <h2 className="font-sans text-5xl font-semibold leading-[1.08] tracking-tight text-teal-5 md:text-6xl lg:text-7xl mt-1">
              WI² builds
            </h2>
            <h2 className="font-sans text-5xl font-semibold leading-[1.08] tracking-tight text-teal-5 md:text-6xl lg:text-7xl">
              workforces.
            </h2>
          </motion.div>

          {/* Sub */}
          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            The Workforce Intelligence System helping industrial businesses
            understand, retain and strengthen their temporary workforce.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/innovation-partners#apply"
              className="group inline-flex items-center gap-2 rounded-xl border border-teal-5 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 bg-teal-5"
            >
              <span>Book a Workforce Intelligence Review</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link
              href="/get-started"
              className="inline-flex underline items-center gap-1.5 text-sm font-semibold text-white underline-offset-2 transition-colors duration-200 hover:text-teal-4"
            >
              Need temporary staff today? <span className="ml-0.5">→</span>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5 text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-4">★★★★★</span>
              <span className={loading ? "opacity-40" : ""}>
                {rating} Google Rating
              </span>
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Dashboard */}
        <div className="flex w-full items-center justify-center lg:justify-end mt-8 lg:mt-0">
          <DashboardPanel />
        </div>
      </div>

      {/* ── Bottom 3-col stats bar ── */}
      <div className="hero-v2-stats-bar relative z-10 w-full border-t border-white/10" style={{ backdropFilter: "blur(16px)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 px-6">
          {BOTTOM_STATS.map((s, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 py-5 sm:px-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 + i * 0.12 }}
            >
              <span className="text-teal-5 flex-shrink-0">{s.icon}</span>
              <div>
                <div className="font-sans text-sm font-bold text-white">
                  {s.value}
                </div>
                <div className="text-xs text-white/38 mt-0.5">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}
