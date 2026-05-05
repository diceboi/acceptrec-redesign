"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CtaBanner({
  badge = "GET STARTED TODAY",
  title = "Ready to Get",
  titleHighlight = "Started?",
  subtitle = "Whether you're looking for staff or looking for work, we're here to help. Speak to our team today.",
  primaryButtonText = "I Need Staff",
  secondaryButtonText = "I Need Work",
  primaryButtonHref = "/get-started",
  secondaryButtonHref = "/jobs",
  className = "",
}) {
  return (
    <section className="relative w-full overflow-hidden font-sans cta-banner-section">
      {/* Team background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team-1.webp"
          alt="Accept Recruitment team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 cta-overlay" />
        <div className="absolute inset-0 cta-gradient" />
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
            {badge}
          </span>
          <h2 className="text-5xl font-semibold text-white tracking-tight leading-tight md:text-6xl">
            {title}
            <br />
            <span className="text-teal-5">{titleHighlight}</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60 mx-auto">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button variant="secondary" size="lg" href={secondaryButtonHref}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

