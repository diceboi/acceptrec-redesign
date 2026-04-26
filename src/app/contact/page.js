"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconBrandWhatsapp, 
    IconMapPin, 
    IconPhone, 
    IconMail,
    IconClock,
    IconCalendarEvent,
    IconBolt,
    IconMessages
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const branches = [
    {
        name: "Leicester",
        type: "Head Office",
        address: "Unit 4, Oswin Road, Leicester, LE3 1HR",
        whatsapp: "07495 995406",
        email: "leicester@acceptrec.co.uk",
        phone: "0116 319 4493"
    },
    {
        name: "Coventry",
        type: "Branch",
        address: "First Floor, 1 Harnall Row, Coventry, CV1 5DW",
        whatsapp: "07833 945679",
        email: "coventry@acceptrec.co.uk",
        phone: "024 7610 0211"
    },
    {
        name: "Tamworth",
        type: "Branch",
        address: "Unit 2, 95 Lichfield Street, Tamworth, B79 7QF",
        whatsapp: "07932 787550",
        email: "tamworth@acceptrec.co.uk",
        phone: "01827 700 300"
    }
];

// ─── Components ────────────────────────────────────────────────────────

function ContactHero() {
    return (
        <section className="relative pt-48 pb-20 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-black uppercase tracking-widest mb-8">
                        <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                        24/7 Availability
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
                        Let&apos;s Talk
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Three offices across the Midlands. WhatsApp us for an instant response.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function BranchGrid() {
    return (
        <section className="pb-32 bg-[#0D1520] relative">
            <div className="mx-auto max-w-[1400px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {branches.map((branch, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#161B28] rounded-[40px] border border-white/5 overflow-hidden flex flex-col hover:border-teal-5/30 transition-all duration-300 shadow-2xl relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="p-8 md:p-10 flex-grow relative z-10">
                                <div className="text-teal-4 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                    {branch.type}
                                </div>
                                <h3 className="text-white text-4xl font-black tracking-tight mb-8">
                                    {branch.name}
                                </h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 text-white/50">
                                        <IconMapPin size={20} className="shrink-0 mt-1" />
                                        <span className="text-sm font-medium leading-relaxed">{branch.address}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/50">
                                        <IconPhone size={20} className="shrink-0" />
                                        <span className="text-sm font-medium">{branch.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/50">
                                        <IconMail size={20} className="shrink-0" />
                                        <a href={`mailto:${branch.email}`} className="text-sm font-medium hover:text-white transition-colors">{branch.email}</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-black/20 border-t border-white/5 relative z-10">
                                <a 
                                    href={`https://wa.me/${branch.whatsapp.replace(/\s/g, "")}`}
                                    className="w-full py-4 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/10 flex items-center justify-center gap-3"
                                >
                                    <IconBrandWhatsapp size={18} />
                                    Message WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ValueProposition() {
    return (
        <section className="py-32 bg-[#121926] relative border-t border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-5/[0.02] blur-[120px] rounded-full pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WHY IT WORKS</h2>
                    <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
                        We&apos;ve Gone <span className="text-teal-5">WhatsApp-First</span>
                    </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: IconBolt,
                            title: "Instant Responses",
                            desc: "No more waiting hours for an email reply. Message us and get a response straight away."
                        },
                        {
                            icon: IconClock,
                            title: "24/7 Availability",
                            desc: "Message anytime, day or night. We'll reply as soon as we're online."
                        },
                        {
                            icon: IconMessages,
                            title: "Everything in One Place",
                            desc: "Keeps conversations, documents, and updates in one easy-to-manage thread."
                        }
                    ].map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors text-center">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-5/10 flex items-center justify-center mb-8 border border-teal-5/20 text-teal-5">
                                    <Icon size={32} />
                                </div>
                                <h4 className="text-white text-xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed font-medium">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AlternativeContact() {
    return (
        <section className="py-24 bg-[#0D1520] relative">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Book a Call */}
                    <div className="bg-gradient-to-br from-[#161B28] to-[#0D1520] p-10 rounded-[32px] border border-white/10 flex flex-col md:flex-row items-center gap-8 group hover:border-teal-5/30 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-teal-5 group-hover:text-black group-hover:border-teal-5 transition-all shrink-0">
                            <IconCalendarEvent size={28} />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h4 className="text-white text-xl font-bold mb-2">Book a Call</h4>
                            <p className="text-white/40 text-sm font-medium mb-4">Schedule a consultative discussion with our experts.</p>
                            <a href="/get-started" className="text-teal-5 text-sm font-black uppercase tracking-widest hover:text-white transition-colors">
                                Find a Time →
                            </a>
                        </div>
                    </div>
                    
                    {/* Prefer Email */}
                    <div className="bg-gradient-to-br from-[#161B28] to-[#0D1520] p-10 rounded-[32px] border border-white/10 flex flex-col md:flex-row items-center gap-8 group hover:border-teal-5/30 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:bg-teal-5 group-hover:text-black group-hover:border-teal-5 transition-all shrink-0">
                            <IconMail size={28} />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h4 className="text-white text-xl font-bold mb-2">Prefer Email?</h4>
                            <p className="text-white/40 text-sm font-medium mb-4">Send us your details and we'll route it to the right team.</p>
                            <a href="mailto:info@acceptrec.co.uk" className="text-teal-5 text-sm font-black uppercase tracking-widest hover:text-white transition-colors">
                                info@acceptrec.co.uk →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <ContactHero />
            <BranchGrid />
            <ValueProposition />
            <AlternativeContact />
            <Footer />
        </main>
    );
}
