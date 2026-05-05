"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import {
  IconCheck,
  IconX,
  IconClock,
  IconUsers,
  IconMessage2,
  IconBolt,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Hero Section ────────────────────────────────────────────────────────
function WhyAcceptHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "70%",
            width: "55%",
            left: "-10%",
            top: "-10%",
            background: "var(--color-teal-5)",
            opacity: 0.13,
            filter: "blur(90px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "55%",
            right: "-10%",
            top: "-5%",
            background: "var(--color-purple-5)",
            opacity: 0.18,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2"
        >
          <span className="text-sm font-semibold text-teal-4">
            The Accept Difference
          </span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Staffing That
          <br />
          Actually Works
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No-shows destroying your shift? Supervisors babysitting temps?
          <br />
          There&apos;s a better way.
        </motion.p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Sound Familiar Section ──────────────────────────────────────────────
function SoundFamiliarSection() {
  const scenarios = [
    {
      title: '"You planned for 20 workers. 14 showed up."',
      text: "Now your line is understaffed. Your permanent team is covering the gaps. You're going to miss your targets. And this keeps happening, week after week. No-shows aren't just annoying - they're destroying your productivity.",
    },
    {
      title: '"Your supervisors spend half their day managing temps."',
      text: "Chasing attendance. Explaining the same thing to new faces every week. Dealing with performance issues. Handling complaints. Your supervisors should be managing production - not babysitting agency workers.",
    },
    {
      title: '"You reported a problem. Nothing changed."',
      text: "You told the agency that worker wasn't right. Next week, they sent someone just as bad. Or the same person. Your feedback goes into a black hole. Nobody tracks it. Nobody remembers. Nobody cares.",
    },
    {
      title: '"It\'s 6am. You need 10 workers by 8am. Good luck."',
      text: "Someone's called in sick. You need emergency cover NOW. But agencies don't answer at 6am, and by 9am it's too late. The shift is already wrecked, and you're the one left answering for the missed output.",
    },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-white text-4xl md:text-5xl font-semibold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sound familiar?
        </motion.h2>
        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {scenarios.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card rounded-2xl p-10 md:p-12 hover:border-teal-5/30 transition-all"
            >
              <h3 className="text-white text-2xl font-semibold mb-4 tracking-tight">
                {s.title}
              </h3>
              <p className="text-[#8B98AB] text-lg leading-relaxed font-medium">
                {s.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── We Fix These Problems Section ───────────────────────────────────────
function AcceptWaySection() {
  const solutions = [
    {
      title: "No-Shows Caught in Minutes, Not Hours",
      icon: <IconClock size={32} />,
      problem:
        "By the time you realise someone isn't coming, the shift is already wrecked. You're scrambling to find cover when you should be running production.",
      solution:
        "Workers check in when they arrive - you see it instantly. No check-in by start time? You know immediately. Time to react, not just firefight.",
    },
    {
      title: "Your Supervisors Get Their Time Back",
      icon: <IconUsers size={32} />,
      problem:
        "Your team leaders are spending 30-40% of their time managing temp workers instead of managing output. That's expensive time, wasted.",
      solution:
        "We handle the temp management so you don't have to. Attendance tracked. Performance monitored. Problems dealt with before they land on your desk.",
      perks: [
        "Dedicated account management",
        "Your supervisors supervise production, not agencies",
        "We deal with attendance issues directly",
        "One point of contact, not ten",
      ],
    },
    {
      title: "Feedback That Actually Changes Things",
      icon: <IconMessage2 size={32} />,
      problem:
        "You tell the agency someone isn't working out. Next week, same problem. Your feedback disappears into the void.",
      solution:
        "Every piece of feedback is tracked. Problem workers don't come back. Good workers are prioritised. Your standards are actually enforced.",
    },
    {
      title: "Emergency Cover That Actually Works",
      icon: <IconBolt size={32} />,
      problem:
        "It's early morning. Someone's called in sick. You need cover NOW. But agencies don't answer at 6am, and by 9am it's too late.",
      solution:
        "Rapid response when you need it. Pre-vetted workers ready to deploy. We answer the phone when it matters, not just during office hours.",
      perks: [
        "Same-day emergency cover",
        "We pick up when you call",
        "Pre-screened, ready-to-work pool",
        "Cover arranged in hours, not days",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            THE ACCEPT DIFFERENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
            We fix these problems.
          </h2>
          <p className="text-[#8B98AB] text-xl font-medium max-w-2xl mx-auto">
            Not with promises. With systems, tracking, and accountability.
            Here&apos;s how.
          </p>
        </motion.div>

        <div className="space-y-12">
          {solutions.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-10 md:p-16">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 shadow-xl">
                  {s.icon}
                </div>
                <h4 className="text-white text-3xl font-semibold tracking-tight">
                  {s.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                <div className="p-8 rounded-2xl bg-red-500/[0.03] border border-red-500/10">
                  <div className="text-red-500/50 text-xs font-semibold uppercase tracking-widest mb-4">
                    The Problem:
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {s.problem}
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-teal-5/[0.03] border border-teal-5/10">
                  <div className="text-teal-4 text-xs font-semibold uppercase tracking-widest mb-4">
                    What We Do:
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed font-semibold">
                    {s.solution}
                  </p>
                </div>
              </div>
              {s.perks && (
                <div className="mt-8 border-t border-white/5 pt-10">
                  <div className="text-[#8B98AB]/70 text-xs font-semibold uppercase tracking-widest mb-6">
                    What this means for you:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    {s.perks.map((p, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-4 text-white/70 font-medium"
                      >
                        <IconCheck size={20} className="text-teal-5 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Night and Day Section ───────────────────────────────────────────────
function NightAndDaySection() {
  const rows = [
    {
      label: "Attendance Monitoring",
      old: "No-shows discovered mid-shift",
      accept: "Instant attendance alerts",
    },
    {
      label: "Supervisor Burden",
      old: "Supervisors babysitting temps",
      accept: "We manage the workforce",
    },
    {
      label: "Feedback Loop",
      old: "Feedback ignored",
      accept: "Every complaint tracked and actioned",
    },
    {
      label: "Emergency Cover",
      old: "Emergency cover? Good luck.",
      accept: "Same-day response when you need it",
    },
    {
      label: "Consistency",
      old: "Different faces every week",
      accept: "Consistent workers who know your site",
    },
    {
      label: "Strategy",
      old: "Multiple agencies, multiple headaches",
      accept: "One partner, one system",
    },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          className="text-white text-4xl md:text-5xl font-semibold mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The difference is night and day.
        </motion.h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-red-500/10 p-6 font-semibold text-red-500/80 text-sm tracking-widest uppercase">
              The Old Way
            </div>
            <div className="bg-teal-5 p-6 font-semibold text-black text-sm tracking-widest uppercase">
              The Accept Way
            </div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-t border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="p-8 md:p-10 border-r border-white/5 flex items-center justify-start gap-4 text-[#8B98AB] text-lg">
                <IconX size={20} className="text-red-500/30 shrink-0" />
                <span>{row.old}</span>
              </div>
              <div className="p-8 md:p-10 flex items-center justify-start gap-4 text-white text-lg font-semibold">
                <IconCheck size={24} className="text-teal-5 shrink-0" />
                <span>{row.accept}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Proof Section ────────────────────────────────────────────────────────
function ProofSection() {
  return (
    <section className="py-32 bg-[#0d111a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-teal-5/5 blur-[120px] pointer-events-none" />
          <h2 className="relative text-white text-3xl font-semibold mb-12 tracking-tight">
            Don&apos;t take our word for it.
          </h2>
          <div className="relative max-w-3xl mx-auto mb-10">
            <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-8">
              &quot;Accept doubled our workforce capacity in just 10 weeks.
              Their onsite model transformed how we manage temporary staff. No
              more chasing agencies - they handle it all.&quot;
            </p>
            <div className="text-white font-semibold text-lg">
              Operations Team
            </div>
            <div className="text-[#8B98AB]">Vistry Group</div>
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 text-teal-4 font-semibold tracking-widest text-sm uppercase">
            <div>7,000+ shifts delivered</div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block" />
            <div>94.2% fill rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page Component ────────────────────────────────────────────────
export default function WhyAcceptPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <WhyAcceptHero />
      <SoundFamiliarSection />
      <AcceptWaySection />
      <NightAndDaySection />
      <ProofSection />
      <CtaBanner
        badge="READY?"
        title="Ready to fix your"
        titleHighlight="temp staffing?"
        subtitle="If any of this sounds familiar, let's talk. No hard sell - just a conversation about whether we can help."
        primaryButtonText="Find Out More"
        secondaryButtonText="See Case Studies"
        primaryButtonHref="/get-started"
        secondaryButtonHref="/case-studies"
      />
      <Footer />
    </main>
  );
}
