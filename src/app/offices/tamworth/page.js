"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { IconBrandWhatsapp, IconMapPin, IconPhone, IconMail, IconTruck, IconShoppingCart, IconPackage, IconBuilding, IconCertificate, IconSearch, IconUsers } from '@tabler/icons-react';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const sectors = [
    { title: "Distribution & Logistics", icon: IconTruck, desc: "Major DCs, 3PLs, national distribution operations." },
    { title: "E-commerce Fulfilment", icon: IconShoppingCart, desc: "Online retail, pick & pack, returns processing." },
    { title: "Retail Supply Chain", icon: IconPackage, desc: "Supermarket RDCs, fashion logistics, FMCG." },
    { title: "Manufacturing", icon: IconBuilding, desc: "Production facilities feeding the supply chain." }
];
const roles = [
    { name: "Warehouse Operatives", desc: "Pickers, packers, goods-in, goods-out—the backbone of every DC." },
    { name: "FLT Drivers", desc: "Counterbalance, reach, VNA, PPT—fully licensed and experienced." },
    { name: "E-commerce Fulfilment", desc: "Fast-paced picking and packing for online retail." },
    { name: "Volume Recruitment", desc: "Ramp up for peak, scale back in quiet periods, no long-term lock-in." },
    { name: "Night Shifts", desc: "We've got a bench of workers who actually prefer nights—properly." },
    { name: "Permanent Placements", desc: "When you find a good one, we'll help you keep them." }
];

