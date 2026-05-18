"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowLeft,
  IconFingerprint,
  IconId,
  IconPhoneCall,
  IconFileText,
  IconCircleCheck,
  IconAlertTriangle,
  IconExternalLink,
} from "@tabler/icons-react";

export default function NationalInsurancePage() {
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
              How to Get Your <br />
              <span className="text-teal-5 italic">
                National Insurance Number (NIN)
              </span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="pb-32 bg-navy-700">
        <div className="mx-auto max-w-4xl px-6">
          {/* Why Do I Need an NIN? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-8 border border-white/5 bg-white/5 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-teal-5/10 flex items-center justify-center text-teal-4 shrink-0">
                <IconFingerprint size={28} />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-3">
                  Why is the National Insurance Number Essential?
                </h3>
                <p className="text-[#8B98AB] text-lg leading-relaxed font-medium">
                  To work in the UK and access essential services, you must
                  obtain a National Insurance Number (NIN). It acts as your
                  unique identity number for HM Revenue & Customs (HMRC) and the
                  Department for Work and Pensions (DWP).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-[#8B98AB] font-medium">
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Tracks tax & national pension payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Required to vote in UK local elections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Allows you to register as self-employed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCircleCheck size={18} className="text-teal-5" />
                    <span>Required to request UK student loans</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency Tax Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex gap-4 items-start mb-8"
          >
            <IconAlertTriangle
              className="text-yellow-500 shrink-0 mt-0.5"
              size={24}
            />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">
                Avoid Heavy Emergency Tax Surcharges
              </h4>
              <p className="text-[#8B98AB] text-xs leading-relaxed font-medium">
                You can start working for Accept Recruitment before your NIN
                application is fully completed. However,{" "}
                <strong>
                  HMRC is legally required to apply an emergency tax surcharge
                </strong>{" "}
                to your payslips until you provide your permanent NIN. Once your
                NIN is registered, you will receive 100% of this emergency tax
                back in your weekly bank payroll!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Required Identity Documents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6">
                  <IconId size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">
                  Required Documents Checklist
                </h3>
                <p className="text-[#8B98AB] text-xs leading-relaxed mb-6">
                  Ensure you have these documents fully prepared before
                  initiating the application call:
                </p>
                <ul className="space-y-3 text-xs text-[#8B98AB] font-semibold">
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={16} className="text-teal-5" />
                    <span>Valid Passport or National ID card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={16} className="text-teal-5" />
                    <span>EU Settled / Pre-Settled Share Code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={16} className="text-teal-5" />
                    <span>UK Biometric Residence Permit (Non-EU)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={16} className="text-teal-5" />
                    <span>Birth, Adoption or Marriage Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCircleCheck size={16} className="text-teal-5" />
                    <span>Valid Photocard Driving Licence</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* How to Apply Helpline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-5/10 flex items-center justify-center text-teal-4 mb-6">
                  <IconPhoneCall size={24} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">
                  Official NIN Application Lines
                </h3>
                <p className="text-[#8B98AB] text-xs leading-relaxed mb-4">
                  The application is initiated strictly via telephone calls.
                  Lines are open <strong>Monday to Friday, 8am to 6pm</strong>:
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <span className="text-[10px] text-[#8B98AB] block">
                      Application Telephone Line
                    </span>
                    <strong className="text-teal-4 text-base font-sans block mt-1">
                      0800 141 2075
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <span className="text-[10px] text-[#8B98AB] block">
                      Welsh Language Helpline
                    </span>
                    <strong className="text-teal-4 text-base font-sans block mt-1">
                      0800 141 2438
                    </strong>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://dwpnino.signvideo.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#8B98AB] hover:text-teal-4 inline-flex items-center gap-1 hover:underline font-bold"
                  >
                    British Sign Language (BSL) Video Relay{" "}
                    <IconExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Application Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-10 mb-12 border border-white/5 bg-white/5"
          >
            <h3 className="text-white text-2xl font-semibold mb-6 flex items-center gap-3">
              <IconFileText size={28} className="text-teal-4" />
              Step-by-Step Application Process
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "1. Phone Helpline Interview",
                  desc: "Call the 0800 141 2075 helpline. The operator will perform an initial audit asking for your name, passport, right-to-work visa, and current UK address.",
                },
                {
                  title: "2. Fill Out the Postal Form",
                  desc: "Jobcentre Plus will mail a physical paper application package to your home. Fill it out completely with black ink and double-check your signatures.",
                },
                {
                  title: "3. Mail Back with Identity Proof",
                  desc: "Return the signed form via post, enclosing the requested certified copies of your identity/visa documents. It takes up to 8 weeks to complete processing.",
                },
                {
                  title: "4. Receive Your Permanent NIN Letter",
                  desc: "Once checked, you will receive a Welcome Letter to your home showing your unique National Insurance number (e.g. formatted like QQ 12 34 56 A). Bring this letter directly to Accept Recruitment to resolve emergency tax!",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 items-start relative border-l-2 border-white/10 ml-3 pl-6 pb-6 last:pb-0 last:border-l-0"
                >
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-teal-5 flex items-center justify-center text-black font-bold text-xs shrink-0 shadow-lg shadow-teal-5/20 font-sans">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[#8B98AB] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
