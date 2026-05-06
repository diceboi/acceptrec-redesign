"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import {
    IconBrandWhatsapp, IconMapPin, IconPhone, IconMail,
    IconBolt, IconClock, IconMessages, IconCalendarEvent
} from '@tabler/icons-react';



const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const branches = [
    { name: "Leicester", type: "Head Office", address: "Unit 4, Oswin Road, Leicester, LE3 1HR", whatsapp: "+44 7495 995406", email: "leicester@acceptrec.co.uk", phone: "0116 218 2133" },
    { name: "Coventry", type: "Branch", address: "First Floor, 1 Harnall Row, Coventry, CV1 5DW", whatsapp: "+44 7833 945679", email: "coventry@acceptrec.co.uk", phone: "024 7718 0356" },
    { name: "Tamworth", type: "Branch", address: "Unit 2, 95 Lichfield Street, Tamworth, B79 7QF", whatsapp: "+44 7932 787550", email: "tamworth@acceptrec.co.uk", phone: "01827 438 334" }
];

function ContactHero() {
    return (
        <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-white dark:bg-navy-900 pt-32 pb-20 transition-colors duration-300">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-4">24/7 Availability</span>
                </motion.div>
                <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Let&apos;s Talk</motion.h1>
                <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Three offices across the Midlands. WhatsApp us for an instant response.</motion.p>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function BranchGrid() {
    return (
        <section className="pb-32 bg-gray-50 dark:bg-navy-700 relative transition-colors duration-300">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
            <div className="relative z-10 mx-auto max-w-[1400px] px-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {branches.map((branch, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-teal-5/30 transition-all duration-300 hover:teal-glow-sm relative group">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="p-8 md:p-10 flex-grow relative z-10">
                                <div className="text-teal-4 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">{branch.type}</div>
                                <h3 className="text-white text-4xl font-semibold tracking-tight mb-8">{branch.name}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 text-[#8B98AB]">
                                        <IconMapPin size={20} className="shrink-0 mt-1" />
                                        <a 
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-sm font-medium leading-relaxed hover:text-white transition-colors"
                                        >
                                            {branch.address}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#8B98AB]">
                                        <IconPhone size={20} className="shrink-0" />
                                        <a 
                                            href={`tel:${branch.phone.replace(/\s/g, "")}`} 
                                            className="text-sm font-medium hover:text-white transition-colors"
                                        >
                                            {branch.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#8B98AB]"><IconMail size={20} className="shrink-0" /><a href={`mailto:${branch.email}`} className="text-sm font-medium hover:text-white transition-colors">{branch.email}</a></div>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-black/20 border-t border-black/5 dark:border-white/5 relative z-10 transition-colors">
                                <a href={`https://wa.me/${branch.whatsapp.replace(/\s/g, "")}`} className="w-full py-4 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/10 flex items-center justify-center gap-3">
                                    <IconBrandWhatsapp size={18} /> Message on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ValueProposition() {
    return (
        <section className="py-32 bg-white dark:bg-[#0d111a] relative overflow-hidden transition-colors duration-300">
            <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <div className="text-center mb-20">
                    <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">WHY IT WORKS</span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">We&apos;ve Gone <span className="text-teal-5">WhatsApp-First</span></h2>
                </div>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {[
                        { icon: IconBolt, title: "Instant Responses", desc: "No more waiting hours for an email reply. Message us and get a response straight away." },
                        { icon: IconClock, title: "24/7 Availability", desc: "Message anytime, day or night. We'll reply as soon as we're online." },
                        { icon: IconMessages, title: "Everything in One Place", desc: "Keeps conversations, documents, and updates in one easy-to-manage thread." }
                    ].map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-5/10 flex items-center justify-center mb-8 text-teal-5 group-hover:bg-[#00A99D] group-hover:text-white transition-all"><Icon size={32} /></div>
                                <h4 className="text-white text-xl font-semibold mb-4">{feature.title}</h4>
                                <p className="text-[#8B98AB] text-sm leading-relaxed font-medium">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function AlternativeContact() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-navy-700 relative transition-colors duration-300">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="glass-card rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 group hover:border-teal-5/30 transition-all hover:teal-glow-sm">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-[#00A99D] group-hover:text-white group-hover:border-teal-5 transition-all shrink-0"><IconCalendarEvent size={28} /></div>
                        <div className="text-center md:text-left flex-grow">
                            <h4 className="text-white text-xl font-semibold mb-2">Book a Call</h4>
                            <p className="text-[#8B98AB] text-sm font-medium mb-4">Schedule a consultative discussion with our experts.</p>
                            <a href="/get-started" className="text-teal-5 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors">Find a Time →</a>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 group hover:border-teal-5/30 transition-all hover:teal-glow-sm">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-[#00A99D] group-hover:text-white group-hover:border-teal-5 transition-all shrink-0"><IconMail size={28} /></div>
                        <div className="text-center md:text-left flex-grow">
                            <h4 className="text-white text-xl font-semibold mb-2">Prefer Email?</h4>
                            <p className="text-[#8B98AB] text-sm font-medium mb-4">Send us your details and we&apos;ll route it to the right team.</p>
                            <a href="mailto:info@acceptrec.co.uk" className="text-teal-5 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors">info@acceptrec.co.uk →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPageClient() {
    return (
        <main className="bg-white dark:bg-navy-900 min-h-screen transition-colors duration-300">
            <Navbar />
            <ContactHero />
            <BranchGrid />
            <ValueProposition />
            <AlternativeContact />
            <Footer />
        </main>
    );
}
