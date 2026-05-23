"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // CLOSE ON OUTSIDE CLICK
  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [isOpen]);

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
        <div className="max-w-7xl mx-auto h-20 px-4 lg:px-0 flex items-center justify-between">
          {/* LEFT */}
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

            {/* HIDE ON MOBILE */}
            <div className="hidden md:block">
              <p className="text-2xl text-[#0F2B46] font-bold">
                Gleefix
              </p>

              <p className="text-sm text-slate-500 mt-0.5">
                Connecting Talent, Building Futures.
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
            <Link
              href="/"
              className="hover:text-[#0F2B46] transition-all duration-200"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="hover:text-[#0F2B46] transition-all duration-200"
            >
              About Us
            </Link>

            <Link
              href="/service"
              className="hover:text-[#0F2B46] transition-all duration-200"
            >
              Services
            </Link>

            <Link
              href="/platform"
              className="hover:text-[#0F2B46] transition-all duration-200"
            >
              Platform
            </Link>

            <Link
              href="/contact-us"
              className="hover:text-[#0F2B46] transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/sign-in">
              <button
                className="
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
                  cursor-pointer
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

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
    md:hidden
    w-11
    h-11
    rounded-xl
    border
    border-slate-200
    flex
    items-center
    justify-center
    text-2xl
    text-[#0F2B46]
    bg-white
  "
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* OVERLAY */}
        {/* OVERLAY */}
        <div
          onClick={() => setIsOpen(false)}
          className={`
    md:hidden
    fixed
    inset-0
    bg-black/40
    z-40
    transition-opacity
    duration-300
    ${isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
            }
  `}
        />

        {/* RIGHT SIDEBAR MENU */}
        <div
          ref={menuRef}
          className={`
    md:hidden
    fixed
    top-0
    right-0
    h-screen
    w-[280px]
    bg-white
    z-50
    shadow-2xl
    flex
    flex-col
    p-6
    overflow-y-auto
    transform-gpu
    transition-transform
    duration-300
    ease-in-out
    ${isOpen
              ? "translate-x-0"
              : "translate-x-full"
            }
  `}
        >
          {/* TOP */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xl font-bold text-[#0F2B46]">
                Gleefix
              </p>

              <p className="text-xs text-slate-500">
                AI Hiring Platform
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                w-10
                h-10
                rounded-lg
                border
                border-slate-200
                flex
                items-center
                justify-center
                text-xl
              "
            >
              <FiX />
            </button>
          </div>

          {/* NAV ITEMS */}
          <div className="flex flex-col gap-5 text-slate-700 font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              About Us
            </Link>

            <Link
              href="/service"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              Services
            </Link>

            <Link
              href="/privacy-policy"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/platform"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              Platform
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#0F2B46]"
            >
              Contact
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Link href="/sign-in">
              <button
                onClick={() => setIsOpen(false)}
                className="
                  w-full
                  h-11
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  font-medium
                "
              >
                Login
              </button>
            </Link>

            <Link href="/sign-up">
              <button
                onClick={() => setIsOpen(false)}
                className="
                  w-full
                  h-11
                  rounded-xl
                  bg-[#0F2B46]
                  text-white
                  font-semibold
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