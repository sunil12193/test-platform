"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface VerifyResponse {
  success: boolean;
  message: string;
}

export default function VerifyEmailPage() {
  const router = useRouter();

  // const searchParams = useSearchParams();

  // const token = searchParams.get("token");

  const [loading, setLoading] =
    useState(true);

  const [success, setSuccess] =
    useState(false);

  const [message, setMessage] =
    useState("");

  // useEffect(() => {
  //   const verifyEmail = async () => {
  //     try {
  //       if (!token) {
  //         setSuccess(false);

  //         setMessage(
  //           "Invalid verification link"
  //         );

  //         setLoading(false);

  //         return;
  //       }

  //       const response = await fetch(
  //         `https://platform-backend-v8zh.onrender.com/api/auth/verify-email/${token}`
  //       );

  //       const data: VerifyResponse =
  //         await response.json();

  //       setSuccess(data.success);

  //       setMessage(data.message);

  //     } catch (error) {
  //       console.log(error);

  //       setSuccess(false);

  //       setMessage(
  //         "Verification failed"
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   verifyEmail();
  // }, [token]);

  return (
    <div
      className="
        min-h-screen
        bg-[#F8FAFC]
        flex
        items-center
        justify-center
        px-4
        py-10
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#0F172A15,transparent_30%),radial-gradient(circle_at_bottom_right,#2563EB10,transparent_30%)]
        "
      />

      <div
        className="
          relative
          w-full
          max-w-lg
          overflow-hidden
          rounded-[36px]
          border
          border-white/40
          bg-white/90
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(15,23,42,0.12)]
        "
      >
        {/* TOP GRADIENT */}
        <div
          className={`
            absolute
            top-0
            left-0
            h-44
            w-full
            blur-3xl
            opacity-20
            ${
              success
                ? "bg-green-400"
                : "bg-red-400"
            }
          `}
        />

        <div className="relative z-10 px-8 py-12 text-center">
          {/* LOADING */}
          {/* {loading ? (
            <>
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-[30px]
                  bg-slate-100
                  border
                  border-slate-200
                "
              >
                <Loader2
                  size={44}
                  className="
                    animate-spin
                    text-slate-700
                  "
                />
              </div>

              <h1
                className="
                  mt-8
                  text-[24px]
                  font-black
                  text-slate-900
                "
              >
                Verifying Email
              </h1>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-7
                  text-slate-500
                "
              >
                Please wait while we securely
                verify your email address.
              </p>
            </>
          ) :  */}
          {/* success   */}
          {/* ( */}
            <>
              {/* SUCCESS */}
              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-[32px]
                  bg-green-50
                  border
                  border-green-100
                  shadow-inner
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[32px]
                    bg-green-400/10
                    blur-2xl
                  "
                />

                <CheckCircle2
                  size={54}
                  className="
                    relative
                    z-10
                    text-green-600
                  "
                />
              </div>

              <div className="mt-8">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-green-100
                    bg-green-50
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    text-green-700
                  "
                >
                  <ShieldCheck size={14} />
                  VERIFIED SUCCESSFULLY
                </div>

                <h1
                  className="
                    mt-6
                    text-[28px]
                    font-black
                    tracking-tight
                    text-slate-900
                  "
                >
                  Email Verified
                </h1>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-7
                    text-slate-500
                  "
                >
                  {message}
                </p>
              </div>

              <button
                onClick={() =>
                  router.push("/sign-in")
                }
                className="
                  mt-10
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#0F172A]
                  px-7
                  py-4
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#1E293B]
                  shadow-lg
                "
              >
                Continue To Sign In
                <ArrowRight size={16} />
              </button>
            </>
          {/* )  */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}