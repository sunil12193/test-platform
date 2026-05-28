"use client";

import type { ReactNode } from "react";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/service/queryClient";

import { navItems } from "../../util/navItem";

import NavbarDashboard from "../../component/navbarDashbord";

import Sidebar from "../../component/sideBar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  // ========================================
  // CHECK AUTH
  // ========================================

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/sign-in");
    } else {
      setLoading(false);
    }
  }, [router]);

  // ========================================
  // LOADING SCREEN
  // ========================================

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-600 text-lg font-medium">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  const currentItem = navItems.find(
    (item: any) => item.href === pathname,
  );

  const title = currentItem?.label || "Dashboard";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col bg-slate-100">
        {/* Navbar */}
        <NavbarDashboard title={title} />

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}