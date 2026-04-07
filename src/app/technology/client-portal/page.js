"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { 
  IconLayoutDashboard, 
  IconUsers, 
  IconCurrencyPound, 
  IconChartBar, 
  IconCalendarCheck, 
  IconFileText, 
  IconArrowRight, 
  IconMessages,
  IconClock,
  IconBolt,
  IconTrendingUp,
  IconUserPlus,
  IconCircleCheckFilled,
  IconPlus,
  IconMessage2
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function PortalHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">Client Portal</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your Workforce Data. <br /><span className="text-teal-5 text-glow-teal">Real-Time.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No more chasing us for information. Who's on site, what it's costing — everything in one dashboard, updating live.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">TRANSPARENCY</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight italic">"This is ridiculous."</h3>
                        <p className="text-white text-xl font-bold mb-8 leading-tight">
                            You're paying for this workforce. Why don't you have access to the data? Most agencies keep you in the dark. We give you the keys.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                            <p className="text-white/70 text-lg leading-relaxed">
                                It's Wednesday. You need to know costs NOW. Not in 4 days. Not when the invoice arrives. Right now. But you can't.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                            <p className="text-white/70 text-lg leading-relaxed">
                                And the spreadsheet. And the other email. Your workforce data is scattered across 17 emails, 4 spreadsheets, and someone's WhatsApp. Good luck finding it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Dashboard Mockup ──────────────────────────────────────────────────────
