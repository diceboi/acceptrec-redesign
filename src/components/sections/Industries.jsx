"use client";

import { motion } from "framer-motion";
import {
  IconPackage,
  IconSettings,
  IconTruck,
  IconFlask,
  IconUsersGroup,
} from "@tabler/icons-react";
import { BentoCard } from "../ui/BentoCard";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Industries() {
  return (
    <section className="relative w-full bg-[#0d111a] py-24 md:py-32 overflow-hidden font-sans">
      <div className="relative z-10 mx-auto max-w-[1140px] px-6">
        {/* Section label + heading */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A99D]">
            WHAT WE DO
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            Powering Every Sector
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1: Large Left Card (Warehousing) */}
          <motion.div variants={cardVariants} className="lg:row-span-2">
            <BentoCard
              href="#"
              icon={IconPackage}
              title={
                <>
                  Warehousing &<br />
                  Logistics
                </>
              }
              titleClassName="text-[32px] leading-[1.15]"
              description="Warehouse operatives, forklift drivers, pickers, packers — the backbone of distribution."
            >
              <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-[34px] font-bold text-[#00A99D] leading-none mb-2">
                    500+
                  </div>
                  <div className="text-[13px] text-[#64748B] font-medium">
                    Daily Workers
                  </div>
                </div>
                <div>
                  <div className="text-[34px] font-bold text-[#00A99D] leading-none mb-2">
                    98%
                  </div>
                  <div className="text-[13px] text-[#64748B] font-medium">
                    Fill Rate
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 2: Top Middle (Manufacturing) */}
          <motion.div variants={cardVariants}>
            <BentoCard
              href="#"
              icon={IconSettings}
              title="Manufacturing"
              description="Production operatives, machine operators, assembly workers"
            />
          </motion.div>

          {/* Card 3: Top Right (Food Production) */}
          <motion.div variants={cardVariants}>
            <BentoCard
              href="#"
              icon={IconFlask}
              title="Food Production"
              description="Food production staff, packers, line operatives"
            />
          </motion.div>

          {/* Card 4: Bottom Middle (Transport & Driving) */}
          <motion.div variants={cardVariants}>
            <BentoCard
              href="#"
              icon={IconTruck}
              title="Transport & Driving"
              description="Van drivers, HGV Class 1 & 2, multi-drop specialists"
            />
          </motion.div>

          {/* Card 5: Bottom Right (Permanent Recruitment - Teal) */}
          <motion.div variants={cardVariants}>
            <BentoCard
              href="#"
              icon={IconUsersGroup}
              title={
                <>
                  Permanent
                  <br />
                  Recruitment
                </>
              }
              description="From supervisors to senior leadership — hire talent that stays."
              isTeal={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
