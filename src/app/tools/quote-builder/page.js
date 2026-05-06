"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconCalculator, 
  IconUsers, 
  IconClock, 
  IconCalendarEvent, 
  IconBriefcase,
  IconChartBar,
  IconArrowRight,
  IconPointFilled,
  IconCheck,
  IconBrandWhatsapp,
  IconMail,
  IconCalendarWeek
} from "@tabler/icons-react";

// ─── Logic Constants ──────────────────────────────────────────────────────
const ROLES = [
  { id: "warehouse", label: "Warehouse", baseRate: 11.44, icon: IconBriefcase },
  { id: "production", label: "Production", baseRate: 11.60, icon: IconBriefcase },
  { id: "driver", label: "Driver", baseRate: 14.50, icon: IconBriefcase },
  { id: "food", label: "Food Production", baseRate: 11.50, icon: IconBriefcase },
];

const SHIFTS = [
  { id: "day", label: "Day" },
  { id: "night", label: "Night" },
  { id: "weekend", label: "Weekend" },
];

const ENGAGEMENTS = [
  { id: "short", label: "Short", sub: "< 1 month" },
  { id: "medium", label: "Medium", sub: "1-6 months" },
  { id: "long", label: "Long", sub: "6+ months" },
];

const STATUTORY_RATES = {
  HOLIDAY: 0.1207,
  NI: 0.1500,
  PENSION: 0.0300,
  NI_HOLIDAY: 0.1380,
  SSP: 0.0150,
  LEVY: 0.0050,
};

