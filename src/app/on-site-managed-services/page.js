"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
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
} from "@tabler/icons-react";

// ─── Inner Hero ────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "50%",
            left: "5%",
            top: "10%",
            background: "var(--color-teal-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "50%",
            width: "45%",
            right: "5%",
            top: "20%",
            background: "var(--color-purple-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">
            On-Site Managed Services
          </span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Built for <span className="text-teal-5">Volume.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Need 50, 100, 200+ temps a day? We&apos;ve got the infrastructure.<br />
          <span className="opacity-80 leading-relaxed block mt-2 text-lg">1,200 workers deployed daily. Data-driven forecasting. Zero guesswork.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">See Case Studies</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Hero Stats ────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "1,200+", label: "Workers daily", desc: "Deployed across sites" },
    { value: "190+", label: "Active clients", desc: "Volume operations managed" },
    { value: "9+", label: "Years with Poundstretcher", desc: "Scale & longevity" },
    { value: "100%", label: "Audit Compliance", desc: "GLA & ethical certified" },
  ];
  return (
    <section className="relative w-full bg-[#0d1522] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-4xl lg:text-5xl font-bold text-teal-4 mb-2 tracking-tight">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="font-semibold text-white/90 text-lg leading-snug mb-1">{s.label}</div>
            <div className="text-[14px] font-medium text-white/50">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Poundstretcher ──────────────────────────────────────────────────────────
function Poundstretcher() {
  return (
    <section className="relative w-full bg-[#0d1522] py-24 border-b border-white/5 font-sans">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="bg-[#161b28] border border-white/5 rounded-[24px] p-10 md:p-14 text-center max-w-4xl mx-auto hover:border-white/10 transition-colors shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
            FEATURED PARTNERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Poundstretcher</h2>
          <p className="text-2xl text-teal-4 font-bold mb-6">150 workers a day. Every day. For 9 years.</p>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            WHY TRUST ACCEPT
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-8">
            We&apos;ve been doing this for a decade.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Not promises. Data. Every shift, every worker, every outcome — tracked, analysed, improved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={p.icon}
                title={p.title}
                description={p.desc}
                noArrow
              />
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            DEMAND INTELLIGENCE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            We predict your needs before you know them.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-white/50">
            Other agencies wait for your call. We model demand using historical data, seasonal patterns, and real-time signals — so you never scramble for staff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={f.icon}
                title={f.title}
                description={f.desc}
                noArrow
              />
            </div>
          ))}
        </div>

        {/* What This Means For You */}
        <motion.div
          className="bg-[#161b28] border border-white/5 rounded-3xl p-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">What This Means For You:</h3>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <IconCheck size={20} className="text-teal-5 mt-0.5 shrink-0" />
                <span className="text-white/80">
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            VOLUME CAPABILITY
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Why we can handle big numbers.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Infrastructure built for scale. Not promises — systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caps.map((c, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={c.icon}
                title={c.title}
                description={c.desc}
                noArrow
              />
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            FULL SERVICE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            What You Get
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Everything managed. Nothing left to chance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={item.icon}
                title={item.title}
                description={item.desc}
                noArrow
              />
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            RESULTS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Volume delivered. Trust earned.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href={c.href}
                icon={c.icon}
                title={c.name}
                description={c.desc}
              >
                <p className="text-[13px] text-teal-5/70 font-medium mt-4 pt-4 border-t border-white/5">{c.stats}</p>
              </BentoCard>
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1000px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Is This Right For You?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Good fit */}
          <motion.div
            className="bg-teal-5/8 border border-teal-5/30 rounded-3xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-teal-4 mb-6 flex items-center gap-2">
              <IconCheck size={22} className="text-teal-4" />
              Good fit if you:
            </h3>
            <ul className="space-y-3">
              {goodFit.map((item, i) => (
                <li key={i} className="text-white/80 flex items-start gap-2">
                  <span className="text-teal-5 mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not right */}
          <motion.div
            className="bg-[#161b28] border border-white/10 rounded-3xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white/50 mb-6 flex items-center gap-2">
              <IconX size={22} className="text-white/50" />
              Not right if you:
            </h3>
            <ul className="space-y-3">
              {notRight.map((item, i) => (
                <li key={i} className="text-white/50 flex items-start gap-2">
                  <span className="mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function OnSiteManagedServices() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
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
      />

      <Footer />
    </main>
  );
}
