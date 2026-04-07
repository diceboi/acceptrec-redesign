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
    IconPackage,
    IconTruckLoading,
    IconShoppingCart,
    IconFlame,
    IconMoon,
    IconUserCircle,
    IconSearch,
    IconChevronRight,
    IconUsers
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const roles = [
    {
        title: "Warehouse Operatives",
        icon: IconPackage,
        desc: "Pickers, packers, goods-in, goods-out, and general warehouse support."
    },
    {
        title: "FLT Drivers",
        icon: IconTruckLoading,
        desc: "Certified Counterbalance, Reach, VNA, and PPT operators."
    },
    {
        title: "E-commerce Fulfilment",
        icon: IconShoppingCart,
        desc: "High-volume picking and packing specialists for peak online retail operations."
    },
    {
        title: "Peak Volume Specialists",
        icon: IconFlame,
        desc: "Rapid deployment teams for seasonal spikes and Black Friday surges."
    }
];

const expertiseHighlights = [
    {
        icon: IconMoon,
        title: "Night Shifts & 24/7",
        desc: "We understand that logistics never sleeps. Dedicated recruitment for unconventional hours."
    },
    {
        icon: IconUserCircle,
        title: "Permanent Placements",
        desc: "Finding the leaders that keep your operation running smoothly, from Supervisors to Operations Managers."
    }
];

// ─── Components ────────────────────────────────────────────────────────

