"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconTool,
  IconSettings,
  IconCpu,
  IconFlame,
  IconAdjustments,
  IconShieldCheck,
  IconAlertCircle,
  IconDeviceDesktopAnalytics,
  IconStarFilled,
  IconBrain,
  IconArrowRight,
  IconCheck,
} from "@tabler/icons-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }}
          animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-sm font-semibold text-teal-4">Engineering & Technical</span>
        </motion.div>
        <h1 className="sr-only">Engineering & Technical Recruitment in the Midlands</h1>
        <motion.h2 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Precision Talent <span className="text-teal-5">Delivered</span>
        </motion.h2>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          From precision CNC machinists to multi-skilled maintenance engineers, our technical recruitment team operates nationally and across the Midlands. Learn more about <Link href="/where-we-cover" className="text-teal-4 hover:underline font-medium">where we cover</Link> and our regional branch network.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Source Technical Talent</Button>
          <Button variant="secondary" size="lg" href="/contact">Speak to a Specialist</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats ──────────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "98%", label: "Placement Retention" },
    { value: "100%", label: "Qualifications Vetted" },
    { value: "4hr", label: "Emergency Response" },
    { value: "10+", label: "Years in Technical" },
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
    { title: "Niche skill bottlenecks", desc: "Finding time-served machinists or certified maintenance engineers shouldn't stall your shop floor. Our deep talent pools deliver verified specialists fast.", icon: IconAlertCircle },
    { title: "Costly machine downtime", desc: "Every unplanned hour of breakdown hurts your bottom line. We supply rapid-response mechanical and electrical maintenance contractors who resolve faults efficiently.", icon: IconSettings },
    { title: "Quality drift & scrap rates", desc: "Tight tolerances leave no room for guesswork. We pre-vet candidates against your specific drawings, CMM requirements, and ISO standards.", icon: IconShieldCheck },
    { title: "Lengthy hiring lead times", desc: "Engineering hiring cycles often take months. Our temp-to-perm and contract options allow you to test hands-on capability on the floor immediately.", icon: IconAdjustments },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">TECHNICAL RECRUITMENT</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Solving your engineering talent challenges</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Specialised recruiters who speak your technical language and understand your tolerances.</p>
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
    { title: "CNC Machinists", desc: "Programmers, setters and operators across Fanuc, Heidenhain, Mazak and Siemens controls (Milling & Turning).", icon: IconSettings },
    { title: "Maintenance Engineers", desc: "Electrical, mechanical, and multi-skilled technicians for PPM, reactive repair, and automation systems.", icon: IconTool },
    { title: "Quality Inspectors", desc: "First-article, patrol, and final inspection technicians proficient with CMM, micrometers, and verniers.", icon: IconShieldCheck },
    { title: "Welders & Fabricators", desc: "Coded and experienced MIG, TIG, and MMA welders working with mild steel, aluminium, and stainless steel.", icon: IconFlame },
    { title: "Electro-Mechanical Assemblers", desc: "Sub-assembly, panel wiring, mechanical integration, and PCB rework specialists.", icon: IconCpu },
    { title: "Toolmakers & Tooling Techs", desc: "Jig, fixture, press tool, and injection mould repair and development technicians.", icon: IconAdjustments },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">TECHNICAL ROLES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Specialist roles we supply</h2>
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
    { icon: IconDeviceDesktopAnalytics, title: "AcceptPulse", desc: "Live attendance monitoring so you know critical engineering shifts are covered before work begins." },
    { icon: IconStarFilled, title: "Skill & Ticket Verification", desc: "Every certification, time-served apprenticeship, and competency test is checked and validated." },
    { icon: IconBrain, title: "Precision Match", desc: "Matching candidates not just to job titles, but to your specific machines, software, and shop-floor environment." },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">TECHNICAL RIGOUR</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">Recruitment built on engineering standards</h2>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              We know precision engineering can&apos;t tolerate unqualified personnel. We conduct technical qualification audits, verify past work history on similar equipment, and guarantee reliable compliance.
            </p>
            <Link href="/technology" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              Explore Our Technology <IconArrowRight size={18} />
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
export default function TechnicalClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <InnerHero />
      <HeroStats />
      <PainPoints />
      <RolesWeSupply />
      <TechnologySection />
      <CtaBanner
        badge="ENGINEERING & TECHNICAL"
        title="Need skilled engineering"
        titleHighlight="talent on your team?"
        subtitle="Speak to our specialist technical recruitment consultants in Leicester, Coventry and Tamworth."
        primaryButtonText="Find Technical Staff"
        secondaryButtonText="Contact Us"
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
