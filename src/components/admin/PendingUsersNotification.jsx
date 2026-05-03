"use client";

import { useState } from "react";
import { IconX, IconUserPlus, IconCheck } from "@tabler/icons-react";
import { approveAllUsers } from "@/lib/users-data";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function PendingUsersNotification({ pendingUsers }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isApproving, setIsApproving] = useState(false);
  const router = useRouter();

  if (!pendingUsers || pendingUsers.length === 0 || !isVisible) {
    return null;
  }

  const handleApproveAll = async () => {
    setIsApproving(true);
    try {
      await approveAllUsers();
      setIsVisible(false);
      router.refresh();
    } catch (error) {
      alert("Failed to approve users: " + error.message);
      setIsApproving(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[350px] bg-navy-900 border border-teal-5/30 rounded-2xl p-5 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
      >
        <IconX size={18} />
      </button>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-teal-5/20 flex items-center justify-center shrink-0">
          <IconUserPlus size={20} className="text-teal-4" />
        </div>
        
        <div>
          <h3 className="text-white font-bold text-sm mb-1">Pending Registrations</h3>
          <p className="text-white/60 text-xs mb-3">
            {pendingUsers.length} user{pendingUsers.length > 1 ? 's are' : ' is'} waiting for approval.
          </p>

          <div className="space-y-1 mb-4 max-h-[100px] overflow-y-auto pr-2">
            {pendingUsers.map(user => (
              <div key={user.id} className="text-xs text-white/40 font-mono truncate">
                {user.email}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleApproveAll}
              disabled={isApproving}
              className="flex-1 flex items-center justify-center gap-1.5 bg-teal-5/10 hover:bg-teal-5/20 text-teal-4 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isApproving ? "Approving..." : (
                <>
                  <IconCheck size={14} strokeWidth={3} />
                  Approve All
                </>
              )}
            </button>
            <Link 
              href="/admin/users"
              onClick={() => setIsVisible(false)}
              className="px-3 py-2 bg-white/5 hover:bg-white/10 text-white/70 rounded-xl text-xs font-semibold transition-colors"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
