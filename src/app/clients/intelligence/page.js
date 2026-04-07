"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { 
  IconTrophy, 
  IconUsers, 
  IconTrendingUp, 
  IconTarget, 
  IconSchool, 
  IconHeart, 
  IconArrowRight,
  IconCircleCheckFilled,
  IconX,
  IconDiscountCheckFilled,
  IconHourglassLow,
  IconChartBar,
  IconClock,
  IconDeviceLaptop,
  IconShieldCheck,
  IconMap2,
  IconCalculator,
  IconFileInvoice,
  IconStarFilled,
  IconUserSearch,
  IconCircleDashed
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function IntelligenceHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0D1520] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconTrophy className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">FOR EMPLOYERS</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[86px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Client Intelligence <span className="text-teal-5 text-glow-teal italic font-light decoration-white/10 decoration-2 underline-offset-8 underline">Suite.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Data-driven staffing decisions. ROI calculators, compliance audits, workforce planning, and real-time availability.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5">
             <div className="text-center">
                <div className="text-white font-black text-2xl mb-1">6 Tools</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Built For Employers</div>
             </div>
             <div className="text-center md:border-l border-white/5">
                <div className="text-white font-black text-2xl mb-1">100% Free</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">No Obligation</div>
             </div>
             <div className="text-center md:border-l border-white/5">
                <div className="text-white font-black text-2xl mb-1">Real Data</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Updated Live</div>
             </div>
             <div className="text-center md:border-l border-white/5">
                <div className="text-white font-black text-2xl mb-1">1st In UK</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Industry First</div>
             </div>
        </div>
      </div>
    </section>
  );
}

