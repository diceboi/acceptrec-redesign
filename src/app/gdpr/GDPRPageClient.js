"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';




const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const rights = [
    { title: "Request Correction", desc: "Request correction of personal information that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected." },
    { title: "Request Erasure", desc: "Request erasure of your personal information. This enables you to ask us to delete or removed personal information where there is no good reason for us continuing to process it." },
    { title: "Object to Processing", desc: "Object to processing of your personal information where we are relying on a legitimate interest. You also have the right to object where we are processing your personal information for direct marketing purposes." },
    { title: "Request Restriction", desc: "Request the restrictions of processing of your personal information. This enables you to ask us to suspend the processing of personal information about you." },
    { title: "Request Transfer", desc: "Request the transfer of your personal information to another party in certain formats, if practicable." },
    { title: "Make a Complaint", desc: "Make a complaint to a supervisory body which in the United Kingdom is the Information Commissioner's Office. The ICO can be contacted at: https://ico.org.uk/concerns/" }
];

export default function GDPRPageClient() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">DATA PROTECTION</span>
                        <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">GDPR Statement</h1>
                        <p className="text-[#8B98AB] text-xl leading-relaxed font-medium max-w-2xl mx-auto">Your rights under GDPR and how we protect your data</p>
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
            </section>

            <section className="pb-32 bg-navy-700">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
                        <p className="text-[#8B98AB] leading-relaxed font-medium mb-4">Pearce Recruitment Limited trading as Accept Recruitment (&ldquo;Accept Recruitment&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;) is committed to protecting and respecting your privacy.</p>
                        <p className="text-[#8B98AB]/70 leading-relaxed font-medium">This privacy notice describes what personal information we collect from you and how we process your personal information when you use the Accept Recruitment website.</p>
                    </div>

                    <h3 className="text-white text-2xl font-semibold mb-6 mt-12">Your Rights Under GDPR</h3>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {rights.map((r, i) => (
                            <motion.div key={i} variants={cardVariants} className="glass-card rounded-2xl p-8 hover:border-teal-5/30 transition-all hover:teal-glow-sm">
                                <div className="w-10 h-10 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 font-semibold mb-4">{i + 1}</div>
                                <h4 className="text-white text-lg font-semibold mb-3">{r.title}</h4>
                                <p className="text-[#8B98AB] text-sm leading-relaxed font-medium">{r.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="glass-card rounded-2xl p-10 md:p-12 text-center border-teal-5/20 bg-gradient-to-br from-teal-5/10 to-transparent">
                        <h4 className="text-white text-xl font-semibold mb-4">Contact Our Data Protection Officer</h4>
                        <p className="text-[#8B98AB] font-medium mb-8">We take your privacy seriously. Please email us if you wish to exercise your rights or request that we forget your data.</p>
                        <a href="mailto:admin@acceptrec.co.uk" className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3">admin@acceptrec.co.uk</a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
