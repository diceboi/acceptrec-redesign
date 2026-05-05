"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientRecord, updateClientRecord } from "@/lib/clients-data";
import { IconDeviceFloppy, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors";
const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2";

export function ClientEditor({ client, isNew }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    client_code: client?.client_code || "",
    name: client?.name || "",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isNew) {
        await createClientRecord(form);
      } else {
        await updateClientRecord(client.id, form);
      }
      router.push("/admin/clients");
      router.refresh();
    } catch (err) {
      alert("Error saving: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-[#0d111a]">
      <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/clients" className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
            <IconArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-white">{isNew ? "New Client" : "Edit Client"}</h1>
            <p className="text-xs text-white/40 mt-0.5">{isNew ? "Add a new client to the database" : `Editing: ${client.name}`}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <IconDeviceFloppy size={16} strokeWidth={2.5} />
          {saving ? "Saving..." : "Save Client"}
        </button>
      </div>

      <div className="p-6 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Client Code</label>
            <input
              type="text"
              value={form.client_code}
              onChange={(e) => update("client_code", e.target.value.toUpperCase())}
              className={`${inputClass} font-mono`}
              placeholder="e.g. API001"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
              placeholder="e.g. APEX"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}
