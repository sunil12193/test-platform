"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface VerifyResponse {
  success: boolean;
  message: string;
}

export default function VerifyEmailPage() {
  const router = useRouter();

  // const searchParams = useSearchParams();

  // const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(true);

  const [message, setMessage] = useState(
    "Your email has been verified successfully. You can now securely access your Gleefix dashboard.",
  );

  return (
    <div className="h-screen overflow-hidden bg-[#F4F7FB] relative flex items-center justify-center p-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-blue-400/20 blur-3xl" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="overflow-hidden rounded-[36px] border border-slate-200/80 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          {/* TOP SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#102C4A] to-[#1E4D7B] px-8 py-10 text-center">
            {/* BLOBS */}
            <div className="absolute top-[-80px] right-[-80px] h-[220px] w-[220px] rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-[-100px] -left-25 h-[220px] w-[220px] rounded-full bg-cyan-300/10 blur-3xl" />

            {/* LOGO */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-xl">
                <Image
                  src="/logo.svg"
                  alt="Gleefix"
                  width={50}
                  height={50}
                  priority
                />
              </div>

              <div className="text-left">
                <h2 className="text-2xl font-black text-white">Gleefix</h2>

                <p className="text-xs text-blue-100">AI Hiring Platform</p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-8 py-10 text-center">
            {/* LOADING */}
            {loading ? (
              <>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-slate-100 border border-slate-200">
                  <Loader2 size={42} className="animate-spin text-slate-700" />
                </div>

                <h1 className="mt-8 text-3xl font-black text-slate-900">
                  Verifying Email
                </h1>

                <p className="mt-4 text-[15px] leading-7 text-slate-500">
                  Please wait while we verify your email address securely.
                </p>
              </>
            ) : (
              <>
                {/* SUCCESS ICON */}
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-[32px] bg-green-50 border border-green-100">
                  <div className="absolute inset-0 rounded-[32px] bg-green-400/10 blur-2xl" />

                  <CheckCircle2
                    size={54}
                    className="relative z-10 text-green-600"
                  />
                </div>

                {/* BADGE */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-semibold tracking-wide text-green-700">
                  VERIFIED SUCCESSFULLY
                </div>

                {/* TITLE */}
                <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
                  Email Verified
                </h1>

                {/* MESSAGE */}
                <p className="mt-5 text-[15px] leading-8 text-slate-500">
                  {message}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => router.push("/sign-in")}
                  className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] px-8 text-sm font-semibold text-white shadow-xl shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue To Sign In
                  <ArrowRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
