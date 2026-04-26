"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { IconCheck, IconMail, IconMapPin } from '@tabler/icons-react';

const requiredInfo = [
    "Full Name",
    "Telephone Number",
    "National Insurance Number",
    "Week Commencing (date of the week in question)",
    "List hours and place you worked",
    "How many hours were you paid?",
    "How many hours are you missing?"
];

export default function PayQueryPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <section className="relative pt-48 pb-16 bg-[#0D1520] text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">PAYROLL SUPPORT</h2>
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">Pay Query</h1>
                        <p className="text-white/40 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Information about payment and submitting pay queries
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 bg-[#0D1520]">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-16 mb-8">
                        <h3 className="text-white text-2xl font-bold mb-6">How You Get Paid</h3>
                        <div className="space-y-4 text-white/40 leading-relaxed font-medium">
                            <p>We ensure you are paid on a weekly basis on a Friday. The payment is made via BACS transfer straight into your bank account - normally the money will reach your account at 00.01 on Friday morning, but you should be aware that this isn&apos;t always the case and it can be at any point on Friday.</p>
                            <p>The bank account should be in your name. We will refuse to pay to someone else&apos;s account unless approved otherwise.</p>
                            <p>We can, in some instances and depending on your job role, pay you as a Limited Company and we will need certain documents should you wish to progress this route. We are unable to pay any other types of self employment, ie sole trader etc.</p>
                        </div>
                    </div>

                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-16 mb-8">
                        <h3 className="text-white text-2xl font-bold mb-4">Submit a Pay Query</h3>
                        <p className="text-white/40 leading-relaxed font-medium mb-8">Please send us any payroll queries you may have to admin@acceptrec.co.uk. We will get back to you as soon as possible.</p>
                        
                        <h4 className="text-white text-lg font-bold mb-6">Required Information</h4>
                        <p className="text-white/40 text-sm font-medium mb-6">Please ensure to include all of the following information in your email:</p>
                        <div className="space-y-3 mb-10">
                            {requiredInfo.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <IconCheck size={16} className="text-teal-5 shrink-0" strokeWidth={3} />
                                    <span className="text-white/50 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:admin@acceptrec.co.uk?subject=Pay Query" className="px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center justify-center gap-3">
                            <IconMail size={18} />
                            Email Pay Query
                        </a>
                        <Link href="/offices" className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3">
                            <IconMapPin size={18} className="text-teal-5" />
                            Find Your Office
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
