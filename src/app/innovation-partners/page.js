"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconSparkles, 
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
  IconMessage2,
  IconClock,
  IconShieldCheck,
  IconBolt,
  IconDeviceLaptop,
  IconBriefcase
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnovationHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d111a] pt-48 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <IconSparkles className="text-teal-5" size={16} />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 text-glow-teal">LIMITED TO 10 FOUNDING PARTNERS</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Be First. <br /><span className="text-teal-5 text-glow-teal">Be Better.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join our Innovation Partner program for exclusive early access to technology that will transform how temporary staffing works.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Philosophy Section ────────────────────────────────────────────────────
function InnovationPhilosophy() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5 relative overflow-hidden">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight leading-tight">This isn't a beta test. <br /><span className="text-teal-4">It's a partnership.</span></h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Most agencies will catch up to this technology in 3-5 years. Our Innovation Partners will have mastered it by then. 
                        </p>
                        <div className="space-y-6">
                            {[
                                "You give us honest feedback — good and bad",
                                "We build features that solve YOUR problems",
                                "We both win when staffing works better"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-white font-bold text-base">
                                    <IconCircleCheckFilled className="text-teal-5 shrink-0" size={24} />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-12 rounded-[40px] bg-[#161b28] border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <IconBrain size={64} />
                        </div>
                        <h4 className="text-white text-2xl font-bold mb-6 tracking-tight leading-snug italic">Innovation is a two-way street.</h4>
                        <p className="text-white/40 text-lg leading-relaxed">
                            We're building technology that will change how staffing works — and we want partners who will help us get it right.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Benefits Grid ─────────────────────────────────────────────────────────
function PartnerBenefits() {
    const benefits = [
        { t: "First Access", d: "Use technology 3-6 months before anyone else in the industry.", i: IconBolt },
        { t: "Direct Influence", d: "Monthly feedback sessions with our product team. Request items, shape how it works.", i: IconMessage2 },
        { t: "White Glove Support", d: "Dedicated implementation support. Direct line to senior team. Issues resolved same-day.", i: IconShieldCheck },
        { t: "Innovation Status", d: "Recognition as an industry innovator. Featured in case studies. Invited to exclusive events.", i: IconStar }
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-16">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE ADVANTAGE</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight">What Innovation Partners Get</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-[#161b28] border border-white/5 hover:border-teal-5/20 transition-all flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-3xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8">
                                <b.i size={32} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-4">{b.t}</h4>
                            <p className="text-white/30 text-sm leading-relaxed">{b.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Technology Highlights ─────────────────────────────────────────────────
function TechShowcase() {
    const tools = [
        { t: "AcceptPulse", d: "Real-time performance analytics for your specific operation.", i: IconChartBar },
        { t: "AcceptConnect", d: "The worker communication platform that automates engagement.", i: IconMessage2 },
        { t: "AcceptMatch", d: "AI-driven matching between worker skills and shift requirements.", i: IconTarget },
        { t: "AcceptRate", d: "Quality-based rating system for continuous improvement.", i: IconStar },
        { t: "Performance Coach", d: "Automated coaching triggers for underperforming workers.", i: IconSchool },
        { t: "Client Portal", d: "Full transparency and control over your temporary workforce.", i: IconDeviceLaptop }
    ];

    return (
        <section className="py-24 bg-[#0d111a] border-b border-white/5">
             <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-16">
                     <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE PORTFOLIO</h2>
                     <h3 className="text-white text-4xl font-bold tracking-tight">Innovation at every touchpoint.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((t, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-[#161b28] border border-white/5 hover:border-white/10 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/30 mb-6 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                <t.i size={24} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">{t.t}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{t.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── The Ask Section ───────────────────────────────────────────────────────
function TheAsk() {
    const askItems = [
        { t: "Honest Feedback", d: "Tell us exactly what you think - good and bad." },
        { t: "Monthly Check-ins", d: "Just 30 minutes a month to review features." },
        { t: "Usage Data", d: "Help us understand how the tools are used (anonymized)." },
        { t: "Be a Reference", d: "Case studies or testimonials (Only if you're happy)." }
    ];

    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5 relative overflow-hidden">
             <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE COMMITMENT</h2>
                         <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">What we ask in return.</h3>
                         <div className="space-y-8">
                            {askItems.map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0 font-bold group-hover:bg-teal-5 group-hover:text-white transition-all">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1 text-lg">{item.t}</div>
                                        <div className="text-white/40 text-sm leading-relaxed">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                    <div className="relative">
                         <div className="absolute inset-0 bg-teal-5/5 blur-[100px] rounded-full pointer-events-none" />
                         <div className="bg-[#161b28] p-12 rounded-[48px] border border-white/10 shadow-2xl relative z-10 text-center">
                            <IconHeart className="text-teal-5 mx-auto mb-8 animate-pulse" size={64} />
                            <h4 className="text-white text-3xl font-bold mb-6 tracking-tight">Founding Partners</h4>
                            <p className="text-white/40 text-lg leading-relaxed mb-8">
                                This program is strictly limited to our first <strong>10 Founding Partners</strong>. 
                            </p>
                            <div className="p-6 rounded-2xl bg-teal-5/10 border border-teal-5/20 inline-block">
                                <span className="text-teal-4 font-black uppercase tracking-widest text-xs">Only 4 slots remaining for 2026/27</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Application Form ──────────────────────────────────────────────────────
function InnovationForm() {
    return (
        <section className="py-24 bg-[#0d111a]" id="apply">
             <div className="mx-auto max-w-285 px-6">
                <div className="bg-[#161b28] rounded-[56px] border border-white/10 p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                        <IconSparkles size={300} />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">READY TO LEAD?</h2>
                            <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8">Apply for the Program.</h3>
                            <p className="text-white/40 text-lg leading-relaxed mb-12">
                                Tell us a bit about your operation and why you want to be an Innovation Partner. Our product team will be in touch within 48 hours.
                            </p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Full Name</label>
                                    <input className="w-full bg-[#0d111a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Email Address</label>
                                    <input className="w-full bg-[#0d111a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" placeholder="john@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Company Name</label>
                                    <input className="w-full bg-[#0d111a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" placeholder="Acme Logistics" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Sector / Operation</label>
                                    <input className="w-full bg-[#0d111a] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" placeholder="Warehouse Management" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase tracking-widest text-white/30 ml-4">Why do you want to join?</label>
                                <textarea rows={4} className="w-full bg-[#0d111a] border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all resize-none" placeholder="Briefly describe your interest..." />
                            </div>
                            <div className="text-center">
                                <Button size="lg" className="px-12 py-6 rounded-full group">
                                    Submit Application <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </Button>
                                <p className="mt-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">A Senior Product Manager will review your inquiry.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function InnovationPartnersPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <InnovationHero />
      <InnovationPhilosophy />
      <PartnerBenefits />
      <TechShowcase />
      <TheAsk />
      <InnovationForm />

      <Footer />
    </main>
  );
}
