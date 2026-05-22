"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../../../component/logo";

interface LoginResponse {
  success: boolean;
  message: string;

  data: {
    token: string;
    refreshToken: string;

    user: {
      id: string;
      userName: string;
      email: string;
      phone: string;
    };
  };
}

export default function SigninPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // LOGIN FUNCTION
  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://platform-backend-v8zh.onrender.com/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data: LoginResponse =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      // STORE TOKENS
      document.cookie = `
        token=${data.data.token};
        path=/;
        max-age=86400
      `;

      document.cookie = `
        refreshToken=${data.data.refreshToken};
        path=/;
        max-age=604800
      `;

      // STORE USER
      localStorage.setItem(
        "user",
        JSON.stringify(data.data.user)
      );

      alert("Login Successful ✅");

      // REDIRECT
      router.push("/dashboard");

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Something went wrong"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="signin"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center px-10">
            <h1 className="text-5xl font-bold mb-4">
              Welcome Back
            </h1>

            <p className="text-lg text-gray-200">
              Login and continue your journey.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-2">
            Sign In
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Login to your account
          </p>

          {/* ERROR MESSAGE */}
          {error && (
            <div
              className="
                mb-5
                rounded-xl
                bg-red-100
                border
                border-red-200
                text-red-600
                px-4
                py-3
                text-sm
              "
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="
                  text-sm
                  hover:underline
                "
              >
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
                hover:bg-gray-800
                transition
                disabled:opacity-50
              "
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="
                font-semibold
                hover:underline
              "
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}