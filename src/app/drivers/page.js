"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  IconTruck,
  IconCurrencyPound,
  IconRoute,
  IconTrendingUp,
  IconCalendarCheck,
  IconHeadset,
  IconStar,
  IconArrowRight,
  IconCheck,
  IconChevronRight,
  IconBrandFacebook,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const driverTypes = [
  {
    title: "Van Driver",
    desc: "Multi-drop deliveries, local routes, flexible schedules",
  },
  {
    title: "7.5 Tonne Driver",
    desc: "Larger vehicles, regional distribution, premium rates",
  },
  {
    title: "HGV Class 2",
    desc: "Rigid lorries, long-distance routes, specialist loads",
  },
  {
    title: "HGV Class 1",
    desc: "Articulated lorries, nationwide routes, top tier pay - up to £23/hr on night shifts",
  },
  {
    title: "Multi-Drop Specialist",
    desc: "Fast-paced deliveries, route optimization, customer-facing",
  },
];

const benefits = [
  {
    icon: IconCurrencyPound,
    title: "Premium Rates",
    desc: "We pay what you're worth. £12.50-£23/hour depending on your license and shift. No hidden deductions. Paid on time, every time.",
  },
  {
    icon: IconRoute,
    title: "Flexible Routes",
    desc: "Local, regional, or nationwide - you choose. Prefer the same route? We'll get you familiar runs. Want variety? We've got that too.",
  },
  {
    icon: IconTrendingUp,
    title: "Career Progression",
    desc: "Start as a van driver, move to 7.5T, progress to HGV. We support license upgrades for good drivers. Your career, our investment.",
  },
  {
    icon: IconCalendarCheck,
    title: "Consistent Work",
    desc: "We don't disappear after placing you. Weekly check-ins, consistent shifts, backup plans when needed. You're not just a number.",
  },
  {
    icon: IconHeadset,
    title: "Full Support",
    desc: "Issues with a client? Route problems? Vehicle breakdown? We handle it. 24/7 support line for emergencies.",
  },
  {
    icon: IconStar,
    title: "Respect & Recognition",
    desc: "Good drivers become preferred drivers. Preferred drivers get first call on premium routes. Excellence is rewarded.",
  },
];

const careerPath = [
  {
    title: "Van Driver",
    desc: "Start here: Standard UK license, local routes, flexible hours. Build your reputation and earnings.",
  },
  {
    title: "7.5 Tonne Driver",
    desc: "Progress: Upgrade to C1 license, larger vehicles, better pay. We support training for proven drivers.",
  },
  {
    title: "HGV Class 2",
    desc: "Level up: Category C license, rigid lorries, specialist loads. Premium routes, premium pay.",
  },
  {
    title: "HGV Class 1",
    desc: "Top tier: C+E license, articulated lorries, nationwide routes. Up to £23/hr on night shifts - the pinnacle of driving careers.",
  },
];