function TamworthHero() {
    return (
        <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 text-center md:text-left">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-semibold uppercase tracking-widest mb-10">
                        <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" /> Staffordshire
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8">Tamworth<br />Office</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/60 text-xl md:text-2xl leading-relaxed font-medium max-w-xl mx-auto md:mx-0 mb-12">The heartbeat of UK logistics recruitment. Serving Birch Coppice, Hams Hall, and the M42 distribution corridor.</motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a href="https://wa.me/447932787550?text=Hi%20Accept%20Recruitment%20Tamworth%2C%20I%27d%20like%20to%20get%20in%20touch%20about..." className="w-full sm:w-auto px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3"><IconBrandWhatsapp size={20} /> Message on WhatsApp</a>
                        <a href="/jobs" className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3"><IconSearch size={20} className="text-teal-5" /> Search Local Jobs</a>
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex-1 relative">
                    <div className="relative aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-5/20 to-transparent rounded-2xl blur-3xl" />
                        <div className="relative h-full glass-card rounded-2xl overflow-hidden p-12 flex flex-col justify-center gap-8">
                             <div className="space-y-2"><div className="text-[10px] font-semibold uppercase tracking-widest text-[#8B98AB]/70">Location:</div><div className="text-white text-xl font-semibold leading-tight">Unit 2, Manor Court<br />95 Lichfield Street<br />Tamworth, B79 7QF</div></div>
                             <div className="space-y-2"><div className="text-[10px] font-semibold uppercase tracking-widest text-[#8B98AB]/70">Connect:</div><div className="space-y-3"><a href="tel:01827438334" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-semibold"><IconPhone size={20} className="text-teal-5" /> 01827 438 334</a><a href="mailto:tamworth@acceptrec.co.uk" className="flex items-center gap-3 text-white hover:text-teal-5 transition-colors text-lg font-semibold"><IconMail size={20} className="text-teal-5" /> tamworth@acceptrec.co.uk</a></div></div>
                             <div className="pt-8 border-t border-white/5"><div className="text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest mb-4">Coverage:</div><div className="flex flex-wrap gap-2 text-[#8B98AB] text-xs font-semibold uppercase tracking-widest">{["Birch Coppice", "Hams Hall", "Atherstone", "Dordon"].map(c => <span key={c} className="px-3 py-1 bg-white/5 rounded-full">{c}</span>)}</div></div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function WeKnowTamworth() {
    return (
        <section className="relative w-full bg-navy-700 py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">LOCAL EXPERTISE</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 tracking-tight leading-none">We Know<br />Tamworth</h2>
                        <div className="space-y-6 text-[#8B98AB] text-lg leading-relaxed font-medium">
                            <p>Tamworth sits at the centre of the UK&apos;s logistics golden triangle. Within a 4-hour drive of 90% of the UK population, this area has become the nation&apos;s distribution backbone.</p>
                            <p>We opened here because this is where the work is—and where the workers are. Massive distribution centres running 24/7. E-commerce fulfilment operations that surge at Black Friday and don&apos;t slow down until January.</p>
                            <p>When you&apos;re running a 500,000 sq ft warehouse with three shifts and your agency tells you they can&apos;t fill your weekend requirement, you&apos;ve got a problem. That&apos;s why we&apos;re here.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[{ label: "Fill Rate", val: "98%", desc: "Local reliability" }, { label: "Attendance", val: "99%", desc: "Daily uptime" }, { label: "Compliance", val: "100%", desc: "Ethical standards" }, { label: "Response", val: "24/7", desc: "Always online" }].map((s, i) => (
                            <div key={i} className="glass-card rounded-2xl p-8 text-center"><div className="text-teal-5 text-4xl font-semibold mb-2 tracking-tighter">{s.val}</div><div className="text-white text-xs font-semibold uppercase tracking-widest mb-2">{s.label}</div><div className="text-[#8B98AB]/50 text-[10px] uppercase font-semibold">{s.desc}</div></div>
                        ))}
                    </div>
                </div>
                <div className="mt-24 max-w-4xl">
                    <h3 className="text-white text-3xl font-semibold mb-6 tracking-tight">The Tamworth Recruitment Challenge</h3>
                    <div className="space-y-6 text-[#8B98AB] text-lg leading-relaxed font-medium">
                        <p>Every logistics park around here is fighting for the same workers. The big names—Amazon, Ocado, Aldi, Next—they&apos;ve got the brand recognition. But they also churn through workers at industrial rates.</p>
                        <p>We&apos;ve spent years building relationships with reliable warehouse workers across Tamworth, Atherstone, Polesworth, Dordon, and into Burton and Lichfield. We know who&apos;s FLT trained. Who&apos;s worked chilled environments. And crucially—who actually shows up.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function IndustriesGrid() {
    return (
        <section className="relative w-full bg-[#0d111a] py-32 overflow-hidden">
            <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Tamworth Industries We Serve</h2>
                    <p className="text-[#8B98AB] text-xl font-medium max-w-2xl mx-auto">Specialised recruitment for the logistics and distribution sector driving Tamworth&apos;s economy.</p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {sectors.map((s, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all"><s.icon size={32} /></div>
                            <h3 className="relative text-white text-2xl font-semibold mb-4 tracking-tight">{s.title}</h3>
                            <p className="relative text-[#8B98AB] leading-relaxed font-medium">{s.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function RoleExpertise() {
    return (
        <section className="py-32 bg-navy-700">
            <div className="mx-auto max-w-5xl px-6">
                <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="relative text-white text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-center">What We Actually Do</h2>
                    <p className="relative text-[#8B98AB] text-center mb-12 text-lg font-medium max-w-xl mx-auto">Logistics and warehouse recruitment built for Tamworth&apos;s golden triangle.</p>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {roles.map((r, i) => (<div key={i} className="flex items-start gap-4"><IconCertificate size={24} className="text-teal-5 shrink-0 mt-1" /><div><span className="text-white text-lg font-semibold block mb-1">{r.name}</span><span className="text-[#8B98AB] text-sm font-medium">{r.desc}</span></div></div>))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CoverageSection() {
    return (
        <section className="py-32 bg-[#0d111a]">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">
                    <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 h-[500px] relative">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.0!2d-1.6924!3d52.6343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a50e7c8f7a07%3A0x1234567890abcdef!2s95%20Lichfield%20St%2C%20Tamworth%20B79%207QF%2C%20UK!5e0!3m2!1sen!2suk!4v1712490000000!5m2!1sen!2suk" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="lg:w-96 flex flex-col justify-center space-y-10">
                        <div><h4 className="text-white text-2xl font-semibold mb-4">Covering the Golden Triangle</h4><p className="text-[#8B98AB] leading-relaxed font-medium">From Tamworth, we serve the whole M42 logistics corridor and beyond: Birch Coppice Business Park, Hams Hall, Kingsbury Link, the A5 retail parks, and the industrial estates spreading into South Derbyshire and North Warwickshire.</p></div>
                        <div className="space-y-6">
                             <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5"><IconMapPin size={24} /></div><div className="text-[#8B98AB] text-sm font-medium">95 Lichfield Street, Tamworth<br />United Kingdom</div></div>
                             <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-5"><IconUsers size={24} /></div><Link href="/contact" className="text-[#8B98AB] text-sm font-medium hover:text-white transition-colors">Book a Local Consultation</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function TamworthOfficePage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <TamworthHero />
            <WeKnowTamworth />
            <IndustriesGrid />
            <RoleExpertise />
            <CoverageSection />
            <CtaBanner badge="SHORT-STAFFED?" title="Short-staffed in" titleHighlight="Tamworth?" subtitle="WhatsApp our Tamworth team. We understand peak season doesn't wait—and neither do we." primaryButtonText="Message on WhatsApp" secondaryButtonText="Contact Us" primaryButtonHref="https://wa.me/447932787550" secondaryButtonHref="/contact" />
            <Footer />
        </main>
    );
}
