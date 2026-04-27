"use client";

import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";

export function AdminHeader({ title, subtitle, actionLabel, actionHref }) {
  return (
    <div className="px-6 py-8 border-b border-white/5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-white/40">{subtitle}</p>}
        </div>
        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors"
          >
            <IconPlus size={16} strokeWidth={2.5} />
            {actionLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
