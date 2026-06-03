"use client";

import { useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import { useResetPassword } from "@/hooks/useSignup";

export default function ResetPasswordPage() {
  const router = useRouter();

  const params = useParams();

  const token = params?.token as string;

  const resetPasswordMutation = useResetPassword();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  // ========================================
  // HANDLE RESET PASSWORD
  // ========================================

  const handleResetPassword = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    try {
      setError("");

      // ========================================
      // VALIDATION
      // ========================================

      if (!password || !confirmPassword) {
        setError("All fields are required");

        return;
      }

      if (password.length < 8) {
        setError("Password must be at least 8 characters");

        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");

        return;
      }

      // ========================================
      // API CALL
      // ========================================

      const response =
        await resetPasswordMutation.mutateAsync({
          token,

          payload: {
            password,
          },
        });

      toast.success(
        response.message || "Password reset successful",
      );

      // ========================================
      // REDIRECT LOGIN
      // ========================================

      setTimeout(() => {
        router.push("/sign-in");
      }, 1500);
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong",
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
              <h2 className="text-3xl font-black text-white">
                Gleefix
              </h2>

              <p className="text-sm text-blue-100 mt-1">
                AI Hiring Platform
              </p>
            </div>
          </div>

          {/* HERO */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm text-blue-100 mb-6">
              Secure Password Reset
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              Create New
              <br />
              Password.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Your new password should be strong, secure, and easy
              to remember for safe access to your Gleefix account.
            </p>

            {/* SECURITY POINTS */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <FiCheckCircle className="text-white" />
                </div>

                <p className="text-blue-100">
                  Minimum 8 characters required
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4">
                <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <FiCheckCircle className="text-white" />
                </div>

                <p className="text-blue-100">
                  Use numbers & special characters
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
                <FiLock className="text-white text-3xl" />
              </div>

              <h2 className="text-4xl font-black text-slate-900">
                Reset Password
              </h2>

              <p className="text-slate-500 mt-3">
                Create your new secure password
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleResetPassword}
              className="space-y-5"
            >
              {/* PASSWORD */}
              <div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-14 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-14 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* PASSWORD STRENGTH */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-slate-700 mb-3">
                  Password Requirements
                </p>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500" />
                    Minimum 8 characters
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500" />
                    Include uppercase & lowercase
                  </div>

                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500" />
                    Include number & special character
                  </div>
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600 text-center">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={resetPasswordMutation.isPending}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {resetPasswordMutation.isPending
                  ? "Resetting..."
                  : "Reset Password"}

                <FiArrowRight />
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm">
                Remember your password?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-[#1E4D7B] hover:underline"
                >
                  Back to Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}