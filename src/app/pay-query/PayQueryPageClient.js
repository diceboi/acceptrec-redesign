"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { IconCheck, IconMail, IconMapPin, IconArrowRight } from '@tabler/icons-react';
import { useState } from "react";
import { sendPayQueryEmail } from "@/app/actions/email";


const requiredInfo = ["Full Name", "Telephone Number", "National Insurance Number", "Week Commencing (date of the week in question)", "List hours and place you worked", "How many hours were you paid?", "How many hours are you missing?"];

export default function PayQueryPageClient() {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        niNumber: "",
        weekCommencing: "",
        workPlace: "",
        hoursPaid: "",
        hoursMissing: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        
        const result = await sendPayQueryEmail(formData);
        
        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (status === "success") {
        return (
            <main className="bg-navy-900 min-h-screen">
                <Navbar />
                <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                    <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-16 max-w-2xl mx-auto">
                            <div className="w-20 h-20 bg-teal-5/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <IconCheck className="text-teal-5" size={40} />
                            </div>
                            <h2 className="text-4xl font-semibold text-white mb-6">Query Submitted</h2>
                            <p className="text-[#8B98AB] text-lg mb-10">Your pay query has been sent to our payroll team. We will review it and get back to you as soon as possible.</p>
                            <button onClick={() => setStatus("idle")} className="text-teal-5 font-semibold uppercase tracking-widest text-sm hover:text-white transition-colors">Submit another query</button>
                        </motion.div>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="glass-card rounded-2xl p-10">
                            <h3 className="text-white text-2xl font-semibold mb-6">How You Get Paid</h3>
                            <div className="space-y-4 text-[#8B98AB] leading-relaxed font-medium text-sm">
                                <p>We ensure you are paid on a weekly basis on a Friday via BACS transfer straight into your bank account.</p>
                                <p>The bank account should be in your name. We will refuse to pay to someone else&apos;s account unless approved otherwise.</p>
                                <p>We can, in some instances, pay you as a Limited Company. We are unable to pay any other types of self employment.</p>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-10">
                            <h3 className="text-white text-2xl font-semibold mb-4">Required Info</h3>
                            <div className="space-y-3">
                                {requiredInfo.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-xs"><IconCheck size={14} className="text-teal-5 shrink-0 mt-0.5" strokeWidth={3} /><span className="text-[#8B98AB] font-medium">{item}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
                        <h3 className="text-white text-2xl font-semibold mb-8 text-center">Submit Your Query</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Full Name</label>
                                    <input 
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Phone Number</label>
                                    <input 
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="07xxx xxxxxx" 
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">NI Number</label>
                                    <input 
                                        name="niNumber"
                                        required
                                        value={formData.niNumber}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="QQ 12 34 56 C" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Week Commencing</label>
                                    <input 
                                        type="date"
                                        name="weekCommencing"
                                        required
                                        value={formData.weekCommencing}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Workplace & Shift Details</label>
                                <textarea 
                                    name="workPlace"
                                    required
                                    rows={3}
                                    value={formData.workPlace}
                                    onChange={handleChange}
                                    className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all resize-none" 
                                    placeholder="Where did you work and what hours?" 
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Hours Paid</label>
                                    <input 
                                        name="hoursPaid"
                                        required
                                        value={formData.hoursPaid}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="e.g. 30" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Hours Missing</label>
                                    <input 
                                        name="hoursMissing"
                                        required
                                        value={formData.hoursMissing}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="e.g. 7.5" 
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-6 bg-teal-5 text-black font-semibold uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Submitting..." : "Submit Pay Query"} <IconArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                {status === "error" && (
                                     <p className="text-red-400 text-xs text-center font-semibold mt-4">Something went wrong. Please try again or call your office.</p>
                                 )}
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:admin@acceptrec.co.uk?subject=Pay Query" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3"><IconMail size={18} /> Or Email Directly</a>
                        <Link href="/offices" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3"><IconMapPin size={18} className="text-teal-5" /> Find Your Office</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
