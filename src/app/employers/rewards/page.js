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
  IconArrowRight,
  IconCircleCheckFilled,
  IconX,
  IconDiscountCheckFilled,
  IconHourglassLow,
  IconMessage2,
  IconBuildingWarehouse,
  IconStarFilled
} from "@tabler/icons-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function RewardsHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <IconTrophy className="text-teal-5" size={16} />
          <span className="text-sm font-semibold text-teal-4">Partnership Programme</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          The Only Agency That <br /><span className="text-teal-5 italic">Rewards You Back.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Most agencies take your money and disappear until next month&apos;s invoice. We built a partnership programme that actually rewards you for working with us.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/contact"><Button size="lg" className="px-10 group">Join the Programme <IconArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" /></Button></Link>
          <Link href="/why-accept"><Button variant="secondary" size="lg" className="px-10">Why Accept</Button></Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/10">
          {[{ v: "190+", l: "Partners Enrolled" }, { v: "2.5M+", l: "Points Earned" }, { v: "12 wk", l: "Longest Streak" }].map((s, i) => (
            <div key={i}><div className="text-white font-semibold text-2xl">{s.v}</div><div className="text-[#8B98AB]/70 text-[10px] uppercase tracking-widest font-semibold">{s.l}</div></div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Comparison Section ───────────────────────────────────────────────────
function RewardsComparison() {
    const rows = [
        { feature: "Loyalty rewarded", trad: false, accept: true },
        { feature: "Transparent point tracking", trad: false, accept: true },
        { feature: "Referral bonuses for B2B", trad: false, accept: true },
        { feature: "Strategic partnership tiers", trad: false, accept: true },
        { feature: "Points per hour worked", trad: false, accept: true }
    ];

    return (
        <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE DIFFERENCE</span>
                     <h2 className="text-4xl font-semibold text-white tracking-tight mb-8">Transactional vs. Partnership</h2>
                </motion.div>
                <div className="glass-card max-w-4xl mx-auto rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-4 p-6 md:p-8 border-b border-white/10 bg-white/5">
                        <div className="col-span-2 text-[10px] md:text-[11px] font-semibold text-[#8B98AB]/70 uppercase tracking-widest">Relationship Feature</div>
                        <div className="text-center text-[10px] md:text-[11px] font-semibold text-[#8B98AB]/70 uppercase tracking-widest px-2">Generic Agency</div>
                        <div className="text-center text-[10px] md:text-[11px] font-semibold text-teal-5 uppercase tracking-widest px-2">Accept Recruitment</div>
                    </div>
                    {rows.map((r, i) => (
                        <div key={i} className="grid grid-cols-4 items-center p-6 md:p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                            <div className="col-span-2 text-white font-semibold text-sm md:text-base pr-4">{r.feature}</div>
                            <div className="flex justify-center">
                                {r.trad ? <IconCircleCheckFilled className="text-[#8B98AB]/30" size={20} /> : <IconX className="text-red-500/30" size={20} />}
                            </div>
                            <div className="flex justify-center relative">
                                <div className="absolute inset-0 bg-teal-5/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <IconDiscountCheckFilled className="text-teal-4 relative z-10" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Earning Section ───────────────────────────────────────────────────────
function EarningMechanics() {
    const ways = [
        { t: "Booking Points", d: "Earn points for every hour booked. Bonus multipliers for early planning.", i: IconBuildingWarehouse },
        { t: "Engagement Points", d: "Earn points for providing feedback and using the client portal daily.", i: IconMessage2 },
        { t: "Growth Points", d: "Earn large point bonuses for site expansions and B2B referrals.", i: IconTrendingUp }
    ];

    return (
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {ways.map((w, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                             <div className="relative w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                 <w.i size={32} />
                             </div>
                             <h4 className="relative text-white font-semibold text-xl mb-4">{w.t}</h4>
                             <p className="relative text-[#8B98AB] text-sm leading-relaxed">{w.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Tiers Section ─────────────────────────────────────────────────────────
function PartnershipTiers() {
    const tiers = [
        { name: "Partner", req: "Entry level", multiplier: "1.0x", highlight: false, icon: IconUsers },
        { name: "Silver", req: "250+ hrs/wk", multiplier: "1.1x", highlight: false, icon: IconHourglassLow },
        { name: "Gold", req: "500+ hrs/wk", multiplier: "1.25x", highlight: true, icon: IconTrophy },
        { name: "Strategic", req: "1000+ hrs/wk", multiplier: "1.5x", highlight: true, icon: IconStarFilled }
    ];

    return (
        <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
                <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">TIERS & MULTIPLIERS</span>
                    <h2 className="text-4xl font-semibold text-white tracking-tight">The more you book, the more you earn.</h2>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {tiers.map((t, i) => (
                        <motion.div key={i} variants={cardVariants} className={`glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:teal-glow-sm flex flex-col items-center ${t.highlight ? 'border-teal-5/20 hover:border-teal-5/40' : 'hover:border-teal-5/30'}`}>
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                             <div className={`relative w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${t.highlight ? 'text-teal-4' : 'text-[#8B98AB]'} group-hover:bg-white/10 transition-all`}>
                                 <t.icon size={40} />
                             </div>
                             <h4 className="relative text-white font-semibold text-2xl mb-2">{t.name}</h4>
                             <p className="relative text-[#8B98AB]/70 text-xs font-semibold uppercase tracking-widest mb-10">{t.req}</p>
                             <div className="relative w-full pt-10 border-t border-white/5">
                                 <div className="text-teal-4 font-semibold text-4xl">{t.multiplier}</div>
                                 <div className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest mt-2">Point Multiplier</div>
                             </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Referral Section ──────────────────────────────────────────────────────
function ReferralSection() {
    return (
        <section className="py-24 bg-[#0d111a]">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="bg-teal-5 rounded-2xl p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                         <IconTrendingUp size={300} />
                     </div>
                     <div className="relative z-10 max-w-xl text-center md:text-left">
                         <h2 className="text-black text-[11px] font-semibold uppercase tracking-widest mb-6 px-4 py-2 bg-black/5 rounded-full inline-block">B2B GROWTH</h2>
                         <h3 className="text-black text-4xl md:text-5xl font-semibold tracking-tight mb-8">Refer. Earn. Repeat.</h3>
                         <p className="text-black/60 text-lg font-semibold leading-relaxed">
                            Introduce a new partner business to Accept Recruitment and receive a point bonus equivalent to **£250** upon their first successful booking.
                         </p>
                     </div>
                     <div className="relative z-10">
                         <Link href="/contact">
                             <button className="px-12 py-6 bg-black text-white font-semibold uppercase tracking-widest text-sm rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                 Refer a Business <IconArrowRight size={20} />
                             </button>
                         </Link>
                     </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function EmployerRewardsPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <RewardsHero />
      <RewardsComparison />
      <EarningMechanics />
      <PartnershipTiers />
      <ReferralSection />
      <CtaBanner
        badge="GET ENROLLED TODAY"
        title="Stop being just a number."
        titleHighlight="Start being a partner."
        subtitle="Our Partnership programme is ready for you. Every worker, every shift, every rating brings you closer to your next reward tier."
        primaryButtonText="Join the Programme"
        secondaryButtonText="Book Demo"
      />
      <Footer />
    </main>
  );
}
