"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconBrandWhatsapp, 
    IconMapPin, 
    IconPhone, 
    IconMail,
    IconTruck,
    IconShoppingCart,
    IconPackage,
    IconBuilding,
    IconCertificate,
    IconSearch,
    IconUsers
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const sectors = [
    {
        title: "Distribution & Logistics",
        icon: IconTruck,
        desc: "Major DCs, 3PLs, national distribution operations."
    },
    {
        title: "E-commerce Fulfilment",
        icon: IconShoppingCart,
        desc: "Online retail, pick & pack, returns processing."
    },
    {
        title: "Retail Supply Chain",
        icon: IconPackage,
        desc: "Supermarket RDCs, fashion logistics, FMCG."
    },
    {
        title: "Manufacturing",
        icon: IconBuilding,
        desc: "Production facilities feeding the supply chain."
    }
];

const roles = [
    "Warehouse Operatives",
    "FLT Drivers",
    "E-commerce Fulfilment",
    "Volume Recruitment",
    "Night Shifts",
    "Permanent Placements"
];

const roleDescs = {
    "Warehouse Operatives": "Pickers, packers, goods-in, goods-out—the backbone of every DC.",
    "FLT Drivers": "Counterbalance, reach, VNA, PPT—fully licensed and experienced.",
    "E-commerce Fulfilment": "Fast-paced picking and packing for online retail.",
    "Volume Recruitment": "Ramp up for peak, scale back in quiet periods, no long-term lock-in.",
    "Night Shifts": "We've got a bench of workers who actually prefer nights—properly.",
    "Permanent Placements": "When you find a good one, we'll help you keep them."
};

// ─── Components ────────────────────────────────────────────────────

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

