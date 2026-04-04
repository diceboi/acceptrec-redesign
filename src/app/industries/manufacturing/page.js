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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Manufacturing</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Production Lines <span className="text-teal-5">Can&apos;t Wait</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Machines need operators. We get the right people to your factory floor, fast.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Keep Your Line Running</Button>
          <Button variant="secondary" size="lg">Call Our Team</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "98%", label: "Fill rate" },
    { value: "400+", label: "Workers placed weekly" },
    { value: "4hr", label: "Emergency response" },
    { value: "10+", label: "Years experience" },
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
    { title: "Production targets at risk", desc: "We respond in hours, not days. Your line keeps running.", icon: IconAlertCircle },
    { title: "Workers who can't handle the pace", desc: "We place 400+ workers a week in manufacturing. We know who can perform.", icon: IconUsers },
    { title: "High turnover killing efficiency", desc: "Our workers stay because we treat them right. Lower churn, higher output.", icon: IconRefresh },
    { title: "Training eating into productive time", desc: "We send workers who've done the job before. Less hand-holding, faster ramp-up.", icon: IconBook },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE PAIN POINTS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Production problems we solve daily
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Because downtime costs money, and excuses don&apos;t help.
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
    { title: "Production Operatives", desc: "Line work, assembly, general manufacturing", icon: IconSettings },
    { title: "Machine Operators", desc: "CNC, injection moulding, press operation", icon: IconCpu },
    { title: "Assembly Workers", desc: "Component assembly, sub-assembly, finishing", icon: IconLayersSubtract },
    { title: "Quality Inspectors", desc: "QC checking, measurement, documentation", icon: IconClipboardCheck },
    { title: "Packers", desc: "Product packing, labelling, palletising", icon: IconPackage },
    { title: "Team Leaders", desc: "Shift supervision, line management", icon: IconUsersGroup },
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

// ─── Why Accept ────────────────────────────────────────────────────────────
function WhyAccept() {
  const reasons = [
    { title: "Speed that matches your pace", desc: "Call at 6am, workers on site by 8am. We operate at manufacturing speed.", icon: IconBolt },
    { title: "Workers who've done the job", desc: "Experience matters on a production line. We send people who know the environment.", icon: IconUserCheck },
    { title: "Technology that tracks everything", desc: "Real-time attendance, worker ratings, instant communication. No guesswork.", icon: IconDeviceDesktopAnalytics },
    { title: "We actually care", desc: "Happy workers work harder. We treat them like people, not numbers.", icon: IconHeart },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Why manufacturing clients choose Accept
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={r.icon} title={r.title} description={r.desc} href="#" noArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ManufacturingIndustry() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
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
      />

      <Footer />
    </main>
  );
}
