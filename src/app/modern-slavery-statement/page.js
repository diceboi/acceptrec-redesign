"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';

const statementSections = [
    {
        title: "1.1 Who We Work With",
        content: "All of the hirers that we work with, and all of the work-seekers we provide, are known to and identified by our staff. All of the temporary workers we supply are identified by our staff. Some of these work-seekers operate through their own limited companies. The hiring companies that we work with are located in the United Kingdom. The work-seekers we supply live in the United Kingdom."
    },
    {
        title: "1.2 Other Relationships",
        content: "As part of our business, we also work with the Recruitment and Employment Confederation (www.rec.uk.com). We maintain Corporate social responsibility policy, Ethical procurement policy, Anti-bribery / corruption policy, and Whistle-blowing policy. Our policies are established by our directors, based on advice from HR professionals, industry best practice and legal advice. We review our policies annually."
    },
    {
        title: "3. Our Processes for Managing Risk",
        content: "In order to assess the risk of modern slavery, we review the potential for risk at regular intervals. We reserve the right to conduct spot-checks of the businesses who supply us. We collaborate with our suppliers in order to improve standards and transparency across our supply chain. Only senior members of staff who have undergone appropriate training are authorised to sign contracts and establish commercial relationships in any area where we have identified the potential for risk."
    },
    {
        title: "4. Our Performance",
        content: "We track the following KPIs: Check that all staff have annual training on modern slavery; Any incidents reported are acted upon immediately; The percentage of suppliers who sign up to an appropriate code; The effectiveness of enforcement against suppliers who breach policies; The amount of time spent on audits, re-audits, spot checks, and related due diligence; The level of modern slavery training and awareness amongst our staff."
    },
    {
        title: "5. Our Training",
        content: "All of our staff receive training and support that is appropriate to their role. All of our staff receive awareness-raising information around issues involving modern slavery and human trafficking. Our staff are encouraged to discuss any concerns that they have. Training is refreshed annually."
    }
];

export default function ModernSlaveryPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <section className="relative pt-48 pb-16 bg-[#0D1520] text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">LEGAL COMPLIANCE</h2>
                        <h1 className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">Modern Slavery<br />Statement</h1>
                        <p className="text-white/40 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Our commitment under the Modern Slavery Act 2015
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 bg-[#0D1520]">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-16 mb-8">
                        <p className="text-white/50 leading-relaxed font-medium mb-4">
                            This statement is made as part of Pearce Recruitment Services Ltd t/a Accept Recruitment commitment to eliminating the exploitation of people under the Modern Slavery Act 2015 (the Act).
                        </p>
                        <p className="text-white/40 leading-relaxed font-medium mb-6">
                            This statement is published in accordance with section 54 of the Act and relates to the financial year 03/2023 to 03/2024. It was approved by the board of directors on 12/01/2023.
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                            <div className="w-10 h-10 rounded-full bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 text-sm font-black">MP</div>
                            <div>
                                <div className="text-white text-sm font-bold">Mark Pearce</div>
                                <div className="text-white/30 text-xs font-medium">Managing Director</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {statementSections.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#161B28] border border-white/5 rounded-[32px] p-8 md:p-10">
                                <h3 className="text-white text-xl font-bold mb-4">{s.title}</h3>
                                <p className="text-white/40 leading-relaxed font-medium">{s.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/contact" className="px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3">
                            Questions or Concerns? Contact Us
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
