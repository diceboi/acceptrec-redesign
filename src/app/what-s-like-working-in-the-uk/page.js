"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconArrowLeft,
  IconBriefcase,
  IconReceipt2,
  IconBabyCarriage,
  IconCalendarEvent,
  IconCheck,
  IconAlertTriangle,
  IconExternalLink,
} from "@tabler/icons-react";

export default function WorkingInUKPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "1. Work Status & Hours",
      icon: IconBriefcase,
      description:
        "Contracts, employment categories, and maximum working hours.",
    },
    {
      title: "2. Wages & Zero-Hours",
      icon: IconReceipt2,
      description:
        "Payslips, P45/P60, minimum wage, and wage recovery process.",
    },
    {
      title: "3. Maternity & Paternity",
      icon: IconBabyCarriage,
      description:
        "Pregnancy leave, Statutory Maternity Pay (SMP), and partner rights.",
    },
    {
      title: "4. Holiday & Sick Pay",
      icon: IconCalendarEvent,
      description:
        "Paid holiday entitlements and Statutory Sick Pay (SSP) eligibility.",
    },
  ];

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
              Everything You Need to Know <br />
              <span className="text-teal-5 italic">
                About Working in the UK
              </span>
            </h1>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy-700 to-transparent" />
      </section>

      {/* Main Content Section */}
      <section className="py-32 bg-navy-700">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-start mt-8">
            {/* Interactive Tabs Menu */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-5 mb-1 px-4">
                Guide Sections
              </span>
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                const isSelected = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? "bg-white/10 border-teal-5/40 shadow-lg shadow-teal-5/5"
                        : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="workingTabGlow"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-teal-5"
                      />
                    )}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? "bg-teal-5/20 text-teal-4"
                          : "bg-white/5 text-[#8B98AB] group-hover:text-white"
                      }`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold transition-colors ${isSelected ? "text-white" : "text-[#8B98AB] group-hover:text-white"}`}
                      >
                        {tab.title}
                      </h4>
                      <p className="text-[11px] text-[#8B98AB]/70 font-medium leading-relaxed mt-1">
                        {tab.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Panel */}
            <div className="w-full lg:w-2/3 glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-white/5 relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* TAB 1: WORK STATUS & HOURS */}
                  {activeTab === 0 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">
                        1. Starting Work & Contracts
                      </h3>
                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        To begin working legally in the UK, having a formal
                        written contract is key. This guarantees your statutory
                        employment rights are fully protected under UK law.
                      </p>

                      <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                        <h4 className="text-white font-bold text-sm mb-3">
                          Employee vs Self-Employed
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed">
                          An employee possesses significantly more statutory
                          rights (holiday pay, SSP, redundancy, pension) than a
                          self-employed person. Be cautious: certain rogue
                          employers try to treat workers as self-employed to
                          avoid giving holidays and sick leave, which is
                          illegal.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl border border-teal-5/10 bg-teal-5/5">
                        <h4 className="text-white font-bold text-sm mb-3">
                          Statutory Working Hours Limits
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-4">
                          By law, adult workers cannot be forced to work more
                          than an average of <strong>48 hours per week</strong>{" "}
                          unless they explicitly sign a voluntary opt-out
                          agreement. Key rules:
                        </p>
                        <ul className="space-y-2 text-xs text-[#8B98AB] font-semibold">
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>
                              At least 1 full day off in any given week
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>
                              Minimum 20-minute rest break for shifts over 6
                              hours
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <IconCheck size={14} className="text-teal-5" />
                            <span>
                              Night workers cannot average more than 8 hours per
                              night shift
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: WAGES & ZERO HOURS */}
                  {activeTab === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">
                        2. Zero-Hours, Wages, & Payslips
                      </h3>
                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        A "zero-hours" contract means the employer is not
                        legally obligated to guarantee a minimum amount of
                        working hours, but you retain statutory minimum wage and
                        holiday rights.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                          <h4 className="text-white text-sm font-bold mb-2">
                            National Minimum Wage
                          </h4>
                          <p className="text-xs text-[#8B98AB] leading-relaxed">
                            Every employee is legally protected by the National
                            Minimum & Living Wage, which changes each April.
                            Many premium employers opt to pay the voluntary
                            "Real Living Wage" based on actual living costs.
                          </p>
                          <div className="flex gap-4 mt-3">
                            <a
                              href="https://www.gov.uk/national-minimum-wage-rates"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-teal-4 hover:underline inline-flex items-center gap-1 font-bold"
                            >
                              GOV.UK Wage Rates <IconExternalLink size={10} />
                            </a>
                            <a
                              href="https://www.livingwage.org.uk"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-teal-4 hover:underline inline-flex items-center gap-1 font-bold"
                            >
                              Real Living Wage <IconExternalLink size={10} />
                            </a>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                          <h4 className="text-white text-sm font-bold mb-2">
                            Tax Documents P60 & P45
                          </h4>
                          <p className="text-xs text-[#8B98AB] leading-relaxed">
                            <strong>P60:</strong> Annual summary showing the
                            exact tax you paid in the financial year. Crucial to
                            claim back overpaid tax or mortgage applications.{" "}
                            <br />
                            <strong>P45:</strong> Given to you by your employer
                            when you leave a job, recording tax paid in the
                            current tax year.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/5">
                        <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                          <IconAlertTriangle
                            size={18}
                            className="text-red-500"
                          />
                          What if your employer refuses to pay you?
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed">
                          1. Speak directly to your supervisor. If unresolved,
                          write a formal complaint letter and retain a copy.{" "}
                          <br />
                          2. You can legally submit a claim to an{" "}
                          <strong>Employment Tribunal</strong>. <br />
                          3. Being dismissed due to notifying your employer of a
                          wage dispute is classed as "unfair dismissal" and can
                          be reported.
                        </p>
                        <a
                          href="http://www.lawcentres.org.uk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-teal-4 hover:underline font-bold mt-4"
                        >
                          Law Centres UK Portal <IconExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: MATERNITY & PATERNITY */}
                  {activeTab === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">
                        3. Maternity & Paternity Rights
                      </h3>
                      <p className="text-[#8B98AB] font-medium leading-relaxed">
                        If you become pregnant while working, you possess an
                        automatic, absolute right to take up to{" "}
                        <strong>1 year</strong> of maternity leave after giving
                        birth, regardless of your contract type.
                      </p>

                      <ul className="space-y-3 text-xs text-[#8B98AB] font-semibold">
                        <li className="flex items-start gap-2">
                          <IconCheck
                            size={14}
                            className="text-teal-5 mt-0.5 shrink-0"
                          />
                          <span>
                            You must legally take a minimum of 2 weeks off after
                            birth (4 weeks if factory-based).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <IconCheck
                            size={14}
                            className="text-teal-5 mt-0.5 shrink-0"
                          />
                          <span>
                            Maternity leave can start up to 11 weeks before the
                            expected birth week.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <IconCheck
                            size={14}
                            className="text-teal-5 mt-0.5 shrink-0"
                          />
                          <span>
                            You have a statutory right to fully paid time off
                            for medical antenatal checkups.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <IconCheck
                            size={14}
                            className="text-teal-5 mt-0.5 shrink-0"
                          />
                          <span>
                            Employers must adjust working environments to be
                            safe (e.g. no heavy lifting).
                          </span>
                        </li>
                      </ul>

                      <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                        <h4 className="text-white text-sm font-bold mb-2">
                          Statutory Maternity Pay (SMP)
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-2">
                          Payable for up to 39 weeks if you worked continuously
                          for 26 weeks ending 15 weeks before expected birth,
                          and average earnings exceed the NI limit:
                        </p>
                        <ul className="list-disc pl-4 text-xs text-[#8B98AB] space-y-1">
                          <li>
                            First 6 weeks: paid at 90% of your average weekly
                            earnings.
                          </li>
                          <li>
                            Next 33 weeks: paid at the legal SMP flat rate (e.g.
                            £152.20+ depending on current review) or 90% of
                            weekly earnings (whichever is lower).
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href="https://www.gov.uk/maternity-allowance"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-teal-4 hover:underline inline-flex items-center gap-1 font-bold"
                        >
                          Gov.uk Maternity Allowance{" "}
                          <IconExternalLink size={10} />
                        </a>
                        <a
                          href="https://www.gov.uk/paternity-pay-leave"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-teal-4 hover:underline inline-flex items-center gap-1 font-bold"
                        >
                          Gov.uk Paternity Rules <IconExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: HOLIDAY & SICK PAY */}
                  {activeTab === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl font-bold border-b border-white/10 pb-4">
                        4. Paid Holiday & Sick Pay (SSP)
                      </h3>

                      <div>
                        <h4 className="text-white font-bold text-sm mb-2">
                          Annual Paid Holiday
                        </h4>
                        <p className="text-[#8B98AB] text-sm leading-relaxed mb-3">
                          Unless you are self-employed, all workers are legally
                          entitled to{" "}
                          <strong>5.6 weeks of paid holiday per year</strong>.
                        </p>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 text-xs text-[#8B98AB] leading-relaxed">
                          For full-time employees (working 5 days a week), this
                          equals exactly{" "}
                          <strong>28 days of paid leave per year</strong>.
                          Part-time employees receive the same 5.6-week ratio,
                          scaled down according to actual hours worked.
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <h4 className="text-white font-bold text-sm mb-2">
                          Statutory Sick Pay (SSP)
                        </h4>
                        <p className="text-xs text-[#8B98AB] leading-relaxed mb-4">
                          If you are too ill to work, and have been off sick for
                          4 or more consecutive days (including non-working
                          days), you qualify by law to receive Statutory Sick
                          Pay (SSP) paid at the legal weekly rate for up to 28
                          weeks.
                        </p>

                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                          <h5 className="text-white text-xs font-bold mb-3">
                            To qualify for Statutory Sick Pay (SSP) you must:
                          </h5>
                          <ul className="space-y-2 text-[11px] text-[#8B98AB] font-semibold">
                            <li className="flex items-center gap-2">
                              <IconCheck size={14} className="text-teal-5" />
                              <span>
                                Be classed as an employee and completed some
                                work for the employer.
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <IconCheck size={14} className="text-teal-5" />
                              <span>
                                Have been ill for at least 4 consecutive days
                                (including weekends).
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <IconCheck size={14} className="text-teal-5" />
                              <span>
                                Earn an average of at least the lower weekly
                                limit (e.g. £95.85+).
                              </span>
                            </li>
                            <li className="flex items-center gap-2">
                              <IconCheck size={14} className="text-teal-5" />
                              <span>
                                Notify your employer about your illness within
                                their deadline (or within 7 days).
                              </span>
                            </li>
                          </ul>
                        </div>
                        <a
                          href="https://www.gov.uk/statutory-sick-pay/what-youll-get"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-teal-4 hover:underline font-bold mt-4"
                        >
                          Gov.uk Sick Pay Calculator{" "}
                          <IconExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons inside dynamic card */}
                  <div className="mt-12 pt-6 border-t border-white/10 flex justify-between">
                    <button
                      onClick={() =>
                        setActiveTab((prev) => Math.max(0, prev - 1))
                      }
                      disabled={activeTab === 0}
                      className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                    >
                      Previous Section
                    </button>
                    <button
                      onClick={() =>
                        setActiveTab((prev) => Math.min(3, prev + 1))
                      }
                      disabled={activeTab === 3}
                      className="px-5 py-2.5 rounded-xl bg-teal-5 text-black text-xs font-semibold uppercase tracking-wider hover:bg-white disabled:opacity-30 disabled:hover:bg-teal-5 transition-all"
                    >
                      Next Section
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