function DashboardMockup() {
    const activities = [
        { user: "John Smith", action: "clocked in", time: "2m ago", site: "Amazon LBA3" },
        { user: "Sarah Jones", action: "finished shift", time: "15m ago", site: "DHL Derby" },
        { user: "Mike Wilson", action: "clocked in", time: "22m ago", site: "Amazon LBA3" },
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-285 px-6">
                <div className="bg-[#161b28] rounded-[40px] border border-white/5 p-8 md:p-16 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-5/5 blur-[120px]" />
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-white text-3xl font-bold mb-2">Accept Client Portal</h2>
                            <p className="text-white/40 text-sm font-medium tracking-wide">Live Workforce Intelligence</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="px-4 py-2 rounded-xl bg-teal-5/10 border border-teal-5/20 text-teal-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
                                Live Updates Enabled
                            </div>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { label: "Workers On Site", value: "23", icon: IconUsers, trend: "+2 today" },
                            { label: "Today's Spend", value: "£1,847", icon: IconCurrencyPound, trend: "Updating live" },
                            { label: "Attendance Rate", value: "98%", icon: IconCalendarCheck, trend: "Target reached" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4">
                                        <stat.icon size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-teal-5 uppercase tracking-widest">{stat.trend}</span>
                                </div>
                                <div className="text-white text-4xl font-bold mb-1">{stat.value}</div>
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Main area mockup */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                         {/* Activity feed */}
                        <div className="lg:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/5 h-full">
                            <h3 className="text-white text-sm font-bold mb-6 flex items-center gap-2">
                                <IconBolt size={16} className="text-teal-5" /> Live Activity Feed
                            </h3>
                            <div className="space-y-6">
                                {activities.map((act, i) => (
                                    <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-[-24px] before:w-0.5 before:bg-white/5 last:before:hidden">
                                        <div className="absolute left-[-2px] top-2 h-1.5 w-1.5 rounded-full bg-teal-5" />
                                        <div className="text-white text-xs font-bold mb-1">{act.user} <span className="text-white/40 font-normal">{act.action}</span></div>
                                        <div className="text-[10px] text-teal-5 uppercase font-bold tracking-widest mb-1">{act.time}</div>
                                        <div className="text-[9px] text-white/30 uppercase font-bold">{act.site}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                         {/* Charts area */}
                        <div className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-white text-sm font-bold flex items-center gap-2">
                                    <IconTrendingUp size={16} className="text-teal-5" /> Weekly Attendance Trend
                                </h3>
                                <div className="flex gap-2">
                                    {[7, 30, 90].map(d => (
                                        <button key={d} className={`text-[9px] font-bold uppercase px-2 py-1 rounded ${d === 7 ? 'bg-teal-5 text-white' : 'text-white/40 hover:text-white'}`}>
                                            {d}D
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-2">
                                {[65, 80, 45, 90, 85, 70, 95].map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 0.8, delay: i * 0.05 }}
                                        className="w-full bg-linear-to-t from-teal-5/40 to-teal-5 rounded-t-lg group relative"
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-teal-5 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}%
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-[9px] text-white/20 font-bold uppercase tracking-widest">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Self-Service Section ──────────────────────────────────────────────────
function SelfServiceSection() {
    const items = [
        { q: "How many people do I have today?", a: "Check the dashboard" },
        { q: "What's my spend this week?", a: "Check the dashboard" },
        { q: "I need 3 more workers tomorrow", a: "Request in the dashboard" },
        { q: "Where's my last invoice?", a: "Download from the dashboard" },
        { q: "Who arrived late today?", a: "It's in the dashboard" },
    ];

    const feed = [
        { user: "John Smith", action: "clocked in", time: "6:02am", icon: IconCircleCheckFilled, color: "text-green-500" },
        { user: "Sarah Jones", action: "clocked in", time: "6:05am", icon: IconCircleCheckFilled, color: "text-green-500" },
        { user: "Site now at full capacity", action: "", time: "6:08am", icon: IconUsers, color: "text-teal-5" },
        { user: "Today's spend: £847.50", action: "", time: "11:30am", icon: IconCurrencyPound, color: "text-purple-500" },
        { user: "Weekly report ready", action: "", time: "Just now", icon: IconFileText, color: "text-white/40" },
    ];

    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tight">Stop calling. Start clicking.</h2>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">
                            Every question you've ever had to call your agency about? The answer's in your dashboard. 24/7. No waiting. No voicemails. No "I'll get back to you."
                        </p>
                        <div className="space-y-4">
                            {items.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <IconCircleCheckFilled className="text-teal-5 shrink-0 mt-0.5" size={20} />
                                    <p className="text-white/80 font-medium">
                                        "{item.q}" — <span className="text-white/40 font-normal">{item.a}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#161b28] rounded-[40px] border border-white/5 p-8 shadow-2xl relative overflow-hidden group max-w-lg mx-auto lg:mr-0">
                         <div className="flex items-center justify-center mb-8">
                            <div className="px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-5 animate-pulse" />
                                Live Activity Feed
                            </div>
                        </div>
                        <div className="space-y-3">
                            {feed.map((f, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${f.color}`}>
                                            <f.icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-bold">{f.user}</div>
                                            {f.action && <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{f.action}</div>}
                                        </div>
                                    </div>
                                    <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{f.time}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Updates in real-time — no refresh needed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function FeaturesGrid() {
    const features = [
        {
            title: "Live Workforce",
            desc: "Who's working right now. Real-time view of every worker at every location. Not yesterday. Not this morning. Right. Now.",
            icon: IconUsers
        },
        {
            title: "Today's Attendance",
            desc: "Arrivals, hours, status. Clock-in times, clock-out times, hours worked. Updating every minute. No waiting for reports.",
            icon: IconClock
        },
        {
            title: "Cost Tracker",
            desc: "Watch your labour costs tick up in real-time. No invoice surprises. Budget with confidence as they happen.",
            icon: IconCurrencyPound
        },
        {
            title: "Request Workers",
            desc: "Need more workers? Don't pick up the phone. Click a button. We're already on it. Book staff instantly.",
            icon: IconUserPlus
        },
        {
            title: "Documents",
            desc: "Access all your invoices and compliance reports in one secure central location. No more chasing emails.",
            icon: IconFileText
        },
        {
            title: "Analytics",
            desc: "Identify trends and gain insights into your site performance with automated high-level data visualisations.",
            icon: IconChartBar
        }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="p-10 rounded-[32px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <f.icon size={28} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{f.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Quick Request Section ─────────────────────────────────────────────────
function QuickRequestSection() {
    const steps = [
        { n: "1", text: "Select the date and shift" },
        { n: "2", text: "Choose how many workers" },
        { n: "3", text: "Add any special requirements" },
        { n: "4", text: "Submit — we're already on it" },
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="bg-[#161b28] rounded-[40px] border border-white/5 p-8 md:p-20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-5/5 blur-[120px]" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-5 text-[10px] font-bold uppercase tracking-widest mb-8">
                                <IconPlus size={14} /> One-Click Requests
                            </div>
                            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                                Need more workers? <br />
                                <span className="text-teal-5 text-glow-teal">Click. Done.</span>
                            </h2>
                            <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-lg">
                                No phone tag. No emails. No waiting for someone to get back to you. Request additional workers directly from your dashboard, anytime.
                            </p>
                            <div className="space-y-6">
                                {steps.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-teal-5 flex items-center justify-center text-white text-xs font-bold">
                                            {s.n}
                                        </div>
                                        <p className="text-white font-medium">{s.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#0d111a] rounded-3xl border border-white/5 p-8 md:p-10 shadow-xl max-w-md mx-auto lg:mr-0 w-full">
                            <h3 className="text-white text-xl font-bold mb-8">Quick Request</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-3 block">Date</label>
                                    <div className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-white/80 font-medium">Tomorrow, 27th Feb</div>
                                </div>
                                <div>
                                    <label className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-3 block">Shift</label>
                                    <div className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-white/80 font-medium">06:00 - 14:00</div>
                                </div>
                                <div>
                                    <label className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-3 block">Workers needed</label>
                                    <div className="w-full p-4 rounded-xl bg-white/5 border border-white/5 text-white text-2xl font-bold font-mono tracking-tighter">5</div>
                                </div>
                                <button className="w-full py-4 rounded-xl bg-teal-5 hover:bg-teal-6 text-white font-bold transition-all shadow-lg shadow-teal-5/20 flex items-center justify-center gap-2 group/btn">
                                    Submit Request <IconArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Q&A Section ───────────────────────────────────────────────────────────
function QAsSection() {
    const questions = [
        "How many people are on the 6am shift?",
        "What is my current daily spend?",
        "Who didn't show up this morning?",
        "What is the current fill rate across all sites?",
        "Where are my invoices from last month?"
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">INSTANT CLARITY</h2>
                    <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">Answered Instantly</h3>
                    <p className="text-white/40 text-lg">Stop waiting for emails. Our portal gives you the answers to your most common questions before you even ask them.</p>
                </div>
                <div className="space-y-4">
                    {questions.map((q, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/[0.07] transition-all cursor-default"
                        >
                            <span className="text-white/80 text-xl font-medium tracking-tight group-hover:text-white transition-colors">{q}</span>
                            <div className="flex items-center gap-3 text-teal-5 opacity-0 group-hover:opacity-100 transition-all">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Dashboard Answer</span>
                                <IconArrowRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ClientPortalPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <PortalHero />
      <ProblemSection />
      <DashboardMockup />
      <SelfServiceSection />
      <FeaturesGrid />
      <QuickRequestSection />
      <QAsSection />

      {/* CTA Section */}
      <CtaBanner
        badge="LAUNCHING SOON"
        title="Your data."
        titleHighlight="Your way."
        subtitle="Be first in line when the Client Portal launches. Stop chasing. Start knowing."
        primaryButtonText="Get Early Access"
        secondaryButtonText="Ask Us Anything"
      />

      <Footer />
    </main>
  );
}
