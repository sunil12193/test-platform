"use client";

import Link from "next/link";
import Logo from "../../../component/logo";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="signin"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-5 left-5 z-10 w-50 h-50 ">
          <Logo />
        </div>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center px-10">
            <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>

            <p className="text-lg text-gray-200">
              Login and continue your journey.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-2">Sign In</h2>

          <p className="text-gray-500 text-center mb-8">
            Login to your account
          </p>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <div className="text-right">
              <Link href="/forgot-password" className="text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
