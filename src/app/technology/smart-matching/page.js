"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconUsers, 
  IconChartBar, 
  IconTarget, 
  IconMapPin, 
  IconCertificate, 
  IconHeart, 
  IconHistory,
  IconCheck,
  IconX,
  IconArrowRight,
  IconBrain,
  IconRefresh
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function MatchingHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-teal-5/5 border border-teal-5/10 rounded-2xl backdrop-blur-sm group cursor-pointer"
        >
          <p className="text-sm font-bold text-teal-4">
            Cut No-Shows 75%. See how InPost hit 98% fill rate with Accept. <span className="text-white group-hover:translate-x-1 transition-transform inline-block ml-1">Read case study →</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconBrain className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">AI-Powered Matching Engine</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AcceptMatch — The <br /><span className="text-teal-5">Right Worker. Every Time.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/60 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          AI-powered matching based on skills, reliability, location, and motivation. Data-driven decisions that actually work.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Comparison Section ────────────────────────────────────────────────────
function ComparisonSection() {
    const rows = [
        { f: "Skills matching", t: "Basic or none", a: "Precise skill-to-job alignment" },
        { f: "Location consideration", t: "Rarely", a: "Prioritised automatically" },
        { f: "Past performance", t: "Often ignored", a: "Core to every decision" },
        { f: "Worker motivation", t: "Not considered", a: "Preference-based matching" },
        { f: "Learning from outcomes", t: "Manual (if at all)", a: "Automatic, continuous" },
        { f: "No-show prediction", t: "After it happens", a: "Before they're booked" }
    ];

    return (
        <section className="py-24 bg-navy-900">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight">Traditional allocation vs. <br/>AcceptMatch</h3>
                    <p className="text-[#8B98AB] text-lg leading-relaxed italic">Gut feel gets you bodies. Data gets you the right people.</p>
                </div>
                
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-white/[0.03]">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="p-8 text-white text-sm font-bold uppercase tracking-widest">Factor</th>
                                <th className="p-8 text-[#8B98AB] text-sm font-bold uppercase tracking-widest">Traditional</th>
                                <th className="p-8 bg-teal-5/10 text-teal-4 text-sm font-semibold uppercase tracking-widest border-l border-white/10">AcceptMatch</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {rows.map((row, i) => (
                                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="p-8 text-white font-bold text-base">{row.f}</td>
                                    <td className="p-8 text-[#8B98AB] text-sm font-medium">{row.t}</td>
                                    <td className="p-8 bg-teal-5/5 text-teal-5 font-bold text-base border-l border-white/10 flex items-center gap-3">
                                        <IconCheck size={18} className="text-teal-4" />
                                        {row.a}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
    return (
        <section className="py-24 bg-navy-900">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE CHALLENGE</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight leading-tight">The Agency <br />Allocation Problem</h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-8 italic">
                            Random placement leads to predictable failures.
                        </p>
                        <div className="space-y-6">
                            {[
                                { t: "Lack of skill verification", d: "Getting someone who 'saw a forklift on YouTube' instead of a certified operator." },
                                { t: "Ignoring location", d: "40-mile commutes causing inevitable no-shows and late arrivals." },
                                { t: "Zero learning", d: "Traditional agencies don't learn from past performance. Mistakes are repeated." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                                        <IconX size={18} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold mb-1">{item.t}</p>
                                        <p className="text-[#8B98AB] text-sm leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-12 rounded-2xl bg-gradient-to-br from-[#161b28] to-[#0d1522] border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <IconTarget size={64} />
                        </div>
                        <h4 className="text-white text-3xl font-bold mb-6 tracking-tight leading-snug">"AI that actually thinks."</h4>
                        <p className="text-[#8B98AB] text-lg leading-relaxed">
                            AcceptMatch doesn't just look at who is available. It looks at who is **motivated**, who is **reliable**, and who is **qualified** for your specific environment. It moves recruitment from "gut feel" to scientific precision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── AI Pillars ────────────────────────────────────────────────────────────
function PillarsGrid() {
    const pillars = [
        { title: "Skills & Certifications", desc: "Precise matching of licenses (Forklift, Food Hygiene). No guesswork.", icon: IconCertificate },
        { title: "Reliability Score", desc: "AI tracks historical attendance and punctuality; high scorers get priority.", icon: IconChartBar },
        { title: "Location Intelligence", desc: "Factors in commute times and area attendance patterns for every worker.", icon: IconMapPin },
        { title: "Experience Match", desc: "Prioritizes performers who have previously excelled on your specific site.", icon: IconHistory },
        { title: "Worker Preferences", desc: "Matches roles to worker motivations, preferred shifts, and industries.", icon: IconHeart }
    ];

    return (
        <section className="py-24 bg-[#0d111a]">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE TECHNOLOGY</h2>
                    <h3 className="text-white text-4xl font-bold mb-4 tracking-tight">The 5 Pillars of Matching</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((p, i) => (
                        <div key={i} className={`p-10 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-teal-5/20 transition-all group ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}>
                             <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <p.icon size={28} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{p.title}</h3>
                            <p className="text-[#8B98AB] text-sm leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Match Preview Mockup ──────────────────────────────────────────────────
function MatchPreview() {
    const candidates = [
        { name: "Sarah K.", match: 97, stats: "Forklift cert • 2.3mi away • 98% att.", color: "text-green-400" },
        { name: "James M.", match: 94, stats: "Forklift cert • 4.1mi away • 96% att.", color: "text-green-400" },
        { name: "Dave R.", match: 89, stats: "Forklift cert • 6.8mi away • 92% att.", color: "text-amber-500" },
    ];

    return (
        <section className="py-24 bg-navy-900">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Control Panel */}
                        <div className="lg:col-span-5 p-12 lg:p-20 bg-gradient-to-b from-[#1c2436] to-[#161b28] border-r border-white/5">
                            <div className="mb-10">
                                <div className="text-teal-4 text-[10px] font-bold uppercase tracking-widest mb-2">Live Matching Preview</div>
                                <h4 className="text-white text-3xl font-bold tracking-tight">Data-Driven <br/>Selection</h4>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[#8B98AB] text-xs font-bold uppercase tracking-widest">Active Role</span>
                                    <span className="text-teal-4 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-teal-4/10 rounded">In Progress</span>
                                </div>
                                <div className="text-white font-bold mb-1">Warehouse Pick & Pack</div>
                                <div className="text-[#8B98AB]/70 text-xs font-medium">6am Start • Zone B • FLT Required</div>
                            </div>
                            <p className="text-[#8B98AB] leading-relaxed text-sm mb-0 italic">
                                "The system doesn't just find a worker. It finds THE worker for your site."
                            </p>
                        </div>

                        {/* Candidate List */}
                        <div className="lg:col-span-7 p-8 md:p-16">
                            <div className="space-y-4">
                                {candidates.map((c, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4">
                                                <IconUsers size={20} />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold flex items-center gap-2">
                                                    {c.name}
                                                    {i === 0 && <span className="text-[9px] text-teal-4 font-semibold px-1.5 py-0.5 bg-teal-5/10 border border-teal-4/20 rounded">TOP MATCH</span>}
                                                </div>
                                                <div className="text-[10px] text-[#8B98AB]/70 uppercase font-semibold tracking-widest">{c.stats}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-2xl font-mono font-bold tracking-tighter ${c.color}`}>{c.match}%</div>
                                            <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest">MATCH RATING</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Process Section ───────────────────────────────────────────────────────
function ProcessSection() {
    const steps = [
        { t: "Shift Posted", d: "Job details, site, and requirements entered." },
        { t: "AI Recommends", d: "System scans thousands for the top 5% match." },
        { t: "Human Approves", d: "Our expert recruiters verify the AI's selection." },
        { t: "System Learns", d: "Successes improve the algorithm for your next shift." }
    ];

    return (
        <section className="py-24 bg-navy-900">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE WORKFLOW</h2>
                    <h3 className="text-white text-4xl font-bold mb-4 tracking-tight">AI Recommends. Humans Decide.</h3>
                    <p className="text-[#8B98AB] text-lg leading-relaxed">Technology assists, but doesn't replace recruitment judgment.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s, i) => (
                        <div key={i} className="relative p-10 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                            <div className="w-12 h-12 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 font-semibold mx-auto mb-6 border border-teal-5/20">
                                {i + 1}
                            </div>
                            <h4 className="text-white font-bold mb-3">{s.t}</h4>
                            <p className="text-[#8B98AB] text-xs leading-relaxed">{s.d}</p>
                            {i < 3 && (
                                <div className="hidden lg:block absolute top-[60px] -right-4 z-20 text-teal-5/20">
                                    <IconArrowRight size={24} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Learning Loop Section ─────────────────────────────────────────────────
function LearningLoop() {
    return (
        <section className="py-24 bg-[#0d111a]">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 flex justify-center">
                        <div className="w-full max-w-[440px] aspect-square rounded-full border-2 border-dashed border-white/5 flex items-center justify-center relative p-20">
                             <div className="absolute inset-0 bg-teal-5/5 blur-[80px] rounded-full" />
                             <div className="relative z-10 w-full h-full rounded-full bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center text-center p-8 shadow-2xl">
                                <IconRefresh className="text-teal-5 mb-6 animate-spin-slow" size={48} />
                                <h4 className="text-white text-2xl font-bold mb-4">Continuous Learning Loop</h4>
                                <p className="text-[#8B98AB]/70 text-sm leading-relaxed">Every shift completes the data cycle, making the engine smarter.</p>
                             </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">FEEDBACK CYCLE</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">The System Learns.</h3>
                        <div className="space-y-8">
                            {[
                                { t: "Great Match", d: "Successful workers are flagged for future similar roles on your site.", c: "text-green-400" },
                                { t: "Wrong Fit", d: "'Wrong fit' data is used to find better-suited work for that individual elsewhere.", c: "text-white/60" },
                                { t: "No-Show / Reliability", d: "Reliability scores drop automatically, deprioritizing them for future assignments.", c: "text-red-500/60" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1.5 h-12 bg-white/5 rounded-full overflow-hidden shrink-0 mt-1">
                                        <div className={`w-full h-1/2 ${i === 0 ? 'bg-green-400' : i === 2 ? 'bg-red-500/60' : 'bg-white/20'}`} />
                                    </div>
                                    <div>
                                        <h5 className={`font-semibold text-xs uppercase tracking-widest mb-1 ${item.c}`}>{item.t}</h5>
                                        <p className="text-[#8B98AB] text-sm leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function SmartMatchingPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <MatchingHero />
      <ProblemSection />
      <PillarsGrid />
      <MatchPreview />
      <ProcessSection />
      <ComparisonSection />
      <LearningLoop />

      {/* CTA Section */}
      <CtaBanner
        badge="THE DATA-DRIVEN DIFFERENCE"
        title="Stop Guessing."
        titleHighlight="Start Matching."
        subtitle="Slash your no-show rate and increase productivity by using our AI-powered AcceptMatch engine. The right worker, every single time."
        primaryButtonText="Request a Demo"
        secondaryButtonText="Read Case Study"
      />

      <Footer />
    </main>
  );
}
