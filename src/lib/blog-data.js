"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// ─── Public Queries ─────────────────────────────────────────────────────────

export async function getPublicPosts(page = 1, limit = 12, categorySlug = null) {
  const supabase = await createClient();
  let query = supabase
    .from("blogs")
    .select("*, categories:blog_categories(name, slug), tags:blog_post_tags(blog_tags(name, slug))", { count: "exact" })
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (categorySlug) {
    query = query.eq("category_slug", categorySlug);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching public posts:", error);
    return { posts: [], count: 0 };
  }

  const posts = data.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.cover_image,
    category: post.categories?.name,
    categorySlug: post.category_slug,
    author: post.author,
    createdAt: post.created_at,
    tags: post.tags?.map((t) => t.blog_tags).filter(Boolean) || [],
  }));

  return { posts, count };
}

export async function getPostBySlug(slug) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*, categories:blog_categories(name, slug), tags:blog_post_tags(blog_tags(name, slug))")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) {
    console.error("Error fetching post by slug:", error);
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.cover_image,
    category: data.categories?.name,
    categorySlug: data.category_slug,
    author: data.author,
    createdAt: data.created_at,
    tags: data.tags?.map((t) => t.blog_tags).filter(Boolean) || [],
    seoTitle: data.seo_title,
    seoDescription: data.seo_description,
    seoKeywords: data.seo_keywords,
    ogImage: data.og_image,
    canonicalUrl: data.canonical_url,
  };
}

export async function getPublicCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .select("name, slug")
    .order("name", { ascending: true });

  if (error) return [];
  return data;
}

// ─── Admin Queries (Posts) ────────────────────────────────────────────────

export async function getPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*, categories:blog_categories(name, slug), tags:blog_post_tags(blog_tags(name, slug))")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
  
  // Transform data to match previous JSON structure
  return data.map(post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    category: post.category_slug,
    author: post.author,
    published: post.published,
    createdAt: post.created_at,
    updatedAt: post.updated_at,
    tags: post.tags?.map(t => t.blog_tags?.slug).filter(Boolean) || [],
    seoTitle: post.seo_title,
    seoDescription: post.seo_description,
    seoKeywords: post.seo_keywords,
    ogImage: post.og_image,
    canonicalUrl: post.canonical_url,
  }));
}

export async function getPost(id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*, categories:blog_categories(name, slug), tags:blog_post_tags(blog_tags(name, slug))")
    .eq("id", Number(id))
    .single();

  if (error || !data) {
    console.error("Error fetching post:", error);
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    coverImage: data.cover_image,
    category: data.category_slug,
    author: data.author,
    published: data.published,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    tags: data.tags?.map(t => t.blog_tags?.slug).filter(Boolean) || [],
    seoTitle: data.seo_title,
    seoDescription: data.seo_description,
    seoKeywords: data.seo_keywords,
    ogImage: data.og_image,
    canonicalUrl: data.canonical_url,
  };
}

export async function createPost(post) {
  const supabase = await createClient();
  
  // 1. Insert post
  const { data: newPost, error } = await supabase
    .from("blogs")
    .insert({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      cover_image: post.coverImage,
      category_slug: post.category,
      author: post.author,
      published: post.published,
      seo_title: post.seoTitle,
      seo_description: post.seoDescription,
      seo_keywords: post.seoKeywords,
      og_image: post.ogImage,
      canonical_url: post.canonicalUrl,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  // 2. Insert tags
  if (post.tags && post.tags.length > 0) {
    const tagInserts = post.tags.map(tagSlug => ({
      blog_id: newPost.id,
      tag_slug: tagSlug
    }));
    await supabase.from("blog_post_tags").insert(tagInserts);
  }

  revalidatePath("/admin/blog");
  return newPost;
}

export async function updatePost(id, updates) {
  const supabase = await createClient();

  // 1. Update post
  const { error } = await supabase
    .from("blogs")
    .update({
      title: updates.title,
      slug: updates.slug,
      excerpt: updates.excerpt,
      content: updates.content,
      cover_image: updates.coverImage,
      category_slug: updates.category,
      author: updates.author,
      published: updates.published,
      updated_at: new Date().toISOString(),
      seo_title: updates.seoTitle,
      seo_description: updates.seoDescription,
      seo_keywords: updates.seoKeywords,
      og_image: updates.ogImage,
      canonical_url: updates.canonicalUrl,
    })
    .eq("id", Number(id));

  if (error) throw new Error(error.message);

  // 2. Update tags (Delete old, insert new)
  if (updates.tags) {
    await supabase.from("blog_post_tags").delete().eq("blog_id", Number(id));
    
    if (updates.tags.length > 0) {
      const tagInserts = updates.tags.map(tagSlug => ({
        blog_id: Number(id),
        tag_slug: tagSlug
      }));
      await supabase.from("blog_post_tags").insert(tagInserts);
    }
  }

  revalidatePath("/admin/blog");
  return { success: true };
}

export async function deletePost(id) {
  const supabase = await createClient();
  const { error } = await supabase.from("blogs").delete().eq("id", Number(id));
  
  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog");
  return { success: true };
}

// ─── Admin Categories ────────────────────────────────────────────────────────

export async function getCategories() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name", { ascending: true });

  if (error) return [];
  return data;
}

export async function createCategory(cat) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .insert({ name: cat.name, slug: cat.slug })
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-categories");
  return data;
}

export async function updateCategory(id, updates) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_categories")
    .update({ name: updates.name, slug: updates.slug })
    .eq("id", Number(id))
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-categories");
  return data;
}

export async function deleteCategory(id) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_categories").delete().eq("id", Number(id));
  
  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-categories");
  return { success: true };
}

// ─── Admin Tags ──────────────────────────────────────────────────────────────

export async function getTags() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_tags")
    .select("*")
    .order("name", { ascending: true });

  if (error) return [];
  return data;
}

export async function createTag(tag) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_tags")
    .insert({ name: tag.name, slug: tag.slug })
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-tags");
  return data;
}

export async function updateTag(id, updates) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_tags")
    .update({ name: updates.name, slug: updates.slug })
    .eq("id", Number(id))
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-tags");
  return data;
}

export async function deleteTag(id) {
  const supabase = await createClient();
  const { error } = await supabase.from("blog_tags").delete().eq("id", Number(id));
  
  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog-tags");
  return { success: true };
}
