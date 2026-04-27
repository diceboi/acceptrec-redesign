"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import {
    IconShieldCheck, IconAlertTriangle, IconPhone, IconExternalLink,
    IconArrowRight, IconCheck, IconPlayerPlay
} from '@tabler/icons-react';

const helplines = [
    { label: "Accept", value: "Find your nearest office", href: "/offices" },
    { label: "Modern Slavery Helpline", value: "0800 012 1700 (24/7)", href: "tel:08000121700" },
    { label: "Textphone", value: "18001 101", href: "tel:18001101" },
    { label: "Crimestoppers (anonymous)", value: "0800 555 111", href: "tel:0800555111" },
    { label: "Police", value: "101 | Emergency: 999", href: "tel:101" },
    { label: "GLAA Helpline", value: "0800 432 0804", href: "tel:08004320804" }
];

const supportResources = [
    { name: "Modern Slavery Helpline", desc: "Information and advice on modern slavery", href: "https://www.modernslaveryhelpline.org/" },
    { name: "The Salvation Army", desc: "Intensive support for trafficking victims", href: "https://www.salvationarmy.org.uk/human-trafficking" },
    { name: "Migrant Help", desc: "Support for trafficking victims", href: "https://www.migranthelpuk.org/" },
    { name: "Kalayaan", desc: "Support for migrant domestic workers", href: "http://www.kalayaan.org.uk/" },
    { name: "Medaille Trust", desc: "Help for trafficking survivors", href: "https://www.medaille-trust.org.uk/" }
];

function RegistrationHero() {
    return (
        <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-4">Get Started</span>
                </motion.div>
                <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Register or Sign In</motion.h1>
                <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Watch our short video, then complete your registration in minutes.</motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://accept.iqxanywhere.net/xregister" className="w-full sm:w-auto px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">Register Now <IconArrowRight size={18} /></a>
                    <a href="https://accept.iqxanywhere.net/" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">Sign In</a>
                </motion.div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function VideoSection() {
    return (
        <section className="py-20 bg-navy-700">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                        <div className="px-8 py-6 border-b border-white/5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-teal-5/10 flex items-center justify-center"><IconPlayerPlay size={16} className="text-teal-5" /></div>
                            <div><div className="text-white text-sm font-semibold">Before You Register</div><div className="text-[#8B98AB]/50 text-xs font-medium">Watch First</div></div>
                        </div>
                        <div className="aspect-video bg-black/30">
                            <video controls preload="metadata" className="w-full h-full" poster="">
                                <source src="https://accept-website-rebuild.vercel.app/register-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="px-8 py-6 bg-white/[0.02]">
                            <p className="text-[#8B98AB] text-sm font-medium">Please watch this short video before registering. It covers important information and saves you time later.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ImportantInformation() {
    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold uppercase tracking-widest mb-8">
                            <IconAlertTriangle size={14} /> Please Read
                        </div>
                        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4 tracking-tight">What You Need to Know</h2>
                        <p className="text-[#8B98AB] text-lg font-medium mb-10">Your safety and wellbeing are our top priorities</p>
                        <div className="space-y-5 mb-12">
                            {["We never charge you for our services.", "You must have your own bank account to reduce risk of exploitation.", "If you have issues regarding modern slavery, please seek help."].map((item, i) => (
                                <div key={i} className="flex items-start gap-4"><IconCheck size={20} className="text-teal-5 shrink-0 mt-0.5" strokeWidth={3} /><span className="text-white/60 text-lg font-medium">{item}</span></div>
                            ))}
                        </div>
                        <div className="glass-card rounded-2xl p-8">
                            <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-3"><IconPhone size={20} className="text-teal-5" /> Need Help?</h4>
                            <div className="space-y-4">
                                {helplines.map((h, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-[#8B98AB]/50 text-sm font-semibold shrink-0 w-40">{h.label}:</span>
                                        {h.href.startsWith("/") ? (<Link href={h.href} className="text-teal-4 text-sm font-semibold hover:text-white transition-colors">{h.value}</Link>) : (<a href={h.href} className="text-[#8B98AB] text-sm font-semibold hover:text-teal-5 transition-colors">{h.value}</a>)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h3 className="text-white text-2xl font-semibold mb-8 tracking-tight">Support Resources</h3>
                        <div className="space-y-4">
                            {supportResources.map((res, i) => (
                                <a key={i} href={res.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 glass-card p-6 rounded-2xl hover:border-teal-5/30 transition-all group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-teal-5/10 flex items-center justify-center text-teal-5 transition-colors shrink-0"><IconExternalLink size={20} /></div>
                                    <div className="flex-grow"><div className="text-white font-semibold group-hover:text-teal-4 transition-colors">{res.name}</div><div className="text-[#8B98AB] text-sm font-medium">{res.desc}</div></div>
                                    <IconArrowRight size={18} className="text-[#8B98AB]/30 group-hover:text-teal-5 transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <Link href="/modern-slavery-statement" className="text-[#8B98AB] text-sm font-medium hover:text-teal-5 transition-colors flex items-center gap-2"><IconShieldCheck size={16} className="text-teal-5" /> Read our Anti-Slavery Policy</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function RegistrationPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <RegistrationHero />
            <VideoSection />
            <ImportantInformation />
            <CtaBanner badge="READY?" title="Ready to get" titleHighlight="started?" subtitle="Complete your registration through our secure portal in just a few minutes." primaryButtonText="Register Now" secondaryButtonText="Sign In" primaryButtonHref="https://accept.iqxanywhere.net/login" secondaryButtonHref="https://accept.iqxanywhere.net/login" />
            <Footer />
        </main>
    );
}
