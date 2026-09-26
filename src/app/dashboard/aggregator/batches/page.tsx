"use client";

import React, { useState } from "react";
import BatchList from "./BatchList";
import BatchDetail from "./BatchDetail";
import RecordArrivalForm from "./RecordArrivalForm";
import VerifyBatchForm from "./VerifyBatchForm";
import FlaggedBatchDetail from "@/src/components/FlaggedBatchDetail";


export type BatchStatus = "verified" | "awaiting" | "flagged" | "received";

export interface BatchItem {
  id: string;
  orderId: string;
  supplier: string;
  commodity: string;
  spec: string;
  vehicleRef?: string;
  driver?: string;
  committedQty: string;
  receivedQty?: string;
  verifiedQty?: string;
  variance?: string;
  status: BatchStatus;
  receivedAt?: string;
  verifiedAt?: string;
  verifiedBy?: string;
  notes?: string;
  flagReason?: string;
  hub: string;
}

export default function AggregatorBatchesPage() {
  const [view, setView] = useState<
    "list" | "detail" | "record-arrival" | "arrival-success" | "verify-form"
  >("list");

  const [selectedBatchId, setSelectedBatchId] = useState<string>("BAT-001");

  // Initial Mock Data
  const [batches, setBatches] = useState<BatchItem[]>([
    {
      id: "BAT-001",
      orderId: "HL-2024-CCO-0041",
      supplier: "Balogun Adewale & Sons",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      vehicleRef: "OND 418 HKY",
      driver: "Ibadan Olatunji",
      committedQty: "18 MT",
      receivedQty: "17.6 MT",
      verifiedQty: "17.6 MT",
      variance: "-2.2% vs committed",
      status: "verified",
      receivedAt: "26 Oct 2024, 02:14",
      verifiedAt: "26 Oct 2024, 04:30",
      verifiedBy: "Emmanuel Adeyemi",
      notes: "Moisture content 7.2%. Grade confirmed. Minor weight variance (-0.4 MT) noted and accepted.",
      hub: "Ondo State Aggregation Hub — Akure",
    },
    {
      id: "BAT-002",
      orderId: "HL-2024-CCO-0041",
      supplier: "Oke-Igbo Cocoa Cooperative",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      vehicleRef: "OND 203 KJG",
      driver: "Ayo Adeleke",
      committedQty: "30 MT",
      receivedQty: "30.2 MT",
      verifiedQty: "30.2 MT",
      variance: "+0.7% vs committed",
      status: "verified",
      receivedAt: "24 Oct 2024, 07:00",
      verifiedAt: "24 Oct 2024, 09:45",
      verifiedBy: "Emmanuel Adeyemi",
      notes: "Grade 1 confirmed. Full quantity received. Slight over-delivery (+0.2 MT) recorded.",
      hub: "Ondo State Aggregation Hub — Akure",
    },
    {
      id: "BAT-003",
      orderId: "HL-2024-CCO-0041",
      supplier: "Chukwuemeka Farms",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      committedQty: "15 MT",
      status: "awaiting",
      notes: "Awaiting delivery. Scheduled 1 Nov 2024.",
      hub: "Ondo State Aggregation Hub — Akure",
    },
    {
      id: "BAT-004",
      orderId: "HL-2024-SES-0019",
      supplier: "Tiv Sesame Farmers Cooperative",
      commodity: "Sesame",
      spec: "Whitish — 99.95% purity",
      vehicleRef: "BEN 117 MVX",
      driver: "Danlami Usman",
      committedQty: "38 MT",
      receivedQty: "38 MT",
      status: "flagged",
      receivedAt: "29 Oct 2024, 01:05",
      flagReason: "Moisture content above 8% — exceeds the 6% maximum for Whitish sesame grade.",
      notes: "Moisture level exceeds specification. Sample sent for lab testing.",
      hub: "Benue South Aggregation Hub — Makurdi",
    },
    {
      id: "BAT-005",
      orderId: "HL-2024-SES-0019",
      supplier: "Lafia Sesame Growers Union",
      commodity: "Sesame",
      spec: "Whitish — 99.95% purity",
      vehicleRef: "NAS 334 BEF",
      driver: "Ibrahim Sule",
      committedQty: "25 MT",
      receivedQty: "24 MT",
      variance: "-4.0% vs committed",
      status: "received",
      receivedAt: "30 Oct 2024, 03:15",
      notes: "Arrived by truck. 24 MT received against 25 MT committed. Weighing completed. Awaiting full specification check.",
      hub: "Benue South Aggregation Hub — Makurdi",
    },
  ]);

  const activeBatch = batches.find((b) => b.id === selectedBatchId) || batches[0];

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {view === "list" && (
        <BatchList
          batches={batches}
          onSelectBatch={(id, targetView) => {
            setSelectedBatchId(id);
            setView(targetView);
          }}
        />
      )}

      {view === "detail" && (
        activeBatch.status === "flagged" ? (
          <FlaggedBatchDetail
            batch={activeBatch}
            onBack={() => setView("list")}
          />
        ) : (
          <BatchDetail
            batch={activeBatch}
            onBack={() => setView("list")}
            onStartArrival={() => setView("record-arrival")}
            onStartVerification={() => setView("verify-form")}
          />
        )
      )}

      {view === "record-arrival" && (
        <RecordArrivalForm
          batch={activeBatch}
          onBack={() => setView("detail")}
          onSuccess={(receivedAmount) => {
            setBatches((prev) =>
              prev.map((b) =>
                b.id === activeBatch.id
                  ? {
                      ...b,
                      status: "received",
                      receivedQty: `${receivedAmount} MT`,
                      receivedAt: "24 Sept 2026, 00:12",
                    }
                  : b
              )
            );
            setView("arrival-success");
          }}
        />
      )}

      {view === "arrival-success" && (
        <div className="space-y-6">
          <div className="bg-[#f0f5ff] border border-[#d0e0ff] rounded-2xl p-8 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xl font-bold mx-auto">
              ✓
            </div>
            <h2 className="text-xl font-black text-gray-900">Arrival recorded</h2>
            <span className="bg-blue-100 text-blue-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md inline-block">
              • Batch received
            </span>
            <p className="text-xs text-blue-900/80 font-bold">
              {activeBatch.receivedQty || "15 MT"} received · {activeBatch.supplier}
            </p>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-2 text-xs divide-y divide-gray-100">
            <div className="flex justify-between pb-2">
              <span className="text-gray-400">Batch ID</span>
              <span className="font-extrabold text-gray-900">{activeBatch.id}</span>
            </div>
            <div className="flex justify-between pt-2 pb-2">
              <span className="text-gray-400">Received</span>
              <span className="font-extrabold text-gray-900">{activeBatch.receivedQty || "15 MT"}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-gray-400">Arrived</span>
              <span className="font-extrabold text-gray-900">24 Sept 2026, 00:12</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setView("verify-form")}
              className="w-full sm:w-auto bg-[#1e40af] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-xs"
            >
              Begin verification now →
            </button>
            <button
              onClick={() => setView("list")}
              className="text-xs font-bold text-gray-500 hover:text-gray-800"
            >
              Verify later — return to batch view
            </button>
          </div>
        </div>
      )}

      {view === "verify-form" && (
        <VerifyBatchForm
          batch={activeBatch}
          onBack={() => setView("detail")}
          onComplete={(verifiedAmount) => {
            setBatches((prev) =>
              prev.map((b) =>
                b.id === activeBatch.id
                  ? {
                      ...b,
                      status: "verified",
                      verifiedQty: `${verifiedAmount} MT`,
                      verifiedAt: "24 Sept 2026, 00:30",
                      verifiedBy: "Emmanuel Adeyemi",
                    }
                  : b
              )
            );
            setView("list");
          }}
          onFlag={(reason:any) => {
            setBatches((prev) =>
              prev.map((b) =>
                b.id === activeBatch.id
                  ? {
                      ...b,
                      status: "flagged",
                      flagReason: reason,
                    }
                  : b
              )
            );
            setView("list");
          }}
        />
      )}
    </div>
  );
}