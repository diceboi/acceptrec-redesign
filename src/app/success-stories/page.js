"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { IconArrowRight, IconArrowUp, IconUser, IconQuote } from '@tabler/icons-react';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const stories = [
    { name: "Adam", from: "Warehouse Picker", to: "Permanent Operative", badge: "Permanent in 8 weeks", time: "8w", quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.", tags: ["Permanent", "Warehouse"] },
    { name: "Anna", from: "Food Production Operative", to: "Permanent Contract", badge: "Permanent contract", time: "6m", quote: "I started on the line and the routine was explained properly, including hygiene and checks. After a few months I was asked to step up as a permanent employee. Thank you so much Accept!", tags: ["Permanent", "Food Production"] },
    { name: "Hannah", from: "Warehouse Operative", to: "Stock Control", badge: "Promoted to Stock Control", time: "5m", quote: "I started on basic warehouse work and got shown things properly. Turning up on time and getting the job done meant I was trusted with more responsibility.", tags: ["Promotion", "Warehouse"] },
    { name: "Kasia", from: "Warehouse Picker", to: "Permanent Operative", badge: "Permanent in 8 weeks", time: "8w", quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.", tags: ["Permanent", "Warehouse"] },
    { name: "Amit", from: "Warehouse Operative", to: "Admin Support", badge: "Moved to Admin", time: "6m", quote: "The work was steady on the shift, the targets were clear, and I knew what was expected. After a few weeks the client asked to keep me on permanently. Shifts stayed consistent.", tags: ["Career Change", "Admin"] },
    { name: "Rahul", from: "Van Driver", to: "Preferred Driver", badge: "Preferred Driver status", time: "Ongoing", quote: "I started covering different shifts, then it turned into the same client most weeks. It's easier when you know the site, the rules and the route. Shifts stayed consistent.", tags: ["Driving", "Consistent Work"] },
    { name: "Deepak", from: "Warehouse Picker", to: "Permanent Operative", badge: "Permanent in 8 weeks", time: "8w", quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.", tags: ["Permanent", "Fast-Moving Operation"] },
    { name: "Emmanuel", from: "Picker", to: "VNA Driver", badge: "Trained as VNA Driver", time: "14w", quote: "The training was done properly, not rushed. Once I passed, I moved onto FLT duties full-time and it felt like a proper step up. Shifts stayed consistent.", tags: ["FLT Training", "Upskilled"] },
    { name: "Jamie", from: "Picker", to: "FLT Driver (Reach)", badge: "Reach truck specialist", time: "10w", quote: "I was already confident on FLT, but the placement matched my experience. After a short time I was trusted with tighter aisles and higher value stock. Shifts stayed consistent.", tags: ["FLT", "Pay Increase"] },
    { name: "Alina", from: "Agency Packer", to: "Permanent Contract", badge: "Permanent in 12 weeks", time: "12w", quote: "No one over-sold the job. I knew the hours, breaks and pace before I started, and that helped me settle in. It turned into a longer-term role quickly.", tags: ["Permanent", "Packing"] },
    { name: "Joanna", from: "Picker", to: "VNA Driver", badge: "VNA certified", time: "14w", quote: "The training was done properly, not rushed. Once I passed, I moved onto FLT duties full-time and it felt like a proper step up. Shifts stayed consistent.", tags: ["FLT Training", "Permanent"] },
    { name: "Ryan", from: "Agency Packer", to: "Permanent Contract", badge: "Long-standing placement", time: "12w", quote: "No one over-sold the job. I knew the hours, breaks and pace before I started, and that helped me settle in. It turned into a longer-term role quickly.", tags: ["Permanent", "Team Lead"] },
    { name: "Sara", from: "Class 2 Driver", to: "Long-standing Placement", badge: "Consistent weekly work", time: "Ongoing", quote: "The job is busy, but it's consistent. Good planning, realistic times, and support if anything changes on the day meant I kept getting booked back in. Shifts stayed consistent.", tags: ["Driving", "HGV Class 2"] },
    { name: "Jordan", from: "Picker", to: "Dispatch Coordinator", badge: "Promoted to Coordinator", time: "4m", quote: "The work was steady on the shift, the targets were clear, and I knew what was expected. After a few weeks the client asked to keep me on permanently. Shifts stayed consistent.", tags: ["Promotion", "Coordinator"] }
];

function SuccessHero() {
    return (
        <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-24">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            </div>
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />
                    <span className="text-sm font-semibold text-teal-4">Success Stories</span>
                </motion.div>
                <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Real People,<br />Real Results</motion.h1>
                <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>From temp to permanent. From picker to team leader. Real journeys from real workers.</motion.p>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
        </section>
    );
}

function StoriesGrid() {
    return (
        <section className="pb-16 bg-navy-700">
            <div className="mx-auto max-w-[1140px] px-6">
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {stories.map((story, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card rounded-2xl p-8 hover:border-teal-5/30 transition-all duration-300 hover:teal-glow-sm group flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-semibold uppercase tracking-widest"><span className="w-1.5 h-1.5 rounded-full bg-teal-5" />{story.badge}</span>
                                <span className="text-[#8B98AB]/30 text-[10px] font-semibold uppercase tracking-widest">{story.time}</span>
                            </div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-full bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-[#00A99D] group-hover:text-white transition-all shrink-0"><IconUser size={20} /></div>
                                <div><h3 className="text-white text-lg font-semibold tracking-tight">{story.name}</h3><div className="flex items-center gap-2 text-[#8B98AB]/50 text-xs font-semibold"><span>{story.from}</span><IconArrowUp size={10} className="text-teal-5 rotate-90" /><span className="text-teal-4">{story.to}</span></div></div>
                            </div>
                            <div className="relative flex-grow mb-6"><IconQuote size={16} className="text-white/10 absolute -top-1 -left-1" /><p className="text-[#8B98AB] text-sm leading-relaxed font-medium pl-4 italic">&ldquo;{story.quote}&rdquo;</p></div>
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">{story.tags.map((tag, j) => <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest">{tag}</span>)}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function AndMoreSection() {
    return (
        <section className="py-20 bg-navy-700">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-12 border-teal-5/20 bg-gradient-to-br from-teal-5/10 to-transparent">
                    <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-4">And Many More...</h3>
                    <p className="text-[#8B98AB] text-lg font-medium">These are just a few of the thousands of workers we&apos;ve helped find consistent work.</p>
                </motion.div>
            </div>
        </section>
    );
}

function EmployerBanner() {
    return (
        <section className="py-16 bg-[#0d111a]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="glass-card rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div><h4 className="text-white text-2xl font-semibold mb-2">Looking for Reliable Workers Like These?</h4><p className="text-[#8B98AB] font-medium">We supply the workers who show up, hit targets, and stick around.</p></div>
                    <Link href="/contact" className="shrink-0 px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center gap-3">Get Started <IconArrowRight size={18} /></Link>
                </div>
            </div>
        </section>
    );
}

export default function SuccessStoriesPage() {
    return (
        <main className="bg-navy-900 min-h-screen">
            <Navbar />
            <SuccessHero />
            <StoriesGrid />
            <AndMoreSection />
            <EmployerBanner />
            <CtaBanner badge="YOUR TURN" title="Ready to write your" titleHighlight="success story?" subtitle="Join thousands of workers who found consistent shifts, fair pay, and real career progression with Accept." primaryButtonText="Register for Work" secondaryButtonText="Browse Current Jobs" primaryButtonHref="/registration" secondaryButtonHref="/jobs" />
            <Footer />
        </main>
    );
}
