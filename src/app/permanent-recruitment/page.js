"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { 
  IconUserCheck,
  IconBriefcase,
  IconBuilding,
  IconChartPie,
  IconUsersGroup,
  IconSettings,
  IconTruck,
  IconTool,
  IconShieldCheck,
  IconTarget,
  IconClock,
  IconCheck
} from "@tabler/icons-react";

// ─── Inner Hero Component ──────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[#0d1522] pt-32 pb-16">
      {/* ── Background Blobs ── */}
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
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal-5">
            Permanent Recruitment
          </span>
        </motion.div>

        <motion.h1
          className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[76px] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Gambling on <span className="text-teal-5">Permanent Hires</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/70 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          25 years finding operations talent. 12-week replacement guarantee. Quality shortlists, not quantity.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">Get Quality Shortlists</Button>
          <Button variant="secondary" size="lg">Call Our Team</Button>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0d1522] to-transparent" />
    </section>
  );
}

// ─── Hero Stats (Numbers below Hero) ───────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: "21", label: "Days Average", desc: "Time-to-hire" },
    { value: "12", label: "Week Guarantee", desc: "Free replacement" },
    { value: "25+", label: "Years Experience", desc: "Operations recruitment" },
    { value: "92%", label: "Still There", desc: "After 12 months" },
  ];
  return (
    <section className="relative w-full bg-[#0d1522] py-12 md:py-16 font-sans text-white border-b border-white/5 z-20">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-4xl lg:text-5xl font-bold text-teal-4 mb-2 tracking-tight">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="font-semibold text-white/90 text-lg leading-snug mb-1">{s.label}</div>
            <div className="text-[14px] font-medium text-white/50">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── The Real Cost (Pain Points) Component ───────────────────────────────
function TheRealCost() {
  const painPoints = [
    {
      problem: "The 30K Problem",
      desc: "Salary, training, lost productivity, re-hiring costs. A bad permanent hire bleeds money for months before you cut losses.",
    },
    {
      problem: "Time You Don't Have",
      desc: "Every hour interviewing wrong candidates is an hour not running your operation. Most managers waste 40+ hours per hire.",
    },
    {
      problem: "The Turnover Trap",
      desc: "Quick hires quit quick. When you rush to fill a gap, you're often just kicking the problem down the road.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
            THE REAL COST
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Permanent Recruitment is Risky
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            The sinking feeling when your new hire isn&apos;t working out. Three months in, everyone knows — but you&apos;ve already invested thousands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="bg-[#161b28] border border-white/5 rounded-[24px] p-8 hover:border-white/10 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {point.problem}
              </h3>
              <p className="text-white/60 leading-relaxed text-[15px]">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Operations Focus (Bento Cards) ──────────────────────────────────────
function OperationsFocus() {
  const sectors = [
    {
      title: "Senior Leadership",
      desc: "Site directors, operations directors, general managers.",
      icon: IconTarget,
      isTeal: true, // Make this one pop
      colSpan: "lg:col-span-2"
    },
    {
      title: "Operations & Shift Mgmt",
      desc: "Operations managers, shift managers, production leads.",
      icon: IconSettings,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Commercial",
      desc: "Sales, account management, business development.",
      icon: IconChartPie,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Supervisors & Team Leaders",
      desc: "First-line management, shift supervisors.",
      icon: IconUsersGroup,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Transport & Logistics",
      desc: "Fleet managers, transport planners, logistics coordinators.",
      icon: IconTruck,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Engineering & Technical",
      desc: "Maintenance engineers, technical specialists, quality managers.",
      icon: IconTool,
      colSpan: "lg:col-span-2"
    },
    {
      title: "Business Support & Admin",
      desc: "Office managers, administrators, coordinators.",
      icon: IconBriefcase,
      colSpan: "lg:col-span-1"
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            OPERATIONS FOCUS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            We Know These Roles
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            25 years recruiting for warehouses, factories, and logistics. We know what red flags to avoid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <div key={i} className={`h-full ${s.colSpan || ""}`}>
              <BentoCard
                href="#"
                icon={s.icon}
                title={s.title}
                description={s.desc}
                isTeal={s.isTeal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How We Work Component ────────────────────────────────────────────────
function HowWeWork() {
  const steps = [
    {
      title: "Vacancy Deep-Dive",
      desc: "We learn your operation inside out. Culture, challenges, what success actually looks like.",
    },
    {
      title: "Salary Reality Check",
      desc: "Market data on what it takes to attract the right person. No wishful thinking.",
    },
    {
      title: "Targeted Headhunting",
      desc: "We go after people who aren't job-hunting. The best candidates rarely are.",
    },
    {
      title: "Ruthless Screening",
      desc: "Skills testing, reference checks, culture fit. We only send people we'd hire ourselves.",
    },
    {
      title: "Interview Management",
      desc: "Scheduling, prep, feedback loops. Your time is protected.",
    },
    {
      title: "Offer & Onboarding",
      desc: "Counter-offer defence, negotiation support, smooth first day.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
              HOW WE WORK
            </span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight mb-6">
              We Do The Heavy Lifting
            </h2>
            <p className="text-lg leading-relaxed text-white/50">
              We handle the other 200 applications, the no-shows, and the time-wasters.
            </p>
          </div>
          <div className="bg-[#161b28] border border-white/10 rounded-2xl p-6 shrink-0 text-center flex flex-col justify-center min-w-[200px]">
             <div className="text-[10px] uppercase font-bold text-teal-4 tracking-widest mb-1">Average time-to-hire</div>
             <div className="text-4xl font-black text-white">21 days</div>
             <div className="text-[13px] text-white/50 mt-1 font-medium">Quality, not just speed.</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-[24px] bg-[#121622] border border-white/5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[56px] font-black text-teal-5 mb-4 leading-none opacity-20 hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
              <h3 className="text-[19px] font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Risk Eliminated (Green Guarantee Bar) ───────────────────────────────
function GuaranteeBar() {
  const points = [
    { title: "Free Replacement", sub: "Doesn't work? We start again at no cost." },
    { title: "Proactive Check-ins", sub: "Call at 2, 6, and 10 weeks to catch issues." },
    { title: "Onboarding Support", sub: "Help during probation to ensure success." },
    { title: "92% Success Rate", sub: "Our hires stick because we screen properly." },
  ];
  return (
    <section className="w-full bg-[#0FA393] py-24 font-sans text-white border-y border-[#0a7a6e]">
      <div className="mx-auto max-w-[1140px] px-6">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <IconShieldCheck size={56} className="mx-auto mb-6 text-white/90" stroke={1.5} />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              12-Week Replacement Guarantee
            </h2>
            <p className="text-xl font-medium opacity-90 leading-relaxed">
              If your hire doesn&apos;t work out in the first 12 weeks, we find you a replacement. Free. No awkward conversations, no rebate negotiations. Just another great candidate.
            </p>
         </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {points.map((p, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center hover:bg-white/15 transition-colors">
              <div className="font-bold text-xl leading-snug mb-2">{p.title}</div>
              <div className="text-[15px] font-medium opacity-80">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Your Choice (Service Models) ──────────────────────────────────────────
function YourChoice() {
  const models = [
    {
      title: "Contingency",
      desc: "No placement, no fee. We only get paid when you get the right person.",
      features: ["Pay on success", "Standard 12-week guarantee", "Access to active network"]
    },
    {
      title: "Retained Search",
      desc: "For critical hires. Dedicated focus, guaranteed shortlists, faster results.",
      features: ["Dedicated headhunter", "Priority timeline", "Market mapping report"]
    },
    {
      title: "Volume Hiring",
      desc: "Building a team? Discounted rates, dedicated consultant, faster turnaround.",
      features: ["Scaled rate cards", "Project managed delivery", "On-site assessment days"]
    }
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            YOUR CHOICE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Pay When It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <div key={i} className="bg-[#161b28] border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col h-full hover:border-white/10 transition-colors shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">{m.title}</h3>
              <p className="text-white/60 leading-relaxed text-[15px] mb-8 flex-1">{m.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {m.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <IconCheck size={18} className="text-teal-5 mt-0.5 shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function PermanentRecruitment() {
  return (
    <main className="bg-[#0d1522] min-h-screen">
      <Navbar />
      
      <InnerHero />

      <HeroStats />

      <TheRealCost />
      
      <OperationsFocus />

      <HowWeWork />

      <GuaranteeBar />

      <YourChoice />

      <CtaBanner
        badge="GET STARTED TODAY"
        title="Stop Wasting Time on"
        titleHighlight="Wrong Candidates"
        subtitle="25 years of operations recruitment. 12-week replacement guarantee. We'll show you what's possible."
        primaryButtonText="Get Quality Shortlists"
        secondaryButtonText="Call Our Team"
      />

      <Footer />
    </main>
  );
}
