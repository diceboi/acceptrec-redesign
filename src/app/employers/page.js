"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { 
  IconStar, 
  IconSchool, 
  IconTrophy,
  IconArrowRight,
  IconX,
  IconRefresh,
  IconDiscountCheckFilled,
  IconShieldCheck,
  IconBuildingCommunity,
  IconTruckDelivery,
  IconBuildingWarehouse
} from "@tabler/icons-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function EmployersHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <IconShieldCheck className="text-teal-5" size={16} />
          <span className="text-sm font-semibold text-teal-4">For Employers — Performance Staffing</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Stop Settling for <br /><span className="text-teal-5 italic">Mediocre Temps.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Other agencies send whoever&apos;s available. We send workers who are rated, coached, and rewarded for performance. Better temps, not just more temps.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/contact"><Button variant="primary" size="lg" className="px-10 group">Get Quality Staff <IconArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} /></Button></Link>
          <Link href="/why-accept"><Button variant="secondary" size="lg" className="px-10">See How It Works</Button></Link>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
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
        <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {pillars.map((p, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                <p.i size={32} />
                            </div>
                            <h4 className="relative text-white font-semibold text-xl mb-4">{p.t}</h4>
                            <p className="relative text-[#8B98AB] text-sm leading-relaxed">{p.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
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
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">SOUND FAMILIAR?</span>
                     <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight">The difference is data.</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {comparisons.map((c, i) => (
                        <div key={i} className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="flex items-center gap-3 text-red-400 font-semibold mb-4">
                                    <IconX size={18} />
                                    <span className="text-xs uppercase tracking-widest opacity-50">Traditional Agencies</span>
                                </div>
                                <p className="text-[#8B98AB] font-medium">{c.prob}</p>
                            </div>
                            <div className="p-8 bg-teal-5/5">
                                <div className="flex items-center gap-3 text-teal-4 font-semibold mb-4">
                                    <IconDiscountCheckFilled size={18} />
                                    <span className="text-xs uppercase tracking-widest opacity-50">Accept Recruitment</span>
                                </div>
                                <p className="text-white font-semibold">{c.solution}</p>
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
        <section className="relative w-full bg-navy-700 py-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <div className="text-teal-4 font-semibold text-4xl md:text-5xl mb-2 tabular-nums">{s.val}</div>
                            <div className="text-white font-semibold text-sm uppercase tracking-widest mb-1">{s.label}</div>
                            <div className="text-[#8B98AB]/70 text-xs">{s.sub}</div>
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
        { client: "InPost", tag: "LOGISTICS", target: "55 workers in 72 hours", metric: "Cut No-Shows 75%", desc: "Crisis call on Friday. Preferred supplier within 17 days.", icon: IconTruckDelivery },
        { client: "Vistry", tag: "MANUFACTURING", target: "Multi-site consistency", metric: "98% average fill rate", desc: "One of the UK's biggest housebuilders. Same quality everywhere.", icon: IconBuildingCommunity },
        { client: "Poundstretcher", tag: "WAREHOUSING", target: "Volume at scale", metric: "100% KPI compliance", desc: "National DC operation. High volume, consistent quality.", icon: IconBuildingWarehouse }
    ];

    return (
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
            <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">PROOF, NOT PROMISES</span>
                     <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight">Real Results for Real Clients.</h2>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {cases.map((c, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm flex flex-col h-full">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative flex justify-between items-start mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                    <c.icon size={28} />
                                </div>
                                <span className="text-[10px] font-semibold text-[#8B98AB]/70 uppercase tracking-widest">{c.tag}</span>
                            </div>
                            <h4 className="relative text-white font-semibold text-2xl mb-2">{c.client}</h4>
                            <p className="relative text-teal-4 font-semibold text-lg mb-6 leading-tight">{c.target}</p>
                            <p className="relative text-[#8B98AB] text-sm leading-relaxed mb-8 flex-grow">{c.desc}</p>
                            <div className="relative pt-6 border-t border-white/5">
                                <div className="text-xs font-semibold text-[#8B98AB]/70 uppercase tracking-widest mb-1">Key Growth</div>
                                <div className="text-white font-semibold">{c.metric}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function EmployersPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <EmployersHero />
      <ValuePillars />
      <ComparisonSection />
      <StatsBar />
      <CaseStudiesTeaser />
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
