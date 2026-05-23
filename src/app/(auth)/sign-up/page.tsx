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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // VALIDATION ERRORS
  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // CLEAR VALIDATION ERROR ON CHANGE
    setValidationErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDATION
  const validateFields = () => {
    let isValid = true;

    const errors = {
      userName: "",
      email: "",
      phone: "",
      password: "",
    };

    // USERNAME VALIDATION
    const trimmedName = formData.userName.trim();
    if (!trimmedName) {
      errors.userName = "Full name is required";
      isValid = false;
    } else if (trimmedName.length < 2) {
      errors.userName = "Name must be at least 2 characters";
      isValid = false;
    } else if (trimmedName.length > 50) {
      errors.userName = "Name must be under 50 characters";
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      errors.userName = "Name can only contain letters, spaces, hyphens, or apostrophes";
      isValid = false;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[6-9][0-9]{9}$/; // Indian mobile numbers
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit mobile number";
      isValid = false;
    }

    // PASSWORD VALIDATION
    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      errors.password = "Password must include at least one lowercase letter";
      isValid = false;
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      errors.password = "Password must include at least one uppercase letter";
      isValid = false;
    } else if (!/(?=.*\d)/.test(formData.password)) {
      errors.password = "Password must include at least one number";
      isValid = false;
    } else if (!/(?=.*[@$!%*?&])/.test(formData.password)) {
      errors.password = "Password must include at least one special character (@$!%*?&)";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  // HANDLE SIGNUP
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://platform-backend-v8zh.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data: SignupResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("signupEmail", formData.email);

      router.push(
        `/account-created`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
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
            <h1 className="text-5xl font-bold mb-4">Create Account</h1>
            <p className="text-lg text-gray-200">Join us and start your journey today.</p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-2">Sign Up</h2>
          <p className="text-gray-500 text-center mb-8">Create your new account</p>

          {/* SERVER ERROR */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5" noValidate>
            {/* USER NAME */}
            <div>
              <input
                type="text"
                name="userName"
                placeholder="Full Name"
                value={formData.userName}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black ${
                  validationErrors.userName ? "border-red-400" : ""
                }`}
              />
              {validationErrors.userName && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.userName}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black ${
                  validationErrors.email ? "border-red-400" : ""
                }`}
              />
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
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
                maxLength={10}
                className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black ${
                  validationErrors.phone ? "border-red-400" : ""
                }`}
              />
              {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
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
                className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black ${
                  validationErrors.password ? "border-red-400" : ""
                }`}
              />
              {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black cursor-pointer text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
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