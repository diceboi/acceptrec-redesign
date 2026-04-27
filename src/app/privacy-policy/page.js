"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

const sections = [
    { title: "Personal Data We May Collect From You", content: ["We may collect personal data on your visits to our website including, but not limited to, your IP address, browser, timestamp, content from surveys and contact forms and other communication data and the resources that you access.", "We may also collect information for marketing purposes and analysis, including information on how you respond to email, SMS or text message, phone and other marketing campaigns.", "We will collect any information you provide to us when you use our contact forms.", "We may use your personal information to send you direct marketing via email and other communication means when you opt-in for this purpose. You may opt-out of receiving future marketing communications at any time by emailing: admin@acceptrec.co.uk", "Use of Cookies: 'Cookies' are ways of saving a small amount of personal information. We only use them to save your username or password to allow easy access to our site."] },
    { title: "Who Are We and What We Do", content: ["We are a recruitment agency as defined in the Employment Agencies and Employment Businesses Regulations 2003. We collect the personal data of the following types of people to allow us to undertake our business:", "• Prospective and placed candidates for permanent or temporary roles", "• Prospective and live client contacts", "• Supplier contacts to support our services, including agency contacts", "• Employees, consultants, temporary workers"] },
    { title: "How We Use Your Personal Data", content: ["Your personal data will be collected and handled by us for the following purposes:", "• To provide you with the services you expect us to", "• To best tailor content and resources according to your preferences", "• To respond to your request or questions when you contact us", "• With your consent we may also use your contact data for direct marketing", "• To help us create, publish, and improve content most relevant to you", "• To ensure that the content provided through the website is presented in the most effective manner", "• To further develop and improve the website and systems to better serve you", "• Where necessary, to comply with any legal obligation"] },
    { title: "Data Retention", content: ["We will keep your information for as long as you wish to receive our communications and thereafter for the longer of the period required in order to meet our business, legal or regulatory responsibilities.", "If you are a candidate seeking a permanent or fixed term engagement, we will retain your personal data for two (2) years after the date we last had meaningful contact with you.", "If you are a candidate seeking a temporary assignment or a contracting role, we will retain your personal data for two (2) years after date we last had meaningful contact with you."] },
    { title: "Your Rights", content: ["The GDPR provides you with the following rights:", "• Request correction of personal information that we hold about you", "• Request erasure of your personal information", "• Object to processing of your personal information", "• Request the restrictions of processing of your personal information", "• Request the transfer of your personal information to another party", "• Make a complaint to the Information Commissioner's Office at https://ico.org.uk/concerns/"] },
    { title: "Marketing Communications", content: ["We will only send marketing communications to you via email or other communication means where you have consented that we may do so. You can opt out of receiving any further marketing communications by clicking the 'unsubscribe' function in the email or by contacting us at admin@acceptrec.co.uk"] },
    { title: "Contact", content: ["To exercise your rights or for any questions about this policy, contact us at: admin@acceptrec.co.uk"] }
];

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">LEGAL INFORMATION</span>
                        <h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">Privacy Policy</h1>
                        <p className="text-[#8B98AB] text-xl leading-relaxed font-medium max-w-2xl mx-auto">How we protect and respect your privacy</p>
                    </motion.div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
            </section>

            <section className="pb-32 bg-navy-700">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="glass-card rounded-2xl p-10 md:p-16 mb-8">
                        <p className="text-[#8B98AB] leading-relaxed font-medium">Pearce Recruitment Limited trading as Accept Recruitment (&ldquo;Accept Recruitment&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;) is committed to protecting and respecting your privacy. This privacy notice describes what personal information we collect from you and how we process your personal information when you use the Accept Recruitment website.</p>
                    </div>

                    <div className="space-y-8">
                        {sections.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 md:p-10">
                                <h3 className="text-white text-xl font-semibold mb-6">{s.title}</h3>
                                <div className="space-y-3">
                                    {s.content.map((p, j) => (
                                        <p key={j} className={`text-[#8B98AB] leading-relaxed font-medium ${p.startsWith("•") ? "pl-4" : ""}`}>{p}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact" className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3">Contact Us</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
