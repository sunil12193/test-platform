"use client";

import Link from "next/link";
import Logo from "@/component/logo";

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

            <div className="absolute top-5 left-5 z-10 w-50 h-50 ">
                <Logo />
            </div>

            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">

                <h2 className="text-4xl font-bold text-center mb-2">
                    Reset Password
                </h2>

                <p className="text-gray-500 text-center mb-8">
                    Create your new password
                </p>

                <form className="space-y-5">

                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />

                    <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                        Reset Password
                    </button>

                </form>

                <p className="text-center text-sm mt-6">
                    <Link href="/signin" className="hover:underline">
                        Back to Login
                    </Link>
                </p>

            </div>
        </div>
    );
}