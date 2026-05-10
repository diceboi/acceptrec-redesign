"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconPackage,
  IconForklift,
  IconUsers,
  IconClipboardList,
  IconRefresh,
  IconTruckLoading,
  IconAlertCircle,
  IconDeviceDesktopAnalytics,
  IconStarFilled,
  IconShieldCheck,
  IconBrain,
  IconArrowRight,
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
          <span className="text-sm font-semibold text-teal-4">Logistics & Warehousing</span>
        </motion.div>
        <h1 className="sr-only">Warehouse &amp; Logistics Recruitment in the Midlands</h1>
        <motion.h2 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Your Warehouse <span className="text-teal-5">Never Stops</span>
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Peak season, night shifts, last-minute cover. A decade of logistics expertise, built into systems that deliver.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Fix Your Staffing</Button>
          <Button variant="secondary" size="lg" href="/case-studies">View Case Studies</Button>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats ──────────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "98%", label: "Fill Rate" },
    { value: "4.8", label: "Client Rating" },
    { value: "2hr", label: "Average Response" },
    { value: "10+", label: "Years in Logistics" },
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
    { title: "Peak season panic", desc: "We've planned 200+ peak seasons. Your surge is our normal Tuesday.", icon: IconAlertCircle },
    { title: "No-shows killing productivity", desc: "AcceptPulse tracks arrivals in real-time. Know who's on site before your shift starts.", icon: IconDeviceDesktopAnalytics },
    { title: "Agency workers who can't keep up", desc: "We rate every worker, every shift. Unreliable ones don't come back.", icon: IconStarFilled },
    { title: "Forklift certification chaos", desc: "Every licence verified. Every expiry tracked. No surprises.", icon: IconShieldCheck },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE PAIN POINTS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">We know what keeps you up at night</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Because we&apos;ve solved it for warehouses just like yours.</p>
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
    { title: "Warehouse Operatives", desc: "Picking, packing, loading, goods-in", icon: IconPackage },
    { title: "Forklift Drivers", desc: "Counterbalance, reach, VNA, PPT certified", icon: IconForklift },
    { title: "Team Leaders", desc: "Experienced supervisors who hit the ground running", icon: IconUsers },
    { title: "Goods-In Clerks", desc: "Receiving, checking, inventory management", icon: IconClipboardList },
    { title: "Returns Processors", desc: "Quality checking, restocking, admin", icon: IconRefresh },
    { title: "Loading Bay Operatives", desc: "Vehicle loading, dispatch, paperwork", icon: IconTruckLoading },
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

// ─── Technology ─────────────────────────────────────────────────────────────
function TechnologySection() {
  const techItems = [
    { icon: IconDeviceDesktopAnalytics, title: "AcceptPulse", desc: "Real-time attendance tracking. Know exactly who's on site, the moment they arrive." },
    { icon: IconStarFilled, title: "AcceptRate", desc: "Every worker rated every shift. Only the best keep coming back." },
    { icon: IconBrain, title: "AcceptMatch", desc: "AI-powered matching. Right person, right role, right shift — every time." },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">HOW WE WORK</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">Technology that actually helps</h2>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              While other agencies are still using WhatsApp and spreadsheets, we&apos;re tracking arrivals in real-time, rating every worker every shift, and using AI to match the right person to the right role.
            </p>
            <Link href="/technology" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              See How It Works <IconArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {techItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white"><item.icon size={24} stroke={1.5} /></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#8B98AB]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function LogisticsClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <InnerHero />
      <HeroStats />
      <PainPoints />
      <RolesWeSupply />
      <TechnologySection />
      <CtaBanner badge="LOGISTICS STAFFING" title="Ready to fix" titleHighlight="your staffing?" subtitle="Tell us what you need. We'll tell you exactly how we can help." primaryButtonText="Fix Your Staffing" secondaryButtonText="Call Our Team" primaryButtonHref="/get-started" secondaryButtonHref="/contact" />
      <Footer />
    </main>
  );
}
