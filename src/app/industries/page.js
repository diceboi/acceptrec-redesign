"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import {
  IconPackage,
  IconTool,
  IconToolsKitchen2,
  IconTruck,
  IconCheck,
  IconBolt,
  IconUsers,
  IconShieldCheck,
  IconClock,
  IconBuildingFactory,
  IconChartLine,
  IconPhone,
} from "@tabler/icons-react";

// ─── Hero ──────────────────────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{ height: "60%", width: "50%", left: "5%", top: "10%", background: "var(--color-teal-5)", opacity: 0.1, filter: "blur(100px)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ height: "50%", width: "45%", right: "5%", top: "20%", background: "var(--color-purple-5)", opacity: 0.1, filter: "blur(100px)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">Industries</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Know <span className="text-teal-5">Your Sector</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Not generic staffing. Specialist knowledge in logistics, manufacturing, e-commerce, and food production.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg">Find Staff Now</Button>
          <Button variant="secondary" size="lg">View Case Studies</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Warehouse ─────────────────────────────────────────────────────────────
function WarehouseSection() {
  const points = [
    "99% attendance rate — a warehouse can't pick orders with empty stations",
    "Every temp gets proper safety induction. No shortcuts. Your compliance record stays clean.",
    "We send people who understand defect rates, QC checks, and production targets — not just bodies.",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">WAREHOUSE STAFFING</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-6">
              Peak Season Chaos?<br />We&apos;ve Got You.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-6">
              That moment when Black Friday orders triple and half your agency workers don&apos;t show? We&apos;ve seen it. That&apos;s exactly why we built Accept differently.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              99% attendance rate — because a warehouse can&apos;t pick orders with empty stations. Our people turn up, trained, with the right PPE, ready to work.
            </p>
            <Link href="/warehouse-staffing">
              <Button variant="secondary" size="md">Warehouse Staffing →</Button>
            </Link>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8 hover:border-teal-5/20 transition-colors"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">The warehouse pain points we solve:</h3>
              <ul className="space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck size={18} className="text-teal-5 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-[15px] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-teal-5/8 border border-teal-5/20 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-teal-5 mb-2">Case Study: InPost Peak Season</p>
              <p className="text-white/80 text-[15px] leading-relaxed">
                50 trained operatives deployed in 3 weeks. 99% fill rate maintained through the busiest period. Zero disruption to their parcel locker network.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Manufacturing ─────────────────────────────────────────────────────────
function ManufacturingSection() {
  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8 hover:border-teal-5/20 transition-colors"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">The manufacturing reality we understand:</h3>
              <p className="text-white/70 text-[15px] leading-relaxed">
                That&apos;s why we&apos;ve built relationships with production operatives, machine operators, and quality inspectors who actually want to work — not just clock in.
              </p>
            </motion.div>

            <motion.div
              className="bg-teal-5/8 border border-teal-5/20 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-teal-5 mb-2">Case Study: Vistry Group</p>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Supporting one of the UK&apos;s largest housebuilders with reliable labour across multiple sites — scaling up for project deadlines, maintaining quality standards.
              </p>
            </motion.div>
          </div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">INDUSTRIAL STAFFING</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-6">
              Production Lines Wait<br />For No One.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              Manufacturing is unforgiving. An empty station at 6am means targets missed, overtime costs, and frustrated supervisors. We get it.
            </p>
            <Link href="/industrial-staffing">
              <Button variant="secondary" size="md">Industrial Staffing →</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Food Production ───────────────────────────────────────────────────────
function FoodProductionSection() {
  const complianceItems = [
    { title: "100% Compliance Record", desc: "Zero failed audits from temps we've placed", icon: IconShieldCheck },
    { title: "Documentation Ready", desc: "All training records and certifications on file", icon: IconCheck },
  ];

  const roles = [
    "Food production staff",
    "Packers & line operatives",
    "Hygiene-certified workers",
    "Allergen-trained teams",
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">FOOD PRODUCTION</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-6">
              Compliance-Ready.<br />Audit-Proof.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-4">
              Food production doesn&apos;t mess around with compliance. Neither do we. Every temp holds current Level 2 Food Safety certification, understands allergen protocols, and arrives with proper PPE.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              Your audit records stay clean. Your lines stay staffed. Your products stay safe.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {roles.map((r, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium">{r}</span>
              ))}
            </div>
            <Link href="/temporary-staffing">
              <Button variant="secondary" size="md">Food Production Staffing →</Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {complianceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <BentoCard icon={item.icon} title={item.title} description={item.desc} href="#" noArrow />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Driving ───────────────────────────────────────────────────────────────
function DrivingSection() {
  const points = [
    "Every transport manager knows the feeling: it's 5am, a driver's called in sick, and you've got routes that won't deliver themselves.",
    "We've placed 150+ drivers monthly across the Midlands. Van to artic. Multi-drop to trunking. When you need a driver, you need them now — and they need to be good.",
  ];

  const stats = [
    { value: "150+", label: "Drivers Monthly" },
    { value: "99%", label: "Reliability" },
  ];

  return (
    <section className="relative w-full bg-[#0d1522] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1 space-y-6">
            <motion.div
              className="bg-[#161b28] border border-white/5 rounded-3xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Why our drivers are different:</h3>
              <ul className="space-y-4">
                {points.map((p, i) => (
                  <li key={i} className="text-white/70 text-[15px] leading-relaxed border-b border-white/5 pb-4 last:border-0 last:pb-0">{p}</li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-[#161b28] border border-white/5 rounded-3xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-teal-4 mb-1">{s.value}</div>
                  <div className="text-white/50 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-teal-5/8 border border-teal-5/20 rounded-3xl p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconBolt size={22} className="text-teal-5 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold mb-1">Emergency Cover</p>
                <p className="text-white/60 text-sm">Driver no-show at 5am? Call us. We&apos;ve got backup drivers ready to go — often within hours, not days.</p>
              </div>
            </motion.div>
          </div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">DRIVING RECRUITMENT</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-10">
              Driver Shortage?<br />Not Your Problem.
            </h2>
            <Link href="/driving-recruitment">
              <Button variant="secondary" size="md">Driving Recruitment →</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Accept ─────────────────────────────────────────────────────
function WhyAccept() {
  const reasons = [
    { title: "Full Spectrum Coverage", desc: "We don't do \"generalist staffing.\" We specialise in warehouse, industrial, and driving — and we do it better than anyone in the Midlands.", icon: IconBuildingFactory },
    { title: "Speed That Matters", desc: "Peak season surge? Driver no-show? We move fast because we understand that empty shifts cost you money — and customers.", icon: IconBolt },
    { title: "99% Attendance", desc: "Not a marketing number — a real stat. We achieve it through better candidate selection, better relationships, and actually caring about retention.", icon: IconChartLine },
    { title: "Sector Specialists", desc: "Since 2015, we've been the staffing partner that actually understands operations. Not just recruitment — partnership.", icon: IconUsers },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Why Midlands Businesses<br />Choose Accept
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="h-full">
              <BentoCard icon={r.icon} title={r.title} description={r.desc} href="#" noArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function Industries() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />

      <InnerHero />
      <WarehouseSection />
      <ManufacturingSection />
      <FoodProductionSection />
      <DrivingSection />
      <WhyAccept />

      <CtaBanner
        badge="GET STARTED"
        title="Let's Talk About"
        titleHighlight="Your Sector"
        subtitle="Whether it's warehouse, manufacturing, or driving — tell us what you're dealing with. No generic pitch, just a real conversation about how we can help."
        primaryButtonText="Find Staff Now"
        secondaryButtonText="Prefer to talk now?"
      />

      <Footer />
    </main>
  );
}
