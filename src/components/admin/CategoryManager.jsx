"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconPlus, IconEdit, IconTrash, IconCheck, IconX } from "@tabler/icons-react";
import { createCategory, updateCategory, deleteCategory } from "@/lib/blog-data";

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export function CategoryManager({ categories }) {
  const router = useRouter();
  const [showNew, setShowNew] = useState(false);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleCreate = async () => {
    if (!newName.trim()) return;
    await createCategory({ name: newName.trim(), slug: slugify(newName) });
    setNewName("");
    setShowNew(false);
    router.refresh();
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) return;
    await updateCategory(id, { name: editName.trim(), slug: slugify(editName) });
    setEditId(null);
    router.refresh();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this category?")) return;
    await deleteCategory(id);
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
            New Category
          </button>
        ) : (
          <div className="flex items-center gap-2 max-w-md">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
              placeholder="Category name"
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

      {/* List */}
      <div className="border border-white/5 rounded-2xl overflow-hidden">
        {categories.map((cat, i) => (
          <div key={cat.id} className={`flex items-center justify-between px-4 py-3.5 ${i > 0 ? "border-t border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}>
            {editId === cat.id ? (
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUpdate(cat.id)}
                  autoFocus
                  className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-5/50"
                />
                <button onClick={() => handleUpdate(cat.id)} className="p-1.5 rounded-lg bg-teal-5/20 text-teal-4 hover:bg-teal-5/30 cursor-pointer">
                  <IconCheck size={14} />
                </button>
                <button onClick={() => setEditId(null)} className="p-1.5 rounded-lg bg-white/5 text-white/40 hover:text-white cursor-pointer">
                  <IconX size={14} />
                </button>
              </div>
            ) : (
              <>
                <div>
                  <div className="text-sm font-semibold text-white">{cat.name}</div>
                  <div className="text-xs text-white/30 font-mono mt-0.5">{cat.slug}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => { setEditId(cat.id); setEditName(cat.name); }}
                    className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    <IconEdit size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <IconTrash size={14} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {categories.length === 0 && (
          <div className="text-center py-12 text-white/30 text-sm">No categories yet</div>
        )}
      </div>
    </div>
  );
}
