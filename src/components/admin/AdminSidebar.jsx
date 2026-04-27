"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconNotebook,
  IconCategory,
  IconTag,
  IconArrowLeft,
} from "@tabler/icons-react";

const menuItems = [
  { id: "blog", label: "Blog Posts", href: "/admin/blog", icon: IconNotebook },
  { id: "blog-categories", label: "Categories", href: "/admin/blog-categories", icon: IconCategory },
  { id: "blog-tags", label: "Tags", href: "/admin/blog-tags", icon: IconTag },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-navy-900 shrink-0">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/5">
          <Link href="/admin" className="flex items-center gap-3">
            <Image src="/Accept-Stacked-Logo-icon.webp" alt="Accept" width={32} height={32} />
            <div>
              <div className="text-sm font-semibold text-white">Accept Admin</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Content Manager</div>
            </div>
          </Link>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="px-3 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            Blog Management
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-teal-5/15 text-teal-4 border border-teal-5/20"
                    : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Back to site */}
        <div className="px-3 py-4 border-t border-white/5">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <IconArrowLeft size={18} strokeWidth={1.5} />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/admin" className="flex items-center gap-2">
            <Image src="/Accept-Stacked-Logo-icon.webp" alt="Accept" width={24} height={24} />
            <span className="text-sm font-semibold text-white">Admin</span>
          </Link>
          <Link href="/" className="text-white/40 hover:text-white">
            <IconArrowLeft size={20} />
          </Link>
        </div>
        <nav className="flex gap-1 px-3 pb-3 overflow-x-auto">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-teal-5/15 text-teal-4 border border-teal-5/20"
                    : "text-white/50 border border-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
