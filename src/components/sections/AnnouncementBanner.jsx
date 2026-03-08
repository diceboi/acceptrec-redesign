"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AnnouncementBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-50 w-full bg-[#0D1520] border-b border-white/10"
    >
      <div className="mx-auto flex items-center justify-center gap-3 px-4 py-2.5 text-center text-sm font-medium text-white/80">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-5/20 px-2.5 py-0.5 text-xs font-bold text-teal-4 uppercase tracking-wider">
          Cut No-Shows 75%
        </span>
        <span>
          See how InPost hit 98% fill rate with Accept.{" "}
          <Link
            href="#"
            className="font-semibold text-white underline underline-offset-2 hover:text-teal-4 transition-colors"
          >
            Read case study →
          </Link>
        </span>
      </div>
    </motion.div>
  );
}
