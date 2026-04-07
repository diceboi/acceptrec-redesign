"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconActivity, 
  IconMessage2, 
  IconUserSearch, 
  IconRobot, 
  IconDeviceMobile, 
  IconChartDots,
  IconShieldCheck,
  IconClock,
  IconArrowRight,
  IconCheck,
  IconBulb,
  IconTarget,
  IconChartLine
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function TechnologyHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0d1522] pt-40 pb-16 border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-5/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-285 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Real Results, Real Solutions</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The Future of <span className="text-teal-5 text-glow-teal">Staffing is Here.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/50 mb-12"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          While other agencies use phones and spreadsheets, we're building technology that transforms how temporary staffing works.
        </motion.p>
        
        {/* Banner from legacy */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-block px-6 py-3 bg-teal-5/5 border border-teal-5/10 rounded-2xl"
        >
            <p className="text-sm font-bold text-teal-5">
                Cut No-Shows 75%. See how InPost hit 98% fill rate through our platform.
            </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Philosophy Section ──────────────────────────────────────────────────
function PhilosophySection() {
    return (
        <section className="py-24 bg-[#0d1522] border-b border-white/5">
            <div className="mx-auto max-w-285 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">OUR PHILOSOPHY</h2>
                        <h3 className="text-white text-4xl font-bold mb-8 tracking-tight">Built by recruiters who understand your problems.</h3>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            We're recruiters. We've spent years dealing with the same problems you have: morning no-shows, missing paperwork, and the lack of visibility into site performance.
                        </p>
                        <p className="text-white/40 text-lg leading-relaxed mb-10">
                            So we started building. Not just software, but a completely integrated ecosystem that simplifies the way people find, manage, and scale their temporary workforce.
                        </p>
                        <blockquote className="border-l-4 border-teal-5 pl-6 py-2 italic font-medium text-white/80">
                            "The agencies that don't innovate won't survive the next decade."
                        </blockquote>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                         {[
                             { label: "Years Experience", value: "25+", icon: IconActivity },
                             { label: "Trustpilot Score", value: "4.8/5", icon: IconCheck },
                             { label: "Google Reviews", value: "1500+", icon: IconMessage2 },
                             { label: "Fill Rate Goal", value: "100%", icon: IconTarget },
                         ].map((s, i) => (
                             <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-teal-5/20 transition-all">
                                 <div className="text-white font-bold text-3xl mb-2">{s.value}</div>
                                 <div className="text-white/30 text-[11px] uppercase font-bold tracking-widest leading-tight">{s.label}</div>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Workflow Section ──────────────────────────────────────────────────────
function AutomationWorkflow() {
    const steps = [
        {
            time: "30 MIN BEFORE",
            title: "Pre-Shift Reminder",
            desc: "Location-aware WhatsApp nudge sent to all scheduled workers.",
            icon: IconMessage2
        },
        {
            time: "10 MIN AFTER START",
            title: "No-Show Alert",
            desc: "AcceptPulse flags any missing clock-ins against geo-fenced site data.",
            icon: IconShieldCheck
        },
        {
            time: "IMMEDIATE RESOLUTION",
            title: "Auto-Call",
            desc: "If no response, manager is alerted and standby workers are notified.",
            icon: IconActivity
        }
    ];

    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-285 px-6">
                <div className="text-center mb-20">
                    <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6">No-Shows? <span className="text-teal-5">We Handle It Automatically.</span></h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">Our automated workflow eliminates the stress of morning check-ins and ensures your site is always at 100% capacity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-linear-to-r from-teal-5/0 via-teal-5/20 to-teal-5/0" />
                    
                    {steps.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-teal-5 flex items-center justify-center text-white mb-8 shadow-xl shadow-teal-5/10 relative z-10 border border-white/20">
                                <step.icon size={28} />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#161b28] border border-white/10 flex items-center justify-center text-[10px] font-bold text-teal-5">
                                    0{i+1}
                                </div>
                            </div>
                            <div className="text-teal-5 text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">{step.time}</div>
                            <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function TechnologyPage() {
  return (
    <main className="bg-[#0d1522] min-h-screen font-sans">
      <Navbar />

      <TechnologyHero />
      <PhilosophySection />

      {/* Product Bento Grid */}
      <section className="py-24 bg-[#0d111a]">
        <div className="mx-auto max-w-285 px-6">
          <div className="text-center mb-16">
              <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Three Tools. <span className="text-teal-5 text-glow-teal">Infinite Impact.</span></h2>
              <p className="text-white/40 text-lg">Integrated systems designed to provide visibility, connectivity, and data-driven results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <BentoCard
                title="AcceptPulse"
                description="Real-time visibility into who's on site, who's missing, and how your site is performing. No more guesswork. Gain 100% accurate geo-fenced data transmitted directly to your live dashboard."
                icon={IconActivity}
                className="bg-[#161b28] border-teal-5/20"
              >
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-teal-5 font-bold text-xl mb-1">98%</div>
                        <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest leading-tight">Verification Accuracy</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <div className="text-teal-5 font-bold text-xl mb-1">0%</div>
                        <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest leading-tight">Timesheet Fraud</div>
                    </div>
                </div>
              </BentoCard>
            </div>

            <div className="md:col-span-4">
              <BentoCard
                title="AcceptConnect"
                description="Your entire workforce, one platform. Mass-messaging and worker connectivity. Every worker. Every shift. Every time."
                icon={IconMessage2}
                className="bg-[#1c2230]"
              />
            </div>

            <div className="md:col-span-4 lg:col-span-4">
               <BentoCard
                title="The Coach"
                description="AI-driven worker support. 24/7 multilingual assistance for payslips, shifts, and policy queries. Ensuring your workers are always informed and supported."
                icon={IconRobot}
                className="bg-[#1c2230]"
              >
                 <span className="inline-block mt-4 px-3 py-1 rounded-full bg-purple-5/20 border border-purple-5/30 text-[10px] font-bold text-purple-4 uppercase tracking-widest font-sans">AI Support</span>
              </BentoCard>
            </div>

            <div className="md:col-span-4 lg:col-span-4">
               <BentoCard
                title="Performance Coach"
                description="Helping our workers grow and achieve more. Track reliability and reward top talent through our proprietary scoring system."
                icon={IconChartLine}
                className="bg-[#1c2230]"
              />
            </div>

            <div className="md:col-span-4 lg:col-span-4">
              <BentoCard
                title="Accept Talent Match"
                description="Every placement backed by data. We analyse skills, reliability history, and bidirectional feedback to ensure the right person is on the right shift."
                icon={IconUserSearch}
                className="bg-[#1c2230]"
              />
            </div>
          </div>
        </div>
      </section>

      <AutomationWorkflow />

      {/* Results Section */}
      <section className="py-24 bg-[#0d111a] border-y border-white/5">
        <div className="mx-auto max-w-285 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8">Why This <span className="text-teal-5">Matters</span></h2>
                    <div className="space-y-6">
                        {[
                            "80% reduction in manual admin time.",
                            "Instant visibility at the site level.",
                            "Real-time issue resolution.",
                            "Geofencing for 100% accurate attendance."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                                <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-5 group-hover:bg-teal-5 group-hover:text-white transition-all">
                                    <IconCheck size={14} strokeWidth={3} />
                                </div>
                                <p className="text-white/60 font-medium leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-[#161b28] rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[100px] pointer-events-none" />
                    <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3 tracking-tight">
                        <IconChartDots className="text-teal-5" /> Just the Beginning.
                    </h3>
                    <p className="text-white/40 text-lg leading-relaxed mb-10">
                        "Agencies that continue to treat recruitment as a manual game are leaving their clients' production lines at risk. Our technology is designed to protect your output, not just fill seats."
                    </p>
                    <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                        <div className="h-12 w-12 rounded-full bg-linear-to-br from-teal-5 to-purple-5" />
                        <div>
                            <div className="text-white text-sm font-bold tracking-tight">Accept Tech Labs</div>
                            <div className="text-teal-5/50 text-[10px] font-bold uppercase tracking-widest">Innovation Report 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <CtaBanner
        badge="INNOVATION DRIVEN"
        title="Want to see it"
        titleHighlight="in action?"
        subtitle="The tools are ready. The visibility is waiting. Book a 15-minute tech demo today."
        primaryButtonText="Book Demo"
        secondaryButtonText="View Portal"
      />

      <Footer />
    </main>
  );
}
