import { getUsers } from "@/lib/users-data";
import { UserList } from "@/components/admin/UserList";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Manage Users | Admin",
};

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
    
  if (profile?.role !== 'admin') {
    redirect("/admin");
  }

  const users = await getUsers();

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">User Management</h1>
        <p className="text-white/40 text-sm">Approve new users and manage administrative roles.</p>
      </div>

      <UserList initialUsers={users} currentUserId={user.id} />
    </div>
  );
}
