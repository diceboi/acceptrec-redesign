import { AdminHeader } from "@/components/admin/AdminHeader";
import { CategoryManager } from "@/components/admin/CategoryManager";
import { getCategories } from "@/lib/blog-data";

export default async function AdminBlogCategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Blog Categories"
        subtitle="Organize your blog posts into categories"
      />
      <CategoryManager categories={categories} />
    </div>
  );
}
