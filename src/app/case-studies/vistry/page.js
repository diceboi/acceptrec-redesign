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
  IconBuildingCommunity,
  IconTarget,
  IconScale
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
            <span className="text-teal-5 text-xs font-bold uppercase tracking-widest">Vistry Group Case Study</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          From Vendor to <span className="text-teal-5">Valued Partner.</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          How Accept Recruitment doubled workforce capacity in just 10 weeks for one of the UK&apos;s leading housebuilders.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Stats Bar ─────────────────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "94.2%", label: "Fulfilment Rate" },
    { value: "42", label: "Direct-Hire Conversions" },
    { value: "10wks", label: "Scale-Up Time" },
    { value: "PSL", label: "Status Achieved" },
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
                        {/* The Client */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE CLIENT</h2>
                            <p className="text-white/80 text-xl leading-relaxed mb-6">
                                Vistry Group is one of the UK&apos;s leading housebuilders, delivering thousands of new homes each year. Accept Recruitment and Vistry have a long-standing relationship built on trust, reliability, and a deep understanding of the construction sector.
                            </p>
                            <p className="text-white/60 text-lg leading-relaxed">
                                For years, Accept was Vistry&apos;s go-to provider of quality temporary workers, consistently delivering the people they needed to keep operations running smoothly.
                            </p>
                        </motion.div>

                        {/* The Challenge */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-red-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE CHALLENGE</h2>
                            <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">A competitive trial to prove our worth — again.</h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-6">
                                As Vistry&apos;s operations grew rapidly, so did their demand for workers. To manage this increased need, they introduced multiple recruitment agencies into a competitive trial.
                            </p>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Accept Recruitment had to prove its value all over again — not just as a reliable supplier, but as a partner capable of delivering at scale in a high-pressure environment.
                            </p>
                        </motion.div>

                        {/* The Response */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#161b28] border border-white/5 rounded-3xl p-10 md:p-12">
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE RESPONSE: A NEW ONSITE MODEL</h2>
                            <h3 className="text-white text-3xl font-bold mb-8 tracking-tight">Doubled workforce capacity in just 10 weeks.</h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-10">
                                Rather than simply competing harder, Accept Recruitment changed the approach entirely. We proposed an embedded onsite model — anticipating staffing needs and responding faster than ever before. This was a fundamental shift: from a transactional "you ask, we supply" relationship to a genuinely integrated partnership.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4">
                                        <IconTarget size={24} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl">Embedded Teams</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        Our team placed directly within Vistry&apos;s operations, understanding workflows in real time and anticipating bottlenecks before they occurred.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-5/10 text-teal-4">
                                        <IconScale size={24} />
                                    </div>
                                    <h4 className="text-white font-bold text-xl">Scaled Fulfilment</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                       Utilising our proprietary database to double workforce capacity within 10 weeks without compromising on candidate vetting quality.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Results */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-teal-5 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">THE RESULTS</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "200% increase in deployed workforce capacity",
                                    "42 successful temporary-to-permanent conversions",
                                    "94.2% average fulfilment rate maintained",
                                    "Awarded PSL status for all national operations"
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
                                     "Vistry didn&apos;t just get a supplier. They got a partner who understood their operation from the inside out."
                                </p>
                                <div className="space-y-6 pt-8 border-t border-white/10">
                                     <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                            <IconBuildingCommunity size={32} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">Integrated Partnership</div>
                                            <div className="text-white/40 text-sm">Beyond transactional supply</div>
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
export default function VistryCaseStudy() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <CaseStudyHero />
      <HeroStats />
      <ContentSection />

      <CtaBanner
        badge="GET PSL STATUS RESULTS"
        title="From Vendor to"
        titleHighlight="Valued Partner"
        subtitle="Let us prove our worth. We start with data, lead with people, and deliver with technology."
        primaryButtonText="Request a Callback"
        secondaryButtonText="Our Onsite Model"
      />

      <Footer />
    </main>
  );
}
