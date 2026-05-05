"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import {
  IconCalculator,
  IconInfoCircle,
  IconCurrencyPound,
  IconCheck,
  IconShieldCheck,
} from "@tabler/icons-react";

// ─── Constants & Logic ─────────────────────────────────────────────────────
const STATUTORY_RATES = {
  HOLIDAY_PAY: 0.1207,
  EMPLOYER_NI: 0.15,
  PENSION: 0.03,
  NI_ON_HOLIDAY: 0.138,
  SSP_PROVISION: 0.015,
  APPRENTICESHIP_LEVY: 0.005,
};

const MARGIN_TIERS = [
  {
    name: "Low Margin",
    range: "£0.45 - £0.70",
    desc: "high volume, low touch",
    features: [
      "50+ workers daily",
      "Same staff daily",
      "Simple roles",
      "Single site",
      "Predictable shifts",
    ],
  },
  {
    name: "Medium Margin",
    range: "£0.80 - £1.20",
    desc: "standard staffing service",
    features: [
      "15-50 workers daily",
      "Some rotation",
      "Mixed roles (FLT/Production)",
      "1-2 sites",
      "Variable hours",
    ],
  },
  {
    name: "High Margin",
    range: "£1.50 - £2.00",
    desc: "specialist or low volume",
    features: [
      "1-15 workers daily",
      "Different staff daily",
      "Specialist roles (Drivers)",
      "Multiple sites",
      "High-touch support",
    ],
  },
];

// ─── Hero ──────────────────────────────────────────────────────────────────
function CalculatorHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-teal-5/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal-5">
            Intelligence Tools
          </span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The Numbers Every <br />
          <span className="text-teal-5">Client Should Know</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-lg leading-relaxed text-white/60 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Holiday pay, employer NI, pension contributions... these are statutory
          requirements. Every recruiter pays them. Every employer pays them.
          They&apos;re unavoidable.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Interactive Calculator ────────────────────────────────────────────────
