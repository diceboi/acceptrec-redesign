"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import {
    IconCurrencyPound, IconCalendarCheck, IconMapPin, IconCheck, IconArrowRight,
    IconUserPlus, IconTargetArrow, IconBriefcase, IconStar, IconPackage,
    IconBuildingFactory2, IconMeat, IconDots, IconId, IconFileText, IconHome, IconCertificate
} from '@tabler/icons-react';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const whyUs = [
    { icon: IconCurrencyPound, title: "Reliable Pay", desc: "Weekly pay, always on time. No hassle, no excuses. We've never missed a payroll since 2015." },
    { icon: IconCalendarCheck, title: "Consistent Work", desc: "Work with good employers who need reliable people. We match you with businesses that offer regular shifts." },
    { icon: IconMapPin, title: "Local Jobs", desc: "Work in Leicester and the surrounding area. No ridiculous commutes - we find you work close to home." }
];

const opportunities = [
    { icon: IconPackage, title: "Warehousing & Logistics", roles: ["Warehouse operatives", "Forklift drivers (all licenses)", "Pickers & packers", "Loading/unloading", "Goods in/out"] },
    { icon: IconBuildingFactory2, title: "Manufacturing", roles: ["Production operatives", "Machine operators", "Assembly line workers", "Quality control", "General labour"] },
    { icon: IconMeat, title: "Food Production", roles: ["Food production staff", "Packing & labelling", "Line operatives", "Food prep", "Hygiene roles"] },
    { icon: IconDots, title: "Other Roles", roles: ["Cleaning operatives", "Catering assistants", "Site labour", "Delivery drivers", "And more..."] }
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

function CandidatesHero() {
    return (
        <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-24">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-4">For Workers</span>
                </motion.div>
                <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Why Work<br />With Us</motion.h1>
                <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Consistent shifts, weekly pay, and opportunities across Leicester. Warehouse, manufacturing, and logistics roles available.</motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/registration" className="w-full sm:w-auto px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">Register Now <IconArrowRight size={18} /></Link>
                    <Link href="/jobs" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">Browse Jobs</Link>
                </motion.div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function WhyUsSection() {
    return (
        <section className="py-24 bg-navy-700">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center mb-16">
                    <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">WHY US</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Delivering Since 2015</h2>
                    <p className="text-[#8B98AB] text-xl font-medium">We&apos;ve been delivering for our temps since 2015</p>
                </div>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {whyUs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm text-center">
                                <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all text-teal-5"><Icon size={32} /></div>
                                <h4 className="text-white text-2xl font-semibold mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-[#8B98AB] leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function OpportunitiesSection() {
    return (
        <section className="py-32 bg-[#0d111a]">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center mb-20">
                    <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">OPPORTUNITIES</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Find Your Fit</h2>
                    <p className="text-[#8B98AB] text-xl font-medium">Find the right opportunity for your skills</p>
                </div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {opportunities.map((opp, i) => {
                        const Icon = opp.icon;
                        return (
                            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-5 group-hover:bg-[#00A99D] group-hover:text-white transition-all"><Icon size={28} /></div>
                                    <h4 className="text-white text-2xl font-semibold tracking-tight">{opp.title}</h4>
                                </div>
                                <div className="space-y-3">
                                    {opp.roles.map((role, j) => (
                                        <div key={j} className="flex items-center gap-3"><IconCheck size={16} className="text-teal-5 shrink-0" strokeWidth={3} /><span className="text-[#8B98AB] font-medium">{role}</span></div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function GettingStartedSection() {
    return (
        <section className="py-32 bg-navy-700">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-20">
                    <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">GETTING STARTED</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Four Simple Steps</h2>
                    <p className="text-[#8B98AB] text-xl font-medium">Four simple steps to getting started</p>
                </div>
                <div className="space-y-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start">
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-teal-5 text-black font-semibold text-lg flex items-center justify-center shadow-lg shadow-teal-5/20">{i + 1}</div>
                                    {i < steps.length - 1 && <div className="w-0.5 h-16 bg-white/10 mt-2" />}
                                </div>
                                <div className="glass-card rounded-2xl p-8 flex-grow hover:border-teal-5/30 transition-all">
                                    <div className="flex items-center gap-3 mb-3"><Icon size={20} className="text-teal-5" /><h4 className="text-white text-xl font-semibold">{step.title}</h4></div>
                                    <p className="text-[#8B98AB] leading-relaxed font-medium">{step.desc}</p>
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
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <span className="relative mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">REQUIREMENTS</span>
                    <h3 className="relative text-white text-3xl md:text-5xl font-semibold mb-4 tracking-tight">What You Need to Register</h3>
                    <p className="relative text-[#8B98AB] text-lg font-medium mb-12">Bring these documents and you&apos;ll be registered in 30 minutes</p>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        {requirements.map((req, i) => {
                            const Icon = req.icon;
                            return (
                                <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                                    <div className="w-10 h-10 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 shrink-0"><Icon size={20} /></div>
                                    <div><div className="text-white font-semibold mb-1">{req.label}</div><div className="text-[#8B98AB] text-sm font-medium">{req.desc}</div></div>
                                </div>
                            );
                        })}
                    </div>
                    <p className="relative text-[#8B98AB]/50 text-sm font-medium italic">Additional for specific roles: Forklift license, food safety certificate, or DBS check (we&apos;ll advise based on the role)</p>
                </div>
            </div>
        </section>
    );
}

export default function CandidatesPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <CandidatesHero />
            <WhyUsSection />
            <OpportunitiesSection />
            <GettingStartedSection />
            <RequirementsSection />
            <CtaBanner badge="READY?" title="Ready to get" titleHighlight="started?" subtitle="Register today and start getting shifts this week." primaryButtonText="Register Now" secondaryButtonText="Get in Touch" />
            <Footer />
        </main>
    );
}