// ─── Tools Grid ──────────────────────────────────────────────────────────
function IntelligenceGrid() {
    const tools = [
        { 
            t: "Staffing Cost Calculator", 
            d: "Calculate your true hourly cost including NI, Pension, and overheads.", 
            href: "/clients/intelligence/cost-calculator", 
            i: IconCalculator, 
            status: "LIVE" 
        },
        { 
            t: "Real-Time Availability", 
            d: "Live map showing available candidates across our 4 regional hubs.", 
            href: "/clients/intelligence/availability", 
            i: IconMap2, 
            status: "LIVE" 
        },
        { 
            t: "Instant Quote Builder", 
            d: "Build a custom staffing quote in 60 seconds. No sales call required.", 
            href: "/tools/quote-builder", 
            i: IconFileInvoice, 
            status: "LIVE" 
        },
        { 
            t: "Industry Dashboard", 
            d: "Average pay rates and worker availability in your specific sector.", 
            href: "#", 
            i: IconChartBar, 
            status: "COMING SOON" 
        },
        { 
            t: "Social Proof Engine", 
            d: "Live feed of our 1,500+ Google Reviews and Trustpilot scores.", 
            href: "#", 
            i: IconStarFilled, 
            status: "LIVE" 
        },
        { 
            t: "Success Story Matcher", 
            d: "Find clients exactly like you and see the results we delivered.", 
            href: "/case-studies", 
            i: IconUserSearch, 
            status: "LIVE" 
        },
        { 
            t: "Compliance Health Check", 
            d: "A 10-point self-audit to see if your current agency is compliant.", 
            href: "#", 
            i: IconShieldCheck, 
            status: "DEVELOPMENT" 
        }
    ];

    return (
        <section className="py-24 bg-[#121926] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6 text-center">
                <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">CHOOSE YOUR TOOL</h2>
                <h3 className="text-white text-4xl font-bold tracking-tight mb-20">The Intelligence Suite</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    {tools.map((tool, i) => {
                        const CardContent = (
                            <div 
                                className={`h-full p-10 rounded-[48px] bg-white/[0.02] border border-white/5 flex flex-col group relative overflow-hidden transition-all hover:border-teal-5/20 ${tool.status !== 'LIVE' ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                            >
                                 <div className="absolute top-8 right-10">
                                     <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${tool.status === 'LIVE' ? 'bg-teal-5/10 text-teal-4' : 'bg-white/5 text-white/30'}`}>
                                         {tool.status}
                                     </span>
                                 </div>
                                 <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-8 ${tool.status === 'LIVE' ? 'bg-teal-5/10 text-teal-4 group-hover:scale-110' : 'bg-white/5 text-white/20'} transition-all`}>
                                     <tool.i size={32} />
                                 </div>
                                 <h4 className="text-white font-black text-xl mb-4 leading-tight">{tool.t}</h4>
                                 <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow">{tool.d}</p>
                                 <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                                     <span className={`text-xs font-bold uppercase tracking-widest ${tool.status === 'LIVE' ? 'text-teal-5 pb-1 border-b border-teal-5/50' : 'text-white/20'}`}>
                                         {tool.status === 'LIVE' ? 'Start Tool' : 'Coming Soon'}
                                     </span>
                                     {tool.status === 'LIVE' && <IconArrowRight className="text-teal-5 transition-transform group-hover:translate-x-2" size={18} />}
                                 </div>
                            </div>
                        );

                        return tool.status === 'LIVE' ? (
                            <Link href={tool.href} key={i} className="block w-full h-full">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={i} className="block w-full h-full">
                                {CardContent}
                            </div>
                        );
                    })}
                    {/* Placeholder for expansion */}
                    <div className="hidden lg:flex p-10 rounded-[48px] border border-dashed border-white/10 items-center justify-center flex-col text-center opacity-30">
                        <IconCircleDashed size={48} className="mb-6" />
                        <p className="text-xs uppercase font-bold tracking-widest">MORE TOOLS IN DEVELOPMENT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Why Section ────────────────────────────────────────────────────────
function WhySection() {
    const reasons = [
        { t: "Data Over Promises", d: "When you can see the numbers yourself - costs, availability, benchmarks - you make better decisions. No sales pitch needed." },
        { t: "Speed & Certainty", d: "Why wait days for a quote? Check real-time availability and get instant cost calculations today." },
        { t: "Because We Can", d: "No other agency has built tools like this. Why? Because they don't have the data, the confidence, or the care." }
    ];

    return (
        <section className="py-24 bg-[#0D1520] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WHY WE BUILT THIS</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight">Transparency is a feature.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     {reasons.map((r, i) => (
                         <div key={i}>
                             <div className="text-teal-4 font-black mb-4 flex items-center gap-2">
                                <span className="opacity-20">0{i+1}</span> {r.t}
                             </div>
                             <p className="text-white/40 text-sm leading-relaxed">{r.d}</p>
                         </div>
                     ))}
                </div>
                <div className="mt-20 p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-2xl">
                     <div className="text-left">
                         <div className="flex items-center gap-1 mb-2">
                             {[...Array(5)].map((_, i) => <IconStarFilled key={i} className="text-teal-5" size={16} />)}
                         </div>
                         <div className="text-white font-black text-2xl mb-1">4.8 Stars</div>
                         <div className="text-white/30 text-xs font-bold uppercase tracking-widest">TRUSTED BY 1500+ PEOPLE ON GOOGLE</div>
                     </div>
                     <p className="text-white/40 text-sm italic max-w-md">
                        "The Intelligence Suite gives us the certainty we need before placing high-volume staff bookings. It's transformed how we manage our temp budget."
                     </p>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ClientIntelligencePage() {
  return (
    <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
      <Navbar />

      <IntelligenceHero />
      <IntelligenceGrid />
      <WhySection />

      {/* CTA Section */}
      <CtaBanner
        badge="GET THE DATA"
        title="Ready to make"
        titleHighlight="smarter decisions?"
        subtitle="Use these tools. Get the data. Then when you're ready, let's talk about how Accept can transform your temp staffing."
        primaryButtonText="Request a Call"
        secondaryButtonText="Learn More About Employers"
      />

      <Footer />
    </main>
  );
}
