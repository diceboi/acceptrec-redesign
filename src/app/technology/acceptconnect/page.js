"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import {
  IconMessage2,
  IconUsers,
  IconBellRinging,
  IconHistory,
  IconMapPin,
  IconFileText,
  IconShieldCheck,
  IconCheck,
  IconArrowRight,
  IconClock,
  IconBroadcast,
  IconDeviceMobile,
  IconFileInvoice,
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function ConnectHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 dot-pattern" />
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5 font-sans">
            Unified Communication Platform
          </span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your Entire Workforce, <br />
          <span className="text-teal-5">One Platform.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/60 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No more WhatsApp chaos. No more missed messages. One platform where
          every worker is connected, informed, and ready to go.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    "15 WhatsApp groups. Half your workers aren't even in the right one.",
    "Need to reach everyone? Copy-paste the same message 15 times. Still miss people.",
    "Worker claims they never got the message. You've got no proof either way.",
    "Shift details? Buried in a chat thread from 3 days ago. Good luck finding it.",
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              THE CHALLENGE
            </h2>
            <h3 className="text-white text-4xl font-bold mb-10 tracking-tight leading-tight">
              Communication Shouldn't <br />
              Be This Hard
            </h3>
            <p className="text-[#8B98AB] text-lg leading-relaxed mb-10">
              Relying on fragmented messaging apps to manage a high-volume
              workforce is a recipe for operational failure. It’s messy, it’s
              unsecure, and it’s costing you time.
            </p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-5/40 shrink-0">
                    <IconBroadcast size={16} />
                  </div>
                  <p className="text-white/70 font-medium text-sm leading-relaxed">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-[#161b28] to-[#0d1522] border border-white/10 flex flex-col justify-center items-center p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]" />
            <div className="relative z-10 text-center max-w-sm">
              <h4 className="text-white text-2xl font-bold mb-6 italic leading-snug">
                "You need a better way. AcceptConnect is it."
              </h4>
              <p className="text-[#8B98AB] leading-relaxed font-medium">
                We've built the communication tool that staffing agencies have
                been waiting for. Direct, secure, and fully integrated with our
                core database.
              </p>
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
    {
      title: "Everyone Joins",
      icon: IconDeviceMobile,
      desc: "Workers download the app or use the web version. One login. They're connected.",
    },
    {
      title: "You Send Messages",
      icon: IconMessage2,
      desc: "Broadcast to everyone, specific sites, or individuals. Instant delivery with full read receipts.",
    },
    {
      title: "Workers Informed",
      icon: IconBellRinging,
      desc: "Shift reminders, confirmations, and updates — all in one centralized feed. No digging through chats.",
    },
  ];

  return (
    <section className="py-24 bg-[#0d111a]">
      <div className="mx-auto max-w-[1140px] px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            HOW IT WORKS
          </h2>
          <h3 className="text-white text-4xl font-bold mb-4 tracking-tight">
            Simple for workers. Powerful for you.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:border-teal-5/20 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-teal-5 group-hover:text-white transition-all mx-auto">
                <s.icon size={28} />
              </div>
              <h4 className="text-white text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-[#8B98AB] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Experience Mockup ────────────────────────────────────────────────
function AppExperience() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Interactive UI Left */}
            <div className="lg:col-span-7 p-8 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[100px]" />
              <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">
                Built for Engagement
              </h3>
              <p className="text-[#8B98AB] text-lg leading-relaxed mb-12 max-w-xl">
                We've designed an app that workers actually want to use. No
                clutter, no noise—just the information they need to do their job
                well.
              </p>

              <div className="space-y-4 max-w-lg">
                {/* Chat Bubble Mockup */}
                <div className="p-6 rounded-2xl bg-white/5 border border-teal-5/20 flex gap-4 items-start translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-teal-5/20 flex items-center justify-center text-teal-4 shrink-0">
                    <IconMessage2 size={20} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold mb-1">
                      Shift Update: Food Production
                    </div>
                    <p className="text-[#8B98AB] text-xs leading-relaxed">
                      "Reminder: Tomorrow's shift has been moved to 7am start.
                      Please confirm your attendance."
                    </p>
                    <div className="mt-4 flex gap-2">
                      <div className="px-4 py-1.5 rounded-lg bg-teal-5 text-white text-[10px] font-semibold uppercase tracking-wider cursor-pointer">
                        Confirm
                      </div>
                      <div className="px-4 py-1.5 rounded-lg bg-white/10 text-[#8B98AB] text-[10px] font-semibold uppercase tracking-wider cursor-pointer">
                        Decline
                      </div>
                    </div>
                  </div>
                </div>
                {/* Message Track Mockup */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center opacity-40">
                  <div className="text-[11px] text-white/60 font-medium">
                    Broadcast: "Induction Docs Ready"
                  </div>
                  <div className="flex gap-1 items-center">
                    <IconCheck size={14} className="text-teal-4" />
                    <IconCheck size={14} className="text-teal-4 -ml-1.5" />
                    <span className="text-[9px] text-teal-4 font-semibold ml-1">
                      READ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List Right */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1c2436] to-[#161b28] p-12 lg:p-20 border-l border-white/5">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-10">
                What You Can Do
              </h4>
              <div className="space-y-8">
                {[
                  {
                    t: "Mass Communication",
                    d: "One message to 100 workers in seconds. Filter by site, role, or shift.",
                    i: IconBroadcast,
                  },
                  {
                    t: "Individual Messaging",
                    d: "Secure, direct messaging with full historical thread visibility.",
                    i: IconUsers,
                  },
                  {
                    t: "Shift Confirmations",
                    d: "Watch confirmations roll in real-time. No more guessing who's showing up.",
                    i: IconHistory,
                  },
                  {
                    t: "Automated Reminders",
                    d: "Set it and forget it. System-sent reminders reduce missing shifts.",
                    i: IconClock,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 group-hover:text-teal-4 transition-all shrink-0">
                      <item.i size={20} />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm mb-1">
                        {item.t}
                      </h5>
                      <p className="text-[#8B98AB] text-xs leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── The Coach AI Section ──────────────────────────────────────────────────
function CoachSection() {
  return (
    <section className="py-24 bg-[#0d111a] overflow-hidden">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content Left */}
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-500">
                BUILT-IN INTELLIGENCE
              </span>
            </div>
            <h3 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              The Coach: <br />
              24/7 Support
            </h3>
            <p className="text-white/60 text-xl leading-relaxed mb-10">
              Workers have questions at all hours. AcceptConnect includes The
              Coach — an AI assistant that handles common queries instantly.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "When do I get paid?",
                "Where's my payslip?",
                "What's the holiday policy?",
                "How do I update my bank details?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  "{q}"
                </div>
              ))}
            </div>

            <p className="text-[#8B98AB] text-lg leading-relaxed italic">
              The Coach answers instantly. Your team focuses on real problems,
              not the same questions 50 times a day.
            </p>
          </div>

          {/* Chat Mockup Right */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-10 shadow-2xl relative z-10">
              <div className="space-y-8">
                {/* Worker Message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl bg-white/[0.07] border border-white/5 self-end max-w-[85%] ml-auto"
                >
                  <div className="flex items-center gap-2 text-[#8B98AB] text-[10px] font-bold uppercase tracking-widest mb-2">
                    <IconUsers size={12} /> Worker:
                  </div>
                  <div className="text-white text-base">"When's payday?"</div>
                </motion.div>

                {/* AI Coach Response */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-white max-w-[95%] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <IconMessage2 size={40} />
                  </div>
                  <div className="text-amber-500 text-[10px] font-semibold uppercase tracking-widest mb-4">
                    The Coach:
                  </div>
                  <div className="text-white font-medium leading-relaxed italic">
                    "Payday is every Friday. Your next payment is this Friday,
                    1st March. Need anything else?"
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 text-center">
                <div className="text-white/20 text-xs font-medium italic tracking-wide animate-pulse">
                  Instant response. Zero wait time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Scenario Section ──────────────────────────────────────────────────────
function ScenariosSection() {
  const scenarios = [
    {
      title: "Site Address Changed",
      badge: "MASS BROADCAST",
      icon: IconMapPin,
      text: '"NEW LOCATION: [Address]. Check your map before leaving." Everyone gets it instantly. One source of truth.',
    },
    {
      title: "Worker Needs Payslip",
      badge: "DIRECT MESSAGE",
      icon: IconFileInvoice,
      text: 'They message you in-app. You reply with the document attached. Done. No more "check your email" back-and-forth.',
    },
    {
      title: "Policy Update",
      badge: "COMPLIANCE TRACK",
      icon: IconShieldCheck,
      text: "Broadcast to entire workforce. Track read receipts. Full auditor-friendly proof of who received what.",
    },
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
            REAL SCENARIOS
          </h2>
          <h3 className="text-white text-4xl font-bold mb-6 tracking-tight">
            Real Solutions.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group hover:border-teal-5/20 transition-all flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-5/5 blur-[60px] pointer-events-none" />
              <div className="mb-8">
                <div className="text-teal-5 text-[9px] font-semibold uppercase tracking-widest mb-4 px-2 py-0.5 bg-teal-5/10 border border-teal-5/20 rounded inline-block">
                  {s.badge}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="text-white/60" size={24} />
                  <h4 className="text-white font-bold text-xl">{s.title}</h4>
                </div>
              </div>
              <p className="text-[#8B98AB] text-sm leading-relaxed mb-10 flex-grow italic">
                {s.text}
              </p>
              <div className="flex items-center gap-2 text-teal-5 text-[10px] font-semibold uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                See Full Integration <IconArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function AcceptConnectPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <ConnectHero />
      <ProblemSection />
      <ProcessSection />
      <AppExperience />
      <CoachSection />
      <ScenariosSection />

      {/* CTA Section */}
      <CtaBanner
        badge="ELIMINATE THE CHAOS"
        title="Ready for One"
        titleHighlight="Unified Platform?"
        subtitle="Stop copy-pasting into group chats. Move your workforce communication to AcceptConnect and gain 100% visibility over your worker engagement."
        primaryButtonText="Request Early Access"
        secondaryButtonText="Talk to Sales"
        primaryButtonHref="/contact"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </main>
  );
}
