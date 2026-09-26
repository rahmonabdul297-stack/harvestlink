"use client";

import React from "react";

import { BiLeftArrowAlt, BiErrorAlt, BiCheck } from "react-icons/bi";
import { BatchItem } from "../app/dashboard/aggregator/batches/page";
import StatusHistoryTimeline from "./StatusHistoryTimeline";

interface FlaggedBatchDetailProps {
  batch: BatchItem;
  onBack: () => void;
}

export default function FlaggedBatchDetail({
  batch,
  onBack,
}: FlaggedBatchDetailProps) {
  return (
    <div className="space-y-6 max-w-4xl font-sans text-gray-900">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
      >
        <BiLeftArrowAlt className="w-4 h-4" />
        <span>Batches</span>
      </button>

      {/* Header Banner */}
      <div className="bg-[#0f4022] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-800/80 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              BATCH RECORD
            </span>
            <h1 className="text-2xl font-black text-white mt-0.5">{batch.id}</h1>
            <p className="text-xs text-emerald-200/80 font-medium">
              {batch.commodity} · {batch.spec} · {batch.supplier}
            </p>
            <span className="inline-flex items-center gap-1 mt-2.5 bg-amber-100 text-amber-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md">
              <BiErrorAlt className="w-3.5 h-3.5 text-amber-700" />
              • Flagged for review
            </span>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase block">
              Order
            </span>
            <p className="font-extrabold text-xs text-white">{batch.orderId}</p>
            <p className="text-[10px] text-emerald-200/70 font-medium mt-0.5">
              Meridian Oils Nigeria Ltd
            </p>
            <button className="text-[11px] font-bold text-emerald-300 hover:underline mt-1.5 inline-block">
              View order →
            </button>
          </div>
        </div>

        {/* Quantities */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase">
              Committed
            </span>
            <p className="text-2xl font-black text-white mt-0.5">
              {batch.committedQty}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase">
              Received
            </span>
            <p className="text-2xl font-black text-blue-300 mt-0.5">
              {batch.receivedQty || "38 MT"}
            </p>
          </div>
        </div>
      </div>

      {/* Batch Details Grid */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900">Batch details</h3>

        <div className="text-xs divide-y divide-gray-100 border-t border-b border-gray-100">
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Batch ID</span>
            <span className="font-extrabold text-gray-900">{batch.id}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Order</span>
            <span className="font-extrabold text-gray-900">{batch.orderId}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Buyer</span>
            <span className="font-extrabold text-gray-900">Meridian Oils Nigeria Ltd</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Supplier</span>
            <span className="font-extrabold text-gray-900">{batch.supplier}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Commodity</span>
            <span className="font-extrabold text-gray-900">{batch.commodity}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Grade / specification</span>
            <span className="font-extrabold text-gray-900">{batch.spec}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Aggregation point</span>
            <span className="font-extrabold text-gray-900">{batch.hub}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Destination</span>
            <span className="font-extrabold text-gray-900">Onne Port, Rivers State</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Committed quantity</span>
            <span className="font-extrabold text-gray-900">{batch.committedQty}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Received quantity</span>
            <span className="font-extrabold text-blue-700">{batch.receivedQty || "38 MT"}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Received at</span>
            <span className="font-extrabold text-gray-900">{batch.receivedAt || "29 Oct 2024, 01:05"}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Vehicle reference</span>
            <span className="font-extrabold text-gray-900">{batch.vehicleRef || "BEN 117 MVX"}</span>
          </div>
          <div className="py-2.5 flex justify-between">
            <span className="text-gray-400">Driver</span>
            <span className="font-extrabold text-gray-900">{batch.driver || "Danlami Usman"}</span>
          </div>
        </div>
      </div>

      {/* Specification Checks Status */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900">Specification checks</h3>

        <div className="space-y-2 text-xs divide-y divide-gray-50">
          <div className="flex justify-between py-1">
            <span className="text-gray-600 font-normal">Grade / specification</span>
            <span className="font-extrabold text-emerald-800">✓ Pass</span>
          </div>
          <div className="flex justify-between pt-2 py-1">
            <span className="text-gray-600 font-normal">Moisture / quality</span>
            <span className="font-extrabold text-amber-800 flex items-center gap-1">
              <BiErrorAlt className="w-3.5 h-3.5" /> Flagged
            </span>
          </div>
        </div>
      </div>

      {/* Flag Reason Yellow Box */}
      <div className="bg-[#fffdf0] border border-amber-300 rounded-2xl p-5 space-y-1 text-xs">
        <h4 className="font-extrabold text-amber-900 uppercase text-[10px] tracking-wider">
          FLAG REASON
        </h4>
        <p className="text-amber-950 font-medium leading-relaxed">
          Moisture content above 8% — exceeds the 6% maximum for Whitish sesame grade. Samples retained and sent to state laboratory for independent testing. Batch on hold pending result.
        </p>
      </div>

      {/* Notes Box */}
      <div className="bg-[#f9fafb] border border-gray-200/80 rounded-2xl p-4 text-xs text-gray-600 space-y-1">
        <span className="text-[10px] text-gray-400 font-bold uppercase block">Notes</span>
        <p>Moisture level exceeds specification. Sample sent for lab testing.</p>
      </div>

      {/* Status History Timeline */}
      <StatusHistoryTimeline
        history={[
          {
            title: "Supply committed by farmer",
            sub: "Prior to batch creation",
            completed: true,
          },
          {
            title: "Batch record created — awaiting aggregation",
            sub: "29 Oct 2024",
            completed: true,
          },
          {
            title: "Batch arrived at aggregation hub",
            sub: "29 Oct 2024, 01:05",
            completed: true,
          },
          {
            title: "Flagged for review",
            sub: "Pending lab result clearance",
            completed: true,
            isFlagged: true,
          },
        ]}
      />

      {/* Operational Hold Bottom Alert */}
      <div className="bg-[#fffbeb] border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed shadow-2xs">
        <strong className="font-extrabold block text-amber-950 mb-0.5">
          This batch is flagged and awaiting resolution.
        </strong>
        HarvestLink operations has been notified. Do not release or move this batch until you receive further instruction.
      </div>
    </div>
  );
}