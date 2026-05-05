"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconShieldCheck,
  IconCheck,
  IconAlertCircle,
  IconUsers,
  IconSnowflake,
  IconCalendarEvent,
  IconFileText,
  IconCertificate,
  IconStethoscope,
  IconDatabase,
  IconSettings,
  IconPackage,
  IconClipboardCheck,
  IconWash,
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
          <span className="text-sm font-semibold text-teal-4">Food Production</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          GLA Licensed. <span className="text-teal-5">Fully Compliant.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Food-safe staffing with no shortcuts. Right-to-work verified, hygiene trained — every worker, every time.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Get Compliant Staff</Button>
          <Button variant="secondary" size="lg" href="/contact">Verify Our Licence</Button>
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
    { value: "100%", label: "Compliance Record" },
    { value: "10+", label: "Years in Food" },
  ];
  return (
    <section className="relative w-full bg-navy-700 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
    { title: "Compliance nightmares", desc: "GLA licensed (PEAR0003). Every worker right-to-work checked. Every document verified. Your audit is our business.", icon: IconShieldCheck },
    { title: "Workers who don't understand food safety", desc: "Food hygiene training verified. Workers who know why hairnets matter, not just that they have to wear one.", icon: IconUsers },
    { title: "High turnover in cold environments", desc: "We specifically recruit people who thrive in chilled/frozen conditions. Not everyone can handle -25C.", icon: IconSnowflake },
    { title: "Seasonal demand swings", desc: "Christmas turkeys to Easter eggs — we've scaled food operations through every seasonal spike.", icon: IconCalendarEvent },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE CHALLENGES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Food industry challenges we solve</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Because in food production, &quot;good enough&quot; isn&apos;t.</p>
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

// ─── Compliance ────────────────────────────────────────────────────────────
function ComplianceSection() {
  const items = [
    { title: "Original documents checked, copies retained", desc: "Right-to-work, ID, and certifications verified at source.", icon: IconFileText },
    { title: "Level 2 minimum, verified credentials", desc: "Food safety certifications checked and stored.", icon: IconCertificate },
    { title: "Fitness-to-work confirmation", desc: "Health screenings for food handling roles.", icon: IconStethoscope },
    { title: "Every document, timestamped and stored", desc: "Audit-ready records available instantly.", icon: IconDatabase },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">AUDIT PROOF</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">Compliance isn&apos;t optional</h2>
            <p className="text-lg leading-relaxed text-white/60 mb-8">
              When the auditor arrives, you need confidence — not panic. Every worker we supply comes with a complete compliance package. Documents ready. Training verified. No surprises.
            </p>
            <div className="glass-card rounded-2xl p-6 mb-8">
              <p className="text-teal-5 font-bold mb-1">GLA Licence Number: PEAR0003</p>
              <p className="text-[#8B98AB] text-sm">Verify our licence at gla.gov.uk</p>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {items.map((item, i) => (
              <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-4"><item.icon size={24} stroke={1.5} /></div>
                <h3 className="relative text-white font-semibold text-base mb-2 leading-tight">{item.title}</h3>
                <p className="relative text-[13px] leading-relaxed text-[#8B98AB]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Roles ─────────────────────────────────────────────────────────────────
function RolesWeSupply() {
  const roles = [
    { title: "Production Operatives", desc: "Line work, processing, general production", icon: IconSettings },
    { title: "Packing Operatives", desc: "Food packing, labelling, quality checking", icon: IconPackage },
    { title: "Quality Controllers", desc: "HACCP trained, inspection, compliance", icon: IconClipboardCheck },
    { title: "Machine Operators", desc: "Food processing machinery, line operation", icon: IconSettings },
    { title: "Hygiene Operatives", desc: "Deep cleaning, sanitation, food-safe environments", icon: IconWash },
    { title: "Cold Store Workers", desc: "Chilled and frozen environment experienced", icon: IconSnowflake },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
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

// ─── Main ───────────────────────────────────────────────────────────────────
export default function FoodProductionIndustry() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <InnerHero />
      <HeroStats />
      <PainPoints />
      <ComplianceSection />
      <RolesWeSupply />
      <CtaBanner 
        badge="FOOD PRODUCTION" 
        title="Need compliant" 
        titleHighlight="food industry workers?" 
        subtitle="GLA licensed. Fully trained. Ready to work. Get in touch." 
        primaryButtonText="Get Compliant Staff" 
        secondaryButtonText="Call Our Team" 
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
