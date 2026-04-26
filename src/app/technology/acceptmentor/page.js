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
  IconTarget, 
  IconSchool, 
  IconHeart, 
  IconCheck, 
  IconArrowRight,
  IconChartBar,
  IconMessage2,
  IconTrendingUp,
  IconShieldCheck,
  IconBolt
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function MentorHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconSchool className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">AcceptMentor — Building Better Workforces</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Good Workers <br /><span className="text-teal-5 text-glow-teal">Get Better.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Track performance, provide coaching, recognize top performers, and build loyalty. Better workers, lower turnover, happier clients.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function MotivationSection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5 relative overflow-hidden">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE PHILOSOPHY</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight leading-tight">Workers Want to Do Well <br/><span className="text-white/30 text-2xl">(Most just don't know how.)</span></h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Most agencies treat workers as interchangeable bodies. Churn is just accepted. But we know workers improve when they get real feedback and recognition.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Unaware of underperformance until fired.",
                                "Best workers feeling unrecognized and uncelebrated.",
                                "Struggling workers declining without coaching.",
                                "High turnover leading to inconsistent client service."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/50 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-12 rounded-[40px] bg-linear-to-br from-[#161b28] to-[#0d1522] border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <IconTrendingUp size={64} />
                        </div>
                        <h4 className="text-white text-2xl font-bold mb-6 tracking-tight leading-snug">Feedback is the <br/>catalyst for growth.</h4>
                        <p className="text-white/40 text-lg leading-relaxed">
                            AcceptMentor provides the data needed to move recruitment from "filling gaps" to "building careers." It identifies coaching triggers before performance becomes chronic.
                        </p>
                        <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-teal-5/5 border border-teal-5/10">
                             <div className="w-10 h-10 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4">
                                <IconCheck size={20} />
                             </div>
                             <p className="text-teal-4 font-bold text-sm">AcceptMentor provides the feedback loop.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── 3-Step Process ────────────────────────────────────────────────────────
function MentorProcess() {
    const steps = [
        { t: "Track Performance", d: "Clients rate workers after every shift on punctuality, quality, and attitude.", icon: IconChartBar },
        { t: "Provide Feedback", d: "Workers gain visibility into their ratings, strengths, and improvement areas.", icon: IconMessage2 },
        { t: "Recognize & Reward", d: "Top performers get recognition, better shifts, and pay progression.", icon: IconStar }
    ];

    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE LOOP</h2>
                    <h3 className="text-white text-4xl font-bold mb-4 tracking-tight">The 3 Pillars of Elevation</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map((s, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-[#161b28] border border-white/5 group hover:border-teal-5/20 transition-all text-center">
                            <div className="w-16 h-16 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 mx-auto mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all shadow-lg">
                                <s.icon size={32} />
                            </div>
                            <h4 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">{s.t}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Worker Dashboard Mockup ───────────────────────────────────────────────
function WorkerDashboard() {
    const bars = [
        { label: "Punctuality", score: 4.9, text: "Always on time. Keep it up!", color: "bg-teal-5", bg: "bg-teal-5/10", border: "border-teal-5/20" },
        { label: "Quality of Work", score: 4.8, text: "Consistently high quality.", color: "bg-teal-5", bg: "bg-teal-5/10", border: "border-teal-5/20" },
        { label: "Attitude & Teamwork", score: 4.3, text: "Room to improve here. Stay positive!", color: "bg-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" }
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5">
                         <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE WORKER EXPERIENCE</h2>
                         <h3 className="text-white text-4xl font-bold mb-8 tracking-tight leading-tight">Transparency <br />Breeds Results.</h3>
                         <p className="text-white/40 text-lg leading-relaxed mb-10">
                            Workers see what you see. We provide them with a detailed performance dashboard that highlights their successes and pinpoint areas for growth.
                         </p>
                         <div className="p-8 rounded-[32px] bg-[#161b28] border border-white/5 relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-8 opacity-10">
                                <IconMessage2 size={48} />
                             </div>
                             <div className="flex items-center gap-2 mb-4">
                                <IconStar size={16} className="text-amber-500 fill-amber-500" />
                                <span className="text-white/40 uppercase font-black tracking-widest text-[10px]">RECENT FEEDBACK</span>
                             </div>
                             <p className="text-white text-base leading-relaxed italic pr-12">
                                "Great worker. Reliable and works hard. Would request again."
                             </p>
                             <div className="mt-4 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">Amazon LBA3, 24 Feb 2026</div>
                         </div>
                    </div>
                    <div className="lg:col-span-7 relative">
                         <div className="absolute inset-0 bg-teal-5/5 blur-[100px] rounded-full pointer-events-none" />
                         <div className="bg-[#161b28] rounded-[48px] border border-white/10 p-12 shadow-2xl relative z-10">
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                                <div>
                                    <h4 className="text-white font-bold opacity-40 uppercase tracking-widest text-[10px] mb-2">My Performance Profile</h4>
                                    <p className="text-white text-2xl font-bold">Good Morning, Peter!</p>
                                </div>
                                <div className="p-6 rounded-[28px] bg-teal-5/10 border border-teal-5/20 text-center min-w-[200px]">
                                    <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Overall Rating</div>
                                    <div className="text-teal-4 text-4xl font-mono font-black tabular-nums">4.7<span className="text-teal-4/30">/5.0</span></div>
                                    <p className="text-teal-4/60 text-[9px] font-black uppercase tracking-wider mt-2">Top 20% of Workforce</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {bars.map((b, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-white text-sm font-bold tracking-tight">{b.label}</span>
                                            <span className="text-white/60 text-[10px] font-mono">{b.score}/5.0</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(b.score / 5) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                                className={`h-full ${b.color} relative shadow-[0_0_15px_rgba(45,212,191,0.3)]`}
                                            />
                                        </div>
                                        <p className="text-white/40 text-[11px] font-medium italic">{b.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <div className="text-white/20 text-[11px] font-black tracking-widest uppercase flex items-center justify-center gap-2">
                                    <IconShieldCheck size={14} className="text-teal-5" /> Secured by ACCTRATE Intelligence
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Coaching Scenarios ────────────────────────────────────────────────────
function CoachingScenarios() {
    const scenarios = [
        {
            title: "Performance Recovery",
            scenario: "Worker ratings drop suddenly",
            solution: "AcceptMentor flags it → Consultant reaches out → Personal/transport issue resolved → Performance recovers instantly.",
            icon: IconHistory,
            tag: "FLAGGED ALERT",
            tagColor: "bg-red-500/10 text-red-500 border-red-500/20"
        },
        {
            title: "Promotion Path",
            scenario: "Top 10% performer identified",
            solution: "Highlighted for priority shifts, pay rise, or supervisor transition. High-value talent is locked in through recognition.",
            icon: IconBolt,
            tag: "HIGH PERFORMER",
            tagColor: "bg-teal-5/10 text-teal-4 border-teal-5/20"
        },
        {
            title: "The Early Alert",
            scenario: "New worker struggling in week 1",
            solution: "First 5 shifts show punctuality issues. Early intervention fixed the chronic late-habit before the probation ended.",
            icon: IconTarget,
            tag: "EARLY INTERVENTION",
            tagColor: "bg-blue-500/10 text-blue-500 border-blue-500/20"
        }
    ];

    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">COACHING IN ACTION</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight">Real Scenarios. Proven Impact.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((s, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-[#161b28] border border-white/5 hover:border-white/10 transition-all flex flex-col h-full">
                            <div className={`mb-8 inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-5/10 border border-teal-5/20`}>
                                 <span className={`text-[9px] font-black tracking-widest uppercase ${s.tagColor.split(' ')[1]}`}>{s.tag}</span>
                            </div>
                            <h4 className="text-white text-xl font-bold mb-6 pr-8">{s.title}</h4>
                            <div className="mb-6 space-y-4 flex-grow">
                                <div className="text-white/20 text-[10px] font-black uppercase tracking-widest">Scenario</div>
                                <p className="text-white/60 text-sm leading-relaxed">{s.scenario}</p>
                                <div className="w-8 h-px bg-white/5" />
                                <div className="text-teal-4/30 text-[10px] font-black uppercase tracking-widest">Accept Impact</div>
                                <p className="text-white text-sm leading-relaxed font-bold">{s.solution}</p>
                            </div>
                            <div className="mt-auto pt-8 border-t border-white/5 opacity-10">
                                <s.icon size={48} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function AcceptMentorPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <MentorHero />
      <MotivationSection />
      <MentorProcess />
      <WorkerDashboard />

      {/* Value Pillars Section (Lower Turnover, Better Performance, etc.) */}
      <section className="py-24 bg-[#0d1522] border-b border-white/5">
        <div className="mx-auto max-w-285 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                    { t: "Lower Turnover", d: "Supported workers stay longer, reducing recruitment costs.", i: IconHeart },
                    { t: "Better Performance", d: "Feedback drives clarity and continuous improvement.", i: IconTrendingUp },
                    { t: "Happier Clients", d: "Consistently good workers lead to fewer complaints.", i: IconShieldCheck },
                    { t: "Top Talent Retention", d: "Best workers stay for recognition and progression.", i: IconStar }
                ].map((item, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-16 h-16 rounded-3xl bg-teal-5/10 flex items-center justify-center text-teal-4 mx-auto mb-8 group-hover:scale-110 transition-transform">
                            <item.i size={28} />
                        </div>
                        <h4 className="text-white font-bold mb-4">{item.t}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CoachingScenarios />

      {/* CTA Section */}
      <CtaBanner
        badge="LAUNCHING SOON"
        title="Ready to Build a"
        titleHighlight="Better Workforce?"
        subtitle="AcceptMentor is launching soon. Be one of the first to invest in worker development, not just replacement."
        primaryButtonText="Get Early Access →"
        secondaryButtonText="Ask Questions"
      />

      <Footer />
    </main>
  );
}
