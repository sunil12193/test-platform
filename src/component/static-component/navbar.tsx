import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <header
        className="
          sticky
          top-0
          z-50
          backdrop-blur-xl
          bg-white/80
          border-b
          border-slate-200/80
        "
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Gleefix"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            <div>
              <p className="text-2xl text-[#0F2B46] font-bold">Gleefix</p>
              <p className="text-sm text-slate-500 mt-0.5">
                Connecting Talent, Building Futures.
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
            <Link
              href="/"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              About Us
            </Link>

            <Link
              href="/service"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              Services
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              Privacy Policy
            </Link>

            <Link
              href="/platform"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              Platform
            </Link>

            <Link
              href="/contact-us"
              className="hover:text-[#0F2B46] transition-all cursor-pointer duration-200"
            >
              Contact
            </Link>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <button
                className="
                hidden
                md:flex
                text-center
                justify-center
                items-center
                cursor-pointer
                h-11
                px-5
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-700
                font-medium
                hover:shadow-md
                transition-all
                duration-200
              "
              >
                Login
              </button>
            </Link>

            <Link href="/sign-up">
              <button
                className="
                h-11
                px-6
                rounded-xl
                bg-[#0F2B46]
                hover:bg-[#163a5c]
                text-white
                font-semibold
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-200
                cursor-pointer
              "
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>
    </nav>
  );
}
