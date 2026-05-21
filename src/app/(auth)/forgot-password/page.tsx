"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../component/logo";

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

    // FOR TESTING PURPOSE
    alert(`Your OTP is ${randomOtp}`);

    // REAL PROJECT:
    // Send OTP using backend API
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="absolute top-5 left-5 z-10 w-50 h-50 ">
        <Logo />
      </div>

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2">Forgot Password</h2>

        <p className="text-gray-500 text-center mb-8">
          Reset password using email or phone number
        </p>

        {/* METHOD SELECT */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setMethod("email");
              setValue("");
            }}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              method === "email" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Email
          </button>

          <button
            onClick={() => {
              setMethod("phone");
              setValue("");
            }}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              method === "phone" ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            Phone
          </button>
        </div>

        {/* INPUT */}
        <div className="space-y-5">
          {method === "email" ? (
            <input
              type="email"
              placeholder="Enter your email"
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          ) : (
            <input
              type="tel"
              placeholder="Enter phone number"
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          )}

          {/* SEND OTP BUTTON */}
          {!otpSent && (
            <button
              onClick={handleSendOtp}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Send OTP
            </button>
          )}

          {/* OTP SECTION */}
          {otpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e: any) => setOtp(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />

              <button
                onClick={handleVerifyOtp}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Verify OTP
              </button>
            </>
          )}

          {/* ERROR */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
}
