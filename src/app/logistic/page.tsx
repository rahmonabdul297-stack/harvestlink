"use client";

import React from "react";
import Link from "next/link";
import {
  BiCheck,
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiInfoCircle,
} from "react-icons/bi";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function ForLogisticsOverviewPage() {
  const capabilities = [
    "View your assigned pickup and delivery jobs",
    "Review pickup details — location, commodity, verified load quantity",
    "Confirm pickup with collection records",
    "Update transit status throughout the journey",
    "Confirm delivery at the buyer destination",
    "Report issues or exceptions during transit",
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] font-sans py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-gray-900">
      <Header />
      <div className="max-w-2xl w-full space-y-8 mt-6">
        {/* Top Role Badge */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4ebe4] border border-[#d6beae] text-[#5c3a21] text-xs font-bold shadow-2xs">
            <span className="w-4 h-4 rounded-full bg-[#5c3a21] text-white flex items-center justify-center text-[10px] font-black">
              L
            </span>
            <span>Logistics Partner</span>
          </div>
        </div>

        {/* Hero Image Card with Banner Overlay */}
        <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden shadow-xs relative">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
            alt="Logistics Haulage Truck"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3d2616]/90 via-[#5c3a21]/30 to-transparent flex items-end p-6">
            <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">
              LOGISTICS PARTNER
            </span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-3 text-left sm:text-center max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            Transport verified consolidated loads from collection point to buyer
            delivery.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
            You manage the physical transportation of verified loads from
            aggregation points to buyer delivery destinations. HarvestLink
            coordinates job assignment and status tracking.
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
                <BiCheck className="w-4 h-4 text-[#5c3a21] shrink-0 mt-0.5" />
                <span className="leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibility Notice Banner */}
        <div className="bg-[#fffdf0] border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-xs text-amber-900/90 leading-relaxed shadow-2xs">
          <BiInfoCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-[11px]">
            Transportation vehicles are the responsibility of the Logistics
            Partner. HarvestLink coordinates job assignment and tracking.
          </p>
        </div>

        {/* Bottom CTA Action Controls */}
        <div className="space-y-4 pt-2 text-center">
          <Link
            href="/rider"
            className="w-full bg-[#704628] hover:bg-[#57361f] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-xs text-sm inline-flex items-center justify-center gap-2 group"
          >
            <span>Continue as Logistics Partner</span>
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
