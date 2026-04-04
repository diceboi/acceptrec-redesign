"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconCalculator,
  IconChartBar,
  IconTrendingUp,
  IconClock,
  IconUsers,
  IconAlertCircle,
  IconArrowRight,
  IconCheck,
  IconInfoCircle,
  IconPackage,
  IconTrophy
} from "@tabler/icons-react";

// ─── Input Slider Component ────────────────────────────────────────────────
function RoiSlider({ label, value, onChange, min, max, step = 1, prefix = "", suffix = "" }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm font-bold tracking-tight">
        <span className="text-white/60 uppercase text-[10px] tracking-widest">{label}</span>
        <span className="text-teal-5 bg-teal-5/10 px-3 py-1 rounded-lg border border-teal-5/20 min-w-20 text-center">
            {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-teal-5 hover:bg-white/10 transition-colors"
      />
    </div>
  );
}

// ─── Number Input Component ────────────────────────────────────────────────
function RoiInput({ label, value, onChange, prefix = "" }) {
    return (
        <div className="space-y-3">
             <span className="text-white/60 uppercase text-[10px] tracking-widest font-bold block">{label}</span>
             <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-bold">{prefix}</span>
                <input 
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseInt(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3.5 text-white font-bold focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5/40 transition-all"
                />
             </div>
        </div>
    );
}

// ─── Main Calculator Page ──────────────────────────────────────────────────
export default function RoiCalculator() {
  const [workers, setWorkers] = useState(20);
  const [hours, setHours] = useState(40);
  const [weeks, setWeeks] = useState(48);
  const [prodValue, setProdValue] = useState(50);
  const [trainingCost, setTrainingCost] = useState(500);
  const [mgmtHours, setMgmtHours] = useState(5);

  const results = useMemo(() => {
    const annualHours = workers * hours * weeks;
    
    // 1. Reduced No-Shows (6% improvement: 8% vs 2%)
    const noShowSavings = Math.round(annualHours * 0.06 * prodValue);
    
    // 2. Better Fill Rate (23% improvement: 98% vs 75%)
    const fillRateSavings = Math.round(annualHours * 0.23 * prodValue);
    
    // 3. Lower Turnover (17% monthly attrition reduction: 25% vs 8%)
    // (Workers * Monthly Attrition Reduction * 12 months) * Training Cost
    const turnoverSavings = Math.round((workers * 12 * 0.17) * trainingCost);
    
    // 4. Management Time Saved (50% reduction, assumed £25/hr rate)
    const mgmtTimeSavings = Math.round((mgmtHours * weeks) * 0.5 * 25);
    
    const totalSavings = noShowSavings + fillRateSavings + turnoverSavings + mgmtTimeSavings;
    const currentHiddenCosts = totalSavings * 1.15; // Inferred gap + inefficiencies

    return {
        annualHours,
        noShowSavings,
        fillRateSavings,
        turnoverSavings,
        mgmtTimeSavings,
        totalSavings,
        currentHiddenCosts
    };
  }, [workers, hours, weeks, prodValue, trainingCost, mgmtHours]);

  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center pt-40 pb-16 overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-5/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 mb-8 bg-teal-5/10 border border-teal-5/20 px-4 py-2 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-5">FINANCIAL ANALYZER</span>
            </motion.div>
            <motion.h1 
                className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[72px] mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
                Calculate Your <span className="text-teal-5">Hidden Staffing Costs.</span>
            </motion.h1>
            <motion.p 
                className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
                No-shows, unfilled shifts, and high turnover cost more than you think. See how much you could save with Accept Recruitment.
            </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-[#0d111a]">
        <div className="mx-auto max-w-[1140px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Inputs Sidebar */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="bg-[#161b28] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                            <IconCalculator className="text-teal-5" size={24} />
                            <h2 className="text-xl font-bold text-white tracking-tight">Your Staffing Details</h2>
                        </div>
                        
                        <div className="space-y-12">
                            <RoiSlider label="Workers Needed" value={workers} onChange={setWorkers} min={5} max={200} step={5} suffix=" Workers" />
                            <RoiSlider label="Average Hours / Week" value={hours} onChange={setHours} min={8} max={60} suffix=" Hours" />
                            <RoiSlider label="Staffing Weeks / Year" value={weeks} onChange={setWeeks} min={12} max={52} suffix=" Weeks" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                <RoiInput label="Prod. Value / Hour" value={prodValue} onChange={setProdValue} prefix="£" />
                                <RoiInput label="Training Cost / Worker" value={trainingCost} onChange={setTrainingCost} prefix="£" />
                            </div>

                            <RoiSlider label="Weekly Mgmt Issues" value={mgmtHours} onChange={setMgmtHours} min={1} max={20} suffix=" Hours" />
                        </div>
                    </div>

                    {/* Breakdown Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Reduced No-Shows", val: results.noShowSavings, desc: "Accept's 2% rate vs Industry 8% average", icon: IconTrophy },
                            { title: "Increased Fill Rate", val: results.fillRateSavings, desc: "Accept's 98% vs Industry 75% average", icon: IconTrendingUp },
                            { title: "Lower Attrition", val: results.turnoverSavings, desc: "Better worker retention saves training", icon: IconUsers },
                            { title: "Mgmt Time Freed", val: results.mgmtTimeSavings, desc: "50% less time chasing attendance", icon: IconClock },
                        ].map((item, i) => (
                            <div key={i} className="bg-[#161b28]/50 border border-white/5 rounded-3xl p-8 group hover:border-teal-5/20 transition-all duration-300">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4 mb-6 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                    <item.icon size={20} />
                                </div>
                                <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{item.title}</h3>
                                <div className="text-2xl font-bold text-white mb-2">£{item.val.toLocaleString()}</div>
                                <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Card (Sticky) */}
                <div className="lg:col-span-5 h-fit lg:sticky lg:top-32">
                    <motion.div 
                        className="bg-[#161b28] border border-teal-5/20 rounded-3xl shadow-2xl relative overflow-hidden"
                        initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 h-40 w-40 bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="p-10 md:p-12 relative z-10">
                            <h3 className="text-[11px] font-bold text-teal-5 uppercase tracking-[0.3em] mb-12">Potential Annual Savings</h3>
                            
                            <div className="mb-10">
                                <div className="text-white/30 text-sm font-bold uppercase tracking-tight mb-2">Total Estimated Benefit</div>
                                <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-4 flex items-baseline">
                                    <span className="text-4xl md:text-5xl mr-2">£</span>
                                    <AnimatedNumber value={results.totalSavings} />
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                     <motion.div 
                                        className="h-full bg-teal-5" 
                                        initial={{ width: 0 }} animate={{ width: "85%" }} 
                                        transition={{ duration: 1, ease: "easeOut" }}
                                     />
                                </div>
                            </div>

                            <div className="space-y-6 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/50 font-medium">Your current hidden costs:</span>
                                    <span className="text-red-400 font-bold">£{results.currentHiddenCosts.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/50 font-medium">Estimated ROI improvement:</span>
                                    <span className="text-teal-4 font-bold">+28.5%</span>
                                </div>
                            </div>

                            <Button variant="primary" size="lg" className="w-full mt-12 py-8 text-lg font-bold group">
                                Send Full Report <IconArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="mt-8 text-center text-white/30 text-[10px] uppercase font-bold leading-relaxed max-w-[240px] mx-auto">
                                *All calculations are based on standard industry metrics vs verified Accept Recruitment performance data.
                            </p>
                        </div>
                    </motion.div>

                    {/* Quick Highlights Card */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-[#161b28]/40 border border-white/5 rounded-3xl p-6 text-center">
                            <IconCheck className="text-teal-5 mx-auto mb-3" size={24} />
                            <div className="text-lg font-bold text-white">98%</div>
                            <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Fill Rate</div>
                        </div>
                        <div className="bg-[#161b28]/40 border border-white/5 rounded-3xl p-6 text-center">
                             <IconCheck className="text-teal-5 mx-auto mb-3" size={24} />
                             <div className="text-lg font-bold text-white">92%</div>
                             <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Retention</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24 bg-[#0d1522] border-t border-white/5">
        <div className="mx-auto max-w-[1140px] px-6 text-center mb-16">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Performance Gap</h2>
            <p className="text-white/40 text-lg">Why the standard agency model is costing you money.</p>
        </div>
        
        <div className="mx-auto max-w-[900px] px-6 space-y-12">
            {[
                { label: "Fill Rate", accept: "98%", industry: "75%", trend: "better" },
                { label: "No-Show Rate", accept: "2%", industry: "8%", trend: "worse" },
                { label: "Monthly Turnover", accept: "8%", industry: "25%", trend: "worse" },
            ].map((row, i) => (
                <div key={i} className="space-y-4">
                    <div className="flex justify-between font-bold text-sm uppercase tracking-widest px-1">
                        <span className="text-white/40">{row.label}</span>
                        <span className="text-teal-5">Accept ({row.accept})</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full flex overflow-hidden ring-1 ring-white/10">
                        <motion.div 
                            className="bg-teal-5 h-full relative group"
                            style={{ width: row.accept }}
                            initial={{ width: 0 }} whileInView={{ width: row.accept }} viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <div className="h-full bg-red-400/20" style={{ width: `calc(100% - ${row.accept})` }} />
                    </div>
                    <div className="flex justify-between text-[11px] font-bold text-white/20 uppercase tracking-widest px-1">
                        <span>Industry Average: {row.industry}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <CtaBanner
        badge="REAL PARTNERSHIP"
        title="Ready for"
        titleHighlight="Staffing that hits targets?"
        subtitle="The calculator show what's possible. Let's make it a reality for your business."
        primaryButtonText="Find Out More"
        secondaryButtonText="Call Our Team"
      />

      <Footer />
    </main>
  );
}
