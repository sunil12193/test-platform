"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { FiUser, FiMail, FiPhone, FiLock, FiArrowRight } from "react-icons/fi";

import { useSignup } from "@/hooks/useSignup";

export default function SignupPage() {
  const router = useRouter();

  const signupMutation = useSignup();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  // ========================================
  // HANDLE INPUT
  // ========================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidationErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ========================================
  // VALIDATION
  // ========================================

  const validateFields = () => {
    let isValid = true;

    const errors = {
      userName: "",
      email: "",
      phone: "",
      password: "",
    };

    const trimmedName = formData.userName.trim();

    if (!trimmedName) {
      errors.userName = "Full name is required";

      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      errors.email = "Email is required";

      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email";

      isValid = false;
    }

    const phoneRegex = /^[6-9][0-9]{9}$/;

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";

      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Enter valid 10-digit number";

      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";

      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";

      isValid = false;
    }

    setValidationErrors(errors);

    return isValid;
  };

  // ========================================
  // HANDLE SIGNUP
  // ========================================

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      await signupMutation.mutateAsync(formData);

      localStorage.setItem("signupEmail", formData.email);

      router.push(
        `/account-created?email=${encodeURIComponent(formData.email)}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex overflow-hidden">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B]">
        {/* GRADIENT BLOBS */}
        <div className="absolute -top-30 -left-30 h-75 w-75 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -bottom-30 -right-30 h-75 w-75 rounded-full bg-cyan-400/20 blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full w-full p-14">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-lg">
              <Image
                src="/logo.svg"
                alt="Gleefix"
                width={60}
                height={60}
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">Gleefix</h2>

              <p className="text-blue-100 text-sm mt-1">
                Connecting Talent, Building Futures
              </p>
            </div>
          </div>

          {/* HERO */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm text-blue-100 mb-6">
              AI Powered Hiring Platform
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              Hire Smarter.
              <br />
              Assess Faster.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Streamline recruitment with AI-powered assessments, intelligent
              candidate evaluation, proctoring, and enterprise-grade hiring
              workflows.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">12K+</h3>

                <p className="text-sm text-blue-100 mt-2">
                  Candidates Assessed
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">98%</h3>

                <p className="text-sm text-blue-100 mt-2">Fraud Accuracy</p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">350+</h3>

                <p className="text-sm text-blue-100 mt-2">Enterprise Clients</p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between text-sm text-slate-300">
            <p>© 2026 Gleefix Technologies</p>

            <div className="flex items-center gap-5">
              <Link href="#">Privacy</Link>

              <Link href="#">Terms</Link>

              <Link href="#">Support</Link>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
        <div className="w-full max-w-xl">
          {/* FORM CARD */}
          <div className="bg-white border border-slate-200/80 rounded-[28px] shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-6 lg:p-10">
            {/* TOP */}
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-xl mb-5">
                <Image
                  src="/logo.svg"
                  alt="Gleefix"
                  width={36}
                  height={36}
                  priority
                />
              </div>

              <h2 className="text-4xl font-black text-slate-900">
                Create Account
              </h2>

              <p className="text-slate-500 mt-3">
                Start your AI hiring journey with Gleefix
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSignup} className="space-y-5" noValidate>
              {/* NAME */}
              <div>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type="text"
                    name="userName"
                    placeholder="Full Name"
                    value={formData.userName}
                    onChange={handleChange}
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl border bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100 ${
                      validationErrors.userName
                        ? "border-red-400"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {validationErrors.userName && (
                  <p className="text-red-500 text-sm mt-2 ml-1">
                    {validationErrors.userName}
                  </p>
                )}
              </div>

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
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl border bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100 ${
                      validationErrors.email
                        ? "border-red-400"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-2 ml-1">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl border bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100 ${
                      validationErrors.phone
                        ? "border-red-400"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {validationErrors.phone && (
                  <p className="text-red-500 text-sm mt-2 ml-1">
                    {validationErrors.phone}
                  </p>
                )}
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
                    className={`w-full h-14 pl-12 pr-4 rounded-2xl border bg-slate-50/50 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100 ${
                      validationErrors.password
                        ? "border-red-400"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {validationErrors.password && (
                  <p className="text-red-500 text-sm mt-2 ml-1">
                    {validationErrors.password}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={signupMutation.isPending}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B] text-white font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20 disabled:opacity-60"
              >
                {signupMutation.isPending ? (
                  "Creating Account..."
                ) : (
                  <>
                    Create Account
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-8 text-center">
              <p className="text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-[#1E4D7B] hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
