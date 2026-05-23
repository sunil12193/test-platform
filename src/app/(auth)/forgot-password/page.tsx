"use client";

import { useState } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { FiMail, FiPhone, FiShield, FiArrowRight } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [method, setMethod] = useState("email");

  const [value, setValue] = useState("");

  const [otp, setOtp] = useState("");

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  const [error, setError] = useState("");

  // SEND OTP
  const handleSendOtp = () => {
    if (!value) {
      setError("Please enter email or phone number");

      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();

    setGeneratedOtp(randomOtp);

    setOtpSent(true);

    setError("");

    // TEST ONLY
    alert(`Your OTP is ${randomOtp}`);
  };

  // VERIFY OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      router.push("/reset-password");
    } else {
      setError("Invalid OTP");
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
              <h2 className="text-3xl font-black text-white">Gleefix</h2>

              <p className="text-sm text-blue-100 mt-1">AI Hiring Platform</p>
            </div>
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
              Recover access to your Gleefix account securely using email or
              phone verification.
            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-14">
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-white">256-bit</h3>

                <p className="text-sm text-blue-100 mt-2">Secure Encryption</p>
              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                <h3 className="text-2xl font-bold text-white">Instant</h3>

                <p className="text-sm text-blue-100 mt-2">OTP Verification</p>
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
            {/* HEADER */}
            <div className="text-center mb-10">
              <div className="mx-auto w-18 h-18 rounded-3xl bg-gradient-to-br from-[#1E4D7B] to-[#0F2B46] flex items-center justify-center shadow-xl mb-5">
                <FiShield className="text-white text-3xl" />
              </div>

              <h2 className="text-4xl font-black text-slate-900">
                Forgot Password
              </h2>

              <p className="text-slate-500 mt-3">
                Recover your account securely
              </p>
            </div>

            {/* METHOD SWITCH */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => {
                  setMethod("email");

                  setValue("");

                  setOtpSent(false);

                  setOtp("");

                  setError("");
                }}
                className={`h-14 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                  method === "email"
                    ? "bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B] text-white border-transparent shadow-lg"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <FiMail />
                  Email
                </div>
              </button>

              <button
                onClick={() => {
                  setMethod("phone");

                  setValue("");

                  setOtpSent(false);

                  setOtp("");

                  setError("");
                }}
                className={`h-14 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                  method === "phone"
                    ? "bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B] text-white border-transparent shadow-lg"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <FiPhone />
                  Phone
                </div>
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-5">
              {/* INPUT */}
              <div className="relative">
                {method === "email" ? (
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                ) : (
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                )}

                <input
                  type={method === "email" ? "email" : "tel"}
                  placeholder={
                    method === "email"
                      ? "Enter your email"
                      : "Enter phone number"
                  }
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* SEND OTP */}
              {!otpSent && (
                <button
                  onClick={handleSendOtp}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20"
                >
                  Send OTP
                  <FiArrowRight />
                </button>
              )}

              {/* OTP SECTION */}
              {otpSent && (
                <>
                  <div className="relative">
                    <FiShield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50/50 pl-12 pr-4 outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    onClick={handleVerifyOtp}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#1E4D7B] text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-blue-900/20"
                  >
                    Verify OTP
                    <FiArrowRight />
                  </button>
                </>
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
