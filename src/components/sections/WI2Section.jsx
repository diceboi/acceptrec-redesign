"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

// ─── Feature cards data ────────────────────────────────────────────────────────
const FEATURES = [
  {
    title: "Who actually arrived",
    desc: "See real-time attendance and last-minute changes.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12l2 2 4-4" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
  {
    title: "Who had to be replaced",
    desc: "Track replacements and understand the impact.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Who your supervisors want back",
    desc: "Capture feedback and identify top performers.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <path d="M12 14l-2 2 1 4h2l1-4-2-2z" />
        <path d="M9.5 16.5L7 20m7.5-3.5L17 20" strokeDasharray="1 2" />
        <path d="M14.5 10.5l1.5-1.5" />
        <path d="M16 9l1-1" />
      </svg>
    ),
  },
  {
    title: "Where people don't want to work",
    desc: "Spot departments and sites with low retention.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
        <path d="M3 21h18" />
        <path d="M9 9h1m5 0h1m-7 4h1m5 0h1" />
      </svg>
    ),
  },
  {
    title: "Where workers recommend",
    desc: "Build a strong reputation that attracts and retains.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
      </svg>
    ),
  },
  {
    title: "Where you're starting again",
    desc: "Reduce repeated inductions and cost.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

// ─── Insights cards ────────────────────────────────────────────────────────────
const INSIGHTS = [
  {
    title: "See",
    desc: "Real-time visibility of who is booked, on site, absent and replaced.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Understand",
    desc: "Capture conversations, reviews and history to uncover what really matters.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Retain",
    desc: "Rebook your best workers, improve continuity and reduce repeated induction.",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 15a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1a4 4 0 01-8 0v-1" />
        <path d="M12 3C8 3 5 6 5 9c0 4 3 6 7 6s7-2 7-6c0-3-3-6-7-6z" />
        <path d="M12 15v6" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

// ─── Section 1 — Feature grid ─────────────────────────────────────────────────
function FeatureGrid() {
  return (
    <section className="relative w-full bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Headline */}
        <motion.div className="mb-14 text-center" {...fadeUp()}>
          <h2 className="font-sans text-4xl font-semibold leading-tight text-white md:text-5xl">
            Most agencies tell you they filled the shift.
          </h2>
          <h2 className="font-sans text-4xl font-semibold leading-tight md:text-5xl mt-1">
            <span className="text-teal-5">WI²</span>{" "}
            <span className="text-white">shows you what happened next.</span>
          </h2>
        </motion.div>

        {/* Feature items — divided, no boxes */}
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-6 lg:divide-y-0">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.07)}
              className="flex flex-col gap-3 p-6 lg:px-6 lg:py-2"
            >
              <div className="text-teal-5">{f.icon}</div>
              <h3 className="font-sans text-sm font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2 — Insights + testimonial ───────────────────────────────────────
function InsightsSection() {
  return (
    <section className="relative w-full bg-navy-800 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Label + headline */}
        <motion.div className="mb-14 text-center" {...fadeUp()}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-5">
            Workforce Intelligence is how we do it differently
          </p>
          <h2 className="font-sans text-4xl font-semibold leading-tight text-white md:text-5xl">
            Insights that help you see, understand and retain.
          </h2>
        </motion.div>

        {/* Insight cards — in boxes */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {INSIGHTS.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.1)}
              className="glass-card rounded-2xl p-7 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-teal-5/10 p-4 text-teal-5">
                {item.icon}
              </div>
              <h3 className="mb-2 font-sans text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: quote + photo + CTA — divider separated, no boxes */}
        <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
          {/* Quote */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex-1 p-8"
          >
            <div className="mb-4 text-4xl leading-none text-teal-5 font-serif">&ldquo;</div>
            <p className="text-base leading-relaxed text-white/80 font-medium">
              WI² has completely changed how we manage our temporary workforce.
              We finally understand what&rsquo;s happening — and why. Repeated
              inductions down <span className="font-bold text-white">32%</span>{" "}
              in six months.
            </p>
          </motion.div>

          {/* Operations Manager */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-1 flex-col items-start justify-between gap-6 p-8"
          >
            <div className="flex items-center gap-4">
              <div
                className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-teal-7) 0%, var(--color-navy-600) 100%)",
                }}
                aria-hidden="true"
              >
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="26" r="12" fill="rgba(255,255,255,0.15)" />
                  <ellipse cx="32" cy="56" rx="22" ry="16" fill="rgba(255,255,255,0.08)" />
                </svg>
              </div>
              <div>
                <div className="font-sans text-sm font-bold text-white">Operations Manager</div>
                <div className="text-xs text-white/45">Manufacturing Client, Midlands</div>
                <div className="mt-1.5 flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-4 text-sm">&#9733;</span>
                  ))}
                  <span className="text-yellow-4 text-sm" style={{ opacity: 0.5 }}>&#9733;</span>
                  <span className="ml-1 text-xs text-white/45">4.8 on Google</span>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-5 transition-colors hover:text-teal-4"
            >
              Read full story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-1 flex-col justify-between gap-6 p-8"
          >
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-5">
                Recruitment when you need it
              </p>
              <p className="text-sm leading-relaxed text-white/65">
                We deliver the people you need, when you need them. From short
                notice cover to long-term hires, we make it simple.
              </p>
            </div>
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-teal-4"
            >
              Get workers today
              <svg
                width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Export ────────────────────────────────────────────────────────────────────
export function WI2Section() {
  return (
    <>
      <FeatureGrid />
      <InsightsSection />
    </>
  );
}
