"use client";

import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export default function BuyerPaymentsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  return (
    <div className="max-w-5xl mx-auto space-y-6 font-sans text-gray-900">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Payments
        </h1>
        <p className="text-xs text-gray-500">
          Payment records and settlement status for your orders.
        </p>
      </div>

      {/* Prototype Simulation Notice Box */}
      <div className="bg-[#f2f0ff] border border-[#e0dafe] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <span className="font-bold text-[#6b46c1] uppercase text-[11px] shrink-0">
          Prototype simulation.
        </span>
        <p className="text-gray-600 text-[11px] leading-relaxed">
          All amounts, payment references, and settlement records shown are prototype values. Payment is coordinated through a licensed payment provider, not held by HarvestLink.
        </p>
      </div>

      {/* 5 Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 shadow-sm space-y-1">
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Total orders
          </p>
          <p className="text-2xl font-black text-gray-900">3</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 shadow-sm space-y-1">
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Awaiting payment / settlement
          </p>
          <p className="text-2xl font-black text-amber-700">2</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 shadow-sm space-y-1">
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Settlement pending
          </p>
          <p className="text-2xl font-black text-purple-700">1</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 shadow-sm space-y-1">
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Settled
          </p>
          <p className="text-2xl font-black text-emerald-800">1</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 shadow-sm space-y-1">
          <p className="text-[10px] font-bold text-gray-500 leading-tight">
            Exceptions
          </p>
          <p className="text-2xl font-black text-red-700">0</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
        <button
          onClick={() => setActiveFilter("ALL")}
          className={`px-3.5 py-1.5 rounded-lg transition-colors ${
            activeFilter === "ALL"
              ? "bg-[#14532d] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All payments <span className="text-[10px] opacity-80">(3)</span>
        </button>

        <button
          onClick={() => setActiveFilter("REQUIRED")}
          className={`px-3.5 py-1.5 rounded-lg transition-colors border ${
            activeFilter === "REQUIRED"
              ? "bg-amber-100 text-amber-900 border-amber-300"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Payment required <span className="text-[10px] opacity-80">(1)</span>
        </button>

        <button
          onClick={() => setActiveFilter("PENDING")}
          className={`px-3.5 py-1.5 rounded-lg transition-colors border ${
            activeFilter === "PENDING"
              ? "bg-purple-100 text-purple-900 border-purple-300"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Settlement pending <span className="text-[10px] opacity-80">(1)</span>
        </button>

        <button
          onClick={() => setActiveFilter("SETTLED")}
          className={`px-3.5 py-1.5 rounded-lg transition-colors border ${
            activeFilter === "SETTLED"
              ? "bg-emerald-100 text-emerald-900 border-emerald-300"
              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
          }`}
        >
          Settled <span className="text-[10px] opacity-80">(1)</span>
        </button>
      </div>

      {/* PAYMENT CARDS LIST */}
      <div className="space-y-4">
        {/* CARD 1: SETTLED (LIGHT GREEN) */}
        {(activeFilter === "ALL" || activeFilter === "SETTLED") && (
          <div className="bg-[#f0f8f3] border border-emerald-200/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-gray-900">
                  HL-PAY-0033
                </span>
                <span className="text-[10px] font-extrabold bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full" /> Settled
                </span>
              </div>
              <span className="text-[11px] font-bold text-gray-500">
                Order: HL-2024-CSW-0028 · Cashew
              </span>
            </div>

            {/* Content Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Buyer
                  </p>
                  <p className="font-extrabold text-sm text-gray-900">
                    Premidere Export Trading Co.
                  </p>
                  <p className="text-xs text-gray-500">50 MT Cashew delivered</p>
                </div>

                {/* Cooperative Tag */}
                <div className="inline-flex items-center gap-1.5 bg-white border border-emerald-200/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                  <span>Kwara Cashew Farmers Coop · 50 MT</span>
                  <span className="text-emerald-700">✓ Settled</span>
                </div>

                <p className="text-[10px] text-gray-400">
                  Created: 28 Sept 2024 · Settled: 30 Sept 2024 <span className="font-bold text-gray-600">HL-SET-0029</span>
                </p>
              </div>

              {/* Amount & Button */}
              <div className="text-left sm:text-right space-y-3 shrink-0">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Indicative order amount
                  </p>
                  <p className="text-2xl font-black text-gray-900">
                    ₦49,750,000
                  </p>
                  <p className="text-[10px] text-gray-400">Estimated value only</p>
                </div>

                <button className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs shadow-xs transition-colors">
                  View record
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CARD 2: SETTLEMENT PENDING (LIGHT PURPLE) */}
        {(activeFilter === "ALL" || activeFilter === "PENDING") && (
          <div className="bg-[#f8f6ff] border border-purple-200/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-gray-900">
                  HL-PAY-0050
                </span>
                <span className="text-[10px] font-extrabold bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-purple-700 rounded-full" /> Settlement pending
                </span>
              </div>
              <span className="text-[11px] font-bold text-gray-500">
                Order: HL-2024-CCO-0038 · Cocoa
              </span>
            </div>

            {/* Content Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Buyer
                  </p>
                  <p className="font-extrabold text-sm text-gray-900">
                    Agrofresh Processors Ltd
                  </p>
                  <p className="text-xs text-gray-500">40 MT Cocoa delivered</p>
                </div>

                {/* Cooperative Tag */}
                <div className="inline-flex items-center gap-1.5 bg-white border border-purple-200/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                  <span>Ikom Cocoa Producers Association · 40 MT</span>
                  <span className="text-amber-700">Pending</span>
                </div>

                <p className="text-[10px] text-gray-400">Created: 15 Oct 2024</p>
              </div>

              {/* Amount & Button */}
              <div className="text-left sm:text-right space-y-3 shrink-0">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Indicative order amount
                  </p>
                  <p className="text-2xl font-black text-gray-900">
                    ₦32,000,000
                  </p>
                  <p className="text-[10px] text-gray-400">Estimated value only</p>
                </div>

                <button className="bg-[#6b46c1] hover:bg-[#5a32b2] text-white font-bold px-4 py-2 rounded-xl text-xs shadow-xs transition-colors inline-flex items-center gap-1">
                  <span>Complete settlement</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CARD 3: PAYMENT REQUIRED (LIGHT YELLOW) */}
        {(activeFilter === "ALL" || activeFilter === "REQUIRED") && (
          <div className="bg-[#fffdf0] border border-amber-200/90 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-gray-900">
                  HL-PAY-0042
                </span>
                <span className="text-[10px] font-extrabold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-amber-700 rounded-full" /> Payment required
                </span>
              </div>
              <span className="text-[11px] font-bold text-gray-500">
                Order: HL-2024-CCO-0041 · Cocoa
              </span>
            </div>

            {/* Content Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Buyer
                  </p>
                  <p className="font-extrabold text-sm text-gray-900">
                    Agrofresh Processors Ltd
                  </p>
                  <p className="text-xs text-gray-500">210 MT Cocoa delivered</p>
                </div>

                {/* Multiple Cooperative Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 bg-white border border-amber-200/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                    <span>Etungun Network & Ors · 180 MT</span>
                    <span className="text-amber-700">Pending</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-white border border-amber-200/80 px-2.5 py-1 rounded-lg text-[11px] font-bold text-gray-700">
                    <span>Oke-Igbó Cocoa Cooperative · 30 MT</span>
                    <span className="text-amber-700">Pending</span>
                  </div>
                </div>

                <p className="text-[10px] text-gray-400">Created: 5 Nov 2024</p>
              </div>

              {/* Amount & Button */}
              <div className="text-left sm:text-right space-y-3 shrink-0">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    Indicative order amount
                  </p>
                  <p className="text-2xl font-black text-gray-900">
                    ₦38,240,000
                  </p>
                  <p className="text-[10px] text-gray-400">Estimated value only</p>
                </div>

                <button className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-xs transition-colors inline-flex items-center gap-1">
                  <span>Initiate payment</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}