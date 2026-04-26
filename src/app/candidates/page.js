"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconCurrencyPound,
    IconCalendarCheck,
    IconMapPin,
    IconCheck,
    IconArrowRight,
    IconUserPlus,
    IconTargetArrow,
    IconBriefcase,
    IconStar,
    IconPackage,
    IconBuildingFactory2,
    IconMeat,
    IconDots,
    IconId,
    IconFileText,
    IconHome,
    IconCertificate
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const whyUs = [
    { icon: IconCurrencyPound, title: "Reliable Pay", desc: "Weekly pay, always on time. No hassle, no excuses. We've never missed a payroll since 2015." },
    { icon: IconCalendarCheck, title: "Consistent Work", desc: "Work with good employers who need reliable people. We match you with businesses that offer regular shifts." },
    { icon: IconMapPin, title: "Local Jobs", desc: "Work in Leicester and the surrounding area. No ridiculous commutes - we find you work close to home." }
];

const opportunities = [
    {
        icon: IconPackage,
        title: "Warehousing & Logistics",
        roles: ["Warehouse operatives", "Forklift drivers (all licenses)", "Pickers & packers", "Loading/unloading", "Goods in/out"]
    },
    {
        icon: IconBuildingFactory2,
        title: "Manufacturing",
        roles: ["Production operatives", "Machine operators", "Assembly line workers", "Quality control", "General labour"]
    },
    {
        icon: IconMeat,
        title: "Food Production",
        roles: ["Food production staff", "Packing & labelling", "Line operatives", "Food prep", "Hygiene roles"]
    },
    {
        icon: IconDots,
        title: "Other Roles",
        roles: ["Cleaning operatives", "Catering assistants", "Site labour", "Delivery drivers", "And more..."]
    }
];

const steps = [
    { icon: IconUserPlus, title: "Register", desc: "Come to our office or call us. We'll need some basic details, proof of ID, and your right to work documents. Takes about 30 minutes." },
    { icon: IconTargetArrow, title: "Get Matched", desc: "We'll find you work that matches your skills, location, and availability. No time-wasting - we only call when we have real shifts." },
    { icon: IconBriefcase, title: "Start Work", desc: "Show up on time, do good work, and you'll get consistent shifts. Simple as that. Pay comes through every week, no fuss." },
    { icon: IconStar, title: "Build Your Reputation", desc: "Be reliable, do good work, and you'll get first pick of the best shifts. Many of our temps have been with us for years." }
];

const requirements = [
    { icon: IconId, label: "Valid Photo ID", desc: "Passport or driving license" },
    { icon: IconFileText, label: "Right to Work", desc: "Proof of your right to work in the UK" },
    { icon: IconHome, label: "Proof of Address", desc: "Utility bill or bank statement (last 3 months)" },
    { icon: IconCertificate, label: "National Insurance", desc: "Your NI number" }
];

// ─── Sections ────────────────────────────────────────────────────────

function CandidatesHero() {
    return (
        <section className="relative pt-48 pb-24 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">FOR WORKERS</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">
                        Why Work<br />With Us
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto mb-12">
                        Consistent shifts, weekly pay, and opportunities across Leicester. Warehouse, manufacturing, and logistics roles available.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/registration" className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">
                            Register Now
                            <IconArrowRight size={18} />
                        </Link>
                        <Link href="/jobs" className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                            Browse Jobs
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function WhyUsSection() {
    return (
        <section className="py-24 bg-[#0D1520]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">WHY US</h2>
                    <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Delivering Since 2015
                    </h3>
                    <p className="text-white/40 text-xl font-medium">
                        We&apos;ve been delivering for our temps since 2015
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whyUs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-teal-5/30 transition-all duration-300 group text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center mx-auto mb-8 border border-teal-5/20 group-hover:bg-teal-5 group-hover:text-black transition-all text-teal-5">
                                    <Icon size={32} />
                                </div>
                                <h4 className="text-white text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-white/40 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function OpportunitiesSection() {
    return (
        <section className="py-32 bg-[#121926]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">OPPORTUNITIES</h2>
                    <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Find Your Fit
                    </h3>
                    <p className="text-white/40 text-xl font-medium">
                        Find the right opportunity for your skills
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {opportunities.map((opp, i) => {
                        const Icon = opp.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.03] border border-white/5 rounded-[40px] p-10 hover:border-teal-5/30 transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all">
                                        <Icon size={28} />
                                    </div>
                                    <h4 className="text-white text-2xl font-bold tracking-tight">{opp.title}</h4>
                                </div>
                                <div className="space-y-3">
                                    {opp.roles.map((role, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <IconCheck size={16} className="text-teal-5 shrink-0" strokeWidth={3} />
                                            <span className="text-white/50 font-medium">{role}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function GettingStartedSection() {
    return (
        <section className="py-32 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">GETTING STARTED</h2>
                    <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Four Simple Steps
                    </h3>
                    <p className="text-white/40 text-xl font-medium">
                        Four simple steps to getting started
                    </p>
                </div>

                <div className="space-y-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 items-start"
                            >
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-teal-5 text-black font-black text-lg flex items-center justify-center shadow-lg shadow-teal-5/20">
                                        {i + 1}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-0.5 h-16 bg-white/10 mt-2" />
                                    )}
                                </div>
                                <div className="bg-[#161B28] border border-white/5 rounded-[32px] p-8 flex-grow hover:border-teal-5/30 transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon size={20} className="text-teal-5" />
                                        <h4 className="text-white text-xl font-bold">{step.title}</h4>
                                    </div>
                                    <p className="text-white/40 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function RequirementsSection() {
    return (
        <section className="py-24 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-gradient-to-br from-[#161B28] to-[#0D1520] border border-white/10 rounded-[60px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">REQUIREMENTS</h2>
                    <h3 className="text-white text-3xl md:text-5xl font-black mb-4 tracking-tighter">
                        What You Need to Register
                    </h3>
                    <p className="text-white/40 text-lg font-medium mb-12">
                        Bring these documents and you&apos;ll be registered in 30 minutes
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {requirements.map((req, i) => {
                            const Icon = req.icon;
                            return (
                                <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                                    <div className="w-10 h-10 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">{req.label}</div>
                                        <div className="text-white/40 text-sm font-medium">{req.desc}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-white/30 text-sm font-medium italic">
                        Additional for specific roles: Forklift license, food safety certificate, or DBS check (we&apos;ll advise based on the role)
                    </p>
                </div>
            </div>
        </section>
    );
}

function BottomCTA() {
    return (
        <section className="py-32 bg-teal-5">
             <div className="mx-auto max-w-5xl px-6 text-center">
                 <h2 className="text-black text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
                     Ready to Get<br />Started?
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Register today and start getting shifts this week.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <Link href="/registration" className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Register Now →
                     </Link>
                     <Link href="/contact" className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Get in Touch
                     </Link>
                 </div>
             </div>
        </section>
    );
}

export default function CandidatesPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <CandidatesHero />
            <WhyUsSection />
            <OpportunitiesSection />
            <GettingStartedSection />
            <RequirementsSection />
            <BottomCTA />
            <Footer />
        </main>
    );
}
