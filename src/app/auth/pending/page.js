"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { IconClock, IconLogout } from "@tabler/icons-react";

export default function PendingPage() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
          <IconClock size={32} className="text-yellow-400" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-white mb-3">Pending Approval</h1>
      <p className="text-sm text-white/50 mb-8 leading-relaxed">
        Your account has been created successfully. <strong>Please check your inbox to verify your email address.</strong> After verifying, an administrator will review your request. You will be able to access the dashboard once approved.
      </p>

      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 bg-white/5 text-white/60 font-medium py-3 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
      >
        <IconLogout size={18} />
        Sign Out
      </button>
    </div>
  );
}
