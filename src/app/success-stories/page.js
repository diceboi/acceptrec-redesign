"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconArrowRight,
    IconArrowUp,
    IconUser,
    IconQuote
} from '@tabler/icons-react';

// ─── Data ──────────────────────────────────────────────────────────

const stories = [
    {
        name: "Adam",
        from: "Warehouse Picker",
        to: "Permanent Operative",
        badge: "Permanent in 8 weeks",
        time: "8w",
        quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.",
        tags: ["Permanent", "Warehouse"]
    },
    {
        name: "Anna",
        from: "Food Production Operative",
        to: "Permanent Contract",
        badge: "Permanent contract",
        time: "6m",
        quote: "I started on the line and the routine was explained properly, including hygiene and checks. After a few months I was asked to step up as a permanent employee. Thank you so much Accept!",
        tags: ["Permanent", "Food Production"]
    },
    {
        name: "Hannah",
        from: "Warehouse Operative",
        to: "Stock Control",
        badge: "Promoted to Stock Control",
        time: "5m",
        quote: "I started on basic warehouse work and got shown things properly. Turning up on time and getting the job done meant I was trusted with more responsibility.",
        tags: ["Promotion", "Warehouse"]
    },
    {
        name: "Kasia",
        from: "Warehouse Picker",
        to: "Permanent Operative",
        badge: "Permanent in 8 weeks",
        time: "8w",
        quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.",
        tags: ["Permanent", "Warehouse"]
    },
    {
        name: "Amit",
        from: "Warehouse Operative",
        to: "Admin Support",
        badge: "Moved to Admin",
        time: "6m",
        quote: "The work was steady on the shift, the targets were clear, and I knew what was expected. After a few weeks the client asked to keep me on permanently. Shifts stayed consistent.",
        tags: ["Career Change", "Admin"]
    },
    {
        name: "Rahul",
        from: "Van Driver",
        to: "Preferred Driver",
        badge: "Preferred Driver status",
        time: "Ongoing",
        quote: "I started covering different shifts, then it turned into the same client most weeks. It's easier when you know the site, the rules and the route. Shifts stayed consistent.",
        tags: ["Driving", "Consistent Work"]
    },
    {
        name: "Deepak",
        from: "Warehouse Picker",
        to: "Permanent Operative",
        badge: "Permanent in 8 weeks",
        time: "8w",
        quote: "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.",
        tags: ["Permanent", "Fast-Moving Operation"]
    },
    {
        name: "Emmanuel",
        from: "Picker",
        to: "VNA Driver",
        badge: "Trained as VNA Driver",
        time: "14w",
        quote: "The training was done properly, not rushed. Once I passed, I moved onto FLT duties full-time and it felt like a proper step up. Shifts stayed consistent.",
        tags: ["FLT Training", "Upskilled"]
    },
    {
        name: "Jamie",
        from: "Picker",
        to: "FLT Driver (Reach)",
        badge: "Reach truck specialist",
        time: "10w",
        quote: "I was already confident on FLT, but the placement matched my experience. After a short time I was trusted with tighter aisles and higher value stock. Shifts stayed consistent.",
        tags: ["FLT", "Pay Increase"]
    },
    {
        name: "Alina",
        from: "Agency Packer",
        to: "Permanent Contract",
        badge: "Permanent in 12 weeks",
        time: "12w",
        quote: "No one over-sold the job. I knew the hours, breaks and pace before I started, and that helped me settle in. It turned into a longer-term role quickly.",
        tags: ["Permanent", "Packing"]
    },
    {
        name: "Joanna",
        from: "Picker",
        to: "VNA Driver",
        badge: "VNA certified",
        time: "14w",
        quote: "The training was done properly, not rushed. Once I passed, I moved onto FLT duties full-time and it felt like a proper step up. Shifts stayed consistent.",
        tags: ["FLT Training", "Permanent"]
    },
    {
        name: "Ryan",
        from: "Agency Packer",
        to: "Permanent Contract",
        badge: "Long-standing placement",
        time: "12w",
        quote: "No one over-sold the job. I knew the hours, breaks and pace before I started, and that helped me settle in. It turned into a longer-term role quickly.",
        tags: ["Permanent", "Team Lead"]
    },
    {
        name: "Sara",
        from: "Class 2 Driver",
        to: "Long-standing Placement",
        badge: "Consistent weekly work",
        time: "Ongoing",
        quote: "The job is busy, but it's consistent. Good planning, realistic times, and support if anything changes on the day meant I kept getting booked back in. Shifts stayed consistent.",
        tags: ["Driving", "HGV Class 2"]
    },
    {
        name: "Jordan",
        from: "Picker",
        to: "Dispatch Coordinator",
        badge: "Promoted to Coordinator",
        time: "4m",
        quote: "The work was steady on the shift, the targets were clear, and I knew what was expected. After a few weeks the client asked to keep me on permanently. Shifts stayed consistent.",
        tags: ["Promotion", "Coordinator"]
    }
];

