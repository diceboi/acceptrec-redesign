"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconMapPin, 
    IconBrandWhatsapp, 
    IconBuilding, 
    IconChevronRight,
    IconExternalLink,
    IconClock
} from '@tabler/icons-react';

// ─── Office Data ────────────────────────────────────────────────────────

const offices = [
    {
        name: "Leicester",
        region: "East Midlands",
        desc: "Our flagship office serving Leicester and the East Midlands since 2015. The heart of Accept Recruitment.",
        address: "Unit 4, Oswin Road, Forest Business Park, Leicester, LE3 1HR",
        whatsapp: "07495 995406",
        weCover: "Leicester, Leicestershire, Rutland, and surrounding areas.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Unit+4+Oswin+Road+Leicester+LE3+1HR",
        slug: "leicester"
    },
    {
        name: "Coventry",
        region: "West Midlands",
        desc: "City centre location serving Coventry, Warwickshire, and the West Midlands manufacturing corridor.",
        address: "First Floor Office, 1 Harnall Row, Coventry, CV1 5DW",
        whatsapp: "07833 945679",
        weCover: "Coventry, Warwickshire, Rugby, Nuneaton, and surrounding areas.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=1+Harnall+Row+Coventry+CV1+5DW",
        slug: "coventry"
    },
    {
        name: "Tamworth",
        region: "Staffordshire",
        desc: "Serving Tamworth's major logistics hub and the surrounding Staffordshire and North Warwickshire areas.",
        address: "Unit 2, Manor Court, 95 Lichfield Street, Tamworth, B79 7QF",
        whatsapp: "07932 787550",
        weCover: "Tamworth, Staffordshire, North Warwickshire, and South Derbyshire.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=95+Lichfield+Street+Tamworth+B79+7QF",
        slug: "tamworth"
    }
];

// ─── Components ──────────────────────────────────────────────────────────

function OfficeCard({ office }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-[#161B28] border border-white/5 rounded-[40px] overflow-hidden hover:border-teal-5/30 transition-all duration-500 shadow-2xl flex flex-col"
        >
            {/* Header */}
            <div className="p-8 md:p-10 border-b border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="flex items-center gap-3 mb-2">
                    <IconBuilding size={20} className="text-teal-5" />
                    <h3 className="text-white text-3xl font-bold tracking-tight">{office.name}</h3>
                </div>
                <div className="text-teal-4 text-[10px] font-black uppercase tracking-[0.2em]">{office.region}</div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10 flex-grow space-y-8">
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                    {office.desc}
                </p>

                <div className="space-y-6">
                    {/* Address */}
                    <div>
                        <div className="flex items-center gap-2 text-white/20 mb-3">
                            <IconMapPin size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Address:</span>
                        </div>
                        <p className="text-white text-lg font-bold leading-relaxed">
                            {office.address}
                        </p>
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <div className="flex items-center gap-2 text-white/20 mb-3">
                            <IconBrandWhatsapp size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp:</span>
                        </div>
                        <a 
                            href={`https://wa.me/${office.whatsapp.replace(/\s/g, "")}`}
                            className="text-white text-2xl font-bold hover:text-teal-5 transition-colors flex items-center gap-3"
                        >
                            {office.whatsapp}
                            <span className="text-[10px] font-black uppercase tracking-widest text-teal-5 bg-teal-5/10 px-2 py-1 rounded">24/7 Availability</span>
                        </a>
                    </div>

                    {/* We Cover */}
                    <div className="pt-6 border-t border-white/5">
                        <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-3">We Cover:</div>
                        <p className="text-white/50 text-sm leading-relaxed font-medium">
                            {office.weCover}
                        </p>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="p-4 grid grid-cols-2 gap-2 bg-black/20 mt-auto">
                <Link 
                    href={`/offices/${office.slug}`}
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest py-4 rounded-2xl transition-all"
                >
                    View Details
                    <IconChevronRight size={14} />
                </Link>
                <a 
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-teal-5 text-black hover:bg-white text-[11px] font-bold uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg shadow-teal-5/10"
                >
                    Directions
                    <IconExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    );
}

// ─── Main Sections ──────────────────────────────────────────────────

function OfficesHero() {
    return (
        <section className="relative pt-40 pb-20 bg-[#0D1520] overflow-hidden text-center">
            {/* Background Grain/Fog */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">FIND US</h2>
                    <h1 className="text-white text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
                        Our Offices
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Three Midlands locations. Over 10 years of dependable recruitment. 
                        Choose your nearest office below.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function OfficeGridSection() {
    return (
        <section className="pb-32 bg-[#0D1520]">
            <div className="mx-auto max-w-[1400px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offices.map((office, i) => (
                        <OfficeCard key={i} office={office} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactCTA() {
    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-5/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             
             <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
                 <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest mb-10">
                     <IconClock size={16} className="text-teal-5" />
                     24/7 Messaging Available
                 </div>
                 <h2 className="text-white text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-tight">
                     Need to talk to us?
                 </h2>
                 <p className="text-white/40 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                     Message anytime. We&apos;ll reply as soon as we&apos;re online. Alternatively, find out more about our services below.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <button className="w-full md:w-auto px-12 py-6 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-teal-5 transition-all shadow-2xl hover:scale-105">
                         View Services →
                     </button>
                     <button className="w-full md:w-auto px-12 py-6 rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                         Read Case Studies
                     </button>
                 </div>
             </div>
        </section>
    );
}

export default function OfficesPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <OfficesHero />
            <OfficeGridSection />
            <ContactCTA />
            <Footer />
        </main>
    );
}
