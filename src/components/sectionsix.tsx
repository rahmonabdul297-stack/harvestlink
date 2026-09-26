"use client";

import React from "react";
import Link from "next/link";
import {BiFile, BiCheck, BiLayerPlus } from "react-icons/bi";

export default function ProductCapabilitiesCTA() {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* SECTION 1: PRODUCT CAPABILITIES */}
      <section className="bg-[#fcfdfd] py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[10px] font-bold tracking-widest text-[#14532d] uppercase">
              PRODUCT CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Built for real supply chain work.
            </h2>
          </div>

          {/* 2-Column Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Smart Order Assembly */}
            <div className="bg-[#f4f7f5] border border-emerald-100/80 rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                {/* Icon Badge */}
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 flex items-center justify-center text-lg">
                  <BiLayerPlus />
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase">
                    SMART ORDER ASSEMBLY
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Coordinating supply to meet demand.
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    HarvestLink recommends how eligible farmer and cooperative supply can be combined to satisfy a buyer requirement. The system suggests combinations — operational teams review and confirm before proceeding.
                  </p>
                </div>
              </div>

              {/* Mock UI Widget: Illustrative Assembly Table */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm space-y-3 text-xs">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Illustrative assembly
                </p>

                <p className="font-extrabold text-amber-600 text-xs">
                  Buyer: 100 MT Cocoa
                </p>

                <div className="space-y-2 border-t border-gray-100 pt-2.5 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Farmer A</span>
                    <span className="font-bold text-emerald-800">25 MT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cooperative B</span>
                    <span className="font-bold text-emerald-800">30 MT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Farmer C</span>
                    <span className="font-bold text-emerald-800">20 MT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Farmer D</span>
                    <span className="font-bold text-emerald-800">25 MT</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-2.5 flex justify-between items-center font-bold text-gray-900">
                  <span>Total coordinated</span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    100 MT <BiCheck className="w-4 h-4 text-emerald-600" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Order Passport */}
            <div className="bg-[#f4f7f5] border border-emerald-100/80 rounded-2xl p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-4">
                {/* Icon Badge */}
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 flex items-center justify-center text-lg">
                  <BiFile />
                </div>

                {/* Card Title & Desc */}
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase">
                    ORDER PASSPORT
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    Every important record in one place.
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    The Order Passport brings together the key records for a single order — supplier contributions, batch verification, aggregation, logistics, delivery, and settlement — into one continuous view.
                  </p>
                </div>
              </div>

              {/* Mock UI Widget: Order Passport View */}
              <div className="bg-white border border-gray-200/80 rounded-xl p-5 shadow-sm space-y-3 text-xs">
                <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                  Order Passport — ORD-001
                </p>

                <div className="space-y-2.5 border-t border-gray-100 pt-2.5 text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Supplier contributions</span>
                    <span className="font-medium text-gray-800 flex items-center gap-1">
                      4 farmers <BiCheck className="text-emerald-600" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Aggregation</span>
                    <span className="font-medium text-gray-800 flex items-center gap-1">
                      Ibadan North <BiCheck className="text-emerald-600" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Verified quantity</span>
                    <span className="font-medium text-gray-800 flex items-center gap-1">
                      98 MT <BiCheck className="text-emerald-600" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Logistics job</span>
                    <span className="font-medium text-gray-800 flex items-center gap-1">
                      In transit <BiCheck className="text-emerald-600" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Settlement</span>
                    <span className="font-medium text-gray-400 italic">
                      Pending delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CLOSING CALL-TO-ACTION BANNER */}
      <section className="bg-[#14532d] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          {/* Logo Badge */}
          <div className="w-10 h-10 rounded-xl bg-emerald-900 border border-emerald-600/50 text-amber-400 font-extrabold flex items-center justify-center text-xl mx-auto shadow-md">
            H
          </div>

          {/* Heading & Paragraph */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Coordinated agricultural <br /> supply starts here.
            </h2>
            <p className="text-emerald-100/80 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Whether you are buying, growing, aggregating, or moving agricultural commodities — HarvestLink gives you the coordination and visibility to work effectively.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/auth/signup"
              className="bg-[#1b6b3b] hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg text-xs transition-colors shadow-sm"
            >
              Get Started
            </Link>
            <Link
              href="/auth/signin"
              className="border border-emerald-500/50 hover:bg-emerald-800/40 text-white font-medium px-6 py-3 rounded-lg text-xs transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}