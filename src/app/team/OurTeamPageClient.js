"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import {
  IconBolt,
  IconQuote,
  IconHeart,
  IconMapPin,
  IconPhone,
  IconAward,
  IconStarFilled,
  IconArrowRight,
} from "@tabler/icons-react";

// Data is now fetched from Supabase and passed via initialMembers prop

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// ─── Team Card ──────────────────────────────────────────────────────────
function TeamCard({ member }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative glass-card rounded-2xl p-8 overflow-hidden hover:border-teal-5/30 transition-all duration-500 hover:teal-glow-sm"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 group/photo">
        <Image
          src={member.image_url || member.image}
          alt={member.name}
          fill
          className={`object-cover transition-all duration-500 group-hover/photo:scale-110 ${member.disney_image_url || member.disneyImage ? "group-hover/photo:opacity-0" : ""}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {(member.disney_image_url || member.disneyImage) && (
          <Image
            src={member.disney_image_url || member.disneyImage}
            alt={`${member.name} Disney`}
            fill
            className="object-cover transition-all duration-500 scale-110 opacity-0 group-hover/photo:opacity-100 group-hover/photo:scale-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 z-10">
          <IconMapPin size={14} className="text-teal-5" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white">
            {member.location}
          </span>
        </div>
      </div>
      <div className="relative mb-6">
        <h3 className="text-white text-2xl font-semibold mb-1 group-hover:text-teal-5 transition-colors">
          {member.name}
        </h3>
        <div className="text-teal-4 text-xs font-semibold uppercase tracking-widest mb-4">
          {member.role}
        </div>
        <p className="text-[#8B98AB] text-sm italic leading-relaxed font-medium">
          &quot;{member.quote}&quot;
        </p>
      </div>
      <div className="relative space-y-6 pt-6 border-t border-white/5">
        <div>
          <div className="flex items-center gap-2 text-teal-5 mb-2">
            <IconBolt size={14} className="shrink-0" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Superpower
            </span>
          </div>
          <p className="text-white/80 text-sm font-semibold leading-snug">
            {member.superpower}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-teal-5 mb-2">
            <IconQuote size={14} className="rotate-180 shrink-0" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Motto
            </span>
          </div>
          <p className="text-[#8B98AB] text-sm italic font-medium leading-snug">
            &quot;{member.motto}&quot;
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-teal-5 mb-3">
            <IconHeart size={14} className="shrink-0" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Loves
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {member.loves.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-[#8B98AB] group-hover:border-teal-5/20 group-hover:text-teal-4 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Culture Card ───────────────────────────────────────────────────────
function CultureCard({ icon, title, text }) {
  return (
    <div className="glass-card group relative overflow-hidden rounded-2xl p-10 md:p-12 hover:border-teal-5/30 transition-all hover:teal-glow-sm">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative w-16 h-16 rounded-2xl bg-teal-5/10 flex items-center justify-center text-teal-4 mb-8 group-hover:bg-[#00A99D] group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="relative text-white text-2xl font-semibold mb-6 tracking-tight">
        {title}
      </h3>
      <p className="relative text-[#8B98AB] text-lg leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────
function TeamHero() {
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
          <span className="text-sm font-semibold text-teal-4">The Squad</span>
        </motion.div>
        <motion.h1
          className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet the Humans
          <br />
          Behind the Headsets
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We&apos;re not just recruiters. We&apos;re people who actually give a
          shift about doing this right. Hover over our photos to see our Disney
          alter-egos!
        </motion.p>
        <motion.p
          className="text-[#8B98AB] text-lg max-w-xl mx-auto leading-relaxed font-medium mb-12 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No voicemail hell. No &quot;your call is important to us&quot;
          nonsense. Just real people who know your name and actually care about
          solving your problem.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#8B98AB] text-sm font-semibold uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <IconStarFilled size={16} className="text-teal-5" />
            <span>Real Humans</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="flex items-center gap-2">
            <IconPhone size={16} className="text-teal-5" />
            <span>Direct Access</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="flex items-center gap-2">
            <IconAward size={16} className="text-teal-5" />
            <span>Expert Matching</span>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-700 to-transparent" />
    </section>
  );
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ─── Team Grid ──────────────────────────────────────────────────────────
function TeamGridSection({ members }) {
  return (
    <section className="relative w-full bg-navy-700 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {members.map((member, i) => (
            <TeamCard key={member.id || i} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Culture Section ────────────────────────────────────────────────────
function CultureSection() {
  const culture = [
    {
      icon: <IconAward size={32} />,
      title: "No Suits Required",
      text: "We're professional where it counts (filling shifts, compliance, paying people). We're casual everywhere else. Jeans? Fine. Trainers? Great. Personality? Essential.",
    },
    {
      icon: <IconPhone size={32} />,
      title: "We Actually Answer",
      text: 'No automated phone trees. No "press 1 for this, 2 for that." Real humans pick up the phone. Wild concept, we know. Direct dial, direct access.',
    },
    {
      icon: <IconHeart size={32} />,
      title: "Give Back Mode",
      text: "Every single person here participates in our Rainbows Hospice partnership. It's not a \"company thing\" - it's an everyone thing. We care about our community.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-32 overflow-hidden">
      <div className="pointer-events-none absolute -right-64 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal-5/10 blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            CULTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            What It&apos;s Actually Like
            <br />
            to Work Here
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {culture.map((c, i) => (
            <CultureCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trusted Section ────────────────────────────────────────────────────
function TrustedSection() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-teal-5/5 blur-[120px] pointer-events-none" />
          <h2 className="relative text-white text-3xl font-semibold mb-4 tracking-tight">
            Trusted by 1500+ People
          </h2>
          <p className="relative text-[#8B98AB] text-lg mb-10 font-medium tracking-tight">
            See what our clients and candidates say about us
          </p>
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-4xl font-semibold text-white">
              <span>4.8</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconStarFilled
                    key={i}
                    size={24}
                    className="text-[#FFD700]"
                  />
                ))}
              </div>
            </div>
            <a
              href="/join-our-team"
              className="inline-flex items-center gap-2 text-teal-4 font-semibold tracking-widest text-sm uppercase hover:text-white transition-colors border-b border-teal-5/30 pb-1"
            >
              Read our 1500+ Google Reviews <IconArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────
export default function OurTeamPageClient({ initialMembers = [] }) {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <TeamHero />
      <TeamGridSection members={initialMembers} />
      <CultureSection />
      <TrustedSection />
      <CtaBanner
        badge="JOIN US"
        title="Join the"
        titleHighlight="Squad."
        subtitle="We're always looking for good humans who want to do recruitment the right way. If you're tired of corporate nonsense, let's talk."
        primaryButtonText="Work With Us"
        secondaryButtonText="Contact HR"
        primaryButtonHref="/join-our-team"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </main>
  );
}
