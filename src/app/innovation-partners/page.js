"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconSparkles, 
  IconBrain, 
  IconStar, 
  IconSchool, 
  IconHeart, 
  IconCircleCheckFilled,
  IconArrowRight,
  IconChartBar,
  IconMessage2,
  IconShieldCheck,
  IconBolt,
  IconDeviceLaptop,
  IconTarget,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { sendInnovationEmail } from "@/app/actions/email";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnovationHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute rounded-full" style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }} animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute rounded-full" style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }} animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <IconSparkles className="text-teal-5" size={16} />
          <span className="text-sm font-semibold text-teal-4">Limited to 10 Founding Partners</span>
        </motion.div>
        <motion.h1 className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          Be First. <span className="text-teal-5">Be Better.</span>
        </motion.h1>
        <motion.p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Join our Innovation Partner program for exclusive early access to technology that will transform how temporary staffing works.
        </motion.p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Philosophy Section ────────────────────────────────────────────────────
function InnovationPhilosophy() {
    return (
        <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-4xl font-semibold text-white mb-8 tracking-tight leading-tight">This isn&apos;t a beta test. <br /><span className="text-teal-5">It&apos;s a partnership.</span></h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-10">
                            Most agencies will catch up to this technology in 3-5 years. Our Innovation Partners will have mastered it by then. 
                        </p>
                        <div className="space-y-6">
                            {[
                                "You give us honest feedback — good and bad",
                                "We build features that solve YOUR problems",
                                "We both win when staffing works better"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-white font-semibold text-base">
                                    <IconCircleCheckFilled className="text-teal-5 shrink-0" size={24} />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-2xl p-12 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <IconBrain size={64} />
                        </div>
                        <h4 className="relative text-white text-2xl font-semibold mb-6 tracking-tight leading-snug italic">Innovation is a two-way street.</h4>
                        <p className="relative text-[#8B98AB] text-lg leading-relaxed">
                            We&apos;re building technology that will change how staffing works — and we want partners who will help us get it right.
                        </p>
                    </motion.div>
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
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE ADVANTAGE</span>
                     <h2 className="text-4xl font-semibold text-white tracking-tight">What Innovation Partners Get</h2>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {benefits.map((b, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-10 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 mx-auto group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                <b.i size={32} />
                            </div>
                            <h4 className="relative text-white font-semibold text-lg mb-4">{b.t}</h4>
                            <p className="relative text-[#8B98AB] text-sm leading-relaxed">{b.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
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
        <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                     <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE PORTFOLIO</span>
                     <h2 className="text-4xl font-semibold text-white tracking-tight">Innovation at every touchpoint.</h2>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {tools.map((t, i) => (
                        <motion.div key={i} variants={cardVariants} className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm">
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#8B98AB] mb-6 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                <t.i size={24} />
                            </div>
                            <h4 className="relative text-white font-semibold text-lg mb-2">{t.t}</h4>
                            <p className="relative text-[#8B98AB] text-sm leading-relaxed">{t.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
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
        <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
            <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
             <div className="relative z-10 mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                         <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE COMMITMENT</span>
                         <h2 className="text-4xl font-semibold text-white mb-8 tracking-tight">What we ask in return.</h2>
                         <div className="space-y-8">
                            {askItems.map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0 font-semibold group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold mb-1 text-lg">{item.t}</div>
                                        <div className="text-[#8B98AB] text-sm leading-relaxed">{item.d}</div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                         <div className="absolute inset-0 bg-teal-5/5 blur-[100px] rounded-full pointer-events-none" />
                         <div className="glass-card rounded-2xl border-white/10 p-12 relative z-10 text-center">
                            <IconHeart className="text-teal-5 mx-auto mb-8 animate-pulse" size={64} />
                            <h4 className="text-white text-3xl font-semibold mb-6 tracking-tight">Founding Partners</h4>
                            <p className="text-[#8B98AB] text-lg leading-relaxed mb-8">
                                This program is strictly limited to our first <strong className="text-white">10 Founding Partners</strong>. 
                            </p>
                            <div className="p-6 rounded-2xl bg-teal-5/10 border border-teal-5/20 inline-block">
                                <span className="text-teal-4 font-semibold uppercase tracking-widest text-xs">Only 4 slots remaining for 2026/27</span>
                            </div>
                         </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── Application Form ──────────────────────────────────────────────────────
function InnovationForm() {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        sector: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        
        const result = await sendInnovationEmail(formData);
        
        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (status === "success") {
        return (
            <section className="py-24 bg-navy-900">
                <div className="mx-auto max-w-[1140px] px-6 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-16 max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-teal-5/10 rounded-full flex items-center justify-center mx-auto mb-8">
                            <IconCircleCheckFilled className="text-teal-5" size={40} />
                        </div>
                        <h2 className="text-4xl font-semibold text-white mb-6">Application Received</h2>
                        <p className="text-[#8B98AB] text-lg mb-10">Thanks for your interest! Our product team will review your application and contact you within 48 hours.</p>
                        <button onClick={() => setStatus("idle")} className="text-teal-5 font-semibold uppercase tracking-widest text-sm hover:text-white transition-colors">Submit another application</button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-navy-900" id="apply">
             <div className="mx-auto max-w-[1140px] px-6">
                <div className="glass-card rounded-2xl border-white/10 p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                        <IconSparkles size={300} />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">READY TO LEAD?</span>
                            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Apply for the Program.</h2>
                            <p className="text-[#8B98AB] text-lg leading-relaxed mb-12">
                                Tell us a bit about your operation and why you want to be an Innovation Partner. Our product team will be in touch within 48 hours.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Full Name</label>
                                    <input 
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Email Address</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="john@company.com" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Company Name</label>
                                    <input 
                                        name="companyName"
                                        required
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="Acme Logistics" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Sector / Operation</label>
                                    <input 
                                        name="sector"
                                        required
                                        value={formData.sector}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all" 
                                        placeholder="Warehouse Management" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-semibold uppercase tracking-widest text-[#8B98AB] ml-4">Why do you want to join?</label>
                                <textarea 
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4} 
                                    className="w-full bg-navy-900 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-teal-5 transition-all resize-none" 
                                    placeholder="Briefly describe your interest..." 
                                />
                            </div>
                            <div className="text-center">
                                <Button 
                                    type="submit"
                                    disabled={status === "loading"}
                                    size="lg" 
                                    className="px-12 py-6 rounded-full group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Submitting..." : "Submit Application"} <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </Button>
                                {status === "error" && (
                                     <p className="text-red-400 text-xs text-center font-semibold mt-4">Something went wrong. Please try again or contact us directly.</p>
                                 )}
                                <p className="mt-6 text-[10px] font-semibold text-[#8B98AB]/70 uppercase tracking-widest">A Senior Product Manager will review your inquiry.</p>
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
    <main className="bg-navy-900 min-h-screen">
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
