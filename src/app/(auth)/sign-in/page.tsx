"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

import { useSignin } from "@/hooks/useSignup";

export default function SigninPage() {
  const router = useRouter();

  const signinMutation = useSignin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // ========================================
  // HANDLE INPUT
  // ========================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ========================================
  // SIGN IN
  // ========================================

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const response = await signinMutation.mutateAsync(formData);

      const token = response?.data?.accessToken;

      const user = response?.data?.user;

      // SAVE ACCESS TOKEN
      if (token) {
        localStorage.setItem("accessToken", token);
      }

      // SAVE USER
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      // SAVE EMAIL
      localStorage.setItem("signinEmail", formData.email);

      // REDIRECT
      router.push("/dashboard");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid email or password";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F4F7FB] flex">
      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B]">
        {/* GLOW */}
        <div className="absolute -top-30 -left-30 w-75 h-75 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute -bottom-30 -right-30 w-75 h-75 rounded-full bg-cyan-400/20 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full p-14">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-xl">
              <Image
                src="/logo.svg"
                alt="Gleefix"
                width={60}
                height={60}
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">Gleefix</h2>

              <p className="text-sm text-blue-100 mt-1">AI Hiring Platform</p>
            </div>
          </div>

          {/* HERO */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm text-blue-100 mb-6">
              Enterprise Recruitment Suite
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              Welcome
              <br />
              Back.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Continue managing candidates, assessments, interviews, and
              enterprise hiring workflows from your Gleefix dashboard.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">12K+</h3>

                <p className="text-sm text-blue-100 mt-2">Candidates</p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">98%</h3>

                <p className="text-sm text-blue-100 mt-2">Accuracy</p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">350+</h3>

                <p className="text-sm text-blue-100 mt-2">Companies</p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="text-sm text-slate-300">
            © 2026 Gleefix Technologies
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
        <div className="w-full max-w-xl">
          {/* FORM CARD */}
          <div className="bg-white border border-slate-200/80 rounded-[28px] shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-6 sm:p-7 lg:p-10">
            {/* HEADER */}
            <div className="text-center mb-8">
              {/* SINGLE LOGO */}
              <div className="mx-auto w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-xl mb-5">
                <Image
                  src="/logo.svg"
                  alt="Gleefix"
                  width={36}
                  height={36}
                  priority
                />
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                Sign In
              </h2>

              <p className="text-slate-500 mt-3 text-sm lg:text-base">
                Access your Gleefix dashboard
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSignin} className="space-y-4">
              {/* EMAIL */}
              <div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-13 lg:h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full h-13 lg:h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* FORGOT */}
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-slate-500 hover:text-[#1E4D7B] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-13 lg:h-14 rounded-2xl bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B] text-white font-semibold text-base lg:text-lg flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20 disabled:opacity-60"
              >
                {loading ? (
                  "Signing In..."
                ) : (
                  <>
                    Sign In
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-7 text-center">
              <p className="text-slate-500 text-sm lg:text-base">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-[#1E4D7B] hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
