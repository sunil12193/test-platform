"use client";

import Image from "next/image";

import { useSearchParams } from "next/navigation";

import { CheckCircle2, Mail } from "lucide-react";

export default function AccountCreated() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-[#F4F7FB] relative flex items-center justify-center p-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-5xl bg-white border border-slate-200/80 rounded-[36px] shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B] p-10 lg:p-14 flex flex-col justify-between">
            {/* GLOW */}
            <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-cyan-300/10 blur-3xl" />

            {/* LOGO */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <Image
                  src="/logo.svg"
                  alt="Gleefix"
                  width={55}
                  height={55}
                  priority
                />
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">Gleefix</h2>

                <p className="text-blue-100 text-sm">AI Hiring Platform</p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 py-16">
              {/* SUCCESS ICON */}
              <div className="w-24 h-24 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="text-white" size={34} />
                </div>
              </div>

              {/* TITLE */}
              <h1 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-white">
                Account Created Successfully
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-300 max-w-lg">
                Your account has been created successfully. Please verify your
                email address to activate your account and continue using the
                platform.
              </p>
            </div>

            {/* FOOTER */}
            <div className="relative z-10 text-sm text-slate-300">
              © 2026 Gleefix Technologies
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* MAIL ICON */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1E4D7B] to-[#0F2B46] text-white flex items-center justify-center shadow-2xl">
              <Mail size={34} />
            </div>

            {/* TITLE */}
            <h2 className="mt-8 text-4xl font-black text-slate-900 leading-tight">
              Check Your Inbox
            </h2>

            <p className="mt-5 text-slate-500 leading-8 text-lg">
              We've sent a verification link to your registered email address.
            </p>

            {/* EMAIL CARD */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-wide text-slate-500">
                Verification Email Sent To
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 break-all">
                {email || "your-email@example.com"}
              </h3>
            </div>

            {/* INFO */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />

                <p className="text-sm text-slate-500 leading-7">
                  Click the verification link inside your email to activate your
                  account.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />

                <p className="text-sm text-slate-500 leading-7">
                  If you don't receive the email, check your spam or promotions
                  folder.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />

                <p className="text-sm text-slate-500 leading-7">
                  Verification links usually expire after 15-30 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
