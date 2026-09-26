"use client";

import React from "react";
import Link from "next/link";
import { BiCheck, BiRightArrowAlt, BiLeftArrowAlt, BiInfoCircle } from "react-icons/bi";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function ForFarmersOverviewPage() {
  const capabilities = [
    "View incoming requests that match your commodity type",
    "Declare your available quantity and commit to specific orders",
    "Receive aggregation instructions — where to deliver and when",
    "Track your delivery and contribution status",
    "View your settlement record for completed contributions",
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] font-sans py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-gray-900">
      <Header/>
      <div className="max-w-2xl w-full space-y-8 mt-6">
        {/* Top Role Badge */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#14532d] text-xs font-bold shadow-2xs">
            <span className="w-4 h-4 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-black">
              F
            </span>
            <span>Farmer / Cooperative</span>
          </div>
        </div>

        {/* Hero Image Card with Banner Overlay */}
        <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden shadow-xs relative">
          <img
            src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1000&auto=format&fit=crop"
            alt="Farmer in the field"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14532d]/90 via-[#14532d]/30 to-transparent flex items-end p-6">
            <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">
              FARMER / COOPERATIVE
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-3 text-left sm:text-center max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            Connect your available supply to real commercial sourcing opportunities.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
            HarvestLink shows you incoming sourcing requests from commercial buyers. You choose which opportunities fit your available stock and commit supply accordingly.
          </p>
        </div>

        {/* WHAT YOU CAN DO Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3">
            WHAT YOU CAN DO
          </p>

          <div className="space-y-3.5 text-xs font-medium text-gray-700">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <BiCheck className="w-4 h-4 text-[#14532d] shrink-0 mt-0.5" />
                <span className="leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Banner */}
        <div className="bg-[#fffdf0] border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-amber-900/90 leading-relaxed shadow-2xs">
          <BiInfoCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px]">
            Your declared quantity is an intent. The actual verified quantity — weighed at the aggregation point — determines your final contribution. Settlement is processed through a licensed payment provider after verified delivery is confirmed.
          </p>
        </div>

        {/* Bottom CTA Action Controls */}
        <div className="space-y-4 pt-2 text-center">
          <Link
            href="/dashboard/farmer"
            className="w-full bg-[#2d8a55] hover:bg-[#236e43] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-xs text-sm inline-flex items-center justify-center gap-2 group"
          >
            <span>Continue as Farmer / Cooperative</span>
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