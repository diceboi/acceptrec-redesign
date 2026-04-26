"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { IconTrendingUp, IconUsers, IconGift, IconShieldCheck, IconMail, IconMapPin, IconArrowRight } from '@tabler/icons-react';

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

export default function JoinOurTeamPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <section className="relative pt-48 pb-16 bg-[#0D1520] text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">CAREERS</h2>
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">Join Our Team</h1>
                        <p className="text-white/40 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Be part of a team that&apos;s redefining recruitment excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Perks */}
            <section className="pb-24 bg-[#0D1520]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {perks.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div key={i} whileHover={{ y: -6 }} className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-teal-5/30 transition-all group text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center mx-auto mb-6 text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all">
                                        <Icon size={28} />
                                    </div>
                                    <h4 className="text-white text-lg font-bold mb-3">{p.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed font-medium">{p.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Roles */}
            <section className="py-24 bg-[#121926]">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-4">Open Opportunities</h3>
                        <p className="text-white/40 text-lg font-medium">We&apos;re always looking for talented individuals to join our team</p>
                    </div>
                    <div className="space-y-6">
                        {roles.map((r, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 md:p-10 hover:border-teal-5/30 transition-all">
                                <h4 className="text-white text-xl font-bold mb-3">{r.title}</h4>
                                <p className="text-white/40 leading-relaxed font-medium">{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-teal-5">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-black text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.85]">Ready to Join?</h2>
                    <p className="text-black/60 text-xl font-bold max-w-2xl mx-auto mb-14">
                        Send us your CV and let&apos;s discuss how you can grow your career with Accept Recruitment.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="mailto:admin@acceptrec.co.uk?subject=Career Opportunity Enquiry" className="w-full sm:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl inline-flex items-center justify-center gap-3">
                            <IconMail size={18} />
                            Email Your CV
                        </a>
                        <Link href="/offices" className="w-full sm:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all inline-flex items-center justify-center gap-3">
                            <IconMapPin size={18} />
                            Find Your Office
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
