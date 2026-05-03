"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconMail, IconLock, IconLogin } from "@tabler/icons-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
        <p className="text-sm text-white/50">Sign in to manage content</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium text-center">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <IconMail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="admin@acceptrec.co.uk"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Password
          </label>
          <div className="relative">
            <IconLock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-teal-5/50 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-teal-5 text-navy-900 font-bold py-3.5 rounded-xl hover:bg-teal-4 transition-colors disabled:opacity-50 mt-4"
        >
          {loading ? (
            "Signing in..."
          ) : (
            <>
              <IconLogin size={18} strokeWidth={2.5} />
              Sign In
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-xs text-white/40">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-teal-4 hover:underline">
          Request access
        </Link>
      </div>
    </div>
  );
}
