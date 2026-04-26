"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  Environment,
  ContactShadows,
  Bounds,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

// ─── Google Rating hook ────────────────────────────────────────────────────
function useGoogleRating() {
  const [data, setData] = useState({ rating: "4.8", loading: true });
  useEffect(() => {
    fetch("/api/google-rating")
      .then((r) => r.json())
      .then((d) =>
        setData({
          rating: d.rating ? d.rating.toFixed(1) : "4.8",
          loading: false,
        }),
      )
      .catch(() => setData({ rating: "4.8", loading: false }));
  }, []);
  return data;
}

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Animated Clock-In Screen ────────────────────────────────────────────
function ClockInScreen() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState("06:58");

  useEffect(() => {
    const iv = setInterval(() => {
      setTime((t) => {
        const [h, m] = t.split(":").map(Number);
        const nm = (m + 1) % 60;
        const nh = m + 1 >= 60 ? h + 1 : h;
        return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
      });
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const seq = async () => {
      await delay(1200);
      if (!cancelled) setStep(1);
      await delay(2000);
      if (!cancelled) setStep(2);
      await delay(2200);
      if (!cancelled) setStep(0);
    };
    seq();
    const loop = setInterval(seq, 6000);
    return () => {
      cancelled = true;
      clearInterval(loop);
    };
  }, []);

  return (
    <div
      style={{
        width: 200, // Base width
        height: 433.33, // 200 * (19.5 / 9) exact ratio
        background: "#0d1120",
        borderRadius: 30, // More rounded corners typical for iPhone
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
        color: "white",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 18px 4px",
          fontSize: 9,
          opacity: 0.4,
        }}
      >
        <span>09:41</span>
        <span>▶▶ ⊡</span>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "4px 12px 8px" }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#2dd4bf",
            textTransform: "uppercase",
          }}
        >
          AcceptPulse
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, marginTop: 3 }}>
          Clock In
        </div>
        <div style={{ fontSize: 10, opacity: 0.4, marginTop: 2 }}>
          Your Business! • Morning Shift
        </div>
      </div>

      {/* Camera area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Pulse ring */}
          {step === 1 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid #2dd4bf",
                animation: "pulse-ring 1s ease-out infinite",
              }}
            />
          )}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: step === 2 ? "#0d9488" : "rgba(45,212,191,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s",
            }}
          >
            {step === 2 ? (
              <svg
                viewBox="0 0 24 24"
                width="34"
                height="34"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div
        style={{
          textAlign: "center",
          fontSize: 10,
          opacity: 0.5,
          paddingBottom: 8,
        }}
      >
        {step === 0 && "Take selfie to clock in"}
        {step === 1 && "Scanning face…"}
        {step === 2 && "✓ Clocked in successfully!"}
      </div>

      {/* Info rows */}
      <div
        style={{
          margin: "0 12px 16px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: 12,
          padding: "10px 14px",
          fontSize: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 8,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            marginBottom: 8,
          }}
        >
          <span style={{ opacity: 0.4 }}>Location</span>
          <span style={{ color: "#2dd4bf", fontWeight: 600 }}>✓ Verified</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ opacity: 0.4 }}>Time</span>
          <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
            {time}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function PhoneModel({ mouseRef }) {
  const { scene } = useGLTF("/models/phone.glb");
  const groupRef = useRef();

  // Clone and prepare materials to look sleek/dark
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
    // Smooth lerp towards target rotation
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

  // We position the Html slightly in front of the model center
  // The mouse effect rotation is applied to the outermost group so everything inside rotates as a single rigid body
  return (
    <group ref={groupRef}>
      {/* Inner group aligns the children into the exact same local space */}
      <group>
        <primitive object={scene} />
        {/* HTML screen overlay */}
        <Html
          position={[-0.49, 0.45, 0.4]} // <--- Az X és az Y tolja a helyére, a Z pedig milliméterre van az üvegtől
          transform
          distanceFactor={0}
          scale={1.33}
          style={{ pointerEvents: "none" }}
        >
          <ClockInScreen />
        </Html>
      </group>
    </group>
  );
}

// ─── Canvas scene ─────────────────────────────────────────────────────────
function PhoneScene() {
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
      <spotLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        penumbra={1}
      />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color="#2dd4bf" />
      <pointLight position={[4, 4, -2]} intensity={0.3} color="#7c3aed" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <PhoneModel mouseRef={mouseRef} />
        </Bounds>
        <Environment preset="city" />
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.4}
          scale={8}
          blur={2.5}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
export function Hero() {
  const { rating, loading } = useGoogleRating();

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-navy-900 pt-20">
      {/* ── Blobs ── */}
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

      {/* ── Dot pattern ── */}
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-20" />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-0">
        {/* LEFT — Text */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-5/30 bg-teal-5/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-teal-5 animate-pulse" />
            <span className="text-sm font-semibold text-teal-4">
              Trusted by 190+ companies across the UK
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Give a <span className="text-teal-5">Shift</span>.
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About your operation. About your deadlines. About your people.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            className="mt-5 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            {["AcceptPulse", "AcceptRate", "AcceptMatch", "AcceptConnect"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-sm text-white/60"
                >
                  {t}
                </span>
              ),
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-teal-5 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-5/20 transition-all duration-300 hover:bg-teal-6"
            >
              <span>Find Staff</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15"
            >
              <span>Find Work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5 text-sm text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-4">★★★★★</span>
              <span className={loading ? "opacity-40" : ""}>
                {rating} Google Rating
              </span>
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span>1,200 workers daily</span>
            <span className="h-4 w-px bg-white/20" />
            <span>Leicester · Coventry · Tamworth</span>
          </motion.div>
        </div>

        {/* RIGHT — Three.js Phone */}
        <motion.div
          className="hidden lg:block"
          style={{ height: 600 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <PhoneScene />
        </motion.div>
      </div>

      {/* Bottom fade */}
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

      <h2 className="sr-only">Looking for work?</h2>
    </section>
  );
}
