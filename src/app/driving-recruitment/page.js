"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import {
  IconCheck,
  IconTruck,
  IconTruckDelivery,
  IconCar,
  IconPackage,
  IconAlertTriangle,
  IconForklift,
  IconId,
  IconClock,
  IconCertificate,
  IconShieldCheck,
} from "@tabler/icons-react";

// ─── Inner Hero ────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "60%",
            width: "50%",
            left: "5%",
            top: "10%",
            background: "var(--color-teal-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            height: "50%",
            width: "45%",
            right: "5%",
            top: "20%",
            background: "var(--color-purple-5)",
            opacity: 0.1,
            filter: "blur(100px)",
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">
            Driving Recruitment
          </span>
        </motion.div>

        <motion.h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Drivers Who Actually <span className="text-teal-5">Deliver</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          HGV Class 1 &amp; 2, van drivers, multi-drop. Every licence verified. Every driver vetted.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">Get Drivers Now</Button>
          <Button variant="secondary" size="lg">Call Us Now</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Problem & Solution ────────────────────────────────────────────────────
function ProblemSolution() {
  const fixes = [
    "Every licence verified with DVLA before we send them",
    "Tacho card checks and driving hours compliance",
    "Skill-matched: multidrop experience, specific vehicle types",
    "Driver performance tracking — we know who's good",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
              THE PAIN POINT
            </span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-8">
              You suffer from the driver shortage.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-4">
              Loads sitting in the yard. Customers waiting. Your regular drivers are maxed out on hours. And when you call agencies, they send you drivers who can&apos;t reverse an artic or have dodgy tachograph records.
            </p>
            <p className="text-lg leading-relaxed text-teal-4 font-semibold">
              We know. We&apos;ve heard it all before.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#161b28] border border-white/5 rounded-3xl p-10 md:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-teal-4 mb-8">We give you drivers you can trust.</h3>
            <ul className="space-y-6">
              {fixes.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-teal-5/10 rounded-full p-1.5 shrink-0 mt-0.5">
                    <IconCheck size={18} className="text-teal-4" />
                  </div>
                  <span className="text-white/80 text-lg leading-snug">{f}</span>
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
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            WHAT WE SUPPLY
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Licence Categories
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            All licences verified, all drivers vetted
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licences.map((l, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={l.icon} title={l.title} description={l.desc} href="#" noArrow />
            </div>
          ))}
        </div>
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            PEACE OF MIND
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-4">
            Compliance You Can Count On
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/50">
            Because your O-licence depends on it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={item.icon} title={item.title} description={item.desc} href="#" noArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function DrivingRecruitment() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
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
