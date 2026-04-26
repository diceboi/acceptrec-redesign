"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { 
  IconStar, 
  IconUsers, 
  IconBrain, 
  IconTarget, 
  IconSchool, 
  IconHeart, 
  IconTrophy,
  IconArrowRight,
  IconChartBar,
  IconCircleCheckFilled,
  IconX,
  IconRefresh,
  IconDiscountCheckFilled,
  IconHourglassLow,
  IconTrendingUp,
  IconShieldCheck,
  IconBuildingCommunity,
  IconTruckDelivery,
  IconBuildingWarehouse
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function EmployersHero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0D1520] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/4 h-[600px] w-[600px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconShieldCheck className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">FOR EMPLOYERS — PERFORMANCE STAFFING</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Settling for <br /><span className="text-teal-5 text-glow-teal italic">Mediocre Temps.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Other agencies send whoever's available. We send workers who are rated, coached, and rewarded for performance. Better temps, not just more temps.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
            <Link href="/contact">
                <Button variant="primary" size="lg" className="px-10 group">
                    Get Quality Staff <IconArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
            </Link>
            <Link href="/why-accept">
                <Button variant="secondary" size="lg" className="px-10">
                    See How It Works
                </Button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Value Pillars ─────────────────────────────────────────────────────────
function ValuePillars() {
    const pillars = [
        { t: "Rated Every Shift", d: "Every worker receives a 1-5 star rating after every shift. Total transparency on quality.", i: IconStar },
        { t: "Coached to Improve", d: "Data-driven feedback loops identify issues and trigger automated coaching.", i: IconSchool },
        { t: "Rewarded for Results", d: "Top performers earn points and rewards, incentivising them to work harder for you.", i: IconTrophy }
    ];

    return (
        <section className="py-24 bg-[#121926] border-b border-white/5 relative">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((p, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/5 hover:border-teal-5/20 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:scale-110 transition-transform">
                                <p.i size={32} />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-4">{p.t}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{p.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Comparison Section ───────────────────────────────────────────────────
function ComparisonSection() {
    const comparisons = [
        { prob: "Workers doing the bare minimum.", solution: "Every shift rated 1-5 stars.", icon: IconStar },
        { prob: "Same problems every week.", solution: "Feedback that creates change.", icon: IconRefresh },
        { prob: "Zero incentive to excel.", solution: "Top performers rewarded.", icon: IconTrophy },
        { prob: "Supervisors babysitting all day.", solution: "Pre-trained, self-managing workers.", icon: IconShieldCheck }
    ];

    return (
        <section className="py-24 bg-[#0D1520] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">SOUND FAMILIAR?</h2>
                     <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">The difference is data.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {comparisons.map((c, i) => (
                        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden border border-white/5">
                            <div className="p-8 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="flex items-center gap-3 text-red-400 font-bold mb-4">
                                    <IconX size={18} />
                                    <span className="text-xs uppercase tracking-widest opacity-50">Traditional Agencies</span>
                                </div>
                                <p className="text-white/40 font-medium">{c.prob}</p>
                            </div>
                            <div className="p-8 bg-teal-5/5">
                                <div className="flex items-center gap-3 text-teal-4 font-bold mb-4">
                                    <IconDiscountCheckFilled size={18} />
                                    <span className="text-xs uppercase tracking-widest opacity-50">Accept Recruitment</span>
                                </div>
                                <p className="text-white font-bold">{c.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function StatsBar() {
    const stats = [
        { label: "Workers Rated", val: "100%", sub: "Every single shift" },
        { label: "Avg Star Rating", val: "4.2★", sub: "Performance score" },
        { label: "Fill Rate", val: "98%", sub: "Industry leading" },
        { label: "Daily Workers", val: "1,200+", sub: "Across the UK" }
    ];

    return (
        <section className="py-16 bg-[#121926] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <div className="text-teal-4 font-black text-4xl md:text-5xl mb-2 tabular-nums">{s.val}</div>
                            <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{s.label}</div>
                            <div className="text-white/30 text-xs">{s.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Case Studies Section ──────────────────────────────────────────────────
function CaseStudiesTeaser() {
    const cases = [
        { 
            client: "InPost", 
            tag: "LOGISTICS", 
            target: "55 workers in 72 hours", 
            metric: "Cut No-Shows 75%", 
            desc: "Crisis call on Friday. Preferred supplier within 17 days.", 
            icon: IconTruckDelivery 
        },
        { 
            client: "Vistry", 
            tag: "MANUFACTURING", 
            target: "Multi-site consistency", 
            metric: "98% average fill rate", 
            desc: "One of the UK's biggest housebuilders. Same quality everywhere.", 
            icon: IconBuildingCommunity 
        },
        { 
            client: "Poundstretcher", 
            tag: "WAREHOUSING", 
            target: "Volume at scale", 
            metric: "100% KPI compliance", 
            desc: "National DC operation. High volume, consistent quality.", 
            icon: IconBuildingWarehouse 
        }
    ];

    return (
        <section className="py-24 bg-[#0D1520] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">PROOF, NOT PROMISES</h2>
                     <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Real Results for Real Clients.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-teal-5/30 transition-all flex flex-col h-full">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 group-hover:scale-110 transition-transform">
                                    <c.icon size={28} />
                                </div>
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{c.tag}</span>
                            </div>
                            <h4 className="text-white font-black text-2xl mb-2">{c.client}</h4>
                            <p className="text-teal-4 font-bold text-lg mb-6 leading-tight">{c.target}</p>
                            <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">{c.desc}</p>
                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-bold text-white/20 uppercase tracking-widest mb-1">Key Growth</div>
                                <div className="text-white font-bold">{c.metric}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function EmployersPage() {
  return (
    <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
      <Navbar />

      <EmployersHero />
      <ValuePillars />
      <ComparisonSection />
      <StatsBar />
      <CaseStudiesTeaser />

      {/* CTA Section */}
      <CtaBanner
        badge="THE FUTURE IS HERE"
        title="Stop settling for mediocrity."
        titleHighlight="Start demanding quality."
        subtitle="Innovation Partners get first access to our performance data and top-rated workers. Book a demonstration of the platform today."
        primaryButtonText="Get Quality Staff"
        secondaryButtonText="Book Demo"
      />

      <Footer />
    </main>
  );
}
