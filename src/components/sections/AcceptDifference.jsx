"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  IconMapPin,
  IconStar,
  IconNetwork,
  IconMessageCircle,
} from "@tabler/icons-react";

// ─── Content Data ──────────────────────────────────────────────────────────

const features = [
  {
    id: "pulse",
    title: "ACCEPTPULSE",
    heading: "Know who's on site. Instantly.",
    desc: "Real-time attendance tracking with photo verification. See exactly who showed up, when they arrived, and get alerts instantly if someone doesn't.",
    icon: IconMapPin,
  },
  {
    id: "rate",
    title: "ACCEPTRATE",
    heading: "Bad workers don't come back. Ever.",
    desc: "Every worker rated on every shift. Reliability, performance, attitude. Low scorers get removed. You only get workers who've earned their place.",
    icon: IconStar,
  },
  {
    id: "match",
    title: "ACCEPTMATCH",
    heading: "The right worker for the right shift.",
    desc: "Smart matching based on skills, reliability scores, location, and past performance. Not random allocation — intelligent placement with humans making the final call.",
    icon: IconNetwork,
  },
  {
    id: "connect",
    title: "ACCEPTCONNECT",
    heading: "Your workforce, one message away.",
    desc: "Mass communication in seconds. Shift confirmations, updates, emergencies. Everyone connected, everyone informed without the WhatsApp chaos.",
    icon: IconMessageCircle,
  },
];

// ─── Animation Components ──────────────────────────────────────────────────

