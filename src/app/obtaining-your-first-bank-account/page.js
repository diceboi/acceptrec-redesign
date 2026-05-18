"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  IconCreditCard, 
  IconFileCheck, 
  IconMapPin, 
  IconDeviceMobile, 
  IconAlertTriangle, 
  IconArrowLeft,
  IconCircleCheck
} from "@tabler/icons-react";

export default function FirstBankAccountPage() {
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
              left: "-10%",
              top: "-10%",
              background: "var(--color-teal-5)",
              opacity: 0.1,
              filter: "blur(90px)",
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
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
              CANDIDATE SUPPORT WIKI
            </span>
            <h1 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Obtaining Your First <br />
              <span className="text-teal-5 italic">UK Bank Account</span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="pb-32 bg-navy-700 relative">
        <div className="mx-auto max-w-4xl px-6">
          
          {/* Intro Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-8 border border-white/5 bg-white/5 relative overflow-hidden"
          >
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0">
                <IconCreditCard size={28} />
              </div>
              <div>
                <p className="text-[#8B98AB] text-lg leading-relaxed font-medium">
                  For someone living and working in the UK, having a bank account is essential for all administrative and economic purposes. 
                  Most commercial, agency, and employment payroll payments are made strictly via electronic bank transfers.
                </p>
                <p className="text-[#8B98AB] text-lg leading-relaxed font-medium mt-4">
                  The banking system in the UK can be different and more rigorous than what you might be used to, particularly regarding the extensive documentation and verification checks required. 
                  Below is our comprehensive, step-by-step candidate guide to successfully setting up your first account.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Identity Document Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6">
                  <IconFileCheck size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">1. Proving Your Identity</h3>
                <p className="text-[#8B98AB] text-sm leading-relaxed mb-6">
                  To open an account, you must legally reside in the UK. For EU/EEA nationals, identity proof is straightforward. You will need one of the following:
                </p>
                <ul className="space-y-3 text-sm text-[#8B98AB] font-medium">
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>Valid National Passport</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>UK / European Driving Licence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>National Identity Card (EU/EEA)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Address Document Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6">
                  <IconMapPin size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">2. Proving Your Address</h3>
                <p className="text-[#8B98AB] text-sm leading-relaxed mb-6">
                  You must verify your physical address with an officially accepted document. Each physical bank maintains its own set of guidelines, but they commonly include:
                </p>
                <ul className="space-y-3 text-sm text-[#8B98AB] font-medium">
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>Tenancy agreement or mortgage statement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>Utility bill (electricity/gas, under 3 months old)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5 shrink-0" />
                    <span>Current council tax statement</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* New in the UK Tips Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-8 border border-white/5 bg-white/5"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="text-teal-4 font-normal italic font-sans text-3xl">New in the UK?</span> 
              Here is what to do
            </h3>
            <p className="text-[#8B98AB] leading-relaxed font-medium mb-6">
              If you have recently arrived in the United Kingdom, you probably do not possess utility bills or a formal council tax statement in your name. 
              Do not worry — many banks will flexibly accept alternative proofs:
            </p>
            <div className="space-y-4">
              {[
                "A formal confirmation letter issued by Jobcentre Plus confirming your National Insurance Number (NIN).",
                "An employment confirmation letter from Accept Recruitment (if issued within the last 3 months). Please speak to your consultant to request this address verification letter.",
                "For registered students, an official letter from your university's admissions office confirming your UK term-time address."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0 text-xs font-bold mt-1">
                    {i + 1}
                  </div>
                  <p className="text-[#8B98AB] font-medium text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl border border-teal-5/20 bg-teal-5/5 text-teal-4 text-xs font-medium leading-relaxed">
              <strong>Tip:</strong> If you are experiencing difficulty or get rejected by a particular bank branch, do not be discouraged! Different high-street banks (e.g. Barclays, HSBC, Lloyds, NatWest) hold completely independent internal compliance rules. Trying another provider often yields success.
            </div>
          </motion.div>

          {/* Online & Digital Banking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-12 border border-white/5 bg-white/5 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-purple-5/5 blur-3xl" />
            <h3 className="text-white text-2xl font-semibold mb-6 flex items-center gap-3">
              <IconDeviceMobile className="text-teal-4 shrink-0" size={28} />
              Digital & Online Banks
            </h3>
            <p className="text-[#8B98AB] leading-relaxed font-medium mb-6">
              Currently, there are many robust digital-only online banking applications (such as <strong>Monzo</strong>, <strong>Revolut</strong>, <strong>Starling</strong>, etc.) that greatly simplify the process. 
              These providers operate entirely via mobile applications, feature no physical branches, and typically only require a quick passport photo/video scan to open an account in minutes.
            </p>
            
            <div className="p-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex gap-4 items-start">
              <IconAlertTriangle className="text-yellow-500 shrink-0 mt-1 animate-pulse" size={24} />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Important Payroll & Verification Note</h4>
                <p className="text-[#8B98AB] text-xs leading-relaxed font-medium">
                  While online banks are fully certified, licensed financial entities, <strong>certain employers or specific government departments may not fully support or recognize online-only banks</strong> for direct deposit payroll or benefits payouts. 
                  Always check with your Accept Recruitment consultant or your specific employer prior to starting shifts to ensure your online bank details can be safely accepted for hassle-free weekly payroll deposits.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Action */}
          <div className="text-center">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 inline-flex items-center gap-3"
            >
              Need an Employment Letter? Contact Us
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
