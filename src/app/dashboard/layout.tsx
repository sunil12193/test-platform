"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../../util/navItem";
import NavbarDashboard from "../../component/navbarDashbord";
import Sidebar from "../../component/sideBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const currentItem = navItems.find((item: any) => item.href === pathname);

  const title = currentItem?.label || "Dashboard";

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Navbar */}
      <NavbarDashboard title={title} />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
