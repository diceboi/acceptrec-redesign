"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Industries } from "@/components/sections/Industries";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { IconStar, IconTrendingUp, IconTrophy, IconScan } from "@tabler/icons-react";

// ─── Inner Hero Component ──────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      {/* ── Background Blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "50%",
            left: "5%",
            top: "10%",
            background: "var(--color-teal-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "50%",
            width: "45%",
            right: "5%",
            top: "20%",
            background: "var(--color-purple-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-0">
        {/* Left: Text */}
        <div className="flex flex-col items-start text-left">
          <motion.h1 
            className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Better <span className="text-teal-5">Workers.</span>
          </motion.h1>

          <motion.p 
            className="text-xl leading-relaxed text-white/50 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not just temps who show up. Temps who perform.
          </motion.p>

          <motion.p 
            className="text-xl font-bold leading-relaxed text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Rated every shift. Coached to improve. Rewarded for results.
          </motion.p>
          
          {/* Pills */}
          <motion.div 
             className="flex flex-wrap gap-2.5 mb-10"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["AcceptRate", "AcceptCoach", "AcceptRewards", "AcceptPulse"].map(p => (
              <span key={p} className="px-4 py-1.5 rounded-full bg-[#1c2230] border border-white/5 text-xs font-bold text-white tracking-wide">
                {p}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-teal-5 hover:bg-teal-4 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              Get Reliable Staff
            </button>
            <button className="bg-[#1c2230] hover:bg-[#232a3b] text-white border border-white/5 font-bold px-7 py-3.5 rounded-xl transition-colors">
              See the Technology
            </button>
          </motion.div>
        </div>

        {/* Right: Phone UI */}
        <motion.div 
           className="relative mx-auto w-full max-w-[320px] rounded-[2.5rem] bg-white p-6 shadow-2xl hidden lg:block"
           initial={{opacity: 0, scale: 0.9, rotate: -2}} 
           animate={{opacity:1, scale:1, rotate:0}} 
           transition={{duration: 0.8, delay: 0.3}}
        >
          {/* Phone styling */}
          <div className="text-center font-sans">
            <h3 className="text-[#0d1522] font-bold text-[17px] mt-4">Your Performance</h3>
            <p className="text-[#64748B] text-xs font-medium mb-10">This week • 5 shifts</p>
            
            <div className="text-[#0d1522] text-[72px] font-bold leading-none mb-1 tracking-tight">4.8</div>
            <div className="flex justify-center gap-1.5 mb-2">
               {[1,2,3,4,5].map(i => <IconStar key={i} size={22} className="fill-[#FACC15] text-[#FACC15]" />)}
            </div>
            <p className="text-[#64748B] text-xs font-semibold mb-12">Top 15% of workers</p>

            <div className="bg-[#effefb] rounded-2xl p-4 flex justify-between items-center mb-6">
               <div className="flex items-center gap-2">
                 <div className="bg-teal-5 rounded-md p-1.5"><IconStar size={14} strokeWidth={3} className="text-white fill-white border-0" /></div>
                 <span className="font-bold text-[#0d1522] text-[15px]">Points</span>
               </div>
               <span className="text-teal-5 font-bold text-[22px]">2,450</span>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-5 text-sm pb-2">
               <div className="flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Punctuality</span>
                  <span className="text-teal-6 font-bold">100%</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Performance</span>
                  <span className="text-teal-6 font-bold">Excellent</span>
               </div>
            </div>
          </div>
          {/* Faux notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[26px] bg-[#0d111a] rounded-b-3xl" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0d111a] to-transparent" />
    </section>
  );
}

// ─── Why Us Grid Component (Workers who get better) ────────────────────────
function WhyUsGrid() {
  const points = [
    {
      badge: "ACCEPTRATE",
      title: "Every worker rated. Every shift.",
      desc: "We rate every worker on every shift — punctuality, performance, attitude. Low scorers don't come back. You only get workers who've earned their place.",
      icon: IconStar
    },
    {
      badge: "ACCEPTCOACH",
      title: "Workers get better over time.",
      desc: "We don't just rate workers — we coach them. Feedback after every shift. Tips to improve. Good workers become great workers. Your standards become their standards.",
      icon: IconTrendingUp
    },
    {
      badge: "ACCEPTREWARDS",
      title: "Performance is rewarded.",
      desc: "Great performance earns points. Points unlock rewards and priority shifts. Top workers compete for recognition. Bad incentives create bad workers — good incentives create great ones.",
      icon: IconTrophy
    },
    {
      badge: "ACCEPTPULSE",
      title: "Know who's on site. Live.",
      desc: "Real-time attendance with photo verification. See exactly who arrived, when they clocked in, where they were. Instant alerts if anyone's missing. No guessing.",
      icon: IconScan
    }
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            THE ACCEPT DIFFERENCE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Workers who get better, not just bodies.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Other agencies send whoever&apos;s available. We send rated, coached workers who earn their place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={p.icon}
                title={
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00A99D] mb-2">
                      {p.badge}
                    </div>
                    {p.title}
                  </div>
                }
                titleClassName="text-2xl"
                description={p.desc}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
           <a href="#" className="font-bold text-teal-4 hover:text-teal-3 transition-colors flex items-center justify-center gap-2 group">
             Explore all our technology <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </div>
    </section>
  );
}

// ─── Green Stats Bar ───────────────────────────────────────────────────────
function GreenStatsBar() {
  const stats = [
    { value: "100%", label: "Workers rated", sub: "Every worker, every shift" },
    { value: "4.2★", label: "Average worker score", sub: "Tracked and Improving" },
    { value: "98%", label: "Fill rate", sub: "Quality workers, not just bodies" },
    { value: "1,200", label: "Daily workers", sub: "Rated, coached, rewarded" },
  ];
  return (
    <section className="w-full bg-[#0FA393] py-14 font-sans text-white border-b border-[#0a7a6e]">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-white/20">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl lg:text-[44px] font-bold mb-3 tracking-tight">{s.value}</div>
            <div className="font-bold text-lg leading-snug mb-1">{s.label}</div>
            <div className="text-[13px] font-medium opacity-80">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Pain Points Component ─────────────────────────────────────────────────
function PainPoints() {
  const painPoints = [
    {
      problem: '"Workers who just do the minimum"',
      solution: "Our workers are rated every shift — and they know it. Performance matters. Low scorers don't come back. You get workers who actually try.",
    },
    {
      problem: '"Agencies sending whoever\'s available"',
      solution: "We rate every worker, every shift. Low scorers get removed. You only get workers who've earned their place, not whoever answered their phone.",
    },
    {
      problem: '"No improvement over time"',
      solution: "We coach our workers. Feedback after every shift. Tips to get better. Workers who start good become great. Your standards become their standards.",
    },
    {
      problem: '"Workers with no incentive to perform"',
      solution: "Great performance earns points. Points unlock rewards and priority shifts. Good incentives create good workers.",
    },
    {
      problem: '"Can\'t get hold of your agency when you need them"',
      solution: "Same-day response guaranteed. Call at 6am, workers on site by start of shift. We answer phones. We solve problems. That's the job.",
    },
    {
      problem: '"Different faces every single day"',
      solution: "We build you a reliable core team. Same good workers coming back. consistency that compounds.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Tired of mediocre temps?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Workers show up. But are they any good? We solved that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="bg-[#151a26] border border-white/5 rounded-2xl p-8 hover:bg-[#1a202d] transition-colors shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[10px] font-bold text-red-500/80 tracking-widest uppercase mb-2">The Problem</div>
              <h3 className="text-lg font-bold text-white mb-6">
                {point.problem}
              </h3>
              <div className="text-[10px] font-bold text-teal-4 tracking-widest uppercase mb-2 mt-auto pt-6 border-t border-white/5">How We Fix It</div>
              <p className="text-white/60 leading-relaxed text-sm">
                {point.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Component ────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell us what you need",
      desc: "Roles, numbers, dates. 2-minute call.",
    },
    {
      step: "02",
      title: "We match workers",
      desc: "From our rated, vetted pool.",
    },
    {
      step: "03",
      title: "Workers check in live",
      desc: "You see arrivals in real-time.",
    },
    {
      step: "04",
      title: "We handle everything",
      desc: "Payroll, compliance, problems.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
            SIMPLE PROCESS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-[24px] bg-[#121622] border border-white/5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[56px] font-black text-teal-5 mb-4 leading-none">
                {item.step}
              </div>
              <h3 className="text-[19px] font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function TemporaryStaffing() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />
      
      <InnerHero />
      
      <WhyUsGrid />

      <GreenStatsBar />

      <PainPoints />

      {/* Technology helps. People deliver message banner */}
      <section className="bg-teal-5 text-navy-900 py-24 px-6 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[34px] md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Technology helps. People deliver.
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
            All the tech in the world doesn&apos;t matter if no one answers the phone at 6am.
            We&apos;re recruiters first. We know what it takes to fill a shift, solve a problem,
            and keep an operation running. The technology just makes us faster and more reliable.
          </p>
        </div>
      </section>

      <Industries />

      <HowItWorks />

      <CtaBanner
        badge="GET STARTED TODAY"
        title="Ready for temps who actually"
        titleHighlight="perform?"
        subtitle="Every worker rated, coached, and rewarded. Quality you can measure, improvement you can see."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Calculate Your Costs"
      />

      <Footer />
    </main>
  );
}
