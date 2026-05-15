"use client";

import { navItems } from "@/util/navItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-4">
        <p className="text-[10px] font-bold text-slate-400 tracking-[2px] mb-4">
          MAIN
        </p>

        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-start gap-3 rounded-xl px-4 py-3 transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                      : "hover:bg-slate-50"
                  }
                `}
              >
                {/* ICON */}
                <div
                  className={`mt-1 text-lg ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-500"
                  }`}
                >
                  <item.icon />
                </div>

                {/* TEXT */}
                <div>
                  <div
                    className={`text-sm font-semibold ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-800"
                    }`}
                  >
                    {item.label}
                  </div>

                  <div className="text-xs text-slate-400">
                    {item.sub}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;