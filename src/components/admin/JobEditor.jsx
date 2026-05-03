"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createJob, updateJob } from "@/lib/jobs-data";
import { IconDeviceFloppy, IconArrowLeft, IconPlus, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { RichTextEditor } from "./RichTextEditor";

function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
}

function parseHtmlList(html) {
  if (!html) return [];
  const liMatches = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  if (liMatches && liMatches.length > 0) {
    return liMatches
      .map((li) =>
        li
          .replace(/<\/?li[^>]*>/gi, "")
          .replace(/<[^>]+>/g, "")
          .trim()
      )
      .filter(Boolean);
  }
  return html
    .replace(/<[^>]+>/g, " ")
    .split(/[•\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildHtmlList(items) {
  const valid = items.map((i) => i.trim()).filter(Boolean);
  if (valid.length === 0) return "";
  return `<ul>\n${valid.map((i) => `  <li>${i}</li>`).join("\n")}\n</ul>`;
}

function DynamicListInput({ label, value, onChange, placeholder }) {
  const [items, setItems] = useState(() => parseHtmlList(value));

  const updateItems = (newItems) => {
    setItems(newItems);
    onChange(buildHtmlList(newItems));
  };

  const handleAdd = () => {
    updateItems([...items, ""]);
  };

  const handleChange = (index, val) => {
    const newItems = [...items];
    newItems[index] = val;
    updateItems(newItems);
  };

  const handleRemove = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    updateItems(newItems);
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder={placeholder}
            />
            <button
              type="button"
              onClick={() => handleRemove(i)}
              className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer shrink-0"
              title="Remove item"
            >
              <IconX size={18} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-teal-4 bg-teal-5/10 border border-teal-5/20 rounded-xl hover:bg-teal-5/20 transition-colors cursor-pointer"
        >
          <IconPlus size={16} />
          Add Item
        </button>
      </div>
    </div>
  );
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors";
const labelClass =
  "block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2";
const fieldBox =
  "border border-white/5 rounded-2xl p-5 bg-white/[0.02] space-y-4";

export function JobEditor({ job, isNew }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: job?.title || "",
    slug: job?.slug || "",
    location: job?.location || "",
    category: job?.category || "",
    jobType: job?.jobType || "",
    contractType: job?.contractType || "",
    salaryFrom: job?.salaryFrom ?? "",
    salaryTo: job?.salaryTo ?? "",
    salaryFix: job?.salaryFix ?? "",
    shortDescription: job?.shortDescription || "",
    longDescription: job?.longDescription || "",
    requiredSkills: job?.requiredSkills || "",
    dailyDuties: job?.dailyDuties || "",
    benefits: job?.benefits || "",
    shift: stripHtml(job?.shift || ""),
    whatsappNumber: job?.whatsappNumber || "447495995406",
    positions: job?.positions ?? 1,
    published: job?.published ?? true,
  });

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleTitleChange = (val) => {
    update("title", val);
    if (isNew || form.slug === slugify(form.title)) {
      update("slug", slugify(val));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isNew) {
        await createJob(form);
      } else {
        await updateJob(job.id, form);
      }
      router.push("/admin/jobs");
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
          <Link
            href="/admin/jobs"
            className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
          >
            <IconArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-white">
              {isNew ? "New Job" : "Edit Job"}
            </h1>
            <p className="text-xs text-white/40 mt-0.5">
              {isNew ? "Create a new job vacancy" : `Editing: ${job.title}`}
            </p>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <IconDeviceFloppy size={16} strokeWidth={2.5} />
          {saving ? "Saving..." : "Save Job"}
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Main column */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className={labelClass}>Job Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className={inputClass}
              placeholder="e.g. Class 1 HGV Driver"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className={labelClass}>Slug</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => update("slug", e.target.value)}
              className={`${inputClass} font-mono text-white/60`}
              placeholder="class-1-hgv-driver"
            />
          </div>

          {/* Short description */}
          <div>
            <label className={labelClass}>Short Description</label>
            <textarea
              value={form.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Brief one-line summary of the role..."
            />
          </div>

          {/* Required Skills */}
          <DynamicListInput
            label="Required Skills"
            value={form.requiredSkills}
            onChange={(val) => update("requiredSkills", val)}
            placeholder="e.g. Valid Class 1 licence"
          />

          {/* Daily Duties */}
          <DynamicListInput
            label="Daily Duties"
            value={form.dailyDuties}
            onChange={(val) => update("dailyDuties", val)}
            placeholder="e.g. Delivering goods to multiple sites"
          />

          {/* Benefits */}
          <DynamicListInput
            label="Benefits"
            value={form.benefits}
            onChange={(val) => update("benefits", val)}
            placeholder="e.g. Competitive pay rates"
          />

          {/* Long description */}
          <div>
            <label className={labelClass}>Full Description</label>
            <div className="mt-2 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <RichTextEditor
                content={form.longDescription}
                onChange={(html) => update("longDescription", html)}
              />
            </div>
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          {/* Status */}
          <div className={fieldBox}>
            <label className={labelClass}>Status</label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => update("published", e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 rounded-full bg-white/10 peer-checked:bg-teal-5 transition-colors" />
                <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transform peer-checked:translate-x-5 transition-transform" />
              </div>
              <span className="text-sm font-medium text-white">
                {form.published ? "Published" : "Draft"}
              </span>
            </label>
          </div>

          {/* Location & Shift */}
          <div className={fieldBox}>
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
              <label className={labelClass}>Shift</label>
              <input
                type="text"
                value={form.shift}
                onChange={(e) => update("shift", e.target.value)}
                className={inputClass}
                placeholder="Days / Nights / Mixed"
              />
            </div>
          </div>

          {/* Category & Types */}
          <div className={fieldBox}>
            <div>
              <label className={labelClass}>Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className={inputClass}
                placeholder="Driving, Warehouse, Production..."
              />
            </div>
            <div>
              <label className={labelClass}>Job Type</label>
              <select
                value={form.jobType}
                onChange={(e) => update("jobType", e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                <option value="" className="bg-navy-900">Select...</option>
                <option value="Full Time" className="bg-navy-900">Full Time</option>
                <option value="Part Time" className="bg-navy-900">Part Time</option>
                <option value="Temporary" className="bg-navy-900">Temporary</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Contract Type</label>
              <select
                value={form.contractType}
                onChange={(e) => update("contractType", e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                <option value="" className="bg-navy-900">Select...</option>
                <option value="Temporary" className="bg-navy-900">Temporary</option>
                <option value="Permanent" className="bg-navy-900">Permanent</option>
                <option value="Contract" className="bg-navy-900">Contract</option>
              </select>
            </div>
          </div>

          {/* Salary */}
          <div className={fieldBox}>
            <label className={labelClass}>Salary</label>
            <div>
              <label className="block text-[11px] text-white/30 mb-1">Fixed rate (£)</label>
              <input
                type="number"
                step="0.01"
                value={form.salaryFix}
                onChange={(e) => update("salaryFix", e.target.value)}
                className={inputClass}
                placeholder="e.g. 13.75"
              />
            </div>
            <div className="text-[11px] text-white/30 text-center">— or range —</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-white/30 mb-1">From (£)</label>
                <input
                  type="number"
                  step="0.01"
                  value={form.salaryFrom}
                  onChange={(e) => update("salaryFrom", e.target.value)}
                  className={inputClass}
                  placeholder="12.00"
                />
              </div>
              <div>
                <label className="block text-[11px] text-white/30 mb-1">To (£)</label>
                <input
                  type="number"
                  step="0.01"
                  value={form.salaryTo}
                  onChange={(e) => update("salaryTo", e.target.value)}
                  className={inputClass}
                  placeholder="15.00"
                />
              </div>
            </div>
          </div>

          {/* Positions & WhatsApp */}
          <div className={fieldBox}>
            <div>
              <label className={labelClass}>Open Positions</label>
              <input
                type="number"
                min={1}
                value={form.positions}
                onChange={(e) => update("positions", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>WhatsApp Number</label>
              <input
                type="text"
                value={form.whatsappNumber}
                onChange={(e) => update("whatsappNumber", e.target.value)}
                className={inputClass}
                placeholder="447495995406"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
