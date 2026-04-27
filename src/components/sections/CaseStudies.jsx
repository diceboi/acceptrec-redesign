"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

const caseStudies = [
  {
    theme: "LOGISTICS",
    image: "/case-studies/inpost-poster.jpg",
    stat: "55",
    statSub: "Workers in 3 Days",
    title: "InPost UK",
    description: "From crisis call to preferred supplier in 17 days.",
    meta: ["4,200+ shifts", "98% attendance"],
    href: "/case-studies/inpost",
  },
  {
    theme: "PRODUCTION",
    image: "/case-studies/vistry-poster.jpg",
    stat: "7,000+",
    statSub: "Shifts Delivered",
    title: "Vistry Group",
    description: "Doubled workforce capacity in just 10 weeks.",
    meta: ["94.2% fulfilment", "42 converted"],
    href: "/case-studies/vistry",
  },
  {
    theme: "RETAIL",
    image: "/case-studies/poundstretcher-poster.jpg",
    stat: "300%",
    statSub: "Pick Rate Increase",
    title: "Poundstretcher",
    description: "Nine years of consistent delivery. Now sole supplier.",
    meta: ["200 daily", "8+ years"],
    href: "/case-studies/poundstretcher",
  },
];

export function CaseStudies() {
  return (
    <section className="relative w-full bg-navy-700 overflow-hidden py-24 md:py-32 font-sans">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-5">
            CASE STUDIES
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Real Results
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.theme}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link href={cs.href} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1c2230] transition-all duration-300 hover:border-white/10 hover:bg-[#232938] cursor-pointer h-full">
              {/* Subtle glow for dark cards on hover (adopted from BentoCard) */}
              <div className="absolute inset-0 bg-linear-to-br from-[#00A99D]/0 to-[#00A99D]/0 transition-all duration-500 group-hover:from-[#00A99D]/3 group-hover:to-transparent pointer-events-none z-0"></div>

              {/* Media Container (Top Half) */}
              <div className="relative h-56 w-full overflow-hidden shrink-0 z-10">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Theme Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block rounded-full bg-teal-5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F1320] shadow-lg">
                    {cs.theme}
                  </span>
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-5 group-hover:border-teal-4 group-hover:text-[#0F1320] shadow-xl">
                    <IconPlayerPlayFilled size={20} className="ml-1" />
                  </div>
                </div>

                {/* Overlaid Stats */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <div className="text-[40px] font-bold text-white leading-none tracking-tight">
                    {cs.stat}
                  </div>
                  <div className="mt-1 text-[13px] font-medium text-white/80">
                    {cs.statSub}
                  </div>
                </div>
              </div>

              {/* Text Content Container (Bottom Half) */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {cs.title}
                </h3>
                <p className="flex-1 text-[15px] leading-relaxed text-[#94A3B8]">
                  {cs.description}
                </p>

                {/* Metadata slightly separated at the bottom */}
                <div className="mt-6 flex items-center flex-wrap gap-x-3 gap-y-2 text-[13px] font-semibold text-teal-5">
                  {cs.meta.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span>{item}</span>
                      {index < cs.meta.length - 1 && (
                        <span className="h-1 w-1 rounded-full bg-teal-5/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-14 text-center">
          <Button variant="primary" size="lg" href="/case-studies">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
