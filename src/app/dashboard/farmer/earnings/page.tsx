"use client";

import React from "react";
import Link from "next/link";

export default function FarmerEarningsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Earnings
        </h1>
        <p className="text-xs text-gray-500 font-medium">
          Your contribution settlements and payment status.
        </p>
      </div>

      {/* Prototype Simulation Banner */}
      <div className="bg-[#f3efff] border border-[#dcd1ff] rounded-2xl p-4 text-xs text-[#5b21b6] leading-relaxed shadow-2xs">
        <strong className="font-extrabold uppercase text-[10px] tracking-wider block mb-0.5">
          Prototype environment:
        </strong>
        All earnings, amounts, and settlement records shown here are prototype values. Actual settlement is processed through a licensed payment provider, not held by HarvestLink.
      </div>

      {/* 5 Summary Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Total contributions
          </p>
          <p className="text-2xl font-black text-gray-900">4</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Settled
          </p>
          <p className="text-2xl font-black text-emerald-700">0</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Pending settlement
          </p>
          <p className="text-2xl font-black text-purple-700">2</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Proto earnings received
          </p>
          <p className="text-2xl font-black text-gray-900">₦0</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-4 shadow-2xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Proto earnings pending
          </p>
          <p className="text-xl sm:text-2xl font-black text-purple-800">
            ₦38,240,000
          </p>
        </div>
      </div>

      {/* SETTLEMENT CARDS LIST */}
      <div className="space-y-4">
        {/* CARD 1: HL-2024-SES-0019 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-gray-900">
                HL-2024-SES-0019
              </span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                • Not yet received
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 self-start sm:self-auto">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=100&auto=format&fit=crop"
                alt="Sesame"
                className="w-5 h-5 rounded-md object-cover border border-gray-100"
              />
              <span>Sesame · Whitish — 99.95% purity</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Requested
              </span>
              <p className="text-xl font-black text-gray-900 mt-0.5">22 MT</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-gray-500 pt-1">
              <span>
                Delivery: <strong className="text-amber-700">Awaiting delivery</strong>
              </span>
              <span>
                Price per MT (proto): <strong className="text-gray-900">₦980,000</strong>
              </span>
            </div>

            <p className="text-[11px] text-gray-400 pt-1">
              Aggregation point: Benue South Aggregation Hub — Makurdi
            </p>
          </div>
        </div>

        {/* CARD 2: HL-2023-SES-0007 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-gray-900">
                HL-2023-SES-0007
              </span>
              <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                • Not yet received
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 self-start sm:self-auto">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=100&auto=format&fit=crop"
                alt="Sesame"
                className="w-5 h-5 rounded-md object-cover border border-gray-100"
              />
              <span>Sesame · Whitish — 99.00% purity</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  Requested
                </span>
                <p className="text-lg font-black text-gray-900 mt-0.5">15 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  Committed
                </span>
                <p className="text-lg font-black text-emerald-800 mt-0.5">14 MT</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-gray-500">
              <span>
                Delivery: <strong className="text-emerald-700">• Delivered</strong>
              </span>
              <span>
                Price per MT (proto): <strong className="text-gray-900">₦600,000</strong>
              </span>
            </div>

            <p className="text-[11px] text-gray-400">
              Aggregation point: Benue South Aggregation Hub — Makurdi
            </p>
          </div>
        </div>

        {/* CARD 3: HL-2024-CCO-0041 (18 MT) */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-gray-900">
                HL-2024-CCO-0041
              </span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                • Payment required
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 self-start sm:self-auto">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop"
                alt="Cocoa"
                className="w-5 h-5 rounded-md object-cover border border-gray-100"
              />
              <span>Cocoa · Grade 1 — Fermented & Dried</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Requested
                  </span>
                  <p className="text-lg font-black text-gray-900 mt-0.5">18 MT</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Committed
                  </span>
                  <p className="text-lg font-black text-blue-700 mt-0.5">18 MT</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Verified
                  </span>
                  <p className="text-lg font-black text-emerald-800 mt-0.5">17.6 MT</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-gray-500">
                <span>
                  Delivery: <strong className="text-emerald-700">• Delivered</strong>
                </span>
                <span>
                  Price per MT (proto): <strong className="text-gray-900">₦800,000</strong>
                </span>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Proto settlement amount
              </span>
              <p className="text-2xl font-black text-gray-900 mt-0.5">
                ₦14,080,000
              </p>
              <p className="text-[9px] text-gray-400">Prototype view</p>
            </div>
          </div>

          {/* Purple Pending Box */}
          <div className="bg-[#f5f1ff] border border-[#e1d4ff] rounded-xl p-3.5 text-xs text-[#5b21b6] font-medium leading-relaxed">
            Settlement is pending. Payment is being coordinated through Simulated Payment Provider. Your contribution is recorded and verified.
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-gray-100 text-xs">
            <p className="text-[11px] text-gray-400">
              Aggregation point: Ondo State Aggregation Hub — Akure · <span className="font-mono text-gray-600">HL-PAY-0042</span>
            </p>

            <Link
              href="/farmer/requests"
              className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-4 py-1.5 rounded-xl text-xs transition-colors shadow-2xs"
            >
              View contribution
            </Link>
          </div>
        </div>

        {/* CARD 4: HL-2024-CCO-0041 (30 MT) */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs text-gray-900">
                HL-2024-CCO-0041
              </span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                • Payment required
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 self-start sm:self-auto">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop"
                alt="Cocoa"
                className="w-5 h-5 rounded-md object-cover border border-gray-100"
              />
              <span>Cocoa · Grade 1 — Fermented & Dried</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Requested
                  </span>
                  <p className="text-lg font-black text-gray-900 mt-0.5">30 MT</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Committed
                  </span>
                  <p className="text-lg font-black text-blue-700 mt-0.5">30 MT</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">
                    Verified
                  </span>
                  <p className="text-lg font-black text-emerald-800 mt-0.5">30.2 MT</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-gray-500">
                <span>
                  Delivery: <strong className="text-emerald-700">• Delivered</strong>
                </span>
                <span>
                  Price per MT (proto): <strong className="text-gray-900">₦800,000</strong>
                </span>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Proto settlement amount
              </span>
              <p className="text-2xl font-black text-gray-900 mt-0.5">
                ₦24,160,000
              </p>
              <p className="text-[9px] text-gray-400">Prototype view</p>
            </div>
          </div>

          {/* Purple Pending Box */}
          <div className="bg-[#f5f1ff] border border-[#e1d4ff] rounded-xl p-3.5 text-xs text-[#5b21b6] font-medium leading-relaxed">
            Settlement is pending. Payment is being coordinated through Simulated Payment Provider. Your contribution is recorded and verified.
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-gray-100 text-xs">
            <p className="text-[11px] text-gray-400">
              Aggregation point: Ondo State Aggregation Hub — Akure · <span className="font-mono text-gray-600">HL-PAY-0042</span>
            </p>

            <Link
              href="/farmer/requests"
              className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-4 py-1.5 rounded-xl text-xs transition-colors shadow-2xs"
            >
              View contribution
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER DISCLAIMER BOX */}
      <div className="bg-[#f8faf9] border border-gray-200/80 rounded-2xl p-5 space-y-1.5 text-xs">
        <h4 className="font-bold text-gray-900 text-xs">About earnings</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed">
          Settlement amounts shown are prototype values for the demo product. Actual settlement amounts are determined by the agreed price per MT at notice and verified delivery quantity. Payment is processed through a licensed payment provider — HarvestLink does not hold partner funds. Do not rely on prototype amounts as guaranteed income.
        </p>
      </div>
    </div>
  );
}