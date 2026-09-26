"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { BiMenu, BiX } from "react-icons/bi";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "How It Works", href: "/" },
    { name: "For Buyers", href: "/buyer" },
    { name: "For Farmers", href: "/farmer" },
    { name: "Aggregation Agent", href: "/aggregator" },
    { name: "Logistics", href: "/logistic" },
  ];

  return (
    <header className="fixed w-full bg-white border-b border-gray-200  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo lightMode={true} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/auth/signin"
            className="px-3.5 py-2 text-xs font-semibold text-gray-700 hover:text-emerald-800 transition-colors capitalize"
          >
            Sign In
          </Link>

          <Link
            href="/auth/signup"
            className="text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 py-2 px-4 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-gray-700 hover:text-emerald-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <BiX className="w-6 h-6" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in-up">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/auth/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-gray-800 border border-gray-200 rounded-lg hover:border-emerald-700 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/auth/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
