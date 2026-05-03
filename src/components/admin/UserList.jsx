"use client";

import { useState } from "react";
import { toggleUserApproval, updateUserRole } from "@/lib/users-data";
import { useRouter } from "next/navigation";
import { IconCheck, IconX, IconShield, IconUser } from "@tabler/icons-react";

export function UserList({ initialUsers, currentUserId }) {
  const [users, setUsers] = useState(initialUsers);
  const router = useRouter();

  const handleToggleApproval = async (id, currentStatus) => {
    try {
      await toggleUserApproval(id, currentStatus);
      setUsers(users.map(u => u.id === id ? { ...u, is_approved: !currentStatus } : u));
      router.refresh();
    } catch (err) {
      alert("Failed to toggle approval: " + err.message);
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateUserRole(id, newRole);
      setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
      router.refresh();
    } catch (err) {
      alert("Failed to update role: " + err.message);
    }
  };

  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
      <table className="min-w-full text-sm">
        <thead className="bg-white/[0.03]">
          <tr>
            <th className="text-left font-semibold px-6 py-4 text-white/50 text-xs uppercase tracking-wider">Email</th>
            <th className="text-left font-semibold px-6 py-4 text-white/50 text-xs uppercase tracking-wider">Role</th>
            <th className="text-left font-semibold px-6 py-4 text-white/50 text-xs uppercase tracking-wider">Status</th>
            <th className="text-left font-semibold px-6 py-4 text-white/50 text-xs uppercase tracking-wider">Joined</th>
            <th className="text-right font-semibold px-6 py-4 text-white/50 text-xs uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const isMe = user.id === currentUserId;
            
            return (
              <tr key={user.id} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 align-middle">
                  <div className="font-semibold text-white flex items-center gap-2">
                    {user.email}
                    {isMe && <span className="px-2 py-0.5 rounded-md bg-teal-5/20 text-teal-4 text-[10px] uppercase tracking-wider">You</span>}
                  </div>
                  <div className="text-[11px] text-white/30 font-mono mt-0.5">{user.id}</div>
                </td>
                <td className="px-6 py-4 align-middle">
                  <select 
                    value={user.role} 
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    disabled={isMe}
                    className="bg-transparent border-none text-white text-sm focus:outline-none focus:ring-0 disabled:opacity-50 appearance-none cursor-pointer"
                  >
                    <option value="editor" className="bg-navy-900">Editor</option>
                    <option value="admin" className="bg-navy-900">Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4 align-middle">
                  {user.is_approved ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Approved
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 align-middle">
                  <span className="text-white/50 text-xs">
                    {new Date(user.created_at).toLocaleDateString()}
                  </span>
                </td>
                <td className="px-6 py-4 align-middle text-right">
                  {!isMe && (
                    <button
                      onClick={() => handleToggleApproval(user.id, user.is_approved)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        user.is_approved 
                          ? "bg-red-500/10 text-red-400 hover:bg-red-500/20" 
                          : "bg-teal-5/10 text-teal-4 hover:bg-teal-5/20"
                      }`}
                    >
                      {user.is_approved ? "Revoke Access" : "Approve"}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="text-center py-16 text-white/30 text-sm">No users found</div>
      )}
    </div>
  );
}
