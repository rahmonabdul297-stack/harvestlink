"use client";

import React from "react";
import Link from "next/link";
import { BiPlus, BiErrorAlt } from "react-icons/bi";

export default function BuyerDashboardPage() {
  const orders = [
    {
      ref: "HL-2024-CCO-0043",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      required: "45 MT",
      committed: "40 MT",
      percentage: "89%",
      progressWidth: "89%",
      status: "Delivered",
      statusBg: "bg-emerald-100/80 text-emerald-900 border-emerald-200",
      requiredBy: "15 Nov 2024",
      actionText: "View passport",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
    },
    {
      ref: "HL-2024-CSW-0028",
      commodity: "Cashew",
      spec: "W320 — Whole White",
      required: "50 MT",
      committed: "50 MT",
      percentage: "100%",
      progressWidth: "100%",
      status: "Settled",
      statusBg: "bg-emerald-100/80 text-emerald-900 border-emerald-200",
      requiredBy: "30 Sept 2024",
      actionText: "View passport",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwPXO7DXJvwLTq1ODEUXL3Rv8y3v2_pxDOfgBxfhiCA&s=10",
    },
    {
      ref: "HL-2024-SES-0019",
      commodity: "Sesame",
      spec: "White — 99.5% purity",
      required: "100 MT",
      committed: "9 MT",
      percentage: "9%",
      progressWidth: "9%",
      status: "Matching",
      statusBg: "bg-purple-100/80 text-purple-900 border-purple-200",
      requiredBy: "1 Dec 2024",
      actionText: "Review match",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop",
    },
    {
      ref: "HL-2024-CCO-0038",
      commodity: "Cocoa",
      spec: "Grade 2 — Sun Dried",
      required: "40 MT",
      committed: "40 MT",
      percentage: "100%",
      progressWidth: "100%",
      status: "In transit",
      statusBg: "bg-blue-100/80 text-blue-900 border-blue-200",
      requiredBy: "20 Oct 2024",
      actionText: "View passport",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 font-sans text-gray-900">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            Agrofresh Processors Ltd — Buyer account
          </p>
        </div>

        <Link
          href="/dashboard/buyer/create-demand"
          className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors shadow-sm self-start sm:self-auto"
        >
          <BiPlus className="w-4 h-4" />
          <span>Create demand</span>
        </Link>
      </div>

      {/* 4 Summary Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-2">
          <p className="text-[11px] font-bold text-gray-500">Active orders</p>
          <p className="text-3xl font-black text-gray-900">3</p>
          <p className="text-[10px] text-gray-400">This month</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-2">
          <p className="text-[11px] font-bold text-gray-500">
            Total ordered (MT)
          </p>
          <p className="text-3xl font-black text-gray-900">235</p>
          <p className="text-[10px] text-gray-400">Cocoa · Cashew · Sesame</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-2">
          <p className="text-[11px] font-bold text-gray-500">Committed (MT)</p>
          <p className="text-3xl font-black text-emerald-700">182</p>
          <p className="text-[10px] text-gray-400">77% of required</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-2">
          <p className="text-[11px] font-bold text-gray-500">
            Pending settlement
          </p>
          <p className="text-2xl sm:text-3xl font-black text-amber-600">
            ₦91.2M
          </p>
          <p className="text-[10px] text-gray-400">2 orders</p>
        </div>
      </div>

      {/* Action Required Alert Banner */}
      <div className="bg-[#fffdf0] border border-amber-300/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-center gap-2 text-amber-900 font-semibold">
          <BiErrorAlt className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            <strong className="font-extrabold">Action required:</strong>{" "}
            HL-2024-CCO-0041 batch flagged for moisture variance. Review recommended.
          </span>
        </div>

        <Link
          href="/dashboard/buyer/order-passport"
          className="bg-white hover:bg-amber-50 border border-amber-300 text-amber-900 font-bold px-3.5 py-1.5 rounded-xl text-xs shrink-0 transition-colors"
        >
          View order
        </Link>
      </div>

      {/* Your Orders Table Card */}
      <div className="bg-white border border-gray-200/80 rounded-2xl shadow-xs overflow-hidden space-y-2">
        {/* Card Header */}
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <h3 className="font-extrabold text-sm text-gray-900">Your orders</h3>
          <Link
            href="/dashboard/buyer/orders"
            className="text-xs font-bold text-[#14532d] hover:underline"
          >
            View all
          </Link>
        </div>

        {/* Orders Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-5">ORDER REFERENCE</th>
                <th className="py-3 px-5">COMMODITY</th>
                <th className="py-3 px-5">REQUIRED</th>
                <th className="py-3 px-5">COMMITTED</th>
                <th className="py-3 px-5">STATUS</th>
                <th className="py-3 px-5">REQUIRED BY</th>
                <th className="py-3 px-5 text-right">ACTION</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-xs">
              {orders.map((ord) => (
                <tr key={ord.ref} className="hover:bg-gray-50/60 transition-colors">
                  {/* Order Ref */}
                  <td className="py-4 px-5 font-black text-gray-900 whitespace-nowrap">
                    {ord.ref}
                  </td>

                  {/* Commodity + Image Thumbnail */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={ord.image}
                        alt={ord.commodity}
                        className="w-8 h-8 rounded-lg object-cover shrink-0 border border-gray-100"
                      />
                      <div>
                        <p className="font-extrabold text-gray-900">
                          {ord.commodity}
                        </p>
                        <p className="text-[10px] text-gray-400">{ord.spec}</p>
                      </div>
                    </div>
                  </td>

                  {/* Required */}
                  <td className="py-4 px-5 font-bold text-gray-900">
                    {ord.required}
                  </td>

                  {/* Committed with Progress Bar */}
                  <td className="py-4 px-5">
                    <div className="space-y-1 max-w-[100px]">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-gray-900">
                          {ord.committed}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {ord.percentage}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-700 rounded-full"
                          style={{ width: ord.progressWidth }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${ord.statusBg}`}
                    >
                      <span>•</span> {ord.status}
                    </span>
                  </td>

                  {/* Required By */}
                  <td className="py-4 px-5 text-gray-500 text-[11px]">
                    {ord.requiredBy}
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-5 text-right">
                    <Link
                      href="/dashboard/buyer/order-passport"
                      className="inline-block bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold px-3 py-1.5 rounded-xl text-[11px] shadow-xs transition-colors"
                    >
                      {ord.actionText}
                    </Link>
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