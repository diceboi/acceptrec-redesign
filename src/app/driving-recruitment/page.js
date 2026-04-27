"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import {
  IconCheck,
  IconTruck,
  IconTruckDelivery,
  IconCar,
  IconForklift,
  IconAlertTriangle,
  IconId,
  IconClock,
  IconCertificate,
  IconShieldCheck,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
           className="absolute rounded-full"
           style={{ height: "70%", width: "55%", left: "-10%", top: "-10%", background: "var(--color-teal-5)", opacity: 0.13, filter: "blur(90px)" }}
           animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
           className="absolute rounded-full"
           style={{ height: "60%", width: "55%", right: "-10%", top: "-5%", background: "var(--color-purple-5)", opacity: 0.18, filter: "blur(100px)" }}
           animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 100, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
          <span className="text-sm font-semibold text-teal-4">Driving Recruitment</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Drivers Who Actually <span className="text-teal-5">Deliver</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          HGV Class 1 &amp; 2, van drivers, multi-drop. Every licence verified. Every driver vetted.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Get Drivers Now</Button>
          <Button variant="secondary" size="lg" href="/contact">Call Us Now</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}

// ─── Problem / Solution ────────────────────────────────────────────────────
function ProblemSolution() {
  const fixes = [
    "Every licence verified with DVLA before we send them",
    "Tacho card checks and driving hours compliance",
    "Skill-matched: multidrop experience, specific vehicle types",
    "Driver performance tracking — we know who's good",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">THE PAIN POINT</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              You suffer from the driver shortage.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-4">
              Loads sitting in the yard. Customers waiting. Your regular drivers are maxed out on hours. And when you call agencies, they send you drivers who can&apos;t reverse an artic or have dodgy tachograph records.
            </p>
            <p className="text-lg leading-relaxed text-teal-5 font-semibold">
              We know. We&apos;ve heard it all before.
            </p>
          </motion.div>

          <motion.div
            className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative text-white font-semibold text-[22px] mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                <IconCheck size={22} />
              </div>
              We give you drivers you can trust.
            </h3>
            <ul className="relative space-y-4">
              {fixes.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <IconCheck size={16} className="text-teal-5 mt-1 shrink-0" />
                  <span className="text-[15px] leading-relaxed text-[#8B98AB]">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Licence Categories ───────────────────────────────────────────────────
function LicenceCategories() {
  const licences = [
    { title: "HGV Class 1 (C+E)", desc: "Artic drivers, tramping, trunking, distribution", icon: IconTruck },
    { title: "HGV Class 2 (C)", desc: "Rigid drivers, multi-drop, local delivery", icon: IconTruck },
    { title: "7.5 Tonne", desc: "Medium goods vehicles, urban delivery", icon: IconTruckDelivery },
    { title: "Van Drivers", desc: "Large van, multi-drop, parcel delivery", icon: IconCar },
    { title: "Forklift + Driving", desc: "Combined roles, driver/warehouse hybrid", icon: IconForklift },
    { title: "ADR Drivers", desc: "Hazardous goods, tanker, specialist loads", icon: IconAlertTriangle },
  ];

  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">WHAT WE SUPPLY</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Licence Categories
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            All licences verified, all drivers vetted
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {licences.map((l, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <l.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[22px] leading-tight mb-1">{l.title}</h3>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{l.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Compliance ───────────────────────────────────────────────────────────
function Compliance() {
  const items = [
    { title: "DVLA Verified", desc: "Every licence checked before assignment", icon: IconId },
    { title: "Tacho Compliant", desc: "Driving hours monitored and tracked", icon: IconClock },
    { title: "CPC Current", desc: "Driver qualification cards verified", icon: IconCertificate },
    { title: "Right to Work", desc: "Full documentation on file", icon: IconShieldCheck },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">PEACE OF MIND</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Compliance You Can Count On
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Because your O-licence depends on it
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A99D] text-white mx-auto mb-6 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-shadow">
                  <item.icon size={28} stroke={1.5} />
                </div>
               <h3 className="relative text-white font-semibold text-[22px] mb-2">{item.title}</h3>
               <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function DrivingRecruitment() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />

      <InnerHero />
      <ProblemSolution />
      <LicenceCategories />
      <Compliance />

      <CtaBanner
        badge="GET STARTED"
        title="Need"
        titleHighlight="drivers?"
        subtitle="Tell us what you're moving and when. We'll get you covered."
        primaryButtonText="Get Drivers Now"
        secondaryButtonText="Call Us Now"
      />

      <Footer />
    </main>
  );
}
