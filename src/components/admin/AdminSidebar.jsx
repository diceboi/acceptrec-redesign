"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconNotebook,
  IconCategory,
  IconTag,
  IconArrowLeft,
  IconBriefcase,
  IconUsers,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const menuSections = [
  {
    heading: "Jobs",
    items: [
      { id: "jobs", label: "Job Vacancies", href: "/admin/jobs", icon: IconBriefcase },
    ],
  },
  {
    heading: "Blog",
    items: [
      { id: "blog", label: "Blog Posts", href: "/admin/blog", icon: IconNotebook },
      { id: "blog-categories", label: "Categories", href: "/admin/blog-categories", icon: IconCategory },
      { id: "blog-tags", label: "Tags", href: "/admin/blog-tags", icon: IconTag },
    ],
  },
  {
    heading: "Admin",
    roleRequired: "admin",
    items: [
      { id: "users", label: "User Management", href: "/admin/users", icon: IconUsers },
    ],
  },
];

export function AdminSidebar({ role }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

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
        <nav className="flex-1 px-3 py-4 space-y-4">
          {menuSections
            .filter((section) => !section.roleRequired || section.roleRequired === role)
            .map((section) => (
            <div key={section.heading}>
              <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                {section.heading}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
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
              </div>
            </div>
          ))}
        </nav>

        {/* Back to site / Logout */}
        <div className="px-3 py-4 border-t border-white/5 space-y-1">
          <Link
            href="/admin/profile"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              pathname === "/admin/profile"
                ? "bg-teal-5/15 text-teal-4 border border-teal-5/20"
                : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <IconUser size={18} strokeWidth={1.5} />
            <span>My Profile</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <IconArrowLeft size={18} strokeWidth={1.5} />
            <span>Back to Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <IconLogout size={18} strokeWidth={1.5} />
            <span>Sign Out</span>
          </button>
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
          {menuSections
            .filter((section) => !section.roleRequired || section.roleRequired === role)
            .flatMap((s) => s.items)
            .map((item) => {
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
