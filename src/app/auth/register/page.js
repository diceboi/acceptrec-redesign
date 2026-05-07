"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconMail, IconLock, IconUserPlus } from "@tabler/icons-react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || location.origin}/auth/callback`,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      router.push("/auth/pending");
      router.refresh();
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Request Access</h1>
        <p className="text-sm text-white/50">Register for an admin account</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-5">
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
              placeholder="name@acceptrec.co.uk"
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
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-bold py-3.5 rounded-xl hover:bg-white/20 transition-colors disabled:opacity-50 mt-4"
        >
          {loading ? (
            "Registering..."
          ) : (
            <>
              <IconUserPlus size={18} strokeWidth={2.5} />
              Register
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-xs text-white/40">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-teal-4 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
