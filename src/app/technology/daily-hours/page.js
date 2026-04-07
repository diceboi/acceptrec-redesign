"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconClock, 
  IconCalendarCheck, 
  IconCurrencyPound, 
  IconBolt, 
  IconAlertTriangle,
  IconCheck,
  IconX,
  IconFlag,
  IconChartBar,
  IconUsers,
  IconMessage2
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function HoursHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-teal-5/5 border border-teal-5/10 rounded-2xl backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-teal-4">
            Cut No-Shows 75%. See how InPost hit 98% fill rate with Accept
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">Daily Hours Confirmation</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Know What You're <br /><span className="text-teal-5 text-glow-teal">Paying. Daily.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Workers confirm hours daily. You see costs in real-time. No more invoice surprises or timesheet disputes.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem/Reality Section ───────────────────────────────────────────────
function RealitySection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE PROBLEM</h2>
                        <h3 className="text-white text-3xl font-bold mb-10 tracking-tight">Sound familiar?</h3>
                        <div className="space-y-6">
                            {[
                                "Discrepancies found weeks later when the invoice arrives.",
                                "Friday afternoon panics chasing missing timesheet signatures.",
                                "Flying blind on your recruitment budget until it's too late.",
                                "Manual data entry errors causing payroll headaches."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                                    <IconAlertTriangle className="text-amber-500 shrink-0" size={20} />
                                    <p className="text-white/70 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 rounded-[40px] bg-teal-5/5 border border-teal-5/10 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="relative z-10">
                            <h3 className="text-white text-3xl font-bold mb-6 italic">"The weekly timesheet is a nightmare."</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Waiting until the end of the week to confirm hours is a recipe for errors. Memories fade, disputes arise, and your budget stays a mystery. Our system fixes this by making confirmation a daily, real-time habit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Workflow Section ──────────────────────────────────────────────────────
function WorkflowSection() {
    const steps = [
        { title: "Shift Ends", icon: IconFlag, desc: "Worker finishes their daily shift on site." },
        { title: "Confirm", icon: IconCalendarCheck, desc: "Worker opens the app and confirms their exact hours immediately." },
        { title: "Update", icon: IconBolt, desc: "Your dashboard reflects the confirmed hours instantly." },
        { title: "Costs Tracked", icon: IconCurrencyPound, desc: "The exact cost of the day is calculated and updated in real-time." }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE PROCESS</h2>
                    <h3 className="text-white text-4xl font-bold mb-6 tracking-tight">How It Works</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s, i) => (
                        <div key={i} className="relative p-10 rounded-[32px] bg-[#161b28] border border-white/5 transition-all hover:border-teal-5/20 group">
                            <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <s.icon size={28} />
                            </div>
                            <h4 className="text-white text-xl font-bold mb-4">{s.title}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                            {i < 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                                    <IconCheck size={24} className="text-teal-5/20" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Live Tracker Mockup ──────────────────────────────────────────────────
function DailyTrackerMockup() {
    const workers = [
        { name: "John Smith", status: "Confirmed", hours: "8.0h", color: "bg-green-500", icon: IconCheck },
        { name: "Sarah Jones", status: "Confirmed", hours: "7.5h", color: "bg-green-500", icon: IconCheck },
        { name: "Mike Wilson", status: "Confirmed", hours: "8.0h", color: "bg-green-500", icon: IconCheck },
        { name: "Emma Davis", status: "Pending", hours: "---", color: "bg-white/10", icon: IconClock },
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-285 px-6">
                <div className="bg-[#161b28] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Header/Info */}
                        <div className="lg:col-span-5 p-12 lg:p-20 bg-linear-to-b from-[#1c2436] to-[#161b28] border-r border-white/5">
                            <div className="px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-5 text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-8">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
                                Live Summary Data
                            </div>
                            <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">Real-Time Clarity</h3>
                            <p className="text-white/40 text-lg leading-relaxed mb-10">
                                See which hours are confirmed and which are still pending the moment they happen.
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Today's Confirmed Hours</div>
                                    <div className="text-white text-3xl font-mono font-bold tracking-tighter">23.5h</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-1">Running Cost</div>
                                    <div className="text-teal-5 text-3xl font-mono font-bold tracking-tighter">£352.50</div>
                                </div>
                            </div>
                        </div>

                        {/* List Mockup */}
                        <div className="lg:col-span-7 p-8 md:p-16">
                            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-10 flex items-center justify-between">
                                Daily Attendance List
                                <span className="text-[10px] text-white/20">Updated: Just Now</span>
                            </h4>
                            <div className="space-y-4">
                                {workers.map((w, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4">
                                                <IconUsers size={20} />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">{w.name}</div>
                                                <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Shift: Morning 6am</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="hidden md:block text-white font-mono font-bold text-lg">{w.hours}</div>
                                            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/5 ${w.status === 'Confirmed' ? 'text-green-400 bg-green-500/10' : 'text-amber-500 bg-amber-500/10'}`}>
                                                <w.icon size={14} />
                                                {w.status}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Comparison Section ────────────────────────────────────────────────────
function ComparisonSection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE DIFFERENCE</h2>
                    <h3 className="text-white text-4xl font-bold mb-6 tracking-tight">Night and Day</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-[40px] overflow-hidden border border-white/10">
                    <div className="bg-[#161b28] p-12">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <IconX size={20} />
                            </div>
                            <span className="text-white/40 uppercase font-bold tracking-widest text-xs">The Old Way</span>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Disputes resolved days later",
                                "Friday afternoon timesheet panics",
                                "Errors found on invoices",
                                "Budget is a mystery until Friday"
                            ].map((t, i) => (
                                <li key={i} className="text-white/60 font-medium flex gap-3 italic">
                                    <IconPointFilled size={12} className="text-red-500/30 shrink-0 mt-1" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#1c2436] p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[80px]" />
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4">
                                <IconCheck size={20} />
                            </div>
                            <span className="text-teal-5 uppercase font-bold tracking-widest text-xs">The Daily Hours Way</span>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Discrepancies caught same-day",
                                "Fresh memories = fast resolution",
                                "Zero invoice discrepancies",
                                "Real-time daily budget tracking"
                            ].map((t, i) => (
                                <li key={i} className="text-white font-bold flex gap-3">
                                    <IconCheck size={20} className="text-teal-5 shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IconPointFilled = ({ size, className }) => <div className={`rounded-full ${className}`} style={{ width: size, height: size, backgroundColor: 'currentColor' }} />;

// ─── Benefits Grid ─────────────────────────────────────────────────────────
function BenefitsGrid() {
    const benefits = [
        {
            title: "Daily Confirmations",
            desc: "Workers sign off their own hours every single shift. We move the proof of accuracy to the source.",
            icon: IconCalendarCheck
        },
        {
            title: "Instant Visibility",
            desc: "No more waiting until the end of the week. Your dashboard updates the moment hours are confirmed.",
            icon: IconBolt
        },
        {
            title: "Same-Day Resolution",
            desc: "If there's a discrepancy, you catch it today while memories are fresh, not weeks later on an invoice.",
            icon: IconMessage2
        },
        {
            title: "Real-Time Cost Tracking",
            desc: "Watch your running staffing costs update daily. Budget tracking that actually keeps you in control.",
            icon: IconCurrencyPound
        },
        {
            title: "No Friday Panics",
            desc: "Eliminate the weekly chase for missing timesheet signatures and the Friday afternoon payroll rush.",
            icon: IconClock
        },
        {
            title: "Zero Guesswork",
            desc: "Exactly confirmed hours result in perfectly accurate payroll data and 100% correct invoicing.",
            icon: IconChartBar
        }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="p-10 rounded-[32px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <b.icon size={28} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{b.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function DailyHoursPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <HoursHero />
      <RealitySection />
      <WorkflowSection />
      <DailyTrackerMockup />
      <ComparisonSection />
      <BenefitsGrid />

      {/* CTA Section */}
      <CtaBanner
        badge="GET ACCURATE"
        title="Stop guessing."
        titleHighlight="Start knowing."
        subtitle="Eliminate disputes and budget surprises. Move to our Daily Hours confirmation system and gain 100% payroll clarity."
        primaryButtonText="Get a Demo"
        secondaryButtonText="Talk to an Expert"
      />

      <Footer />
    </main>
  );
}
