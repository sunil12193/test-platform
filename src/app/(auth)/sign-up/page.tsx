"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../../component/logo";

interface SignupResponse {
  success: boolean;
  message: string;
  link: string;
}

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  // VALIDATION ERRORS
  const [validationErrors, setValidationErrors] =
    useState({
      email: "",
      phone: "",
      password: "",
    });

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setValidationErrors({
      ...validationErrors,
      [e.target.name]: "",
    });
  };

  // VALIDATION
  const validateFields = () => {
    let isValid = true;

    const errors = {
      email: "",
      phone: "",
      password: "",
    };

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      errors.email =
        "Please enter valid email";
      isValid = false;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      errors.phone =
        "Phone number must be 10 digits";
      isValid = false;
    }

    // PASSWORD VALIDATION
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (
      !passwordRegex.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must contain uppercase, lowercase, number & special character";
      isValid = false;
    }

    setValidationErrors(errors);

    return isValid;
  };

  // HANDLE SIGNUP
  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // VALIDATE
    if (!validateFields()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://platform-backend-v8zh.onrender.com/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data: SignupResponse =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Signup failed"
        );
      }

      // OPTIONAL
      localStorage.setItem(
        "signupEmail",
        formData.email
      );

      // REDIRECT
      router.push(
        `/account-created?link=${encodeURIComponent(
          data.link
        )}&email=${encodeURIComponent(
          formData.email
        )}`
      );
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="signup"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-5 left-5 z-10 w-50 h-50">
          <Logo />
        </div>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-center px-10">
            <h1 className="text-5xl font-bold mb-4">
              Create Account
            </h1>

            <p className="text-lg text-gray-200">
              Join us and start your journey today.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-2">
            Sign Up
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Create your new account
          </p>

          {/* ERROR */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            {/* USER NAME */}
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              value={formData.userName}
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

            {/* EMAIL */}
            <div>
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

              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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

              {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.phone}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
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

              {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {
                    validationErrors.password
                  }
                </p>
              )}
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
                ? "Creating Account..."
                : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}