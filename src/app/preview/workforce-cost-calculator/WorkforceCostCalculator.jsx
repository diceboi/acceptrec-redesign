"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  IconShieldCheck,
  IconAlertTriangle,
  IconCheck,
  IconArrowDown,
  IconCopy,
  IconPrinter,
  IconMail,
  IconFileText,
  IconSparkles,
  IconX,
  IconHelpCircle,
  IconChevronDown,
} from "@tabler/icons-react";
import "./calculator.css";
import { submitWorkforceCalculatorLead } from "@/app/actions/workforce-calculator";

const REPORT_PDF_URL = "/wi2-anonymised-workforce-intelligence-report.pdf";

export default function WorkforceCostCalculator() {
  // Step 1: Margin inputs
  const [marginMode, setMarginMode] = useState("hourly"); // "hourly" | "direct"
  const [annualHours, setAnnualHours] = useState("");
  const [marginPerHour, setMarginPerHour] = useState("");
  const [annualMarginDirect, setAnnualMarginDirect] = useState("");

  // Step 1 estimate helper
  const [showEstimator, setShowEstimator] = useState(false);
  const [avgWorkers, setAvgWorkers] = useState("");
  const [avgHours, setAvgHours] = useState("");
  const [operatingWeeks, setOperatingWeeks] = useState(52);

  // Step 2: Admin inputs
  const [adminMode, setAdminMode] = useState(""); // "" | "headcount" | "time" | "both"
  const [roleCost, setRoleCost] = useState("");
  const [headcountPct, setHeadcountPct] = useState(null); // 25 | 50 | 75 | 100
  const [weeklyHours, setWeeklyHours] = useState("");
  const [loadedHourlyCost, setLoadedHourlyCost] = useState("");
  const [adminWeeks, setAdminWeeks] = useState(52);
  const [timePct, setTimePct] = useState(null); // 25 | 50 | 75

  // Step 3: Attrition inputs
  const [attritionKnowledge, setAttritionKnowledge] = useState(""); // "" | "yes" | "partial" | "no"
  const [annualInductions, setAnnualInductions] = useState("");
  const [attritionRate, setAttritionRate] = useState("");
  const [costPerLeaver, setCostPerLeaver] = useState("");
  const [attritionReduction, setAttritionReduction] = useState(null); // 25 | 50 | 75

  // Copy result state
  const [copied, setCopied] = useState(false);

  // Modal & Lead Form state
  const [modalOpen, setModalOpen] = useState(false);
  const [formIntent, setFormIntent] = useState("email_result"); // "email_result" | "workforce_cost_review"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    message: "",
    marketingConsent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [attribution, setAttribution] = useState({});

  // Capture UTM attribution on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const q = new URLSearchParams(window.location.search);
      setAttribution({
        utm_source: q.get("utm_source") || "",
        utm_medium: q.get("utm_medium") || "",
        utm_campaign: q.get("utm_campaign") || "",
        utm_content: q.get("utm_content") || "",
        landing_url: window.location.href,
      });

      if (q.get("example") === "1") {
        loadExample();
      }
    }
  }, []);

  // Formatters
  const moneyFmt = useMemo(
    () =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 0,
      }),
    []
  );

  const numFmt = useMemo(
    () => new Intl.NumberFormat("en-GB", { maximumFractionDigits: 1 }),
    []
  );

  const formatMoney = (val) =>
    Number.isFinite(val) ? moneyFmt.format(Math.round(val)) : "£0";

  const formatSignedMoney = (val) => {
    if (!Number.isFinite(val)) return "£0";
    return val >= 0 ? formatMoney(val) : "-" + formatMoney(Math.abs(val));
  };

  // Calculations
  const calculations = useMemo(() => {
    // 1. Margin
    let margin = 0;
    let marginReady = false;

    if (marginMode === "hourly") {
      const h = parseFloat(annualHours) || 0;
      const m = parseFloat(marginPerHour) || 0;
      margin = h * m;
      marginReady = h > 0 && m > 0;
    } else {
      const d = parseFloat(annualMarginDirect) || 0;
      margin = d;
      marginReady = d > 0;
    }

    // 2. Admin & Headcount
    const rCost = parseFloat(roleCost) || 0;
    const hPct = headcountPct || 0;
    const headcountVal = (rCost * hPct) / 100;
    const headcountReady = rCost > 0 && hPct > 0;

    const wHours = parseFloat(weeklyHours) || 0;
    const wWeeks = parseFloat(adminWeeks) || 0;
    const lCost = parseFloat(loadedHourlyCost) || 0;
    const tPct = timePct || 0;
    const timeVal = (wHours * wWeeks * lCost * tPct) / 100;
    const timeReady = wHours > 0 && wWeeks > 0 && lCost > 0 && tPct > 0;

    let adminVal = 0;
    let adminReady = false;

    if (adminMode === "headcount") {
      adminVal = headcountVal;
      adminReady = headcountReady;
    } else if (adminMode === "time") {
      adminVal = timeVal;
      adminReady = timeReady;
    } else if (adminMode === "both") {
      adminVal = Math.max(headcountVal, timeVal);
      adminReady = headcountReady && timeReady;
    }

    // 3. Attrition
    const aInductions = parseFloat(annualInductions) || 0;
    const aRate = parseFloat(attritionRate) || 0;
    const cLeaver = parseFloat(costPerLeaver) || 0;
    const aRedPct = attritionReduction || 0;

    let currentEarlyLeavers = 0;
    let avoidedLeavers = 0;
    let attritionVal = 0;
    let attritionReady = false;

    if (
      (attritionKnowledge === "yes" || attritionKnowledge === "partial") &&
      aInductions > 0 &&
      aRate > 0 &&
      cLeaver > 0 &&
      aRedPct > 0
    ) {
      currentEarlyLeavers = (aInductions * aRate) / 100;
      avoidedLeavers = (currentEarlyLeavers * aRedPct) / 100;
      attritionVal = avoidedLeavers * cLeaver;
      attritionReady = true;
    } else if (attritionKnowledge === "no") {
      attritionReady = true;
    }

    // Totals
    const totalVal = adminVal + attritionVal;
    const netVal = totalVal - margin;
    const multiple = margin > 0 ? totalVal / margin : 0;
    const offset = margin > 0 ? (totalVal / margin) * 100 : 0;
    const resultReady = marginReady && adminReady;

    return {
      margin,
      marginReady,
      headcountVal,
      timeVal,
      adminVal,
      adminReady,
      currentEarlyLeavers,
      avoidedLeavers,
      attritionReductionPct: aRedPct,
      attritionVal,
      attritionReady,
      totalVal,
      netVal,
      multiple,
      offset,
      resultReady,
    };
  }, [
    marginMode,
    annualHours,
    marginPerHour,
    annualMarginDirect,
    adminMode,
    roleCost,
    headcountPct,
    weeklyHours,
    adminWeeks,
    loadedHourlyCost,
    timePct,
    attritionKnowledge,
    annualInductions,
    attritionRate,
    costPerLeaver,
    attritionReduction,
  ]);

  // Load Worked Example
  const loadExample = () => {
    setMarginMode("hourly");
    setAnnualHours("25000");
    setMarginPerHour("1");
    setAdminMode("both");
    setRoleCost("35000");
    setHeadcountPct(100);
    setWeeklyHours("20");
    setLoadedHourlyCost("30");
    setAdminWeeks(52);
    setTimePct(50);
    setAttritionKnowledge("yes");
    setAnnualInductions("500");
    setAttritionRate("20");
    setCostPerLeaver("600");
    setAttritionReduction(50);

    const calcEl = document.getElementById("calculator");
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Apply Estimate Helper
  const applyHoursEstimate = () => {
    const est =
      (parseFloat(avgWorkers) || 0) *
      (parseFloat(avgHours) || 0) *
      (parseFloat(operatingWeeks) || 52);
    if (est > 0) {
      setAnnualHours(Math.round(est).toString());
      setShowEstimator(false);
    }
  };

  // Copy Result Text
  const copyResultText = async () => {
    if (!calculations.resultReady) return;
    const text = [
      "WI² Temporary Workforce Cost Calculation",
      "Estimated annual agency margin: " + formatMoney(calculations.margin),
      "Potential value from released or avoided role capacity: " +
        formatMoney(calculations.adminVal),
      "Current early leavers: " + numFmt.format(calculations.currentEarlyLeavers),
      "Attrition reduction scenario tested: " +
        calculations.attritionReductionPct +
        "%",
      "Potentially prevented early leavers: " +
        numFmt.format(calculations.avoidedLeavers),
      "Potential retention saving: " + formatMoney(calculations.attritionVal),
      "Total potential annual value: " + formatMoney(calculations.totalVal),
      "Potential net value after margin: " +
        formatSignedMoney(calculations.netVal),
      "Potential value per £1 of margin: " +
        calculations.multiple.toFixed(1) +
        "x",
      "",
      dynamicMessage.body,
      "",
      "Illustrative estimate based on user-entered assumptions; not a guarantee of savings.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  // Dynamic Messages
  const dynamicMessage = useMemo(() => {
    if (!calculations.marginReady) {
      return {
        title: "Start with the agency cost.",
        body: "Enter your annual temporary hours and margin per hour, or the annual agency margin directly.",
        side: "Enter your agency cost to establish the visible benchmark.",
        badge: "Enter agency cost",
      };
    }
    if (!calculations.adminReady) {
      return {
        title: "Now add administrative capacity.",
        body: "Select the scenario that best describes your operation and enter the relevant employment costs.",
        side: `Your annual agency margin is ${formatMoney(calculations.margin)}. Now add the capacity that could be redeployed, released for higher-value work or used to avoid additional headcount.`,
        badge: `Margin: ${formatMoney(calculations.margin)}`,
      };
    }
    if (calculations.multiple >= 2) {
      return {
        title: `The potential value is approximately ${calculations.multiple.toFixed(1)} times the agency margin.`,
        body: `Based on your figures, ${formatMoney(calculations.totalVal)} of potential value compares with approximately ${formatMoney(calculations.margin)} of agency margin. In net financial terms, the service could effectively pay for itself and return a further ${formatMoney(calculations.netVal)} in operational value.`,
        side: `Potential value could fully offset the agency margin and return ${formatMoney(calculations.netVal)} again.`,
        badge: `${calculations.multiple.toFixed(1)}x potential return`,
      };
    }
    if (calculations.multiple >= 1) {
      return {
        title: "The potential value could fully offset the agency margin.",
        body: `Based on your figures, the value identified is ${formatMoney(calculations.totalVal)} against an estimated agency margin of ${formatMoney(calculations.margin)}, leaving approximately ${formatMoney(calculations.netVal)} in additional operational value.`,
        side: "The identified value could fully offset the agency margin.",
        badge: `${Math.round(calculations.offset)}% margin offset`,
      };
    }
    return {
      title: `The identified value could offset approximately ${Math.round(calculations.offset)}% of the agency margin.`,
      body: `Based on the figures entered, the current calculation identifies ${formatMoney(calculations.totalVal)} of potential value. It excludes any cost for which information has not been provided, including attendance failure, overtime, productivity loss, quality issues and unfilled shifts.`,
      side: `Current inputs could offset around ${Math.round(calculations.offset)}% of the agency margin.`,
      badge: `${Math.round(calculations.offset)}% margin offset`,
    };
  }, [calculations, formatMoney]);

  // Modal open
  const handleOpenModal = (intent) => {
    if (!calculations.resultReady) {
      const calcEl = document.getElementById("calculator");
      if (calcEl) calcEl.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setFormIntent(intent);
    setSubmitted(false);
    setModalOpen(true);
  };

  // Submit Lead Form
  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      contact: {
        ...formData,
        form_intent: formIntent,
      },
      calculation: {
        annual_agency_margin: Math.round(calculations.margin),
        administration_headcount_value: Math.round(calculations.adminVal),
        released_or_avoided_capacity_value: Math.round(calculations.adminVal),
        current_early_leavers: Number(calculations.currentEarlyLeavers.toFixed(2)),
        attrition_reduction_percentage: calculations.attritionReductionPct,
        prevented_early_leavers: Number(calculations.avoidedLeavers.toFixed(2)),
        attrition_value: Math.round(calculations.attritionVal),
        total_potential_value: Math.round(calculations.totalVal),
        net_potential_value: Math.round(calculations.netVal),
        value_multiple: Number(calculations.multiple.toFixed(2)),
        margin_offset_percentage: Math.round(calculations.offset),
        attrition_information_known: attritionKnowledge === "yes",
        admin_scenario: adminMode,
      },
      attribution,
      submitted_at: new Date().toISOString(),
    };

    try {
      await submitWorkforceCalculatorLead(payload);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-navy-950 text-white font-sans selection:bg-teal-5 selection:text-white">
      <div className="screen-only">
        {/* ── 1. HERO SECTION ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Glow ambient background elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{
              height: "650px",
              width: "650px",
              left: "-5%",
              top: "-10%",
              background: "var(--color-teal-5)",
              opacity: 0.12,
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              height: "550px",
              width: "550px",
              right: "-5%",
              top: "10%",
              background: "var(--color-purple-5)",
              opacity: 0.14,
              filter: "blur(130px)",
            }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-25" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-4">
              WI² Temporary Workforce Cost Calculator
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
          >
            Could your recruitment agency{" "}
            <span className="text-teal-4">effectively pay for itself?</span>
          </motion.h1>

          {/* £35k Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="glass-card mx-auto max-w-3xl rounded-2xl p-6 md:p-7 border border-white/10 mb-8 text-left relative overflow-hidden"
          >
            <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-teal-5/15 blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-5/15 text-teal-4 border border-teal-5/30 mt-1">
                <IconSparkles size={22} />
              </div>
              <div>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  One client told us that our connected workforce technology
                  removed enough administration for it to avoid recruiting an
                  additional administrator — a reported annual cost avoidance of
                  approximately{" "}
                  <strong className="text-teal-4 font-bold">
                    £35,000
                  </strong>
                  , including employer on-costs.
                </p>
                <p className="text-xs text-white/50 mt-2">
                  Client-reported example. The amount is approximate and will
                  not apply to every operation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-white/70 mb-8"
          >
            Use your own figures to compare the potential value of reduced
            administration, avoided headcount and lower early attrition with the
            agency margin you pay.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              href="#calculator"
              className="w-full sm:w-auto"
            >
              Calculate my potential saving
              <IconArrowDown size={18} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={loadExample}
              className="w-full sm:w-auto"
            >
              Use worked example figures
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50"
          >
            <IconShieldCheck size={16} className="text-teal-4" />
            <span>
              Takes around two minutes. No contact details are required to see
              your result.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CREDIBILITY / OBJECTION SECTION ───────────────────────────── */}
      <section className="relative py-20 bg-navy-900 border-y border-white/5">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Objection Callout Box */}
            <div className="lg:col-span-5 glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-3">
                A Fair Reaction
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                £35,000 sounds like a bold number.
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                You may be thinking this is simply another recruitment company
                using a large figure to get your attention.
              </p>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm italic">
                “That would be a fair reaction.”
              </div>
            </div>

            {/* Explanation */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The figure is not the promise.{" "}
                <span className="text-teal-4">The method is.</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                The £35,000 is not a promise that every business will achieve the
                same result. It is the approximate annual cost one client told us
                it avoided.
              </p>
              <p className="text-white/90 font-medium">
                This calculator does not use an assumed saving or generic
                industry average. You provide the figures. It shows you the
                financial implication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Avoided headcount calculated first",
                  "Valued with your own employment costs",
                  "Retention added only when known",
                  "Direct comparison against agency margin",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-white/80">
                    <div className="h-5 w-5 rounded-full bg-teal-5/20 text-teal-4 flex items-center justify-center shrink-0">
                      <IconCheck size={13} strokeWidth={2.5} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ILLUSTRATIVE CALCULATION (MARGIN VS VALUE) ───────────────── */}
      <section className="relative py-20 bg-navy-950">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-15" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-4">
              The Commercial Question
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              The calculation most agencies never show you
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Most businesses compare agencies solely by the hourly margin charged.
              WI² compares the margin against the total costs removed from the
              wider operation:
            </p>
          </div>

          {/* Math Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Temporary Hours
              </span>
              <strong className="text-3xl font-bold text-white block">
                25,000
              </strong>
              <span className="text-xs text-white/50 mt-1 block">
                annual hours
              </span>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Agency Margin
              </span>
              <strong className="text-3xl font-bold text-white block">
                £25,000
              </strong>
              <span className="text-xs text-white/50 mt-1 block">
                at £1.00 per hour
              </span>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Potential Value
              </span>
              <strong className="text-3xl font-bold text-teal-4 block">
                £65,000
              </strong>
              <span className="text-xs text-white/50 mt-1 block">
                £35k admin + £30k retention
              </span>
            </div>

            <div className="glass-card rounded-2xl p-6 border-2 border-teal-5/60 bg-gradient-to-br from-teal-5/20 via-teal-5/5 to-transparent shadow-xl shadow-teal-5/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-3 block mb-2">
                Return Per £1 Margin
              </span>
              <strong className="text-3xl font-bold text-white block">
                £2.60
              </strong>
              <span className="text-xs text-teal-3/80 mt-1 block">
                for every £1 margin paid
              </span>
            </div>
          </div>

          {/* Explanatory quote */}
          <div className="mt-8 text-center">
            <p className="text-xl sm:text-2xl font-medium text-white/90 italic">
              “Your agency can tell you what it charges. Can it tell you what it saves?”
            </p>
            <p className="text-xs text-white/40 mt-3">
              Illustrative example only. Actual results depend on the figures entered,
              operational circumstances and changes successfully implemented.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE CALCULATOR ────────────────────────────────────── */}
      <section
        id="calculator"
        className="relative py-20 bg-navy-900 border-t border-white/5 scroll-mt-20"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-3">
              Interactive Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Calculate the potential value in your operation
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-2xl">
              Start with administration and headcount. Early attrition is
              added separately where you have enough data to test it.
            </p>
          </div>

          {/* Calculator Shell */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Steps Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* ── STEP 1 ── */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-5 text-white font-bold text-base shadow-lg shadow-teal-5/25">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Start with the visible agency cost
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Enter either annual hours and margin per hour, or your total
                      annual margin directly.
                    </p>
                  </div>
                </div>

                {/* Mode Selector Tabs */}
                <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
                  <button
                    type="button"
                    onClick={() => setMarginMode("hourly")}
                    className={`flex-1 py-2.5 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                      marginMode === "hourly"
                        ? "bg-teal-5 text-white shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Hours & hourly margin
                  </button>
                  <button
                    type="button"
                    onClick={() => setMarginMode("direct")}
                    className={`flex-1 py-2.5 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                      marginMode === "direct"
                        ? "bg-teal-5 text-white shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Annual margin directly
                  </button>
                </div>

                {marginMode === "hourly" ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Temporary hours per year
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            placeholder="e.g. 25000"
                            value={annualHours}
                            onChange={(e) => setAnnualHours(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 font-semibold">
                            hours
                          </span>
                        </div>
                        <span className="text-[11px] text-white/40 mt-1.5 block">
                          Total hours from agency invoices over last 12 months.
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Agency margin per hour
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 font-bold">
                            £
                          </span>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="e.g. 1.00"
                            value={marginPerHour}
                            onChange={(e) => setMarginPerHour(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                        </div>
                        <span className="text-[11px] text-white/40 mt-1.5 block">
                          Margin only, excluding pay, holiday, pension, NI, VAT.
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowEstimator(!showEstimator)}
                      className="text-xs text-teal-4 hover:text-teal-3 underline font-semibold cursor-pointer inline-flex items-center gap-1 mt-2"
                    >
                      <IconHelpCircle size={14} />
                      {showEstimator
                        ? "Hide estimation helper"
                        : "Help me estimate this (workers per week)"}
                    </button>

                    {showEstimator && (
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="text-[11px] text-white/60 font-semibold block mb-1">
                              Workers / week
                            </label>
                            <input
                              type="number"
                              min="0"
                              placeholder="e.g. 15"
                              value={avgWorkers}
                              onChange={(e) => setAvgWorkers(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-semibold"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-white/60 font-semibold block mb-1">
                              Hours / worker / wk
                            </label>
                            <input
                              type="number"
                              min="0"
                              step="0.5"
                              placeholder="e.g. 37.5"
                              value={avgHours}
                              onChange={(e) => setAvgHours(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-semibold"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-white/60 font-semibold block mb-1">
                              Operating weeks
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="52"
                              value={operatingWeeks}
                              onChange={(e) => setOperatingWeeks(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-semibold"
                            />
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={applyHoursEstimate}
                        >
                          Apply estimate
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                      Approximate total annual agency margin
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 font-bold">
                        £
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="100"
                        placeholder="e.g. 25000"
                        value={annualMarginDirect}
                        onChange={(e) => setAnnualMarginDirect(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Step 1 Result Strip */}
                <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                    Estimated Annual Agency Margin
                  </span>
                  <strong className="text-lg font-bold text-white">
                    {calculations.marginReady
                      ? formatMoney(calculations.margin)
                      : "Not calculated"}
                  </strong>
                </div>
              </div>

              {/* ── STEP 2 ── */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-5 text-white font-bold text-base shadow-lg shadow-teal-5/25">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      What does temporary-workforce administration cost you?
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Include bookings, shift changes, worker communication,
                      attendance, replacements, timesheets, payroll queries and
                      reporting.
                    </p>
                  </div>
                </div>

                {/* Question choice */}
                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
                  Which statement is closest to your current position?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {[
                    {
                      id: "headcount",
                      label: "We expect to need an additional administrator or coordinator.",
                    },
                    {
                      id: "time",
                      label: "Existing employees currently absorb the workload.",
                    },
                    {
                      id: "both",
                      label: "Both apply to our operation.",
                    },
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setAdminMode(opt.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm leading-relaxed ${
                        adminMode === opt.id
                          ? "border-teal-5 bg-teal-5/10 text-white shadow-[0_0_20px_rgba(0,165,165,0.15)] font-semibold"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 text-white/70 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>

                {/* Option 1: Headcount Fields */}
                {(adminMode === "headcount" || adminMode === "both") && (
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-teal-4">
                      Additional Role Capacity
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Annual cost of additional role
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 font-bold">
                            £
                          </span>
                          <input
                            type="number"
                            min="0"
                            step="100"
                            placeholder="e.g. 35000"
                            value={roleCost}
                            onChange={(e) => setRoleCost(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                        </div>
                        <span className="text-[11px] text-white/40 mt-1.5 block">
                          Total annual cost: salary, employer NI, pension, costs.
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Proportion avoided / redeployed
                        </label>
                        <div className="flex gap-2">
                          {[25, 50, 75, 100].map((pct) => (
                            <button
                              key={pct}
                              type="button"
                              onClick={() => setHeadcountPct(pct)}
                              className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                                headcountPct === pct
                                  ? "border-teal-5 bg-teal-5 text-white shadow-lg shadow-teal-5/25"
                                  : "border-white/10 bg-white/5 hover:bg-white/10 text-white/70"
                              }`}
                            >
                              {pct}%
                            </button>
                          ))}
                        </div>
                        <span className="text-[11px] text-white/40 mt-1.5 block">
                          Test scenario (redeployed or avoided capacity).
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Option 2: Time Fields */}
                {(adminMode === "time" || adminMode === "both") && (
                  <div className="pt-4 border-t border-white/10 space-y-4 mt-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-teal-4">
                      Existing Management & Administrative Time
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Hours / week
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            placeholder="e.g. 20"
                            value={weeklyHours}
                            onChange={(e) => setWeeklyHours(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 font-semibold">
                            hrs
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Loaded hourly cost
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 font-bold">
                            £
                          </span>
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            placeholder="e.g. 30"
                            value={loadedHourlyCost}
                            onChange={(e) => setLoadedHourlyCost(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Weeks / year
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="52"
                          value={adminWeeks}
                          onChange={(e) => setAdminWeeks(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Proportion of workload potentially removed
                      </label>
                      <div className="flex gap-2">
                        {[25, 50, 75].map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => setTimePct(pct)}
                            className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                              timePct === pct
                                ? "border-teal-5 bg-teal-5 text-white shadow-lg shadow-teal-5/25"
                                : "border-white/10 bg-white/5 hover:bg-white/10 text-white/70"
                            }`}
                          >
                            {pct}%
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Double Count Notice */}
                {adminMode === "both" && (
                  <div className="p-4 rounded-xl bg-teal-5/10 border border-teal-5/30 text-xs text-white/80 leading-relaxed mt-4">
                    <strong className="text-teal-4 block mb-1">
                      Double-count protection active:
                    </strong>
                    We use the higher of the two figures (£
                    {formatMoney(calculations.adminVal)}) rather than adding both
                    together, reducing the risk of counting the same workload twice.
                  </div>
                )}

                {/* Step 2 Result Strip */}
                <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                    Potential Administration / Headcount Value
                  </span>
                  <strong className="text-lg font-bold text-white">
                    {calculations.adminReady
                      ? formatMoney(calculations.adminVal) + " / yr"
                      : "Not calculated"}
                  </strong>
                </div>
              </div>

              {/* ── STEP 3 ── */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-5 text-white font-bold text-base shadow-lg shadow-teal-5/25">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      What could early attrition be costing you?
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Administration is only the first potential saving. Every
                      worker who leaves early creates repeat inductions, supervisor
                      time and productivity loss.
                    </p>
                  </div>
                </div>

                <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
                  Do you know your annual inductions and 4-week attrition?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { id: "yes", label: "Yes, I have this information." },
                    { id: "partial", label: "I know some of it." },
                    { id: "no", label: "No — my agency has never provided it." },
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setAttritionKnowledge(opt.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-xs sm:text-sm leading-relaxed ${
                        attritionKnowledge === opt.id
                          ? "border-teal-5 bg-teal-5/10 text-white shadow-[0_0_20px_rgba(0,165,165,0.15)] font-semibold"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 text-white/70 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>

                {(attritionKnowledge === "yes" ||
                  attritionKnowledge === "partial") && (
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Inductions / year
                        </label>
                        <input
                          type="number"
                          min="0"
                          placeholder="e.g. 500"
                          value={annualInductions}
                          onChange={(e) => setAnnualInductions(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Leaving in 4 weeks (%)
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="0.1"
                            placeholder="e.g. 20"
                            value={attritionRate}
                            onChange={(e) => setAttritionRate(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 font-semibold">
                            %
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                          Cost per leaver
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 font-bold">
                            £
                          </span>
                          <input
                            type="number"
                            min="0"
                            step="10"
                            placeholder="e.g. 600"
                            value={costPerLeaver}
                            onChange={(e) => setCostPerLeaver(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white font-semibold placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Reduction scenario to test
                      </label>
                      <div className="flex gap-2">
                        {[25, 50, 75].map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => setAttritionReduction(pct)}
                            className={`flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                              attritionReduction === pct
                                ? "border-teal-5 bg-teal-5 text-white shadow-lg shadow-teal-5/25"
                                : "border-white/10 bg-white/5 hover:bg-white/10 text-white/70"
                            }`}
                          >
                            {pct}%
                            {pct === 50 && (
                              <span className="block text-[10px] text-teal-2 font-normal">
                                Test scenario
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3 Result Strip */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                        {calculations.attritionVal > 0
                          ? `Early leavers: ${Math.round(
                              calculations.currentEarlyLeavers
                            )} · Prevented at ${
                              calculations.attritionReductionPct
                            }%: ${Math.round(calculations.avoidedLeavers)}`
                          : "Early leavers: - · Prevented: -"}
                      </span>
                      <strong className="text-lg font-bold text-white">
                        {calculations.attritionVal > 0
                          ? formatMoney(calculations.attritionVal) + " / yr"
                          : "Not calculated"}
                      </strong>
                    </div>
                  </div>
                )}

                {/* Workforce Information Gap */}
                {(attritionKnowledge === "no" ||
                  attritionKnowledge === "partial") && (
                  <div className="mt-6 p-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-white space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                      <IconAlertTriangle size={20} />
                      <h4>A workforce information gap has been identified</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      If your recruitment agency cannot tell you how many temporary
                      workers leave within their first four weeks, it cannot show you
                      what that attrition costs or demonstrate how it is reducing it.
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-300 pt-2">
                      Five questions to ask your current agency:
                    </p>
                    <ol className="text-xs space-y-1.5 text-white/75 list-decimal pl-5">
                      <li>How many temporary workers did we induct in the last 12 months?</li>
                      <li>How many remained after 7 days and 28 days?</li>
                      <li>Which shifts and departments have the highest early attrition?</li>
                      <li>What is the estimated cost of repeat inductions and replacements?</li>
                      <li>What action are you taking, and how do you measure whether it works?</li>
                    </ol>
                    <p className="text-xs font-semibold text-white/90 italic pt-1">
                      If your agency is not measuring early attrition, how can it be managing it?
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sticky Summary (Desktop) */}
            <div className="lg:col-span-4 sticky top-24 space-y-4">
              <div className="glass-card rounded-2xl p-6 md:p-7 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full bg-teal-5/10 blur-3xl pointer-events-none" />

                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4 mb-2">
                  Live Result Summary
                </div>

                <div className="mb-6">
                  <span className="text-xs text-white/50 uppercase tracking-wider">
                    Total Potential Annual Value
                  </span>
                  <div className="text-4xl font-extrabold text-white mt-1">
                    {calculations.resultReady ? (
                      <span className="text-teal-4">
                        {formatMoney(calculations.totalVal)}
                      </span>
                    ) : (
                      "£0"
                    )}
                  </div>
                </div>

                <div className="divide-y divide-white/10 text-xs sm:text-sm">
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/60">Agency Margin</span>
                    <strong className="text-white font-semibold">
                      {calculations.marginReady
                        ? formatMoney(calculations.margin)
                        : "-"}
                    </strong>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/60">Admin / Headcount Value</span>
                    <strong className="text-white font-semibold">
                      {calculations.adminReady
                        ? formatMoney(calculations.adminVal)
                        : "-"}
                    </strong>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/60">Retention Saving</span>
                    <strong className="text-white font-semibold">
                      {calculations.attritionVal > 0
                        ? formatMoney(calculations.attritionVal)
                        : attritionKnowledge === "no"
                        ? "Excluded"
                        : "-"}
                    </strong>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/60">Net Value After Margin</span>
                    <strong className="text-white font-semibold">
                      {calculations.resultReady
                        ? formatSignedMoney(calculations.netVal)
                        : "-"}
                    </strong>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-white/60">Value per £1 Margin</span>
                    <strong className="text-teal-4 font-bold">
                      {calculations.resultReady
                        ? calculations.multiple.toFixed(1) + "x"
                        : "-"}
                    </strong>
                  </div>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/75 leading-relaxed">
                  {dynamicMessage.side}
                </div>

                <div className="mt-5 space-y-2">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => handleOpenModal("email_result")}
                  >
                    <IconMail size={16} />
                    Email this calculation
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    onClick={() => handleOpenModal("workforce_cost_review")}
                  >
                    Request Cost Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PERSONALISED RESULTS PANEL ────────────────────────────────── */}
      <section className="relative py-20 bg-navy-950 border-t border-white/5" id="results">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-4">
                Final Result
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-5/40 bg-teal-5/20 text-teal-3 text-xs font-bold uppercase tracking-wider">
                {dynamicMessage.badge}
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Could your recruitment service effectively pay for itself?
            </h2>
          </div>

          {/* 6 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Estimated Annual Agency Margin
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-white block">
                {calculations.marginReady
                  ? formatMoney(calculations.margin)
                  : "-"}
              </strong>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Potential Admin / Headcount Value
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-white block">
                {calculations.adminReady
                  ? formatMoney(calculations.adminVal)
                  : "-"}
              </strong>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Potential Early Attrition Value
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-white block">
                {calculations.attritionVal > 0
                  ? formatMoney(calculations.attritionVal)
                  : attritionKnowledge === "no"
                  ? "Excluded"
                  : "-"}
              </strong>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Total Potential Annual Value
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-teal-4 block">
                {calculations.resultReady
                  ? formatMoney(calculations.totalVal)
                  : "-"}
              </strong>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                Potential Net Value After Margin
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-white block">
                {calculations.resultReady
                  ? formatSignedMoney(calculations.netVal)
                  : "-"}
              </strong>
            </div>

            <div className="glass-card rounded-2xl p-6 border-2 border-teal-5/60 bg-gradient-to-br from-teal-5/25 via-teal-5/10 to-transparent shadow-2xl shadow-teal-5/20">
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-3 block mb-2">
                Value Returned Per £1 Margin
              </span>
              <strong className="text-2xl sm:text-3xl font-bold text-white block">
                {calculations.resultReady
                  ? calculations.multiple.toFixed(1) + "x"
                  : "-"}
              </strong>
            </div>
          </div>

          {/* Dynamic Insight Banner */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 bg-white/[0.02] mb-8 space-y-3">
            <h3 className="text-xl font-bold text-teal-4">
              {dynamicMessage.title}
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {dynamicMessage.body}
            </p>
            {calculations.resultReady &&
              (attritionKnowledge === "no" ||
                (attritionKnowledge === "partial" &&
                  !calculations.attritionVal)) && (
                <p className="text-xs text-white/50 italic pt-2">
                  Early attrition has not been included because the necessary
                  workforce information was unavailable. Should your recruitment
                  agency be helping you obtain it?
                </p>
              )}
          </div>

          {/* Action Buttons */}
          {/* Action Buttons */}
          <div className="space-y-4 pt-2">
            {/* Primary & Secondary CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center text-xs sm:text-sm font-bold !h-auto !min-h-[48px] py-3 px-4 whitespace-nowrap"
                onClick={() => handleOpenModal("email_result")}
              >
                <IconMail size={18} />
                Email me this calculation
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="w-full justify-center text-xs sm:text-sm font-bold !h-auto !min-h-[48px] py-3 px-4 whitespace-nowrap"
                onClick={() => handleOpenModal("workforce_cost_review")}
              >
                Request a Workforce Cost Review
              </Button>
            </div>

            {/* Utility document tools */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={copyResultText}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <IconCopy size={16} className="text-teal-4" />
                {copied ? "Copied to clipboard!" : "Copy calculation text"}
              </button>
              <button
                type="button"
                onClick={() => typeof window !== "undefined" && window.print()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <IconPrinter size={16} className="text-teal-4" />
                Print / Save PDF Report
              </button>
            </div>
          </div>

          <p className="text-xs text-white/40 mt-6">
            This calculator provides an illustrative estimate based solely on the
            figures entered by the user. It is not a guarantee of financial return.
          </p>
        </div>
      </section>

      {/* ── 6. WHERE CAN THE VALUE COME FROM? ───────────────────────────── */}
      <section className="relative py-20 bg-navy-900 border-t border-white/5">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-4">
              Operational Value
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where can the value come from?
            </h2>
            <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
              Not by cutting a few pence off an hourly margin, but by eliminating
              friction, time loss and turnover across the operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Avoid additional headcount",
                desc: "Reduce manual work associated with bookings, worker communication, attendance, replacements, hours processing and reporting — removing or delaying the need for extra administrative resource.",
              },
              {
                num: "02",
                title: "Release management time",
                desc: "Give supervisors, managers, payroll teams, HR and administrators fewer spreadsheets, calls, messages and queries, freeing capacity for productive operational focus.",
              },
              {
                num: "03",
                title: "Reduce repeat inductions & attrition",
                desc: "Identify patterns associated with shift times, departments, supervisors and assignment length so you can address the root causes of avoidable early leavers.",
              },
              {
                num: "04",
                title: "Improve workforce decision-making",
                desc: "Move beyond standard fill-rate reporting to understand who attends, who returns, where workers leave and where targeted intervention is required.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-teal-5/30 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-xl bg-teal-5/10 border border-teal-5/20 text-teal-4 font-bold text-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {card.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CAREFULLY WORDED RETENTION EXAMPLE COPY ─────────────────── */}
      <section className="relative py-20 bg-navy-950 border-t border-white/5">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-3">
                Operational Analysis
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Administration is only the first cost.
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Every worker who leaves early creates another recruitment
                process, another induction, additional supervisor time and
                reduced team productivity.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How shift intelligence protects retention
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                At another operation, workforce analysis indicated a relationship
                between a shift start time and early worker retention.
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Following a change to the start time, the available data suggested
                that retention improved — meaning fewer potential replacements,
                repeat inductions and management interventions.
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                The precise financial value of a similar change will vary by
                operation. That is why the calculator asks you to use your own
                induction, replacement and management costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ANONYMISED WI² REPORT SECTION ───────────────────────────── */}
      <section className="relative py-20 bg-navy-900 border-t border-white/5" id="report">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Report Document Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="glass-card w-full max-w-[320px] aspect-[0.72] rounded-2xl p-6 border border-white/15 shadow-2xl relative overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-teal-5/15 blur-2xl pointer-events-none" />
                <div className="text-xs font-bold uppercase tracking-widest text-teal-4">
                  Accept Recruitment
                </div>
                <div className="mt-16 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block">
                    Confidential Benchmark
                  </span>
                  <h4 className="text-xl font-bold text-white leading-tight">
                    Workforce Intelligence Report
                  </h4>
                  <p className="text-xs text-white/50">
                    An anonymised client intelligence audit
                  </p>
                </div>
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded-full" />
                  <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-1 w-5/6 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-4">
                Workforce Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                See the intelligence behind the calculation
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                The calculator shows what the financial opportunity could be.
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                The anonymised report shows the workforce intelligence that makes
                better decisions possible — including attendance, worker responses,
                retention patterns, operational performance and workforce feedback.
              </p>
              <p className="text-lg font-semibold text-teal-3 italic">
                Could my current recruitment agency tell me this about my workforce?
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href={REPORT_PDF_URL}
                >
                  <IconFileText size={18} />
                  View the anonymised WI² report (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WORKFORCE COST REVIEW SECTION ────────────────────────────── */}
      <section className="relative py-20 bg-navy-950 border-t border-white/5" id="review">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-teal-5/30 bg-gradient-to-br from-teal-5/15 via-navy-900 to-navy-950 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-teal-4">
                  Next Step
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Would it be a bad idea to validate the numbers?
                </h2>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  A calculator can identify the potential opportunity. A Workforce
                  Cost Review tests the assumptions against the way your operation
                  actually works.
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    "Bookings, communication and attendance processes",
                    "Hours processing, reporting and management time",
                    "Inductions, early attrition and replacement activity",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                      <div className="h-5 w-5 rounded-full bg-teal-5/20 text-teal-4 flex items-center justify-center shrink-0">
                        <IconCheck size={13} strokeWidth={2.5} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-7 border border-white/15 bg-white/[0.03] space-y-4">
                <h3 className="text-lg font-bold text-white">
                  If there is no credible financial case, we will say so.
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Use the figures you have just entered as the starting point for
                  a straightforward commercial review — not a software demo.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full text-xs sm:text-sm font-bold justify-center py-3.5 px-3 whitespace-nowrap"
                  onClick={() => handleOpenModal("workforce_cost_review")}
                >
                  Request a Workforce Cost Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FREQUENTLY ASKED QUESTIONS ─────────────────────────────── */}
      <section className="relative py-20 bg-navy-900 border-t border-white/5">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-4 mb-4">
              Questions & Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What this calculation does — and does not — claim
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is the £35,000 a guaranteed saving?",
                a: "No. It is an approximate, client-reported example of annual role capacity released or additional employment cost avoided. Every calculator result is based on the visitor's own figures and assumptions.",
              },
              {
                q: "Does released capacity count as cash?",
                a: "Not automatically. It represents capacity that may allow an administrator to be redeployed elsewhere, a role to focus on higher-value work or additional headcount to be avoided. The calculator presents potential operational value, not a guaranteed cash saving.",
              },
              {
                q: "How is the retention saving calculated?",
                a: "Current early leavers equal annual inductions multiplied by the current attrition rate. Prevented early leavers equal that result multiplied by the selected percentage reduction. The retention saving equals prevented early leavers multiplied by the cost per early leaver. WI² Mentor coaches workers and Connect supports and engages them, but the selected reduction is a test scenario, not a guaranteed result.",
              },
              {
                q: "Why is attrition optional?",
                a: "Many businesses do not know their annual inductions or four-week attrition rate. The calculator does not invent those figures. Instead, it identifies the information gap and gives the client questions to ask their current agency.",
              },
              {
                q: "Why compare savings with agency margin?",
                a: "Agency margin is visible and easy to compare. The wider cost of administering and repeatedly replacing temporary workers is often less visible. Comparing the two helps a business consider the net value of the whole service, not only the hourly rate.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 group cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-base text-white list-none">
                  <span>{faq.q}</span>
                  <IconChevronDown
                    size={20}
                    className="text-teal-4 group-open:rotate-180 transition-transform duration-200 shrink-0"
                  />
                </summary>
                <p className="mt-3 text-sm text-white/70 leading-relaxed pt-2 border-t border-white/5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-white/40 leading-relaxed text-center">
            This calculator provides an illustrative estimate based solely on the
            information and assumptions entered by the user. It is not a guarantee
            of savings, retention improvement or financial performance. Actual
            outcomes depend on operational circumstances, implementation,
            workforce behaviour and verified baseline data. Released capacity may
            create value through redeployment, higher-value work or avoided
            additional headcount; it does not necessarily represent a direct cash
            saving.
          </div>
        </div>
      </section>

      {/* ── 11. LEAD MODAL ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-navy-900 border border-white/15 text-white rounded-3xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 h-9 w-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <IconX size={18} />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-4 mb-2">
                  {formIntent === "workforce_cost_review"
                    ? "Workforce Cost Review"
                    : "Email Results"}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {formIntent === "workforce_cost_review"
                    ? "Validate your numbers"
                    : "Email this calculation"}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  {formIntent === "workforce_cost_review"
                    ? "Tell us who to contact. We will review your figures against actual operational workflows."
                    : "Enter your work email and we will send you a breakdown of your figures."}
                </p>
              </div>

              {!submitted ? (
                <div>
                  {/* Calculation summary pill */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-xs grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-white/50 block">Agency margin:</span>
                      <strong className="text-white font-bold">
                        {formatMoney(calculations.margin)}
                      </strong>
                    </div>
                    <div>
                      <span className="text-white/50 block">Total potential:</span>
                      <strong className="text-teal-4 font-bold">
                        {formatMoney(calculations.totalVal)}
                      </strong>
                    </div>
                    <div>
                      <span className="text-white/50 block">Net after margin:</span>
                      <strong className="text-white font-bold">
                        {formatSignedMoney(calculations.netVal)}
                      </strong>
                    </div>
                    <div>
                      <span className="text-white/50 block">Value return:</span>
                      <strong className="text-teal-4 font-bold">
                        {calculations.multiple.toFixed(1)}x
                      </strong>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitLead} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          First name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          Last name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          Job title
                        </label>
                        <input
                          type="text"
                          value={formData.jobTitle}
                          onChange={(e) =>
                            setFormData({ ...formData, jobTitle: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          Work email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                          Telephone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1.5">
                        Message / Anything we should know?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-medium focus:ring-2 focus:ring-teal-5/40 focus:border-teal-5 transition-all resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-white/70 pt-1">
                      <input
                        id="marketingConsent"
                        type="checkbox"
                        checked={formData.marketingConsent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            marketingConsent: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded bg-white/10 border-white/20 text-teal-5 focus:ring-0"
                      />
                      <label htmlFor="marketingConsent" className="cursor-pointer">
                        Yes, I would also like to receive occasional workforce
                        intelligence insights by email.
                      </label>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                      <Button
                        type="button"
                        variant="secondary"
                        size="md"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={submitting}
                      >
                        {submitting
                          ? "Sending..."
                          : formIntent === "workforce_cost_review"
                          ? "Request review"
                          : "Send calculation"}
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-teal-5/20 text-teal-4 flex items-center justify-center mx-auto">
                    <IconCheck size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank you!</h4>
                  <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                    {formIntent === "workforce_cost_review"
                      ? "Your Workforce Cost Review request has been sent. Our team will review your calculation and contact you shortly."
                      : "Your calculation details have been captured and will be emailed to you."}
                  </p>
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div> {/* end screen-only */}

      {/* ── PRINT-ONLY EXECUTIVE CALCULATION REPORT ─────────────────── */}
      <div className="print-only hidden p-8 max-w-4xl mx-auto bg-white text-gray-900 font-sans">
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-teal-600 pb-5 mb-6">
          <div>
            <div className="text-2xl font-black text-gray-900 tracking-tight">
              ACCEPT <span className="text-teal-600">RECRUITMENT</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-teal-700 mt-1">
              WI² Temporary Workforce Cost Calculator &middot; Executive Summary
            </div>
          </div>
          <div className="text-right text-xs text-gray-500">
            <div><strong>Date:</strong> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
            <div><strong>Scope:</strong> Temporary Workforce Commercial Assessment</div>
          </div>
        </div>

        {/* Commercial Summary Banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
            Commercial Finding
          </div>
          <div className="text-lg font-bold text-teal-950">
            {dynamicMessage.title}
          </div>
          <div className="text-xs text-gray-700 mt-1.5 leading-relaxed">
            {dynamicMessage.body}
          </div>
        </div>

        {/* Core Financial Comparison Table */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2 border-b pb-1">
            Financial Impact & Value Overview
          </h3>
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 text-gray-600 font-medium">Estimated Annual Agency Margin:</td>
                <td className="py-2.5 text-right font-bold text-gray-900">{formatMoney(calculations.margin)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 text-gray-600 font-medium">Potential Administration / Headcount Value Avoided:</td>
                <td className="py-2.5 text-right font-bold text-gray-900">{formatMoney(calculations.adminVal)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 text-gray-600 font-medium">Potential Early Attrition & Induction Savings:</td>
                <td className="py-2.5 text-right font-bold text-gray-900">
                  {calculations.attritionVal > 0 ? formatMoney(calculations.attritionVal) : "Excluded / Not provided"}
                </td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-3 px-2 text-gray-900 font-bold">Total Potential Operational Value Identified:</td>
                <td className="py-3 px-2 text-right text-teal-800 text-sm font-black">{formatMoney(calculations.totalVal)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 text-gray-600 font-medium">Potential Net Operational Value (After Margin):</td>
                <td className="py-2.5 text-right font-bold text-gray-900">{formatSignedMoney(calculations.netVal)}</td>
              </tr>
              <tr className="border-b-2 border-teal-600 bg-teal-50/60">
                <td className="py-3 px-2 text-teal-950 font-bold text-sm">Potential Value Returned Per £1 of Agency Margin:</td>
                <td className="py-3 px-2 text-right font-black text-teal-900 text-base">
                  {calculations.multiple.toFixed(1)}x
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Assumptions Entered */}
        <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
            Entered Operational Assumptions
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-gray-600">
            {marginMode === "hourly" ? (
              <>
                <div>&bull; Annual Temporary Hours: <strong className="text-gray-900">{annualHours || "-"} hrs</strong></div>
                <div>&bull; Hourly Agency Margin: <strong className="text-gray-900">£{marginPerHour || "-"}</strong></div>
              </>
            ) : (
              <div>&bull; Annual Agency Margin (Direct): <strong className="text-gray-900">£{annualMarginDirect || "-"}</strong></div>
            )}

            {adminMode === "headcount" && (
              <div>&bull; Avoided Role Cost: <strong className="text-gray-900">£{roleCost} ({headcountPct}% capacity)</strong></div>
            )}
            {adminMode === "time" && (
              <div>&bull; Admin Workload: <strong className="text-gray-900">{weeklyHours} hrs/wk @ £{loadedHourlyCost}/hr ({timePct}%)</strong></div>
            )}
            {adminMode === "both" && (
              <>
                <div>&bull; Role Cost Scenario: <strong className="text-gray-900">£{roleCost} ({headcountPct}%)</strong></div>
                <div>&bull; Existing Admin Time: <strong className="text-gray-900">{weeklyHours} hrs/wk ({timePct}%)</strong></div>
              </>
            )}

            {attritionKnowledge === "yes" && (
              <>
                <div>&bull; Annual Inductions: <strong className="text-gray-900">{annualInductions}</strong></div>
                <div>&bull; 4-Week Attrition Rate: <strong className="text-gray-900">{attritionRate}%</strong></div>
                <div>&bull; Reduction Scenario Tested: <strong className="text-gray-900">{attritionReduction}%</strong></div>
                <div>&bull; Cost Per Early Leaver: <strong className="text-gray-900">£{costPerLeaver}</strong></div>
              </>
            )}
          </div>
        </div>

        {/* Next Step & Disclaimer */}
        <div className="border-t pt-4 text-[10px] text-gray-500 space-y-1.5 leading-relaxed">
          <p>
            <strong>Workforce Cost Review:</strong> To test and validate these assumptions against actual operational workflows and shift data, contact Accept Recruitment at <strong>www.acceptrec.co.uk</strong>.
          </p>
          <p>
            <strong>Disclaimer:</strong> This calculation is an illustrative estimate based solely on figures and assumptions entered by the user. It is not a guarantee of financial return or commercial performance. Released capacity creates value through redeployment, higher-value work or avoided additional headcount.
          </p>
        </div>
      </div>
    </div>
  );
}
