"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, LayoutDashboard, Leaf, MessageSquareText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Food Scanner", href: "/dashboard/scanner", icon: Camera },
    { name: "AI Assistant", href: "/dashboard/chat", icon: MessageSquareText },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white min-h-screen p-4 flex flex-col hidden md:flex">
      <div className="flex items-center gap-2 mb-10 px-2 mt-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-md">
          <Leaf size={18} />
        </div>
        <span className="font-bold tracking-tight text-slate-800 text-lg">NutriMind<span className="text-emerald-500">.ai</span></span>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                isActive 
                  ? "bg-emerald-50 text-emerald-700" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <link.icon size={18} className={cn(isActive && "text-emerald-600")} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 w-full transition-colors">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </aside>
  );
}
