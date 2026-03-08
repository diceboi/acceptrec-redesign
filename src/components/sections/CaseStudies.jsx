"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    tag: "Warehousing • DPD",
    stat: "55 Workers",
    statSub: "Deployed in 3 Days",
    description:
      "When DPD faced a sudden surge in parcel volumes, we mobilised a fully compliant workforce within 72 hours — zero disruption.",
    color: "from-teal-8/80 to-teal-5/20",
    border: "border-teal-5/30",
  },
  {
    tag: "Food Production • Major Retailer",
    stat: "98%",
    statSub: "Fill Rate Maintained",
    description:
      "Consistent workforce coverage for a national food manufacturer across 3 Midlands sites for 18 consecutive months.",
    color: "from-purple-8/80 to-purple-5/20",
    border: "border-purple-4/30",
  },
  {
    tag: "Logistics • InPost",
    stat: "75%",
    statSub: "Reduction in No-Shows",
    description:
      "Our tech-driven pre-shift confirmation system cut attendance failures dramatically, saving InPost thousands per week.",
    color: "from-navy-700/80 to-teal-7/20",
    border: "border-teal-6/30",
  },
];

export function CaseStudies() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F2937] to-[#111827] overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-6/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-5">
            Excellence in Action
          </span>
          {/* SEO H2 */}
          <h2 className="font-sans text-4xl font-extrabold text-white md:text-5xl">
            Recruitment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/55 text-lg">
            Real results for real clients. Here&apos;s how we&apos;ve delivered
            when it mattered most.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.tag}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border ${cs.border} bg-gradient-to-b ${cs.color} p-8 transition-all duration-300 hover:teal-glow-sm`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="mb-5 text-xs font-bold uppercase tracking-wider text-white/40">
                {cs.tag}
              </div>
              <div className="text-5xl font-extrabold text-white">
                {cs.stat}
              </div>
              <div className="mt-1 text-base font-semibold text-teal-4">
                {cs.statSub}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
                {cs.description}
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
              >
                Read full case study →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
