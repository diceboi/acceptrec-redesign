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
  IconStarFilled,
  IconChartBar,
  IconTrophy,
  IconDeviceDesktopAnalytics,
  IconCheck,
  IconPackage,
  IconBuildingFactory,
  IconTruck,
  IconToolsKitchen2,
  IconSearch,
  IconScale,
  IconUserCheck,
  IconBolt,
  IconArrowRight,
  IconPlus,
  IconUsers,
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Temporary Staffing</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Better <span className="text-teal-5">Workers.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Right now, 1,200+ of our workers are on site. They aren&apos;t just filling gaps — they&apos;re hitting targets.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Get Better Workers</Button>
          <Button variant="secondary" size="lg">Call Us Now</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Tech Highlights ───────────────────────────────────────────────────────
function TechHighlights() {
  const cards = [
    {
      title: "ACCEPTRATE",
      subtitle: "Every worker rated. Every shift.",
      desc: "Our workers stay because we treat them right. We rate every worker on every shift — punctuality, performance, attitude. Low scorers don't come back. You only get workers who've earned their place.",
      icon: IconStarFilled,
    },
    {
      title: "ACCEPTCOACH",
      subtitle: "Workers get better over time.",
      desc: "We don't just rate workers — we coach them. Feedback after every shift. Tips to improve. Good workers become great workers. Your standards become their standards.",
      icon: IconChartBar,
    },
    {
      title: "ACCEPTREWARDS",
      subtitle: "Performance is rewarded.",
      desc: "Great performance earns points. Points unlock rewards and priority shifts. Top workers compete for recognition. Good incentives create good workers.",
      icon: IconTrophy,
    },
    {
      title: "ACCEPTPULSE",
      subtitle: "Know who's on site. Live.",
      desc: "Real-time attendance with photo verification. See exactly who arrived, when they clocked in, where they were. Instant alerts if anyone's missing. No guessing.",
      icon: IconDeviceDesktopAnalytics,
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
             Workers who get better, not just bodies.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            Other agencies send whoever&apos;s available. We send rated, coached workers who earn their place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-3xl p-10 hover:border-teal-5/20 transition-colors group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <card.icon size={24} />
                </div>
                <div>
                  <h3 className="text-teal-5 text-sm font-bold tracking-widest uppercase mb-1">{card.title}</h3>
                  <p className="text-white font-bold text-xl">{card.subtitle}</p>
                </div>
              </div>
              <p className="text-white/50 text-[15px] leading-relaxed mb-6">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Link href="/technology" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
                Explore all our technology <IconArrowRight size={18} />
            </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "100%", label: "Workers rated", sub: "Every worker, every shift" },
    { value: "4.2", label: "Average worker score", sub: "Tracked and improving", type: "stars" },
    { value: "98%", label: "Fill rate", sub: "Quality workers, not just bodies" },
    { value: "1,200", label: "Daily workers", sub: "Rated, coached, rewarded" },
  ];
  return (
    <section className="relative w-full bg-[#00A99D] py-16 md:py-20 font-sans text-white z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <div className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tight flex items-center gap-1">
              <AnimatedNumber value={s.value} />
              {s.type === "stars" && <IconStarFilled className="text-white" size={32} />}
            </div>
            <div className="text-lg font-bold text-white mb-1">{s.label}</div>
            <div className="text-sm font-medium text-white/70">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    { p: "\"Workers who just do the minimum\"", s: "Our workers are rated every shift — and they know it. Performance matters. Low scorers don't come back. You get workers who actually try.", icon: IconStarFilled },
    { p: "\"Agencies sending whoever's available\"", s: "We rate every worker, every shift. Low scorers get removed. You only get workers who've earned their place, not whoever answered their phone.", icon: IconUsers },
    { p: "\"No improvement over time\"", s: "We coach our workers. Feedback after every shift. Tips to get better. Workers who start good become great. Your standards become their standards.", icon: IconChartBar },
    { p: "\"Workers with no incentive to perform\"", s: "Great performance earns points. Points unlock rewards and priority shifts. Good incentives create good workers.", icon: IconTrophy },
    { p: "\"Can't get hold of your agency when you need them\"", s: "Same-day response guaranteed. Call at 6am, workers on site by start of shift. We answer phones. We solve problems. That's the job.", icon: IconBolt },
    { p: "\"Different faces every single day\"", s: "We build you a reliable core team. Same good workers coming back. Consistency that compounds.", icon: IconArrowRight },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
             Tired of mediocre temps?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            Workers show up. But are they any good? We solved that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-3xl p-10 hover:border-teal-5/20 transition-colors h-full"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               <span className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">THE PROBLEM</span>
               <h3 className="text-white font-bold text-xl mb-4 leading-tight">{item.p}</h3>
               <span className="text-teal-5 text-[10px] font-bold uppercase tracking-widest mb-2 block">HOW WE FIX IT</span>
               <p className="text-white/50 text-[14px] leading-relaxed">{item.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Divider Section ───────────────────────────────────────────────────────
function TechPeopleSection() {
    return (
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5 overflow-hidden">
             <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.h2 
                    className="text-4xl font-semibold text-white md:text-5xl lg:text-[64px] tracking-tight mb-8"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    Technology helps. <span className="text-teal-5">People deliver.</span>
                </motion.h2>
                <motion.p 
                    className="max-w-3xl mx-auto text-xl text-white/60 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                >
                    All the tech in the world doesn&apos;t matter if no one answers the phone at 6am. We&apos;re recruiters first. We know what it takes to fill a shift, solve a problem, and keep an operation running. The technology just makes us faster and more reliable.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                >
                    <div className="inline-block px-8 py-4 rounded-full bg-teal-5/10 border border-teal-5/30 text-teal-4 font-bold">
                         It&apos;s a people thing.
                    </div>
                </motion.div>
             </div>
        </section>
    );
}

// ─── Sectors We Cover ───────────────────────────────────────────────────────
function SectorsWeCover() {
  const sectors = [
    { title: "Warehousing", desc: "Pickers, packers, forklift", icon: IconPackage },
    { title: "Manufacturing", desc: "Production, assembly, QC", icon: IconBuildingFactory },
    { title: "Driving", desc: "HGV, van, forklift", icon: IconTruck },
    { title: "Food Production", desc: "GLA licensed (PEAR0003)", icon: IconToolsKitchen2 },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
             Sectors We Cover
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            A decade of experience in these industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-3xl p-10 text-center hover:border-teal-5/20 transition-colors group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-5/10 text-teal-5 mx-auto mb-6 group-hover:bg-teal-5 group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>
               <h3 className="text-white font-bold text-xl mb-1">{s.title}</h3>
               <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: 1, title: "Tell us what you need", desc: "Roles, numbers, dates. 2-minute call." },
    { num: 2, title: "We match workers", desc: "From our rated, vetted pool." },
    { num: 3, title: "Workers check in live", desc: "You see arrivals in real-time." },
    { num: 4, title: "We handle everything", desc: "Payroll, compliance, problems." },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
             How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            Simple process. Reliable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
             <div className="hidden lg:block absolute top-[100px] left-[50px] right-[50px] h-0.5 border-t-2 border-dashed border-white/5 z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               <div className="w-16 h-16 rounded-full bg-teal-5 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-xl shadow-teal-5/20 border-4 border-[#0d111a]">
                  {step.num}
               </div>
               <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
               <p className="text-white/40 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function TemporaryStaffing() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />
      <TechHighlights />
      <ProblemSection />
      <TechPeopleSection />
      <SectorsWeCover />
      <HowItWorks />

      <CtaBanner
        badge="GET READY"
        title="Ready for temps"
        titleHighlight="who actually perform?"
        subtitle="100% of our workers are rated every shift. Hire with confidence."
        primaryButtonText="Get Better Workers"
        secondaryButtonText="Call Our Team"
      />

      <Footer />
    </main>
  );
}
