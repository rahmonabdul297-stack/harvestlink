"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiList,
  FiBox,
  FiShare2,
  FiTruck,
  FiCreditCard,
  FiAlertTriangle,
  FiUsers,
  FiClock,
  FiRepeat,
  FiMenu,
  FiX,
} from "react-icons/fi";

interface OperationsLayoutProps {
  children: React.ReactNode;
}

export default function OperationsLayout({ children }: OperationsLayoutProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    {
      id: "overview",
      label: "Overview",
      icon: FiGrid,
      href: "/dashboard/operations",
      hasBadge: true,
    },
    {
      id: "orders",
      label: "Orders",
      icon: FiList,
      href: "/dashboard/operations/orders",
    },
    {
      id: "supply",
      label: "Supply",
      icon: FiBox,
      href: "/dashboard/operations/supply",
    },
    {
      id: "aggregation",
      label: "Aggregation",
      icon: FiShare2,
      href: "/dashboard/operations/aggregation",
    },
    {
      id: "logistics",
      label: "Logistics",
      icon: FiTruck,
      href: "/dashboard/operations/logistics",
    },
    {
      id: "settlements",
      label: "Settlements",
      icon: FiCreditCard,
      href: "/dashboard/operations/settlements",
    },
    {
      id: "exceptions",
      label: "Exceptions",
      icon: FiAlertTriangle,
      href: "/dashboard/operations/exceptions",
    },
    {
      id: "users",
      label: "Users",
      icon: FiUsers,
      href: "/dashboard/operations/users",
    },
    {
      id: "activity",
      label: "Activity",
      icon: FiClock,
      href: "/dashboard/operations/activity",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Mobile Header Bar */}
      <header className="md:hidden bg-[#0a381b] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#14532d] border border-emerald-500/30 flex items-center justify-center font-extrabold text-amber-400 text-lg tracking-wider shadow-inner">
            H
          </div>
          <div>
            <h1 className="font-extrabold text-xs tracking-wide text-white leading-tight">
              Harvest<span className="text-amber-400">Link</span>
            </h1>
            <p className="text-[8px] font-bold text-emerald-300/70 tracking-widest uppercase">
              OPERATIONS PORTAL
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 text-emerald-100 hover:text-white rounded-lg bg-[#134323] border border-emerald-800/60 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </header>

      {/* Backdrop Overlay for Mobile Drawer */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar Navigation (Desktop Fixed + Mobile Slide-out Drawer) */}
      <aside
        className={`fixed md:static top-0 left-0 bottom-0 z-50 w-64 bg-[#0a381b] text-white flex flex-col justify-between p-4 shrink-0 shadow-lg min-h-screen transition-transform duration-200 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Logo & Platform Title */}
          <div className="flex items-center justify-between px-2 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#14532d] border border-emerald-500/30 flex items-center justify-center font-extrabold text-amber-400 text-xl tracking-wider shadow-inner">
                H
              </div>
              <div>
                <h1 className="font-extrabold text-sm tracking-wide text-white leading-tight">
                  Harvest<span className="text-amber-400">Link</span>
                </h1>
                <p className="text-[9px] font-bold text-emerald-300/70 tracking-widest uppercase">
                  AGRICULTURAL PLATFORM
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden text-emerald-200 hover:text-white p-1"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* User Role Card (HarvestLink Ops) */}
          <div className="bg-[#134323] border border-emerald-800/60 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#047857] text-white flex items-center justify-center font-black text-sm shadow-xs">
              H
            </div>
            <div>
              <h2 className="font-bold text-xs text-white leading-tight">
                HarvestLink Ops
              </h2>
              <p className="text-[10px] text-emerald-300/80 font-medium">
                Active session
              </p>
            </div>
          </div>

          {/* Navigation Menu Links */}
          <nav className="space-y-1 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.id === "overview" &&
                  pathname === "/dashboard/operations/workspace");

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-[#14532d] text-white shadow-xs"
                      : "text-emerald-100/70 hover:text-white hover:bg-[#134323]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-amber-400" : "text-emerald-200/80"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.hasBadge && (
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: Switch Role */}
        <div className="pt-4 border-t border-emerald-800/40">
          <Link
            href="/dashboard"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-emerald-100/70 hover:text-white hover:bg-[#134323] transition-colors"
          >
            <FiRepeat className="w-4 h-4 text-emerald-300/80" />
            <span>Switch role</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto max-w-6xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}