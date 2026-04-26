"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';

const rights = [
    { title: "Request Correction", desc: "Request correction of personal information that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected." },
    { title: "Request Erasure", desc: "Request erasure of your personal information. This enables you to ask us to delete or removed personal information where there is no good reason for us continuing to process it." },
    { title: "Object to Processing", desc: "Object to processing of your personal information where we are relying on a legitimate interest. You also have the right to object where we are processing your personal information for direct marketing purposes." },
    { title: "Request Restriction", desc: "Request the restrictions of processing of your personal information. This enables you to ask us to suspend the processing of personal information about you." },
    { title: "Request Transfer", desc: "Request the transfer of your personal information to another party in certain formats, if practicable." },
    { title: "Make a Complaint", desc: "Make a complaint to a supervisory body which in the United Kingdom is the Information Commissioner's Office. The ICO can be contacted at: https://ico.org.uk/concerns/" }
];

export default function GDPRPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <section className="relative pt-48 pb-16 bg-[#0D1520] text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">DATA PROTECTION</h2>
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">GDPR Statement</h1>
                        <p className="text-white/40 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Your rights under GDPR and how we protect your data
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 bg-[#0D1520]">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-16 mb-8">
                        <p className="text-white/50 leading-relaxed font-medium mb-4">
                            Pearce Recruitment Limited trading as Accept Recruitment (&ldquo;Accept Recruitment&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;) is committed to protecting and respecting your privacy.
                        </p>
                        <p className="text-white/40 leading-relaxed font-medium">
                            This privacy notice describes what personal information we collect from you and how we process your personal information when you use the Accept Recruitment website.
                        </p>
                    </div>

                    <h3 className="text-white text-2xl font-bold mb-6 mt-12">Your Rights Under GDPR</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                        {rights.map((r, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-[#161B28] border border-white/5 rounded-[32px] p-8 hover:border-teal-5/30 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 font-black mb-4">{i + 1}</div>
                                <h4 className="text-white text-lg font-bold mb-3">{r.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed font-medium">{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-teal-5/10 to-transparent border border-teal-5/20 rounded-[40px] p-10 md:p-12 text-center">
                        <h4 className="text-white text-xl font-bold mb-4">Contact Our Data Protection Officer</h4>
                        <p className="text-white/40 font-medium mb-8">We take your privacy seriously. Please email us if you wish to exercise your rights or request that we forget your data.</p>
                        <a href="mailto:admin@acceptrec.co.uk" className="px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3">
                            admin@acceptrec.co.uk
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
