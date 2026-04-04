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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">E-commerce & Fulfilment</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Scale Fast. <span className="text-teal-5">Scale Smart.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          50 workers today, 500 next week. A decade mastering rapid scale-up and smart scale-down.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Start Planning Your Peak</Button>
          <Button variant="secondary" size="lg">How We Scale</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "500+", label: "Peak season scale-ups" },
    { value: "98%", label: "Fill rate" },
    { value: "24hr", label: "Scale-up capability" },
    { value: "10+", label: "Years in e-commerce" },
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
    { title: "Peak season nightmares", desc: "We've scaled operations from 50 to 500 workers in days. Your peak is our expertise.", icon: IconAlertCircle },
    { title: "Pick rates that miss targets", desc: "We send experienced pickers who know the pressure. Not first-timers learning on your dime.", icon: IconStarFilled },
    { title: "Returns piling up post-peak", desc: "Dedicated returns teams ready to deploy. Clear the backlog, recover the value.", icon: IconRefresh },
    { title: "Can't find reliable night shift workers", desc: "Our database includes thousands of night-shift-ready workers. We know who actually shows up at 2am.", icon: IconMoon },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE CHALLENGES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Fulfilment problems we solve daily
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            While you&apos;re panicking about Black Friday, we&apos;re already building your team.
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
    { title: "Pickers", desc: "Single-item, multi-item, batch picking", icon: IconSearch },
    { title: "Packers", desc: "Quality packing, gift wrapping, fragile items", icon: IconPackage },
    { title: "Returns Processors", desc: "Quality check, restock, refurbishment", icon: IconRefresh },
    { title: "Goods-In Operatives", desc: "Receiving, checking, put-away", icon: IconArrowUpRight },
    { title: "Dispatch Operatives", desc: "Sorting, loading, carrier handoff", icon: IconTruckDelivery },
    { title: "Quality Controllers", desc: "Order accuracy, packaging standards", icon: IconClipboardCheck },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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

// ─── Scaling Process ───────────────────────────────────────────────────────
function ScalingProcess() {
  const steps = [
    { title: "Tell us your numbers", desc: "How many, what roles, which dates", icon: IconUsers },
    { title: "We build the pipeline", desc: "Recruitment, screening, right-to-work", icon: IconScale },
    { title: "Workers arrive ready", desc: "Inducted, equipped, know what to expect", icon: IconUserCheck },
    { title: "We manage the entire season", desc: "Attendance, replacements, performance", icon: IconBolt },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">HOW WE SCALE YOU UP</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Peak season? We&apos;ve done hundreds.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg text-white/50">
            From first call to full team, here&apos;s how it works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8 hover:border-teal-5/20 transition-colors group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-5/10 text-teal-5 mb-6 group-hover:bg-teal-5 group-hover:text-white transition-colors">
                  <step.icon size={24} stroke={1.5} />
                </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function EcommerceIndustry() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
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
      />

      <Footer />
    </main>
  );
}
