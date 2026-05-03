"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { IconLock, IconCheck, IconMail, IconShield } from "@tabler/icons-react";

export function ProfileEditor({ user, profile }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const supabase = createClient();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    const { error: updateError } = await supabase.auth.updateUser({
      password: password
    });

    if (updateError) {
      setError(updateError.message);
    } else {
      setMessage("Password successfully updated!");
      setPassword("");
      setConfirmPassword("");
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Account Details</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-full bg-teal-5/10 flex items-center justify-center shrink-0">
              <IconMail size={20} className="text-teal-4" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Email Address</div>
              <div className="text-white text-sm font-medium">{user.email}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
              <IconShield size={20} className="text-purple-400" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Role</div>
              <div className="text-white text-sm font-medium capitalize">{profile?.role || "Editor"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <form onSubmit={handlePasswordChange} className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-1">Change Password</h2>
        <p className="text-sm text-white/40 mb-6">Update your account password to stay secure.</p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
            {error}
          </div>
        )}
        
        {message && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2">
            <IconCheck size={16} />
            {message}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
              New Password
            </label>
            <div className="relative">
              <IconLock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <IconLock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-5/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-bold py-3 px-6 rounded-xl hover:bg-white/20 transition-colors disabled:opacity-50 mt-4 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
