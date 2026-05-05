"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconUsersGroup,
  IconMapPin,
  IconCpu,
  IconClock24,
  IconUserCheck,
  IconChartLine,
  IconDeviceDesktopAnalytics,
  IconStarFilled,
  IconSchool,
  IconShieldCheck,
  IconCheck,
  IconX,
  IconTrendingUp,
  IconAnalyze,
  IconAdjustments,
  IconDatabase,
  IconChartBar,
  IconArrowRight,
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
          <span className="text-sm font-semibold text-teal-4">On-Site Managed Services</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Built for <span className="text-teal-5">Volume.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Need 50, 100, 200+ temps a day? We&apos;ve got the infrastructure. 1,200 workers deployed daily. Data-driven forecasting. Zero guesswork.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Get Started</Button>
          <Button variant="secondary" size="lg" href="/case-studies">See Case Studies</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Stats Section ─────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "1,200+", label: "Workers Daily", sub: "Deployed across sites" },
    { value: "190+", label: "Active Clients", sub: "Volume operations managed" },
    { value: "9+", label: "Years with Poundstretcher", sub: "Scale & longevity" },
    { value: "100%", label: "Audit Compliance", sub: "GLA & ethical certified" },
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

// ─── Poundstretcher ──────────────────────────────────────────────────────────
function Poundstretcher() {
  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="glass-card group relative overflow-hidden rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            FEATURED PARTNERSHIP
          </span>
          <h2 className="relative text-4xl font-semibold text-white md:text-5xl tracking-tight mb-6">Poundstretcher</h2>
          <p className="relative text-[22px] text-teal-5 font-semibold mb-6">150 workers a day. Every day. For 9 years.</p>
          <p className="relative text-[15px] leading-relaxed text-[#8B98AB] max-w-3xl mx-auto">
            When you supply 150 temps daily to one of the UK&apos;s largest discount retailers for nearly a decade, you learn what volume really means. No scrambling. No excuses. Just consistent delivery, year after year.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Track Record ──────────────────────────────────────────────────────────
function TrackRecord() {
  const points = [
    {
      title: "10+ Years of Historical Data",
      desc: "We know what happens in your industry, in your region, at every time of year. No surprises.",
      icon: IconDatabase,
    },
    {
      title: "98% Fill Rate — Consistently",
      desc: "Not a target. Our actual performance. Week in, week out, across all managed sites.",
      icon: IconChartBar,
    },
    {
      title: "190+ Clients Trust Us",
      desc: "From 10-person operations to 200+ daily. We scale with you.",
      icon: IconUsersGroup,
    }
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">WHY TRUST ACCEPT</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             We&apos;ve been doing this for a decade.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Not promises. Data. Every shift, every worker, every outcome — tracked, analysed, improved.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                <p.icon size={28} stroke={1.5} />
              </div>
              <h3 className="relative text-white font-semibold text-[22px] mb-2">{p.title}</h3>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Predictive Planning ──────────────────────────────────────────────────
function PredictivePlanning() {
  const features = [
    {
      title: "Historical Pattern Analysis",
      desc: "We know your busy periods before they hit. Seasonal spikes, monthly patterns, weekly fluctuations — all modelled.",
      icon: IconAnalyze,
    },
    {
      title: "Predictive Demand Planning",
      desc: "Our models anticipate demand 2-4 weeks out. We're recruiting before you even call.",
      icon: IconChartLine,
    },
    {
      title: "Real-Time Adjustments",
      desc: "Production changes? Order spikes? We flex in real-time. Our pool is ready; our systems are live.",
      icon: IconAdjustments,
    },
  ];

  const benefits = [
    { strong: "No scrambling.", text: "Workers are lined up before peak hits." },
    { strong: "Cost predictability.", text: "Forecast accuracy means budget accuracy." },
    { strong: "Fewer emergencies.", text: "Problems anticipated, not reacted to." },
    { strong: "Operational stability.", text: "Your production runs; we handle the people." },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">DEMAND INTELLIGENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             We predict your needs before you know them.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Other agencies wait for your call. We model demand using historical data, seasonal patterns, and real-time signals — so you never scramble for staff.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                <f.icon size={28} stroke={1.5} />
              </div>
              <h3 className="relative text-white font-semibold text-[22px] mb-2">{f.title}</h3>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* What This Means For You */}
        <motion.div
          className="glass-card group relative overflow-hidden rounded-2xl p-10 max-w-3xl mx-auto transition-all duration-300 hover:border-teal-5/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <h3 className="relative text-white font-semibold text-[22px] mb-6">What This Means For You:</h3>
          <ul className="relative space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <IconCheck size={20} className="text-teal-5 mt-0.5 shrink-0" />
                <span className="text-[15px] leading-relaxed text-[#8B98AB]">
                  <strong className="text-white">{b.strong}</strong> {b.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Volume Capability ────────────────────────────────────────────────────
function VolumeCapability() {
  const caps = [
    {
      title: "Deep Candidate Pool",
      desc: "Thousands of vetted, rated workers ready to deploy. Not scraping job boards — our own pool.",
      icon: IconUsersGroup,
    },
    {
      title: "3 Regional Branches",
      desc: "Leicester, Coventry, Tamworth. Local presence means local coverage across the Midlands.",
      icon: IconMapPin,
    },
    {
      title: "Tech-Enabled Operations",
      desc: "AcceptPulse for attendance. AcceptRate for quality. AcceptConnect for comms. Systems, not spreadsheets.",
      icon: IconCpu,
    },
    {
      title: "24/7 Operations",
      desc: "Night shifts, early starts, weekend coverage. We're staffed when you need us, not just 9-5.",
      icon: IconClock24,
    },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">VOLUME CAPABILITY</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Why we can handle big numbers.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Infrastructure built for scale. Not promises — systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caps.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mx-auto mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                  <c.icon size={28} stroke={1.5} />
                </div>
               <h3 className="relative text-white font-semibold text-[22px] mb-2">{c.title}</h3>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────────────────
function WhatYouGet() {
  const items = [
    { title: "Dedicated Account Manager", desc: "Your single point of contact. On-site presence tailored to your needs.", icon: IconUserCheck },
    { title: "Demand Forecasting", desc: "Data-driven predictions. Workers lined up before you need them.", icon: IconChartLine },
    { title: "Real-Time Attendance", desc: "Live dashboard. Photo verification. Instant no-show alerts.", icon: IconDeviceDesktopAnalytics },
    { title: "Quality Management", desc: "Every worker rated. Poor performers removed. Standards maintained.", icon: IconStarFilled },
    { title: "Worker Coaching", desc: "Continuous improvement. Feedback loops. Workers get better over time.", icon: IconSchool },
    { title: "Full Compliance", desc: "Right to work, payroll, holiday pay, insurance. All handled.", icon: IconShieldCheck },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">FULL SERVICE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             What You Get
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Everything managed. Nothing left to chance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <item.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[22px] leading-tight mb-1">{item.title}</h3>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────
function CaseStudies() {
  const cases = [
    {
      name: "InPost UK",
      tag: "Logistics",
      desc: "Crisis call on Friday. 55 workers deployed by Monday. Preferred supplier within 17 days.",
      stats: "55 Workers in 72hrs · 4,200+ Shifts · 98% Attendance",
      href: "/case-studies/inpost",
      icon: IconTrendingUp,
    },
    {
      name: "Vistry Group",
      tag: "Production",
      desc: "Doubled workforce capacity in 10 weeks. On-site model transformed their temp management.",
      stats: "7,000+ Shifts · 94.2% Fulfilment · 42 Converted to perm",
      href: "/case-studies/vistry",
      icon: IconChartLine,
    },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">RESULTS</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Volume delivered. Trust earned.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <c.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-teal-5 text-[10px] font-bold tracking-widest uppercase mb-1.5">{c.tag}</h3>
                  <p className="text-white font-semibold text-[22px] leading-tight">{c.name}</p>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB] mb-4">{c.desc}</p>
              <p className="relative text-[13px] text-teal-5/70 font-medium pt-4 border-t border-white/5">{c.stats}</p>
              <Link href={c.href} className="relative mt-4 text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2 text-sm">
                Read case study <IconArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Is This Right For You? ───────────────────────────────────────────────
function FitCheck() {
  const goodFit = [
    "Use 50+ temps daily (or scaling towards it)",
    "Need predictable coverage, not firefighting",
    "Want one partner, not multiple agencies",
    "Value data-driven decisions",
    "Need to free up management time",
  ];

  const notRight = [
    "Only need occasional temp cover",
    "Purely price-driven (cheapest wins)",
    "Don't want to share operational data",
    "Already have effective in-house management",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full mix-blend-screen opacity-20 blur-[120px] bg-teal-5" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Is This Right For You?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Good fit */}
          <motion.div
            className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative text-white font-semibold text-[22px] mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                <IconCheck size={22} />
              </div>
              Good fit if you:
            </h3>
            <ul className="relative space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <IconCheck size={16} className="text-teal-5 mt-1 shrink-0" />
                  <span className="text-[15px] leading-relaxed text-[#8B98AB]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not right */}
          <motion.div
            className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative text-white font-semibold text-[22px] mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <IconX size={22} />
              </div>
              Not right if you:
            </h3>
            <ul className="relative space-y-4">
              {notRight.map((item, i) => (
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

// ─── Main ───────────────────────────────────────────────────────────────────
export default function OnSiteManagedServices() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <InnerHero />
      <HeroStats />
      <Poundstretcher />
      <TrackRecord />
      <PredictivePlanning />
      <VolumeCapability />
      <WhatYouGet />
      <CaseStudies />
      <FitCheck />

      <CtaBanner
        badge="GET STARTED"
        title="Ready to scale with"
        titleHighlight="confidence?"
        subtitle="Data-driven forecasting. Volume capability. One trusted partner."
        primaryButtonText="Get Started"
        secondaryButtonText="Call Our Team"
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </main>
  );
}
