"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconSearch, 
    IconChevronRight, 
    IconArrowLeft, 
    IconArrowRight 
} from '@tabler/icons-react';

// ─── Placeholder Blog Data ──────────────────────────────────────────────

const blogPosts = [
    {
        title: "Coventry Agencies Recruitment: Find Your Talent - Accept Recruitment",
        categories: ["Coventry", "Employer Guides"],
        slug: "coventry-agencies-recruitment"
    },
    {
        title: "Coventry Warehouse Recruitment Specialists - Accept Recruitment",
        categories: ["Coventry", "Warehouse & Industrial"],
        slug: "coventry-warehouse-recruitment-specialists"
    },
    {
        title: "Delivery Driver Jobs Tamworth | Van & Multi-Drop Roles",
        categories: ["Tamworth", "Driving & Logistics"],
        slug: "delivery-driver-jobs-tamworth"
    },
    {
        title: "Leicester Jobs: Temporary to Permanent Career Paths",
        categories: ["Leicester", "Career Guides"],
        slug: "leicester-jobs-career-paths"
    },
    {
        title: "Supply Chain Resilience in the Midlands - Industry Insight",
        categories: ["Midlands", "Industry News"],
        slug: "supply-chain-resilience-midlands"
    },
    {
        title: "How to Ace Your Warehouse Interview",
        categories: ["Career Guides", "Warehouse & Industrial"],
        slug: "ace-warehouse-interview"
    },
    {
        title: "Why Retention Matters More Than Hiring in 2024",
        categories: ["Employer Guides", "HR Tips"],
        slug: "retention-matters-2024"
    },
    {
        title: "The Future of Logistics Automation",
        categories: ["Industry News", "Automation"],
        slug: "future-of-logistics-automation"
    },
    {
        title: "Midlands Manufacturing Hub: A Growth Story",
        categories: ["Midlands", "Manufacturing"],
        slug: "midlands-manufacturing-growth"
    },
    {
        title: "Essential Compliance in Temporary Staffing",
        categories: ["Compliance", "Employer Guides"],
        slug: "essential-compliance-staffing"
    },
    {
        title: "Top 5 Benefits of Working and Living in Coventry",
        categories: ["Coventry", "Career Guides"],
        slug: "benefits-working-coventry"
    },
    {
        title: "Recruiting for Peak Season: A Guide for Employers",
        categories: ["Employer Guides", "Peak Season"],
        slug: "recruiting-peak-season"
    }
];

const categories = [
    "All Topics",
    "Career Guides",
    "Employer Guides",
    "Warehouse & Industrial",
    "Driving & Logistics",
    "Industry News"
];

const locations = [
    "Coventry",
    "Leicester",
    "Tamworth",
    "Midlands"
];

// ─── Components ──────────────────────────────────────────────────────────

function BlogCard({ title, categories, slug }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white/[0.03] border border-white/5 rounded-[32px] p-8 md:p-10 transition-all duration-300 hover:border-teal-5/30 hover:bg-white/[0.05] shadow-xl h-full flex flex-col"
        >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-[10px] font-black uppercase tracking-widest text-teal-4">
                        {cat}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl md:text-2xl font-bold mb-8 tracking-tight leading-tight group-hover:text-teal-5 transition-colors flex-grow">
                {title}
            </h3>

            {/* Link */}
            <div className="flex items-center gap-2 text-teal-5 text-sm font-black uppercase tracking-widest mt-auto pt-4 border-t border-white/5">
                <span>Read Article</span>
                <IconChevronRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
            </div>
        </motion.div>
    );
}

// ─── Sections ──────────────────────────────────────────────────────────

function BlogHero() {
    return (
        <section className="relative pt-40 pb-20 bg-[#0D1520] overflow-hidden text-center">
            {/* Background Grain/Fog */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">RECRUITMENT INSIGHTS</h2>
                    <h1 className="text-white text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                        Knowledge Hub
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Expert guidance on job searching, recruitment, and career development in the Midlands.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function SearchAndFilterSection() {
    const [activeCategory, setActiveCategory] = useState("All Topics");
    const [activeLocation, setActiveLocation] = useState(null);

    return (
        <section className="pb-16 bg-[#0D1520]">
            <div className="mx-auto max-w-5xl px-6">
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-16">
                    <IconSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
                    <input 
                        type="text" 
                        placeholder="Search articles..."
                        className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-teal-5/50 transition-all text-lg font-medium"
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all
                                    ${activeCategory === cat 
                                        ? "bg-teal-5 text-black shadow-[0_0_20px_rgba(20,184,166,0.3)]" 
                                        : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {locations.map((loc, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveLocation(loc === activeLocation ? null : loc)}
                                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all
                                    ${activeLocation === loc 
                                        ? "border-teal-5 text-teal-4 bg-teal-5/5" 
                                        : "border-white/10 text-white/30 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
                        Showing 1-12 of 97 articles
                    </p>
                </div>
            </div>
        </section>
    );
}

function BlogGridSection() {
    return (
        <section className="pb-32 bg-[#0D1520]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <BlogCard key={i} {...post} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-24 flex items-center justify-center gap-3">
                    <button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <IconArrowLeft size={20} />
                    </button>
                    {[1, 2, 3, '...', 9].map((p, i) => (
                        <button 
                            key={i}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all
                                ${p === 1 ? 'bg-teal-5 text-black' : 'text-white/40 hover:bg-white/5'}`}
                        >
                            {p}
                        </button>
                    ))}
                    <button className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <IconArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function BottomCTA() {
    return (
        <section className="py-24 bg-teal-5 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

             <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
                 <h2 className="text-black text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.95]">
                     Ready to Find Your Next Role?
                 </h2>
                 <p className="text-black/60 text-xl font-bold max-w-2xl mx-auto mb-12">
                     Accept Recruitment specializes in warehouse, logistics, and industrial recruitment across the Midlands.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <button className="w-full md:w-auto px-12 py-6 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Search Jobs →
                     </button>
                     <button className="w-full md:w-auto px-12 py-6 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Register Now
                     </button>
                 </div>
             </div>
        </section>
    );
}

export default function BlogListingPage() {
    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <BlogHero />
            <SearchAndFilterSection />
            <BlogGridSection />
            <BottomCTA />
            <Footer />
        </main>
    );
}
