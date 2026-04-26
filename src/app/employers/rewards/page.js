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
  IconMessage2,
  IconBuildingWarehouse,
  IconCalendarEvent,
  IconStarFilled
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function RewardsHero() {
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
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">PARTNERSHIP PROGRAMME</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The Only Agency That <br /><span className="text-teal-5 text-glow-teal italic text-5xl md:text-6xl lg:text-[72px]">Rewards You Back.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Most agencies take your money and disappear until next month's invoice. We built a partnership programme that actually rewards you for working with us.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
            <Link href="/contact">
                <Button size="lg" className="px-10 group">
                    Join the Programme <IconArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
            <Link href="/why-accept">
                <Button variant="secondary" size="lg" className="px-10">
                    Why Accept
                </Button>
            </Link>
        </motion.div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/5">
             <div>
                <div className="text-white font-black text-2xl">190+</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Partners Enrolled</div>
             </div>
             <div>
                <div className="text-white font-black text-2xl">2.5M+</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Points Earned</div>
             </div>
             <div>
                <div className="text-white font-black text-2xl">12 wk</div>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Longest Streak</div>
             </div>
        </div>
      </div>
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
        <section className="py-24 bg-[#121926] border-b border-white/5 relative">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE DIFFERENCE</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight mb-8">Transactional vs. Partnership</h3>
                </div>
                <div className="max-w-4xl mx-auto rounded-[40px] border border-white/10 overflow-hidden bg-[#161b28] shadow-2xl">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 p-6 md:p-8 border-b border-white/10 bg-white/5">
                        <div className="col-span-2 text-[10px] md:text-[11px] font-bold text-white/20 uppercase tracking-widest">RELATIONSHIP FEATURE</div>
                        <div className="text-center text-[10px] md:text-[11px] font-bold text-white/20 uppercase tracking-widest px-2">GENERIC AGENCY</div>
                        <div className="text-center text-[10px] md:text-[11px] font-bold text-teal-5 uppercase tracking-widest px-2">ACCEPT RECRUITMENT</div>
                    </div>
                    {/* Data Rows */}
                    {rows.map((r, i) => (
                        <div key={i} className="grid grid-cols-4 items-center p-6 md:p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                            <div className="col-span-2 text-white font-bold text-sm md:text-base pr-4">{r.feature}</div>
                            <div className="flex justify-center">
                                {r.trad ? (
                                    <IconCircleCheckFilled className="text-white/20" size={20} />
                                ) : (
                                    <IconX className="text-red-500/20" size={20} />
                                )}
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
        <section className="py-24 bg-[#0D1520] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ways.map((w, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="w-16 h-16 rounded-3xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8">
                                 <w.i size={32} />
                             </div>
                             <h4 className="text-white font-bold text-xl mb-4">{w.t}</h4>
                             <p className="text-white/40 text-sm leading-relaxed">{w.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Tiers Section ─────────────────────────────────────────────────────────
function PartnershipTiers() {
    const tiers = [
        { name: "Partner", req: "Entry level", multiplier: "1.0x", color: "bg-white/5", icon: IconUsers },
        { name: "Silver", req: "250+ hrs/wk", multiplier: "1.1x", color: "bg-white/10", icon: IconHourglassLow },
        { name: "Gold", req: "500+ hrs/wk", multiplier: "1.25x", color: "bg-teal-5/10 border-teal-5/20", icon: IconTrophy },
        { name: "Strategic", req: "1000+ hrs/wk", multiplier: "1.5x", color: "bg-teal-5/20 border-teal-5/40 shadow-[0_0_30px_rgba(45,212,191,0.1)]", icon: IconStarFilled }
    ];

    return (
        <section className="py-24 bg-[#121926] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6 text-center">
                <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">TIERS & MULTIPLIERS</h2>
                <h3 className="text-white text-4xl font-bold tracking-tight mb-20">The more you book, the more you earn.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((t, i) => (
                        <div key={i} className={`p-10 rounded-[48px] border transition-all hover:scale-105 ${t.color} ${!t.color.includes('border') ? 'border-white/5' : ''} flex flex-col items-center group`}>
                             <div className={`w-20 h-20 rounded-[32px] bg-white/5 flex items-center justify-center mb-8 ${t.name === 'Strategic' ? 'text-teal-4' : 'text-white/40'} group-hover:bg-white/10 transition-all`}>
                                 <t.icon size={40} />
                             </div>
                             <h4 className="text-white font-black text-2xl mb-2">{t.name}</h4>
                             <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-10">{t.req}</p>
                             <div className="w-full pt-10 border-t border-white/5">
                                 <div className="text-teal-4 font-black text-4xl">{t.multiplier}</div>
                                 <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-2">Point Multiplier</div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Referral Section ──────────────────────────────────────────────────────
function ReferralSection() {
    return (
        <section className="py-24 bg-[#0D1520]">
             <div className="mx-auto max-w-285 px-6">
                <div className="bg-teal-5 rounded-[64px] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                         <IconTrendingUp size={300} />
                     </div>
                     <div className="relative z-10 max-w-xl text-center md:text-left">
                         <h2 className="text-black text-[11px] font-black uppercase tracking-widest mb-6 px-4 py-2 bg-black/5 rounded-full inline-block">B2B GROWTH</h2>
                         <h3 className="text-black text-4xl md:text-5xl font-black tracking-tight mb-8">Refer. Earn. Repeat.</h3>
                         <p className="text-black/60 text-lg font-bold leading-relaxed">
                            Introduce a new partner business to Accept Recruitment and receive a point bonus equivalent to **£250** upon their first successful booking.
                         </p>
                     </div>
                     <div className="relative z-10">
                         <Link href="/contact">
                             <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
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
    <main className="bg-[#0D1520] min-h-screen selection:bg-teal-5 selection:text-black dark">
      <Navbar />

      <RewardsHero />
      <RewardsComparison />
      <EarningMechanics />
      <PartnershipTiers />
      <ReferralSection />

      {/* CTA Section */}
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
