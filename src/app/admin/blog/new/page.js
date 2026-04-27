import { BlogEditor } from "@/components/admin/BlogEditor";
import { getCategories, getTags } from "@/lib/blog-data";

export default async function NewBlogPostPage() {
  const [categories, tags] = await Promise.all([getCategories(), getTags()]);

  return <BlogEditor isNew categories={categories} tags={tags} />;
}
