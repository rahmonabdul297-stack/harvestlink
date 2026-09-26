"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiCheck,
  BiCheckCircle,
  BiError,
  BiTimeFive,
} from "react-icons/bi";

type ViewState = "list" | "review" | "commit-form" | "confirmation" | "delivered-details";

export default function FarmerSupplyRequestsPage() {
  const [view, setView] = useState<ViewState>("list");
  const [filterTab, setFilterTab] = useState<"ALL" | "NEEDS_RESPONSE" | "DELIVERED">("NEEDS_RESPONSE");

  // Commitment Form State
  const [commitmentQty, setCommitmentQty] = useState<number>(22);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [selectedDeliveredId, setSelectedDeliveredId] = useState<string>("HL-2023-SES-0007");

  const guidePricePerMT = 980000;
  const estimatedValue = commitmentQty * guidePricePerMT;

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
      id: "HL-2024-CCO-0041-2",
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
    <div className="max-w-3xl mx-auto font-sans text-gray-900 pb-12">
      {/* ==========================================
          VIEW 1 & 2: LIST VIEW (NEEDS RESPONSE / DELIVERED)
         ========================================== */}
      {view === "list" && (
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Your requests
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Supply requests from HarvestLink on behalf of buyers. Review and commit to the requests that work for you.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 text-xs font-bold">
            <button
              onClick={() => setFilterTab("ALL")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                filterTab === "ALL"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              All <span className="text-[10px] opacity-80">4</span>
            </button>

            <button
              onClick={() => setFilterTab("NEEDS_RESPONSE")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                filterTab === "NEEDS_RESPONSE"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Needs response <span className="text-[10px] opacity-80">1</span>
            </button>

            <button
              onClick={() => setFilterTab("DELIVERED")}
              className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
                filterTab === "DELIVERED"
                  ? "bg-[#0f4022] text-white border-[#0f4022]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              Delivered <span className="text-[10px] opacity-80">3</span>
            </button>
          </div>

          {/* Active Request Card (Needs Response) */}
          {(filterTab === "ALL" || filterTab === "NEEDS_RESPONSE") && (
            <div className="border-2 border-amber-300 rounded-2xl bg-[#fffdf5] p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <span className="font-mono">HL-2024-SES-0019</span>
                  <span>— Respond by 10 Nov 2024 (today)</span>
                </div>
                <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md self-start sm:self-auto">
                  • Awaiting your response
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop"
                    alt="Sesame"
                    className="w-12 h-12 rounded-xl object-cover border border-amber-200 shrink-0"
                  />
                  <div>
                    <h3 className="text-base font-black text-gray-900">Sesame</h3>
                    <p className="text-xs text-gray-500 font-medium">Whitish — 99.95% purity</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-1">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Proposed contribution</p>
                    <p className="text-2xl font-black text-emerald-800 mt-0.5">22 MT</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Required by</p>
                    <p className="text-xs font-extrabold text-gray-900 mt-1 sm:mt-2">1 Dec 2024</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Drop-off point</p>
                    <p className="text-xs font-bold text-gray-900 mt-1 sm:mt-2">Benue South Aggregation Hub</p>
                  </div>
                </div>

                <button
                  onClick={() => setView("review")}
                  className="w-full bg-[#0f4022] hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-xs inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Review this request</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Delivered Cards Stack */}
          {(filterTab === "ALL" || filterTab === "DELIVERED") && (
            <div className="space-y-4">
              {deliveredRequests.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs">
                    <span className="font-mono font-bold text-gray-400 text-[11px]">{item.id}</span>
                    <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md">
                      • Delivered
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.commodity}
                      className="w-10 h-10 rounded-xl object-cover border border-gray-100 shrink-0"
                    />
                    <div>
                      <h3 className="font-extrabold text-sm text-gray-900">{item.commodity}</h3>
                      <p className="text-xs text-gray-400 font-medium">{item.spec}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Requested qty</p>
                      <p className="text-base font-black text-gray-900 mt-0.5">{item.requestedQty}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Your commitment</p>
                      <p className="text-base font-black text-emerald-800 mt-0.5">{item.yourCommitment}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Required by</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">{item.requiredBy}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Drop-off point</p>
                      <p className="text-xs font-bold text-gray-800 mt-1">{item.dropOffPoint}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setSelectedDeliveredId(item.id);
                        setView("delivered-details");
                      }}
                      className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
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
          )}

          {/* Educational Footer */}
          <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-5 space-y-2 text-xs">
            <h4 className="font-bold text-gray-900">What is a supply request?</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              HarvestLink sends you supply requests when a buyer&apos;s demand matches your supply record. You can accept and commit a quantity, or decline if you cannot supply. Your response will only be recorded when you confirm it — HarvestLink will never commit supply on your behalf automatically.
            </p>
          </div>
        </div>
      )}

      {/* ==========================================
          VIEW 3: DELIVERED REQUEST DETAILS VIEW
         ========================================== */}
      {view === "delivered-details" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to requests</span>
          </button>

          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Request details</h1>
            <p className="text-xs font-mono font-bold text-gray-400">{selectedDeliveredId}</p>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs">
            {/* Top Banner */}
            <div className="bg-emerald-50/80 p-4 border-b border-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-2">
              <BiCheckCircle className="w-5 h-5 text-emerald-700" />
              <span>Delivery completed</span>
            </div>

            <div className="p-6 space-y-4 text-xs divide-y divide-gray-100">
              <div className="pb-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">COMMODITY</span>
                <p className="font-extrabold text-sm text-gray-900 mt-0.5">Sesame</p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">GRADE</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Whitish — 99.95% purity</p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">COMMITTED QUANTITY</span>
                <p className="text-xl font-black text-gray-900 mt-0.5">14 MT</p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">REQUIRED BY</span>
                <p className="font-extrabold text-gray-900 mt-0.5">15 November 2023</p>
              </div>

              <div className="py-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">AGGREGATION POINT</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Benue South Aggregation Hub — Makurdi</p>
              </div>

              <div className="pt-4">
                <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-3.5 text-xs text-emerald-950">
                  Your supply was delivered and received at the aggregation point. This contribution was included in the buyer&apos;s order.
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setView("list")}
            className="bg-white border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs hover:bg-gray-50"
          >
            Back to requests
          </button>
        </div>
      )}

      {/* ==========================================
          VIEW 4: MATCH REQUEST REVIEW (BEFORE COMMITMENT)
         ========================================== */}
      {view === "review" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to requests</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-mono font-bold text-gray-400">HL-2024-SES-0019</p>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Match request — Sesame</h1>
              <div className="inline-flex items-center gap-1 bg-red-50 border border-red-200 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md mt-1">
                <BiTimeFive className="w-3 h-3" />
                <span>Respond by 10 Nov — today</span>
              </div>
            </div>

            <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md self-start sm:self-auto">
              • NEEDS YOUR RESPONSE
            </span>
          </div>

          {/* WHAT THE BUYER NEEDS CARD */}
          <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#0f4022] text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider">
              WHAT THE BUYER NEEDS
            </div>

            <div className="p-6 space-y-4 text-xs">
              <h2 className="text-xl font-black text-gray-900">Sesame</h2>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">SPECIFICATION / GRADE</span>
                  <p className="font-extrabold text-gray-900 mt-0.5">Whitish — 99.95% purity</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">TOTAL BUYER REQUIREMENT</span>
                  <p className="text-xl font-black text-gray-900 mt-0.5">100 MT</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">REQUIRED DELIVERY DATE</span>
                  <p className="font-extrabold text-gray-900 mt-0.5">1 December 2024</p>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">AGGREGATION HUB (DROP-OFF POINT)</span>
                  <p className="font-extrabold text-gray-900 mt-0.5">Benue South Aggregation Hub — Makurdi</p>
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-3.5 text-[11px] text-emerald-950 leading-relaxed">
                This request is one of <strong className="font-bold">4 supply contributions</strong> being coordinated by HarvestLink to meet the full buyer requirement. Your contribution makes up part of the total.
              </div>
            </div>
          </div>

          {/* WHY HARVESTLINK SENT YOU THIS REQUEST */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 text-xs shadow-xs">
            <h3 className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
              <span>🏠</span> WHY HARVESTLINK SENT YOU THIS REQUEST
            </h3>

            <div className="space-y-2 text-gray-700">
              <div className="flex items-start gap-2">
                <BiCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Commodity and grade match confirmed</span>
              </div>

              <div className="flex items-start gap-2">
                <BiCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Located within preferred Benue sourcing corridor</span>
              </div>

              <div className="flex items-start gap-2 text-amber-800">
                <BiError className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <span>New supplier — no reliability history yet</span>
              </div>

              <div className="flex items-start gap-2 text-amber-800">
                <BiError className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <span>Verification pending before commitment</span>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 pt-1 leading-normal">
              HarvestLink recommended this request based on your supply record. You are free to accept or decline based on your actual availability.
            </p>
          </div>

          {/* YOUR PROPOSED CONTRIBUTION */}
          <div className="bg-white border-2 border-emerald-600/80 rounded-2xl p-6 space-y-3 text-xs shadow-xs">
            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
              YOUR PROPOSED CONTRIBUTION
            </span>

            <p className="text-3xl font-black text-gray-900">22 MT</p>

            <p className="text-gray-600 leading-relaxed">
              This is the quantity HarvestLink is proposing you commit for this request.
            </p>

            <p className="text-gray-500 text-[11px]">
              When you review your contribution in the next step, you can adjust this quantity up or down based on what you can actually supply.
            </p>

            <p className="text-[11px] font-bold text-emerald-900 pt-1">
              Guide price: ₦980,000 per MT <span className="font-normal text-gray-500">(indicative — subject to commercial agreement)</span>
            </p>
          </div>

          {/* DECISION NOTICE */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3.5 text-[11px] text-gray-600 flex items-start gap-2">
            <BiCheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <span>
              <strong>Your decision is final.</strong> By accepting, you agree to commit this quantity. By declining, no commitment is recorded. HarvestLink will not commit supply on your behalf automatically.
            </span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setView("list")}
              className="w-full sm:w-1/3 bg-white hover:bg-red-50 border border-red-300 text-red-700 font-bold py-3 px-4 rounded-xl text-xs transition-colors"
            >
              Decline request
            </button>

            <button
              onClick={() => setView("commit-form")}
              className="w-full sm:w-2/3 bg-[#0f4022] hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-xs inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Review my contribution</span>
              <BiRightArrowAlt className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          VIEW 5: COMMITMENT FORM / ADJUST QUANTITY
         ========================================== */}
      {view === "commit-form" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("review")}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to request details</span>
          </button>

          <div className="space-y-1">
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">How much can you commit?</h1>
            <p className="text-xs text-gray-500 font-medium">
              Enter the quantity of <strong className="text-gray-900">Sesame</strong> you can deliver to the aggregation hub by <strong className="text-gray-900">1 December 2024</strong>.
            </p>
          </div>

          {/* PROPOSED SUMMARY BOX */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">PROPOSED BY HARVESTLINK</span>
              <p className="text-xl font-black text-gray-900 mt-0.5">22 MT</p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">AGGREGATION HUB</span>
              <p className="font-extrabold text-gray-900 mt-1">Benue South Aggregation Hub</p>
            </div>
          </div>

          {/* YOUR COMMITMENT INPUT CARD */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <label className="block text-xs font-bold text-gray-900">Your commitment (MT)</label>

            <div className="flex items-center gap-3">
              <input
                type="number"
                value={commitmentQty}
                onChange={(e) => setCommitmentQty(Number(e.target.value))}
                className="w-32 p-3 text-center text-lg font-extrabold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
              />
              <span className="text-xs font-bold text-gray-600">Metric tonnes</span>
            </div>

            <p className="text-[10px] text-gray-400 leading-normal">
              You can commit less than the proposed 22 MT if you cannot supply the full amount. Only commit what you are certain you can deliver.
            </p>
          </div>

          {/* ESTIMATED VALUE BOX */}
          <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-5 space-y-1 text-xs">
            <span className="text-[10px] font-bold text-emerald-800 uppercase block">
              Estimated value at indicative guide price (₦980,000/MT)
            </span>
            <p className="text-2xl font-black text-emerald-900">
              ₦{estimatedValue.toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-500 pt-1 leading-normal">
              Indicative guide price only. Actual price subject to verification and commercial agreement.
            </p>
          </div>

          {/* CHECKBOX AGREEMENT */}
          <div className="bg-[#fffdf0] border border-amber-300/80 rounded-2xl p-4 text-xs">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="accent-[#0f4022] w-4 h-4 mt-0.5 rounded-md"
              />
              <span className="text-amber-950 font-medium leading-relaxed">
                I understand that by confirming, I am committing to deliver <strong className="font-extrabold">{commitmentQty} MT</strong> of Sesame to <strong className="font-extrabold">Benue South Aggregation Hub — Makurdi</strong> by <strong className="font-extrabold">1 December 2024</strong>. This commitment will be recorded by HarvestLink.
              </span>
            </label>
          </div>

          {/* FORM ACTIONS */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setView("review")}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-3 rounded-xl text-xs"
            >
              Cancel
            </button>

            <button
              disabled={!isChecked || commitmentQty <= 0}
              onClick={() => setView("confirmation")}
              className="bg-[#0f4022] hover:bg-emerald-800 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors shadow-xs"
            >
              Confirm — commit {commitmentQty} MT
            </button>
          </div>
        </div>
      )}

      {/* ==========================================
          VIEW 6: COMMITMENT CONFIRMED SUCCESS
         ========================================== */}
      {view === "confirmation" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
              <BiCheck />
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Commitment confirmed</h1>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your commitment has been recorded. HarvestLink will contact you to arrange collection and delivery to the aggregation hub.
            </p>
          </div>

          {/* CONFIRMED SUMMARY CARD */}
          <div className="border border-emerald-800/30 rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#0f4022] text-white p-4">
              <span className="text-[9px] text-emerald-200 font-bold uppercase block">SUPPLY COMMITMENT RECORDED</span>
              <p className="text-base font-black font-mono">HL-2024-SES-0019</p>
            </div>

            <div className="p-5 space-y-3 bg-white text-xs divide-y divide-gray-100">
              <div className="pb-2">
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md">
                  • SUPPLY COMMITTED
                </span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-gray-400">Commodity</span>
                <span className="font-extrabold text-gray-900">Sesame</span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-gray-400">Grade</span>
                <span className="font-extrabold text-gray-900">Whitish — 99.95% purity</span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-gray-400">Committed quantity</span>
                <span className="font-black text-emerald-800 text-sm">{commitmentQty} MT</span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-gray-400">Required delivery date</span>
                <span className="font-extrabold text-gray-900">1 December 2024</span>
              </div>

              <div className="pt-2 flex justify-between">
                <span className="text-gray-400">Aggregation point</span>
                <span className="font-extrabold text-gray-900">Benue South Aggregation Hub — Makurdi</span>
              </div>
            </div>
          </div>

          {/* NOT YET VERIFIED BANNER */}
          <div className="bg-[#fffdf0] border border-amber-300/80 rounded-2xl p-4 space-y-1 text-xs">
            <h4 className="font-bold text-amber-900 flex items-center gap-1.5">
              <span>⚠️</span> Not yet verified
            </h4>
            <p className="text-[11px] text-amber-900/80 leading-relaxed">
              Your committed quantity has been recorded. It will still need to be physically received and verified at <strong className="font-bold">Benue South Aggregation Hub — Makurdi</strong> before it is included in the buyer&apos;s order.
            </p>
          </div>

          {/* WHAT HAPPENS NEXT */}
          <div className="bg-[#eaf4ee] border border-emerald-200/70 rounded-2xl p-5 space-y-3 text-xs">
            <h4 className="font-bold text-gray-900">What happens next</h4>

            <div className="space-y-2.5 text-gray-700">
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>A HarvestLink field agent may contact you to confirm the collection schedule.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>Transport will be arranged to take your supply to the aggregation hub.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>At the hub, your supply will be weighed and quality-checked.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  4
                </span>
                <span>Once verified, your contribution will be recorded as part of the buyer&apos;s order.</span>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="flex gap-3 pt-2">
            <Link
              href="/farmer"
              className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
            >
              Back to home
            </Link>

            <button
              onClick={() => setView("list")}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-emerald-900 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
            >
              View all requests
            </button>
          </div>
        </div>
      )}
    </div>
  );
}