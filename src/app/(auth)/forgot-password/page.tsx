"use client";

import { useState } from "react";

import Image from "next/image";

import toast from "react-hot-toast";

import { FiMail, FiShield, FiArrowRight } from "react-icons/fi";

import { useForgotPassword } from "@/hooks/useSignup";
import  Link  from "next/link";

export default function ForgotPasswordPage() {
  const [value, setValue] = useState("");

  const [error, setError] = useState("");

  const forgotPasswordMutation = useForgotPassword();

  // ========================================
  // HANDLE FORGOT PASSWORD
  // ========================================

  const handleForgotPassword = async () => {
    try {
      if (!value) {
        setError("Please enter your email");

        return;
      }

      setError("");

      const response = await forgotPasswordMutation.mutateAsync({
        email: value,
      });

      toast.success(
        response.message || "Password reset link sent successfully",
      );

      // TEST ONLY
      console.log(response.link);
    } catch (error: any) {
      setError(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F4F7FB] flex">
      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B]">
        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full p-14">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
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

              <p className="text-sm text-blue-100 mt-1">
                Where Ambitions Align !
              </p>
            </div>
            </Link>
          </div>

          {/* HERO */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm text-blue-100 mb-6">
              Secure Account Recovery
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              Reset Your
              <br />
              Password.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Recover access to your Gleefix account securely using email
              verification.
            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-14">
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-white">256-bit</h3>

                <p className="text-sm text-blue-100 mt-2">
                  Secure Encryption
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-white">15 Min</h3>

                <p className="text-sm text-blue-100 mt-2">
                  Secure Reset Link
                </p>
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-lg">
          {/* MOBILE LOGO */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <Image
              src="/gleefix_logo.svg"
              alt="Gleefix"
              width={55}
              height={55}
              priority
            />

            <div>
              <h2 className="text-2xl font-black text-[#102C4A]">
                Gleefix
              </h2>

              <p className="text-xs text-slate-500">
                AI Hiring Platform
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white border border-slate-200/80 rounded-[32px] shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-8 lg:p-10">
            {/* HEADER */}
            <div className="text-center mb-10">
              <div className="mx-auto w-18 h-18 rounded-3xl bg-gradient-to-br from-[#1E4D7B] to-[#0F2B46] flex items-center justify-center shadow-xl mb-5">
                <FiShield className="text-white text-3xl" />
              </div>

              <h2 className="text-4xl font-black text-slate-900">
                Forgot Password
              </h2>

              <p className="text-slate-500 mt-3">
                Enter your email to receive a password reset link
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-5">
              {/* INPUT */}
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleForgotPassword}
                disabled={forgotPasswordMutation.isPending}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {forgotPasswordMutation.isPending
                  ? "Sending..."
                  : "Send Reset Link"}

                <FiArrowRight />
              </button>

              {/* SUCCESS MESSAGE */}
              {forgotPasswordMutation.isSuccess && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-600 text-center">
                  Password reset link has been sent to your email
                </div>
              )}

              {/* ERROR */}
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 text-center">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}