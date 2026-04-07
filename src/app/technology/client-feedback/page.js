"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { 
  IconMessage2, 
  IconShieldCheck, 
  IconUsers, 
  IconChartBar, 
  IconBulb,
  IconCheck,
  IconX,
  IconArrowRight,
  IconLock,
  IconClipboardCheck,
  IconSpeakerphone
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function FeedbackHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">Two-Way Site Intelligence</span>
          <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-white/10 text-white/40 border border-white/5 tracking-wider">COMING SOON</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Better Workers. <br /><span className="text-teal-5 text-glow-teal">Better Results.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Moving from "mystery turnover" to actionable intelligence. We gather direct, anonymous feedback from workers after every shift to optimize your site environment.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function SilenceSection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE PROBLEM</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">The Silence is Deafening</h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            Workers don't usually complain to clients; they simply stop showing up. This "silent turnover" leaves you guessing why workers are leaving and keeps you trapped in a cycle of recruitment costs.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                "Workers fear reprisal for being honest",
                                "Issues are often minor and fixable—if known",
                                "Turnover reasons are usually a mystery",
                                "Site conditions aren't viewed through worker's eyes"
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 text-white/40 font-medium">
                                    <IconSpeakerphone className="text-teal-5/40 mt-1" size={18} />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 rounded-[40px] bg-linear-to-br from-[#161b28] to-[#0d1522] border border-white/5 shadow-2xl relative">
                        <div className="absolute top-0 right-0 p-8">
                            <IconLock className="text-white/10" size={32} />
                        </div>
                        <h4 className="text-white text-2xl font-bold mb-6 italic">"Intelligence that helps everyone."</h4>
                        <p className="text-white/40 leading-relaxed mb-10">
                            Our Site Intelligence platform bridges the gap. By providing a safe, anonymous channel for feedback, we uncover the real reasons behind turnover and give you the data needed to create a site where workers want to stay.
                        </p>
                        <div className="p-6 rounded-2xl bg-teal-5/5 border border-teal-5/10">
                            <div className="text-teal-5 text-sm font-bold mb-2">Key Focus: Retention</div>
                            <p className="text-white/30 text-xs font-medium">Lower turnover = Lower recruitment costs = Higher productivity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Interactive Questionnaire Mockup ──────────────────────────────────────
function InteractiveSurvey() {
    return (
        <section className="py-24 bg-[#0d111a]">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE FEEDBACK LOOP</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">Real Insights. <br/>After Every Shift.</h3>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">
                            Workers receive a 30-second digital questionnaire automatically after their shift. It’s fast, mobile-first, and designed for maximum engagement.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Safety & Conditions", sub: "Was the site safe and well-equipped?" },
                                { title: "Management Support", sub: "How supportive was the supervisor?" },
                                { title: "Briefing Accuracy", sub: "Was the job what we described?" }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0">
                                        <IconCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{item.title}</div>
                                        <div className="text-white/30 text-xs font-medium">{item.sub}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7 flex justify-center">
                        <div className="w-full max-w-[400px] h-[650px] bg-[#161b28] rounded-[50px] border-[12px] border-[#0d111a] shadow-3xl overflow-hidden relative group">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0d111a] rounded-b-2xl z-20" />
                            <div className="p-8 pt-16">
                                <div className="mb-10">
                                    <div className="text-teal-4 text-[10px] font-bold uppercase tracking-widest mb-2">Shift Confirmation</div>
                                    <h4 className="text-white text-xl font-bold">How was your day?</h4>
                                </div>
                                
                                <div className="space-y-10">
                                    {[
                                        { q: "How safe did you feel on site?", type: "rating" },
                                        { q: "Was the briefing we gave you accurate?", type: "yesno" },
                                        { q: "How supportive was the site management?", type: "rating" },
                                        { q: "Would you work here again?", type: "yesno" }
                                    ].map((q, i) => (
                                        <div key={i} className="space-y-4">
                                            <div className="text-white/60 text-sm font-medium">{q.q}</div>
                                            {q.type === 'rating' ? (
                                                <div className="flex justify-between gap-2">
                                                    {[1,2,3,4,5].map(n => (
                                                        <div key={n} className="w-full aspect-square rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 text-xs font-bold hover:bg-teal-5 hover:text-white hover:border-teal-4 transition-all cursor-pointer">
                                                            {n}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex gap-3">
                                                    <div className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs font-bold text-white/20 hover:bg-teal-5 hover:text-white transition-all cursor-pointer">Yes</div>
                                                    <div className="flex-1 py-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs font-bold text-white/20 hover:bg-white/10 transition-all cursor-pointer">No</div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <div className="w-full py-4 rounded-2xl bg-teal-5 text-white text-xs font-bold uppercase tracking-widest text-center shadow-lg shadow-teal-5/20">
                                        Submit Feedback
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

// ─── Value Pillars ─────────────────────────────────────────────────────────
function ValueGrid() {
    const pillars = [
        { title: "Anonymous & Honest", desc: "No names, no reprisal. We get the raw truth that clients never hear.", icon: IconLock },
        { title: "After Every Shift", desc: "We catch issues while fresh—not weeks later during an exit interview.", icon: IconSpeakerphone },
        { title: "Constructive Insights", desc: "We don't just find problems; we identify trends that you can fix.", icon: IconBulb },
        { title: "Actionable Data", desc: "Turnover reports and site ratings provided to you in real-time.", icon: IconChartBar }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, i) => (
                        <div key={i} className="p-10 rounded-[32px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all group">
                             <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <p.icon size={28} />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{p.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Comparison Section ────────────────────────────────────────────────────
function ComparisonSection() {
    return (
        <section className="py-24 bg-[#0d1522] border-y border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE DIFFERENCE</h2>
                    <h3 className="text-white text-4xl font-bold mb-6 tracking-tight">Transparency vs. Mystery</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-[40px] overflow-hidden border border-white/10">
                    <div className="bg-[#161b28] p-12 lg:p-20">
                        <div className="flex items-center gap-3 mb-12">
                            <IconX className="text-red-500" size={24} />
                            <span className="text-white/40 uppercase font-bold tracking-widest text-xs">Mystery Turnover</span>
                        </div>
                        <ul className="space-y-8">
                            {[
                                "Guesswork on why people leave",
                                "Silent departures with no notice",
                                "Repeated site-environment mistakes",
                                "High recruitment & induction costs"
                            ].map((t, i) => (
                                <li key={i} className="text-white/60 font-medium italic pl-6 border-l border-red-500/20">{t}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#1c2436] p-12 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/10 blur-[100px]" />
                        <div className="flex items-center gap-3 mb-12">
                            <IconCheck className="text-teal-5" size={24} />
                            <span className="text-teal-5 uppercase font-bold tracking-widest text-xs">Site Intelligence</span>
                        </div>
                        <ul className="space-y-8">
                            {[
                                "Real insights into site conditions",
                                "Fixable issues caught immediately",
                                "Optimized environment for retention",
                                "Partnering for long-term success"
                            ].map((t, i) => (
                                <li key={i} className="text-white font-bold flex gap-4">
                                    <IconCheck size={20} className="text-teal-5 shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function ClientFeedbackPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <FeedbackHero />
      <SilenceSection />
      <InteractiveSurvey />
      <ValueGrid />
      <ComparisonSection />

      {/* CTA Section */}
      <CtaBanner
        badge="COMING SOON"
        title="Ready for Real"
        titleHighlight="Transparency?"
        subtitle="Be the first to gain access to our Site Intelligence platform. Partner with us to optimize your environment and slash worker turnover."
        primaryButtonText="Join the Waitlist"
        secondaryButtonText="Learn More"
      />

      <Footer />
    </main>
  );
}
