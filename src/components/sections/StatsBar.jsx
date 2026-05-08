"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatedNumber } from "../ui/AnimatedNumber";

const stats = [
  { value: "190+", label: "Clients", sublabel: "and growing" },
  { value: "98%", label: "Retention", sublabel: "they stay" },
  { value: "10yr", label: "Avg Partnership", sublabel: "longevity" },
  { value: "24hr", label: "Response", sublabel: "always" },
];

const logos = [
  { name: "Wayfair", src: "/partner-logos/wayfair-logo.png" },
  { name: "InPost", src: "/partner-logos/InPost_logo.png" },
  { name: "Vistry Group", src: "/partner-logos/vistry-group.webp" },
  { name: "Poundstretcher", src: "/partner-logos/Poundstretcher_Logo.png" },
  { name: "Howard Tenens", src: "/partner-logos/howard-tenens.png" },
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
    <section className="relative w-full bg-navy-700 py-20 md:py-28 overflow-hidden">
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
          <h2 className="font-sans text-4xl font-semibold leading-tight text-white md:text-5xl">
            They trust us.{" "}
            <span className="text-teal-5">Every single day.</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            190+ companies. Wayfair. InPost.{" "}
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
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-teal-5/5 to-teal-5/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-4xl font-semibold text-white md:text-5xl">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wider text-teal-5">
                {stat.label}
              </div>
              <div className="relative mt-1 text-xs text-white/40">
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
          <div className="flex flex-wrap items-stretch justify-center gap-3 lg:flex-nowrap">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="company-stat-box flex h-14 flex-1 basis-[120px] items-center justify-center rounded-xl bg-white px-3 py-2 transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="h-7 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-teal-5 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-5/20 transition-all duration-300 hover:bg-teal-6"
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
