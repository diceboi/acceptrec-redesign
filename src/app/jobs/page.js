"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { AnnouncementBanner } from '@/components/sections/AnnouncementBanner';
import { 
    IconBrandWhatsapp,
    IconMapPin,
    IconClock,
    IconCurrencyPound,
    IconUsers,
    IconCheck,
    IconFilter,
    IconChevronDown
} from '@tabler/icons-react';

// ─── Job Data ──────────────────────────────────────────────────────────

const jobs = [
    {
        title: "Class 1 Shunter Driver",
        location: "Leicester",
        pay: "£18.40/hour",
        shift: "Days",
        positions: 2,
        requirements: [
            "Valid Class 1 license",
            "Shunting experience essential",
            "Valid CPC and Tacho card"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 18.40
    },
    {
        title: "Class 1 Driver",
        location: "Leicester",
        pay: "£22.00/hour",
        shift: "Days",
        positions: 5,
        requirements: [
            "Valid Class 1 (Category C+E) license",
            "Valid CPC and Tacho card",
            "Good knowledge of UK roads"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 22.00
    },
    {
        title: "Counterbalance Forklift Driver",
        location: "Leicester",
        pay: "£13.75/hour",
        shift: "Days",
        positions: 3,
        requirements: [
            "Valid counterbalance forklift license",
            "Previous warehouse experience",
            "Reliable and experienced"
        ],
        whatsapp: "447495995406",
        category: "Warehouse",
        payRate: 13.75
    },
    {
        title: "Production Operative",
        location: "Leicester",
        pay: "£14.00/hour",
        shift: "Days",
        positions: 6,
        requirements: [
            "Previous production experience preferred",
            "Attention to detail",
            "Able to work in a team"
        ],
        whatsapp: "447495995406",
        category: "Production",
        payRate: 14.00
    },
    {
        title: "Factory Operative",
        location: "Leicester",
        pay: "£13.02/hour",
        shift: "Days",
        positions: 4,
        requirements: [
            "Manufacturing environment experience preferred",
            "Good timekeeping",
            "Able to work in a team"
        ],
        whatsapp: "447495995406",
        category: "Production",
        payRate: 13.02
    },
    {
        title: "Warehouse Operative",
        location: "Leicester",
        pay: "£12.21/hour",
        shift: "Days",
        positions: 15,
        requirements: [
            "Previous warehouse experience preferred",
            "Able to work in fast-paced environment",
            "Good timekeeping essential"
        ],
        whatsapp: "447495995406",
        category: "Warehouse",
        payRate: 12.21
    },
    {
        title: "Warehouse Operative",
        location: "Tamworth",
        pay: "£12.21/hour",
        shift: "Days",
        positions: 8,
        requirements: [
            "Previous warehouse experience preferred",
            "Able to work in fast-paced environment"
        ],
        whatsapp: "447932787550",
        category: "Warehouse",
        payRate: 12.21
    },
    {
        title: "Class 1 Driver",
        location: "Leicester",
        pay: "£17.00/hour",
        shift: "Days",
        positions: 3,
        requirements: [
            "Valid Class 1 (Category C+E) license",
            "Valid CPC and Tacho card"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 17.00
    },
    {
        title: "Class 2 Driver",
        location: "Leicester",
        pay: "£14.95/hour",
        shift: "Days",
        positions: 3,
        requirements: [
            "Valid Class 2 (Category C) license",
            "Valid CPC and Tacho card"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 14.95
    },
    {
        title: "Class 2 Driver",
        location: "Leicester",
        pay: "£15.50/hour",
        shift: "Days",
        positions: 4,
        requirements: [
            "Valid Class 2 (Category C) license",
            "Valid CPC and Tacho card",
            "Reliable and experienced"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 15.50
    },
    {
        title: "Class 2 Driver",
        location: "Leicester",
        pay: "£14.50/hour",
        shift: "Days",
        positions: 2,
        requirements: [
            "Valid Class 2 (Category C) license",
            "Valid CPC and Tacho card",
            "Experience preferred"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 14.50
    },
    {
        title: "Class 2 Driver",
        location: "Leicester",
        pay: "£14.48/hour",
        shift: "Days",
        positions: 5,
        requirements: [
            "Valid Class 2 (Category C) license",
            "Valid CPC and Tacho card"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 14.48
    },
    {
        title: "Van Driver",
        location: "Leicester",
        pay: "£12.21/hour",
        shift: "Days",
        positions: 3,
        requirements: [
            "Valid UK driving license",
            "Clean driving record preferred"
        ],
        whatsapp: "447495995406",
        category: "Driving",
        payRate: 12.21
    },
    {
        title: "Warehouse Operative (Night Shift)",
        location: "Leicester",
        pay: "£13.00/hour",
        shift: "Nights",
        positions: 10,
        requirements: [
            "Previous warehouse experience preferred",
            "Able to work nights",
            "Good timekeeping essential"
        ],
        whatsapp: "447495995406",
        category: "Warehouse",
        payRate: 13.00
    }
];

const locations = ["All", "Leicester", "Coventry", "Tamworth"];
const categories = ["All", "Warehouse", "Production", "Driving", "Food Production"];

// ─── Components ────────────────────────────────────────────────────────

function JobCard({ job, index }) {
    const whatsappMsg = encodeURIComponent(
        `Hi Accept Recruitment ${job.location}! I'm interested in applying for:\n\nJob: ${job.title}\nLocation: ${job.location}\nPay: ${job.pay}\nShift: ${job.shift}\nPositions: ${job.positions}\n\nCan you tell me more about this role?`
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: index * 0.03 }}
            className="bg-[#161B28] border border-white/5 rounded-[32px] p-8 hover:border-teal-5/30 transition-all duration-300 group flex flex-col"
        >
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-white text-xl font-bold tracking-tight mb-3 group-hover:text-teal-4 transition-colors">
                    {job.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-white/50 text-xs font-bold uppercase tracking-widest">
                        <IconMapPin size={14} className="text-teal-5" />
                        {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/50 text-xs font-bold uppercase tracking-widest">
                        <IconClock size={14} className="text-teal-5" />
                        {job.shift}
                    </span>
                </div>
            </div>

            {/* Pay & Positions */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <IconCurrencyPound size={18} className="text-teal-5" />
                    <span className="text-white text-2xl font-black tracking-tight">{job.pay.replace('£', '')}</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <IconUsers size={16} className="text-white/30" />
                    <span className="text-white/40 text-sm font-bold">{job.positions} {job.positions === 1 ? 'position' : 'positions'}</span>
                </div>
            </div>

            {/* Requirements */}
            <div className="space-y-2.5 mb-8 flex-grow">
                {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <IconCheck size={16} className="text-teal-5 shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-white/50 text-sm font-medium">{req}</span>
                    </div>
                ))}
            </div>

            {/* Apply Button */}
            <a
                href={`https://wa.me/${job.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-teal-5 text-black font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-white transition-all shadow-lg shadow-teal-5/10 mt-auto"
            >
                <IconBrandWhatsapp size={18} />
                Apply via WhatsApp
            </a>
        </motion.div>
    );
}

// ─── Sections ────────────────────────────────────────────────────────

function JobsHero() {
    return (
        <section className="relative pt-48 pb-12 bg-[#0D1520] overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-teal-5/[0.03] to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-4xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">FIND WORK</h2>
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.95]">
                        Current Vacancies
                    </h1>
                    <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                        Browse live vacancies across Leicester, Coventry, and Tamworth. Immediate starts available.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function FilterBar({ location, setLocation, category, setCategory, minPay, setMinPay, jobCount }) {
    return (
        <section className="pb-12 bg-[#0D1520]">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#161B28] border border-white/5 rounded-[32px] p-6 md:p-8"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex items-center gap-3 text-white/30 shrink-0">
                            <IconFilter size={20} className="text-teal-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Filter</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 flex-grow w-full">
                            {/* Location filter */}
                            <div className="relative flex-1">
                                <label className="block text-white/30 text-[10px] font-black uppercase tracking-widest mb-2">Location</label>
                                <div className="relative">
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold focus:border-teal-5/50 focus:outline-none transition-colors cursor-pointer"
                                    >
                                        {locations.map(l => (
                                            <option key={l} value={l} className="bg-[#161B28] text-white">{l}</option>
                                        ))}
                                    </select>
                                    <IconChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                                </div>
                            </div>

                            {/* Category filter */}
                            <div className="relative flex-1">
                                <label className="block text-white/30 text-[10px] font-black uppercase tracking-widest mb-2">Role Type</label>
                                <div className="relative">
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold focus:border-teal-5/50 focus:outline-none transition-colors cursor-pointer"
                                    >
                                        {categories.map(c => (
                                            <option key={c} value={c} className="bg-[#161B28] text-white">{c === 'All' ? 'All Roles' : c}</option>
                                        ))}
                                    </select>
                                    <IconChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                                </div>
                            </div>

                            {/* Pay Rate slider */}
                            <div className="relative flex-1">
                                <label className="block text-white/30 text-[10px] font-black uppercase tracking-widest mb-2">
                                    Minimum Pay Rate: <span className="text-teal-4">£{minPay.toFixed(2)}/hr</span>
                                </label>
                                <div className="pt-2">
                                    <input
                                        type="range"
                                        min={12}
                                        max={22}
                                        step={0.50}
                                        value={minPay}
                                        onChange={(e) => setMinPay(parseFloat(e.target.value))}
                                        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-teal-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-5 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-teal-5/30 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-teal-5 [&::-moz-range-thumb]:border-0"
                                    />
                                    <div className="flex justify-between mt-2">
                                        <span className="text-white/20 text-[10px] font-bold">£12/hr</span>
                                        <span className="text-white/20 text-[10px] font-bold">£22/hr</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job count */}
                        <div className="shrink-0 px-5 py-3 rounded-xl bg-teal-5/10 border border-teal-5/20">
                            <span className="text-teal-4 text-sm font-black">{jobCount}</span>
                            <span className="text-white/40 text-sm font-bold ml-1.5">{jobCount === 1 ? 'job matches' : 'jobs match'}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function JobGrid({ filteredJobs }) {
    return (
        <section className="pb-32 bg-[#0D1520]">
            <div className="mx-auto max-w-7xl px-6">
                <AnimatePresence mode="popLayout">
                    {filteredJobs.length > 0 ? (
                        <motion.div 
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredJobs.map((job, i) => (
                                <JobCard key={`${job.title}-${job.location}-${job.pay}-${i}`} job={job} index={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-white/30 text-xl font-bold mb-4">No jobs match your filters</p>
                            <p className="text-white/20 font-medium">Try adjusting your location or role type filter.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function RegisterCTA() {
    return (
        <section className="py-32 bg-teal-5">
             <div className="mx-auto max-w-5xl px-6 text-center">
                 <h2 className="text-black text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">
                     Can&apos;t Find What<br />You&apos;re Looking For?
                 </h2>
                 <p className="text-black/60 text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-16">
                     Register with us and we&apos;ll contact you when the right role comes in. Jobs get filled fast — don&apos;t miss out.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <a href="https://accept.iqxanywhere.net/xregister" className="w-full md:w-auto px-12 py-7 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-2xl">
                         Register Now
                     </a>
                     <Link href="/contact" className="w-full md:w-auto px-12 py-7 rounded-2xl border border-black/20 text-black font-black uppercase tracking-widest text-xs hover:bg-black/5 transition-all">
                         Message Us
                     </Link>
                 </div>
             </div>
        </section>
    );
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function JobsPage() {
    const [location, setLocation] = useState("All");
    const [category, setCategory] = useState("All");
    const [minPay, setMinPay] = useState(12);

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchLocation = location === "All" || job.location === location;
            const matchCategory = category === "All" || job.category === category;
            const matchPay = job.payRate >= minPay;
            return matchLocation && matchCategory && matchPay;
        });
    }, [location, category, minPay]);

    return (
        <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
            <AnnouncementBanner />
            <Navbar />
            <JobsHero />
            <FilterBar 
                location={location} 
                setLocation={setLocation} 
                category={category} 
                setCategory={setCategory} 
                minPay={minPay}
                setMinPay={setMinPay}
                jobCount={filteredJobs.length} 
            />
            <JobGrid filteredJobs={filteredJobs} />
            <RegisterCTA />
            <Footer />
        </main>
    );
}
