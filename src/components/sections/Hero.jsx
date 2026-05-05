"use client";

import { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  Bounds,
} from "@react-three/drei";
import * as THREE from "three";

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCameraIcon(ctx, x, y, size, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.08;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const w = size;
  const h = size * 0.72;
  const bodyX = x - w / 2;
  const bodyY = y - h / 2 + size * 0.08;

  ctx.beginPath();
  ctx.moveTo(bodyX + w * 0.16, bodyY);
  ctx.lineTo(bodyX + w * 0.34, bodyY);
  ctx.lineTo(bodyX + w * 0.44, bodyY - h * 0.22);
  ctx.lineTo(bodyX + w * 0.66, bodyY - h * 0.22);
  ctx.lineTo(bodyX + w * 0.76, bodyY);
  ctx.lineTo(bodyX + w * 0.84, bodyY);
  ctx.quadraticCurveTo(bodyX + w, bodyY, bodyX + w, bodyY + h * 0.16);
  ctx.lineTo(bodyX + w, bodyY + h * 0.84);
  ctx.quadraticCurveTo(bodyX + w, bodyY + h, bodyX + w * 0.84, bodyY + h);
  ctx.lineTo(bodyX + w * 0.16, bodyY + h);
  ctx.quadraticCurveTo(bodyX, bodyY + h, bodyX, bodyY + h * 0.84);
  ctx.lineTo(bodyX, bodyY + h * 0.16);
  ctx.quadraticCurveTo(bodyX, bodyY, bodyX + w * 0.16, bodyY);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y + size * 0.08, size * 0.16, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

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

function PhoneScreenPlane() {
  const textureRef = useRef(null);
  const canvasRef = useRef(null);
  const materialRef = useRef(null);
  const timeRef = useRef("06:58");

  const drawScreen = (ctx, w, h, step, time, elapsed = 0, stepProgress = 0) => {
    ctx.clearRect(0, 0, w, h);

    ctx.save();

    // rounded screen mask
    drawRoundedRect(ctx, 0, 0, w, h, 100);
    ctx.clip();

    // screen background
    ctx.fillStyle = "#0d1120";
    ctx.fillRect(0, 0, w, h);

    // status bar
    ctx.fillStyle = "rgba(255,255,255,0.42)";
    ctx.font = "600 26px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("09:41", 54, 60);

    ctx.textAlign = "right";
    ctx.fillText("▶▶ ⊡", w - 54, 60);

    // header
    ctx.textAlign = "center";
    ctx.fillStyle = "#2dd4bf";
    ctx.font = "800 25px Arial";
    ctx.fillText("ACCEPTPULSE", w / 2, 130);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 44px Arial";
    ctx.fillText("Clock In", w / 2, 180);

    ctx.fillStyle = "rgba(255,255,255,0.42)";
    ctx.font = "500 25px Arial";
    ctx.fillText("Your Business! • Morning Shift", w / 2, 220);

    const cx = w / 2;
    const cy = h / 2 - 20;

    // animated pulse / glow
    const idleGlow = 0.16 + Math.sin(elapsed * 2.4) * 0.035;

    if (step === 1) {
      const pulseProgress = (elapsed * 1.25) % 1;
      const pulseRadius = 125 + pulseProgress * 65;

      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(45,212,191,${0.55 * (1 - pulseProgress)})`;
      ctx.lineWidth = 7;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius + 22, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(45,212,191,${0.25 * (1 - pulseProgress)})`;
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    // main circle
    ctx.beginPath();
    ctx.arc(cx, cy, 125, 0, Math.PI * 2);
    ctx.fillStyle =
      step === 2
        ? "#0d9488"
        : step === 1
          ? "rgba(45,212,191,0.24)"
          : `rgba(45,212,191,${idleGlow})`;
    ctx.fill();

    // inner glow
    ctx.beginPath();
    ctx.arc(cx, cy, 96 + Math.sin(elapsed * 3) * 3, 0, Math.PI * 2);
    ctx.fillStyle =
      step === 2 ? "rgba(255,255,255,0.08)" : "rgba(45,212,191,0.08)";
    ctx.fill();

    if (step === 2) {
      // success check animation style
      const checkProgress = Math.min(1, stepProgress / 0.18);

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 16;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();

      if (checkProgress < 0.45) {
        const p = checkProgress / 0.45;
        ctx.moveTo(cx - 48, cy + 4);
        ctx.lineTo(cx - 48 + 36 * p, cy + 4 + 38 * p);
      } else {
        const p = (checkProgress - 0.45) / 0.55;
        ctx.moveTo(cx - 48, cy + 4);
        ctx.lineTo(cx - 12, cy + 42);
        ctx.lineTo(cx - 12 + 74 * p, cy + 42 - 94 * p);
      }

      ctx.stroke();
    } else {
      drawCameraIcon(ctx, cx, cy, 150, "#2dd4bf");

      // scanning line
      if (step === 1) {
        const scanY = cy - 76 + ((elapsed * 170) % 152);

        ctx.strokeStyle = "rgba(45,212,191,0.9)";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(cx - 72, scanY);
        ctx.lineTo(cx + 72, scanY);
        ctx.stroke();

        ctx.strokeStyle = "rgba(45,212,191,0.18)";
        ctx.lineWidth = 18;

        ctx.beginPath();
        ctx.moveTo(cx - 68, scanY);
        ctx.lineTo(cx + 68, scanY);
        ctx.stroke();
      }
    }

    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "500 25px Arial";

    if (step === 0) ctx.fillText("Take selfie to clock in", w / 2, h - 260);
    if (step === 1) ctx.fillText("Scanning face…", w / 2, h - 260);
    if (step === 2) ctx.fillText("✓ Clocked in successfully!", w / 2, h - 260);

    const cardX = 48;
    const cardY = h - 210;
    const cardW = w - 96;
    const cardH = 145;

    drawRoundedRect(ctx, cardX, cardY, cardW, cardH, 34);
    ctx.fillStyle = "rgba(255,255,255,0.055)";
    ctx.fill();

    ctx.fillStyle = "rgba(255,255,255,0.42)";
    ctx.font = "600 25px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Location", cardX + 34, cardY + 55);

    ctx.fillStyle = "#2dd4bf";
    ctx.textAlign = "right";
    ctx.fillText("✓ Verified", cardX + cardW - 34, cardY + 55);

    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cardX + 34, cardY + 82);
    ctx.lineTo(cardX + cardW - 34, cardY + 82);
    ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.42)";
    ctx.textAlign = "left";
    ctx.fillText("Time", cardX + 34, cardY + 122);

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "right";
    ctx.fillText(time, cardX + cardW - 34, cardY + 122);
    ctx.restore();
  };

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 1300;

    const ctx = canvas.getContext("2d");

    // fontos: legyen tartalom a canvas-on MIELŐTT texture lesz belőle
    drawScreen(ctx, canvas.width, canvas.height, 0, "06:58", 0);

    canvasRef.current = canvas;

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.flipY = true;
    tex.needsUpdate = true;

    textureRef.current = tex;

    return tex;
  }, []);

  useEffect(() => {
    const timeLoop = setInterval(() => {
      const [h, m] = timeRef.current.split(":").map(Number);
      const nm = (m + 1) % 60;
      const nh = m + 1 >= 60 ? h + 1 : h;

      timeRef.current = `${String(nh).padStart(2, "0")}:${String(nm).padStart(
        2,
        "0",
      )}`;
    }, 3000);

    return () => {
      clearInterval(timeLoop);
    };
  }, []);

  useFrame(({ clock }) => {
    const canvas = canvasRef.current;
    const texture = textureRef.current;
    const material = materialRef.current;

    if (!canvas || !texture) return;

    const ctx = canvas.getContext("2d");
    const elapsed = clock.getElapsedTime();

    const cycle = elapsed % 7.8;

    let step = 0;
    let stepProgress = 0;

    if (cycle < 2.6) {
      step = 0;
      stepProgress = cycle / 2.6;
    } else if (cycle < 5.2) {
      step = 1;
      stepProgress = (cycle - 2.6) / 2.6;
    } else {
      step = 2;
      stepProgress = (cycle - 5.2) / 2.6;
    }

    drawScreen(
      ctx,
      canvas.width,
      canvas.height,
      step,
      timeRef.current,
      elapsed,
      stepProgress,
    );

    texture.needsUpdate = true;

    if (material) {
      material.map = texture;
      material.needsUpdate = true;
    }
  });

  return (
    <mesh position={[0, -0, 0.4]} renderOrder={999}>
      <planeGeometry args={[6.6, 14.1]} />

      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        toneMapped={false}
        transparent
        alphaTest={0.01}
        side={THREE.DoubleSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function PhoneModel({ mouseRef }) {
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

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const { x, y } = mouseRef.current;
    const t = clock.getElapsedTime();

    const autoY = Math.sin(t * 0.8) * 0.12;
    const autoX = Math.sin(t * 0.55) * 0.045;
    const floatY = Math.sin(t * 1.1) * 0.08;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.35 + autoY,
      0.06,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.22 + autoX,
      0.06,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      floatY,
      0.06,
    );
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
      <PhoneScreenPlane scene={scene} />
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
      frameloop="always"
      camera={{
        position: [0, 0, 5],
        fov: 38,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        display: "block",
      }}
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
              href="/get-started"
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
              href="/jobs"
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
          className="relative w-full mt-12 lg:mt-0"
          style={{
            height: 500, // Reduced slightly from 600 for mobile, will be responsive in CSS if needed
            width: "100%",
            minWidth: 0,
            position: "relative",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-0 lg:h-[600px] h-[400px] -translate-y-10 lg:translate-y-0">
            <PhoneScene />
          </div>
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
