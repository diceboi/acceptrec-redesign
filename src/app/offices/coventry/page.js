"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { StatsBar } from '@/components/sections/StatsBar';
import { 
    IconBrandWhatsapp, 
    IconMapPin, 
    IconPhone, 
    IconMail,
    IconEngine,
    IconSettings,
    IconTruck,
    IconMeat,
    IconChevronRight,
    IconCertificate,
    IconUsers,
    IconSearch,
    IconArrowRight
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const localStats = [
    { label: "Fill Rate", value: "98%" },
    { label: "Attendance", value: "99%" },
    { label: "Compliance", value: "100%" },
    { label: "Google Rating", value: "4.8★" }
];

const sectors = [
    {
        title: "Automotive & Supply Chain",
        icon: IconEngine,
        desc: "OEM suppliers, component manufacturing, and EV production recruitment for Coventry's historic automotive hub."
    },
    {
        title: "Advanced Manufacturing",
        icon: IconSettings,
        desc: "Precision engineering, aerospace components, and advanced materials specialist staffing."
    },
    {
        title: "Warehousing & Logistics",
        icon: IconTruck,
        desc: "Distribution centres and supply chain operations across the M6, M69, and A45 corridors."
    },
    {
        title: "Food & FMCG",
        icon: IconMeat,
        desc: "Specialized recruitment for food production, packaging, and fast-moving consumer goods."
    }
];

const roles = [
    "Production Operatives",
    "Machine Setters",
    "Quality Inspectors",
    "Assembly Workers",
    "Tier 1 & 2 Supplier Specialists",
    "Engineering Support",
    "Volume Recruitment Projects",
    "Logistics Coordinators"
];

// ─── Components ────────────────────────────────────────────────────────

function SectorCard({ sector }) {
    const Icon = sector.icon;
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className="p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-teal-5/30 transition-all duration-300 group"
        >
            <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center mb-8 border border-teal-5/20 group-hover:bg-teal-5 group-hover:text-black transition-all">
                <Icon size={32} />
            </div>
            <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{sector.title}</h3>
            <p className="text-white/40 leading-relaxed font-medium">
                {sector.desc}
            </p>
        </motion.div>
    );
}

// ─── Sections ────────────────────────────────────────────────────────────

