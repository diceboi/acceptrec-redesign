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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Food Production</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          GLA Licensed. <span className="text-teal-5">Fully Compliant.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Food-safe staffing with no shortcuts. Right-to-work verified, hygiene trained — every worker, every time.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Get Compliant Staff</Button>
          <Button variant="secondary" size="lg">Verify Our Licence</Button>
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
    { value: "100%", label: "Compliance record" },
    { value: "10+", label: "Years in food" },
  ];
  return (
    <section className="relative w-full bg-[#0d1522] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
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
    { title: "Compliance nightmares", desc: "GLA licensed (PEAR0003). Every worker right-to-work checked. Every document verified. Your audit is our business.", icon: IconShieldCheck },
    { title: "Workers who don't understand food safety", desc: "Food hygiene training verified. Workers who know why hairnets matter, not just that they have to wear one.", icon: IconUsers },
    { title: "High turnover in cold environments", desc: "We specifically recruit people who thrive in chilled/frozen conditions. Not everyone can handle -25C.", icon: IconSnowflake },
    { title: "Seasonal demand swings", desc: "Christmas turkeys to Easter eggs — we've scaled food operations through every seasonal spike.", icon: IconCalendarEvent },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE CHALLENGES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Food industry challenges we solve
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Because in food production, &quot;good enough&quot; isn&apos;t.
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

// ─── Compliance Section ────────────────────────────────────────────────────
function ComplianceSection() {
  const items = [
    { title: "Original documents checked, copies retained", desc: "Right-to-work, ID, and certifications verified at source.", icon: IconFileText },
    { title: "Level 2 minimum, verified credentials", desc: "Food safety certifications checked and stored.", icon: IconCertificate },
    { title: "Fitness-to-work confirmation", desc: "Health screenings for food handling roles.", icon: IconStethoscope },
    { title: "Every document, timestamped and stored", desc: "Audit-ready records available instantly.", icon: IconDatabase },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">AUDIT PROOF</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              Compliance isn&apos;t optional
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-8">
              When the auditor arrives, you need confidence — not panic. Every worker we supply comes with a complete compliance package. Documents ready. Training verified. No surprises.
            </p>
            <div className="bg-[#161b28] border border-white/5 rounded-2xl p-6 mb-8">
              <p className="text-teal-5 font-bold mb-1">GLA Licence Number: PEAR0003</p>
              <p className="text-white/40 text-sm">Verify our licence at gla.gov.uk</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#161b28] border border-white/5 rounded-2xl p-6 hover:border-teal-5/20 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-4">
                  <item.icon size={24} stroke={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2 leading-tight">{item.title}</h3>
                <p className="text-white/40 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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

// ─── Main ───────────────────────────────────────────────────────────────────
export default function FoodProductionIndustry() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
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
      />

      <Footer />
    </main>
  );
}
