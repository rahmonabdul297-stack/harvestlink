"use client";

import React, { useState } from "react";
import { BiRightArrowAlt, BiErrorAlt } from "react-icons/bi";
import { BatchItem } from "./page";

interface BatchListProps {
  batches: BatchItem[];
  onSelectBatch: (id: string, view: "detail" | "record-arrival" | "verify-form") => void;
}

export default function BatchList({ batches, onSelectBatch }: BatchListProps) {
  const [filter, setFilter] = useState<"ALL" | "AWAITING" | "RECEIVED" | "VERIFIED" | "FLAGGED">("ALL");

  const counts = {
    all: batches.length,
    awaiting: batches.filter((b) => b.status === "awaiting").length,
    received: batches.filter((b) => b.status === "received").length,
    verified: batches.filter((b) => b.status === "verified").length,
    flagged: batches.filter((b) => b.status === "flagged").length,
  };

  const filteredBatches = batches.filter((b) => {
    if (filter === "AWAITING") return b.status === "awaiting";
    if (filter === "RECEIVED") return b.status === "received";
    if (filter === "VERIFIED") return b.status === "verified";
    if (filter === "FLAGGED") return b.status === "flagged";
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Batches</h1>
        <p className="text-xs text-gray-500 font-medium">
          All supply batches assigned to your hubs. Record arrivals and verify each batch against the order specification.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
        {[
          { key: "ALL", label: "All batches", count: counts.all },
          { key: "AWAITING", label: "Awaiting arrival", count: counts.awaiting },
          { key: "RECEIVED", label: "Received", count: counts.received },
          { key: "VERIFIED", label: "Verified", count: counts.verified },
          { key: "FLAGGED", label: "Flagged", count: counts.flagged },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
              filter === tab.key
                ? "bg-[#0f4022] text-white border-[#0f4022]"
                : "bg-white text-gray-600 border-gray-200/80 hover:bg-gray-50"
            }`}
          >
            {tab.label} <span className="text-[10px] opacity-80">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Batches Stack */}
      <div className="space-y-4">
        {filteredBatches.map((b) => (
          <div
            key={b.id}
            className={`border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs transition-shadow ${
              b.status === "flagged"
                ? "bg-[#fffdf5] border-amber-300"
                : b.status === "received"
                ? "bg-[#f8faff] border-blue-200"
                : "bg-white border-gray-200/80"
            }`}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-gray-900">{b.id}</span>
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                    b.status === "verified"
                      ? "bg-emerald-100 text-emerald-900"
                      : b.status === "awaiting"
                      ? "bg-gray-100 text-gray-700"
                      : b.status === "flagged"
                      ? "bg-amber-100 text-amber-900"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  • {b.status === "verified" && "Batch verified"}
                  {b.status === "awaiting" && "Awaiting aggregation"}
                  {b.status === "flagged" && "Flagged for review"}
                  {b.status === "received" && "Batch received"}
                </span>
              </div>

              <span className="text-[10px] text-gray-400">
                Order: <strong className="text-gray-700">{b.orderId}</strong>
                {b.receivedAt && ` · Received: ${b.receivedAt}`}
                {b.verifiedAt && ` · Verified: ${b.verifiedAt}`}
              </span>
            </div>

            {/* Content Body */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-base text-gray-900">{b.supplier}</h3>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {b.commodity} · {b.spec} {b.vehicleRef && `· ${b.vehicleRef}`}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="shrink-0">
                {b.status === "verified" && (
                  <button
                    onClick={() => onSelectBatch(b.id, "detail")}
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs shadow-2xs"
                  >
                    View record
                  </button>
                )}

                {b.status === "awaiting" && (
                  <button
                    onClick={() => onSelectBatch(b.id, "record-arrival")}
                    className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-2xs"
                  >
                    Record arrival
                  </button>
                )}

                {b.status === "flagged" && (
                  <button
                    onClick={() => onSelectBatch(b.id, "detail")}
                    className="bg-[#b45309] hover:bg-amber-800 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-2xs"
                  >
                    Review flag
                  </button>
                )}

                {b.status === "received" && (
                  <button
                    onClick={() => onSelectBatch(b.id, "verify-form")}
                    className="bg-[#1e40af] hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-2xs"
                  >
                    Begin verification
                  </button>
                )}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 text-xs pt-1 border-t border-gray-100">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Committed</span>
                <p className="text-base font-black text-gray-900 mt-0.5">{b.committedQty}</p>
              </div>

              {b.receivedQty && (
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Received</span>
                  <p className="text-base font-black text-blue-700 mt-0.5">{b.receivedQty}</p>
                  {b.variance && (
                    <p className="text-[9px] text-emerald-600 font-bold">{b.variance}</p>
                  )}
                </div>
              )}

              {b.verifiedQty && (
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Verified</span>
                  <p className="text-base font-black text-emerald-800 mt-0.5">{b.verifiedQty}</p>
                </div>
              )}
            </div>

            {/* Flag Callout Box */}
            {b.flagReason && (
              <div className="bg-[#fffdf0] border border-amber-300 rounded-xl p-3 text-xs text-amber-900 font-medium">
                <strong>Flag:</strong> {b.flagReason}
              </div>
            )}

            {/* Notes */}
            {b.notes && !b.flagReason && (
              <p className="text-[11px] text-gray-400 leading-normal">{b.notes}</p>
            )}

            <p className="text-[10px] text-gray-400 pt-1">Hub: {b.hub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}