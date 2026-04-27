"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "./RichTextEditor";
import { createPost, updatePost } from "@/lib/blog-data";
import { IconDeviceFloppy, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function BlogEditor({ post, categories, tags, isNew }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    coverImage: post?.coverImage || "",
    category: post?.category || "",
    tags: post?.tags || [],
    author: post?.author || "",
    published: post?.published ?? false,
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleTitleChange = (val) => {
    update("title", val);
    if (isNew || form.slug === slugify(form.title)) {
      update("slug", slugify(val));
    }
  };

  const toggleTag = (tagSlug) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tagSlug)
        ? prev.tags.filter((t) => t !== tagSlug)
        : [...prev.tags, tagSlug],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isNew) {
        await createPost(form);
      } else {
        await updatePost(post.id, form);
      }
      router.push("/admin/blog");
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
          <Link href="/admin/blog" className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
            <IconArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-white">{isNew ? "New Post" : "Edit Post"}</h1>
            <p className="text-xs text-white/40 mt-0.5">{isNew ? "Create a new blog article" : `Editing: ${post.title}`}</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-5 text-navy-900 text-sm font-semibold hover:bg-teal-4 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <IconDeviceFloppy size={16} strokeWidth={2.5} />
          {saving ? "Saving..." : "Save Post"}
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Main column */}
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="Post title"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Slug</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => update("slug", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-mono text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="post-url-slug"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors resize-none"
              placeholder="Brief description of the post..."
            />
          </div>

          {/* Content (Rich Text) */}
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Content</label>
            <RichTextEditor content={form.content} onChange={(html) => update("content", html)} />
          </div>
        </div>

        {/* Side column */}
        <div className="space-y-6">
          {/* Publish toggle */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Status</label>
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

          {/* Cover Image */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Cover Image URL</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => update("coverImage", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="/blog/my-image.jpg"
            />
          </div>

          {/* Author */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Author</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => update("author", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="Author name"
            />
          </div>

          {/* Category */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Category</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-5/50 transition-colors appearance-none"
            >
              <option value="" className="bg-navy-900">Select category...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug} className="bg-navy-900">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const isSelected = form.tags.includes(tag.slug);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.slug)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-teal-5/20 text-teal-4 border border-teal-5/30"
                        : "bg-white/5 text-white/40 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {tag.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
