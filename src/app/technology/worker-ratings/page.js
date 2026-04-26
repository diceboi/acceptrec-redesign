"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconUsers, 
  IconStar, 
  IconHistory, 
  IconBrain, 
  IconHeart, 
  IconFilter, 
  IconCheck, 
  IconX,
  IconArrowRight,
  IconChartBar,
  IconDeviceGamepad2,
  IconAlertTriangle
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function RatingsHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d111a] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/3 h-[500px] w-[500px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconChartBar className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">ACCTRATE — Live Performance Tracker</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Rate Every Worker. <br /><span className="text-teal-5 text-glow-teal">Every Shift.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your feedback matters. The good ones come back. The bad ones don't. <br/>Data-driven workforce quality you can rely on.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Pain Points Section ───────────────────────────────────────────────────
function AgencyProblemSection() {
    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-16">
                    <h3 className="text-white text-4xl font-bold mb-4 tracking-tight leading-tight">Other agencies?</h3>
                    <p className="text-white/40 text-lg leading-relaxed italic">They keep sending the same useless people. Here's why.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { 
                            t: "You told them he was useless. They sent him again.", 
                            d: "You spent 20 minutes explaining why Dave was a disaster. Next week? Dave's back. Your feedback went nowhere."
                        },
                        { 
                            t: "Remember that great worker? Neither do they.", 
                            d: "She was brilliant. Fast, reliable, showed initiative. You asked for her back. 'Sorry, we don't have records of who worked where.'"
                        },
                        { 
                            t: "Every shift is a gamble. You always lose.", 
                            d: "Will they show up? Will they work? Will they be the same person who was excellent last time? Spin the wheel. Hope for the best."
                        },
                        { 
                            t: "Agencies don't know their workers. They just send bodies.", 
                            d: "Ask them who their best warehouse picker is. Watch them fumble. They have names in a database. That's it."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[32px] bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all">
                             <div className="flex gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                    <IconAlertTriangle size={20} />
                                </div>
                                <h4 className="text-white font-bold text-xl leading-snug">{item.t}</h4>
                             </div>
                             <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── The Rating Loop Section ───────────────────────────────────────────────
function RatingLoopSection() {
    const steps = [
        { t: "Work", d: "Worker completes a shift at your site.", icon: IconUsers },
        { t: "Rate", d: "Supervisor and client give direct feedback.", icon: IconStar },
        { t: "Track", d: "Rating feeds into worker's global profile.", icon: IconChartBar },
        { t: "Match", d: "Better workers get priority for better shifts.", icon: IconBrain }
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-teal-5/10 hidden lg:block z-0" />
             <div className="mx-auto max-w-285 px-6 relative z-10 text-center">
                <div className="mb-16 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-teal-4">THE ACCEPT WAY</span>
                </div>
                <h3 className="text-white text-4xl font-bold mb-20 tracking-tight">We actually know our workers.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((s, i) => (
                        <div key={i} className="relative">
                            <div className="w-20 h-20 rounded-3xl bg-[#161b28] border border-white/10 flex items-center justify-center text-teal-4 mx-auto mb-8 relative z-10 shadow-2xl group hover:border-teal-5/50 transition-all">
                                <s.icon size={32} />
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-teal-5 text-[#0d1522] text-[10px] font-black flex items-center justify-center">{i + 1}</div>
                            </div>
                            <h4 className="text-white font-bold mb-4">{s.t}</h4>
                            <p className="text-white/40 text-xs leading-relaxed max-w-[200px] mx-auto">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Leaderboard Mockup ────────────────────────────────────────────────────
function LeaderboardSection() {
    const winners = [
        { name: "Sarah Mitchell", shifts: 47, score: 98, status: "Top Performer", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
        { name: "James Cooper", shifts: 32, score: 94, status: "Reliable", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20" },
        { name: "Emma Watson", shifts: 28, score: 91, status: "Rising Star", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    ];

    const restricted = { name: "Dave Brown", shifts: 3, score: 34, status: "Restricted", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" };

    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6">
                         <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">DATA-DRIVEN SELECTION</h2>
                         <h3 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tight">Not guesswork. <br />Real knowledge.</h3>
                         <p className="text-white/50 text-xl leading-relaxed mb-10">
                            Every worker has a score. Built from real feedback, real performance, real shifts. When you ask for good workers, we don't guess. We know.
                         </p>
                         <p className="text-teal-5 font-bold p-6 rounded-2xl bg-teal-5/5 border border-teal-5/10 italic">
                            "Sarah gets priority. Dave doesn't come back."
                         </p>
                    </div>
                    <div className="lg:col-span-6 relative">
                         <div className="absolute inset-0 bg-teal-5/5 blur-[100px] rounded-full pointer-events-none" />
                         <div className="bg-[#161b28] rounded-[40px] border border-white/10 p-10 shadow-2xl relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-white font-bold opacity-40 uppercase tracking-widest text-[10px]">Worker Scoreboard</h4>
                                <div className="text-teal-4 text-[10px] font-black tracking-widest uppercase animate-pulse">● LIVE UPDATES</div>
                            </div>
                            
                            <div className="space-y-4">
                                {winners.map((w, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 font-bold text-xs">{i + 1}</div>
                                            <div>
                                                <div className="text-white font-bold">{w.name}</div>
                                                <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">{w.shifts} shifts completed</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-2xl font-mono font-bold tracking-tighter ${w.color}`}>{w.score}</div>
                                            <div className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${w.bg} ${w.color} border ${w.border}`}>{w.status}</div>
                                        </div>
                                    </motion.div>
                                ))}

                                <div className="h-px bg-white/5 my-6" />

                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="flex items-center justify-between p-6 rounded-2xl bg-red-500/5 border border-red-500/10 opacity-70 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                                        <div>
                                            <div className="text-white font-bold">{restricted.name}</div>
                                            <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">{restricted.shifts} shifts completed</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-mono font-bold tracking-tighter ${restricted.color}`}>{restricted.score}</div>
                                        <div className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${restricted.bg} ${restricted.color} border ${restricted.border}`}>{restricted.status}</div>
                                    </div>
                                </motion.div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Features Grid ─────────────────────────────────────────────────────────
function FeatureGrid() {
    const features = [
        { t: "Rated Every Shift", d: "Every worker gets rated after every single shift. Performance, punctuality, attitude. Nothing slips through.", i: IconStar },
        { t: "Performance History", d: "Track reliability over time. One bad day? We see the pattern. Consistently brilliant? We know that too.", i: IconHistory },
        { t: "AcceptMatch", d: "Top performers get priority for the best shifts. Your requirements + our data = perfect matches.", i: IconBrain },
        { t: "Your Feedback Counts", d: "Rate workers yourself. Tell us who was great, who wasn't. It goes straight into the system. Permanently.", i: IconChartBar },
        { t: "Request Favourites", d: "Loved working with Sarah? Request her back. We'll prioritise her for your future shifts.", i: IconHeart },
        { t: "Bad Performers Filtered", d: "Low ratings mean fewer shifts. Consistently poor? They don't come back. Simple as that.", i: IconFilter }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                    <h3 className="text-white text-4xl font-bold tracking-tight">System Capabilities</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="p-10 rounded-[32px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8">
                                <f.i size={28} />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-4">{f.t}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{f.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function WorkerRatingsPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <RatingsHero />
      <AgencyProblemSection />
      <RatingLoopSection />
      <LeaderboardSection />
      <FeatureGrid />

      {/* CTA Section */}
      <CtaBanner
        badge="LAUNCHING SOON"
        title="Stop gambling."
        titleHighlight="Start knowing."
        subtitle="Get workers with proven track records. Your feedback actually matters. No more repeat offenders, only proven performers."
        primaryButtonText="Get Better Workers"
        secondaryButtonText="Talk to Our Team"
      />

      <Footer />
    </main>
  );
}
