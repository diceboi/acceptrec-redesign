"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconArrowLeft,
  IconGift,
  IconUsers,
  IconBriefcase,
  IconCircleCheck,
  IconAlertTriangle,
  IconHourglassLow
} from "@tabler/icons-react";

export default function ReferTermsPage() {
  return (
    <main className="bg-navy-900 min-h-screen text-white selection:bg-teal-5/30 selection:text-teal-3">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[45vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              height: "60%",
              width: "50%",
              right: "-10%",
              top: "-10%",
              background: "var(--color-purple-5)",
              opacity: 0.1,
              filter: "blur(90px)",
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        
        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/candidates"
              className="inline-flex items-center gap-2 text-teal-4 hover:text-teal-3 font-semibold text-xs uppercase tracking-widest mb-6 transition-colors"
            >
              <IconArrowLeft size={16} /> Back to Candidates Hub
            </Link>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              OFFICIAL REWARD PROGRAM
            </span>
            <h1 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Referral Schemes <br />
              <span className="text-teal-5 italic">Terms & Conditions</span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="pb-32 bg-navy-700 relative">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            
            {/* Candidate Referral Scheme */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 bg-white/5 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 w-48 h-48 rounded-full bg-teal-5/5 blur-2xl" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4">
                    <IconUsers size={26} />
                  </div>
                  <div className="px-4 py-2 rounded-full border border-teal-5/20 bg-teal-5/5 text-teal-4 font-sans font-extrabold text-lg tracking-wider">
                    £50 Voucher
                  </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-6">Candidate Referral Scheme</h3>
                <p className="text-[#8B98AB] text-sm leading-relaxed mb-6 font-medium">
                  Earn a <strong>£50 Love2Shop or equivalent shopping voucher</strong> for every candidate worker you refer to Accept Recruitment.
                </p>

                <div className="space-y-4 text-xs text-[#8B98AB] font-medium leading-relaxed">
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>The referred worker must register online and supply your full name as the referee.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>The referred worker must successfully complete <strong>12 weeks of active shifts</strong> with Accept.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>Shift cancellations by client sites still count if they work elsewhere with us in that week.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>You must be an active or former Accept candidate to receive the voucher payout.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex gap-3 items-start mt-8">
                <IconAlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <p className="text-[11px] text-[#8B98AB] leading-relaxed">
                  <strong>Disqualification:</strong> If the referred candidate resigns before completing 12 weeks, does not attend a confirmed shift, or is late to shifts, eligibility for the £50 voucher is lost.
                </p>
              </div>
            </motion.div>

            {/* Business Referral Scheme */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 bg-white/5 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 w-48 h-48 rounded-full bg-purple-5/5 blur-2xl" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-xl bg-purple-5/10 flex items-center justify-center text-purple-4">
                    <IconBriefcase size={26} />
                  </div>
                  <div className="px-4 py-2 rounded-full border border-purple-5/20 bg-purple-5/5 text-purple-4 font-sans font-extrabold text-lg tracking-wider">
                    £100 Voucher
                  </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-6">Business Referral Scheme</h3>
                <p className="text-[#8B98AB] text-sm leading-relaxed mb-6 font-medium">
                  Earn a <strong>£100 shopping voucher</strong> for introducing a new client business or warehouse operator in need of staffing solutions.
                </p>

                <div className="space-y-4 text-xs text-[#8B98AB] font-medium leading-relaxed">
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>The business representative must supply your full name when contacting our sales department.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>The referred business must establish an active staffing placement account.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>Accept candidates must complete a cumulative total of <strong>150 hours of work</strong> at the site.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <IconCircleCheck size={16} className="text-teal-5 shrink-0 mt-0.5" />
                    <span>Hours are pooled across all candidates, meaning multiple workers speed up your payout!</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex gap-3 items-start mt-8">
                <IconAlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <p className="text-[11px] text-[#8B98AB] leading-relaxed">
                  <strong>Disqualification:</strong> In the highly unlikely event that the referred client cancels placements or ceases using Accept Recruitment prior to achieving the 150 hours, eligibility is lost.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Referral Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 bg-white/5 max-w-4xl mx-auto"
          >
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <IconGift className="text-teal-4" size={24} />
              How the Claiming Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#8B98AB] leading-relaxed font-semibold">
              <div className="p-5 rounded-xl border border-white/5 bg-white/5 relative">
                <span className="text-[10px] text-teal-5 block mb-1">STEP 1</span>
                <h4 className="text-white text-sm font-bold mb-2">Submit Reference</h4>
                <p>Ensure your referred friend or candidate inputs your full name in the "Referee" field during their online registration or sales call.</p>
              </div>
              <div className="p-5 rounded-xl border border-white/5 bg-white/5 relative">
                <span className="text-[10px] text-teal-5 block mb-1">STEP 2</span>
                <h4 className="text-white text-sm font-bold mb-2">Track Milestones</h4>
                <p>Allow the candidate to complete their 12 weeks of shifts (or the client to hit their cumulative 150-hour candidate staffing target).</p>
              </div>
              <div className="p-5 rounded-xl border border-white/5 bg-white/5 relative">
                <span className="text-[10px] text-teal-5 block mb-1">STEP 3</span>
                <h4 className="text-white text-sm font-bold mb-2">Collect Voucher</h4>
                <p>Speak to your consultant at Accept. Once verified by our payroll compliance team, your £50 or £100 shopping voucher will be issued immediately!</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