// ─── Hero ──────────────────────────────────────────────────────────────────
function QuoteHero() {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">Instant Estimate</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Instant Staffing <br /><span className="text-teal-5 text-glow-teal">Quote Builder</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get a transparent ballpark figure for your workforce in seconds. No hidden fees. No guesswork. Just the numbers you need to plan.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Calculator Logic Component ───────────────────────────────────────────
function QuoteBuilderTool() {
  const [workers, setWorkers] = useState(20);
  const [roleId, setRoleId] = useState("warehouse");
  const [shiftId, setShiftId] = useState("day");
  const [engagementId, setEngagementId] = useState("medium");
  const [hours, setHours] = useState(40);

  const [results, setResults] = useState({
    hourlyCharge: 0,
    weeklyTotal: 0,
    monthlyTotal: 0,
    complexity: "Low"
  });

  useEffect(() => {
    const role = ROLES.find(r => r.id === roleId);
    const base = role.baseRate;
    
    // Statutory math
    const hol = base * STATUTORY_RATES.HOLIDAY;
    const ni = base * STATUTORY_RATES.NI;
    const pen = base * STATUTORY_RATES.PENSION;
    const niHol = hol * STATUTORY_RATES.NI_HOLIDAY;
    const ssp = base * STATUTORY_RATES.SSP;
    const levy = (base + hol) * STATUTORY_RATES.LEVY;
    const statBase = base + hol + ni + pen + niHol + ssp + levy;

    // Margin & Complexity logic
    let margin = 1.20; // Default Medium
    let complexity = "Medium";
    
    if (workers >= 50 && shiftId === 'day' && engagementId !== 'short') {
        margin = 0.65;
        complexity = "Low";
    }

    const hourlyCharge = statBase + margin;
    const weeklyTotal = workers * hours * hourlyCharge;
    const monthlyTotal = weeklyTotal * 4.33;

    setResults({
        hourlyCharge,
        weeklyTotal,
        monthlyTotal,
        complexity
    });
  }, [workers, roleId, shiftId, engagementId, hours]);

  const formatCurrency = (num) => `£${num.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <section className="py-24 bg-[#0d1522]">
      <div className="mx-auto max-w-285 px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            
            {/* Input Controls */}
            <div className="xl:col-span-7 space-y-10">
                <div className="bg-[#161b28] rounded-[40px] border border-white/5 p-10 shadow-2xl">
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-12 flex items-center gap-2">
                        <IconUsers size={20} className="text-teal-5" /> Your Requirements
                    </h3>

                    <div className="space-y-12">
                        {/* Workers Slider */}
                        <div>
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <div className="text-white font-bold mb-1">Number of Workers</div>
                                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">How many temps do you need daily?</div>
                                </div>
                                <div className="text-teal-5 text-4xl font-mono font-bold tracking-tighter">{workers}</div>
                            </div>
                            <input 
                                type="range" min="1" max="100" value={workers} 
                                onChange={(e) => setWorkers(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-teal-5"
                            />
                        </div>

                        {/* Role Picker */}
                        <div>
                            <div className="text-white font-bold mb-6">Role Type</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {ROLES.map(r => (
                                    <button 
                                        key={r.id}
                                        onClick={() => setRoleId(r.id)}
                                        className={`p-4 rounded-2xl border transition-all text-left group ${roleId === r.id ? 'bg-teal-5 border-teal-5 text-white' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'}`}
                                    >
                                        <r.icon size={20} className={`mb-3 ${roleId === r.id ? 'text-white' : 'text-teal-5'}`} />
                                        <div className="text-xs font-bold leading-tight">{r.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Shift Picker */}
                        <div>
                            <div className="text-white font-bold mb-6">Shift Pattern</div>
                            <div className="grid grid-cols-3 gap-3">
                                {SHIFTS.map(s => (
                                    <button 
                                        key={s.id}
                                        onClick={() => setShiftId(s.id)}
                                        className={`py-3 rounded-xl border transition-all text-[11px] font-bold uppercase tracking-widest ${shiftId === s.id ? 'bg-teal-5 border-teal-5 text-white' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'}`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Engagement & Hours Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                             <div>
                                <div className="text-white font-bold mb-6">Engagement Duration</div>
                                <div className="space-y-3">
                                    {ENGAGEMENTS.map(e => (
                                        <button 
                                            key={e.id}
                                            onClick={() => setEngagementId(e.id)}
                                            className={`w-full p-4 rounded-2xl border transition-all text-left flex items-center justify-between group ${engagementId === e.id ? 'bg-teal-5 border-teal-5 text-white' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'}`}
                                        >
                                            <div className="text-xs font-bold leading-tight">{e.label}</div>
                                            <div className={`text-[9px] font-bold uppercase tracking-widest ${engagementId === e.id ? 'text-white/70' : 'text-white/20'}`}>{e.sub}</div>
                                        </button>
                                    ))}
                                </div>
                             </div>
                             <div>
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <div className="text-white font-bold mb-1">Hours / Week</div>
                                        <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Average per worker</div>
                                    </div>
                                    <div className="text-teal-5 text-2xl font-mono font-bold">{hours}</div>
                                </div>
                                <input 
                                    type="range" min="10" max="60" value={hours} 
                                    onChange={(e) => setHours(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-teal-5"
                                />
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Results Card */}
            <div className="xl:col-span-5">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-gradient-to-b from-[#1c2436] to-[#161b28] rounded-[40px] border border-white/10 p-10 shadow-3xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-5/10 blur-[80px] rounded-full" />
                        
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-white text-sm font-bold uppercase tracking-widest">Estimated Totals</h3>
                            <div className={`px-3 py-1 rounded-full text-[9px] font-semibold uppercase tracking-widest ${results.complexity === 'Low' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                {results.complexity} Complexity
                            </div>
                        </div>

                        <div className="space-y-8 mb-12">
                            <div>
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">Weekly Investment</div>
                                <motion.div 
                                    key={results.weeklyTotal}
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    className="text-white text-5xl md:text-6xl font-mono font-bold tracking-tighter"
                                >
                                    {formatCurrency(results.weeklyTotal)}
                                </motion.div>
                            </div>
                            <div className="pt-8 border-t border-white/5">
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-2">Monthly Estimate (x4.33)</div>
                                <motion.div 
                                    key={results.monthlyTotal}
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    className="text-white text-3xl md:text-4xl font-mono font-bold tracking-tighter opacity-60"
                                >
                                    {formatCurrency(results.monthlyTotal)}
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/40 font-medium">Hourly Rate / Worker</span>
                                <span className="text-white font-mono font-bold text-lg">{formatCurrency(results.hourlyCharge)}</span>
                            </div>
                            <p className="text-white/30 text-[10px] leading-relaxed italic">
                                *Includes all statutory costs (NI, Pension, Holiday) + Agency Margin. Ballpark estimate only.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                             <a href="/get-started" className="w-full py-5 rounded-[22px] bg-teal-5 hover:bg-teal-6 text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-2 group">
                                Book Quote Consultation <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="https://wa.me/447495995406" target="_blank" rel="noopener noreferrer" className="w-full py-5 rounded-[22px] bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest transition-all border border-white/5 flex items-center justify-center gap-2">
                                <IconBrandWhatsapp size={18} className="text-teal-5" /> WhatsApp Our Team
                            </a>
                        </div>
                    </div>

                    <div className="p-8 rounded-[32px] bg-[#161b28] border border-white/5">
                        <div className="flex gap-4 items-start">
                            <IconChartBar className="text-teal-5 shrink-0" size={24} />
                            <div>
                                <h4 className="text-white font-bold mb-2 text-sm italic">Why Does Pricing Vary?</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Volume impacts fixed overheads",
                                        "Nights and Weekend shift premiums",
                                        "Specialist certification requirements",
                                        "Specific health & safety environments"
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-2 text-[11px] text-white/40 font-medium leading-tight">
                                            <IconPointFilled size={10} className="text-teal-5 shrink-0 mt-0.5" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}

// ─── Disclaimer ────────────────────────────────────────────────────────────
function DisclaimerSection() {
    return (
        <section className="py-24 bg-[#161b28] border-y border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="max-w-3xl">
                    <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">This Is An Estimate Only</h3>
                    <p className="text-white/60 text-xl leading-relaxed mb-8">
                        Actual pricing depends on your specific requirements, location, shift patterns, and volume. This calculator gives you a ballpark figure, but <span className="text-white font-bold italic underline decoration-teal-5 underline-offset-4">we need to visit your site</span> to provide an accurate quote.
                    </p>
                    <p className="text-white/60 text-xl leading-relaxed">
                        Why? Because every operation is different. The only way to price this properly is to understand your workflow, environment, and challenges firsthand.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function QuoteBuilderPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <QuoteHero />
      <QuoteBuilderTool />
      <DisclaimerSection />

      {/* CTA Section */}
      <CtaBanner
        badge="GET ACCURATE"
        title="Ready for an"
        titleHighlight="Accurate Quote?"
        subtitle="Ballpark numbers are a great start, but we need to talk to give you a definitive price. We need to see your site, understand your workflow, and agree on service levels."
        primaryButtonText="Request Site Visit"
        secondaryButtonText="Send Full RFP"
      />

      <Footer />
    </main>
  );
}
