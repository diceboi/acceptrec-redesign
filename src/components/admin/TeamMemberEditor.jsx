"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTeamMember, updateTeamMember } from "@/lib/team-data";
import { IconDeviceFloppy, IconArrowLeft, IconPlus, IconX, IconUpload, IconPhoto } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors";
const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2";
const fieldBox = "border border-white/5 rounded-2xl p-5 bg-white/[0.02] space-y-4";

export function TeamMemberEditor({ member, isNew }) {
  const router = useRouter();
  const supabase = createClient();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState({ image: false, disney: false });

  const [form, setForm] = useState({
    name: member?.name || "",
    role: member?.role || "",
    location: member?.location || "Leicester",
    quote: member?.quote || "",
    superpower: member?.superpower || "",
    motto: member?.motto || "",
    loves: member?.loves || [],
    image_url: member?.image_url || "",
    disney_image_url: member?.disney_image_url || "",
    order_index: member?.order_index ?? 0,
  });

  const [newLove, setNewLove] = useState("");

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addLove = () => {
    if (!newLove.trim()) return;
    if (form.loves.includes(newLove.trim())) return;
    update("loves", [...form.loves, newLove.trim()]);
    setNewLove("");
  };

  const removeLove = (tag) => {
    update("loves", form.loves.filter((t) => t !== tag));
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading((prev) => ({ ...prev, [type]: true }));
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("team")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("team")
        .getPublicUrl(filePath);

      update(type === "image" ? "image_url" : "disney_image_url", publicUrl);
    } catch (err) {
      alert("Error uploading image: " + err.message);
    } finally {
      setUploading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isNew) {
        await createTeamMember(form);
      } else {
        await updateTeamMember(member.id, form);
      }
      router.push("/admin/team");
      router.refresh();
    } catch (err) {
      alert("Error saving: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-[#0d111a]">
      {/* Header */}
      <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/team" className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
            <IconArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-white">{isNew ? "New Team Member" : "Edit Team Member"}</h1>
            <p className="text-xs text-white/40 mt-0.5">{isNew ? "Add a new human to the squad" : `Editing: ${member.name}`}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving || uploading.image || uploading.disney}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <IconDeviceFloppy size={16} strokeWidth={2.5} />
          {saving ? "Saving..." : "Save Member"}
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-6">
        {/* Main column */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass}
                placeholder="Mark Pearce"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Role / Title</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
                className={inputClass}
                placeholder="Managing Director"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Location</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className={inputClass}
                placeholder="Leicester"
              />
            </div>
            <div>
              <label className={labelClass}>Order Index</label>
              <input
                type="number"
                value={form.order_index}
                onChange={(e) => update("order_index", parseInt(e.target.value))}
                className={inputClass}
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Quote</label>
            <textarea
              value={form.quote}
              onChange={(e) => update("quote", e.target.value)}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="A fun quote about work or life..."
            />
          </div>

          <div>
            <label className={labelClass}>Superpower</label>
            <input
              type="text"
              value={form.superpower}
              onChange={(e) => update("superpower", e.target.value)}
              className={inputClass}
              placeholder="e.g. Making 100 temps appear out of thin air"
            />
          </div>

          <div>
            <label className={labelClass}>Motto</label>
            <input
              type="text"
              value={form.motto}
              onChange={(e) => update("motto", e.target.value)}
              className={inputClass}
              placeholder="e.g. Every storm eventually gives way to a beautiful rainbow"
            />
          </div>

          <div>
            <label className={labelClass}>Loves (Interests)</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {form.loves.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-5/10 border border-teal-5/20 text-teal-4 text-xs font-semibold">
                  {tag}
                  <button type="button" onClick={() => removeLove(tag)} className="hover:text-white transition-colors">
                    <IconX size={14} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newLove}
                onChange={(e) => setNewLove(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLove())}
                className={inputClass}
                placeholder="Add an interest..."
              />
              <button
                type="button"
                onClick={addLove}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <IconPlus size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Side column - Images */}
        <div className="space-y-6">
          {/* Main Photo */}
          <div className={fieldBox}>
            <label className={labelClass}>Main Photo</label>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center group">
              {form.image_url ? (
                <>
                  <Image src={form.image_url} alt="Main" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer p-4 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                      <IconUpload size={24} />
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "image")} />
                    </label>
                  </div>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center gap-2 text-white/30 hover:text-white transition-all">
                  <IconPhoto size={48} strokeWidth={1} />
                  <span className="text-xs font-medium uppercase tracking-widest">Upload Photo</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "image")} />
                </label>
              )}
              {uploading.image && (
                <div className="absolute inset-0 bg-navy-900/80 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-teal-5 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <div className="mt-4">
              <label className="text-[10px] text-white/30 uppercase block mb-1">Or direct URL</label>
              <input
                type="text"
                value={form.image_url}
                onChange={(e) => update("image_url", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/60 focus:outline-none"
                placeholder="/Mark-front.webp"
              />
            </div>
          </div>

          {/* Disney Photo */}
          <div className={fieldBox}>
            <label className={labelClass}>Disney Alter-Ego</label>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center group">
              {form.disney_image_url ? (
                <>
                  <Image src={form.disney_image_url} alt="Disney" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer p-4 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                      <IconUpload size={24} />
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "disney")} />
                    </label>
                  </div>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center gap-2 text-white/30 hover:text-white transition-all">
                  <IconPhoto size={48} strokeWidth={1} />
                  <span className="text-xs font-medium uppercase tracking-widest">Upload Photo</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "disney")} />
                </label>
              )}
              {uploading.disney && (
                <div className="absolute inset-0 bg-navy-900/80 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-teal-5 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <div className="mt-4">
              <label className="text-[10px] text-white/30 uppercase block mb-1">Or direct URL</label>
              <input
                type="text"
                value={form.disney_image_url}
                onChange={(e) => update("disney_image_url", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white/60 focus:outline-none"
                placeholder="/mark-funny.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
