"use client";

import React, { useState } from "react";

export interface SupplyBatch {
  id: string;
  orderRef: string;
  supplier: string;
  aggregationPoint: string;
  declared: string;
  received: string;
  verified: string;
  status: "verified" | "pending" | "flagged" | "received";
  commodity: "cocoa" | "sesame" | "cashew";
}

export default function SupplyMonitoringPage() {
  const [selectedCommodity, setSelectedCommodity] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const [batches] = useState<SupplyBatch[]>([
    {
      id: "BAT-001",
      orderRef: "HL-2024-CCO-0041",
      supplier: "Balogun Adewale & Sons",
      aggregationPoint: "Ondo State Aggregation Hub — Akure",
      declared: "18 MT",
      received: "17.6 MT",
      verified: "17.6 MT",
      status: "verified",
      commodity: "cocoa",
    },
    {
      id: "BAT-002",
      orderRef: "HL-2024-CCO-0041",
      supplier: "Oke-Igbo Cocoa Cooperative",
      aggregationPoint: "Ondo State Aggregation Hub — Akure",
      declared: "30 MT",
      received: "30.2 MT",
      verified: "30.2 MT",
      status: "verified",
      commodity: "cocoa",
    },
    {
      id: "BAT-003",
      orderRef: "HL-2024-CCO-0041",
      supplier: "Chukwuemeka Farms",
      aggregationPoint: "Ondo State Aggregation Hub — Akure",
      declared: "15 MT",
      received: "—",
      verified: "—",
      status: "pending",
      commodity: "cocoa",
    },
    {
      id: "BAT-004",
      orderRef: "HL-2024-SES-0019",
      supplier: "Tiv Sesame Farmers Cooperative",
      aggregationPoint: "Benue South Aggregation Hub — Makurdi",
      declared: "38 MT",
      received: "38 MT",
      verified: "—",
      status: "flagged",
      commodity: "sesame",
    },
    {
      id: "BAT-005",
      orderRef: "HL-2024-SES-0019",
      supplier: "Lafia Sesame Growers Union",
      aggregationPoint: "Benue South Aggregation Hub — Makurdi",
      declared: "25 MT",
      received: "24 MT",
      verified: "—",
      status: "received",
      commodity: "sesame",
    },
  ]);

  const filteredBatches = batches.filter((batch) => {
    if (
      selectedCommodity !== "all" &&
      batch.commodity.toLowerCase() !== selectedCommodity.toLowerCase()
    ) {
      return false;
    }
    if (selectedStatus !== "all" && batch.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Supply monitoring
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Declared → Received → Verified. Batch-level supply chain visibility.
        </p>
      </div>

      {/* Process Clarification Banner */}
      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3.5 text-xs text-emerald-900 font-semibold leading-relaxed shadow-2xs">
        <span className="font-black text-[#0c4a24]">Declared</span> = supplier self-report ·{" "}
        <span className="font-black text-[#0c4a24]">Received</span> = physically at aggregation point ·{" "}
        <span className="font-black text-[#0c4a24]">Verified</span> = quality-checked and accepted
      </div>

      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total declared
          </span>
          <span className="text-xl font-black text-gray-900 block">126 MT</span>
          <span className="text-[10px] text-gray-400 font-medium">By suppliers</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total received
          </span>
          <span className="text-xl font-black text-blue-600 block">109.8 MT</span>
          <span className="text-[10px] text-gray-400 font-medium">At aggregation point</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total verified
          </span>
          <span className="text-xl font-black text-emerald-700 block">47.8 MT</span>
          <span className="text-[10px] text-gray-400 font-medium">After quality check</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Flagged batches
          </span>
          <span className="text-xl font-black text-red-600 block">1</span>
          <span className="text-[10px] text-gray-400 font-medium">Requiring review</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total batches
          </span>
          <span className="text-xl font-black text-gray-900 block">5</span>
          <span className="text-[10px] text-gray-400 font-medium">All status</span>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Commodity Filter */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase">
              Commodity
            </label>
            <select
              value={selectedCommodity}
              onChange={(e) => setSelectedCommodity(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
            >
              <option value="all">All commodities</option>
              <option value="cocoa">Cocoa</option>
              <option value="sesame">Sesame</option>
              <option value="cashew">Cashew</option>
            </select>
          </div>

          {/* Batch Status Filter */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase">
              Batch status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
            >
              <option value="all">All statuses</option>
              <option value="verified">Verified</option>
              <option value="received">Received</option>
              <option value="pending">Pending</option>
              <option value="flagged">Flagged</option>
            </select>
          </div>
        </div>

        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredBatches.length} batches
        </span>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-4">BATCH ID</th>
                <th className="py-3 px-3">ORDER REF.</th>
                <th className="py-3 px-3">SUPPLIER</th>
                <th className="py-3 px-3">AGGREGATION POINT</th>
                <th className="py-3 px-2">DECLARED</th>
                <th className="py-3 px-2">RECEIVED</th>
                <th className="py-3 px-2">VERIFIED</th>
                <th className="py-3 px-4 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {filteredBatches.map((batch) => (
                <tr key={batch.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-4 font-black text-gray-900">{batch.id}</td>
                  <td className="py-4 px-3 font-medium text-gray-500">{batch.orderRef}</td>
                  <td className="py-4 px-3 font-bold text-gray-900">{batch.supplier}</td>
                  <td className="py-4 px-3 text-gray-600 font-medium">{batch.aggregationPoint}</td>
                  <td className="py-4 px-2 font-black text-gray-900">{batch.declared}</td>
                  <td className="py-4 px-2 font-black text-blue-600">{batch.received}</td>
                  <td className="py-4 px-2 font-black text-emerald-700">{batch.verified}</td>
                  <td className="py-4 px-4 text-right">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full inline-block ${
                        batch.status === "verified"
                          ? "bg-emerald-100 text-emerald-800"
                          : batch.status === "received"
                          ? "bg-blue-100 text-blue-800"
                          : batch.status === "flagged"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      • {batch.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}