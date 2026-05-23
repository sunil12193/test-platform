"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

interface VerifyResponse {
  success: boolean;
  message: string;
}

export default function VerifyEmailPage() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

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
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
      <div
        className="
          w-full
          max-w-xl
          bg-white
          rounded-[32px]
          shadow-xl
          border
          border-slate-200
          p-10
          text-center
        "
      >
        {/* LOADING */}
        {/* {loading && (
          <>
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-slate-100
                flex
                items-center
                justify-center
                mx-auto
                mb-8
              "
            >
              <Loader2
                className="animate-spin text-slate-700"
                size={50}
              />
            </div>

            <h1 className="text-3xl font-black text-slate-900">
              Verifying Your Email
            </h1>

            <p className="text-slate-500 mt-4">
              Please wait while we verify your
              account...
            </p>
          </>
        )} */}

        {/* SUCCESS */}
        {(
          <>
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

            <h1 className="text-4xl font-black text-slate-900">
              Email Verified Successfully
            </h1>

            <p className="text-slate-500 text-lg mt-5 leading-8">
              {message}
            </p>

            <button
              onClick={() =>
                router.push("/sign-in")
              }
              className="
                mt-10
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
              Go To Sign In
            </button>
          </>
        )}

        {/* FAILED */}
        {!loading && !success && (
          <>
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-red-100
                flex
                items-center
                justify-center
                mx-auto
                mb-8
              "
            >
              <XCircle
                className="text-red-600"
                size={50}
              />
            </div>

            <h1 className="text-4xl font-black text-slate-900">
              Verification Failed
            </h1>

            <p className="text-slate-500 text-lg mt-5 leading-8">
              {message}
            </p>

            <button
              onClick={() =>
                router.push("/account-created")
              }
              className="
                mt-10
                px-8
                py-4
                rounded-2xl
                bg-red-600
                text-white
                font-semibold
                hover:bg-red-700
                transition
              "
            >
              Back To Verification Page
            </button>
          </>
        )}
      </div>
    </div>
  );
}