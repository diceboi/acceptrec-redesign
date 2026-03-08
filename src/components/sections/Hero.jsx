"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-navy-900 pt-16">
      {/* ── Animated blob background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Blob 1 – top left, teal */}
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "75%",
            width: "70%",
            left: "-15%",
            top: "-10%",
            background: "var(--color-teal-5)",
            opacity: 0.18,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* Blob 2 – top right, purple */}
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "65%",
            width: "60%",
            right: "-10%",
            top: "-8%",
            background: "var(--color-purple-5)",
            opacity: 0.22,
            filter: "blur(90px)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            y: [0, 120, 0],
          }}
          transition={{
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />
        {/* Blob 3 – bottom right, teal darker */}
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "55%",
            width: "65%",
            right: "-15%",
            bottom: "-10%",
            background: "var(--color-teal-6)",
            opacity: 0.15,
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.35, 1],
            x: [0, -140, 0],
            y: [0, -80, 0],
          }}
          transition={{
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
        />
        {/* Blob 4 – bottom left, purple dark */}
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "60%",
            left: "-10%",
            bottom: "-10%",
            background: "var(--color-purple-6)",
            opacity: 0.2,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.45, 1],
            x: [0, 110, 0],
            y: [0, -100, 0],
          }}
          transition={{
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
        />
      </div>

      {/* ── Dot pattern ── */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-30" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-sm font-semibold text-teal-4">
            Trusted by 190+ companies across the UK
          </span>
        </motion.div>

        {/* H1 — SEO + design hero */}
        <motion.h1
          className="font-sans text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Give a{" "}
          <span className="relative">
            <span className="text-teal-5">Shift.</span>
            {/* Glow under the word */}
            <span className="pointer-events-none absolute -bottom-2 left-0 h-1 w-full rounded-full bg-teal-5/50 blur-sm" />
          </span>
        </motion.h1>

        {/* Sub-tagline — SEO H2 (screen-reader accessible) */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/60 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About your operation. About your deadlines. About your people.
        </motion.p>

        {/* Hidden SEO H2 for screen readers / crawlers */}
        <h2 className="sr-only">Looking for work?</h2>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal-5 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-5/25 transition-all duration-300 hover:bg-teal-6 hover:shadow-teal-5/40 hover:shadow-xl"
          >
            <span>Find Staff</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15"
          >
            <span>Find Work</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* Social proof mini bar */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-4">★★★★★</span> 4.8 Google Rating
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span>1,200 workers deployed daily</span>
          <span className="h-4 w-px bg-white/20" />
          <span>Leicester · Coventry · Tamworth</span>
        </motion.div>
      </div>

      {/* ── Bottom gradient fade into next section ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2"
        >
          <div className="h-1.5 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
