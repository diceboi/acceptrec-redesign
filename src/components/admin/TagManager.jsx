"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconEdit, IconTrash, IconCheck, IconX } from "@tabler/icons-react";
import { createTag, updateTag, deleteTag } from "@/lib/blog-data";

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export function TagManager({ tags }) {
  const router = useRouter();
  const [showNew, setShowNew] = useState(false);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleCreate = async () => {
    if (!newName.trim()) return;
    await createTag({ name: newName.trim(), slug: slugify(newName) });
    setNewName("");
    setShowNew(false);
    router.refresh();
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) return;
    await updateTag(id, { name: editName.trim(), slug: slugify(editName) });
    setEditId(null);
    router.refresh();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this tag?")) return;
    await deleteTag(id);
    router.refresh();
  };

  return (
    <div className="p-6">
      {/* Add button */}
      <div className="mb-6">
        {!showNew ? (
          <button
            onClick={() => setShowNew(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors cursor-pointer"
          >
            <IconPlus size={16} strokeWidth={2.5} />
            New Tag
          </button>
        ) : (
          <div className="flex items-center gap-2 max-w-md">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              placeholder="Tag name"
              autoFocus
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50"
            />
            <button onClick={handleCreate} className="p-2.5 rounded-xl bg-teal-5 text-navy-900 hover:bg-teal-4 transition-colors cursor-pointer">
              <IconCheck size={16} />
            </button>
            <button onClick={() => { setShowNew(false); setNewName(""); }} className="p-2.5 rounded-xl bg-white/5 text-white/40 hover:text-white transition-colors cursor-pointer">
              <IconX size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Tags grid */}
      <div className="border border-white/5 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {tags.map((tag) => (
            <div key={tag.id} className="bg-[#0d111a] px-4 py-3.5 hover:bg-white/[0.02] transition-colors">
              {editId === tag.id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleUpdate(tag.id)}
                    autoFocus
                    className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-5/50"
                  />
                  <button onClick={() => handleUpdate(tag.id)} className="p-1.5 rounded-lg bg-teal-5/20 text-teal-4 cursor-pointer">
                    <IconCheck size={14} />
                  </button>
                  <button onClick={() => setEditId(null)} className="p-1.5 rounded-lg bg-white/5 text-white/40 cursor-pointer">
                    <IconX size={14} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-xs font-semibold">
                      {tag.name}
                    </span>
                    <div className="text-[10px] text-white/20 font-mono mt-1.5">{tag.slug}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => { setEditId(tag.id); setEditName(tag.name); }}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-white/30 hover:text-white transition-colors cursor-pointer"
                    >
                      <IconEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(tag.id)}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/30 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <IconTrash size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {tags.length === 0 && (
          <div className="text-center py-12 text-white/30 text-sm">No tags yet</div>
        )}
      </div>
    </div>
  );
}
