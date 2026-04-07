"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconCheck, 
    IconX, 
    IconQuote, 
    IconClock, 
    IconUsers, 
    IconMessage2, 
    IconBolt,
    IconCircleCheckFilled
} from '@tabler/icons-react';

// ─── Shared Components ───────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
    return (
        <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">{eyebrow}</h2>
            <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">{title}</h3>
            {subtitle && <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium">{subtitle}</p>}
        </div>
    );
}

// ─── Hero Section ────────────────────────────────────────────────────────

function WhyAcceptHero() {
    return (
        <section className="relative pt-40 pb-32 bg-[#0D1520] overflow-hidden">
            <div className="mx-auto max-w-285 px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE ACCEPT DIFFERENCE</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
                        Staffing That<br />Actually Works
                    </h1>
                    <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        No-shows destroying your shift? Supervisors babysitting temps?<br />
                        There's a better way.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Sound Familiar Section ──────────────────────────────────────────────

function SoundFamiliarSection() {
    const scenarios = [
        {
            title: '"You planned for 20 workers. 14 showed up."',
            text: "Now your line is understaffed. Your permanent team is covering the gaps. You're going to miss your targets. And this keeps happening, week after week. No-shows aren't just annoying - they're destroying your productivity."
        },
        {
            title: '"Your supervisors spend half their day managing temps."',
            text: "Chasing attendance. Explaining the same thing to new faces every week. Dealing with performance issues. Handling complaints. Your supervisors should be managing production - not babysitting agency workers."
        },
        {
            title: '"You reported a problem. Nothing changed."',
            text: "You told the agency that worker wasn't right. Next week, they sent someone just as bad. Or the same person. Your feedback goes into a black hole. Nobody tracks it. Nobody remembers. Nobody cares."
        },
        {
            title: '"It\'s 6am. You need 10 workers by 8am. Good luck."',
            text: "Someone's called in sick. You need emergency cover NOW. But agencies don't answer at 6am, and by 9am it's too late. The shift is already wrecked, and you're the one left answering for the missed output."
        }
    ];

    return (
        <section className="py-24 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">Sound familiar?</h2>
                <div className="space-y-6">
                    {scenarios.map((s, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 md:p-12 rounded-[32px] bg-white/[0.03] border border-white/5"
                        >
                            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                            <p className="text-white/40 text-lg leading-relaxed font-medium">{s.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── We Fix These Problems Section ───────────────────────────────────────

function AcceptWaySection() {
    const solutions = [
        {
            title: "No-Shows Caught in Minutes, Not Hours",
            icon: <IconClock size={32} />,
            problem: "By the time you realise someone isn't coming, the shift is already wrecked. You're scrambling to find cover when you should be running production.",
            solution: "Workers check in when they arrive - you see it instantly. No check-in by start time? You know immediately. Time to react, not just firefight."
        },
        {
            title: "Your Supervisors Get Their Time Back",
            icon: <IconUsers size={32} />,
            problem: "Your team leaders are spending 30-40% of their time managing temp workers instead of managing output. That's expensive time, wasted.",
            solution: "We handle the temp management so you don't have to. Attendance tracked. Performance monitored. Problems dealt with before they land on your desk.",
            perks: [
                "Dedicated account management",
                "Your supervisors supervise production, not agencies",
                "We deal with attendance issues directly",
                "One point of contact, not ten"
            ]
        },
        {
            title: "Feedback That Actually Changes Things",
            icon: <IconMessage2 size={32} />,
            problem: "You tell the agency someone isn't working out. Next week, same problem. Your feedback disappears into the void.",
            solution: "Every piece of feedback is tracked. Problem workers don't come back. Good workers are prioritised. Your standards are actually enforced."
        },
        {
            title: "Emergency Cover That Actually Works",
            icon: <IconBolt size={32} />,
            problem: "It's early morning. Someone's called in sick. You need cover NOW. But agencies don't answer at 6am, and by 9am it's too late.",
            solution: "Rapid response when you need it. Pre-vetted workers ready to deploy. We answer the phone when it matters, not just during office hours.",
            perks: [
                "Same-day emergency cover",
                "We pick up when you call",
                "Pre-screened, ready-to-work pool",
                "Cover arranged in hours, not days"
            ]
        }
    ];

    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-24">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE ACCEPT DIFFERENCE</h2>
                    <h3 className="text-white text-5xl md:text-7xl font-bold mb-8 tracking-tight">We fix these problems.</h3>
                    <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">Not with promises. With systems, tracking, and accountability. Here's how.</p>
                </div>

                <div className="space-y-12">
                    {solutions.map((s, i) => (
                        <div key={i} className="bg-white/[0.03] border border-white/5 rounded-[48px] p-10 md:p-16">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 shadow-xl">
                                    {s.icon}
                                </div>
                                <h4 className="text-white text-3xl font-bold tracking-tight">{s.title}</h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                                <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/10">
                                    <div className="text-red-500/50 text-xs font-black uppercase tracking-widest mb-4">THE PROBLEM:</div>
                                    <p className="text-white/50 text-lg leading-relaxed">{s.problem}</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-teal-5/[0.03] border border-teal-5/10">
                                    <div className="text-teal-4 text-xs font-black uppercase tracking-widest mb-4">WHAT WE DO:</div>
                                    <p className="text-white/80 text-lg leading-relaxed font-semibold">{s.solution}</p>
                                </div>
                            </div>

                            {s.perks && (
                                <div className="mt-8 border-t border-white/5 pt-10">
                                    <div className="text-white/20 text-xs font-black uppercase tracking-widest mb-6">What this means for you:</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                        {s.perks.map((p, j) => (
                                            <div key={j} className="flex items-center gap-4 text-white/70 font-medium">
                                                <IconCheck size={20} className="text-teal-5 shrink-0" />
                                                <span>{p}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Night and Day Section ───────────────────────────────────────────────

function NightAndDaySection() {
    const rows = [
        { label: "Attendance Monitoring", old: "No-shows discovered mid-shift", accept: "Instant attendance alerts" },
        { label: "Supervisor Burden", old: "Supervisors babysitting temps", accept: "We manage the workforce" },
        { label: "Feedback Loop", old: "Feedback ignored", accept: "Every complaint tracked and actioned" },
        { label: "Emergency Cover", old: "Emergency cover? Good luck.", accept: "Same-day response when you need it" },
        { label: "Consistency", old: "Different faces every week", accept: "Consistent workers who know your site" },
        { label: "Strategy", old: "Multiple agencies, multiple headaches", accept: "One partner, one system" }
    ];

    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <h2 className="text-white text-5xl md:text-7xl font-bold mb-16 tracking-tight">The difference is night and day.</h2>
                
                <div className="bg-[#161B28] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-2">
                        <div className="bg-red-500/10 p-6 font-black text-red-500/80 text-sm tracking-widest uppercase">THE OLD WAY</div>
                        <div className="bg-teal-5 p-6 font-black text-black text-sm tracking-widest uppercase">THE ACCEPT WAY</div>
                    </div>
                    
                    {rows.map((row, i) => (
                        <div key={i} className="grid grid-cols-2 border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-8 md:p-10 border-r border-white/5 flex items-center justify-start gap-4 text-white/40 text-lg">
                                <IconX size={20} className="text-red-500/30 shrink-0" />
                                <span>{row.old}</span>
                            </div>
                            <div className="p-8 md:p-10 flex items-center justify-start gap-4 text-white text-lg font-bold">
                                <IconCheck size={24} className="text-teal-5 shrink-0" />
                                <span>{row.accept}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Proof Section ────────────────────────────────────────────────────────

function ProofSection() {
    return (
        <section className="py-32 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-5/5 blur-[120px] pointer-events-none" />
                    
                    <h2 className="text-white text-3xl font-bold mb-12 tracking-tight">Don't take our word for it.</h2>
                    
                    <div className="max-w-3xl mx-auto mb-10">
                        <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-8">
                            &quot;Accept doubled our workforce capacity in just 10 weeks. Their onsite model transformed how we manage temporary staff. No more chasing agencies - they handle it all.&quot;
                        </p>
                        <div className="text-white font-bold text-lg">Operations Team</div>
                        <div className="text-white/40">Vistry Group</div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 text-teal-4 font-black tracking-widest text-sm uppercase">
                        <div>7,000+ shifts delivered</div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block" />
                        <div>94.2% fill rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Final CTA ──────────────────────────────────────────────────────────

function FinalCTA() {
    return (
        <section className="py-40 bg-[#0D1520] border-t border-white/5 text-center">
            <div className="mx-auto max-w-4xl px-6">
                <h2 className="text-white text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">Ready to fix your temp staffing?</h2>
                <p className="text-white/40 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    If any of this sounds familiar, let's talk. No hard sell - just a conversation about whether we can help.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="w-full md:w-auto px-12 py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-teal-5 transition-all shadow-2xl hover:scale-105">
                        Find Out More
                    </button>
                    <button className="w-full md:w-auto px-12 py-6 rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                        See Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}

// ─── Main Page Component ────────────────────────────────────────────────

export default function WhyAcceptPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <WhyAcceptHero />
            <SoundFamiliarSection />
            <AcceptWaySection />
            <NightAndDaySection />
            <ProofSection />
            <FinalCTA />
            <Footer />
        </main>
    );
}
