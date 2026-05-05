"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IconEdit,
  IconTrash,
  IconExternalLink,
  IconSearch,
  IconMapPin,
  IconCurrencyPound,
  IconChevronLeft,
  IconChevronRight,
  IconRefresh,
} from "@tabler/icons-react";
import { deleteJob } from "@/lib/jobs-data";

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
}


import { updateAllJobRefs } from "@/lib/update-refs";

export function JobList({ jobs }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);
  const ITEMS_PER_PAGE = 20;
  const router = useRouter();

  const handleRegenerateRefs = async () => {
    if (!confirm("Are you sure you want to regenerate ALL Reference IDs? This will overwrite existing IDs with the new format (JOB-ROLE-LOC-SEQ).")) return;
    setIsUpdating(true);
    try {
      await updateAllJobRefs();
      router.refresh();
      alert("All Reference IDs have been updated!");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const filtered = jobs.filter((j) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      j.title?.toLowerCase().includes(term) ||
      j.location?.toLowerCase().includes(term) ||
      j.category?.toLowerCase().includes(term) ||
      j.contractType?.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    await deleteJob(id);
    router.refresh();
  };

  const salaryLabel = (job) => {
    if (job.salaryFix) return `£${job.salaryFix}`;
    if (job.salaryFrom && job.salaryTo)
      return `£${job.salaryFrom}–£${job.salaryTo}`;
    if (job.salaryFrom) return `£${job.salaryFrom}+`;
    return "—";
  };

  return (
    <div className="p-6">
      {/* Search */}
      <div className="mb-6 relative">
        <IconSearch
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
        />
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={handleSearch}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
        />
      </div>

      {/* Desktop table */}
      <div className="hidden md:block border border-white/5 rounded-2xl overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-white/[0.03]">
            <tr>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">
                Title
              </th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden lg:table-cell">
                Location
              </th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden lg:table-cell">
                Category
              </th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden sm:table-cell">
                Salary
              </th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">
                Status
              </th>
              <th className="text-right font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider w-[140px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((job) => (
              <tr
                key={job.id}
                className="border-t border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-4 py-4 align-middle">
                  <div>
                    <div className="font-semibold text-white truncate max-w-[280px]">
                      {job.internalTitle || job.title}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">
                      {job.ref || `#${job.id}`}
                      {job.clientName ? ` · ${job.clientName}` : ""}
                      {job.contractType ? ` · ${job.contractType}` : ""}
                      {job.shift ? ` · ${stripHtml(job.shift)}` : ""}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 align-middle hidden lg:table-cell">
                  <span className="inline-flex items-center gap-1.5 text-white/60 text-xs">
                    <IconMapPin size={12} className="text-teal-5" />
                    {job.location || "—"}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle hidden lg:table-cell">
                  {job.category ? (
                    <span className="inline-block px-2.5 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[11px] font-semibold">
                      {job.category}
                    </span>
                  ) : (
                    <span className="text-white/30">—</span>
                  )}
                </td>
                <td className="px-4 py-4 align-middle hidden sm:table-cell">
                  <span className="inline-flex items-center gap-1 text-white/60 text-xs font-semibold">
                    <IconCurrencyPound size={12} className="text-teal-5" />
                    {salaryLabel(job)}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle">
                  {job.published ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/jobs`}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-teal-4 transition-colors"
                      title="View on site"
                    >
                      <IconExternalLink size={16} />
                    </Link>
                    <Link
                      href={`/admin/jobs/${job.id}`}
                      className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                      title="Edit"
                    >
                      <IconEdit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30 text-sm">
            No jobs found
          </div>
        )}
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3 mt-20">
        {currentItems.map((job) => (
          <div
            key={job.id}
            className="border border-white/5 bg-white/[0.02] rounded-2xl p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-semibold text-white text-sm">
                  {job.title}
                </div>
                <div className="text-xs text-white/30 mt-1">
                  {job.ref || `#${job.id}`} · {job.location || "—"} · {salaryLabel(job)}
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Link
                  href={`/admin/jobs/${job.id}`}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-white/40"
                >
                  <IconEdit size={16} />
                </Link>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/40 cursor-pointer"
                >
                  <IconTrash size={16} />
                </button>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs">
              {job.category && (
                <span className="px-2 py-0.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 font-semibold">
                  {job.category}
                </span>
              )}
              {job.published ? (
                <span className="font-bold text-emerald-400">Published</span>
              ) : (
                <span className="font-bold text-yellow-400">Draft</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="text-sm text-white/40">
            Showing <span className="text-white font-medium">{startIndex + 1}</span> to <span className="text-white font-medium">{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}</span> of <span className="text-white font-medium">{filtered.length}</span> jobs
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === i + 1
                      ? "bg-teal-5 text-navy-900"
                      : "text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
