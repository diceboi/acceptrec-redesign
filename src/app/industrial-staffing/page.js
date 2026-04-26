"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import {
  IconCheck,
  IconMapPin,
  IconTool,
  IconMicroscope,
  IconCpu,
  IconFlask,
  IconShoppingBag,
  IconCar,
  IconSettings,
  IconClipboardCheck,
  IconLayersSubtract,
  IconWash,
} from "@tabler/icons-react";

// ─── Inner Hero ────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "50%",
            left: "5%",
            top: "10%",
            background: "var(--color-teal-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "50%",
            width: "45%",
            right: "5%",
            top: "20%",
            background: "var(--color-purple-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">
            Industrial Staffing
          </span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Production Staff That Keep <span className="text-teal-5">Lines Running</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reliable workers for manufacturing, production, and assembly. Matched to your specific processes.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">Get Started Today</Button>
          <Button variant="secondary" size="lg">Call Us Now</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Problem & Solution ────────────────────────────────────────────────────
function ProblemSolution() {
  const fixes = [
    "Workers matched to your specific processes and requirements",
    "Pre-trained on health & safety, manual handling, basic PPE",
    "Same faces where possible — we build site-specific pools",
    "Real-time attendance alerts — know instantly if someone's not coming",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
              THE PAIN POINT
            </span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              You suffer from production line gaps.
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              One no-show and the whole line stops. Untrained temps make mistakes that cost you in waste and rework. Your supervisors spend more time managing temps than managing production.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#161b28] border border-white/5 rounded-3xl p-10 md:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-teal-4 mb-8">We give you continuity.</h3>
            <ul className="space-y-6">
              {fixes.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-teal-5/10 rounded-full p-1.5 shrink-0 mt-0.5">
                    <IconCheck size={18} className="text-teal-4" />
                  </div>
                  <span className="text-white/80 text-lg leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Roles We Supply ──────────────────────────────────────────────────────
function RolesWeSupply() {
  const roles = [
    { title: "Production Operatives", desc: "Line work, assembly, machine operation", icon: IconSettings },
    { title: "Machine Operators", desc: "CNC, injection moulding, press operation", icon: IconCpu },
    { title: "Quality Control", desc: "Inspection, testing, quality assurance", icon: IconClipboardCheck },
    { title: "Assembly Workers", desc: "Component assembly, sub-assembly, finishing", icon: IconLayersSubtract },
    { title: "Process Operatives", desc: "Chemical, pharmaceutical, food production", icon: IconFlask },
    { title: "Maintenance Support", desc: "Cleaning, equipment prep, basic maintenance", icon: IconTool },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            WHAT WE SUPPLY
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Roles We Supply
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Across all manufacturing functions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={r.icon} title={r.title} description={r.desc} href="#" noArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sectors We Serve ─────────────────────────────────────────────────────
function SectorsWeServe() {
  const sectors = [
    { name: "Automotive", desc: "Parts, components, assembly", icon: IconCar },
    { name: "Food Production", desc: "Processing, packing, hygiene-trained", icon: IconWash },
    { name: "Pharmaceutical", desc: "Clean room, GMP-aware workers", icon: IconMicroscope },
    { name: "FMCG", desc: "Fast-moving consumer goods production", icon: IconShoppingBag },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            INDUSTRIES
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Sectors We Serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={s.icon} title={s.name} description={s.desc} href="#" noArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Coverage ─────────────────────────────────────────────────────────────
function CoverageLocations() {
  const locations = [
    { name: "Leicester", sub: "Our headquarters. Deep pool of industrial-experienced workers." },
    { name: "Coventry", sub: "Strong coverage across automotive and manufacturing sectors." },
    { name: "Tamworth", sub: "Central location serving major production and FMCG hubs." },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <IconMapPin className="mx-auto text-teal-5 mb-6 opacity-60" size={48} stroke={1} />
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Coverage Across the Midlands
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="#"
                className="group flex flex-col justify-between bg-[#161b28] border border-white/5 rounded-3xl p-10 text-center hover:border-teal-5/30 transition-all h-full"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{loc.name}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed mb-8">{loc.sub}</p>
                </div>
                <div className="flex justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A99D] text-white shadow-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function IndustrialStaffing() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <InnerHero />
      <ProblemSolution />
      <RolesWeSupply />
      <SectorsWeServe />
      <CoverageLocations />

      <CtaBanner
        badge="GET STARTED"
        title="Need production"
        titleHighlight="staff?"
        subtitle="Tell us your requirements. We'll match workers to your processes."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Call Us Now"
      />

      <Footer />
    </main>
  );
}