function DriversHero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-navy-900 pt-32 pb-24">
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
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[10px] font-semibold uppercase tracking-widest mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-teal-5 animate-pulse" />{" "}
          Driver Placements
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
        >
          Driver
          <br />
          Jobs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-xl md:text-2xl leading-relaxed font-medium max-w-xl mx-auto md:mx-0 mb-12"
        >
          Van, 7.5T, HGV Class 1 &amp; 2 drivers needed across Leicester and the
          Midlands. £12.50-£23/hour with career progression.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <Link
            href="/registration"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3"
          >
            Register as Driver <IconArrowRight size={18} />
          </Link>
          <Link
            href="/jobs"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            <IconTruck size={20} className="text-teal-5" /> View Live Jobs
          </Link>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-navy-700 pb-12">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "150+", label: "Drivers Placed Monthly" },
            { value: "£12.50-£23", label: "Hourly Rate Range" },
            { value: "98%", label: "Fill Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="text-teal-5 text-3xl md:text-4xl font-semibold mb-2 tracking-tighter">
                {s.value}
              </div>
              <div className="text-[#8B98AB]/50 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunitiesSection() {
  return (
    <section className="py-24 bg-navy-700">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">
            OPPORTUNITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            All Driver Types
          </h2>
          <p className="text-[#8B98AB] text-xl font-medium max-w-2xl mx-auto">
            From van drivers to HGV Class 1, we place all types of drivers.
            Premium rates. Consistent work.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {driverTypes.map((dt, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-5/10 border border-teal-5/20 flex items-center justify-center mb-6 group-hover:bg-[#00A99D] group-hover:text-white text-teal-5 transition-all">
                <IconTruck size={24} />
              </div>
              <h4 className="text-white text-xl font-semibold mb-3">
                {dt.title}
              </h4>
              <p className="text-[#8B98AB] text-sm leading-relaxed font-medium mb-6 flex-grow">
                {dt.desc}
              </p>
              <Link
                href="/registration"
                className="text-teal-5 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
              >
                Register for this role <IconChevronRight size={14} />
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={cardVariants}
            className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-10 border-teal-5/20 bg-gradient-to-br from-teal-5/10 to-transparent flex flex-col justify-center"
          >
            <h4 className="text-white text-xl font-semibold mb-3">
              Don&apos;t See Your License Type?
            </h4>
            <p className="text-[#8B98AB] text-sm leading-relaxed font-medium mb-6">
              We place all types of drivers - from specialist vehicles to niche
              certifications. If you have wheels and a license, we&apos;ll find
              you work.
            </p>
            <Link
              href="/contact"
              className="text-teal-5 text-xs font-semibold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
            >
              Contact Us <IconArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-32 bg-[#0d111a]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="text-center mb-20">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">
            BENEFITS
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Your Career Partner on the Road
          </h2>
          <p className="text-[#8B98AB] text-xl font-medium max-w-2xl mx-auto">
            We&apos;re not just an agency. We&apos;re your career partner on the
            road.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass-card group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-teal-5/30 hover:teal-glow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center mb-8 group-hover:bg-[#00A99D] group-hover:text-white text-teal-5 transition-all">
                  <Icon size={32} />
                </div>
                <h4 className="text-white text-2xl font-semibold mb-4 tracking-tight">
                  {b.title}
                </h4>
                <p className="text-[#8B98AB] leading-relaxed font-medium">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CareerPathway() {
  return (
    <section className="py-32 bg-navy-700">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-20">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">
            CAREER PATHWAY
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Start Where You Are
          </h2>
          <p className="text-[#8B98AB] text-xl font-medium">
            Progress as far as you want to go.
          </p>
        </div>
        <div className="space-y-6">
          {careerPath.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 items-start"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-full bg-teal-5 text-black font-semibold text-lg flex items-center justify-center shadow-lg shadow-teal-5/20">
                  {i + 1}
                </div>
                {i < careerPath.length - 1 && (
                  <div className="w-0.5 h-16 bg-white/10 mt-2" />
                )}
              </div>
              <div className="glass-card rounded-2xl p-8 flex-grow hover:border-teal-5/30 transition-all">
                <h4 className="text-white text-xl font-semibold mb-3">
                  {step.title}
                </h4>
                <p className="text-[#8B98AB] leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-10 md:p-12 border-teal-5/20 bg-gradient-to-br from-teal-5/10 to-transparent"
        >
          <h4 className="text-white text-2xl font-semibold mb-4">
            We Support License Upgrades
          </h4>
          <p className="text-[#8B98AB] leading-relaxed font-medium mb-4">
            Proven van drivers who want to progress? We&apos;ll help fund C1, C,
            or C+E training. It&apos;s an investment in our relationship - you
            get better pay, we get better drivers, everyone wins.
          </p>
          <p className="text-[#8B98AB]/50 text-sm font-medium italic">
            Ask us about our driver training program. Conditions apply, but
            we&apos;re serious about helping good drivers level up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function EmployersCTA() {
  return (
    <section className="py-24 bg-[#0d111a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card rounded-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-5/5 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <span className="relative mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00A99D]">
            FOR EMPLOYERS
          </span>
          <h3 className="relative text-white text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
            Need Reliable Drivers?
          </h3>
          <p className="relative text-[#8B98AB] text-lg leading-relaxed font-medium mb-10 max-w-2xl">
            We supply 150+ drivers every month to businesses across the
            Midlands. All licenses. All routes. All checked and compliant.
          </p>
          <div className="relative space-y-4 mb-12">
            {[
              "All license checks verified (C1, C, C+E)",
              "CPC and tachograph compliance handled",
              "24-hour fill guarantee on urgent requirements",
              "Preferred driver programs for long-term contracts",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <IconCheck
                  size={18}
                  className="text-teal-5 shrink-0"
                  strokeWidth={3}
                />
                <span className="text-white/60 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col sm:flex-row gap-4">
            <Link
              href="/employers"
              className="px-10 py-5 rounded-full bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-teal-5/20 flex items-center justify-center gap-3"
            >
              Find Drivers <IconArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DriversPage() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <DriversHero />
      <StatsSection />
      <OpportunitiesSection />
      <BenefitsSection />
      <CareerPathway />
      <EmployersCTA />
      <CtaBanner
        badge="READY TO DRIVE?"
        title="Ready to hit"
        titleHighlight="the road?"
        subtitle="Register today. Get matched with premium routes. Start earning £12.50-£23/hour. Simple as that."
        primaryButtonText="Register as Driver"
        secondaryButtonText="Follow Accept Driving"
        primaryButtonHref="/register"
      />
      <Footer />
    </main>
  );
}
