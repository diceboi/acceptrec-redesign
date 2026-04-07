"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconActivity, 
  IconMapPin, 
  IconClock, 
  IconUserCheck, 
  IconDeviceMobile, 
  IconShieldCheck, 
  IconAlertCircle,
  IconChartBar,
  IconFingerprint,
  IconHistory,
  IconBell,
  IconPhoneCall,
  IconMessage2
} from "@tabler/icons-react";


// ─── Hero ──────────────────────────────────────────────────────────────────
function PulseHero() {
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">AcceptPulse</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Know Who's On <br /><span className="text-teal-5 text-glow-teal">Site. Live.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-time visibility into every worker, every site, every shift. No more guessing. No more timesheet disputes.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
    const problems = [
        "Shift started 30 minutes ago. Where's the agency worker you were promised?",
        "Your supervisor says they weren't there. The timesheet says they were. Who's lying?",
        "You're checking CCTV footage just to verify if someone actually showed up.",
        "You're paying invoices for hours you can't prove were worked."
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div>
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE REALITY</h2>
                    <h3 className="text-white text-3xl font-bold mb-10 tracking-tight">The Problem You Know Too Well</h3>
                    <div className="space-y-6 mb-12">
                        {problems.map((p, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-5" />
                                <p className="text-white/70 font-medium leading-relaxed">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-6 p-8 rounded-3xl bg-linear-to-br from-teal-5/10 to-teal-5/5 border border-teal-5/20">
                    <IconAlertCircle className="text-teal-5 shrink-0" size={32} />
                    <p className="text-white text-xl font-bold tracking-tight">Sound familiar? AcceptPulse ends this.</p>
                </div>
            </div>
        </section>
    );
}

// ─── Workflow Section ──────────────────────────────────────────────────────
function WorkflowSection() {
    const steps = [
        {
            title: "Step 1: Worker Arrives On Site",
            desc: "They open their phone, tap 'Clock In', and take a quick selfie. Takes 5 seconds.",
            icon: IconDeviceMobile
        },
        {
            title: "Step 2: Location Verified",
            desc: "AcceptPulse checks GPS coordinates. If they're not at the right site, clock-in is rejected. No cheating.",
            icon: IconMapPin
        },
        {
            title: "Step 3: Instant Confirmation",
            desc: "Client's dashboard updates in real-time. You get an alert. Worker gets confirmation. Everyone knows.",
            icon: IconShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                    <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">Dead simple for workers. Total clarity for you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#161b28] p-10 rounded-3xl border border-white/5 relative group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all duration-300">
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Dashboard Preview ─────────────────────────────────────────────────────
function DashboardPreview() {
    const sites = [
        { name: "Amazon LBA3", scheduled: 12, onTime: 11, late: 1, noShow: 0, status: "Active" },
        { name: "DHL Derby", scheduled: 8, onTime: 7, late: 0, noShow: 1, status: "Alert" },
        { name: "Whistl Leicester", scheduled: 15, onTime: 15, late: 0, noShow: 0, status: "Active" },
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="bg-[#161b28] rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[100px]" />
                        
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-white text-xl font-bold flex items-center gap-3">
                                <IconActivity className="text-teal-5 animate-pulse" /> Live Status Feed
                            </h3>
                            <div className="px-3 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-[10px] font-bold text-teal-5 uppercase tracking-widest">
                                Live Data
                            </div>
                        </div>

                        <div className="space-y-4">
                            {sites.map((site, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                                >
                                    <div>
                                        <div className="text-white font-bold text-sm mb-1">{site.name}</div>
                                        <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest leading-tight">{site.scheduled} Workers Scheduled</div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-teal-5 font-bold text-sm">{site.onTime}</div>
                                            <div className="text-[9px] text-white/30 uppercase tracking-widest">On Time</div>
                                        </div>
                                        <div className="text-center">
                                            <div className={site.late > 0 ? "text-yellow-400 font-bold text-sm" : "text-white/20 font-bold text-sm"}>{site.late}</div>
                                            <div className="text-[9px] text-white/30 uppercase tracking-widest">Late</div>
                                        </div>
                                        <div className="text-center">
                                            <div className={site.noShow > 0 ? "text-red-500 font-bold text-sm" : "text-white/20 font-bold text-sm"}>{site.noShow}</div>
                                            <div className="text-[9px] text-white/30 uppercase tracking-widest">No Show</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">Updates in real-time. No refresh needed.</p>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-ping" />
                                <span className="text-teal-5 text-[11px] font-bold">Syncing...</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">TRANSPARENCY</h2>
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tight">Your Dashboard, Live</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">
                            Every site. Every worker. Every shift. One screen. Your clients see who's on site in real-time. They stop calling you. Trust goes up. Complaints go down.
                        </p>
                    </div>
                 </div>
            </div>
        </section>
    );
}

// ─── Timeline Section ──────────────────────────────────────────────────────
function TroubleshootingTimeline() {
    const events = [
        {
            time: "30 MINUTES BEFORE SHIFT",
            text: "Automated WhatsApp reminder: \"Your shift starts at 6am at [Site Name]. See you there!\"",
            icon: IconMessage2
        },
        {
            time: "10 MINUTES AFTER START",
            text: "Worker hasn't clocked in? Automated text: \"Where are you? We expected you at [Site Name].\"",
            icon: IconBell
        },
        {
            time: "STILL NOTHING?",
            text: "System places automated phone call. No answer? Account manager notified immediately to find cover.",
            icon: IconPhoneCall
        }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="max-w-3xl mb-20 text-center mx-auto">
                    <h2 className="text-white text-4xl font-bold tracking-tight mb-6">Automatic No-Show Management</h2>
                    <p className="text-white/40 text-lg">AcceptPulse doesn't just track attendance. It prevents problems.</p>
                </div>

                <div className="relative space-y-12">
                    <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-linear-to-b from-teal-5/40 via-teal-5/20 to-teal-5/0 hidden md:block" />
                    
                    {events.map((e, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-8 relative"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-teal-5 flex items-center justify-center text-white shrink-0 z-10 border-4 border-[#0d1522] shadow-xl">
                                <e.icon size={32} />
                            </div>
                            <div className="pt-2">
                                <div className="text-teal-5 text-[10px] font-bold tracking-[0.2em] mb-2 uppercase">{e.time}</div>
                                <p className="text-white/70 text-lg font-medium leading-relaxed">{e.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-20 p-10 rounded-3xl bg-linear-to-r from-teal-5/10 to-transparent border border-white/5">
                    <p className="text-white/60 text-lg italic italic">
                        "This all happens automatically. You find out about problems within minutes, not hours. And we're already fixing it."
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Benefits Grid ─────────────────────────────────────────────────────────
function BenefitsGrid() {
    const benefits = [
        {
            title: "No More No-Show Confusion",
            desc: "Worker didn't clock in? You know within 10 minutes. Automated alert goes out. Problem solved before the client even notices.",
            icon: IconClock
        },
        {
            title: "Zero Timesheet Disputes",
            desc: "Clock-in at 6:02am. Clock-out at 2:08pm. GPS verified. Photo proof. No arguments. Ever.",
            icon: IconShieldCheck
        },
        {
            title: "Live Client Dashboard",
            desc: "Your clients see who's on site in real-time. They stop calling you. Trust goes up. Complaints go down.",
            icon: IconChartBar
        },
        {
            title: "Eliminate Buddy Punching",
            desc: "Selfie verification means nobody can clock in for someone else. Only the actual worker can check in.",
            icon: IconFingerprint
        },
        {
            title: "Instant Arrival Alerts",
            desc: "The second a worker clocks in, you get notified. No more wondering if they showed up.",
            icon: IconBell
        },
        {
            title: "Historical Data & Reports",
            desc: "Every clock-in stored with timestamp, location, photo. Compliance audits? You've got proof of everything.",
            icon: IconHistory
        }
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-285 px-6 text-center mb-16">
                <h2 className="text-white text-4xl font-bold tracking-tight mb-4">What This Means For You</h2>
            </div>
            <div className="mx-auto max-w-285 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                         <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <b.icon size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-4">{b.title}</h3>
                        <p className="text-white/40 text-[14px] leading-relaxed">{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function AcceptPulsePage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <PulseHero />
      <ProblemSection />
      <WorkflowSection />
      <DashboardPreview />
      <TroubleshootingTimeline />
      <BenefitsGrid />

      {/* CTA Section */}
      <CtaBanner
        badge="LAUNCHING SOON"
        title="Ready to Know"
        titleHighlight="Who's On Site?"
        subtitle="AcceptPulse is launching soon. Be one of the first agencies to eliminate timesheet disputes forever."
        primaryButtonText="Join Waitlist"
        secondaryButtonText="Book Demo"
      />

      <Footer />
    </main>
  );
}
