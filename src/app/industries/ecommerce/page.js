"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconShoppingCart,
  IconPackage,
  IconRefresh,
  IconTruckDelivery,
  IconUsers,
  IconClipboardCheck,
  IconArrowUpRight,
  IconSearch,
  IconUserCheck,
  IconScale,
  IconBolt,
  IconAlertCircle,
  IconStarFilled,
  IconMoon,
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
          <span className="text-sm font-semibold text-teal-4">E-commerce & Fulfilment</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Scale Fast. <span className="text-teal-5">Scale Smart.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          50 workers today, 500 next week. A decade mastering rapid scale-up and smart scale-down.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Start Planning Your Peak</Button>
          <Button variant="secondary" size="lg" href="/on-site-managed-services">How We Scale</Button>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "500+", label: "Peak Season Scale-Ups" },
    { value: "98%", label: "Fill Rate" },
    { value: "24hr", label: "Scale-Up Capability" },
    { value: "10+", label: "Years in E-commerce" },
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
    { title: "Peak season nightmares", desc: "We've scaled operations from 50 to 500 workers in days. Your peak is our expertise.", icon: IconAlertCircle },
    { title: "Pick rates that miss targets", desc: "We send experienced pickers who know the pressure. Not first-timers learning on your dime.", icon: IconStarFilled },
    { title: "Returns piling up post-peak", desc: "Dedicated returns teams ready to deploy. Clear the backlog, recover the value.", icon: IconRefresh },
    { title: "Can't find reliable night shift workers", desc: "Our database includes thousands of night-shift-ready workers. We know who actually shows up at 2am.", icon: IconMoon },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE CHALLENGES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Fulfilment problems we solve daily</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">While you&apos;re panicking about Black Friday, we&apos;re already building your team.</p>
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
    { title: "Pickers", desc: "Single-item, multi-item, batch picking", icon: IconSearch },
    { title: "Packers", desc: "Quality packing, gift wrapping, fragile items", icon: IconPackage },
    { title: "Returns Processors", desc: "Quality check, restock, refurbishment", icon: IconRefresh },
    { title: "Goods-In Operatives", desc: "Receiving, checking, put-away", icon: IconArrowUpRight },
    { title: "Dispatch Operatives", desc: "Sorting, loading, carrier handoff", icon: IconTruckDelivery },
    { title: "Quality Controllers", desc: "Order accuracy, packaging standards", icon: IconClipboardCheck },
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

// ─── Scaling Process ───────────────────────────────────────────────────────
function ScalingProcess() {
  const steps = [
    { title: "Tell us your numbers", desc: "How many, what roles, which dates", icon: IconUsers },
    { title: "We build the pipeline", desc: "Recruitment, screening, right-to-work", icon: IconScale },
    { title: "Workers arrive ready", desc: "Inducted, equipped, know what to expect", icon: IconUserCheck },
    { title: "We manage the entire season", desc: "Attendance, replacements, performance", icon: IconBolt },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">HOW WE SCALE YOU UP</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Peak season? We&apos;ve done hundreds.</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">From first call to full team, here&apos;s how it works.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {steps.map((step, i) => (
            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mx-auto mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow"><step.icon size={28} stroke={1.5} /></div>
              <h3 className="relative text-white font-semibold text-[22px] mb-2">{step.title}</h3>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function EcommerceIndustry() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <InnerHero />
      <HeroStats />
      <PainPoints />
      <RolesWeSupply />
      <ScalingProcess />
      <CtaBanner 
        badge="PEAK PLANNING" 
        title="Peak season" 
        titleHighlight="coming?" 
        subtitle="Start planning now. We'll show you exactly how we'd scale your operation." 
        primaryButtonText="Start Planning Now" 
        secondaryButtonText="Call Our Team" 
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
