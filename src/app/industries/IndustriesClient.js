"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
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
  IconArrowRight,
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
          <span className="text-sm font-semibold text-teal-4">Industries</span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Know <span className="text-teal-5">Your Sector</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Not generic staffing. Specialist knowledge in logistics, manufacturing, e-commerce, and food production.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button variant="primary" size="lg" href="/get-started">Find Staff Now</Button>
          <Button variant="secondary" size="lg" href="/case-studies">View Case Studies</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">WAREHOUSE STAFFING</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-6">
              Peak Season Chaos?<br />We&apos;ve Got You.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-6">
              That moment when Black Friday orders triple and half your agency workers don&apos;t show? We&apos;ve seen it. That&apos;s exactly why we built Accept differently.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              99% attendance rate — because a warehouse can&apos;t pick orders with empty stations. Our people turn up, trained, with the right PPE, ready to work.
            </p>
            <Link href="/warehouse-staffing" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              Warehouse Staffing <IconArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative text-white font-semibold text-[22px] mb-4">The warehouse pain points we solve:</h3>
              <ul className="relative space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck size={16} className="text-teal-5 mt-1 shrink-0" />
                    <span className="text-[15px] leading-relaxed text-[#8B98AB]">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative text-teal-5 text-[10px] font-bold tracking-widest uppercase mb-2 block">Case Study: InPost Peak Season</span>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">
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
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 order-2 lg:order-1">
            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative text-white font-semibold text-[22px] mb-4">The manufacturing reality we understand:</h3>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">
                That&apos;s why we&apos;ve built relationships with production operatives, machine operators, and quality inspectors who actually want to work — not just clock in.
              </p>
            </motion.div>

            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative text-teal-5 text-[10px] font-bold tracking-widest uppercase mb-2 block">Case Study: Vistry Group</span>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">
                Supporting one of the UK&apos;s largest housebuilders with reliable labour across multiple sites — scaling up for project deadlines, maintaining quality standards.
              </p>
            </motion.div>
          </div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">INDUSTRIAL STAFFING</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-6">
              Production Lines Wait<br />For No One.
            </h2>
            <p className="text-lg leading-relaxed text-white/60 mb-10">
              Manufacturing is unforgiving. An empty station at 6am means targets missed, overtime costs, and frustrated supervisors. We get it.
            </p>
            <Link href="/industrial-staffing" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              Industrial Staffing <IconArrowRight size={18} />
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">FOOD PRODUCTION</span>
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
                <span key={i} className="px-3 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-sm font-medium">{r}</span>
              ))}
            </div>
            <Link href="/temporary-staffing" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              Food Production Staffing <IconArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-5">
            {complianceItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-5 mb-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                    <item.icon size={28} stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[22px] leading-tight mb-1">{item.title}</h3>
                  </div>
                </div>
                <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{item.desc}</p>
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
    <section className="relative w-full bg-navy-700 py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 space-y-5">
            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-teal-5/30"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="relative text-white font-semibold text-[22px] mb-4">Why our drivers are different:</h3>
              <ul className="relative space-y-4">
                {points.map((p, i) => (
                  <li key={i} className="text-[15px] leading-relaxed text-[#8B98AB] border-b border-white/5 pb-4 last:border-0 last:pb-0">{p}</li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="glass-card group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative text-3xl font-semibold text-white mb-1">{s.value}</div>
                  <div className="relative text-[13px] font-semibold uppercase tracking-wider text-teal-5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <IconBolt size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Emergency Cover</p>
                  <p className="text-[15px] leading-relaxed text-[#8B98AB]">Driver no-show at 5am? Call us. We&apos;ve got backup drivers ready to go — often within hours, not days.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">DRIVING RECRUITMENT</span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight leading-tight mb-10">
              Driver Shortage?<br />Not Your Problem.
            </h2>
            <Link href="/driving-recruitment" className="text-teal-5 font-bold hover:gap-3 transition-all inline-flex items-center gap-2">
              Driving Recruitment <IconArrowRight size={18} />
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
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">THE ACCEPT DIFFERENCE</span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
             Why Midlands Businesses<br />Choose Accept
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start gap-5 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#00A99D] text-white">
                  <r.icon size={28} stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[22px] leading-tight">{r.title}</h3>
                </div>
              </div>
              <p className="relative text-[15px] leading-relaxed text-[#8B98AB]">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────
export default function IndustriesClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
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
        primaryButtonHref="/get-started"
        secondaryButtonHref="/contact"
      />

      <Footer />
    </main>
  );
}
