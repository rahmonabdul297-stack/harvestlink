"use client";

import React from "react";
import { BatchItem } from "./page";
import { BiLeftArrowAlt, BiCheck } from "react-icons/bi";

interface BatchDetailProps {
  batch: BatchItem;
  onBack: () => void;
  onStartArrival: () => void;
  onStartVerification: () => void;
}

export default function BatchDetail({
  batch,
  onBack,
  onStartArrival,
  onStartVerification,
}: BatchDetailProps) {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
      >
        <BiLeftArrowAlt className="w-4 h-4" />
        <span>Back to Batches</span>
      </button>

      {/* Dark Banner */}
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
            <span className="inline-block mt-2 bg-emerald-100 text-emerald-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md">
              • {batch.status === "verified" ? "Batch verified" : batch.status}
            </span>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase block">Order</span>
            <p className="font-extrabold text-xs text-white">{batch.orderId}</p>
            <button className="text-[11px] font-bold text-emerald-300 hover:underline mt-1">
              View order →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Committed</span>
            <p className="text-2xl font-black text-amber-400 mt-0.5">{batch.committedQty}</p>
          </div>
          <div>
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Received</span>
            <p className="text-2xl font-black text-emerald-300 mt-0.5">
              {batch.receivedQty || "—"}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase">Accepted</span>
            <p className="text-2xl font-black text-emerald-300 mt-0.5">
              {batch.verifiedQty || "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Batch Details Table */}
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
            <span className="text-gray-400">Committed quantity</span>
            <span className="font-extrabold text-gray-900">{batch.committedQty}</span>
          </div>
          {batch.receivedQty && (
            <div className="py-2.5 flex justify-between">
              <span className="text-gray-400">Received quantity</span>
              <span className="font-extrabold text-blue-700">{batch.receivedQty}</span>
            </div>
          )}
          {batch.verifiedQty && (
            <div className="py-2.5 flex justify-between">
              <span className="text-gray-400">Accepted quantity</span>
              <span className="font-extrabold text-emerald-800">{batch.verifiedQty}</span>
            </div>
          )}
        </div>
      </div>

      {/* Specification Checks Box */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900">Specification checks</h3>

        <div className="space-y-2 text-xs font-bold text-emerald-800">
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-600 font-normal">Grade / specification</span>
            <span>✓ Pass</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-600 font-normal">Product condition</span>
            <span>✓ Pass</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-600 font-normal">Moisture / quality</span>
            <span>✓ Pass</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-50">
            <span className="text-gray-600 font-normal">Packaging & handling</span>
            <span>✓ Pass</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600 font-normal">Visible contamination</span>
            <span>✓ Pass</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      {batch.status === "awaiting" && (
        <button
          onClick={onStartArrival}
          className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-xs"
        >
          Record batch arrival →
        </button>
      )}

      {batch.status === "received" && (
        <button
          onClick={onStartVerification}
          className="bg-[#1e40af] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-xs"
        >
          Begin verification →
        </button>
      )}
    </div>
  );
}