// ─── Sections ────────────────────────────────────────────────────────

function SuccessHero() {
    return (
        <section className="relative pt-48 pb-24 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">SUCCESS STORIES</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">
                        Real People,<br />Real Results
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        From temp to permanent. From picker to team leader. Real journeys from real workers.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function StoriesGrid() {
    return (
        <section className="pb-16 bg-[#0D1520]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                            whileHover={{ y: -6 }}
                            className="bg-[#161B28] border border-white/5 rounded-[32px] p-8 hover:border-teal-5/30 transition-all duration-300 group flex flex-col"
                        >
                            {/* Top badges */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-black uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-5" />
                                    {story.badge}
                                </span>
                                <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">{story.time}</span>
                            </div>

                            {/* Avatar + Name */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-full bg-teal-5/10 border border-teal-5/20 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-black transition-all shrink-0">
                                    <IconUser size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-bold tracking-tight">{story.name}</h3>
                                    <div className="flex items-center gap-2 text-white/30 text-xs font-bold">
                                        <span>{story.from}</span>
                                        <IconArrowUp size={10} className="text-teal-5 rotate-90" />
                                        <span className="text-teal-4">{story.to}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative flex-grow mb-6">
                                <IconQuote size={16} className="text-white/10 absolute -top-1 -left-1" />
                                <p className="text-white/40 text-sm leading-relaxed font-medium pl-4 italic">
                                    &ldquo;{story.quote}&rdquo;
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                                {story.tags.map((tag, j) => (
                                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AndMoreSection() {
    return (
        <section className="py-20 bg-[#0D1520]">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-teal-5/10 to-transparent border border-teal-5/20 rounded-[40px] p-12"
                >
                    <h3 className="text-white text-3xl md:text-4xl font-black tracking-tighter mb-4">
                        And Many More...
                    </h3>
                    <p className="text-white/40 text-lg font-medium">
                        These are just a few of the thousands of workers we&apos;ve helped find consistent work.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function EmployerBanner() {
    return (
        <section className="py-16 bg-[#0D1520] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="text-white text-2xl font-bold mb-2">Looking for Reliable Workers Like These?</h4>
                        <p className="text-white/40 font-medium">We supply the workers who show up, hit targets, and stick around.</p>
                    </div>
                    <Link href="/get-started" className="shrink-0 px-10 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center gap-3">
                        Get Started
                        <IconArrowRight size={18} />
                    </Link>
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
                     Ready to Write Your<br />Success Story?
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Join thousands of workers who found consistent shifts, fair pay, and real career progression with Accept.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <Link href="/registration" className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Register for Work →
                     </Link>
                     <Link href="/jobs" className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Browse Current Jobs
                     </Link>
                 </div>
             </div>
        </section>
    );
}

export default function SuccessStoriesPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <SuccessHero />
            <StoriesGrid />
            <AndMoreSection />
            <EmployerBanner />
            <BottomCTA />
            <Footer />
        </main>
    );
}
