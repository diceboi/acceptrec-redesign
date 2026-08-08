"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  IconBrandWhatsapp,
  IconMapPin,
  IconClock,
  IconCurrencyPound,
  IconUsers,
  IconCheck,
  IconFilter,
  IconChevronDown,
  IconSparkles,
  IconArrowRight,
  IconBolt,
} from "@tabler/icons-react";

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Strip HTML tags and decode common entities */
function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract bullet-point text from HTML list items */
function extractListItems(html) {
  if (!html) return [];
  // Extract <li> content
  const liMatches = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
  if (liMatches.length > 0) {
    return liMatches
      .map((li) => stripHtml(li))
      .filter(Boolean)
      .slice(0, 4);
  }
  // Fallback: strip all tags and split by newlines
  return stripHtml(html)
    .split(/[•\n]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3)
    .slice(0, 4);
}

// ─── Job Card ──────────────────────────────────────────────────────────────

function JobCard({ job, index }) {
  const cleanShift = stripHtml(job.shift);
  const cleanLocation = stripHtml(job.location);

  const whatsappMsg = encodeURIComponent(
    `Hi Accept Recruitment ${cleanLocation}! I'm interested in applying for:\n\nJob: ${job.title}\nRef: ${job.ref || "N/A"}\nLocation: ${cleanLocation}\nPay: ${job.pay}\nShift: ${cleanShift}\n\nCan you tell me more about this role?`,
  );

  // Parse requirements: prefer requiredSkills HTML, fallback to shortDescription
  const requirements = job.requiredSkills
    ? extractListItems(job.requiredSkills)
    : job.shortDescription
      ? [stripHtml(job.shortDescription)].filter(Boolean)
      : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.03 }}
      className="glass-card rounded-2xl p-8 hover:border-teal-5/30 transition-all duration-300 hover:teal-glow-sm group flex flex-col"
    >
      <div className="mb-6">
        <h3 className="text-white text-xl font-semibold tracking-tight mb-3 group-hover:text-teal-4 transition-colors">
          {job.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {job.ref && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono font-semibold tracking-wider">
              {job.ref}
            </span>
          )}
          {cleanLocation && (
            <span className="inline-flex items-center gap-1.5 text-[#8B98AB] text-xs font-semibold uppercase tracking-widest">
              <IconMapPin size={14} className="text-teal-5" />
              {cleanLocation}
            </span>
          )}
          {cleanShift && (
            <span className="inline-flex items-center gap-1.5 text-[#8B98AB] text-xs font-semibold uppercase tracking-widest">
              <IconClock size={14} className="text-teal-5" />
              {cleanShift}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
        {job.pay && (
          <div className="flex items-center gap-2">
            <IconCurrencyPound size={18} className="text-teal-5" />
            <span className="text-white text-2xl font-semibold tracking-tight">
              {job.pay.replace("£", "")}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <IconUsers size={16} className="text-[#8B98AB]/50" />
          <span className="text-[#8B98AB] text-sm font-semibold">
            {job.positions} {job.positions === 1 ? "position" : "positions"}
          </span>
        </div>
      </div>

      {requirements.length > 0 && (
        <div className="space-y-2.5 mb-8 flex-grow">
          {requirements.map((req, i) => (
            <div key={i} className="flex items-start gap-3">
              <IconCheck
                size={16}
                className="text-teal-5 shrink-0 mt-0.5"
                strokeWidth={3}
              />
              <span className="text-[#8B98AB] text-sm font-medium">{req}</span>
            </div>
          ))}
        </div>
      )}

      <a
        href={`https://wa.me/${job.whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 bg-teal-5 text-black font-semibold uppercase tracking-widest text-xs py-5 rounded-full hover:bg-white transition-all shadow-lg shadow-teal-5/10 mt-auto"
      >
        <IconBrandWhatsapp size={18} />
        Apply via WhatsApp
      </a>
    </motion.div>
  );
}

// ─── Filter Bar ────────────────────────────────────────────────────────────

function FilterBar({
  location,
  setLocation,
  locations,
  category,
  setCategory,
  categories,
  minPay,
  setMinPay,
  minPayInData,
  maxPayInData,
  jobCount,
}) {
  return (
    <section className="pb-12 bg-navy-700">
      <div className="mx-auto max-w-[1140px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-3 text-[#8B98AB]/50 shrink-0">
              <IconFilter size={20} className="text-teal-5" />
              <span className="text-[10px] font-semibold uppercase tracking-widest">
                Filter
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-grow w-full">
              {/* Location */}
              <div className="relative flex-1">
                <label className="block text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest mb-2">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:border-teal-5/50 focus:outline-none transition-colors cursor-pointer"
                  >
                    {locations.map((l) => (
                      <option
                        key={l}
                        value={l}
                        className="bg-[#161B28] text-white"
                      >
                        {l}
                      </option>
                    ))}
                  </select>
                  <IconChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B98AB]/50 pointer-events-none"
                  />
                </div>
              </div>
              {/* Category */}
              <div className="relative flex-1">
                <label className="block text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest mb-2">
                  Role Type
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:border-teal-5/50 focus:outline-none transition-colors cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option
                        key={c}
                        value={c}
                        className="bg-[#161B28] text-white"
                      >
                        {c === "All" ? "All Roles" : c}
                      </option>
                    ))}
                  </select>
                  <IconChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B98AB]/50 pointer-events-none"
                  />
                </div>
              </div>
              {/* Pay slider */}
              <div className="relative flex-1">
                <label className="block text-[#8B98AB]/50 text-[10px] font-semibold uppercase tracking-widest mb-2">
                  Minimum Pay Rate:{" "}
                  <span className="text-teal-4">£{minPay.toFixed(2)}/hr</span>
                </label>
                <div className="pt-2">
                  <input
                    type="range"
                    min={minPayInData}
                    max={maxPayInData}
                    step={0.5}
                    value={minPay}
                    onChange={(e) => setMinPay(parseFloat(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-teal-5"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-[#8B98AB]/30 text-[10px] font-semibold">
                      £{minPayInData}/hr
                    </span>
                    <span className="text-[#8B98AB]/30 text-[10px] font-semibold">
                      £{maxPayInData}/hr
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 px-5 py-3 rounded-xl bg-teal-5/10 border border-teal-5/20">
              <span className="text-teal-4 text-sm font-semibold">
                {jobCount}
              </span>
              <span className="text-[#8B98AB] text-sm font-semibold ml-1.5">
                {jobCount === 1 ? "job matches" : "jobs match"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Compact Registration Prompt Banner ──────────────────────────────────

function RegisterPromptBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.4 }}
      className="jobs-register-banner relative overflow-hidden rounded-2xl p-6 md:px-8 md:py-6 shadow-xl shadow-teal-5/15 mb-8 text-white"
    >
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
      <div className="pointer-events-none absolute right-1/4 -bottom-10 h-32 w-32 rounded-full bg-teal-2/20 blur-xl" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
            Register and we&apos;ll find the right role for you.
          </h3>
          <p className="mt-1.5 text-xs md:text-sm text-white/90 leading-relaxed max-w-xl">
            Jobs get filled fast — register with us in 2 minutes and our
            recruitment team will contact you directly when matching roles come
            in.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end shrink-0 gap-2 w-full lg:w-auto">
          <Link
            href="/registration"
            className="jobs-register-btn group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Register Now</span>
            <IconArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <span className="text-center text-[10px] font-semibold text-white/80 flex items-center justify-center gap-1">
            <IconBolt size={12} className="text-yellow-3" />
            Takes less than 2 minutes
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Client Section ───────────────────────────────────────────────────

export function JobsClientSection({
  jobs,
  locations,
  categories,
  minPayInData,
  maxPayInData,
}) {
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [minPay, setMinPay] = useState(minPayInData);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchLocation = location === "All" || job.location === location;
      const matchCategory =
        category === "All" ||
        job.category
          .split(",")
          .map((c) => c.trim())
          .includes(category);
      const matchPay = job.payRate >= minPay;
      return matchLocation && matchCategory && matchPay;
    });
  }, [jobs, location, category, minPay]);

  return (
    <>
      <FilterBar
        location={location}
        setLocation={setLocation}
        locations={locations}
        category={category}
        setCategory={setCategory}
        categories={categories}
        minPay={minPay}
        setMinPay={setMinPay}
        minPayInData={minPayInData}
        maxPayInData={maxPayInData}
        jobCount={filteredJobs.length}
      />
      <section className="pb-32 bg-navy-700">
        <div className="mx-auto max-w-[1140px] px-6">
          <RegisterPromptBanner />

          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredJobs.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-[#8B98AB] text-xl font-semibold mb-4">
                  No jobs match your filters
                </p>
                <p className="text-[#8B98AB]/50 font-medium">
                  Try adjusting your location or role type filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
