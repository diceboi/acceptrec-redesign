import { BlogEditor } from "@/components/admin/BlogEditor";
import { getPost, getCategories, getTags } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export default async function EditBlogPostPage({ params }) {
  const { id } = await params;
  const [post, categories, tags] = await Promise.all([
    getPost(id),
    getCategories(),
    getTags(),
  ]);

  if (!post) notFound();

  return <BlogEditor post={post} categories={categories} tags={tags} isNew={false} />;
}
