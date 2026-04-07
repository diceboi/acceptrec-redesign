"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconUsers, 
  IconCalendarCheck, 
  IconUserCheck, 
  IconHeartHandshake,
  IconArrowRight,
  IconChevronRight
} from "@tabler/icons-react";

const categories = ["All", "Logistics", "Production", "Retail Distribution"];

const caseStudies = [
  {
    slug: "inpost",
    title: "InPost",
    subtitle: "From Crisis Call to Preferred Partner",
    description: "Powering Europe's largest parcel locker operator during a £6.8bn expansion. From first call to fully operational in 72 hours.",
    category: "Logistics",
    stats: [
      { label: "Attendance", value: "98%" },
      { label: "Days to Partner", value: "17" },
      { label: "Shifts Delivered", value: "4,200+" }
    ],
    image: "/images/case-studies/inpost-hero.webp" 
  },
  {
    slug: "vistry",
    title: "Vistry Group",
    subtitle: "From Vendor to Valued Partner",
    description: "Doubled workforce capacity in 10 weeks for a leading UK housebuilder through an embedded onsite model.",
    category: "Production",
    stats: [
      { label: "Fulfilment Rate", value: "94.2%" },
      { label: "Direct Hires", value: "42" },
      { label: "Status", value: "PSL" }
    ],
    image: "/images/case-studies/vistry-hero.webp"
  },
  {
    slug: "poundstretcher",
    title: "Poundstretcher",
    subtitle: "Nine Years of Trust",
    description: "The evolution from 'underdog' agency to sole supplier, managing 200+ workers daily for nearly a decade.",
    category: "Retail Distribution",
    stats: [
      { label: "Daily Workers", value: "200" },
      { label: "Partnership", value: "9 Yrs" },
      { label: "Status", value: "Sole Supplier" }
    ],
    image: "/images/case-studies/poundstretcher-hero.webp"
  }
];

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0D1520] pt-40 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
           className="absolute rounded-full"
           style={{ height: "60%", width: "50%", left: "5%", top: "10%", background: "var(--color-teal-5)", opacity: 0.1, filter: "blur(100px)" }}
           animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
           className="absolute rounded-full"
           style={{ height: "50%", width: "45%", right: "5%", top: "20%", background: "var(--color-purple-5)", opacity: 0.1, filter: "blur(100px)" }}
           animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm">
             <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Real Results</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Customer <span className="text-teal-5">Success Stories</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Proof, Not Promises. See how we help industry leaders scale their operations and solve workforce challenges.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "11,000+", label: "Shifts Delivered" },
    { value: "98%", label: "Average Attendance" },
    { value: "420+", label: "Workers Deployed Daily" },
    { value: "100%", label: "Partner Retention Rate" },
  ];
  return (
    <section className="relative w-full bg-[#0D1520] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-4xl lg:text-5xl font-bold text-teal-4 mb-2 tracking-tight">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="text-[14px] font-medium text-white/50">{s.label}</div>
          </div>
        ))}
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
            className="group relative h-full flex flex-col bg-[#161B28] border border-white/5 rounded-3xl overflow-hidden hover:border-teal-5/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-5/5"
        >
            <div className="relative h-64 overflow-hidden bg-white/5">
                {/* Image Placeholder - In production use actual images */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-5/20 to-purple-5/20 group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-[#0D1520]/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-teal-5 uppercase tracking-widest leading-none">
                        {study.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-8">
                <h3 className="text-white text-3xl font-bold mb-2 group-hover:text-teal-4 transition-colors">
                    {study.title}
                </h3>
                <p className="text-teal-5/80 text-sm font-bold tracking-tight mb-6 mt-1">
                    {study.subtitle}
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">
                    {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
                    {study.stats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-white font-bold text-lg mb-0.5 whitespace-nowrap">{s.value}</div>
                            <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>

                <Link 
                    href={`/case-studies/${study.slug}`}
                    className="flex items-center justify-between group/link text-white font-bold text-sm tracking-tight hover:text-teal-4 transition-colors"
                >
                    Read Full Story
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover/link:bg-teal-5 group-hover/link:border-teal-5 transition-all text-white">
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

  const filteredStudies = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeCategory);

  return (
    <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
      <Navbar />

      <InnerHero />
      <HeroStats />

      <section className="py-24 bg-[#121926]">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-teal-5 border-teal-5 text-white shadow-lg shadow-teal-5/20" 
                    : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      />

      <Footer />
    </main>
  );
}
