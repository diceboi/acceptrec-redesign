"use client";

import { useRef, useEffect } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

export function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract non-digits, digits, non-digits
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);

  const prefix = match ? match[1] : "";
  const numValue = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";

  const spring = useSpring(0, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  useEffect(() => {
    if (isInView && match) {
      spring.set(numValue);
    }
  }, [isInView, numValue, spring, match]);

  const animatedText = useTransform(spring, (current) => {
    return Math.floor(current);
  });

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="inline-flex items-center">
      {prefix}
      <motion.span>{animatedText}</motion.span>
      {suffix}
    </span>
  );
}
