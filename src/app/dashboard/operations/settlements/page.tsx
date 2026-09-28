"use client";

import React, { useState } from "react";

export interface SettlementRecord {
  ref: string;
  orderRef: string;
  buyer: string;
  commodity: string;
  delivered: string;
  grossAmount: string;
  fee: string;
  netAmount: string;
  status: "settled" | "pending" | "processing";
}

export default function SettlementsMonitoringPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const [settlements] = useState<SettlementRecord[]>([
    {
      ref: "HL-PAY-0020",
      orderRef: "HL-2024-CSH-0028",
      buyer: "Premiere Export Trading Co.",
      commodity: "Cashew",
      delivered: "50 MT",
      grossAmount: "₦49,750,000",
      fee: "₦1,243,750",
      netAmount: "₦48,506,250",
      status: "settled",
    },
    {
      ref: "HL-PAY-0038",
      orderRef: "HL-2024-CCO-0038",
      buyer: "Agrofresh Processors Ltd",
      commodity: "Cocoa",
      delivered: "40 MT",
      grossAmount: "₦32,000,000",
      fee: "₦800,000",
      netAmount: "₦31,200,000",
      status: "pending",
    },
    {
      ref: "HL-PAY-0041",
      orderRef: "HL-2024-CCO-0041",
      buyer: "Agrofresh Processors Ltd",
      commodity: "Cocoa",
      delivered: "47.8 MT",
      grossAmount: "₦38,240,000",
      fee: "₦956,000",
      netAmount: "₦37,284,000",
      status: "pending",
    },
  ]);

  const filteredSettlements = settlements.filter((item) => {
    if (selectedStatus !== "all" && item.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Settlements monitoring
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Payment and settlement status across completed orders.
        </p>
      </div>

      {/* Gold Disclaimer Callout Banner */}
      <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-4 text-xs text-amber-950 font-medium leading-relaxed shadow-2xs">
        <span className="font-extrabold text-amber-900">All amounts are prototype values.</span>{" "}
        HarvestLink is not a bank, payment service provider, or escrow agent. Payment-hold services are operated by licensed payment providers.
      </div>

      {/* Financial Metric Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total payments
          </span>
          <span className="text-xl font-black text-gray-900 block">3</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Pending / processing
          </span>
          <span className="text-xl font-black text-amber-700 block">2</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Settled
          </span>
          <span className="text-xl font-black text-emerald-700 block">1</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Exceptions
          </span>
          <span className="text-xl font-black text-gray-900 block">0</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total net (proto)
          </span>
          <span className="text-xl font-black text-gray-900 block truncate">
            ₦117.0M
          </span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Settled net (proto)
          </span>
          <span className="text-xl font-black text-emerald-700 block truncate">
            ₦48.5M
          </span>
        </div>
      </div>

      {/* Status Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="space-y-1">
          <label className="block text-[10px] font-bold text-gray-400 uppercase">
            Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
          >
            <option value="all">All statuses</option>
            <option value="settled">Settled</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredSettlements.length} payments
        </span>
      </div>

      {/* Settlements Table */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3.5 px-4">REF.</th>
                <th className="py-3.5 px-3">ORDER</th>
                <th className="py-3.5 px-3">BUYER</th>
                <th className="py-3.5 px-3">COMMODITY</th>
                <th className="py-3.5 px-2">DELIVERED</th>
                <th className="py-3.5 px-3">AMOUNT (PROTO)</th>
                <th className="py-3.5 px-3">FEE (PROTO)</th>
                <th className="py-3.5 px-4 text-right">NET (PROTO)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {filteredSettlements.map((item) => (
                <tr key={item.ref} className="hover:bg-gray-50/80 transition-colors">
                  {/* Payment Ref */}
                  <td className="py-4 px-4 font-black text-gray-900">
                    {item.ref}
                  </td>

                  {/* Order Ref */}
                  <td className="py-4 px-3 font-medium text-gray-500">
                    {item.orderRef}
                  </td>

                  {/* Buyer */}
                  <td className="py-4 px-3 font-medium text-gray-700">
                    {item.buyer}
                  </td>

                  {/* Commodity */}
                  <td className="py-4 px-3 font-bold text-gray-900">
                    {item.commodity}
                  </td>

                  {/* Delivered MT */}
                  <td className="py-4 px-2 font-black text-gray-900">
                    {item.delivered}
                  </td>

                  {/* Gross Amount */}
                  <td className="py-4 px-3 font-black text-gray-900">
                    {item.grossAmount}
                  </td>

                  {/* Platform Fee */}
                  <td className="py-4 px-3 font-medium text-gray-400">
                    {item.fee}
                  </td>

                  {/* Net Amount */}
                  <td className="py-4 px-4 text-right font-black text-emerald-700">
                    {item.netAmount}
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