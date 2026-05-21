"use client";

import Link from "next/link";
import Logo from "../../../component/logo";

export default function SignupPage() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="signup"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-5 left-5 z-10 w-50 h-50 ">
          <Logo />
        </div>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center px-10">
            <h1 className="text-5xl font-bold mb-4">Create Account</h1>

            <p className="text-lg text-gray-200">
              Join us and start your journey today.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-2">Sign Up</h2>

          <p className="text-gray-500 text-center mb-8">
            Create your new account
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
