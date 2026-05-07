"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { IconUser, IconArrowUp, IconQuote } from "@tabler/icons-react";

const stories = [
  {
    name: "Adam",
    from: "Warehouse Picker",
    to: "Permanent Operative",
    badge: "Permanent in 8 weeks",
    time: "8w",
    quote:
      "I came in picking and packing with the scanner, and it was exactly what I was told. Once I hit the standards and stayed reliable, the client offered me permanent.",
    tags: ["Permanent", "Warehouse"],
  },
  {
    name: "Anna",
    from: "Food Production",
    to: "Permanent Contract",
    badge: "Permanent contract",
    time: "6m",
    quote:
      "I started on the line and the routine was explained properly, including hygiene and checks. After a few months I was asked to step up as a permanent employee. Thank you so much Accept!",
    tags: ["Permanent", "Food Production"],
  },
  {
    name: "Hannah",
    from: "Warehouse Operative",
    to: "Stock Control",
    badge: "Promoted",
    time: "5m",
    quote:
      "I started on basic warehouse work and got shown things properly. Turning up on time and getting the job done meant I was trusted with more responsibility.",
    tags: ["Promotion", "Warehouse"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Blog() {
  return (
    <section className="relative w-full bg-[#0d111a] overflow-hidden py-24 md:py-32 font-sans">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        {/* Heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            REAL RESULTS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Success Stories
          </h2>
        </motion.div>

        {/* Stories card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="h-full"
            >
              <Link href="/success-stories" className="group relative overflow-hidden rounded-3xl p-8 flex flex-col transition-all duration-300 w-full h-full border border-white/5 bg-[#1c2230] hover:border-[#00A99D]/30 hover:bg-[#232938]">
                {/* Subtle glow for dark cards on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/0 to-[#00A99D]/0 transition-all duration-500 group-hover:from-[#00A99D]/5 group-hover:to-transparent pointer-events-none z-0" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/20 text-[#00A99D] text-[10px] font-semibold uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                      {story.badge}
                    </span>
                    <span className="text-[#8B98AB]/40 text-[10px] font-semibold uppercase tracking-widest">
                      {story.time}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/20 flex items-center justify-center text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-all shrink-0">
                      <IconUser size={20} />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        {story.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[#8B98AB]/60 text-xs font-semibold">
                        <span>{story.from}</span>
                        <IconArrowUp size={10} className="text-[#00A99D] rotate-90" />
                        <span className="text-[#00A99D]">{story.to}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex-grow mb-6">
                    <IconQuote size={16} className="text-white/10 absolute -top-1 -left-1" />
                    <p className="text-[#8B98AB] text-[14px] leading-relaxed font-medium pl-4 italic">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5 mt-auto">
                    {story.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/5 text-[#8B98AB]/60 text-[10px] font-semibold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button variant="primary" size="lg" href="/success-stories">
            View all success stories
          </Button>
        </div>
      </div>
    </section>
  );
}
