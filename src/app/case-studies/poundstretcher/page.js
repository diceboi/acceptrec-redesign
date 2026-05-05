"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconUsers, 
  IconArrowRight,
  IconCheck,
  IconTrophy,
  IconDatabase,
  IconDeviceAnalytics
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function CaseStudyHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-40 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
           className="absolute rounded-full"
           style={{ height: "60%", width: "50%", left: "5%", top: "10%", background: "var(--color-teal-5)", opacity: 0.1, filter: "blur(100px)" }}
           animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2">
            <Link href="/case-studies" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                <IconArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
            </Link>
            <span className="text-white/10 mx-2">/</span>
            <span className="text-teal-5 text-xs font-bold uppercase tracking-widest">Poundstretcher Case Study</span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05] max-w-4xl"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nine Years <span className="text-teal-5">of Trust.</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          How Accept Recruitment transformed Poundstretcher&apos;s distribution operation — from underprivileged underdog to sole recruitment supplier.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "200", label: "Daily Workers Managed" },
    { value: "9 Yrs", label: "Long-Term Partnership" },
    { value: "Sole", label: "Supplier Status" },
    { value: "300%", label: "Capacity Increase" },
  ];
  return (
    <section className="relative w-full bg-[#0d111a] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-4xl lg:text-5xl font-bold text-teal-4 mb-2 tracking-tight">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="text-[14px] font-medium text-white/50">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Content ───────────────────────────────────────────────────────────────
function ContentSection() {
    return (
        <section className="py-24 bg-[#0d1522]">
            <div className="mx-auto max-w-[1140px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* The Beginning */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE BEGINNING</h2>
                            <p className="text-white/80 text-xl leading-relaxed mb-6">
                                In 2017, Accept Recruitment walked into Poundstretcher&apos;s distribution centre as the new agency — the underdog. Poundstretcher already had a long-standing recruitment partner in place.
                            </p>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Accept had everything to prove and nothing to fall back on. From day one, we set out to be different.
                            </p>
                        </motion.div>

                        {/* The Approach */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE APPROACH</h2>
                            <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">More than just another supplier.</h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-10">
                                We placed a dedicated manager on-site, embedded within the daily operation, learning the workflows and understanding the challenges first-hand. It wasn&apos;t about waiting for instructions. It was about identifying opportunities to make the whole operation better — and then delivering on them.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4">
                                        <IconDeviceAnalytics size={24} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl">Efficiency Audits</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                         Identifying inefficiencies in warehouse picking processes and presenting practical solutions.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4">
                                        <IconDatabase size={24} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl">Data-Driven Management</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                       Replacing guesswork with live data, giving managers complete visibility of site presence and costs.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Turning Point */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#161b28] border border-white/5 rounded-3xl p-10 md:p-12">
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">2025: THE TURNING POINT</h2>
                            <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">From underdog to sole supplier.</h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                After eight years of consistently going above and beyond, Accept Recruitment was appointed as the sole recruitment supplier for the entire distribution centre. That relentless consistency turned a challenger appointment into a sole-supplier partnership.
                            </p>
                        </motion.div>

                        {/* The Results */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE RESULTS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Appointed sole recruitment supplier (2025)",
                                    "Average deployment of 200 daily workers",
                                    "Operation capacity tripled since 2017",
                                    "Continuous 9-year year-on-year growth"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="mt-1 h-5 w-5 rounded-full bg-teal-5/10 text-teal-4 flex items-center justify-center shrink-0">
                                            <IconCheck size={14} stroke={3} />
                                        </div>
                                        <span className="text-white/80 font-bold text-lg leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar / Impact Card */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-linear-to-br from-[#00A99D] to-[#161b28] p-1 rounded-3xl">
                            <div className="bg-[#0d1522] rounded-[calc(2.5rem-2px)] p-8">
                                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5 mb-8">THE IMPACT</h2>
                                <p className="text-white text-3xl font-bold tracking-tight mb-8">
                                     "Trust isn&apos;t given overnight. It&apos;s earned through nine years of daily, reliable delivery."
                                </p>
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                     <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                            <IconTrophy size={32} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">Sole Supplier</div>
                                            <div className="text-white/40 text-sm">Earned through consistency</div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function PoundstretcherCaseStudy() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <CaseStudyHero />
      <HeroStats />
      <ContentSection />

      <CtaBanner
        badge="LONG-TERM PARTNERSHIP"
        title="Ready for a"
        titleHighlight="9-year partnership?"
        subtitle="We build relationships that last. Let's start the first day of yours today."
        primaryButtonText="Book Initial Audit"
        secondaryButtonText="Our Services"
        primaryButtonHref="https://bookings.cloud.microsoft/book/ACCEPTECH@acceptrec.co.uk/?ismsaljsauthenabled=true"
        secondaryButtonHref="/get-started"
      />

      <Footer />
    </main>
  );
}
