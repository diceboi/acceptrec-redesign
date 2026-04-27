"use client";

import Image from "next/image";
import Link from "next/link";
import { IconCalendar, IconUser, IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BlogCard({ post, index }) {
  // Use generic image if no cover provided
  const coverImage = post.coverImage || "/assets/images/about/about-hero.webp";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass-card flex flex-col rounded-2xl overflow-hidden hover:border-teal-5/30 transition-all duration-500 hover:teal-glow-sm h-full"
    >
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read {post.title}</span>
      </Link>
      
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-5/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative aspect-video w-full overflow-hidden shrink-0">
        <Image
          src={coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.category && (
          <div className="absolute top-4 left-4 bg-teal-5/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-navy-900">
              {post.category}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 lg:p-8 relative z-20">
        <div className="flex items-center gap-4 text-gray-500 dark:text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
          <div className="flex items-center gap-1.5">
            <IconCalendar size={14} className="text-teal-6 dark:text-teal-5" />
            <span>{new Date(post.createdAt).toLocaleDateString("en-GB")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <IconUser size={14} className="text-teal-6 dark:text-teal-5" />
            <span>{post.author || "Admin"}</span>
          </div>
        </div>

        <h3 className="text-navy-900 dark:text-white text-xl md:text-2xl font-semibold mb-3 group-hover:text-teal-6 dark:group-hover:text-teal-5 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <div 
          className="text-gray-600 dark:text-white/60 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 flex-1"
          dangerouslySetInnerHTML={{ __html: post.excerpt || "" }}
        />

        <div className="flex items-center gap-2 text-teal-6 dark:text-teal-4 text-sm font-semibold uppercase tracking-widest group-hover:text-teal-7 dark:group-hover:text-teal-3 transition-colors mt-auto">
          Read Article
          <IconChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
