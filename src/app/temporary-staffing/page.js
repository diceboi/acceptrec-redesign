"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, Environment, ContactShadows, Bounds } from "@react-three/drei";
import * as THREE from "three";
import { Navbar } from "@/components/sections/Navbar";
import { Industries } from "@/components/sections/Industries";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import { IconStar, IconTrendingUp, IconTrophy, IconScan } from "@tabler/icons-react";

// ─── Animated Staffing Screen ────────────────────────────────────────────
function StaffingScreen() {
  return (
    <div
      style={{
        width: 200,
        height: 433.33,
        background: "#ffffff",
        borderRadius: 30,
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
        color: "#0d1522",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        pointerEvents: "none",
        padding: "16px",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          opacity: 0.8,
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        <span>09:41</span>
        <span>▶▶ ⊡</span>
      </div>

      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", height: "100%" }}>
        <h3 style={{ margin: "4px 0", fontSize: 13, fontWeight: "bold" }}>Your Performance</h3>
        <p style={{ margin: "0 0 16px", fontSize: 9, color: "#64748B", fontWeight: 500 }}>This week • 5 shifts</p>
        
        <div style={{ fontSize: 56, fontWeight: "bold", lineHeight: 1, marginBottom: 4 }}>4.8</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 4 }}>
           {[1,2,3,4,5].map(i => <IconStar key={i} size={14} style={{ fill: "#FACC15", color: "#FACC15" }} />)}
        </div>
        <p style={{ margin: "0 0 20px", fontSize: 9, color: "#64748B", fontWeight: 600 }}>Top 15% of workers</p>

        <div style={{ background: "#effefb", borderRadius: 12, padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 -4px 20px" }}>
           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
             <div style={{ background: "#2dd4bf", borderRadius: 6, padding: 4 }}>
               <IconStar size={10} strokeWidth={3} style={{ color: "white", fill: "white" }} />
             </div>
             <span style={{ fontWeight: "bold", fontSize: 12 }}>Points</span>
           </div>
           <span style={{ color: "#0f766e", fontWeight: "bold", fontSize: 16 }}>2,450</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid #f1f5f9", paddingTop: 12, fontSize: 10, margin: "auto -4px 0" }}>
           <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B", fontWeight: 500 }}>Punctuality</span>
              <span style={{ color: "#0f766e", fontWeight: "bold" }}>100%</span>
           </div>
           <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B", fontWeight: 500 }}>Performance</span>
              <span style={{ color: "#0f766e", fontWeight: "bold" }}>Excellent</span>
           </div>
        </div>
      </div>
    </div>
  );
}

function StaffingPhoneModel({ mouseRef }) {
  const { scene } = useGLTF("/models/phone.glb");
  const groupRef = useRef();

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const { x, y } = mouseRef.current;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.35,
      0.06,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.22,
      0.06,
    );
  });

  return (
    <group ref={groupRef}>
      <group>
        <primitive object={scene} />
        <Html
          position={[-0.49, 0.45, 0.4]}
          transform
          distanceFactor={0}
          scale={1.33}
          style={{ pointerEvents: "none" }}
        >
          <StaffingScreen />
        </Html>
      </group>
    </group>
  );
}

function StaffingPhoneScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    const onLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <spotLight position={[5, 10, 5]} intensity={1.2} castShadow penumbra={1} />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color="#2dd4bf" />
      <pointLight position={[4, 4, -2]} intensity={0.3} color="#7c3aed" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <StaffingPhoneModel mouseRef={mouseRef} />
        </Bounds>
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={8} blur={2.5} far={4} />
      </Suspense>
    </Canvas>
  );
}

