"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { IconChevronRight } from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categories = ["All", "Logistics", "Production", "Retail Distribution"];

const caseStudies = [
  {
    slug: "inpost",
    title: "InPost",
    subtitle: "From Crisis Call to Preferred Partner",
    description:
      "Powering Europe's largest parcel locker operator during a £6.8bn expansion. From first call to fully operational in 72 hours.",
    category: "Logistics",
    stats: [
      { label: "Attendance", value: "98%" },
      { label: "Days to Partner", value: "17" },
      { label: "Shifts Delivered", value: "4,200+" },
    ],
    image: "/images/case-studies/inpost-hero.webp",
  },
  {
    slug: "vistry",
    title: "Vistry Group",
    subtitle: "From Vendor to Valued Partner",
    description:
      "Doubled workforce capacity in 10 weeks for a leading UK housebuilder through an embedded onsite model.",
    category: "Production",
    stats: [
      { label: "Fulfilment Rate", value: "94.2%" },
      { label: "Direct Hires", value: "42" },
      { label: "Status", value: "PSL" },
    ],
    image: "/images/case-studies/vistry-hero.webp",
  },
  {
    slug: "poundstretcher",
    title: "Poundstretcher",
    subtitle: "Nine Years of Trust",
    description:
      "The evolution from 'underdog' agency to sole supplier, managing 200+ workers daily for nearly a decade.",
    category: "Retail Distribution",
    stats: [
      { label: "Daily Workers", value: "200" },
      { label: "Partnership", value: "9 Yrs" },
      { label: "Status", value: "Sole Supplier" },
    ],
    image: "/images/case-studies/poundstretcher-hero.webp",
  },
];

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "70%",
            width: "55%",
            left: "-10%",
            top: "-10%",
            background: "var(--color-teal-5)",
            opacity: 0.13,
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
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-sm font-semibold text-teal-4">
            Real Results
          </span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Customer <span className="text-teal-5">Success Stories</span>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Proof, Not Promises. See how we help industry leaders scale their
          operations and solve workforce challenges.
        </motion.p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "11,000+", label: "Shifts Delivered" },
    { value: "98%", label: "Average Attendance" },
    { value: "420+", label: "Workers Deployed Daily" },
    { value: "100%", label: "Partner Retention Rate" },
  ];
  return (
    <section className="relative w-full bg-navy-700 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-4xl font-semibold text-white md:text-5xl">
                <AnimatedNumber value={s.value} />
              </div>
              <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wider text-teal-5">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Case Study Card ───────────────────────────────────────────────────────
function StudyCard({ study }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:border-teal-5/30 hover:teal-glow-sm"
    >
      <div className="relative h-64 overflow-hidden bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-5/20 to-purple-5/20 group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-teal-5 uppercase tracking-widest leading-none">
            {study.category}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col flex-1 p-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h3 className="relative text-white text-[26px] font-semibold mb-2 group-hover:text-teal-4 transition-colors">
          {study.title}
        </h3>
        <p className="relative text-teal-5/80 text-sm font-bold tracking-tight mb-6 mt-1">
          {study.subtitle}
        </p>
        <p className="relative text-[15px] leading-relaxed text-[#8B98AB] mb-8 flex-1">
          {study.description}
        </p>

        <div className="relative grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
          {study.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-white font-semibold text-lg mb-0.5 whitespace-nowrap">
                {s.value}
              </div>
              <div className="text-[#8B98AB] text-[10px] uppercase font-bold tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          className="relative flex items-center justify-between text-white font-semibold text-sm tracking-tight hover:text-teal-4 transition-colors"
        >
          Read Full Story
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-[#00A99D] group-hover:border-[#00A99D] transition-all text-white">
            <IconChevronRight size={20} stroke={2.5} />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeCategory);

  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />

      <section className="py-24 bg-[#0d111a] relative overflow-hidden">
        <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#00A99D] border-[#00A99D] text-white shadow-lg shadow-teal-5/20"
                    : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <StudyCard key={study.slug} study={study} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CtaBanner
        badge="PROVEN SUCCESS"
        title="Ready for"
        titleHighlight="results like these?"
        subtitle="Let's build a partnership that delivers. Tell us about your operations."
        primaryButtonText="View Services"
        secondaryButtonText="Book Initial Audit"
        primaryButtonHref="/technology"
        secondaryButtonHref="https://bookings.cloud.microsoft/book/ACCEPTECH@acceptrec.co.uk/?ismsaljsauthenabled=true"
      />

      <Footer />
    </main>
  );
}