// ─── Sections ────────────────────────────────────────────────────────

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
                        Staffordshire
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
                    >
                        Tamworth<br />Office
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-xl mx-auto md:mx-0 mb-12"
                    >
                        The heartbeat of UK logistics recruitment. 
                        Serving Birch Coppice, Hams Hall, and the M42 distribution corridor.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a href="https://wa.me/447932787550?text=Hi%20Accept%20Recruitment%20Tamworth%2C%20I%27d%20like%20to%20get%20in%20touch%20about..." className="w-full sm:w-auto px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3">
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
                                 <div className="text-white text-xl font-bold leading-tight">Unit 2, Manor Court<br />95 Lichfield Street<br />Tamworth, B79 7QF</div>
                             </div>
                             <div className="space-y-2">
                                 <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Connect:</div>
                                 <div className="space-y-3">
                                     <a href="tel:01827700300" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconPhone size={20} className="text-teal-5" />
                                         01827 700 300
                                     </a>
                                     <a href="mailto:tamworth@acceptrec.co.uk" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-bold">
                                         <IconMail size={20} className="text-teal-5" />
                                         tamworth@acceptrec.co.uk
                                     </a>
                                 </div>
                             </div>
                             <div className="pt-8 border-t border-white/5">
                                 <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-4">Coverage:</div>
                                 <div className="flex flex-wrap gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Birch Coppice</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Hams Hall</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Atherstone</span>
                                     <span className="px-3 py-1 bg-white/5 rounded-full">Dordon</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function WeKnowTamworth() {
    return (
        <section className="py-32 bg-[#0D1520] relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">LOCAL EXPERTISE</h2>
                        <h3 className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">
                            We Know<br />Tamworth
                        </h3>
                        <div className="space-y-6 text-white/40 text-lg leading-relaxed font-medium">
                            <p>
                                Tamworth sits at the centre of the UK&apos;s logistics golden triangle. Within a 4-hour drive of 90% of the UK population, this area has become the nation&apos;s distribution backbone. Birch Coppice. Hams Hall. Kingsbury Link. The industrial parks along the A5 and M42. If a parcel&apos;s getting delivered tomorrow, there&apos;s a good chance it&apos;s passing through somewhere near our office.
                            </p>
                            <p>
                                We opened here because this is where the work is—and where the workers are. Massive distribution centres running 24/7. E-commerce fulfilment operations that surge at Black Friday and don&apos;t slow down until January. Retailers, 3PLs, and manufacturers all competing for the same pool of warehouse operatives, FLT drivers, and pickers.
                            </p>
                            <p>
                                When you&apos;re running a 500,000 sq ft warehouse with three shifts and your agency tells you they can&apos;t fill your weekend requirement, you&apos;ve got a problem. When your peak season hits and you suddenly need 50 extra pairs of hands, you need someone who can deliver. That&apos;s why we&apos;re here.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Fill Rate", val: "98%", desc: "Local reliability" },
                            { label: "Attendance", val: "99%", desc: "Daily uptime" },
                            { label: "Compliance", val: "100%", desc: "Ethical standards" },
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

                {/* Recruitment Challenge sub-section */}
                <div className="mt-24 max-w-4xl">
                    <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">The Tamworth Recruitment Challenge</h3>
                    <div className="space-y-6 text-white/40 text-lg leading-relaxed font-medium">
                        <p>
                            Every logistics park around here is fighting for the same workers. The big names—Amazon, Ocado, Aldi, Next—they&apos;ve got the brand recognition. But they also churn through workers at industrial rates. That creates opportunity if you know where to look.
                        </p>
                        <p>
                            We&apos;ve spent years building relationships with reliable warehouse workers across Tamworth, Atherstone, Polesworth, Dordon, and into Burton and Lichfield. We know who&apos;s FLT trained. Who&apos;s worked chilled environments. Who can handle the pace of e-commerce picking. And crucially—who actually shows up when they say they will.
                        </p>
                        <p>
                            Our Tamworth team understands shift patterns, warehouse culture, and the reality of running high-volume operations. We&apos;re not going to send you someone who&apos;s going to clock in late, work half-pace, and disappear after two shifts. We&apos;ve built our reputation on reliability—and in logistics, that&apos;s everything.
                        </p>
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
                        Tamworth Industries We Serve
                    </h2>
                    <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">
                        Specialised recruitment for the logistics and distribution sector driving Tamworth&apos;s economy.
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
                    
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-4 tracking-tighter text-center">
                        What We Actually Do
                    </h2>
                    <p className="text-white/40 text-center mb-12 text-lg font-medium max-w-xl mx-auto">
                        Logistics and warehouse recruitment built for Tamworth&apos;s golden triangle.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {roles.map((r, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <IconCertificate size={24} className="text-teal-5 shrink-0 mt-1" />
                                <div>
                                    <span className="text-white text-lg font-bold block mb-1">{r}</span>
                                    <span className="text-white/40 text-sm font-medium">{roleDescs[r]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CoverageSection() {
    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    <div className="flex-1 rounded-[40px] overflow-hidden border border-white/10 h-[500px] relative">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.0!2d-1.6924!3d52.6343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a50e7c8f7a07%3A0x1234567890abcdef!2s95%20Lichfield%20St%2C%20Tamworth%20B79%207QF%2C%20UK!5e0!3m2!1sen!2suk!4v1712490000000!5m2!1sen!2suk" 
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
                             <h4 className="text-white text-2xl font-bold mb-4">Covering the Golden Triangle</h4>
                             <p className="text-white/40 leading-relaxed font-medium">
                                 From Tamworth, we serve the whole M42 logistics corridor and beyond: Birch Coppice Business Park, Hams Hall, Kingsbury Link, the A5 retail parks, and the industrial estates spreading into South Derbyshire and North Warwickshire. Whether you&apos;re in a mega-DC or a smaller operation on a trading estate, if you need warehouse staff, we can help.
                             </p>
                        </div>
                        <div className="space-y-6">
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconMapPin size={24} />
                                 </div>
                                 <div className="text-white/60 text-sm font-medium">
                                     95 Lichfield Street, Tamworth<br />United Kingdom
                                 </div>
                             </div>
                             <div className="flex items-center gap-4 group">
                                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5">
                                     <IconUsers size={24} />
                                 </div>
                                 <Link href="/contact" className="text-white/60 text-sm font-medium hover:text-white transition-colors">
                                     Book a Local Consultation
                                 </Link>
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
                     Short-staffed<br />in Tamworth?
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     WhatsApp our Tamworth team. We understand peak season doesn&apos;t wait—and neither do we.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <a href="https://wa.me/447932787550?text=Hi%20Accept%20Recruitment%20Tamworth%2C%20I%27d%20like%20to%20get%20in%20touch%20about..." className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl flex items-center justify-center gap-3">
                         <IconBrandWhatsapp size={20} />
                         Message on WhatsApp
                     </a>
                     <Link href="/contact" className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Contact Us
                     </Link>
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
            <WeKnowTamworth />
            <IndustriesGrid />
            <RoleExpertise />
            <CoverageSection />
            <BottomCTA />
            <Footer />
        </main>
    );
}
