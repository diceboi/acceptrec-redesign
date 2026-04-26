"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
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
          <span className="text-sm font-semibold text-teal-4">Temporary Staffing</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Better <span className="text-teal-5">Workers.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Right now, 1,200+ of our workers are on site. They aren&apos;t just filling gaps — they&apos;re hitting targets.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Get Better Workers</Button>
          <Button variant="secondary" size="lg">Call Us Now</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats Section ─────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "100%", label: "Workers Rated", sub: "Every worker, every shift" },
    { value: "4.2", label: "Avg Worker Score", sub: "Tracked and improving" },
    { value: "98%", label: "Fill Rate", sub: "Quality workers, not just bodies" },
    { value: "1,200", label: "Daily Workers", sub: "Rated, coached, rewarded" },
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
              <div className="relative text-4xl font-semibold text-white md:text-5xl flex items-center justify-center gap-1">
                <AnimatedNumber value={s.value} />
                {s.label === "Avg Worker Score" && <IconStarFilled className="text-yellow-4" size={28} />}
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden font-sans">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Workers who get better, not just bodies.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Other agencies send whoever&apos;s available. We send rated, coached workers who earn their place.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <card.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-teal-5 text-[10px] font-bold tracking-widest uppercase mb-1.5">{card.title}</h3>
                  <p className="text-white font-semibold text-[22px] leading-tight">{card.subtitle}</p>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
            <Link href="/technology" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
                Explore all our technology <IconArrowRight size={18} />
            </Link>
        </div>
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
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">COMMON FRUSTRATIONS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Tired of mediocre temps?
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Workers show up. But are they any good? We solved that.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm h-full"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <span className="relative text-red-400 text-[10px] font-bold uppercase tracking-widest mb-1 block">THE PROBLEM</span>
               <h3 className="relative text-white font-semibold text-[22px] mb-5 leading-tight">{item.p}</h3>
               <span className="relative text-teal-5 text-[10px] font-bold uppercase tracking-widest mb-2 block">HOW WE FIX IT</span>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{item.s}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Divider Section ───────────────────────────────────────────────────────
function TechPeopleSection() {
    return (
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
            <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full mix-blend-screen opacity-20 blur-[120px] bg-teal-5" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.h2 
                    className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl tracking-tight mb-8"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                    Technology helps. <span className="text-teal-5">People deliver.</span>
                </motion.h2>
                <motion.p 
                    className="max-w-3xl mx-auto text-lg text-white/60 mb-10 leading-relaxed"
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
    { title: "Warehousing", desc: "Pickers, packers, forklift drivers — the backbone of distribution.", icon: IconPackage },
    { title: "Manufacturing", desc: "Production, assembly, QC operatives for every line.", icon: IconBuildingFactory },
    { title: "Driving", desc: "HGV Class 1 & 2, van, forklift — fully licensed.", icon: IconTruck },
    { title: "Food Production", desc: "GLA licensed (PEAR0003). Compliant from day one.", icon: IconToolsKitchen2 },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">INDUSTRIES</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Sectors We Cover
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            A decade of experience across these core industries.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mx-auto mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                  <s.icon size={28} stroke={1.5} />
                </div>
               <h3 className="relative text-white font-semibold text-[22px] mb-2">{s.title}</h3>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">PROCESS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             How It Works
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Simple process. Reliable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
             <div className="hidden lg:block absolute top-[72px] left-[80px] right-[80px] h-0.5 border-t-2 border-dashed border-white/5 z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="glass-card group relative z-10 overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative w-14 h-14 rounded-full bg-teal-5 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-teal-5/20">
                  {step.num}
               </div>
               <h3 className="relative text-white font-semibold text-lg mb-2">{step.title}</h3>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{step.desc}</p>
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
    <main className="bg-navy-900 min-h-screen">
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
