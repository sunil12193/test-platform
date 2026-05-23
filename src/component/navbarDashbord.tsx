"use client";

import Link from "next/link";
import Image from "next/image";
import { CiBellOn, CiSettings } from "react-icons/ci";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { FiUser, FiSettings, FiHelpCircle, FiHeadphones } from "react-icons/fi";

type NavbarDashboardProps = {
  title: string;
};

const NavbarDashboard = ({ title }: NavbarDashboardProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="bg-[#0f2744] shadow-md">
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between gap-5 px-6 py-3">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <div className="bg-white rounded-md p-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Gleefix"
                width={40}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          <div>
            <p className="text-2xl text-white font-bold">Gleefix</p>
            <p className="text-sm text-white mt-0.5">
              Connecting Talent, Building Futures.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-130 bg-[#1e3a5f] border border-[#2d4f73] rounded-md px-5 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <CiBellOn className="text-white text-2xl cursor-pointer" />

          <CiSettings className="text-white text-2xl cursor-pointer" />

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#1e3a5f] rounded-full px-3 py-1 flex items-center gap-3 hover:bg-[#27486f] transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500" />

              <div className="text-left">
                <p className="text-white text-sm font-semibold">Admin User</p>

                <p className="text-slate-400 text-xs">Administrator</p>
              </div>

              <ChevronDown
                size={18}
                className={`text-white transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-64 bg-[#13253d] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50">
                <ul className="py-2">
                  <Link href="/dashboard/account">
                    <li className="flex items-center gap-3 px-5 py-3 text-sm text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-200">
                      <FiUser size={18} />
                      Account
                    </li>
                  </Link>

                  <Link href="/dashboard/setting">
                    <li className="flex items-center gap-3 px-5 py-3 text-sm text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-200">
                      <FiSettings size={18} />
                      Settings
                    </li>
                  </Link>

                  <Link href="/dashboard/support">
                    <li className="flex items-center gap-3 px-5 py-3 text-sm text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-200">
                      <FiHelpCircle size={18} />
                      Support
                    </li>
                  </Link>

                  <Link href="/dashboard/customer-service">
                    <li className="flex items-center gap-3 px-5 py-3 text-sm text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-200">
                      <FiHeadphones size={18} />
                      Customer Services
                    </li>
                  </Link>
                  <Link href="/sign-in">
                    <li className="flex items-center gap-3 px-5 py-3 text-sm text-white hover:bg-[#1e3a5f] cursor-pointer transition-all duration-200">
                      <LogOut size={18} />
                      Log Out
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="border-t border-[#2a4668] bg-[#224e7c] px-6 py-2">
        <p className="text-sm text-slate-400">
          Home &gt; <span className="text-white font-semibold">{title}</span>
        </p>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