function CoventryHero() {
    return (
        <section className="relative pt-48 pb-24 bg-[#0D1520] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-5/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 text-center md:text-left">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-black uppercase tracking-widest mb-10"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                        Manufacturing & Automotive Hub
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
                    >
                        Coventry<br />Office
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-xl mx-auto md:mx-0 mb-12"
                    >
                        Automotive heritage meets advanced manufacturing recruitment. 
                        Serving Coventry, Rugby, Nuneaton, and Warwickshire.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a href="https://wa.me/447833945679" className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">
                            <IconBrandWhatsapp size={20} />
                            Message WhatsApp
                        </a>
                        <button className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                            <IconSearch size={20} className="text-teal-5" />
                            Search Local Jobs
                        </button>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 relative"
                >
                    <div className="relative aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-5/20 to-transparent rounded-[60px] blur-3xl" />
                        <div className="relative h-full bg-[#161B28] rounded-[60px] border border-white/10 overflow-hidden shadow-2xl p-12 flex flex-col justify-center gap-8">
                             <div className="space-y-2">
                                 <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Location:</div>
                                 <div className="text-white text-xl font-bold leading-tight">1 Harnall Row, Coventry<br />CV1 5DW, UK</div>
                             </div>
                             <div className="space-y-2">
                                 <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Connect:</div>
                                 <div className="space-y-3">
                                     <a href="tel:02476100211" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconPhone size={20} className="text-teal-5" />
                                         024 7610 0211
                                     </a>
                                     <a href="mailto:coventry@acceptrec.co.uk" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconMail size={20} className="text-teal-5" />
                                         coventry@acceptrec.co.uk
                                     </a>
                                 </div>
                             </div>
                             <div className="pt-8 border-t border-white/5">
                                 <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-4">Coverage:</div>
                                 <div className="flex flex-wrap gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Rugby</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Nuneaton</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Ansty Park</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Whitley</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function HeritageSection() {
    return (
        <section className="py-32 bg-[#0D1520] relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE COVENTRY CHALLENGE</h2>
                        <h3 className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">
                            Industrial Excellence<br />Born from Heritage
                        </h3>
                        <div className="space-y-6 text-white/40 text-lg leading-relaxed font-medium">
                            <p>
                                Coventry has an engineering DNA that few cities in the world can match. 
                                From 130 years of industrial excellence to the cutting-edge electrification 
                                hubs of today, this city doesn&apos;t just build things; it defines how they are built.
                            </p>
                            <p>
                                Our Coventry office is perfectly positioned in the city centre, just off the 
                                ring road, providing rapid access to the region&apos;s most critical industrial hubs.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Fill Rate", val: "98%", desc: "Local reliability" },
                            { label: "Compliance", val: "100%", desc: "Ethical standards" },
                            { label: "Attendance", val: "99%", desc: "Daily uptime" },
                            { label: "Response", val: "24/7", desc: "Always online" }
                        ].map((s, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 text-center">
                                <div className="text-teal-5 text-4xl font-black mb-2 tracking-tighter">{s.val}</div>
                                <div className="text-white text-xs font-bold uppercase tracking-widest mb-2">{s.label}</div>
                                <div className="text-white/20 text-[10px] uppercase font-black">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function IndustriesGrid() {
    return (
        <section className="py-32 bg-[#121926] relative">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                        Local Industry Focus
                    </h2>
                    <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">
                        We don&apos;t just fill roles; we build teams for the sectors that drive Coventry&apos;s economy.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((s, i) => (
                        <SectorCard key={i} sector={s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RoleExpertise() {
    return (
        <section className="py-32 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-gradient-to-br from-[#161B28] to-[#0D1520] border border-white/10 rounded-[60px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-12 tracking-tighter text-center">
                        Specialized Logistics &<br />Manufacturing Roles
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {roles.map((r, i) => (
                            <div key={i} className="flex items-center gap-4 text-white/50 text-lg font-medium">
                                <IconCertificate size={24} className="text-teal-5 shrink-0" />
                                <span>{r}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 flex justify-center">
                        <button className="flex items-center gap-3 text-teal-5 text-sm font-black uppercase tracking-[0.2em] group">
                            Looking for something specific?
                            <IconArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MapSection() {
    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    <div className="flex-1 rounded-[40px] overflow-hidden border border-white/10 h-[500px] relative">
                         {/* High-fidelity Map Placeholder/Iframe */}
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.8436440656!2d-1.5034606!3d52.4109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b768e14e1a7%3A0x6bba43834017777!2s1%20Harnall%20Row%2C%20Coventry%20CV1%205DW%2C%20UK!5e0!3m2!1sen!2suk!4v1712490000000!5m2!1sen!2suk" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="lg:w-96 flex flex-col justify-center space-y-10">
                        <div>
                             <h4 className="text-white text-2xl font-bold mb-4">Visit Us</h4>
                             <p className="text-white/40 leading-relaxed font-medium">
                                 Conveniently located in the city centre, with quick access to Ansty Park, Whitley, and the M6/M69 network.
                             </p>
                        </div>
                        <div className="space-y-6">
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconMapPin size={24} />
                                 </div>
                                 <div className="text-white/60 text-sm font-medium">
                                     Harnall Row, Coventry<br />United Kingdom
                                 </div>
                             </div>
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconUsers size={24} />
                                 </div>
                                 <div className="text-white/60 text-sm font-medium hover:text-white transition-colors cursor-pointer">
                                     Book a Local Consultation
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BottomCTA() {
    return (
        <section className="py-32 bg-teal-5">
             <div className="mx-auto max-w-5xl px-6 text-center">
                 <h2 className="text-black text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
                     Your Next Hire<br />Starts in Coventry
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Whether you&apos;re looking for volume manufacturing support or your next career move in automotive, our local experts are here to help.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <button className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Post a Job Vacancy
                     </button>
                     <button className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Register as Candidate
                     </button>
                 </div>
             </div>
        </section>
    );
}

export default function CoventryOfficePage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <CoventryHero />
            <HeritageSection />
            <IndustriesGrid />
            <RoleExpertise />
            <MapSection />
            <BottomCTA />
            <Footer />
        </main>
    );
}
