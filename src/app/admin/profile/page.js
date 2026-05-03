import { createClient } from "@/utils/supabase/server";
import { ProfileEditor } from "@/components/admin/ProfileEditor";

export const metadata = {
  title: "My Profile | Admin",
};

export default async function AdminProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">My Profile</h1>
        <p className="text-white/40 text-sm">Manage your account settings and change your password.</p>
      </div>

      <ProfileEditor user={user} profile={profile} />
    </div>
  );
}
