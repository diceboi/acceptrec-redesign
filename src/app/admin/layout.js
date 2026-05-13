import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getPendingUsers } from "@/lib/users-data";
import { PendingUsersNotification } from "@/components/admin/PendingUsersNotification";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Admin | Accept Recruitment",
  description: "Content management dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({ children }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/auth/login");
  }

  // Check if user is approved via profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_approved, role")
    .eq("id", user.id)
    .single();

  if (!profile?.is_approved) {
    redirect("/auth/pending");
  }

  let pendingUsers = [];
  if (profile.role === "admin") {
    pendingUsers = await getPendingUsers();
  }

  return (
    <div className={`${poppins.className} dark flex h-screen bg-navy-900 text-white overflow-hidden relative`}>
      <AdminSidebar role={profile.role} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      
      {/* Notifications */}
      {profile.role === "admin" && pendingUsers.length > 0 && (
        <PendingUsersNotification pendingUsers={pendingUsers} />
      )}
    </div>
  );
}
