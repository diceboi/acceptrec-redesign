"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconAlertCircle,
  IconUsers,
  IconRefresh,
  IconBook,
  IconSettings,
  IconCpu,
  IconLayersSubtract,
  IconClipboardCheck,
  IconPackage,
  IconUsersGroup,
  IconBolt,
  IconUserCheck,
  IconDeviceDesktopAnalytics,
  IconHeart,
} from "@tabler/icons-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-sm font-semibold text-teal-4">Manufacturing</span>
        </motion.div>
        <h1 className="sr-only">Manufacturing Recruitment Agency in the Midlands</h1>
        <motion.h2 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Production Lines <span className="text-teal-5">Can&apos;t Wait</span>
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Machines need operators. We get the right people to your factory floor, fast.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Keep Your Line Running</Button>
          <Button variant="secondary" size="lg" href="/contact">Call Our Team</Button>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "98%", label: "Fill Rate" },
    { value: "400+", label: "Workers Placed Weekly" },
    { value: "4hr", label: "Emergency Response" },
    { value: "10+", label: "Years Experience" },
  ];
  return (
    <section className="relative w-full bg-navy-700 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {stats.map((s, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-4xl font-semibold text-white md:text-5xl"><AnimatedNumber value={s.value} /></div>
              <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wider text-teal-5">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pain Points ───────────────────────────────────────────────────────────
function PainPoints() {
  const pains = [
    { title: "Production targets at risk", desc: "We respond in hours, not days. Your line keeps running.", icon: IconAlertCircle },
    { title: "Workers who can't handle the pace", desc: "We place 400+ workers a week in manufacturing. We know who can perform.", icon: IconUsers },
    { title: "High turnover killing efficiency", desc: "Our workers stay because we treat them right. Lower churn, higher output.", icon: IconRefresh },
    { title: "Training eating into productive time", desc: "We send workers who've done the job before. Less hand-holding, faster ramp-up.", icon: IconBook },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE PAIN POINTS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Production problems we solve daily</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Because downtime costs money, and excuses don&apos;t help.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {pains.map((p, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white"><p.icon size={28} stroke={1.5} /></div>
                <div><h3 className="text-white font-semibold text-[22px] leading-tight">{p.title}</h3></div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Roles ─────────────────────────────────────────────────────────────────
function RolesWeSupply() {
  const roles = [
    { title: "Production Operatives", desc: "Line work, assembly, general manufacturing", icon: IconSettings },
    { title: "Machine Operators", desc: "CNC, injection moulding, press operation", icon: IconCpu },
    { title: "Assembly Workers", desc: "Component assembly, sub-assembly, finishing", icon: IconLayersSubtract },
    { title: "Quality Inspectors", desc: "QC checking, measurement, documentation", icon: IconClipboardCheck },
    { title: "Packers", desc: "Product packing, labelling, palletising", icon: IconPackage },
    { title: "Team Leaders", desc: "Shift supervision, line management", icon: IconUsersGroup },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">WHAT WE SUPPLY</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Roles we fill every day</h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {roles.map((r, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white"><r.icon size={28} stroke={1.5} /></div>
                <div><h3 className="text-white font-semibold text-[22px] leading-tight mb-1">{r.title}</h3></div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Accept ────────────────────────────────────────────────────────────
function WhyAccept() {
  const reasons = [
    { title: "Speed that matches your pace", desc: "Call at 6am, workers on site by 8am. We operate at manufacturing speed.", icon: IconBolt },
    { title: "Workers who've done the job", desc: "Experience matters on a production line. We send people who know the environment.", icon: IconUserCheck },
    { title: "Technology that tracks everything", desc: "Real-time attendance, worker ratings, instant communication. No guesswork.", icon: IconDeviceDesktopAnalytics },
    { title: "We actually care", desc: "Happy workers work harder. We treat them like people, not numbers.", icon: IconHeart },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Why manufacturing clients choose Accept</h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reasons.map((r, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white"><r.icon size={28} stroke={1.5} /></div>
                <div><h3 className="text-white font-semibold text-[22px] leading-tight">{r.title}</h3></div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ManufacturingClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <InnerHero />
      <HeroStats />
      <PainPoints />
      <RolesWeSupply />
      <WhyAccept />
      <CtaBanner 
        badge="MANUFACTURING STAFFING" 
        title="Keep your production" 
        titleHighlight="running" 
        subtitle="Tell us your requirements. We'll have a plan within 24 hours." 
        primaryButtonText="Keep Your Line Running" 
        secondaryButtonText="Call Our Team" 
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
