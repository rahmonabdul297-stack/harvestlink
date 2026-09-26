"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/src/components/logo";
import {
  BiHomeAlt,
  BiBell,
  BiDollarCircle,
  BiHelpCircle,
  BiRefresh,
  BiMenu,
  BiX,
  BiChevronRight,
  BiSolidTruck,
} from "react-icons/bi";

export default function FarmerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/dashboard/farmer", icon: BiHomeAlt },
    { name: "Requests", href: "/dashboard/farmer/requests", icon: BiBell },
    { name: "Deliveries", href: "/dashboard/farmer/deliveries", icon: BiSolidTruck },
    { name: "Earnings", href: "/dashboard/farmer/earnings", icon: BiDollarCircle },
    { name: "Help", href: "/dashboard/farmer/help", icon: BiHelpCircle },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col justify-between bg-[#0f4022] text-white p-5 select-none">
      {/* Top Section: Logo & Role Badge */}
      <div className="space-y-6">
        {/* Logo */}
        <div className="px-1 pt-1">
          <Logo lightMode={false} />
        </div>

        {/* Active Role Indicator Card */}
        <div className="bg-[#185831] border border-emerald-600/40 rounded-xl p-3 flex items-center gap-3 shadow-inner">
          <div className="w-8 h-8 rounded-lg bg-[#2d8a55] text-white font-extrabold flex items-center justify-center text-sm shrink-0 shadow-sm">
            F
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-xs text-white truncate">Farmer</h4>
            <p className="text-[10px] text-emerald-300/80 font-medium truncate">
              Active session
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isActive
                    ? "bg-[#185831] text-white shadow-sm border border-emerald-600/40"
                    : "text-emerald-100/70 hover:text-white hover:bg-emerald-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? "text-amber-400"
                        : "text-emerald-300/70 group-hover:text-white"
                    }`}
                  />
                  <span>{item.name}</span>
                </div>

                {isActive && (
                  <BiChevronRight className="w-4 h-4 text-amber-400" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Switch Role Link */}
      <div className="pt-6 border-t border-emerald-800/60">
        <Link
          href="/onboarding"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-200/80 hover:text-white hover:bg-emerald-900/40 transition-colors"
        >
          <BiRefresh className="w-4 h-4 text-emerald-400" />
          <span>Switch role</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8faf9] flex flex-col md:flex-row font-sans text-gray-900">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden md:block w-64 shrink-0 border-r border-emerald-900/20 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Header Bar */}
      <div className="md:hidden sticky top-0 z-40 bg-[#0f4022] text-white px-4 py-3 border-b border-emerald-800/60 flex items-center justify-between shadow-sm">
        <Logo lightMode={false} />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 text-emerald-200 hover:text-white hover:bg-emerald-800/50 rounded-lg transition-colors"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileOpen ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-72 h-full">
            <SidebarContent />
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main Content Workspace Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}