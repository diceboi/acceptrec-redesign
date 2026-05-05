"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import {
  IconHistory,
  IconTarget,
  IconStar,
  IconMapPin,
  IconClock,
  IconArrowRight,
  IconChartBar,
  IconShieldCheck,
  IconDeviceLaptop,
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
function AboutHero() {
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
          <span className="text-sm font-semibold text-teal-4">About Us</span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A Decade of{" "}
          <span className="text-teal-5 italic">Doing the Work.</span>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Since 2015, we&apos;ve delivered dependable temporary staffing across
          Leicester and the Midlands. No fuss, just results.
        </motion.p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

// ─── Our Story Section ────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="relative w-full bg-navy-700 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-32 items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 tracking-tight italic leading-tight">
              Every placement is personal.
            </h2>

            <div className="space-y-8 text-white/60 text-lg leading-relaxed mb-12">
              <p>
                When we started Accept Recruitment in 2015, we didn&apos;t want
                to be &quot;just another agency.&quot; We wanted to simplify the
                way businesses find reliable people and the way workers find
                meaningful shifts.
              </p>
              <p>
                Starting from a single office in Leicester, we built our
                reputation on a simple promise: honesty. If we can&apos;t fill a
                shift, we&apos;ll tell you early. If we say a worker is briefed
                and ready, they are.
              </p>
              <p className="border-l-4 border-teal-5 pl-8 py-2 italic bg-white/5 rounded-r-2xl text-white/80">
                &quot;In a world of automated portals, we still believe that
                recruitment is a people thing.&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex items-center gap-5 group hover:border-teal-5/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-5 group-hover:scale-110 transition-transform">
                  <IconHistory size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold text-2xl tracking-tighter">
                    2015
                  </div>
                  <div className="text-[#8B98AB]/70 text-[9px] uppercase font-semibold tracking-widest leading-none">
                    Founded Heritage
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex items-center gap-5 group hover:border-teal-5/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 group-hover:scale-110 transition-transform">
                  <AnimatedNumber value="11" />
                </div>
                <div>
                  <div className="text-white font-semibold text-2xl tracking-tighter">
                    Years
                  </div>
                  <div className="text-[#8B98AB]/70 text-[9px] uppercase font-semibold tracking-widest leading-none">
                    Local Growth
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[450px] md:min-h-[650px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:border-teal-5/20 transition-all shadow-2xl"
          >
            <img
              src="/boss.webp"
              alt="Accept Recruitment Headquarters"
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-5 text-black text-[10px] font-semibold uppercase tracking-widest mb-6 shadow-xl">
                <IconMapPin size={14} className="animate-pulse" /> The Midlands
                Hub
              </div>
              <h4 className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                Leicester Headquarters
              </h4>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                Serving the heart of the UK with dependable temporary staffing
                solutions. Always open, always ready.
              </p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center text-white/20 group-hover:text-teal-5 transition-colors">
              <IconTarget size={20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Values Section ──────────────────────────────────────────────────────
function ValuesSection() {
  const values = [
    {
      t: "Dependable",
      d: "We do what we say we'll do. If we commit to filling a shift, it gets filled. Period.",
      i: IconShieldCheck,
    },
    {
      t: "Accountable",
      d: "We take ownership of outcomes. No excuses, no finger-pointing. Your site success is our success.",
      i: IconTarget,
    },
    {
      t: "Experienced",
      d: "Over a decade in the Midlands market. We have the data and the infrastructure to deliver at scale.",
      i: IconStar,
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
            OUR VALUES
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl tracking-tight mb-8">
            What we stand for.
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm flex flex-col h-full"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
                <v.i size={32} />
              </div>
              <h4 className="relative text-white font-semibold text-2xl mb-4 leading-tight">
                {v.t}
              </h4>
              <p className="relative text-[#8B98AB] text-sm leading-relaxed mb-10 flex-grow">
                {v.d}
              </p>
              <div className="relative pt-8 border-t border-white/5">
                <span className="text-teal-5 text-xs font-semibold uppercase tracking-widest italic">
                  Read our charter
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Time of Day Component ────────────────────────────────────────────────
function DayInTheLife() {
  const times = [
    {
      h: "06:00",
      label: "Early Starts",
      stat: "120 Workers Start",
      desc: "Our transport team is live, ensuring everyone reaches site.",
    },
    {
      h: "09:00",
      label: "Peak Operations",
      stat: "400 Workers Active",
      desc: "Site calls complete. Fill rates verified for all regional hubs.",
    },
    {
      h: "12:00",
      label: "Shift Rotations",
      stat: "850 Workers on Shift",
      desc: "Midday rotations and check-ins in progress across Midlands.",
    },
    {
      h: "17:00",
      label: "Daily Result",
      stat: "1,200 Shifts Filled",
      desc: "Total daily activity summary transmitted to clients.",
    },
    {
      h: "22:00",
      label: "Night Shift",
      stat: "200 Night Workers",
      desc: "Ensuring 24/7 continuity for our logistics and food partners.",
    },
    {
      h: "23:59",
      label: "The Payout",
      stat: "£180k Paid Today",
      desc: "Daily payroll processing ensures every worker is paid on time.",
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-navy-700 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-20 items-center">
          <div>
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              REAL-TIME IMPACT
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight italic">
              A Day in the Life.
            </h2>
            <p className="text-[#8B98AB] text-lg leading-relaxed mb-12">
              Unlike national agencies that work 9-to-5, we operate 24/7/365 to
              protect your production lines. This is what our volume looks like
              on a typical Tuesday.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                {times.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`px-6 py-3 rounded-full border text-[11px] font-semibold uppercase tracking-widest transition-all ${active === i ? "bg-teal-5 border-teal-5 text-black" : "bg-white/5 border-white/10 text-[#8B98AB] hover:border-teal-5/50"}`}
                  >
                    {t.h}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 text-teal-5/40 text-[10px] font-semibold uppercase tracking-widest italic">
                <div className="w-8 h-[1px] bg-teal-5/20" /> Click to explore
                activity
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-teal-5/10 blur-[150px] pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-12 md:p-20 relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-24 h-24 rounded-full bg-teal-5/10 border-4 border-teal-5/20 flex items-center justify-center shrink-0">
                    <IconClock className="text-teal-4" size={48} />
                  </div>
                  <div>
                    <div className="text-teal-5 text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">
                      {times[active].h} - {times[active].label}
                    </div>
                    <div className="text-white text-4xl md:text-5xl font-semibold mb-4 tracking-tighter">
                      {times[active].stat}
                    </div>
                    <p className="text-[#8B98AB] text-lg leading-relaxed">
                      {times[active].desc}
                    </p>
                  </div>
                </div>
                <div className="mt-12 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((active + 1) / times.length) * 100}%`,
                    }}
                    className="h-full bg-linear-to-r from-teal-5 to-purple-5"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Coverage Map Section ────────────────────────────────────────────────
function CoverageSection() {
  const zones = [
    { city: "Leicester", workers: "587", growth: "+12%" },
    { city: "Coventry", workers: "332", growth: "+8%" },
    { city: "Tamworth", workers: "238", growth: "+15%" },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-6/15 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-5/5 blur-[120px] pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {zones.map((z, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-8 hover:border-teal-5/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-teal-5/40 text-[10px] font-semibold uppercase tracking-[0.2em] mb-1">
                        {z.city} Hub
                      </div>
                      <div className="text-white text-3xl font-semibold tracking-tighter group-hover:scale-105 transition-transform origin-left">
                        {z.workers}{" "}
                        <span className="text-[#8B98AB]/50 text-xs font-semibold uppercase ml-2 tracking-widest">
                          Workers Active
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-semibold italic">
                      {z.growth} Growth
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 glass-card rounded-2xl p-8 border-teal-5/10 bg-teal-5/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-teal-5 animate-pulse shadow-[0_0_15px_rgba(0,169,157,0.5)]" />
                  <div className="text-white text-sm font-semibold tracking-tight uppercase italic">
                    Active shifts today:{" "}
                    <span className="text-teal-5">1,157</span>
                  </div>
                </div>
                <IconChartBar className="text-teal-5/20" size={24} />
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              MIDLANDS DOMINANCE
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight italic leading-tight">
              Where we work
              <br />
              right now.
            </h2>
            <p className="text-[#8B98AB] text-lg leading-relaxed mb-10">
              We don&apos;t just cover the map; we dominate the local talent
              pool. Our strategic hubs in Leicester, Coventry, and Tamworth
              ensure we can get staff to your site within 60 minutes.
            </p>
            <ul className="space-y-4">
              {[
                "Physical branch presence (not just recruiters at home)",
                "Region-specific pre-vetted candidate pools",
                "Local transport expertise & route planning",
                "On-site support available within hour notice",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-white/80 font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-4 shadow-[0_0_10px_rgba(0,169,157,0.5)]" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Team Teaser ─────────────────────────────────────────────────────────
function TeamTeaser() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
              THE HUMANS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight italic leading-[1.1]">
              Behind every filled shift is a team that cares.
            </h2>
            <p className="text-[#8B98AB] text-lg leading-relaxed mb-12">
              A combined 100+ years of recruitment expertise. No robots. No call
              centres. Just senior consultants who understand the weight of your
              production targets.
            </p>
            <Link href="/team">
              <Button variant="primary" size="lg" className="rounded-2xl">
                Meet the Humans{" "}
                <IconArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {["team-1.webp", "team-2.webp", "Jamie-Ellis.webp", "Magda-Obraczka.webp"].map((img, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-2xl bg-white/5 overflow-hidden border border-white/5 hover:border-teal-5/20 transition-all grayscale opacity-60 hover:grayscale-0 hover:opacity-100 group"
              >
                <img
                  src={`/${img}`}
                  alt="Team Member"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutClient() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <DayInTheLife />
      <CoverageSection />
      <TeamTeaser />
      <section className="relative w-full bg-navy-700 py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Fill Rate", value: "98%" },
              { label: "Attendance", value: "99%" },
              { label: "Invoice Accuracy", value: "100%" },
              { label: "Client Satisfaction", value: "4.8/5" },
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-teal-4 text-4xl md:text-6xl font-semibold mb-2 tracking-tighter group-hover:scale-110 transition-transform">
                  <AnimatedNumber value={s.value} />
                </div>
                <div className="text-[#8B98AB]/70 text-[10px] uppercase font-semibold tracking-[0.3em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        badge="PARTNERSHIP DRIVEN"
        title="Let's build your"
        titleHighlight="workforce together."
        subtitle="Experience the difference of a local agency that acts like a national partner. No fuss, just results."
        primaryButtonText="Get Started"
        secondaryButtonText="See Case Studies"
        primaryButtonHref="/get-started"
        secondaryButtonHref="/case-studies"
      />
      <Footer />
    </main>
  );
}
