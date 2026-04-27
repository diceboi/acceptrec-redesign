"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconGift, 
  IconUsers, 
  IconStar, 
  IconHistory, 
  IconBrain, 
  IconTarget, 
  IconSchool, 
  IconHeart, 
  IconCheck, 
  IconCircleCheckFilled,
  IconArrowRight,
  IconChartBar,
  IconClock,
  IconFlame,
  IconTrophy,
  IconCoffee,
  IconDeviceTv,
  IconShirt,
  IconDiscount2,
  IconStethoscope,
  IconSparkles,
  IconPackage
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function RewardsHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d111a] pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/3 h-[500px] w-[500px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconTrophy className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">AcceptRewards — Loyalty Program</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Work Hard. <br /><span className="text-teal-5">Get Rewarded.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/60 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every shift you complete. Every time you show up on time. It all counts. <br/>Points add up. Rewards follow. Data-driven recognition.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Why Section ───────────────────────────────────────────────────────────
function PhilosophySection() {
    return (
        <section className="py-24 bg-[#0d111a] relative overflow-hidden">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">WHY REWARDS?</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight leading-tight italic">Because good work <br /><span className="text-[#8B98AB]/70">deserves recognition.</span></h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Most agencies treat temps as interchangeable. We don't. We track who's reliable, who goes the extra mile, who we can count on — and we reward them for it. 
                        </p>
                        <p className="text-[#8B98AB] text-base leading-relaxed">
                            The more you put in, the more you get back. It's a deal built on respect and performance. No more anonymous workers. Real rewards for real people.
                        </p>
                    </div>
                    <div className="p-12 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center text-center">
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 mx-auto mb-8 shadow-2xl relative z-10"
                        >
                            <IconHeart size={48} className="animate-pulse" />
                        </motion.div>
                        <h4 className="text-white text-2xl font-bold mb-4 tracking-tight leading-snug">The Recognition Deal.</h4>
                        <p className="text-[#8B98AB] text-sm leading-relaxed max-w-md mx-auto">
                            Transforming temporary work from a "stop-gap" into a performance-driven career path.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Points Economy ────────────────────────────────────────────────────────
function PointsEconomy() {
    const methods = [
        { t: "Hourly Earnings", d: "Get points for every hour worked.", pts: "+2 PTS", i: IconClock },
        { t: "Punctuality Bonus", d: "Extra points for on-time arrivals.", pts: "+5 PTS", i: IconCheck },
        { t: "Shift Completion", d: "Points for finishing your shift.", pts: "+10 PTS", i: IconTrophy },
        { t: "5-Shift Streak", d: "Consistency pays off. Bonus streak.", pts: "+25 PTS", i: IconFlame },
        { t: "10-Shift Streak", d: "Unlock bigger bonuses for reliability.", pts: "+75 PTS", i: IconFlame },
        { t: "25-Shift Streak", d: "Elite consistency. Maximum bonus.", pts: "+200 PTS", i: IconFlame }
    ];

    return (
        <section className="py-24 bg-navy-900">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">POINTS ECONOMY</h2>
                    <h3 className="text-white text-4xl font-bold tracking-tight">How You Earn</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {methods.map((m, i) => (
                        <div key={i} className="p-10 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 group-hover:scale-110 transition-transform">
                                    <m.i size={28} />
                                </div>
                                <div className="text-teal-5 font-semibold text-xs tracking-widest px-3 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20">{m.pts}</div>
                             </div>
                            <h4 className="text-white font-bold text-xl mb-4">{m.t}</h4>
                            <p className="text-[#8B98AB] text-sm leading-relaxed">{m.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Tier System ───────────────────────────────────────────────────────────
function TierSystem() {
    const tiers = [
        { name: "Bronze", limit: "0+", multiplier: "1.00x", bonus: "Standard", color: "text-amber-700", border: "border-amber-700/20", bg: "bg-amber-700/5" },
        { name: "Silver", limit: "1,000+", multiplier: "1.05x", bonus: "+5%", color: "text-slate-300", border: "border-slate-300/20", bg: "bg-slate-300/5" },
        { name: "Gold", limit: "5,000+", multiplier: "1.10x", bonus: "+10%", color: "text-amber-400", border: "border-amber-400/20", bg: "bg-amber-400/5" },
        { name: "Platinum", limit: "15,000+", multiplier: "1.15x", bonus: "+15%", color: "text-cyan-300", border: "border-cyan-300/20", bg: "bg-cyan-300/5" },
        { name: "Elite", limit: "50,000+", multiplier: "1.20x", bonus: "MAX (20%)", color: "text-fuchsia-400", border: "border-fuchsia-400/20", bg: "bg-fuchsia-400/5" }
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                         <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">TIER MULTIPLIERS</h2>
                         <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">The More You Play. <br />The More You Earn.</h3>
                         <p className="text-[#8B98AB] text-lg leading-relaxed mb-10 italic pr-8">
                            Climb the tiers by working consistently. Every tier unlocks a global multiplier on every single point you earn. Total transparency. Maximum growth.
                         </p>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                        {tiers.map((t, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex items-center justify-between p-6 rounded-2xl ${t.bg} border ${t.border} backdrop-blur-sm group hover:scale-[1.02] transition-all`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`text-2xl font-semibold uppercase tracking-[0.1em] ${t.color}`}>{t.name}</div>
                                    <div className="text-white/20 text-[10px] font-semibold tracking-widest uppercase">Threshold: {t.limit} PTS</div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-2xl font-mono font-bold tracking-tighter ${t.color}`}>{t.multiplier}</div>
                                    <div className="text-[#8B98AB]/70 text-[9px] font-semibold uppercase tracking-widest">Global Multiplier</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Rewards Catalog ───────────────────────────────────────────────────────
function RewardsCatalog() {
    const RewardCategory = ({ title, icon: Icon, items }) => (
        <div className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4">
                    <Icon size={24} />
                </div>
                <h4 className="text-white text-2xl font-bold tracking-tight">{title}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <h5 className="text-white font-bold text-lg pr-4">{item.t}</h5>
                            <span className="text-[11px] font-semibold tracking-widest text-[#2dd4bf] px-3 py-1 rounded bg-teal-5/10 border border-teal-5/20 shrink-0">
                                {item.pts}
                            </span>
                        </div>
                        <p className="text-[#8B98AB]/70 text-sm leading-relaxed mb-0">{item.d}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const categories = [
        {
            title: "Gift Cards",
            icon: IconStar,
            items: [
                { t: "Amazon £10", pts: "1,000 pts", d: "Digital gift card delivered instantly" },
                { t: "Starbucks £15", pts: "1,500 pts", d: "Treat yourself to your favourite coffee" },
                { t: "Nando's £20", pts: "2,000 pts", d: "Enjoy a delicious meal on us" },
                { t: "Amazon £25", pts: "2,500 pts", d: "Digital gift card delivered instantly" },
                { t: "Amazon £50", pts: "5,000 pts", d: "Digital gift card delivered instantly" }
            ]
        },
        {
            title: "Experiences",
            icon: IconSparkles,
            items: [
                { t: "Cinema Tickets (2x)", pts: "1,800 pts", d: "Two tickets to any Vue cinema" }
            ]
        },
        {
            title: "Products",
            icon: IconPackage,
            items: [
                { t: "Accept Water Bottle", pts: "800 pts", d: "Insulated stainless steel bottle" },
                { t: "Spotify Premium (3 months)", pts: "2,200 pts", d: "Enjoy ad-free music" },
                { t: "Accept Branded Hoodie", pts: "3,000 pts", d: "Premium quality with Accept logo" }
            ]
        },
        {
            title: "Discounts",
            icon: IconDiscount2,
            items: [
                { t: "10% Off Next Shift Fee", pts: "500 pts", d: "Applied automatically to your account" }
            ]
        },
        {
            title: "Donations",
            icon: IconHeart,
            items: [
                { t: "RSPCA £25 Donation", pts: "2,000 pts", d: "Donate to RSPCA in your name" },
                { t: "British Heart Foundation £50", pts: "4,000 pts", d: "Support heart research" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-navy-900">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center mb-24">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">REWARDS</h2>
                    <h3 className="text-white text-5xl font-bold tracking-tight mb-6">Spend Your Points</h3>
                    <p className="text-[#8B98AB] text-lg leading-relaxed max-w-2xl mx-auto">
                        Gift cards, experiences, products, and more. Turn your hard work into real rewards.
                    </p>
                </div>

                {categories.map((cat, i) => (
                    <RewardCategory key={i} {...cat} />
                ))}
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function AcceptRewardsPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <RewardsHero />
      <PhilosophySection />
      <PointsEconomy />
      <TierSystem />
      <RewardsCatalog />

      {/* CTA Section - Innovation Partner style */}
      <CtaBanner
        badge="THE FUTURE IS HERE"
        title="The future is being built."
        titleHighlight="Will you help shape it?"
        subtitle="Most companies will wait until this technology is mainstream. Innovation Partners will have mastered it by then. Apply to the program today."
        primaryButtonText="Apply Now"
        secondaryButtonText="Learn More"
      />

      <Footer />
    </main>
  );
}