function RoleCard({ role }) {
    const Icon = role.icon;
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className="p-8 md:p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-teal-5/30 transition-all duration-300 group flex flex-col items-center text-center h-full"
        >
            <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center mb-6 border border-teal-5/20 group-hover:bg-teal-5 group-hover:text-black transition-all shadow-[0_0_20px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <Icon size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{role.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
                {role.desc}
            </p>
        </motion.div>
    );
}

// ─── Sections ────────────────────────────────────────────────────────────

function TamworthHero() {
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
                        Staffordshire&apos;s Logistics Hub
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]"
                    >
                        Tamworth<br />Office
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto md:mx-0 mb-12"
                    >
                        The heartbeat of UK logistics recruitment. Serving Birch Coppice, Hams Hall, and the M42 distribution corridor.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a href="https://wa.me/447932787550" className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-5/20 to-transparent rounded-[60px] blur-3xl opacity-50" />
                        <div className="relative h-full bg-[#161B28] rounded-[60px] border border-white/10 overflow-hidden shadow-2xl p-12 flex flex-col justify-center gap-8">
                             <div className="space-y-2">
                                 <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Location:</div>
                                 <div className="text-white text-xl font-bold leading-tight">Unit 2, Manor Court<br />95 Lichfield Street<br />Tamworth, B79 7QF</div>
                             </div>
                             <div className="space-y-2">
                                 <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Connect:</div>
                                 <div className="space-y-3">
                                     <a href="tel:01827438334" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconPhone size={20} className="text-teal-5" />
                                         01827 438 334
                                     </a>
                                     <a href="mailto:tamworth@acceptrec.co.uk" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconMail size={20} className="text-teal-5" />
                                         tamworth@acceptrec.co.uk
                                     </a>
                                 </div>
                             </div>
                             <div className="pt-8 border-t border-white/5">
                                 <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-4">Strategic Fast-Access:</div>
                                 <div className="flex flex-wrap gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                     <span className="px-3 py-1 bg-white/5 rounded-full border border-teal-5/10 text-teal-4">Birch Coppice</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full border border-teal-5/10 text-teal-4">Hams Hall</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full border border-teal-5/10 text-teal-4">M42 Corridor</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function LocationAdvantageSection() {
    return (
        <section className="py-32 bg-[#0D1520] relative overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE LOGISTICS HUB</h2>
                        <h3 className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">
                            The Heartbeat of<br />UK Distribution
                        </h3>
                        <div className="space-y-6 text-white/40 text-lg leading-relaxed font-medium">
                            <p>
                                Positioned perfectly in the &quot;Golden Triangle&quot;, our Tamworth office powers the logistics operations that keep the UK moving. 
                                We are just 5 minutes from Birch Coppice and 10 minutes from Hams Hall.
                            </p>
                            <p>
                                With over 9 years of local experience, we understand the fast-paced, high-volume demands of modern e-commerce and retail distribution.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Experience", val: "9+", desc: "Years Locally" },
                            { label: "Availability", val: "24/7", desc: "Support Model" },
                            { label: "Fill Rate", val: "97%", desc: "Volume Fulfillment" },
                            { label: "Coverage", val: "M42", desc: "Primary Route" }
                        ].map((s, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-[#161B28] border border-white/5 text-center flex flex-col justify-center">
                                <div className="text-teal-5 text-4xl font-black mb-2 tracking-tighter">{s.val}</div>
                                <div className="text-white text-xs font-bold uppercase tracking-widest mb-1">{s.label}</div>
                                <div className="text-white/20 text-[10px] uppercase font-black">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecializedRoles() {
    return (
        <section className="py-32 bg-[#121926] relative border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WHAT WE DELIVER</h2>
                    <h3 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                        Warehouse & Logistics Experts
                    </h3>
                    <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">
                        Dedicated recruitment solutions scaled for the demands of the Midlands&apos; largest distribution centres.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((r, i) => (
                        <RoleCard key={i} role={r} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCapacity() {
    return (
        <section className="py-32 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-gradient-to-br from-[#161B28] to-[#0D1520] border border-white/10 rounded-[60px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row gap-16 items-center">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-5/5 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="md:w-1/2 space-y-12 relative z-10">
                        {expertiseHighlights.map((eh, i) => {
                            const Icon = eh.icon;
                            return (
                                <div key={i} className="flex gap-6">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-xl bg-teal-5/10 border border-teal-5/20 text-teal-5 flex items-center justify-center">
                                            <Icon size={24} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-2xl font-bold mb-3">{eh.title}</h4>
                                        <p className="text-white/40 leading-relaxed font-medium text-sm">
                                            {eh.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="md:w-1/2 relative z-10 flex flex-col justify-center items-center md:items-start">
                        <h3 className="text-white text-3xl font-black mb-6 tracking-tight text-center md:text-left">
                            We don&apos;t just fill shifts. We optimize your workforce.
                        </h3>
                        <p className="text-white/40 text-lg mb-8 text-center md:text-left">
                            Talk to our Tamworth team about managed services and volume recruitment strategies.
                        </p>
                        <button className="flex items-center gap-3 text-teal-5 text-sm font-black uppercase tracking-[0.2em] group">
                            Book a Consultation
                            <IconChevronRight size={18} className="transition-transform group-hover:translate-x-2" />
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
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-stretch">
                    <div className="flex-1 rounded-[40px] overflow-hidden border border-white/10 h-[500px] relative">
                         {/* High-fidelity Map Placeholder/Iframe - Centered on Tamworth Office */}
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.84852230113!2d-1.705822384669527!3d52.6335198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a0b5b2db8d4bb%3A0xe6ab1e48398e6c43!2s95%20Lichfield%20St%2C%20Tamworth%20B79%207QF%2C%20UK!5e0!3m2!1sen!2suk!4v1712490000000!5m2!1sen!2suk" 
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
                                 Conveniently located in Tamworth with direct links to the region&apos;s major logistics hubs and road networks.
                             </p>
                        </div>
                        <div className="space-y-6">
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconMapPin size={24} />
                                 </div>
                                 <div className="text-white/60 text-sm font-medium">
                                     Unit 2, Manor Court<br />95 Lichfield Street<br />Tamworth, B79 7QF
                                 </div>
                             </div>
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconUsers size={24} />
                                 </div>
                                 <div className="text-white/60 text-sm font-medium hover:text-white transition-colors cursor-pointer">
                                     Drop in Mon-Fri, 08:00 - 17:30
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
                     Scale Your<br />Logistics Teams
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Whether you need 50 pickers for Black Friday or a permanent Ops Manager, our Tamworth team delivers.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <button className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Request Warehouse Staff
                     </button>
                     <button className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Find Driving Jobs
                     </button>
                 </div>
             </div>
        </section>
    );
}

export default function TamworthOfficePage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <TamworthHero />
            <LocationAdvantageSection />
            <SpecializedRoles />
            <ServiceCapacity />
            <MapSection />
            <BottomCTA />
            <Footer />
        </main>
    );
}
