"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconShieldCheck,
    IconAlertTriangle,
    IconPhone,
    IconExternalLink,
    IconArrowRight,
    IconCheck,
    IconPlayerPlay
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

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

// ─── Sections ────────────────────────────────────────────────────────

function RegistrationHero() {
    return (
        <section className="relative pt-48 pb-16 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">GET STARTED</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">
                        Register or Sign In
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto mb-12">
                        Watch our short video, then complete your registration in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="https://accept.iqxanywhere.net/xregister"
                            className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3"
                        >
                            Register Now
                            <IconArrowRight size={18} />
                        </a>
                        <a 
                            href="https://accept.iqxanywhere.net/"
                            className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                        >
                            Sign In
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function VideoSection() {
    return (
        <section className="py-20 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
                        {/* Video header */}
                        <div className="px-8 py-6 border-b border-white/5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-teal-5/10 flex items-center justify-center">
                                <IconPlayerPlay size={16} className="text-teal-5" />
                            </div>
                            <div>
                                <div className="text-white text-sm font-bold">Before You Register</div>
                                <div className="text-white/30 text-xs font-medium">Watch First</div>
                            </div>
                        </div>
                        {/* Video embed */}
                        <div className="aspect-video bg-black/30">
                            <video
                                controls
                                preload="metadata"
                                className="w-full h-full"
                                poster=""
                            >
                                <source src="https://accept-website-rebuild.vercel.app/register-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* Video footer */}
                        <div className="px-8 py-6 bg-white/[0.02]">
                            <p className="text-white/40 text-sm font-medium">
                                Please watch this short video before registering. It covers important information and saves you time later.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ImportantInformation() {
    return (
        <section className="py-24 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: What You Need to Know */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <IconAlertTriangle size={14} />
                            Please Read
                        </div>
                        <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                            What You Need to Know
                        </h2>
                        <p className="text-white/40 text-lg font-medium mb-10">
                            Your safety and wellbeing are our top priorities
                        </p>

                        <div className="space-y-5 mb-12">
                            {[
                                "We never charge you for our services.",
                                "You must have your own bank account to reduce risk of exploitation.",
                                "If you have issues regarding modern slavery, please seek help."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <IconCheck size={20} className="text-teal-5 shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="text-white/60 text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Need Help */}
                        <div className="bg-[#161B28] border border-white/5 rounded-[32px] p-8">
                            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-3">
                                <IconPhone size={20} className="text-teal-5" />
                                Need Help?
                            </h4>
                            <div className="space-y-4">
                                {helplines.map((h, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-white/30 text-sm font-bold shrink-0 w-40">{h.label}:</span>
                                        {h.href.startsWith("/") ? (
                                            <Link href={h.href} className="text-teal-4 text-sm font-bold hover:text-white transition-colors">
                                                {h.value}
                                            </Link>
                                        ) : (
                                            <a href={h.href} className="text-white/70 text-sm font-bold hover:text-teal-5 transition-colors">
                                                {h.value}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Support Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-white text-2xl font-bold mb-8 tracking-tight">Support Resources</h3>
                        <div className="space-y-4">
                            {supportResources.map((res, i) => (
                                <a
                                    key={i}
                                    href={res.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 bg-[#161B28] border border-white/5 p-6 rounded-3xl hover:border-teal-5/30 transition-all shadow-lg group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-teal-5/10 flex items-center justify-center text-teal-5 transition-colors shrink-0">
                                        <IconExternalLink size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-white font-bold group-hover:text-teal-4 transition-colors">{res.name}</div>
                                        <div className="text-white/40 text-sm font-medium">{res.desc}</div>
                                    </div>
                                    <IconArrowRight size={18} className="text-white/20 group-hover:text-teal-5 transition-colors shrink-0" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <Link href="/modern-slavery-statement" className="text-white/40 text-sm font-medium hover:text-teal-5 transition-colors flex items-center gap-2">
                                <IconShieldCheck size={16} className="text-teal-5" />
                                Read our Anti-Slavery Policy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function RegisterCTA() {
    return (
        <section className="py-32 bg-teal-5">
             <div className="mx-auto max-w-5xl px-6 text-center">
                 <h2 className="text-black text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">
                     Ready to<br />Get Started?
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Complete your registration through our secure portal in just a few minutes.
                 </p>
                 <div className="flex flex-col items-center gap-6">
                     <a href="https://accept.iqxanywhere.net/xregister" className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Register Now →
                     </a>
                     <p className="text-black/50 text-sm font-medium">
                         Already registered?{' '}
                         <a href="https://accept.iqxanywhere.net/" className="text-black font-bold underline hover:no-underline">
                             Sign in here
                         </a>
                     </p>
                 </div>
             </div>
        </section>
    );
}

export default function RegistrationPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <RegistrationHero />
            <VideoSection />
            <ImportantInformation />
            <RegisterCTA />
            <Footer />
        </main>
    );
}
