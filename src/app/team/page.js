"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconBolt, 
    IconQuote, 
    IconHeart, 
    IconMapPin, 
    IconPhone, 
    IconAward,
    IconStarFilled,
    IconArrowRight
} from '@tabler/icons-react';

// ─── Team Data ──────────────────────────────────────────────────────────

const teamMembers = [
    {
        name: "Mark Pearce",
        role: "Managing Director",
        location: "Leicester",
        quote: "Big sports fan - you'll find me on the golf course or cricket pitch when I'm not filling shifts!",
        superpower: "Turning chaos into order (and dad jokes into groans)",
        motto: "Every storm eventually gives way to a beautiful rainbow",
        loves: ["Golf", "Cricket", "Building Empires"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp" // Placeholder for Disney version
    },
    {
        name: "Monika Loj",
        role: "Operations Director",
        location: "Leicester",
        quote: "I keep the whole operation running smoothly - think of me as the engine room!",
        superpower: "Making 100 temps appear out of thin air",
        motto: "Excellence in execution",
        loves: ["Organization", "Coffee", "Efficiency"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Kevin Highet",
        role: "Commercial Director",
        location: "Leicester",
        quote: "I'm the numbers guy who makes sure we're not just busy, but profitable!",
        superpower: "Turning opportunities into partnerships",
        motto: "Commercial success comes from smart decisions",
        loves: ["Strategy", "Growth", "Good Data"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    },
    {
        name: "Elly Clow",
        role: "Head of Sales",
        location: "Leicester",
        quote: "I lead our sales team and make sure we're winning the right clients - not just any clients!",
        superpower: "Building relationships that last",
        motto: "Sales is about helping, not selling",
        loves: ["New Business", "Networking", "Winning"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Agnieszka Jasinska",
        role: "Head of Operations",
        location: "Leicester",
        quote: "I manage the big accounts and make sure everything runs like clockwork!",
        superpower: "Keeping complex operations simple",
        motto: "Consistency is key",
        loves: ["Problem Solving", "Big Logistics", "Sunsets"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    },
    {
        name: "Natalia Wielgosz",
        role: "Head of Accounts & Payroll",
        location: "Leicester",
        quote: "I make sure everyone gets paid on time, every time. It's what I do!",
        superpower: "Friday payroll runs smoother than butter",
        motto: "Accuracy matters",
        loves: ["Spreadsheets", "Smooth Fridays", "Accuracy"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Peter Czinderi",
        role: "IT Manager",
        location: "Leicester",
        quote: "I keep all our systems running and make sure technology works FOR us, not against us!",
        superpower: "Making tech simple",
        motto: "If it's not automated, it should be",
        loves: ["Automation", "Latest Gadgets", "Zero Downtime"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    },
    {
        name: "Monika Cyrson",
        role: "Resourcing Manager",
        location: "Leicester",
        quote: "I find the right people for the right roles. It's like matchmaking, but for work!",
        superpower: "Knowing exactly who to call",
        motto: "The right person in the right place",
        loves: ["Interviews", "Finding Talent", "Career Stories"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Magdalena Walker",
        role: "Branch Manager",
        location: "Leicester",
        quote: "I run our branch like a well-oiled machine. Everyone knows where they stand!",
        superpower: "Keeping everyone on track",
        motto: "Lead by example",
        loves: ["Leadership", "Teamwork", "Morning Huddles"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    },
    {
        name: "Radoslaw Plewa",
        role: "Managed Services Manager",
        location: "Leicester",
        quote: "I manage our biggest client accounts and make sure they get exactly what they need!",
        superpower: "Calm under pressure",
        motto: "Consistency wins clients",
        loves: ["Big Projects", "Client Satisfaction", "Resilience"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Jamie Ellis",
        role: "Marketing Team Leader",
        location: "Leicester",
        quote: "Started as a Digital Marketing Apprentice in 2020 and now lead all our marketing efforts!",
        superpower: "Crafting social content that actually engages people",
        motto: "Excellence through creativity",
        loves: ["Branding", "Creative Ads", "Analytics"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    },
    {
        name: "Maja Wojtaszko",
        role: "Senior Driving Account Manager",
        location: "Bristol",
        quote: "I specialize in driver recruitment - from HGV to delivery, I know the roads!",
        superpower: "Finding drivers who actually show up",
        motto: "Keep on trucking",
        loves: ["Driving Logistics", "Road Trips", "Happy Drivers"],
        image: "/team-2.webp",
        disneyImage: "/team-2.webp"
    },
    {
        name: "Joanna Antecka",
        role: "Branch Manager",
        location: "Leicester",
        quote: "I keep our branch running smoothly and make sure every client and candidate feels valued!",
        superpower: "Making everyone feel heard",
        motto: "People make the difference",
        loves: ["Interviews", "Community", "Branch Growth"],
        image: "/team-1.webp",
        disneyImage: "/team-1.webp"
    }
];

// ─── Components ──────────────────────────────────────────────────────────

function TeamCard({ member }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-[#161B28] border border-white/5 rounded-[40px] p-8 overflow-hidden hover:border-teal-5/30 transition-all duration-500 shadow-xl"
        >
            {/* Image Area */}
            <div className="relative aspect-square rounded-[32px] overflow-hidden mb-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isHovered ? 'disney' : 'real'}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={isHovered ? member.disneyImage : member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </motion.div>
                </AnimatePresence>
                
                {/* Location Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                    <IconMapPin size={14} className="text-teal-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{member.location}</span>
                </div>
            </div>

            {/* Header Info */}
            <div className="mb-6">
                <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-teal-5 transition-colors">{member.name}</h3>
                <div className="text-teal-4 text-xs font-black uppercase tracking-widest mb-4">{member.role}</div>
                <p className="text-white/40 text-sm italic leading-relaxed font-medium">
                    &quot;{member.quote}&quot;
                </p>
            </div>

            {/* Content Details */}
            <div className="space-y-6 pt-6 border-t border-white/5">
                <div>
                    <div className="flex items-center gap-2 text-teal-5 mb-2">
                        <IconBolt size={14} className="shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">SUPERPOWER</span>
                    </div>
                    <p className="text-white/80 text-sm font-bold leading-snug">{member.superpower}</p>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-teal-5 mb-2">
                        <IconQuote size={14} className="rotate-180 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">MOTTO</span>
                    </div>
                    <p className="text-white/60 text-sm italic font-medium leading-snug">&quot;{member.motto}&quot;</p>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-teal-5 mb-3">
                        <IconHeart size={14} className="shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">LOVES</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {member.loves.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/50 group-hover:border-teal-5/20 group-hover:text-teal-4 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function CultureCard({ icon, title, text }) {
    return (
        <div className="bg-[#161B28] border border-white/5 rounded-[40px] p-10 md:p-12 hover:border-teal-5/20 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:scale-110 group-hover:bg-teal-5 group-hover:text-black transition-all">
                {icon}
            </div>
            <h3 className="text-white text-2xl font-bold mb-6 tracking-tight">{title}</h3>
            <p className="text-white/40 text-lg leading-relaxed font-medium">{text}</p>
        </div>
    );
}

// ─── Main Page Sections ──────────────────────────────────────────────────

function TeamHero() {
    return (
        <section className="relative pt-40 pb-32 bg-[#0D1520] overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-5/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="mx-auto max-w-285 px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE SQUAD</h2>
                    <h1 className="text-white text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
                        Meet the Humans<br />Behind the Headsets
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium mb-6">
                        We&apos;re not just recruiters. We&apos;re people who actually give a shift about doing this right. 
                        Hover over our photos to see our Disney alter-egos!
                    </p>
                    <p className="text-white/30 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-medium mb-12 italic">
                        No voicemail hell. No &quot;your call is important to us&quot; nonsense. Just real people who know your name and actually care about solving your problem.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/50 text-sm font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                             <IconStarFilled size={16} className="text-teal-5" />
                             <span>Real Humans</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
                        <div className="flex items-center gap-2">
                             <IconPhone size={16} className="text-teal-5" />
                             <span>Direct Access</span>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
                        <div className="flex items-center gap-2">
                             <IconAward size={16} className="text-teal-5" />
                             <span>Expert Matching</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TeamGridSection() {
    return (
        <section className="py-24 bg-[#0D1520]">
            <div className="mx-auto max-w-[1400px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member, i) => (
                        <TeamCard key={i} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CultureSection() {
    const culture = [
        {
            icon: <IconAward size={32} />,
            title: "No Suits Required",
            text: "We're professional where it counts (filling shifts, compliance, paying people). We're casual everywhere else. Jeans? Fine. Trainers? Great. Personality? Essential."
        },
        {
            icon: <IconPhone size={32} />,
            title: "We Actually Answer",
            text: "No automated phone trees. No \"press 1 for this, 2 for that.\" Real humans pick up the phone. Wild concept, we know. Direct dial, direct access."
        },
        {
            icon: <IconHeart size={32} />,
            title: "Give Back Mode",
            text: "Every single person here participates in our Rainbows Hospice partnership. It's not a \"company thing\" - it's an everyone thing. We care about our community."
        }
    ];

    return (
        <section className="py-32 bg-[#0D1520] border-t border-white/5 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-24">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">CULTURE</h2>
                    <h3 className="text-white text-5xl md:text-7xl font-bold tracking-tight">What It&apos;s Actually Like<br />to Work Here</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {culture.map((c, i) => (
                        <CultureCard key={i} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TrustedSection() {
    return (
        <section className="py-24 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-teal-5/5 blur-[120px] pointer-events-none" />
                    
                    <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Trusted by 1500+ People</h2>
                    <p className="text-white/40 text-lg mb-10 font-medium tracking-tight">See what our clients and candidates say about us</p>
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 text-4xl font-black text-white">
                            <span>4.8</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <IconStarFilled key={i} size={24} className="text-[#FFD700]" />
                                ))}
                            </div>
                        </div>
                        <a 
                            href="#" 
                            className="inline-flex items-center gap-2 text-teal-4 font-black tracking-widest text-sm uppercase hover:text-white transition-colors border-b border-teal-5/30 pb-1"
                        >
                            Read our 1500+ Google Reviews 
                            <IconArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function JoinCTA() {
    return (
        <section className="py-40 bg-[#0D1520] border-t border-white/5 text-center">
            <div className="mx-auto max-w-4xl px-6">
                <h2 className="text-white text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">Join the Squad</h2>
                <p className="text-white/40 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    We&apos;re always looking for good humans who want to do recruitment the right way. If you&apos;re tired of corporate nonsense, let&apos;s talk.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="w-full md:w-auto px-12 py-6 rounded-2xl bg-teal-5 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl hover:scale-105">
                        Work With Us →
                    </button>
                    <button className="w-full md:w-auto px-12 py-6 rounded-2xl border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                        Contact HR
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function OurTeamPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <TeamHero />
            <TeamGridSection />
            <CultureSection />
            <TrustedSection />
            <JoinCTA />
            <Footer />
        </main>
    );
}
