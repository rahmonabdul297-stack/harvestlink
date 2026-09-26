"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiLeftArrowAlt, BiCheckCircle } from "react-icons/bi";

export default function FarmerDeliveredRequestsPage() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "NEEDS_RESPONSE" | "DELIVERED">("DELIVERED");
  const [selectedDetail, setSelectedDetail] = useState<any | null>(null);

  const deliveredRequests = [
    {
      id: "HL-2023-SES-0007",
      commodity: "Sesame",
      spec: "Whitish — 99.95% purity",
      requestedQty: "15 MT",
      yourCommitment: "14 MT",
      requiredBy: "15 Nov 2023",
      dropOffPoint: "Benue South Aggregation Hub",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "HL-2024-CCO-0041",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      requestedQty: "18 MT",
      yourCommitment: "18 MT",
      requiredBy: "15 Nov 2024",
      dropOffPoint: "Ondo State Aggregation Hub",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "HL-2024-CCO-0041",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      requestedQty: "30 MT",
      yourCommitment: "30 MT",
      requiredBy: "15 Nov 2024",
      dropOffPoint: "Ondo State Aggregation Hub",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {!selectedDetail ? (
        <>
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Delivered requests
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Supply requests from HarvestLink on behalf of buyers. Review and commit to the requests that work for you.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 text-xs font-bold">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                activeFilter === "ALL"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              All <span className="text-[10px] opacity-80">4</span>
            </button>

            <button
              onClick={() => setActiveFilter("NEEDS_RESPONSE")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                activeFilter === "NEEDS_RESPONSE"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Needs response <span className="text-[10px] opacity-80">1</span>
            </button>

            <button
              onClick={() => setActiveFilter("DELIVERED")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                activeFilter === "DELIVERED"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Delivered <span className="text-[10px] opacity-80">3</span>
            </button>
          </div>

          {/* DELIVERED CARDS LIST */}
          <div className="space-y-4">
            {deliveredRequests.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs"
              >
                {/* Top Reference & Badge */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
                  <span className="font-mono font-bold text-gray-400 text-[11px]">
                    {item.id}
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Delivered
                  </span>
                </div>

                {/* Commodity Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.commodity}
                    className="w-10 h-10 rounded-xl object-cover border border-gray-100 shrink-0"
                  />
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900">
                      {item.commodity}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.spec}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Requested qty
                    </p>
                    <p className="text-base font-black text-gray-900 mt-0.5">
                      {item.requestedQty}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Your commitment
                    </p>
                    <p className="text-base font-black text-emerald-800 mt-0.5">
                      {item.yourCommitment}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Required by
                    </p>
                    <p className="text-xs font-bold text-gray-800 mt-1">
                      {item.requiredBy}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">
                      Drop-off point
                    </p>
                    <p className="text-xs font-bold text-gray-800 mt-1">
                      {item.dropOffPoint}
                    </p>
                  </div>
                </div>

                {/* View Details CTA & Bottom Note */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedDetail(item)}
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-2xs"
                  >
                    View details
                  </button>

                  <p className="text-[11px] text-gray-400">
                    This delivery is complete. Your supply was received and verified at the aggregation point.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Footer Box */}
          <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-5 space-y-2 text-xs">
            <h4 className="font-bold text-gray-900">What is a supply request?</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              HarvestLink sends you supply requests when a buyer&apos;s demand matches your supply record. You can accept and commit a quantity, or decline if you cannot supply. Your response will only be recorded when you confirm it — HarvestLink will never commit supply on your behalf automatically.
            </p>
          </div>
        </>
      ) : (
        /* DELIVERED DETAILS VIEW */
        <div className="space-y-6">
          <button
            onClick={() => setSelectedDetail(null)}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to requests</span>
          </button>

          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Request details
            </h1>
            <p className="text-xs font-mono font-bold text-gray-400">
              {selectedDetail.id}
            </p>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-emerald-50/80 p-4 border-b border-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-2">
              <BiCheckCircle className="w-5 h-5 text-emerald-700" />
              <span>Delivery completed</span>
            </div>

            <div className="p-6 space-y-4 text-xs divide-y divide-gray-100">
              <div className="pb-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  COMMODITY
                </span>
                <p className="font-extrabold text-sm text-gray-900 mt-0.5">
                  {selectedDetail.commodity}
                </p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  GRADE
                </span>
                <p className="font-extrabold text-gray-900 mt-0.5">
                  {selectedDetail.spec}
                </p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  COMMITTED QUANTITY
                </span>
                <p className="text-xl font-black text-gray-900 mt-0.5">
                  {selectedDetail.yourCommitment}
                </p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  REQUIRED BY
                </span>
                <p className="font-extrabold text-gray-900 mt-0.5">
                  {selectedDetail.requiredBy}
                </p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  AGGREGATION POINT
                </span>
                <p className="font-extrabold text-gray-900 mt-0.5">
                  {selectedDetail.dropOffPoint}
                </p>
              </div>

              <div className="pt-4">
                <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-3.5 text-xs text-emerald-950">
                  Your supply was delivered and received at the aggregation point. This contribution was included in the buyer&apos;s order.
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedDetail(null)}
            className="bg-white border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs hover:bg-gray-50 transition-colors"
          >
            Back to requests
          </button>
        </div>
      )}
    </div>
  );
}