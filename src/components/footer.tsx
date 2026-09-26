"use client";

import React from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111a14] text-gray-400 font-sans text-xs border-t-2 border-[#14532d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-10">
        {/* Main Grid: Brand Info + Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-4">
            <Logo lightMode={false} />
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Demand-to-delivery coordination for fragmented agricultural supply.
            </p>
          </div>

          {/* Nav Columns Container */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Platform */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                PLATFORM
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/#how-it-works"
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/buyer"
                    className="hover:text-white transition-colors"
                  >
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/farmer"
                    className="hover:text-white transition-colors"
                  >
                    For Farmers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rider"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Account */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                ACCOUNT
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/auth/signin"
                    className="hover:text-white transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/signup"
                    className="hover:text-white transition-colors"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                LEGAL
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 text-center sm:text-left">
          <p>© 2026 HarvestLink · Agricultural coordination platform · Nigeria</p>
          <p className="text-gray-400 font-medium">
            Cocoa · Cashew · Sesame
          </p>
        </div>
      </div>
    </footer>
  );
}