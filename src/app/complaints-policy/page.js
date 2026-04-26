"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
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
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <section className="relative pt-48 pb-16 bg-[#0D1520] text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">CUSTOMER SERVICE</h2>
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">Complaints Policy</h1>
                        <p className="text-white/40 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Our commitment to resolving issues and improving service
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 bg-[#0D1520]">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-16 mb-10">
                        <p className="text-white/50 leading-relaxed font-medium mb-4">
                            Accept Recruitment Limited is committed to providing a high level service to our customers. If you do not receive satisfaction from us we need you to tell us about it. This will help us to improve our standards.
                        </p>
                        <p className="text-white/40 leading-relaxed font-medium">
                            If you have a complaint, please contact the Senior Recruitment Consultant via our Contact page or WhatsApp in the first instance. If you are not satisfied please contact Mrs M. Loj (Operations Director) at: Accept Recruitment, Unit 4, Oswin Road, Leicester, LE3 1HR.
                        </p>
                    </div>

                    <h3 className="text-white text-2xl font-bold mb-8">Our Complaints Process</h3>
                    <div className="space-y-4 mb-12">
                        {steps.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-teal-5 text-black font-black text-sm flex items-center justify-center shrink-0 shadow-lg shadow-teal-5/20">{s.step}</div>
                                <div className="bg-[#161B28] border border-white/5 rounded-[24px] p-6 flex-grow">
                                    <h4 className="text-white font-bold mb-2">{s.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed font-medium">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/offices" className="px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center justify-center gap-3">
                            <IconMapPin size={18} />
                            Find Your Office
                        </Link>
                        <Link href="/contact" className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3">
                            <IconMail size={18} className="text-teal-5" />
                            Contact Form
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
