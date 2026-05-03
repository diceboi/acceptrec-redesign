"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEdit, IconTrash, IconExternalLink, IconSearch, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { deletePost } from "@/lib/blog-data";

export function BlogList({ posts, categories, tags }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;
  const router = useRouter();

  const filtered = posts.filter((p) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      p.title?.toLowerCase().includes(term) ||
      p.slug?.toLowerCase().includes(term) ||
      p.category?.toLowerCase().includes(term) ||
      p.author?.toLowerCase().includes(term)
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
    if (!confirm("Are you sure you want to delete this post?")) return;
    await deletePost(id);
    router.refresh();
  };

  const getCategoryName = (slug) => {
    const cat = categories.find((c) => c.slug === slug);
    return cat?.name || slug || "—";
  };

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-6 relative">
        <IconSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Search posts..."
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
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">Title</th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden lg:table-cell">Slug</th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden lg:table-cell">Category</th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider hidden sm:table-cell">Date</th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">Status</th>
              <th className="text-right font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider w-[140px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((post) => (
              <tr key={post.id} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-4 align-middle">
                  <div>
                    <div className="font-semibold text-white truncate max-w-[300px]">{post.title}</div>
                    <div className="text-xs text-white/30 mt-0.5">#{post.id} · {post.author}</div>
                  </div>
                </td>
                <td className="px-4 py-4 align-middle hidden lg:table-cell">
                  <span className="text-white/60 font-mono text-xs">{post.slug || "—"}</span>
                </td>
                <td className="px-4 py-4 align-middle hidden lg:table-cell">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-[11px] font-semibold">
                    {getCategoryName(post.category)}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle hidden sm:table-cell">
                  <span className="text-white/60 text-xs">
                    {new Date(post.createdAt).toLocaleDateString("en-GB")}
                  </span>
                </td>
                <td className="px-4 py-4 align-middle">
                  {post.published ? (
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
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-teal-4 transition-colors"
                      title="Preview"
                    >
                      <IconExternalLink size={16} />
                    </Link>
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                      title="Edit"
                    >
                      <IconEdit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
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
          <div className="text-center py-16 text-white/30 text-sm">No posts found</div>
        )}
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3 mt-20">
        {currentItems.map((post) => (
          <div key={post.id} className="border border-white/5 bg-white/[0.02] rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-semibold text-white text-sm">{post.title}</div>
                <div className="text-xs text-white/30 mt-1">#{post.id} · {post.author}</div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Link href={`/admin/blog/${post.id}`} className="p-1.5 rounded-lg hover:bg-white/5 text-white/40">
                  <IconEdit size={16} />
                </Link>
                <button onClick={() => handleDelete(post.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/40 cursor-pointer">
                  <IconTrash size={16} />
                </button>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 font-semibold">
                {getCategoryName(post.category)}
              </span>
              {post.published ? (
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
            Showing <span className="text-white font-medium">{startIndex + 1}</span> to <span className="text-white font-medium">{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}</span> of <span className="text-white font-medium">{filtered.length}</span> posts
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
