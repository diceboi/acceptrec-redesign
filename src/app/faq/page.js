"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconChevronDown,
    IconArrowRight,
    IconUserPlus,
    IconMapPin,
    IconMail
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const faqSections = [
    {
        title: "Getting Started",
        items: [
            {
                q: "How do I apply for a job with Accept Recruitment?",
                a: "To apply for a job with Accept Recruitment, simply visit our Jobs page. Browse through the available positions and click on the one you are interested in. Alternatively, message us on WhatsApp or use our live chat, and we can guide you through the application process."
            },
            {
                q: "What types of positions does Accept Recruitment offer?",
                a: "Accept Recruitment offers a wide range of job opportunities across various industries. We specialise in sectors such as manufacturing, logistics, warehousing, food production, and more to explore the current available positions and their specific requirements."
            },
            {
                q: "How do I register with Accept Recruitment?",
                a: "To register online with us, visit our Registration page, or visit your local office. Please find all our locations on our Offices page."
            }
        ]
    },
    {
        title: "Registration & Documents",
        items: [
            {
                q: "What documents do I need to send in order to start working?",
                a: "We follow the government guidelines regarding eligibility to work, and it can be found at https://www.gov.uk/government/publications/right-to-work-checks-employers-guide"
            },
            {
                q: "How long does registering take and will I need to bring anything with me?",
                a: "We are technology driven and use the latest technology to help you complete your registration efficiently. We will need to see your eligibility documents and any certificates related to your qualification (E.g. Forklift or Driving licence)."
            },
            {
                q: "Will I need to complete any tests when I register with you?",
                a: "For some of our positions, you may be required to complete comprehension assessments."
            },
            {
                q: "I have registered online, what will happen next?",
                a: "Great to have you onboard! After you complete your online registration, our recruitment team will get in touch with you within the next two working days."
            }
        ]
    },
    {
        title: "Account & Portal",
        items: [
            {
                q: "How can I update my registration profile?",
                a: "Once you have completed your registration, you can update your details via the registration portal at https://accept.iqxanywhere.net/login. Alternatively, message us on WhatsApp and we'll help you update your details."
            },
            {
                q: "I have forgotten my password for the registration portal, can you reset it for me?",
                a: "Sure! You can reset your password at https://accept.iqxanywhere.net/resetpassword or send an email request to admin@acceptrec.co.uk and we will assist you."
            }
        ]
    },
    {
        title: "Contact & Support",
        items: [
            {
                q: "How can I contact Accept Recruitment for further inquiries?",
                a: "Visit our Contact page to fill out the contact form, and we will get back to you as soon as possible."
            },
            {
                q: "Are you available to speak about current vacancies via online chat?",
                a: "Yes! Our team is available to chat with you throughout the working week (Monday to Friday, 08:00 - 17:00)."
            }
        ]
    },
    {
        title: "Updates & Privacy",
        items: [
            {
                q: "How can I stay updated on new job openings at Accept Recruitment?",
                a: "To stay informed about new job openings at Accept Recruitment, we recommend visiting our website regularly. You can also follow our social media channels where we often share updates on new job opportunities, company news, and industry insights."
            },
            {
                q: "How do I unsubscribe from job alerts or email notifications?",
                a: "Click the \"Unsubscribe\" link at the bottom of our emails to opt-out from general email notifications like newsletters or company updates. You can also contact our team at admin@acceptrec.co.uk to request unsubscribing from job alerts or email notifications."
            },
            {
                q: "How do you protect the confidentiality of my personal information?",
                a: "We prioritise the protection of your personal information and maintain strict privacy practices. We use industry-standard encryption for transmitting your information, securely store it on protected servers, and grant access only to authorised personnel trained in data privacy. We obtain your consent and give you control over your data, allowing you to review, update, or delete it at any time. Additionally, we comply with relevant data protection laws, such as GDPR UK."
            }
        ]
    }
];

// ─── Components ────────────────────────────────────────────────────

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <div className="border-b border-white/5 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 px-2 text-left group"
            >
                <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-teal-4' : 'text-white group-hover:text-white/80'}`}>
                    {item.q}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                >
                    <IconChevronDown size={20} className={`transition-colors ${isOpen ? 'text-teal-5' : 'text-white/30'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/40 leading-relaxed font-medium pb-6 px-2">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function FAQSection({ section, sectionIndex, openItems, toggleItem }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sectionIndex * 0.1 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{section.title}</h3>
                <span className="text-white/20 text-xs font-bold uppercase tracking-widest">{section.items.length} questions</span>
            </div>
            <div className="bg-[#161B28] border border-white/5 rounded-[32px] p-6 md:p-8">
                {section.items.map((item, i) => {
                    const key = `${sectionIndex}-${i}`;
                    return (
                        <AccordionItem
                            key={key}
                            item={item}
                            isOpen={openItems[key] || false}
                            onToggle={() => toggleItem(key)}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}

// ─── Sections ────────────────────────────────────────────────────────

function FAQHero() {
    return (
        <section className="relative pt-48 pb-24 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">HELP CENTRE</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">
                        Frequently<br />Asked Questions
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Quick answers to common questions about working with Accept Recruitment.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function FAQContent() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (key) => {
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="pb-24 bg-[#0D1520]">
            <div className="mx-auto max-w-4xl px-6 space-y-12">
                {faqSections.map((section, i) => (
                    <FAQSection
                        key={i}
                        section={section}
                        sectionIndex={i}
                        openItems={openItems}
                        toggleItem={toggleItem}
                    />
                ))}
            </div>
        </section>
    );
}

function QuickLinks() {
    return (
        <section className="py-16 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6">
                <h3 className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-8 text-center">Quick Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/registration" className="bg-[#161B28] border border-white/5 rounded-[24px] p-8 hover:border-teal-5/30 transition-all group flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all shrink-0">
                            <IconUserPlus size={22} />
                        </div>
                        <div>
                            <div className="text-white font-bold group-hover:text-teal-4 transition-colors">Register Now</div>
                            <div className="text-white/30 text-sm font-medium">Start your registration process</div>
                        </div>
                    </Link>
                    <Link href="/offices" className="bg-[#161B28] border border-white/5 rounded-[24px] p-8 hover:border-teal-5/30 transition-all group flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all shrink-0">
                            <IconMapPin size={22} />
                        </div>
                        <div>
                            <div className="text-white font-bold group-hover:text-teal-4 transition-colors">Our Offices</div>
                            <div className="text-white/30 text-sm font-medium">Find your nearest location</div>
                        </div>
                    </Link>
                    <Link href="/contact" className="bg-[#161B28] border border-white/5 rounded-[24px] p-8 hover:border-teal-5/30 transition-all group flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all shrink-0">
                            <IconMail size={22} />
                        </div>
                        <div>
                            <div className="text-white font-bold group-hover:text-teal-4 transition-colors">Get in Touch</div>
                            <div className="text-white/30 text-sm font-medium">Contact our team directly</div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function FAQPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <FAQHero />
            <FAQContent />
            <QuickLinks />
            <Footer />
        </main>
    );
}
