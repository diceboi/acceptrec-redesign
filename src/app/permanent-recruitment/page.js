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
  IconDice,
  IconUsers,
  IconSearch,
  IconShieldCheck,
  IconCash,
  IconClock,
  IconAlertCircle,
  IconHeart,
  IconCheck,
  IconBriefcase,
  IconUserSearch,
  IconTruck,
  IconBuildingFactory,
  IconToolsKitchen2,
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Permanent Recruitment</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Gambling on <span className="text-teal-5">Permanent Hires</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          25 years finding operations talent. 12-week replacement guarantee. Quality shortlists, not quantity.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Find Your Next Hire</Button>
          <Button variant="secondary" size="lg">Request a Callback</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "21", label: "Days Average" },
    { value: "12", label: "Week Guarantee" },
    { value: "25+", label: "Years Experience" },
    { value: "92%", label: "Still There" },
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

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

          <div className="space-y-6">
            <motion.div
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                 <IconDice className="text-red-400" />
                 Why generalist hiring fails:
               </h3>
               <ul className="space-y-4">
                 {[
                   "Generic filters miss specific operational experience",
                   "Time-wasting shortlists of 'available' not 'capable'",
                   "No skin in the game if the candidate leaves",
                   "Managers spend 40+ hours per hire on bad interviews"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <IconCheck size={18} className="text-red-400 mt-1 shrink-0" />
                     <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
          </div>
        </div>
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
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">OUR EXPERTISE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            We Know These Roles
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

// ─── Process Section ───────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { title: "We Do The Heavy Lifting", desc: "We screen hundreds so you only see the top 3. No generic CV dumps.", icon: IconSearch },
    { title: "12-Week Replacement Guarantee", desc: "If they aren't right, we find someone who is. Zero cost to you.", icon: IconShieldCheck },
    { title: "Pay When It Works", desc: "Success-based fees. We only win when you find your perfect hire.", icon: IconCash },
    { title: "End-to-End Management", desc: "From first contact to start date, we handle the logistics.", icon: IconClock },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">OUR PROCESS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            How We De-Risk Your Hiring
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4 mb-6">
                <step.icon size={24} />
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
export default function PermanentRecruitment() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />
      <ProblemSection />
      <RolesSection />
      <ProcessSection />

      <CtaBanner
        badge="GET STARTED"
        title="Stop Wasting Time on"
        titleHighlight="Wrong Candidates"
        subtitle="Success-based fees. 12-week guarantee. Operations talent that sticks."
        primaryButtonText="Find Your Next Hire"
        secondaryButtonText="Call Our Team"
      />

      <Footer />
    </main>
  );
}
