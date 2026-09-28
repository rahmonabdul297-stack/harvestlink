"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Header from "@/src/components/header";

export default function OperationsLandingPage() {
  const capabilities = [
    "Monitor all active orders and fulfillment status across the network",
    "Review supply, aggregation, logistics and settlement in one place",
    "Manage exceptions and escalate critical issues",
    "View platform users, partners and activity logs",
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] font-sans text-gray-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Header/>
      <div className="max-w-2xl w-full space-y-6 mt-18">
        {/* Top Operations Badge */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-300 bg-white shadow-2xs">
            <span className="w-5 h-5 rounded-md bg-[#0c4a24] text-white flex items-center justify-center font-black text-xs">
              H
            </span>
            <span className="text-xs font-extrabold text-[#0c4a24]">
              HarvestLink Operations
            </span>
          </span>
        </div>

        {/* Hero Image Banner */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1200"
            alt="HarvestLink Operations"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
              HARVESTLINK OPERATIONS
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight">
            Internal platform monitoring and network management.
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
            Operations provides oversight of the full HarvestLink fulfillment
            network — all active orders, roles, exceptions, and platform
            activity.
          </p>
        </div>

        {/* What You Can Do Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
          <div className="bg-gray-50/80 px-6 py-3 border-b border-gray-100">
            <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
              WHAT YOU CAN DO
            </h3>
          </div>

          <div className="divide-y divide-gray-100 text-xs sm:text-sm font-semibold text-gray-700">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 px-6 py-3.5">
                <FiCheck className="w-4 h-4 text-[#0c4a24] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Access Note Box */}
        <div className="bg-gray-100/70 border border-gray-200/80 rounded-xl p-4 text-xs text-gray-500 font-medium leading-relaxed">
          Operations access is for internal HarvestLink team members. This
          workspace provides full visibility across the active fulfillment
          network.
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/dashboard/operations"
            className="w-full bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold py-4 px-6 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Enter Operations Workspace</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bottom Back Link */}
        <div className="text-center pt-2">
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Choose a different role</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
