"use client";

import React from "react";
import Link from "next/link";
import { BiCheck, BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function ForBuyersOverviewPage() {
  const capabilities = [
    "Create a sourcing requirement — commodity, quantity, grade, destination and timeline",
    "Review assembled supply matched across multiple farmers and cooperatives",
    "Track batch aggregation and physical verification at collection points",
    "Monitor logistics dispatch and delivery progress",
    "Access the Order Passport — a complete record from demand to settlement",
    "View settlement status for completed orders",
  ];

  const stages = [
    { num: "01", name: "Demand" },
    { num: "02", name: "Assembly" },
    { num: "03", name: "Verification" },
    { num: "04", name: "Logistics" },
    { num: "05", name: "Delivery" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] font-sans py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-gray-900">
      <Header />
      <div className="max-w-2xl w-full space-y-8 mt-6">
        {/* Top Role Badge */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/70 text-amber-900 text-xs font-bold shadow-2xs">
            <span className="w-4 h-4 rounded-full bg-[#c08223] text-white flex items-center justify-center text-[10px] font-black">
              C
            </span>
            <span>Commercial Buyer</span>
          </div>
        </div>

        {/* Hero Color Banner Card */}
        <div className="w-full h-38 sm:h-46 bg-gradient-to-r from-[#c08223] to-[#d99726] rounded-2xl p-6 flex items-end shadow-xs relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase relative z-10">
            COMMERCIAL BUYER
          </span>
        </div>

        {/* Headline & Description */}
        <div className="space-y-3 text-center max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            Source agricultural commodities from coordinated, verified supply.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
            HarvestLink coordinates your sourcing from an initial requirement
            through to verified delivery and settlement. You specify what you
            need — HarvestLink assembles the supply from eligible farmers and
            cooperatives.
          </p>
        </div>

        {/* 5-Stage Process Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {stages.map((st) => (
            <div
              key={st.num}
              className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-900 text-[11px] font-bold flex items-center gap-1"
            >
              <span className="text-emerald-900">{st.num}</span>
              <span>{st.name}</span>
            </div>
          ))}
        </div>

        {/* WHAT YOU CAN DO Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
            WHAT YOU CAN DO
          </p>

          <div className="space-y-3.5 text-xs font-medium text-gray-700">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <BiCheck className="w-4 h-4 text-[#c08223] shrink-0 mt-0.5" />
                <span className="leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Container */}
        <div className="space-y-4 pt-2 text-center">
          <Link
            href="/dashboard/buyer"
            className="w-full bg-[#c08223] hover:bg-[#a8701d] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-xs text-sm inline-flex items-center justify-center gap-2 group"
          >
            <span>Continue as Buyer</span>
            <BiRightArrowAlt className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <div>
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold transition-colors"
            >
              <BiLeftArrowAlt className="w-4 h-4" />
              <span>Choose a different role</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
