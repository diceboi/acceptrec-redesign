"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { IconMapPin, IconBrandWhatsapp, IconBuilding, IconChevronRight, IconExternalLink, IconClock } from '@tabler/icons-react';



const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const offices = [
    { name: "Leicester", region: "East Midlands", desc: "Our flagship office serving Leicester and the East Midlands since 2015. The heart of Accept Recruitment.", address: "Unit 4, Oswin Road, Forest Business Park, Leicester, LE3 1HR", whatsapp: "07495 995406", weCover: "Leicester, Leicestershire, Rutland, and surrounding areas.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Unit+4+Oswin+Road+Leicester+LE3+1HR", slug: "leicester" },
    { name: "Coventry", region: "West Midlands", desc: "City centre location serving Coventry, Warwickshire, and the West Midlands manufacturing corridor.", address: "First Floor Office, 1 Harnall Row, Coventry, CV1 5DW", whatsapp: "07833 945679", weCover: "Coventry, Warwickshire, Rugby, Nuneaton, and surrounding areas.", mapUrl: "https://www.google.com/maps/search/?api=1&query=1+Harnall+Row+Coventry+CV1+5DW", slug: "coventry" },
    { name: "Tamworth", region: "Staffordshire", desc: "Serving Tamworth's major logistics hub and the surrounding Staffordshire and North Warwickshire areas.", address: "Unit 2, Manor Court, 95 Lichfield Street, Tamworth, B79 7QF", whatsapp: "07932 787550", weCover: "Tamworth, Staffordshire, North Warwickshire, and South Derbyshire.", mapUrl: "https://www.google.com/maps/search/?api=1&query=95+Lichfield+Street+Tamworth+B79+7QF", slug: "tamworth" }
];

function OfficeCard({ office }) {
    return (
        <motion.div variants={cardVariants} className="group glass-card rounded-2xl overflow-hidden hover:border-teal-5/30 transition-all duration-500 hover:teal-glow-sm flex flex-col">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative p-8 md:p-10 border-b border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="flex items-center gap-3 mb-2"><IconBuilding size={20} className="text-teal-5" /><h3 className="text-white text-3xl font-semibold tracking-tight">{office.name}</h3></div>
                <div className="text-teal-4 text-[10px] font-semibold uppercase tracking-[0.2em]">{office.region}</div>
            </div>
            <div className="relative p-8 md:p-10 flex-grow space-y-8">
                <p className="text-[#8B98AB] text-lg leading-relaxed font-medium">{office.desc}</p>
                <div className="space-y-6">
                    <div><div className="flex items-center gap-2 text-[#8B98AB]/50 mb-3"><IconMapPin size={16} /><span className="text-[10px] font-semibold uppercase tracking-widest">Address:</span></div><p className="text-white text-lg font-semibold leading-relaxed">{office.address}</p></div>
                    <div><div className="flex items-center gap-2 text-[#8B98AB]/50 mb-3"><IconBrandWhatsapp size={16} /><span className="text-[10px] font-semibold uppercase tracking-widest">WhatsApp:</span></div><a href={`https://wa.me/${office.whatsapp.replace(/\s/g, "")}`} className="text-white text-2xl font-semibold hover:text-teal-5 transition-colors flex items-center gap-3">{office.whatsapp} <span className="text-[10px] font-semibold uppercase tracking-widest text-teal-5 bg-teal-5/10 px-2 py-1 rounded">24/7 Availability</span></a></div>
                    <div className="pt-6 border-t border-white/5"><div className="text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest mb-3">We Cover:</div><p className="text-[#8B98AB] text-sm leading-relaxed font-medium">{office.weCover}</p></div>
                </div>
            </div>
            <div className="relative p-4 grid grid-cols-2 gap-2 bg-black/20 mt-auto">
                <Link href={`/offices/${office.slug}`} className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[11px] font-semibold uppercase tracking-widest py-4 rounded-2xl transition-all">View Details <IconChevronRight size={14} /></Link>
                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-teal-5 text-black hover:bg-white text-[11px] font-semibold uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg shadow-teal-5/10">Directions <IconExternalLink size={14} /></a>
            </div>
        </motion.div>
    );
}

function OfficesHero() {
    return (
        <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                    <IconMapPin className="text-teal-5" size={16} />
                    <span className="text-sm font-semibold text-teal-4">Find Us</span>
                </motion.div>
                <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Our Offices</motion.h1>
                <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Three Midlands locations. Over 10 years of dependable recruitment. Choose your nearest office below.</motion.p>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function OfficeGridSection() {
    return (
        <section className="relative w-full bg-navy-700 py-24 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
            <div className="relative z-10 mx-auto max-w-[1400px] px-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {offices.map((office, i) => <OfficeCard key={i} office={office} />)}
                </motion.div>
            </div>
        </section>
    );
}

export default function OfficesPageClient() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <OfficesHero />
            <OfficeGridSection />
            <CtaBanner badge="NEED TO TALK?" title="Need to talk" titleHighlight="to us?" subtitle="Message anytime. We'll reply as soon as we're online. Alternatively, find out more about our services below." primaryButtonText="View Services" secondaryButtonText="Read Case Studies" primaryButtonHref="/temporary-staffing" secondaryButtonHref="/case-studies" />
            <Footer />
        </main>
    );
}
