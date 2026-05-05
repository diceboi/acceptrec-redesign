"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteTeamMember, reorderTeamMembers } from "@/lib/team-data";
import {
  IconEdit,
  IconTrash,
  IconMapPin,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
  IconGripVertical,
  IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";

export function TeamList({ members }) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = members.filter((m) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      m.name?.toLowerCase().includes(term) ||
      m.role?.toLowerCase().includes(term) ||
      m.location?.toLowerCase().includes(term)
    );
  });

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this team member?")) return;
    try {
      await deleteTeamMember(id);
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
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
          />
        </div>
        <Link
          href="/admin/team/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-5 text-navy-900 text-sm font-bold hover:bg-teal-4 transition-all"
        >
          <IconPlus size={18} strokeWidth={2.5} />
          Add Member
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((member) => (
          <div
            key={member.id}
            className="group relative border border-white/5 bg-white/[0.02] rounded-2xl p-4 hover:border-teal-5/20 transition-all flex flex-col"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-white/5">
              {member.image_url ? (
                <Image
                  src={member.image_url}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/10">
                  <IconPlus size={48} />
                </div>
              )}
              {/* Disney badge if exists */}
              {member.disney_image_url && (
                <div className="absolute top-2 right-2 p-1 rounded-lg bg-teal-5/90 text-navy-900 backdrop-blur-sm" title="Has Disney photo">
                  <IconPlus size={14} className="rotate-45" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-semibold text-white truncate">{member.name}</div>
              <div className="text-xs text-teal-4 font-medium uppercase tracking-widest mt-1 truncate">
                {member.role}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/40 mt-2">
                <IconMapPin size={12} />
                {member.location}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="text-[10px] text-white/20 font-mono">#{member.id}</div>
              <div className="flex items-center gap-1">
                <Link
                  href={`/admin/team/${member.id}`}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                  title="Edit"
                >
                  <IconEdit size={18} />
                </Link>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="p-2 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                  title="Delete"
                >
                  <IconTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center py-24 text-white/20 text-sm">
            No team members found
          </div>
        )}
      </div>
    </div>
  );
}
