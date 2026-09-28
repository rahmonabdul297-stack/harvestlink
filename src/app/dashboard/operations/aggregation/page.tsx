"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiAlertTriangle } from "react-icons/fi";

export interface HubBatch {
  id: string;
  supplier: string;
  commoditySpec: string;
  declared: string;
  verified?: string;
  status: "verified" | "pending" | "flagged" | "received";
  date?: string;
  orderRef: string;
}

export interface AggregationHub {
  name: string;
  activeOrdersCount: number;
  batchesCount: number;
  declared: string;
  received: string;
  verified: string;
  flaggedCount?: number;
  batches: HubBatch[];
}

export default function AggregationMonitoringPage() {
  const hubs: AggregationHub[] = [
    {
      name: "Ondo State Aggregation Hub — Akure",
      activeOrdersCount: 2,
      batchesCount: 3,
      declared: "63 MT",
      received: "47.8 MT",
      verified: "47.8 MT",
      batches: [
        {
          id: "BAT-001",
          supplier: "Balogun Adewale & Sons",
          commoditySpec: "Cocoa Grade 1 — Fermented & Dried",
          declared: "18 MT",
          verified: "17.6 MT",
          status: "verified",
          date: "26 Oct 2024",
          orderRef: "HL-2024-CCO-0041",
        },
        {
          id: "BAT-002",
          supplier: "Oke-Igbo Cocoa Cooperative",
          commoditySpec: "Cocoa Grade 1 — Fermented & Dried",
          declared: "30 MT",
          verified: "30.2 MT",
          status: "verified",
          date: "24 Oct 2024",
          orderRef: "HL-2024-CCO-0041",
        },
        {
          id: "BAT-003",
          supplier: "Chukwuemeka Farms",
          commoditySpec: "Cocoa Grade 1 — Fermented & Dried",
          declared: "15 MT",
          status: "pending",
          orderRef: "HL-2024-CCO-0041",
        },
      ],
    },
    {
      name: "Benue South Aggregation Hub — Makurdi",
      activeOrdersCount: 1,
      batchesCount: 2,
      declared: "63 MT",
      received: "62 MT",
      verified: "0 MT",
      flaggedCount: 1,
      batches: [
        {
          id: "BAT-004",
          supplier: "Tiv Sesame Farmers Cooperative",
          commoditySpec: "Sesame Whitish — 99.95% purity",
          declared: "38 MT",
          status: "flagged",
          orderRef: "HL-2024-SES-0019",
        },
        {
          id: "BAT-005",
          supplier: "Lafia Sesame Growers Union",
          commoditySpec: "Sesame Whitish — 99.95% purity",
          declared: "25 MT",
          status: "received",
          orderRef: "HL-2024-SES-0019",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Aggregation monitoring
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Activity by aggregation point.
        </p>
      </div>

      {/* Top Overview Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Aggregation points
          </span>
          <span className="text-xl font-black text-gray-900 block">2</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total batches
          </span>
          <span className="text-xl font-black text-gray-900 block">5</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total declared
          </span>
          <span className="text-xl font-black text-gray-900 block">126 MT</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total verified
          </span>
          <span className="text-xl font-black text-emerald-700 block">47.8 MT</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Flagged
          </span>
          <span className="text-xl font-black text-red-600 block">1</span>
        </div>
      </div>

      {/* Aggregation Hub Cards */}
      <div className="space-y-6">
        {hubs.map((hub, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-6 space-y-5 shadow-2xs"
          >
            {/* Hub Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-base sm:text-lg font-black text-gray-900">
                  {hub.name}
                </h2>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {hub.activeOrdersCount} active orders · {hub.batchesCount} batches
                </p>
              </div>

              {hub.flaggedCount && hub.flaggedCount > 0 ? (
                <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-200/80 inline-flex items-center gap-1.5 self-start sm:self-auto">
                  <FiAlertTriangle className="w-3.5 h-3.5 text-red-600" />
                  <span>{hub.flaggedCount} Flagged</span>
                </span>
              ) : null}
            </div>

            {/* Hub Volume Stat Boxes */}
            <div className="grid grid-cols-3 max-w-sm gap-3">
              <div className="bg-gray-50/80 rounded-xl p-3 space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase block">
                  Declared
                </span>
                <span className="text-base sm:text-lg font-black text-gray-900 block">
                  {hub.declared}
                </span>
              </div>

              <div className="bg-gray-50/80 rounded-xl p-3 space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase block">
                  Received
                </span>
                <span className="text-base sm:text-lg font-black text-blue-600 block">
                  {hub.received}
                </span>
              </div>

              <div className="bg-gray-50/80 rounded-xl p-3 space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-gray-400 uppercase block">
                  Verified
                </span>
                <span className="text-base sm:text-lg font-black text-emerald-700 block">
                  {hub.verified}
                </span>
              </div>
            </div>

            {/* Batches List Under Hub */}
            <div className="divide-y divide-gray-100 text-xs">
              {hub.batches.map((batch) => (
                <div
                  key={batch.id}
                  className="py-3.5 first:pt-1 last:pb-1 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-gray-50/50 rounded-lg transition-colors px-1"
                >
                  {/* Left Specs */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-gray-900">{batch.id}</span>
                      <span className="font-medium text-gray-600">
                        {batch.supplier}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {batch.commoditySpec}
                    </p>
                  </div>

                  {/* Right Status & Actions */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 shrink-0">
                    <span className="font-bold text-gray-900">
                      {batch.declared} declared
                    </span>

                    {batch.verified && (
                      <span className="font-bold text-emerald-700">
                        {batch.verified} verified
                      </span>
                    )}

                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                        batch.status === "verified"
                          ? "bg-emerald-100 text-emerald-800"
                          : batch.status === "flagged"
                          ? "bg-red-100 text-red-800"
                          : batch.status === "received"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      • {batch.status}
                    </span>

                    {batch.date && (
                      <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block">
                        {batch.date}
                      </span>
                    )}

                    <Link
                      href={`/dashboard/operations/orders/${batch.orderRef}`}
                      className="bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold px-2.5 py-1 rounded-lg text-[11px] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{batch.orderRef}</span>
                      <FiArrowRight className="w-3 h-3 text-gray-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}