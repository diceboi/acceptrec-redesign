"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconDice,
  IconUsers,
  IconSearch,
  IconShieldCheck,
  IconCash,
  IconClock,
  IconCheck,
  IconBriefcase,
  IconUserSearch,
  IconTruck,
  IconBuildingFactory,
  IconToolsKitchen2,
  IconArrowRight,
  IconX,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
          <span className="text-sm font-semibold text-teal-4">Permanent Recruitment</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Gambling on <span className="text-teal-5">Permanent Hires.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          25 years finding operations talent. 12-week replacement guarantee. Quality shortlists, not quantity.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Find Your Next Hire</Button>
          <Button variant="secondary" size="lg" href="/contact">Request a Callback</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats Section ─────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "21", label: "Days Average", sub: "From brief to shortlist" },
    { value: "12", label: "Week Guarantee", sub: "Full replacement, zero cost" },
    { value: "25+", label: "Years Experience", sub: "Operations recruitment" },
    { value: "92%", label: "Retention Rate", sub: "Still there after 12 months" },
  ];
  return (
    <section className="relative w-full bg-navy-700 py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-4xl font-semibold text-white md:text-5xl">
                <AnimatedNumber value={s.value} />
              </div>
              <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wider text-teal-5">
                {s.label}
              </div>
              <div className="relative mt-1 text-xs text-white/40">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  const failures = [
    "Generic filters miss specific operational experience",
    "Time-wasting shortlists of 'available' not 'capable'",
    "No skin in the game if the candidate leaves",
    "Managers spend 40+ hours per hire on bad interviews",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">THE RISK</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              Permanent Recruitment <br/>is Risky
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-6">
              You&apos;ve felt it. The sinking feeling when your new hire isn&apos;t working out. Three months in, everyone knows — but you&apos;ve already invested thousands.
            </p>
            <p className="text-lg leading-relaxed text-white/60">
              Salary, training, lost productivity, re-hiring costs. A bad permanent hire bleeds money for months before you cut losses.
            </p>
          </motion.div>

          <motion.div
            className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
             <h3 className="relative text-xl font-semibold text-white mb-6 flex items-center gap-3">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                 <IconDice size={22} />
               </div>
               Why generalist hiring fails:
             </h3>
             <ul className="relative space-y-4">
               {failures.map((item, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <IconX size={16} className="text-red-400 mt-1 shrink-0" />
                   <span className="text-[15px] leading-relaxed text-[#8B98AB]">{item}</span>
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How We De-Risk ────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { title: "We Do The Heavy Lifting", desc: "We screen hundreds so you only see the top 3. No generic CV dumps.", icon: IconSearch },
    { title: "12-Week Guarantee", desc: "If they aren't right, we find someone who is. Zero cost to you.", icon: IconShieldCheck },
    { title: "Pay When It Works", desc: "Success-based fees. We only win when you find your perfect hire.", icon: IconCash },
    { title: "End-to-End Management", desc: "From first contact to start date, we handle the logistics.", icon: IconClock },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">OUR PROCESS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             How We De-Risk Your Hiring
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            We remove the guesswork, the time-wasting, and the financial risk.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mx-auto mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                  <step.icon size={28} stroke={1.5} />
                </div>
               <h3 className="relative text-white font-semibold text-lg mb-2">{step.title}</h3>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Roles Section ─────────────────────────────────────────────────────────
function RolesSection() {
  const roles = [
    { title: "Operations Managers", desc: "Running the whole show. Strategic & tactical leadership.", icon: IconBriefcase },
    { title: "Transport Managers", desc: "Compliance, routing, and fleet leadership experts.", icon: IconTruck },
    { title: "Warehouse Supervisors", desc: "Shift leaders who know how to motivate and hit targets.", icon: IconBuildingFactory },
    { title: "Planners & Clerks", desc: "The organisational backbone of your logistics loop.", icon: IconClock },
    { title: "Commercial & Admin", desc: "Customer service and back-office operations talent.", icon: IconUserSearch },
    { title: "Production Leads", desc: "Line management for manufacturing environments.", icon: IconToolsKitchen2 },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">OUR EXPERTISE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             We Know These Roles
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            25 years of specialist experience in operations and logistics recruitment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((r, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <r.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[22px] leading-tight mb-1">{r.title}</h3>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Divider Section ───────────────────────────────────────────────────────
function WhyAcceptSection() {
    return (
        <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full mix-blend-screen opacity-20 blur-[120px] bg-teal-5" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.h2 
                    className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl tracking-tight mb-8"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    Quality shortlists. <span className="text-teal-5">Not quantity.</span>
                </motion.h2>
                <motion.p 
                    className="max-w-3xl mx-auto text-lg text-white/60 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                >
                    We don&apos;t flood your inbox with CVs. We find 3 people who can actually do the job. Because we know the roles, we know the sector, and we know what &ldquo;good&rdquo; looks like in operations.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                >
                    <div className="inline-block px-8 py-4 rounded-full bg-teal-5/10 border border-teal-5/30 text-teal-4 font-bold">
                         25 years. Operations talent only.
                    </div>
                </motion.div>
             </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function PermanentRecruitment() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />
      <ProblemSection />
      <ProcessSection />
      <RolesSection />
      <WhyAcceptSection />

      <CtaBanner
        badge="GET STARTED"
        title="Stop Wasting Time on"
        titleHighlight="Wrong Candidates"
        subtitle="Success-based fees. 12-week guarantee. Operations talent that sticks."
        primaryButtonText="Find Your Next Hire"
        secondaryButtonText="Call Our Team"
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </main>
  );
}
