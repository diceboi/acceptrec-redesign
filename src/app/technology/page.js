"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconActivity,
  IconMessage2,
  IconUserSearch,
  IconRobot,
  IconChartDots,
  IconShieldCheck,
  IconClock,
  IconCheck,
  IconTarget,
  IconChartLine,
  IconArrowRight,
} from "@tabler/icons-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function TechnologyHero() {
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
          <span className="text-sm font-semibold text-teal-4">Real Results, Real Solutions</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          The Future of <span className="text-teal-5">Staffing is Here.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          While other agencies use phones and spreadsheets, we&apos;re building technology that transforms how temporary staffing works.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-block">
          <div className="glass-card rounded-2xl px-6 py-3">
            <p className="text-sm font-semibold text-teal-5">
              Cut No-Shows 75%. See how InPost hit 98% fill rate through our platform.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Philosophy Section ──────────────────────────────────────────────────
function PhilosophySection() {
  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">OUR PHILOSOPHY</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight mb-8">Built by recruiters who understand your problems.</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              We&apos;re recruiters. We&apos;ve spent years dealing with the same problems you have: morning no-shows, missing paperwork, and the lack of visibility into site performance.
            </p>
            <p className="text-lg text-[#8B98AB] leading-relaxed mb-10">
              So we started building. Not just software, but a completely integrated ecosystem that simplifies the way people find, manage, and scale their temporary workforce.
            </p>
            <blockquote className="border-l-4 border-teal-5 pl-6 py-2 italic font-medium text-white/80">
              &quot;The agencies that don&apos;t innovate won&apos;t survive the next decade.&quot;
            </blockquote>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Trustpilot Score", value: "4.8/5" },
              { label: "Google Reviews", value: "1500+" },
              { label: "Fill Rate Goal", value: "100%" },
            ].map((s, i) => (
              <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:teal-glow-sm hover:border-teal-5/30">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative text-3xl font-semibold text-white">{s.value}</div>
                <div className="relative mt-2 text-[13px] font-semibold uppercase tracking-wider text-teal-5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Product Grid ──────────────────────────────────────────────────────────
function ProductGrid() {
  const products = [
    { title: "AcceptPulse", desc: "Real-time visibility into who's on site, who's missing, and how your site is performing. No more guesswork. Gain 100% accurate geo-fenced data.", icon: IconActivity, stats: [{ label: "Verification Accuracy", value: "98%" }, { label: "Timesheet Fraud", value: "0%" }], large: true },
    { title: "AcceptConnect", desc: "Your entire workforce, one platform. Mass-messaging and worker connectivity. Every worker. Every shift. Every time.", icon: IconMessage2 },
    { title: "The Coach", desc: "AI-driven worker support. 24/7 multilingual assistance for payslips, shifts, and policy queries.", icon: IconRobot, badge: "AI Support" },
    { title: "Performance Coach", desc: "Helping our workers grow and achieve more. Track reliability and reward top talent through our proprietary scoring system.", icon: IconChartLine },
    { title: "Accept Talent Match", desc: "Every placement backed by data. We analyse skills, reliability history, and bidirectional feedback to ensure the right person is on the right shift.", icon: IconUserSearch },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">OUR PLATFORM</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">Three Tools. <span className="text-teal-5">Infinite Impact.</span></h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Integrated systems designed to provide visibility, connectivity, and data-driven results.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Large card */}
          <motion.div variants={cardVariants} className="md:col-span-8 glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start gap-5 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white"><IconActivity size={28} stroke={1.5} /></div>
              <div><h3 className="text-white font-semibold text-[22px] leading-tight">{products[0].title}</h3></div>
            </div>
            <p className="relative text-[15px] leading-relaxed text-[#8B98AB] mb-8">{products[0].desc}</p>
            <div className="relative grid grid-cols-2 gap-4">
              {products[0].stats.map((s, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <div className="text-teal-5 font-semibold text-xl mb-1">{s.value}</div>
                  <div className="text-[13px] font-semibold uppercase tracking-wider text-[#8B98AB]">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small card */}
          <motion.div variants={cardVariants} className="md:col-span-4 glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-6"><IconMessage2 size={28} stroke={1.5} /></div>
            <h3 className="relative text-white font-semibold text-[22px] leading-tight mb-4">{products[1].title}</h3>
            <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{products[1].desc}</p>
          </motion.div>

          {/* Bottom row */}
          {products.slice(2).map((p, i) => (
            <motion.div key={i} variants={cardVariants} className="md:col-span-4 glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white mb-6"><p.icon size={28} stroke={1.5} /></div>
              <h3 className="relative text-white font-semibold text-[22px] leading-tight mb-4">{p.title}</h3>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{p.desc}</p>
              {p.badge && <span className="relative inline-block mt-4 px-3 py-1 rounded-full bg-purple-6/15 border border-purple-5/30 text-[10px] font-bold text-purple-4 uppercase tracking-widest">{p.badge}</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Workflow Section ──────────────────────────────────────────────────────
function AutomationWorkflow() {
  const steps = [
    { time: "30 MIN BEFORE", title: "Pre-Shift Reminder", desc: "Location-aware WhatsApp nudge sent to all scheduled workers.", icon: IconMessage2 },
    { time: "10 MIN AFTER START", title: "No-Show Alert", desc: "AcceptPulse flags any missing clock-ins against geo-fenced site data.", icon: IconShieldCheck },
    { time: "IMMEDIATE RESOLUTION", title: "Auto-Call", desc: "If no response, manager is alerted and standby workers are notified.", icon: IconActivity },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">AUTOMATION</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">No-Shows? <span className="text-teal-5">We Handle It Automatically.</span></h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">Our automated workflow eliminates the stress of morning check-ins and ensures your site is always at 100% capacity.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-teal-5/0 via-teal-5/20 to-teal-5/0" />
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A99D] text-white mb-8 shadow-xl shadow-teal-5/10 relative z-10 border border-white/20">
                <step.icon size={28} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center text-[10px] font-bold text-teal-5">0{i + 1}</div>
              </div>
              <div className="text-teal-5 text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">{step.time}</div>
              <h3 className="text-white text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#8B98AB]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Results Section ───────────────────────────────────────────────────────
function ResultsSection() {
  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE IMPACT</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight mb-8">Why This <span className="text-teal-5">Matters</span></h2>
            <div className="space-y-4">
              {[
                "80% reduction in manual admin time.",
                "Instant visibility at the site level.",
                "Real-time issue resolution.",
                "Geofencing for 100% accurate attendance.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-5 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                    <IconCheck size={14} strokeWidth={3} />
                  </div>
                  <p className="text-white/60 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[100px] pointer-events-none" />
            <h3 className="relative text-white text-[22px] font-semibold mb-8 flex items-center gap-3 tracking-tight">
              <IconChartDots className="text-teal-5" /> Just the Beginning.
            </h3>
            <p className="relative text-[15px] leading-relaxed text-[#8B98AB] mb-10">
              &quot;Agencies that continue to treat recruitment as a manual game are leaving their clients&apos; production lines at risk. Our technology is designed to protect your output, not just fill seats.&quot;
            </p>
            <div className="relative flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-5 to-purple-5" />
              <div>
                <div className="text-white text-sm font-semibold tracking-tight">Accept Tech Labs</div>
                <div className="text-teal-5 text-[13px] font-semibold uppercase tracking-wider">Innovation Report 2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function TechnologyPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <TechnologyHero />
      <PhilosophySection />
      <ProductGrid />
      <AutomationWorkflow />
      <ResultsSection />
      <CtaBanner 
        badge="INNOVATION DRIVEN" 
        title="Want to see it" 
        titleHighlight="in action?" 
        subtitle="The tools are ready. The visibility is waiting. Book a 15-minute tech demo today." 
        primaryButtonText="Book Demo" 
        secondaryButtonText="View Portal" 
        primaryButtonHref="https://bookings.cloud.microsoft/book/ACCEPTECH@acceptrec.co.uk/?ismsaljsauthenabled=true" 
        secondaryButtonHref="/technology/client-portal" 
      />
      <Footer />
    </main>
  );
}
