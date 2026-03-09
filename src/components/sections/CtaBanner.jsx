"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  return (
    <section className="relative w-full overflow-hidden font-sans">
      {/* Team background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team-1.webp"
          alt="Accept Recruitment team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay — inline style to bypass global bg-navy-* override */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: isLight
              ? "rgba(240,244,248,0.75)"
              : "rgba(10,13,20,0.80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? "linear-gradient(to right, rgba(240,244,248,0.90), rgba(240,244,248,0.65), rgba(240,244,248,0.30))"
              : "linear-gradient(to right, rgba(10,13,20,0.90), rgba(10,13,20,0.70), rgba(10,13,20,0.40))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1140px] px-6 py-28 md:py-36">
        <motion.div
          className="text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            GET STARTED TODAY
          </span>
          <h2 className="text-5xl font-semibold text-white tracking-tight leading-tight md:text-6xl">
            Ready to Get
            <br />
            <span className="text-teal-5">Started?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60 mx-auto">
            Whether you&apos;re looking for staff or looking for work,
            we&apos;re here to help. Speak to our team today.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg">
              I Need Staff
            </Button>
            <Button variant="secondary" size="lg">
              I Need Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
