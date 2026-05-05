"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import {
  IconTrophy,
  IconArrowRight,
  IconChartBar,
  IconShieldCheck,
  IconMap2,
  IconCalculator,
  IconFileInvoice,
  IconStarFilled,
  IconUserSearch,
  IconCircleDashed,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Hero ──────────────────────────────────────────────────────────────────
function IntelligenceHero() {
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
          <IconTrophy className="text-teal-5" size={16} />
          <span className="text-sm font-semibold text-teal-4">
            For Employers
          </span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Client Intelligence <span className="text-teal-5 italic">Suite.</span>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Data-driven staffing decisions. ROI calculators, compliance audits,
          workforce planning, and real-time availability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10"
        >
          {[
            { v: "6 Tools", l: "Built For Employers" },
            { v: "100% Free", l: "No Obligation" },
            { v: "Real Data", l: "Updated Live" },
            { v: "1st In UK", l: "Industry First" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-white font-semibold text-2xl mb-1">
                {s.v}
              </div>
              <div className="text-[#8B98AB]/70 text-[10px] uppercase tracking-widest font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Tools Grid ──────────────────────────────────────────────────────────
function IntelligenceGrid() {
  const tools = [
    {
      t: "Staffing Cost Calculator",
      d: "Calculate your true hourly cost including NI, Pension, and overheads.",
      href: "/technology/rate-calculator",
      i: IconCalculator,
      status: "LIVE",
    },
    {
      t: "Real-Time Availability",
      d: "Live map showing available candidates across our 4 regional hubs.",
      href: "#",
      i: IconMap2,
      status: "LIVE",
    },
    {
      t: "Instant Quote Builder",
      d: "Build a custom staffing quote in 60 seconds. No sales call required.",
      href: "/technology/quote-builder",
      i: IconFileInvoice,
      status: "LIVE",
    },
    {
      t: "Industry Dashboard",
      d: "Average pay rates and worker availability in your specific sector.",
      href: "#",
      i: IconChartBar,
      status: "COMING SOON",
    },
    {
      t: "Social Proof Engine",
      d: "Live feed of our 1,500+ Google Reviews and Trustpilot scores.",
      href: "#",
      i: IconStarFilled,
      status: "LIVE",
    },
    {
      t: "Success Story Matcher",
      d: "Find clients exactly like you and see the results we delivered.",
      href: "/case-studies",
      i: IconUserSearch,
      status: "LIVE",
    },
    {
      t: "Compliance Health Check",
      d: "A 10-point self-audit to see if your current agency is compliant.",
      href: "#",
      i: IconShieldCheck,
      status: "DEVELOPMENT",
    },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            CHOOSE YOUR TOOL
          </span>
          <h2 className="text-4xl font-semibold text-white tracking-tight">
            The Intelligence Suite
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, i) => {
            const CardContent = (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`glass-card group relative overflow-hidden rounded-2xl p-10 flex flex-col h-full transition-all duration-300 ${tool.status !== "LIVE" ? "opacity-60 cursor-not-allowed" : "hover:border-teal-5/30 hover:teal-glow-sm"}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${tool.status === "LIVE" ? "bg-teal-5/10 text-teal-4 group-hover:bg-[#00A99D] group-hover:text-white" : "bg-white/5 text-[#8B98AB]/50"} transition-all`}
                  >
                    <tool.i size={32} />
                  </div>
                  <span
                    className={`text-[9px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${tool.status === "LIVE" ? "bg-teal-5/10 text-teal-4" : "bg-white/5 text-[#8B98AB]/70"}`}
                  >
                    {tool.status}
                  </span>
                </div>
                <h4 className="relative text-white font-semibold text-xl mb-4 leading-tight">
                  {tool.t}
                </h4>
                <p className="relative text-[#8B98AB] text-sm leading-relaxed mb-10 flex-grow">
                  {tool.d}
                </p>
                <div className="relative pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${tool.status === "LIVE" ? "text-teal-5 pb-1 border-b border-teal-5/50" : "text-[#8B98AB]/50"}`}
                  >
                    {tool.status === "LIVE" ? "Start Tool" : "Coming Soon"}
                  </span>
                  {tool.status === "LIVE" && (
                    <IconArrowRight
                      className="text-teal-5 transition-transform group-hover:translate-x-2"
                      size={18}
                    />
                  )}
                </div>
              </motion.div>
            );

            return tool.status === "LIVE" ? (
              <Link href={tool.href} key={i} className="block w-full h-full">
                {CardContent}
              </Link>
            ) : (
              <div key={i} className="block w-full h-full">
                {CardContent}
              </div>
            );
          })}
          <div className="hidden lg:flex glass-card rounded-2xl border-dashed items-center justify-center flex-col text-center p-10 opacity-30">
            <IconCircleDashed size={48} className="mb-6" />
            <p className="text-xs uppercase font-semibold tracking-widest">
              More Tools In Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Section ────────────────────────────────────────────────────────
function WhySection() {
  const reasons = [
    {
      t: "Data Over Promises",
      d: "When you can see the numbers yourself - costs, availability, benchmarks - you make better decisions. No sales pitch needed.",
    },
    {
      t: "Speed & Certainty",
      d: "Why wait days for a quote? Check real-time availability and get instant cost calculations today.",
    },
    {
      t: "Because We Can",
      d: "No other agency has built tools like this. Why? Because they don't have the data, the confidence, or the care.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            WHY WE BUILT THIS
          </span>
          <h2 className="text-4xl font-semibold text-white tracking-tight">
            Transparency is a feature.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <div key={i}>
              <div className="text-teal-4 font-semibold mb-4 flex items-center gap-2">
                <span className="opacity-20">0{i + 1}</span> {r.t}
              </div>
              <p className="text-[#8B98AB] text-sm leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 glass-card rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="text-left">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled key={i} className="text-teal-5" size={16} />
              ))}
            </div>
            <div className="text-white font-semibold text-2xl mb-1">
              4.8 Stars
            </div>
            <div className="text-[#8B98AB]/70 text-xs font-semibold uppercase tracking-widest">
              Trusted by 1500+ People on Google
            </div>
          </div>
          <p className="text-[#8B98AB] text-sm italic max-w-md">
            &quot;The Intelligence Suite gives us the certainty we need before
            placing high-volume staff bookings. It&apos;s transformed how we
            manage our temp budget.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ClientIntelligencePage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <IntelligenceHero />
      <IntelligenceGrid />
      <WhySection />
      <CtaBanner
        badge="GET THE DATA"
        title="Ready to make"
        titleHighlight="smarter decisions?"
        subtitle="Use these tools. Get the data. Then when you're ready, let's talk about how Accept can transform your temp staffing."
        primaryButtonText="Request a Call"
        secondaryButtonText="Learn More About Employers"
        primaryButtonHref="/contact"
        secondaryButtonHref="/employers"
      />
      <Footer />
    </main>
  );
}
