"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Mail } from "lucide-react";

export default function AccountCreatedPage() {
  const searchParams = useSearchParams();

  const verificationLink = searchParams.get("link");

  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div
        className="
          w-full
          max-w-2xl
          bg-white
          rounded-[32px]
          shadow-xl
          border
          border-slate-200
          p-10
          text-center
        "
      >
        {/* ICON */}
        <div
          className="
            w-24
            h-24
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            mx-auto
            mb-8
          "
        >
          <CheckCircle2
            className="text-green-600"
            size={50}
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-black text-slate-900">
          Account Created Successfully
        </h1>

        {/* DESCRIPTION */}
        <p className="text-slate-500 text-lg leading-8 mt-6">
          Your account has been created successfully.
          <br />
          We have sent a verification link to:
        </p>

        {/* EMAIL */}
        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-3
            bg-slate-100
            px-6
            py-4
            rounded-2xl
            text-slate-700
            font-semibold
          "
        >
          <Mail size={20} />
          {email}
        </div>

        {/* VERIFY BUTTON */}
        {verificationLink && (
          <Link
            href={`/verify-email?token=${verificationLink.split("/").pop()
              }`}
            className="
            mt-10
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-2xl
            bg-black
            text-white
            font-semibold
            hover:bg-slate-800
            transition
            "
          >
            Verify Email
          </Link>
        )}

        {/* FOOTER */}
        <p className="text-sm text-slate-400 mt-8">
          Didn&apos;t receive the email?
          Please check your spam folder.
        </p>

        <Link
          href="/sign-in"
          className="
            inline-block
            mt-6
            text-sm
            font-semibold
            text-slate-700
            hover:underline
          "
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}