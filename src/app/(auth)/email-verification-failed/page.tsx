"use client";

import Link from "next/link";
import {
  AlertTriangle,
  RefreshCcw,
  ShieldX,
} from "lucide-react";

export default function EmailVerificationFailedPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-[32px]
          border
          border-red-100
          bg-white
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* TOP GRADIENT */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-40
            bg-gradient-to-br
            from-red-500
            via-rose-500
            to-orange-400
            opacity-10
          "
        />

        <div className="relative z-10 p-8">
          {/* ICON */}
          <div className="flex justify-center">
            <div
              className="
                h-20
                w-20
                rounded-[26px]
                bg-red-50
                border
                border-red-100
                flex
                items-center
                justify-center
                shadow-sm
              "
            >
              <ShieldX
                className="text-red-500"
                size={36}
              />
            </div>
          </div>

          {/* TITLE */}
          <div className="text-center mt-7">
            <h1
              className="
                text-[14px]
                font-bold
                tracking-wide
                text-slate-900
              "
            >
              Email Verification Failed
            </h1>

            <p
              className="
                text-[12px]
                leading-6
                text-slate-500
                mt-3
              "
            >
              The verification link is invalid,
              expired, or already used.
            </p>
          </div>

          {/* WARNING BOX */}
          <div
            className="
              mt-7
              rounded-2xl
              border
              border-red-100
              bg-red-50/70
              p-4
              flex
              items-start
              gap-3
            "
          >
            <div
              className="
                h-9
                w-9
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
                border
                border-red-100
              "
            >
              <AlertTriangle
                size={16}
                className="text-red-500"
              />
            </div>

            <div>
              <h3
                className="
                  text-[13px]
                  font-semibold
                  text-slate-800
                "
              >
                Verification Unsuccessful
              </h3>

              <p
                className="
                  text-[12px]
                  text-slate-500
                  mt-1
                  leading-5
                "
              >
                Please request a new verification
                email and try again.
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 space-y-3">
            <Link
              href="/account-created"
              className="
                h-12
                w-full
                rounded-2xl
                bg-[#0F172A]
                hover:bg-[#1E293B]
                text-white
                text-[12px]
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-200
              "
            >
              <RefreshCcw size={14} />
              Resend Verification
            </Link>

            <Link
              href="/sign-in"
              className="
                h-12
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                hover:bg-slate-50
                text-slate-700
                text-[12px]
                font-semibold
                flex
                items-center
                justify-center
                transition-all
                duration-200
              "
            >
              Back to Sign In
            </Link>
          </div>

          {/* FOOTER */}
          <div className="mt-8 text-center">
            <p
              className="
                text-[11px]
                text-slate-400
                leading-5
              "
            >
              Need help? Contact support for
              assistance with your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}