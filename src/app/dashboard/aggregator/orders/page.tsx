"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiLeftArrowAlt, BiRightArrowAlt, BiCheck, BiErrorAlt } from "react-icons/bi";

export default function AggregatorAssignedOrdersPage() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedOrderId, setSelectedOrderId] = useState<string>("HL-2024-CCO-0041");

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {view === "list" && (
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Assigned orders
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Buyer orders assigned to your aggregation hubs. Record batch arrivals and verify supply against the order specification.
            </p>
          </div>

          {/* ORDER CARD 1: COCOA (VERIFIED PROGRESS) */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xs">
            <div className="border-b border-gray-100 pb-3">
              <span className="font-mono font-bold text-xs text-gray-900">
                HL-2024-CCO-0041
              </span>{" "}
              <span className="text-xs text-gray-500 font-medium">
                · Cocoa · Grade 1 — Fermented & Dried
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Buyer</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Agrofresh Processors Ltd</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Required by</span>
                <p className="font-extrabold text-gray-900 mt-0.5">14 Nov 2024</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Aggregation hub</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Akure</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Destination</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Apapa Export Terminal, Lagos</p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 text-xs pt-1">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Required</span>
                <p className="text-xl font-black text-gray-900 mt-0.5">80 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                <p className="text-xl font-black text-gray-900 mt-0.5">48 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Received</span>
                <p className="text-xl font-black text-blue-700 mt-0.5">47.8 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Verified</span>
                <p className="text-xl font-black text-emerald-800 mt-0.5">47.8 MT</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0f4022] rounded-full w-[60%]" />
              </div>
              <p className="text-[10px] text-gray-400 font-bold">60% verified</p>
            </div>

            {/* Batches Pill Bar */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3 text-xs">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Batches:</span>
              <span className="text-gray-600 font-bold">• 1 Awaiting</span>
              <span className="text-emerald-800 font-extrabold">• 2 Verified</span>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setSelectedOrderId("HL-2024-CCO-0041");
                setView("detail");
              }}
              className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 transition-colors shadow-xs"
            >
              <span>View order detail</span>
              <BiRightArrowAlt className="w-4 h-4" />
            </button>
          </div>

          {/* ORDER CARD 2: SESAME (FLAGGED WARNING) */}
          <div className="bg-[#fffdf5] border-2 border-amber-300/90 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
              <div>
                <span className="font-mono font-bold text-xs text-gray-900">
                  HL-2024-SES-0019
                </span>{" "}
                <span className="text-xs text-gray-500 font-medium">
                  · Sesame · Whitish — 99.95% purity
                </span>
              </div>
              <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                <BiErrorAlt className="w-3.5 h-3.5 text-amber-700" /> 1 batch flagged
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Buyer</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Meridian Oils Nigeria Ltd</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Required by</span>
                <p className="font-extrabold text-gray-900 mt-0.5">30 Nov 2024</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Aggregation hub</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Makurdi</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Destination</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Onne Port, Rivers State</p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-4 gap-2 text-xs pt-1">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Required</span>
                <p className="text-xl font-black text-gray-900 mt-0.5">100 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                <p className="text-xl font-black text-gray-900 mt-0.5">0 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Received</span>
                <p className="text-xl font-black text-blue-700 mt-0.5">62.0 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Verified</span>
                <p className="text-xl font-black text-gray-400 mt-0.5">0.0 MT</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-300 rounded-full w-[0%]" />
              </div>
              <p className="text-[10px] text-gray-400 font-bold">0% verified</p>
            </div>

            {/* Batches Pill Bar */}
            <div className="bg-amber-100/50 border border-amber-200/60 rounded-xl p-3 flex items-center gap-3 text-xs">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Batches:</span>
              <span className="text-blue-800 font-bold">• 1 Received</span>
              <span className="text-amber-900 font-extrabold">• 1 Flagged</span>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                setSelectedOrderId("HL-2024-SES-0019");
                setView("detail");
              }}
              className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 transition-colors shadow-xs"
            >
              <span>View order detail</span>
              <BiRightArrowAlt className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          VIEW 2: ORDER DETAIL PAGE
         ========================================== */}
      {view === "detail" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Assigned orders</span>
          </button>

          {/* Banner Card */}
          <div className="bg-[#0f4022] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-800/80 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  ORDER
                </span>
                <h1 className="text-2xl font-black text-white mt-0.5">
                  HL-2024-CCO-0041
                </h1>
                <p className="text-xs text-emerald-200/80 font-medium">
                  Cocoa · Grade 1 — Fermented & Dried
                </p>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] text-emerald-300/80 font-bold uppercase block">
                  Buyer
                </span>
                <p className="font-black text-sm text-white">
                  Agrofresh Processors Ltd
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Required</span>
                <p className="text-2xl font-black text-amber-400 mt-0.5">80 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Committed</span>
                <p className="text-2xl font-black text-white mt-0.5">48 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Received</span>
                <p className="text-2xl font-black text-emerald-300 mt-0.5">47.8 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Verified</span>
                <p className="text-2xl font-black text-emerald-300 mt-0.5">47.8 MT</p>
              </div>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Specification / grade</span>
              <p className="font-extrabold text-gray-900">Grade 1 — Fermented & Dried</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Aggregation point</span>
              <p className="font-extrabold text-gray-900">Ondo State Aggregation Hub — Akure</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Destination</span>
              <p className="font-extrabold text-gray-900">Apapa Export Terminal, Lagos</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Required delivery date</span>
              <p className="font-extrabold text-gray-900">14 Nov 2024</p>
            </div>
          </div>

          {/* Supply Contributions Stack */}
          <div className="space-y-4 pt-2">
            <div>
              <h3 className="font-extrabold text-sm text-gray-900">
                Supply contributions (3)
              </h3>
              <p className="text-xs text-gray-400 leading-normal mt-0.5">
                Each row is a committed supply contribution from a farmer or cooperative. Committed quantities are not yet verified until physically received and checked at the aggregation hub.
              </p>
            </div>

            {/* BATCH 1 */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-gray-900">BAT-001</span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Batch verified
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">Received 26 Oct 2024</span>
              </div>

              <div>
                <h4 className="font-black text-sm text-gray-900">Balogun Adewale & Sons</h4>
                <p className="text-[11px] text-gray-400">
                  Ondo State Aggregation Hub — Akure · OND 418 HKY · Driver: Ibadan Olatunji
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs border-y border-gray-100 py-3">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                  <p className="text-base font-black text-gray-900 mt-0.5">18 MT</p>
                  <p className="text-[9px] text-gray-400">not yet verified</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Received</span>
                  <p className="text-base font-black text-blue-700 mt-0.5">17.6 MT</p>
                  <p className="text-[9px] text-red-600 font-bold">-2.2% vs committed</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Verified</span>
                  <p className="text-base font-black text-emerald-800 mt-0.5">17.6 MT</p>
                  <p className="text-[9px] text-gray-400">26 Oct 2024</p>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 leading-normal">
                Moisture content 7.2%. Grade confirmed. Minor weight variance (-0.4 MT) noted and accepted.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-gray-100 text-xs">
                <span className="font-bold text-gray-700 flex items-center gap-1">
                  <BiCheck className="text-emerald-700 w-4 h-4" /> Verified by Emmanuel Adeyemi - 26 Oct 2024
                </span>

                <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-3.5 py-1.5 rounded-xl text-xs transition-colors shadow-2xs">
                  View record
                </button>
              </div>
            </div>

            {/* BATCH 2 */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-gray-900">BAT-002</span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Batch verified
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">Received 24 Oct 2024</span>
              </div>

              <div>
                <h4 className="font-black text-sm text-gray-900">Oke-Igbo Cocoa Cooperative</h4>
                <p className="text-[11px] text-gray-400">
                  Ondo State Aggregation Hub — Akure · OND 203 KJG · Driver: Ayo Adeleke
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs border-y border-gray-100 py-3">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                  <p className="text-base font-black text-gray-900 mt-0.5">30 MT</p>
                  <p className="text-[9px] text-gray-400">not yet verified</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Received</span>
                  <p className="text-base font-black text-blue-700 mt-0.5">30.2 MT</p>
                  <p className="text-[9px] text-emerald-600 font-bold">+0.7% vs committed</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Verified</span>
                  <p className="text-base font-black text-emerald-800 mt-0.5">30.2 MT</p>
                  <p className="text-[9px] text-gray-400">24 Oct 2024</p>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 leading-normal">
                Grade 1 confirmed. Full quantity received. Slight over-delivery (+0.2 MT) recorded.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-gray-100 text-xs">
                <span className="font-bold text-gray-700 flex items-center gap-1">
                  <BiCheck className="text-emerald-700 w-4 h-4" /> Verified by Emmanuel Adeyemi - 24 Oct 2024
                </span>

                <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-3.5 py-1.5 rounded-xl text-xs transition-colors shadow-2xs">
                  View record
                </button>
              </div>
            </div>

            {/* BATCH 3 (AWAITING AGGREGATION) */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-gray-900">BAT-003</span>
                  <span className="bg-gray-100 text-gray-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Awaiting aggregation
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-black text-sm text-gray-900">Chukwuemeka Farms</h4>
                <p className="text-[11px] text-gray-400">Ondo State Aggregation Hub — Akure</p>
              </div>

              <div className="border-y border-gray-100 py-3 text-xs">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                <p className="text-base font-black text-gray-900 mt-0.5">15 MT</p>
                <p className="text-[9px] text-gray-400">not yet verified</p>
              </div>

              <p className="text-[11px] text-gray-500">
                Awaiting delivery. Scheduled 1 Nov 2024.
              </p>

              <div className="pt-2">
                <button className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs inline-flex items-center gap-2 transition-colors shadow-xs">
                  <span>Record batch arrival</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Explanatory Footer Box */}
          <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-5 space-y-1 text-xs">
            <h4 className="font-bold text-gray-900 text-xs">Committed quantity vs verified quantity</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Committed means the farmer or cooperative agreed to supply this amount. Verified means the physical batch was received at the aggregation hub, weighed, and the specification was checked by you. Only verified quantities count toward dispatch readiness.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}