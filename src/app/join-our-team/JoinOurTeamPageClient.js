"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { IconTrendingUp, IconUsers, IconGift, IconShieldCheck, IconMail, IconMapPin, IconArrowRight } from '@tabler/icons-react';




const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const perks = [
    { icon: IconTrendingUp, title: "Growth & Development", desc: "We invest in our people with ongoing training, mentorship, and clear career progression paths." },
    { icon: IconUsers, title: "Supportive Culture", desc: "Join a team that values collaboration, celebrates success, and supports each other." },
    { icon: IconGift, title: "Competitive Benefits", desc: "Attractive salary packages, performance bonuses, and comprehensive benefits." },
    { icon: IconShieldCheck, title: "Established Track Record", desc: "Be part of an established, stable business with a proven track record and strong reputation." }
];

const roles = [
    { title: "Recruitment Consultants", desc: "Build relationships with clients and candidates, match talent to opportunities, and drive business growth across our offices in Leicester, Coventry, and Tamworth." },
    { title: "Resourcers", desc: "Source and engage with candidates, build talent pools, and support our consultants in delivering excellent service to our clients." },
    { title: "Business Support Roles", desc: "Join our operations, compliance, or administration teams and help keep our business running smoothly and efficiently." }
];

export default function JoinOurTeamPageClient() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                </div>
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                        <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                        <span className="text-sm font-semibold text-teal-4">Careers</span>
                    </motion.div>
                    <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Join Our Team</motion.h1>
                    <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Be part of a team that&apos;s redefining recruitment excellence.</motion.p>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
            </section>

            <section className="pb-24 bg-navy-700">
                <div className="mx-auto max-w-[1140px] px-6">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {perks.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center mx-auto mb-6 text-teal-5 group-hover:bg-[#00A99D] group-hover:text-white transition-all"><Icon size={28} /></div>
                                    <h4 className="text-white text-lg font-semibold mb-3">{p.title}</h4>
                                    <p className="text-[#8B98AB] text-sm leading-relaxed font-medium">{p.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-[#0d111a]">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-4">Open Opportunities</h3>
                        <p className="text-[#8B98AB] text-lg font-medium">We&apos;re always looking for talented individuals to join our team</p>
                    </div>
                    <div className="space-y-5">
                        {roles.map((r, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 md:p-10 hover:border-teal-5/30 transition-all hover:teal-glow-sm">
                                <h4 className="text-white text-xl font-semibold mb-3">{r.title}</h4>
                                <p className="text-[#8B98AB] leading-relaxed font-medium">{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner badge="CAREERS" title="Ready to" titleHighlight="join?" subtitle="Send us your CV and let's discuss how you can grow your career with Accept Recruitment." primaryButtonText="Email Your CV" secondaryButtonText="Find Your Office" primaryButtonHref="mailto:admin@acceptrec.co.uk?subject=Career Opportunity Enquiry" secondaryButtonHref="/offices" />
            <Footer />
        </main>
    );
}
