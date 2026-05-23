"use client";

import Link from "next/link";
import Image from "next/image";

import { AlertTriangle, RefreshCcw, ShieldX } from "lucide-react";

export default function EmailVerificationFailedPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F4F7FB] flex">
      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B]">
        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full bg-red-400/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full bg-orange-400/20 blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20 backdrop-blur-md text-sm text-red-100 mb-6">
              Verification Failed
            </div>

            <h1 className="text-6xl font-black leading-tight text-white">
              Link Expired
              <br />
              Or Invalid.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The verification link may have expired, already been used, or is
              no longer valid.
            </p>

            {/* INFO */}
            <div className="mt-12 bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center shrink-0">
                  <AlertTriangle className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Verification Unsuccessful
                  </h3>

                  <p className="text-slate-300 leading-7 mt-2">
                    Please request a new verification email and try again.
                  </p>
                </div>
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
              <h2 className="text-2xl font-black text-[#102C4A]">Gleefix</h2>

              <p className="text-xs text-slate-500">AI Hiring Platform</p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white border border-slate-200/80 rounded-[32px] shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-8 lg:p-10">
            {/* ICON */}
            <div className="mx-auto w-20 h-20 rounded-3xl bg-red-50 border border-red-100 flex items-center justify-center shadow-sm">
              <ShieldX className="text-red-500" size={38} />
            </div>

            {/* TITLE */}
            <div className="text-center mt-8">
              <h1 className="text-4xl font-black text-slate-900">
                Verification Failed
              </h1>

              <p className="text-slate-500 leading-8 mt-5 text-lg">
                The email verification link is invalid or has expired.
              </p>
            </div>

            {/* INFO BOX */}
            <div className="mt-8 rounded-3xl border border-red-100 bg-red-50/60 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-red-100 flex items-center justify-center shrink-0">
                  <AlertTriangle size={22} className="text-red-500" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    What Can You Do?
                  </h3>

                  <p className="text-slate-500 leading-7 mt-2">
                    Request a fresh verification email and continue the signup
                    process securely.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 space-y-4">
              <Link
                href="/account-created"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20"
              >
                <RefreshCcw size={18} />
                Resend Verification Email
              </Link>

              <Link
                href="/sign-in"
                className="w-full h-14 rounded-2xl border border-slate-200 bg-white text-slate-700 font-semibold flex items-center justify-center hover:bg-slate-50 transition-all duration-200"
              >
                Back to Sign In
              </Link>
            </div>

            {/* FOOTER */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 leading-7">
                Still facing issues? Contact support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
