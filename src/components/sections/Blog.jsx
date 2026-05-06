"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    category: "Workforce Strategy",
    title: "How to Cut No-Shows by 75%: The AcceptPulse Approach",
    excerpt:
      "Pre-shift confirmation isn't just an app feature — it's a mindset shift that transforms how your workforce shows up, literally.",
    author: "James Whitfield",
    authorRole: "Operations Director",
    authorImage: "/blog/author-james.jpg",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    image: "/blog/attracting-the-right-talent.webp",
    href: "/blog",
  },
  {
    category: "Client Success",
    title: "From 55 Workers to a Preferred Supplier: The InPost Story",
    excerpt:
      "When InPost needed 55 workers in 72 hours, we delivered. Here's how that crisis turned into a three-year partnership.",
    author: "Sarah Nolan",
    authorRole: "Client Relations Lead",
    authorImage: "/blog/author-sarah.jpg",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image: "/blog/national-temporary-worker-day.webp",
    href: "/blog",
  },
  {
    category: "Industry Insight",
    title: "Why 98% Fill Rates Are Possible — And What's Stopping You",
    excerpt:
      "Most agencies promise fill rates. Very few deliver on them consistently. We break down exactly what the 2% gap costs you.",
    author: "Tom Haley",
    authorRole: "Head of Workforce Planning",
    authorImage: "/blog/author-tom.jpg",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    image: "/blog/permanent-recruitment.webp",
    href: "/blog",
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
            INSIGHTS
          </span>
          <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-[54px] tracking-tight">
            From the Blog
          </h2>
        </motion.div>

        {/* Blog card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.title}
              variants={cardVariants}
              className="h-full"
            >
              <Link
                href={post.href}
                className={`group relative overflow-hidden rounded-3xl p-0 flex flex-col transition-all duration-300 w-full h-full border border-white/5 bg-[#1c2230] hover:border-white/10 hover:bg-[#232938]`}
              >
                {/* Subtle glow for dark cards on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A99D]/0 to-[#00A99D]/0 transition-all duration-500 group-hover:from-[#00A99D]/3 group-hover:to-transparent pointer-events-none z-0" />

                {/* Cover image */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 rounded-t-3xl z-10">
                  {/* Fallback gradient in case image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-8/60 to-navy-900/80" />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block rounded-full bg-[#00A99D] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F1320] shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-7">
                  <h3 className="text-[17px] font-semibold text-white leading-snug mb-3 group-hover:text-[#00A99D] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#8B98AB] flex-1 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Author + meta row */}
                  <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/8">
                    {/* Author avatar placeholder */}
                    <div className="h-8 w-8 rounded-full bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center text-[11px] font-bold text-[#00A99D] shrink-0">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-white truncate">
                        {post.author}
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Arrow - bottom right */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 translate-x-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 z-20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A99D] text-white shadow-lg">
                    <svg
                      width="20"
                      height="20"
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button variant="primary" size="lg" href="/blog">
            View all articles
          </Button>
        </div>
      </div>
    </section>
  );
}
