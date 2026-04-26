"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
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
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
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
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2">
          <Link href="/industries" className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-teal-5 transition-colors">Industries</Link>
          <span className="text-white/20">/</span>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Logistics & Warehousing</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your Warehouse <span className="text-teal-5">Never Stops</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Peak season, night shifts, last-minute cover. A decade of logistics expertise, built into systems that deliver.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Fix Your Staffing</Button>
          <Button variant="secondary" size="lg">View Case Studies</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Stats Bar ──────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "98%", label: "Fill rate" },
    { value: "4.8", label: "Client rating" },
    { value: "2hr", label: "Average response" },
    { value: "10+", label: "Years in logistics" },
  ];
  return (
    <section className="relative w-full bg-[#0d1522] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
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

// ─── Pain Points ───────────────────────────────────────────────────────────
function PainPoints() {
  const pains = [
    {
      title: "Peak season panic",
      desc: "We've planned 200+ peak seasons. Your surge is our normal Tuesday.",
      icon: IconAlertCircle,
    },
    {
      title: "No-shows killing productivity",
      desc: "AcceptPulse tracks arrivals in real-time. Know who's on site before your shift starts.",
      icon: IconDeviceDesktopAnalytics,
    },
    {
      title: "Agency workers who can't keep up",
      desc: "We rate every worker, every shift. Unreliable ones don't come back.",
      icon: IconStarFilled,
    },
    {
      title: "Forklift certification chaos",
      desc: "Every licence verified. Every expiry tracked. No surprises.",
      icon: IconShieldCheck,
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE PAIN POINTS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            We know what keeps you up at night
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Because we&apos;ve solved it for warehouses just like yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={p.icon} title={p.title} description={p.desc} href="#" noArrow />
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">WHAT WE SUPPLY</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Roles we fill every day
          </h2>
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

// ─── Tech Section ──────────────────────────────────────────────────────────
function TechnologySection() {
  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">HOW WE WORK</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              Technology that actually helps
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              While other agencies are still using WhatsApp and spreadsheets, we&apos;re tracking arrivals in real-time, rating every worker every shift, and using AI to match the right person to the right role.
            </p>
            <Link href="/temporary-staffing">
              <Button variant="secondary" size="md">See How It Works →</Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: IconDeviceDesktopAnalytics, title: "AcceptPulse", desc: "Real-time attendance tracking. Know exactly who's on site, the moment they arrive." },
              { icon: IconStarFilled, title: "AcceptRate", desc: "Every worker rated every shift. Only the best keep coming back." },
              { icon: IconBrain, title: "AcceptMatch", desc: "AI-powered matching. Right person, right role, right shift — every time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5 bg-[#161b28] border border-white/5 rounded-2xl p-6 hover:border-teal-5/20 transition-colors"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <item.icon size={24} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">{item.desc}</p>
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
export default function LogisticsIndustry() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />
      <PainPoints />
      <RolesWeSupply />
      <TechnologySection />

      <CtaBanner
        badge="LOGISTICS STAFFING"
        title="Ready to fix"
        titleHighlight="your staffing?"
        subtitle="Tell us what you need. We'll tell you exactly how we can help."
        primaryButtonText="Fix Your Staffing"
        secondaryButtonText="Call Our Team"
      />

      <Footer />
    </main>
  );
}
