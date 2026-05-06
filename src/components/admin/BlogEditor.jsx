"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor } from "./RichTextEditor";
import { createPost, updatePost } from "@/lib/blog-data";
import { IconDeviceFloppy, IconArrowLeft, IconRefresh, IconUpload, IconPhoto, IconSparkles, IconCheck, IconAlertCircle, IconListCheck } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

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
  const supabase = createClient();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState({ coverImage: false, ogImage: false });
  const [analyzing, setAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState(null);

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
    seoTitle: post?.seoTitle || "",
    seoDescription: post?.seoDescription || "",
    seoKeywords: post?.seoKeywords || "",
    ogImage: post?.ogImage || "",
    canonicalUrl: post?.canonicalUrl || "",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  // Auto-sync SEO Title
  useEffect(() => {
    if (isNew && form.title && !form.seoTitle) {
      update("seoTitle", form.title);
    }
  }, [form.title, isNew]);

  // Auto-sync Canonical URL
  useEffect(() => {
    if (form.slug) {
      const baseUrl = "https://acceptrec.co.uk";
      const fullUrl = `${baseUrl}/blog/${form.slug}`;
      if (isNew || !form.canonicalUrl) {
        update("canonicalUrl", fullUrl);
      }
    }
  }, [form.slug, isNew]);

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

  const handleFileUpload = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading((prev) => ({ ...prev, [type]: true }));
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("blog")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("blog")
        .getPublicUrl(filePath);

      update(type, publicUrl);
      
      // Auto-sync cover image to OG image if OG image is empty
      if (type === "coverImage" && !form.ogImage) {
        update("ogImage", publicUrl);
      }
    } catch (err) {
      alert("Error uploading image: " + err.message);
    } finally {
      setUploading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const refreshSeoTitle = () => update("seoTitle", form.title);
  const refreshCanonical = () => {
    if (form.slug) {
      update("canonicalUrl", `https://acceptrec.co.uk/blog/${form.slug}`);
    }
  };

  const handleAiAnalyze = async () => {
    if (!form.title || !form.content) {
      alert("Please enter a title and some content first.");
      return;
    }

    setAnalyzing(true);
    try {
      const res = await fetch("/api/admin/seo-analyze", {
        method: "POST",
        body: JSON.stringify({
          title: form.title,
          content: form.content,
          excerpt: form.excerpt,
          targetKeyword: form.seoKeywords.split(",")[0]?.trim()
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAiSuggestions(data);
    } catch (err) {
      alert("AI Analysis failed: " + err.message);
    } finally {
      setAnalyzing(false);
    }
  };

  const applyAiSuggestion = (key, value) => {
    update(key, value);
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
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Cover Image</label>
            <div className="space-y-3">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center group">
                {form.coverImage ? (
                  <>
                    <Image src={form.coverImage} alt="Cover" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <label className="cursor-pointer p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                        <IconUpload size={20} />
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "coverImage")} />
                      </label>
                    </div>
                  </>
                ) : (
                  <label className="cursor-pointer flex flex-col items-center gap-2 text-white/30 hover:text-white transition-all">
                    <IconPhoto size={32} strokeWidth={1} />
                    <span className="text-[10px] font-medium uppercase tracking-widest">Upload Cover</span>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "coverImage")} />
                  </label>
                )}
                {uploading.coverImage && (
                  <div className="absolute inset-0 bg-navy-900/80 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-teal-5 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
              <input
                type="text"
                value={form.coverImage}
                onChange={(e) => update("coverImage", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="/blog/my-image.jpg"
              />
            </div>
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

          {/* SEO Settings */}
          <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02] space-y-4">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">SEO Settings</label>
            
            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                Meta Title
                <button type="button" onClick={refreshSeoTitle} className="text-teal-5/50 hover:text-teal-4 transition-colors">
                  <IconRefresh size={12} />
                </button>
              </label>
              <input
                type="text"
                value={form.seoTitle}
                onChange={(e) => update("seoTitle", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="SEO Browser Title"
              />
            </div>

            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-1.5">Meta Description</label>
              <textarea
                value={form.seoDescription}
                onChange={(e) => update("seoDescription", e.target.value)}
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-teal-5/50 transition-colors resize-none"
                placeholder="Meta description for search results..."
              />
            </div>

            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-1.5">Keywords</label>
              <input
                type="text"
                value={form.seoKeywords}
                onChange={(e) => update("seoKeywords", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="word1, word2, word3"
              />
            </div>

            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-1.5">OG Image</label>
              <div className="space-y-3">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center group">
                  {form.ogImage ? (
                    <>
                      <Image src={form.ogImage} alt="OG" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <label className="cursor-pointer p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all">
                          <IconUpload size={20} />
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "ogImage")} />
                        </label>
                      </div>
                    </>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center gap-2 text-white/30 hover:text-white transition-all">
                      <IconPhoto size={32} strokeWidth={1} />
                      <span className="text-[10px] font-medium uppercase tracking-widest">Upload OG Image</span>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "ogImage")} />
                    </label>
                  )}
                  {uploading.ogImage && (
                    <div className="absolute inset-0 bg-navy-900/80 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-teal-5 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={form.ogImage}
                  onChange={(e) => update("ogImage", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-teal-5/50 transition-colors"
                  placeholder="/blog/social-share.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                Canonical URL
                <button type="button" onClick={refreshCanonical} className="text-teal-5/50 hover:text-teal-4 transition-colors">
                  <IconRefresh size={12} />
                </button>
              </label>
              <input
                type="text"
                value={form.canonicalUrl}
                onChange={(e) => update("canonicalUrl", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/20 focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="https://..."
              />
            </div>

            {/* AI SEO Assistant */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleAiAnalyze}
                disabled={analyzing}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-5/10 to-blue-500/10 border border-teal-5/20 text-teal-4 text-xs font-bold hover:from-teal-5/20 hover:to-blue-500/20 transition-all disabled:opacity-50"
              >
                <IconSparkles size={16} className={analyzing ? "animate-pulse" : ""} />
                {analyzing ? "AI is Analyzing..." : "AI SEO Helper"}
              </button>

              {aiSuggestions && (
                <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-teal-5 uppercase tracking-wider flex items-center gap-1.5">
                        <IconListCheck size={12} />
                        AI Recommendations
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-white/40">Readability</span>
                        <span className={`text-[10px] font-bold ${aiSuggestions.readabilityScore > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {aiSuggestions.readabilityScore}%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {aiSuggestions.analysis.map((item, i) => (
                        <div key={i} className="flex gap-2 text-[10px] leading-relaxed">
                          {item.type === "success" ? (
                            <IconCheck size={12} className="text-green-500 shrink-0 mt-0.5" />
                          ) : item.type === "warning" ? (
                            <IconAlertCircle size={12} className="text-yellow-500 shrink-0 mt-0.5" />
                          ) : (
                            <IconAlertCircle size={12} className="text-red-500 shrink-0 mt-0.5" />
                          )}
                          <span className="text-white/70">{item.message}</span>
                        </div>
                      ))}
                    </div>

                    <hr className="border-white/5" />

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-bold text-white/30 uppercase">Suggested Title</span>
                          <button 
                            type="button" 
                            onClick={() => applyAiSuggestion("seoTitle", aiSuggestions.seoTitle)}
                            className="text-[9px] text-teal-5 hover:underline"
                          >
                            Apply
                          </button>
                        </div>
                        <p className="text-[10px] text-white/80 italic">"{aiSuggestions.seoTitle}"</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-bold text-white/30 uppercase">Suggested Description</span>
                          <button 
                            type="button" 
                            onClick={() => applyAiSuggestion("seoDescription", aiSuggestions.seoDescription)}
                            className="text-[9px] text-teal-5 hover:underline"
                          >
                            Apply
                          </button>
                        </div>
                        <p className="text-[10px] text-white/80 italic">"{aiSuggestions.seoDescription}"</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-bold text-white/30 uppercase">Suggested Keywords</span>
                          <button 
                            type="button" 
                            onClick={() => applyAiSuggestion("seoKeywords", aiSuggestions.seoKeywords)}
                            className="text-[9px] text-teal-5 hover:underline"
                          >
                            Apply
                          </button>
                        </div>
                        <p className="text-[10px] text-white/80 italic">{aiSuggestions.seoKeywords}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
