import { AdminHeader } from "@/components/admin/AdminHeader";
import { BlogList } from "@/components/admin/BlogList";
import { getPosts, getCategories, getTags } from "@/lib/blog-data";

export default async function AdminBlogPage() {
  const [posts, categories, tags] = await Promise.all([
    getPosts(),
    getCategories(),
    getTags(),
  ]);

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Blog Posts"
        subtitle="Create, edit and publish blog articles"
        actionLabel="New Post"
        actionHref="/admin/blog/new"
      />
      <BlogList posts={posts} categories={categories} tags={tags} />
    </div>
  );
}
