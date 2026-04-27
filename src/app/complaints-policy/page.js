"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { IconMapPin, IconMail } from '@tabler/icons-react';

const steps = [
    { step: 1, title: "Acknowledgement", desc: "We will send you a letter acknowledging your complaint and asking you to confirm or explain the details set out. We will also let you know the name of the person who will be dealing with your complaint. You can expect to receive our letter within 2-5 working days of us receiving your complaint." },
    { step: 2, title: "Recording", desc: "We will record your complaint in our central register within a day of having received it." },
    { step: 3, title: "Confirmation", desc: "We will acknowledge your reply to our acknowledgment letter and confirm what will happen next. You can expect to receive our acknowledgement letter within 2-5 working days of your reply." },
    { step: 4, title: "Investigation", desc: "We will then start to investigate your complaint. We may ask the member of staff who dealt with you to reply to your complaint within 5 days. We will then examine the reply and your information. If necessary we may ask you to speak to them." },
    { step: 5, title: "Meeting", desc: "The Senior Recruitment Consultant will then invite you to meet him/her to discuss and hopefully resolve your complaint within 5 days of the end of our investigation." },
    { step: 6, title: "Confirmation", desc: "Within 2 days of the meeting the Senior Recruitment Consultant will write to you to confirm what took place and any solutions agreed." },
    { step: 7, title: "Further Action", desc: "If you are still not satisfied you can write to the REC, our trade association, marked for the attention of the Consultancy and Compliance Team, REC, Dorset House, 1st Floor, 27-45 Stamford Street, London, SE1 9NT." },
    { step: 8, title: "Final Review", desc: "We will let you know of the outcome of this review within 5 days. If you are still not satisfied, you can contact the Employment Agencies Standards Inspectorate at the Department for Business Innovation and Skills." }
];

export default function ComplaintsPolicyPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">CUSTOMER SERVICE</span>
                        <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">Complaints Policy</h1>
                        <p className="text-[#8B98AB] text-xl leading-relaxed font-medium max-w-2xl mx-auto">Our commitment to resolving issues and improving service</p>
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
            </section>

            <section className="pb-32 bg-navy-700">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-10">
                        <p className="text-[#8B98AB] leading-relaxed font-medium mb-4">Accept Recruitment Limited is committed to providing a high level service to our customers. If you do not receive satisfaction from us we need you to tell us about it. This will help us to improve our standards.</p>
                        <p className="text-[#8B98AB]/70 leading-relaxed font-medium">If you have a complaint, please contact the Senior Recruitment Consultant via our Contact page or WhatsApp in the first instance. If you are not satisfied please contact Mrs M. Loj (Operations Director) at: Accept Recruitment, Unit 4, Oswin Road, Leicester, LE3 1HR.</p>
                    </div>

                    <h3 className="text-white text-2xl font-semibold mb-8">Our Complaints Process</h3>
                    <div className="space-y-4 mb-12">
                        {steps.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-teal-5 text-black font-semibold text-sm flex items-center justify-center shrink-0 shadow-lg shadow-teal-5/20">{s.step}</div>
                                <div className="glass-card rounded-2xl p-6 flex-grow">
                                    <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                                    <p className="text-[#8B98AB] text-sm leading-relaxed font-medium">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/offices" className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center justify-center gap-3"><IconMapPin size={18} /> Find Your Office</Link>
                        <Link href="/contact" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3"><IconMail size={18} className="text-teal-5" /> Contact Form</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
