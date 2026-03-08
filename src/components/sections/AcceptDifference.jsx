"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    icon: "⭐",
    title: "Highly Rated",
    description:
      "4.8 stars from 950+ Google reviews. Our reputation speaks for itself.",
  },
  {
    icon: "💰",
    title: "Value for Money",
    description:
      "Competitive rates without compromising on quality or compliance.",
  },
  {
    icon: "💻",
    title: "Tech Based",
    description:
      "We leverage the latest technology to deliver faster, more accurate placements.",
  },
  {
    icon: "✅",
    title: "Ethical and Compliant",
    description:
      "Fully compliant with UK employment law, IR35, Modern Slavery Act, and GDPR.",
  },
  {
    icon: "🏆",
    title: "Industry Expertise",
    description:
      "15+ years specialising in industrial, logistics, and food production sectors.",
  },
  {
    icon: "🌱",
    title: "Sustainable Partner",
    description:
      "Committed to ethical practices, fair pay, and long-term workforce sustainability.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function AcceptDifference() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0F0D1A] to-[#111827] overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-5/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-14 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-5">
            The Accept Difference
          </span>
          {/* SEO H2 */}
          <h2 className="font-sans text-4xl font-extrabold text-white md:text-5xl">
            A fresh approach
          </h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            As a tech-based recruitment company, we leverage the latest
            innovation to deliver outstanding results. Rated highly by platforms
            including Google (4.8 stars from over 950+ reviews).
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Google Review Card */}
          <motion.div
            className="glass-card relative overflow-hidden rounded-2xl p-7 lg:col-span-1 teal-glow-sm border-teal-5/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/10 to-transparent" />
            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-lg font-bold">
                  <span style={{ color: "#4285F4" }}>G</span>
                </div>
                <span className="text-sm font-semibold text-white/70">
                  Google Reviews
                </span>
              </div>
              <div className="text-5xl font-extrabold text-white">4.8</div>
              <div className="mt-1 flex gap-1 text-yellow-4 text-xl">★★★★★</div>
              <div className="mt-2 text-sm text-white/50">
                From 950+ verified reviews
              </div>
              <div className="mt-4 rounded-xl bg-white/5 p-4 text-sm italic text-white/70">
                &ldquo;The best recruitment agency we&apos;ve ever worked with.
                Reliable, fast, and always professional.&rdquo;
              </div>
            </div>
          </motion.div>

          {/* Strength tiles */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:col-span-1 lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {strengths.map((s) => (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:border-teal-5/30 hover:bg-teal-5/5"
              >
                <div className="mb-3 text-2xl">{s.icon}</div>
                {/* SEO H3 */}
                <h3 className="mb-1.5 font-sans text-sm font-bold text-white group-hover:text-teal-4 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/50">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