function InteractiveCalculator() {
  const [baseRate, setBaseRate] = useState(12.21);
  const [costs, setCosts] = useState({
    holidayPay: 0,
    employerNI: 0,
    pension: 0,
    niOnHoliday: 0,
    sspProvision: 0,
    appLevy: 0,
    totalStat: 0,
  });

  useEffect(() => {
    const holidayPay = baseRate * STATUTORY_RATES.HOLIDAY_PAY;
    const employerNI = baseRate * STATUTORY_RATES.EMPLOYER_NI;
    const pension = baseRate * STATUTORY_RATES.PENSION;
    const niOnHoliday = holidayPay * STATUTORY_RATES.NI_ON_HOLIDAY;
    const sspProvision = baseRate * STATUTORY_RATES.SSP_PROVISION;
    const appLevy =
      (baseRate + holidayPay) * STATUTORY_RATES.APPRENTICESHIP_LEVY;

    const totalStat =
      baseRate +
      holidayPay +
      employerNI +
      pension +
      niOnHoliday +
      sspProvision +
      appLevy;

    setCosts({
      holidayPay,
      employerNI,
      pension,
      niOnHoliday,
      sspProvision,
      appLevy,
      totalStat,
    });
  }, [baseRate]);

  const formatCurrency = (num) => `£${num.toFixed(2)}`;

  return (
    <section className="py-24 bg-navy-700 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Input & Primary Results */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-10 relative overflow-hidden hover:border-teal-5/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-5" />

              <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-10 flex items-center gap-2">
                <IconCalculator size={18} className="text-teal-5" /> Worker Base
                Rate
              </h3>

              <div className="mb-12">
                <div className="flex items-end justify-between mb-6">
                  <div className="text-[#8B98AB] text-xs font-semibold uppercase">
                    Base Hourly Pay
                  </div>
                  <div className="text-white text-5xl font-mono font-semibold tracking-tighter">
                    {formatCurrency(baseRate)}
                  </div>
                </div>
                <input
                  type="range"
                  min="11.44"
                  max="25.00"
                  step="0.01"
                  value={baseRate}
                  onChange={(e) => setBaseRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-teal-5"
                />
                <div className="flex justify-between mt-4 text-[10px] text-[#8B98AB]/70 font-semibold uppercase tracking-widest">
                  <span>£11.44 (Living Wage)</span>
                  <span>£25.00</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-teal-5/5 border border-teal-5/10">
                <div className="text-teal-5/60 text-xs font-semibold uppercase tracking-widest mb-2">
                  Your True Cost (Before Margin)
                </div>
                <div className="text-white text-6xl font-mono font-semibold tracking-tighter flex items-end gap-2">
                  {formatCurrency(costs.totalStat)}
                  <span className="text-xl text-teal-5 mb-2 font-sans font-medium">
                    + margin
                  </span>
                </div>
                <p className="text-[#8B98AB] text-[11px] mt-6 leading-relaxed font-medium uppercase tracking-wider">
                  This is the cost to put a worker on site before we make a
                  penny. Anyone charging you less is cutting corners on
                  statutory obligations.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-teal-5/10 flex items-center justify-center shrink-0 text-teal-4">
                  <IconShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Statutory Compliance
                  </h4>
                  <p className="text-[#8B98AB] text-sm leading-relaxed">
                    We don&apos;t &quot;hide&quot; these costs in our margin. We
                    itemise them so you know exactly where your money goes. This
                    transparency protects you from legal and financial risks
                    associated with non-compliant payroll practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Breakdown */}
          <div className="glass-card rounded-2xl p-10">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-10">
              Statutory Breakdown (Hourly)
            </h3>

            <div className="space-y-1">
              {[
                {
                  label: "Worker Base Pay",
                  value: baseRate,
                  sub: "The amount seen on the payslip",
                  bold: true,
                },
                {
                  label: "Holiday Pay (12.07%)",
                  value: costs.holidayPay,
                  sub: "Accrued for every hour worked",
                },
                {
                  label: "Employer NI (15.0%)",
                  value: costs.employerNI,
                  sub: "National Insurance contributions",
                },
                {
                  label: "Pension (3.0%)",
                  value: costs.pension,
                  sub: "Auto-enrolment contributions",
                },
                {
                  label: "NI on Holiday (13.8%)",
                  value: costs.niOnHoliday,
                  sub: "Secondary NI liability",
                },
                {
                  label: "SSP Provision (1.5%)",
                  value: costs.sspProvision,
                  sub: "Statutory Sick Pay buffer",
                },
                {
                  label: "Apprenticeship Levy (0.5%)",
                  value: costs.appLevy,
                  sub: "Contribution to levy fund",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-5 rounded-2xl transition-colors hover:bg-white/5 ${row.bold ? "bg-white/5 border border-white/5 mb-4" : ""}`}
                >
                  <div>
                    <div
                      className={`text-sm font-semibold ${row.bold ? "text-white" : "text-white/80"}`}
                    >
                      {row.label}
                    </div>
                    <div className="text-[10px] text-[#8B98AB]/70 font-semibold uppercase tracking-widest mt-0.5">
                      {row.sub}
                    </div>
                  </div>
                  <div
                    className={`font-mono text-lg font-semibold ${row.bold ? "text-white" : "text-teal-4/80"}`}
                  >
                    {formatCurrency(row.value)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
              <div className="text-white font-semibold text-lg">
                Total Cost Foundation
              </div>
              <div className="text-white text-2xl font-mono font-semibold">
                {formatCurrency(costs.totalStat)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Margin Explanation ────────────────────────────────────────────────────
function MarginExplanation() {
  return (
    <section className="py-24 bg-[#0d111a] relative overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="max-w-3xl mb-16">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            THE VARIABLE
          </span>
          <h2 className="text-4xl font-semibold text-white mb-8 tracking-tight">
            Why Our Margin Isn&apos;t Fixed
          </h2>
          <p className="text-[#8B98AB] text-lg leading-relaxed">
            The statutory costs are identical for everyone. Our margin is the
            only variable. It&apos;s not a random number — it&apos;s calculated
            based on the complexity of your operation and the volume of staff
            you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MARGIN_TIERS.map((tier, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-10 hover:border-teal-5/30 transition-all group flex flex-col h-full hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative mb-8">
                <h4 className="text-white text-xl font-semibold mb-1">
                  {tier.name}
                </h4>
                <div className="text-teal-5 font-mono font-semibold text-sm tracking-tight">
                  {tier.range}/hr
                </div>
                <div className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest mt-1">
                  {tier.desc}
                </div>
              </div>
              <ul className="relative space-y-4 mb-10 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <IconCheck
                      size={16}
                      className="text-teal-5 shrink-0 mt-0.5"
                    />
                    <span className="text-white/60 text-sm leading-tight">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="relative text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest leading-relaxed">
                Requires site visit for accurate quoting
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Legal Disclaimer ───────────────────────────────────────────────────────
function StatutoryDisclaimer() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-5/5 blur-[100px] pointer-events-none" />
          <IconInfoCircle
            className="relative mx-auto text-teal-5 mb-8"
            size={48}
            strokeWidth={1.5}
          />
          <h3 className="relative text-white text-3xl font-semibold mb-8 tracking-tight">
            Legal Requirements Are Unavoidable
          </h3>
          <p className="relative max-w-3xl mx-auto text-white/60 text-xl leading-relaxed">
            If an agency is quoting you a rate that is less than the total of
            the statutory costs plus their operational costs, they are likely
            either non-compliant with tax laws or failing to provide workers
            with their legal rights.
          </p>
          <div className="relative mt-12 flex flex-wrap justify-center gap-12">
            {[
              { label: "Holiday Pay", value: "Every Worker" },
              { label: "Employer NI", value: "Statutory" },
              { label: "Pension", value: "Auto-Enrolled" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-white text-2xl font-semibold mb-1">
                  {item.value}
                </div>
                <div className="text-teal-5 text-[10px] font-semibold uppercase tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function RateCalculatorPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <CalculatorHero />
      <InteractiveCalculator />
      <MarginExplanation />
      <StatutoryDisclaimer />
      <CtaBanner
        badge="VISIT REQUIRED"
        title="The Only Way to Know?"
        titleHighlight="We Need to Visit You."
        subtitle="Staffing costs aren't about simple spreadsheets. We need to understand your site, your safety requirements, and your operational flow to provide a quote that works for both of us."
        primaryButtonText="Request a Site Visit"
        secondaryButtonText="Talk to an Expert"
        primaryButtonHref="https://bookings.cloud.microsoft/book/ACCEPTECH@acceptrec.co.uk/?ismsaljsauthenabled=true"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
