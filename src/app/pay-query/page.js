"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { IconCheck, IconMail, IconMapPin } from '@tabler/icons-react';

const requiredInfo = ["Full Name", "Telephone Number", "National Insurance Number", "Week Commencing (date of the week in question)", "List hours and place you worked", "How many hours were you paid?", "How many hours are you missing?"];

export default function PayQueryPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">PAYROLL SUPPORT</span>
                        <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">Pay Query</h1>
                        <p className="text-[#8B98AB] text-xl leading-relaxed font-medium max-w-2xl mx-auto">Information about payment and submitting pay queries</p>
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
            </section>
            <section className="pb-32 bg-navy-700">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
                        <h3 className="text-white text-2xl font-semibold mb-6">How You Get Paid</h3>
                        <div className="space-y-4 text-[#8B98AB] leading-relaxed font-medium">
                            <p>We ensure you are paid on a weekly basis on a Friday via BACS transfer straight into your bank account.</p>
                            <p>The bank account should be in your name. We will refuse to pay to someone else&apos;s account unless approved otherwise.</p>
                            <p>We can, in some instances, pay you as a Limited Company. We are unable to pay any other types of self employment.</p>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
                        <h3 className="text-white text-2xl font-semibold mb-4">Submit a Pay Query</h3>
                        <p className="text-[#8B98AB] leading-relaxed font-medium mb-8">Please send payroll queries to admin@acceptrec.co.uk.</p>
                        <h4 className="text-white text-lg font-semibold mb-6">Required Information</h4>
                        <div className="space-y-3 mb-10">
                            {requiredInfo.map((item, i) => (
                                <div key={i} className="flex items-center gap-3"><IconCheck size={16} className="text-teal-5 shrink-0" strokeWidth={3} /><span className="text-[#8B98AB] font-medium">{item}</span></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:admin@acceptrec.co.uk?subject=Pay Query" className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center justify-center gap-3"><IconMail size={18} /> Email Pay Query</a>
                        <Link href="/offices" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3"><IconMapPin size={18} className="text-teal-5" /> Find Your Office</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