function PulseAnim() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="relative w-full max-w-lg h-full rounded-[3rem] overflow-hidden flex flex-col pt-8">
        {/* Header Overlay */}
        <div className="px-6 py-4 relative z-10 flex items-center justify-between pointer-events-none">
          <div>
            <div className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">
              Live Radar
            </div>
            <div className="text-xl font-bold text-white">Unit 4 Warehouse</div>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-teal-4 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
        </div>

        {/* Map Radar Workspace */}
        <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
          {/* Radar waves - Fill area */}
          <motion.div
            className="absolute rounded-full border border-teal-5/40"
            animate={{ width: [40, 600], height: [40, 600], opacity: [1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute rounded-full border border-teal-5/20"
            animate={{ width: [40, 600], height: [40, 600], opacity: [1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              ease: "easeOut",
            }}
          />

          {/* Center User Ping */}
          <div className="h-12 w-12 rounded-full bg-teal-5 z-10 flex items-center justify-center shadow-[0_0_40px_rgba(45,212,191,0.6)]">
            <span className="text-xs font-bold text-navy-900 border border-navy-900/20 rounded-full px-1.5 py-0.5">
              JD
            </span>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#1A1F2E]/90 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 flex flex-col gap-1 w-64 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-white font-medium">John Doe</span>
              <span className="text-[9px] font-bold tracking-wider text-teal-4 border border-teal-5/30 bg-teal-5/10 rounded px-1.5 py-0.5">
                VERIFIED
              </span>
            </div>
            <span className="text-white/50 text-xs">Clocked in: 05:45 AM</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function RateAnim() {
  const workers = [
    { name: "Jack T.", role: "Picker", rating: 5 },
    { name: "Sarah L.", role: "Packer", rating: 5 },
    { name: "Mike R.", role: "Forklift", rating: 2, bad: true },
    { name: "Emma B.", role: "Loader", rating: 4 },
    { name: "Chris P.", role: "Picker", rating: 1, bad: true },
    { name: "Anna S.", role: "Assembler", rating: 5 },
    { name: "Tom H.", role: "Picker", rating: 5 },
    { name: "Lisa M.", role: "Packer", rating: 5 },
    { name: "Paul K.", role: "Forklift", rating: 2, bad: true },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(20,26,39,0.5)_0%,transparent_100%)]">
      {/* Feed Container */}
      <div className="relative w-72 h-[350px] overflow-hidden rounded-2xl">
        {/* Fading edges to simulate scroll window */}
        <div className="absolute top-0 left-0 w-full h-12 bg-linear-to-b from-[#0F1320] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-[#0F1320] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex flex-col gap-3 py-10"
          animate={{ y: [0, -650] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {workers.map((w, i) => (
            <motion.div
              key={i}
              className={`bg-[#1A1F2E] border ${
                w.bad ? "border-red-500/20" : "border-white/5"
              } rounded-xl p-3 shadow-lg flex items-center justify-between w-full relative z-10`}
              animate={
                w.bad
                  ? {
                      x: [0, 0, 250, 250],
                      rotate: [0, 0, 20, 20],
                      opacity: [1, 1, 0, 0],
                    }
                  : {}
              }
              transition={
                w.bad
                  ? {
                      duration: 5,
                      times: [0, 0.5, 0.7, 1], // wait, swipe right, stay hidden
                      repeat: Infinity,
                      delay: i * 1.5, // staggered swipes based on position
                    }
                  : {}
              }
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-navy-900 ${
                    w.bad ? "bg-red-400" : "bg-teal-5"
                  }`}
                >
                  {w.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">
                    {w.name}
                  </div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <IconStar
                        key={starIdx}
                        size={12}
                        className={
                          starIdx < w.rating
                            ? w.bad
                              ? "text-red-400"
                              : "text-yellow-4"
                            : "text-white/20"
                        }
                        fill={starIdx < w.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {w.bad && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 font-bold text-[10px] tracking-wider uppercase border border-red-500/30 bg-red-500/10 px-1.5 py-0.5 rounded shadow-lg">
                  Removed
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function MatchAnim() {
  const [candidateIdx, setCandidateIdx] = useState(0);
  const [isMatched, setIsMatched] = useState(false);

  // Target match is "AS" at index 5.
  const candidates = [
    { initials: "JD", score: "67%", strength: "Basic Experience" },
    { initials: "MK", score: "82%", strength: "Good Reliability" },
    { initials: "BP", score: "55%", strength: "Needs Training" },
    { initials: "LW", score: "74%", strength: "Available Today" },
    { initials: "RT", score: "88%", strength: "Fast Picker" },
    { initials: "AS", score: "99%", strength: "Perfect Match!" },
    { initials: "JD", score: "67%", strength: "Basic Experience" },
    { initials: "MK", score: "82%", strength: "Good Reliability" },
  ];

  useEffect(() => {
    if (isMatched) return;

    const id = setInterval(() => {
      setCandidateIdx((prev) => {
        if (prev >= 5) return 5;
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(id);
  }, [isMatched]);

  useEffect(() => {
    if (candidateIdx >= 5 && !isMatched) {
      setIsMatched(true);
    }
  }, [candidateIdx, isMatched]);

  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]">
      <div className="flex flex-col items-center justify-center h-full w-full relative">
        {/* Animated Connecting Line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          overflow="visible"
        >
          {isMatched && (
            <motion.line
              x1="50%"
              y1="40%"
              x2="50%"
              y2="58%"
              stroke="#2DD4BF"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </svg>

        {/* Top: Target Warehouse */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-28 h-28 mb-16 bg-[#1A1F2E] border border-white/10 rounded-2xl flex flex-col items-center justify-center z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <IconNetwork size={32} className="text-white/30 mb-2" />
          <span className="text-[10px] text-white/40 mb-1">REQ:</span>
          <span className="text-xs font-bold text-teal-4 tracking-wider">
            WAREHOUSE
          </span>
        </motion.div>

        {/* Bottom: Horizontal Candidate Carousel */}
        <div className="relative w-full h-32 flex items-center justify-center overflow-hidden z-10 box-border border-white/0">
          {/* Fading Edge Masks */}
          <div className="absolute top-0 left-0 w-24 h-full bg-linear-to-r from-[#0F1320] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full bg-linear-to-l from-[#0F1320] to-transparent z-20 pointer-events-none" />

          {/* Scrolling Track based on candidateIdx */}
          {/* Instead of absolute left-1/2, if we use flex center on the parent, we just translate from 0! */}
          <motion.div
            className="flex items-center gap-4"
            // With justify-center on the parent track, item 0 is visually centered if the track width centers it.
            // But width changes as we scroll if it's not absolute.
            // Let's stick to the reliable absolute positioning logic:
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            animate={{ x: -(candidateIdx * 80 + 32) }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            {candidates.map((c, i) => {
              const isSelected = isMatched && i === 5;

              return (
                <div
                  key={i}
                  className={`flex flex-col items-center shrink-0 w-16 transition-all duration-300 ${
                    isSelected
                      ? "scale-110 opacity-100"
                      : isMatched
                        ? "opacity-30 scale-95 blur-[1px]"
                        : "opacity-80"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 whitespace-nowrap text-[10px] font-bold text-teal-4 tracking-wider uppercase bg-teal-5/10 px-2 py-0.5 rounded border border-teal-5/20 drop-shadow-md z-30"
                    >
                      {c.strength}
                    </motion.div>
                  )}

                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center relative transition-colors duration-300 ${
                      isSelected
                        ? "bg-[#0A0D14] border-2 border-teal-5 shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20"
                        : "bg-[#1A1F2E] border border-white/10 z-10"
                    }`}
                  >
                    <span
                      className={`text-lg font-bold ${isSelected ? "text-white" : "text-white/40"}`}
                    >
                      {c.initials}
                    </span>

                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1.5 -right-1.5 bg-yellow-4 text-navy-900 text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg"
                      >
                        {c.score}
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ConnectAnim() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="w-full h-full max-w-lg flex flex-col justify-center gap-6 relative z-10 px-6 sm:px-12 py-10 overflow-hidden">
        {/* Chat UI Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-white/10 mb-2 shrink-0">
          <div className="w-12 h-12 shrink-0 rounded-full bg-teal-5/20 flex items-center justify-center text-teal-4 font-bold border border-teal-5/30 text-lg">
            A
          </div>
          <div>
            <div className="text-base font-bold text-white">Accept Rec</div>
            <div className="text-[10px] text-teal-4 border border-teal-5/20 bg-teal-5/10 inline-block px-2 py-0.5 rounded mt-1 font-bold tracking-wider uppercase">
              Active Broadcast
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col gap-6 overflow-hidden w-full pb-4 pr-2">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="self-start rounded-2xl rounded-tl-sm bg-[#1A1F2E] border border-white/5 p-4 sm:p-5 max-w-[85%] sm:max-w-[75%] shadow-lg"
          >
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Shift starting at 06:00 tomorrow at Unit 4. Confirm attendance?
            </p>
            <span className="block mt-2 text-[10px] sm:text-xs text-white/30 text-right">
              15:42
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="self-end rounded-2xl rounded-tr-sm bg-teal-5 p-4 sm:p-5 max-w-[85%] sm:max-w-[75%] shadow-[0_5px_20px_rgba(45,212,191,0.2)]"
          >
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-navy-900">
              Confirmed! I will be there 15 mins early.
            </p>
            <span className="block mt-2 text-[10px] sm:text-xs text-navy-900/60 text-right">
              15:43
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            className="self-start rounded-2xl rounded-tl-sm bg-[#1A1F2E] border border-white/5 p-4 sm:p-5 max-w-[85%] sm:max-w-[75%] shadow-lg"
          >
            <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-3">
              Excellent. PPE requirements document attached.
            </p>
            <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 border border-white/10 overflow-hidden">
              <div className="px-2 py-1 shrink-0 bg-red-500/20 text-red-400 rounded text-xs font-bold">
                PDF
              </div>
              <span className="text-xs sm:text-sm text-white/80 truncate">
                PPE_Guidelines_2025.pdf
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export function AcceptDifference() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden font-sans">
      {/* Dynamic Background Glow Based on Active Tab */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full mix-blend-screen opacity-20 blur-[120px] transition-colors duration-1000 bg-teal-5" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full mix-blend-screen opacity-10 blur-[150px] transition-colors duration-1000 bg-purple-6" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        {/* Sequence Heading (Centered) */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            THE ACCEPT DIFFERENCE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Built different. Works better.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            While other agencies use phones and spreadsheets, we built
            technology that actually solves problems. Fast, precise, and
            transparent.
          </p>
        </motion.div>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0A0D14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Column - List of Features */}
          <div className="flex flex-col border-r border-white/5 relative z-20 bg-[#1c2230]">
            {features.map((feat, i) => (
              <div
                key={feat.id}
                onMouseEnter={() => setActiveTab(i)}
                onClick={() => setActiveTab(i)}
                className={`group cursor-pointer transition-all duration-300 relative border-b border-white/5 last:border-b-0 ${
                  activeTab === i
                    ? "bg-[#232938]"
                    : "bg-[#1c2230] hover:bg-[#232938]"
                }`}
              >
                <div className="p-8 md:p-10 flex gap-6">
                  {/* Icon styling matching Industries Bento */}
                  <div
                    className={`mt-1 flex shrink-0 w-12 h-12 items-center justify-center rounded-xl transition-colors duration-300 border ${
                      activeTab === i
                        ? "bg-teal-5 text-white shadow-[0_0_15px_rgba(45,212,191,0.2)] border-teal-4"
                        : "bg-white/5 text-white/50 border-white/10 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    <feat.icon
                      size={24}
                      strokeWidth={1.5}
                      className="transition-colors duration-300"
                    />
                  </div>
                  <div>
                    {/* Restored feature subtitle */}
                    <div
                      className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 transition-colors duration-300 ${
                        activeTab === i
                          ? "text-teal-4"
                          : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {feat.title}
                    </div>

                    <h3
                      className={`text-[22px] font-semibold transition-colors duration-300 ${
                        activeTab === i
                          ? "text-white"
                          : "text-white/70 group-hover:text-white/90"
                      }`}
                    >
                      {feat.heading}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Dynamic Container Area */}
          <div className="hidden lg:flex w-full h-full bg-[#0F1320] flex-col">
            {/* Dynamic Animation Area */}
            <div className="relative flex-1 min-h-[400px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <PulseAnim />
                  </motion.div>
                )}
                {activeTab === 1 && (
                  <motion.div
                    key="rate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <RateAnim />
                  </motion.div>
                )}
                {activeTab === 2 && (
                  <motion.div
                    key="match"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <MatchAnim />
                  </motion.div>
                )}
                {activeTab === 3 && (
                  <motion.div
                    key="connect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <ConnectAnim />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dynamic Description Area */}
            <div className="relative border-t border-white/5 bg-white/[0.02] p-8 md:px-12 md:py-8 min-h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <p className="text-lg leading-relaxed text-white/80">
                    {features[activeTab].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Global CTA button below the whole grid */}
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg">
            Explore All Technology
          </Button>
        </div>
      </div>
    </section>
  );
}
