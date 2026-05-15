"use client";

import NavbarDashboard from "@/component/navbarDashbord";
import Sidebar from "@/component/sideBar";
import { navItems } from "@/util/navItem";
import { usePathname } from "next/navigation";


export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const currentItem =
    navItems.find((item) => item.href === pathname);

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
        <main className="flex-1 overflow-y-auto p-7">
          {children}
        </main>
      </div>
    </div>
  );
}