// ─── Inner Hero Component ──────────────────────────────────────────────────
function InnerHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-navy-900 pt-20">
      {/* ── Background Blobs ── */}
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

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-0">
        {/* Left: Text */}
        <div className="flex flex-col items-start flex-1 text-left justify-center lg:justify-start">
          <motion.h1 
            className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Better <span className="text-teal-5">Workers.</span>
          </motion.h1>

          <motion.p 
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Not just temps who show up. Temps who perform.
          </motion.p>

          <motion.p 
            className="text-lg font-bold leading-relaxed text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Rated every shift. Coached to improve. Rewarded for results.
          </motion.p>
          
          {/* Pills */}
          <motion.div 
             className="mt-5 flex flex-wrap gap-2 mb-10"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.28 }}
          >
            {["AcceptRate", "AcceptCoach", "AcceptRewards", "AcceptPulse"].map(p => (
              <span key={p} className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-sm text-white/60 font-semibold">
                {p}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <button className="group inline-flex items-center gap-2 rounded-xl bg-teal-5 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-5/20 transition-all duration-300 hover:bg-teal-6">
              Get Reliable Staff
            </button>
            <button className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15">
              See the Technology
            </button>
          </motion.div>
        </div>

        {/* Right: Phone UI */}
        <motion.div 
           className="hidden lg:block w-full"
           style={{ height: 600 }}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
        >
          <StaffingPhoneScene />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-navy-900 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2"
        >
          <div className="h-1.5 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Why Us Grid Component (Workers who get better) ────────────────────────
function WhyUsGrid() {
  const points = [
    {
      badge: "ACCEPTRATE",
      title: "Every worker rated. Every shift.",
      desc: "We rate every worker on every shift — punctuality, performance, attitude. Low scorers don't come back. You only get workers who've earned their place.",
      icon: IconStar
    },
    {
      badge: "ACCEPTCOACH",
      title: "Workers get better over time.",
      desc: "We don't just rate workers — we coach them. Feedback after every shift. Tips to improve. Good workers become great workers. Your standards become their standards.",
      icon: IconTrendingUp
    },
    {
      badge: "ACCEPTREWARDS",
      title: "Performance is rewarded.",
      desc: "Great performance earns points. Points unlock rewards and priority shifts. Top workers compete for recognition. Bad incentives create bad workers — good incentives create great ones.",
      icon: IconTrophy
    },
    {
      badge: "ACCEPTPULSE",
      title: "Know who's on site. Live.",
      desc: "Real-time attendance with photo verification. See exactly who arrived, when they clocked in, where they were. Instant alerts if anyone's missing. No guessing.",
      icon: IconScan
    }
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-b border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            THE ACCEPT DIFFERENCE
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Workers who get better, not just bodies.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Other agencies send whoever&apos;s available. We send rated, coached workers who earn their place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="h-full">
              <BentoCard
                href="#"
                icon={p.icon}
                title={
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00A99D] mb-2">
                      {p.badge}
                    </div>
                    {p.title}
                  </div>
                }
                titleClassName="text-2xl"
                description={p.desc}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
           <a href="#" className="font-bold text-teal-4 hover:text-teal-3 transition-colors flex items-center justify-center gap-2 group">
             Explore all our technology <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </div>
      </div>
    </section>
  );
}

// ─── Green Stats Bar ───────────────────────────────────────────────────────
function GreenStatsBar() {
  const stats = [
    { value: "100%", label: "Workers rated", sub: "Every worker, every shift" },
    { value: "4.2★", label: "Average worker score", sub: "Tracked and Improving" },
    { value: "98%", label: "Fill rate", sub: "Quality workers, not just bodies" },
    { value: "1,200", label: "Daily workers", sub: "Rated, coached, rewarded" },
  ];
  return (
    <section className="w-full bg-[#0FA393] py-14 font-sans text-white border-b border-[#0a7a6e]">
      <div className="mx-auto max-w-[1140px] px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-white/20">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl lg:text-[44px] font-bold mb-3 tracking-tight">{s.value}</div>
            <div className="font-bold text-lg leading-snug mb-1">{s.label}</div>
            <div className="text-[13px] font-medium opacity-80">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Pain Points Component ─────────────────────────────────────────────────
function PainPoints() {
  const painPoints = [
    {
      problem: '"Workers who just do the minimum"',
      solution: "Our workers are rated every shift — and they know it. Performance matters. Low scorers don't come back. You get workers who actually try.",
    },
    {
      problem: '"Agencies sending whoever\'s available"',
      solution: "We rate every worker, every shift. Low scorers get removed. You only get workers who've earned their place, not whoever answered their phone.",
    },
    {
      problem: '"No improvement over time"',
      solution: "We coach our workers. Feedback after every shift. Tips to get better. Workers who start good become great. Your standards become their standards.",
    },
    {
      problem: '"Workers with no incentive to perform"',
      solution: "Great performance earns points. Points unlock rewards and priority shifts. Good incentives create good workers.",
    },
    {
      problem: '"Can\'t get hold of your agency when you need them"',
      solution: "Same-day response guaranteed. Call at 6am, workers on site by start of shift. We answer phones. We solve problems. That's the job.",
    },
    {
      problem: '"Different faces every single day"',
      solution: "We build you a reliable core team. Same good workers coming back. consistency that compounds.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Tired of mediocre temps?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-white/50">
            Workers show up. But are they any good? We solved that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="bg-[#151a26] border border-white/5 rounded-2xl p-8 hover:bg-[#1a202d] transition-colors shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[10px] font-bold text-red-500/80 tracking-widest uppercase mb-2">The Problem</div>
              <h3 className="text-lg font-bold text-white mb-6">
                {point.problem}
              </h3>
              <div className="text-[10px] font-bold text-teal-4 tracking-widest uppercase mb-2 mt-auto pt-6 border-t border-white/5">How We Fix It</div>
              <p className="text-white/60 leading-relaxed text-sm">
                {point.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Component ────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell us what you need",
      desc: "Roles, numbers, dates. 2-minute call.",
    },
    {
      step: "02",
      title: "We match workers",
      desc: "From our rated, vetted pool.",
    },
    {
      step: "03",
      title: "Workers check in live",
      desc: "You see arrivals in real-time.",
    },
    {
      step: "04",
      title: "We handle everything",
      desc: "Payroll, compliance, problems.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 font-sans border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-4">
            SIMPLE PROCESS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-[24px] bg-[#121622] border border-white/5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[56px] font-black text-teal-5 mb-4 leading-none">
                {item.step}
              </div>
              <h3 className="text-[19px] font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function TemporaryStaffing() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      
      <InnerHero />
      
      <WhyUsGrid />

      <GreenStatsBar />

      <PainPoints />

      {/* Technology helps. People deliver message banner */}
      <section className="bg-teal-5 text-navy-900 py-24 px-6 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[34px] md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Technology helps. People deliver.
          </h2>
          <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed">
            All the tech in the world doesn&apos;t matter if no one answers the phone at 6am.
            We&apos;re recruiters first. We know what it takes to fill a shift, solve a problem,
            and keep an operation running. The technology just makes us faster and more reliable.
          </p>
        </div>
      </section>

      <Industries />

      <HowItWorks />

      <CtaBanner
        badge="GET STARTED TODAY"
        title="Ready for temps who actually"
        titleHighlight="perform?"
        subtitle="Every worker rated, coached, and rewarded. Quality you can measure, improvement you can see."
        primaryButtonText="Get Started Today"
        secondaryButtonText="Calculate Your Costs"
      />

      <Footer />
    </main>
  );
}
