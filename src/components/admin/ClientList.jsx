"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteClientRecord } from "@/lib/clients-data";
import {
  IconEdit,
  IconTrash,
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from "@tabler/icons-react";

export function ClientList({ clients }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 20;
  const router = useRouter();

  const filtered = clients.filter((c) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(term) ||
      c.client_code?.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this client?")) return;
    try {
      await deleteClientRecord(id);
      router.refresh();
    } catch (err) {
      alert("Error deleting: " + err.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1">
          <IconSearch size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
          />
        </div>
        <Link
          href="/admin/clients/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-5 text-navy-900 text-sm font-bold hover:bg-teal-4 transition-all"
        >
          <IconPlus size={18} strokeWidth={2.5} />
          Add Client
        </Link>
      </div>

      <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
        <table className="min-w-full text-sm">
          <thead className="bg-white/[0.03]">
            <tr>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">Code</th>
              <th className="text-left font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider">Name</th>
              <th className="text-right font-semibold px-4 py-3.5 text-white/50 text-xs uppercase tracking-wider w-[120px]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {currentItems.map((client) => (
              <tr key={client.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-4 font-mono text-teal-4">{client.client_code}</td>
                <td className="px-4 py-4 text-white font-medium">{client.name}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/admin/clients/${client.id}`}
                      className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                    >
                      <IconEdit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
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
          <div className="text-center py-24 text-white/20 text-sm">No clients found</div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="text-sm text-white/40">
            Showing <span className="text-white font-medium">{startIndex + 1}</span> to{" "}
            <span className="text-white font-medium">{Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}</span> of{" "}
            <span className="text-white font-medium">{filtered.length}</span> clients
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
            >
              <IconChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
            >
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
