"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "190+", label: "Clients", sublabel: "and growing" },
  { value: "98%", label: "Retention", sublabel: "they stay" },
  { value: "10yr", label: "Avg Partnership", sublabel: "longevity" },
  { value: "24hr", label: "Response", sublabel: "always" },
];

const logos = [
  { name: "DPD", bg: "#DC0032", text: "#fff" },
  { name: "Wayfair", bg: "#7B2D8B", text: "#fff" },
  { name: "InPost", bg: "#FFD100", text: "#222" },
  { name: "Poundstretcher", bg: "#E31837", text: "#fff" },
  { name: "Ocado", bg: "#5C068C", text: "#fff" },
  { name: "CEVA", bg: "#004B87", text: "#fff" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function StatsBar() {
  return (
    <section className="relative w-full bg-navy-900 py-20 md:py-28 overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-4xl font-extrabold leading-tight text-white md:text-5xl">
            They trust us.{" "}
            <span className="text-teal-5">Every single day.</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            190+ companies. DPD. Wayfair. InPost.{" "}
            <strong className="text-white">Names you know.</strong>
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={itemVariants}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30"
            >
              <div className="text-3xl font-extrabold text-teal-5 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-white/40">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-white/30">
            Household names we supply
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 min-w-[100px] items-center justify-center rounded-xl px-5 text-sm font-extrabold tracking-wide opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                style={{ backgroundColor: logo.bg, color: logo.text }}
              >
                {logo.name}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-teal-5/40 bg-teal-5/10 px-6 py-3 text-sm font-semibold text-teal-4 transition-all duration-300 hover:border-teal-5 hover:bg-teal-5/20"
            >
              Want to be on this list? Let&apos;s Talk
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
