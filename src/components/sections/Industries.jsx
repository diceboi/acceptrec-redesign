"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    icon: "📦",
    title: "Warehousing & Industrial",
    description:
      "Recruiting a temporary warehouse workforce can be one of the most challenging aspects of your business. We're here to simplify the process.",
    href: "#",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "We source skilled and semi-skilled workers for production lines, assembly, and quality control across the Midlands.",
    href: "#",
  },
  {
    icon: "🍽️",
    title: "Food Production",
    description:
      "Specialist recruitment for food manufacturing environments with strict hygiene and compliance standards.",
    href: "#",
  },
  {
    icon: "🚛",
    title: "Driving & Logistics",
    description:
      "The logistics and driving markets have grown increasingly unpredictable. We find the right drivers — fast.",
    href: "#",
  },
  {
    icon: "⚙️",
    title: "Technical",
    description:
      "Engineering and technical roles filled by specialists who understand your operational requirements.",
    href: "#",
  },
  {
    icon: "💼",
    title: "Commercial",
    description:
      "Office support, admin, HR and customer service roles placed with precision across all sectors.",
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Industries() {
  return (
    <section className="relative w-full bg-navy-800 py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-5/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section label + heading (SEO H2) */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-5">
            What We Cover
          </span>
          <h2 className="font-sans text-4xl font-extrabold text-white md:text-5xl">
            Scale with <span className="text-teal-5">precision</span>
          </h2>
          {/* Hidden SEO H2 for screen readers & crawlers */}
          <h2 className="sr-only">Industries</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
            Specialising within niche industries, we use our expertise and
            systems to source the staff you need. We provide both temporary
            staffing and permanent solutions.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={cardVariants}>
              <Link
                href={industry.href}
                className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 hover:border-teal-5/40 hover:bg-teal-5/5 hover:teal-glow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/15 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {industry.icon}
                </div>
                <h3 className="mb-3 font-sans text-lg font-bold text-white group-hover:text-teal-4 transition-colors">
                  {industry.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  {industry.description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-teal-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
