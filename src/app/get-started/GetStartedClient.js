"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  IconTrophy,
  IconArrowRight,
  IconClock,
  IconBolt,
  IconShieldCheck,
  IconMap2,
  IconAlertCircle,
  IconCheck,
  IconX,
  IconUserCircle,
  IconBuilding,
  IconTarget,
} from "@tabler/icons-react";
import { useState } from "react";
import { sendGetStartedEmail } from "@/app/actions/email";
import { TurnstileWidget } from "@/components/ui/TurnstileWidget";

// ─── Hero ──────────────────────────────────────────────────────────────────
function GetStartedHero() {
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
          <IconAlertCircle className="text-teal-5" size={16} />
          <span className="text-sm font-semibold text-teal-4">
            Cut No-Shows 75%
          </span>
          <span className="h-4 w-[1px] bg-white/10 mx-1" />
          <span className="text-[10px] text-[#8B98AB] uppercase tracking-widest font-semibold">
            Case Study →
          </span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What If Your Agency
          <br />
          <span className="text-teal-5 italic">Actually Delivered?</span>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No more 6am panic calls. No more covering shifts yourself. Workers who
          show up. Every time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10"
        >
          {[
            { v: "55 Workers", l: "In 3 Days For InPost" },
            { v: "17 Days", l: "To Preferred Partner" },
            { v: "190+", l: "Companies Trust Us" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-teal-4 font-semibold text-2xl">{s.v}</div>
              <div className="text-[#8B98AB]/70 text-[10px] uppercase tracking-widest font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Intake Form ──────────────────────────────────────────────────────────
function IntakeForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    challenge: "Poor reliability / No-shows",
    workersCount: "1-10 workers",
    industry: "Logistics",
    companyName: "",
    department: "Operations",
    seniority: "Director / Executive",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    _gotcha: "", // Honeypot
  });
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const result = await sendGetStartedEmail({
      ...formData,
      turnstileToken,
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIndustryChange = (industry) => {
    setFormData((prev) => ({ ...prev, industry }));
  };

  if (status === "success") {
    return (
      <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-16 max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-teal-5/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <IconCheck className="text-teal-5" size={40} />
            </div>
            <h2 className="text-4xl font-semibold text-white mb-6">
              Inquiry Received
            </h2>
            <p className="text-[#8B98AB] text-lg mb-10">
              Thanks for reaching out! One of our senior consultants will
              contact you within 24 hours to discuss your staffing needs.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-teal-5 font-semibold uppercase tracking-widest text-sm hover:text-white transition-colors"
            >
              Send another inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.3fr] gap-20">
          {/* Left Side: Difference Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              WE DO THINGS DIFFERENTLY
            </span>
            <h2 className="text-4xl font-semibold text-white mb-12 tracking-tight">
              The Accept Difference
            </h2>
            <div className="space-y-12">
              <div className="glass-card rounded-2xl p-8 border-red-500/10 bg-red-500/5">
                <h4 className="text-red-400 font-semibold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                  <IconX size={16} /> Other Agencies
                </h4>
                <ul className="space-y-4">
                  {[
                    "Send whoever's available",
                    "Disappear when there's a problem",
                    "Different contact every month",
                    '"We\'ll try our best" fill rates',
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="text-[#8B98AB] text-sm font-semibold flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />{" "}
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-8 border-teal-5/20 bg-teal-5/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <IconTrophy size={120} />
                </div>
                <h4 className="relative text-teal-4 font-semibold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                  <IconCheck size={16} /> Accept Recruitment
                </h4>
                <ul className="relative space-y-4">
                  {[
                    "Every worker briefed on your site",
                    "No-show? Free replacement",
                    "Same team. Real relationships.",
                    "98% fill rate. We deliver.",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="text-white font-semibold flex items-center gap-3"
                    >
                      <IconCheck className="text-teal-5" size={18} /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-10 md:p-16 relative"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight leading-tight">
                Let&apos;s fix your staffing.
              </h3>
              <p className="text-[#8B98AB] text-lg">
                Tell us what&apos;s not working. We&apos;ll show you how
                we&apos;d fix it.
              </p>
            </div>

            <form className="space-y-12" onSubmit={handleSubmit}>
              {/* Section 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-teal-5 font-semibold uppercase tracking-widest text-[11px]">
                  <IconTarget size={18} /> 1. Your Staffing Needs
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1">
                      Current Challenge*
                    </label>
                    <select
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer"
                    >
                      <option>Poor reliability / No-shows</option>
                      <option>Insufficient volumes</option>
                      <option>High cost / Low ROI</option>
                      <option>Communication issues</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1">
                      Number of Workers*
                    </label>
                    <select
                      name="workersCount"
                      value={formData.workersCount}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer"
                    >
                      <option>1-10 workers</option>
                      <option>10-50 workers</option>
                      <option>50-200 workers</option>
                      <option>200+ workers</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1 text-center block">
                    Industry Selection*
                  </label>
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {[
                      "Logistics",
                      "Manufacturing",
                      "Construction",
                      "Retail",
                      "Food Production",
                      "Driving",
                      "Other",
                    ].map((tag, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleIndustryChange(tag)}
                        className={`px-5 py-2 rounded-full border text-[11px] font-semibold uppercase tracking-widest transition-all ${formData.industry === tag ? "bg-teal-5 border-teal-5 text-black" : "border-white/10 text-white/60 hover:bg-teal-5/10 hover:text-white"}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 pt-12 border-t border-white/5">
                <div className="flex items-center gap-3 text-teal-5 font-semibold uppercase tracking-widest text-[11px]">
                  <IconBuilding size={18} /> 2. Company Details
                </div>
                <div className="space-y-2">
                  <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. InPost UK"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-2">
                    <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1">
                      Your Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer"
                    >
                      <option>Operations</option>
                      <option>Human Resources</option>
                      <option>Procurement</option>
                      <option>Management</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#8B98AB]/70 text-[10px] font-semibold uppercase tracking-widest ml-1">
                      Seniority
                    </label>
                    <select
                      name="seniority"
                      value={formData.seniority}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all appearance-none cursor-pointer"
                    >
                      <option>Director / Executive</option>
                      <option>Manager</option>
                      <option>Supervisor</option>
                      <option>Specialist</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 pt-12 border-t border-white/5">
                <div className="flex items-center gap-3 text-teal-5 font-semibold uppercase tracking-widest text-[11px]">
                  <IconUserCircle size={18} /> 3. Your Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name*"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work Email*"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold outline-none focus:border-teal-5/50 transition-all"
                />
              </div>

              {/* Honeypot - hidden from humans */}
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                value={formData._gotcha}
                onChange={handleChange}
              />

              <TurnstileWidget 
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
              />

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-6 bg-teal-5 text-black font-semibold uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Get in Touch"}{" "}
                  <IconArrowRight
                    className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center font-semibold mt-4">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
                <p className="text-[#8B98AB]/70 text-[10px] text-center font-semibold tracking-widest mt-6 uppercase">
                  We typically respond within 24 hours. No-obligation fixed
                  pricing.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Process Timeline ─────────────────────────────────────────────────────
function ProcessTimeline() {
  const steps = [
    {
      t: "We Call You",
      d: "Within 24 hours. A senior consultant, not a call centre. No script - just solutions.",
      i: IconClock,
    },
    {
      t: "We Visit",
      d: "We see your operation firsthand. Accurate pricing. 100% compliance audit. No surprises.",
      i: IconMap2,
    },
    {
      t: "Workers Arrive",
      d: "Briefed. Compliant. Ready. Deployed within 24-48 hours of initial agreement.",
      i: IconBolt,
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            WHAT HAPPENS NEXT
          </span>
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-8">
            From First Call to Full Shift.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-teal-5/0 via-teal-5/20 to-teal-5/0 z-0" />
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative z-10 text-center flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center text-teal-4 mb-8 shadow-2xl group-hover:border-teal-5/50 transition-all relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-5 text-black font-semibold text-xs flex items-center justify-center">
                  0{i + 1}
                </div>
                <s.i size={40} />
              </div>
              <h4 className="text-white font-semibold text-xl mb-4 leading-tight">
                {s.t}
              </h4>
              <p className="text-[#8B98AB] text-sm leading-relaxed max-w-xs">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Logo Footer ────────────────────────────────────────────────────────
function LogoFooter() {
  const clients = [
    { name: "DPD", src: "/partner-logos/DPD_Bildmotiv_Logo.png" },
    { name: "Wayfair", src: "/partner-logos/wayfair-logo.png" },
    { name: "InPost", src: "/partner-logos/InPost_logo.png" },
    { name: "Vistry Group", src: "/partner-logos/vistry-group.webp" },
    { name: "Poundstretcher", src: "/partner-logos/Poundstretcher_Logo.png" },
    { name: "Howard Tenens", src: "/partner-logos/howard-tenens.png" },
  ];

  const accreditations = [
    { name: "GLAA", src: "/accreditations/glaa.webp" },
    { name: "REC", src: "/accreditations/rec.webp" },
    { name: "Armed Forces", src: "/accreditations/armed-forces.webp" },
    {
      name: "Disability Confident",
      src: "/accreditations/disability-confident-color.png",
    },
    {
      name: "Stronger Together",
      src: "/accreditations/stronger-together.webp",
    },
  ];

  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="text-center mb-16">
          <h3 className="text-white text-3xl font-semibold tracking-tight mb-4">
            Trusted by 190+ Companies
          </h3>
          <p className="text-[#8B98AB] text-sm font-medium uppercase tracking-widest">
            Want to join them?
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-6 flex items-center justify-center w-40 h-24 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-black/10"
              >
                <img
                  src={c.src}
                  alt={c.name}
                  className="max-h-12 max-w-full object-contain saturate-[1.25] transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-white/5 my-16" />

        <div className="text-center">
          <h3 className="text-[#8B98AB]/70 text-[11px] font-semibold uppercase tracking-[0.2em] mb-12">
            Fully Licensed & Compliant
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {accreditations.map((a) => (
              <div
                key={a.name}
                className="bg-white rounded-2xl p-6 flex items-center justify-center w-56 h-24 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-black/10"
              >
                <img
                  src={a.src}
                  alt={a.name}
                  className="h-12 max-w-full object-contain transition-all duration-500"
                  title={a.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function GetStartedClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <GetStartedHero />
      <IntakeForm />
      <ProcessTimeline />
      <LogoFooter />
      <Footer />
    </main>
  );
}
