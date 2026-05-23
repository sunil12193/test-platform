"use client";

import type { ReactNode } from "react";
import Navbar from "@/component/static-component/navbar";
import Footer from "@/component/static-component/footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-y-auto">{children}</main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
