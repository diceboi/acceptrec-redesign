"use client";

import { motion } from "framer-motion";
import { AnimatedNumber } from "../ui/AnimatedNumber";

const bigStats = [
  { value: "30K+", label: "Workers Placed" },
  { value: "1M+", label: "Hours Worked" },
  { value: "190+", label: "Active Clients" },
  { value: "11", label: "Years in Business" },
];

export function Impact() {
  return (
    <section className="relative w-full bg-navy-700 overflow-hidden py-24 md:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-5">
            Our Impact
          </span>
          <h2 className="font-sans text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            1,200 Workers
            <br />
            <span className="text-teal-5">deployed every single day</span>
          </h2>
        </motion.div>

        {/* Big stat cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {bigStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-4xl font-semibold text-white md:text-5xl">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="relative mt-2 text-sm font-semibold uppercase tracking-wider text-teal-5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
