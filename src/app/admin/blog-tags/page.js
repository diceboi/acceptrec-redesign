import { AdminHeader } from "@/components/admin/AdminHeader";
import { TagManager } from "@/components/admin/TagManager";
import { getTags } from "@/lib/blog-data";

export default async function AdminBlogTagsPage() {
  const tags = await getTags();

  return (
    <div className="min-h-screen bg-[#0d111a]">
      <AdminHeader
        title="Blog Tags"
        subtitle="Manage tags for blog post filtering"
      />
      <TagManager tags={tags} />
    </div>
  );
}
