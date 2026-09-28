"use client";

import React from "react";
import Link from "next/link";
import { FiAlertTriangle, FiArrowRight } from "react-icons/fi";

export default function OperationsOverviewWorkspacePage() {
  const statCards = [
    { label: "Active orders", value: "2", color: "text-gray-900" },
    { label: "Awaiting supply", value: "2", color: "text-amber-700" },
    { label: "Awaiting verification", value: "1", color: "text-blue-600" },
    { label: "Batches flagged", value: "1", color: "text-red-600" },
    { label: "Ready for dispatch", value: "0", color: "text-blue-600" },
    { label: "In transit", value: "1", color: "text-amber-700" },
    { label: "Delivered", value: "2", color: "text-emerald-700" },
    { label: "Settlement pending", value: "1", color: "text-purple-700" },
    { label: "Open exceptions", value: "2", color: "text-red-600" },
  ];

  const healthItems = [
    { label: "Orders progressing normally", value: "2 / 4", color: "bg-emerald-500" },
    { label: "Orders requiring attention", value: "2 / 4", color: "bg-red-500" },
    { label: "Supply shortfalls", value: "2", color: "bg-red-500" },
    { label: "Verification flags", value: "1", color: "bg-red-500" },
    { label: "Logistics jobs in transit", value: "1", color: "bg-emerald-500" },
    { label: "Settlement pending", value: "1", color: "bg-emerald-500" },
    { label: "Open exceptions", value: "2", color: "bg-red-500" },
  ];

  const needsAttention = [
    {
      severity: "High",
      orderRef: "HL-2024-CCO-0041",
      title: "Supply delay — batch not received",
      description:
        "Batch BAT-003 from Chukwuemeka Farms (15 MT Cocoa Grade 1, committed) has not been received at the O...",
      responsible: "HarvestLink Operations",
    },
    {
      severity: "Medium",
      orderRef: "HL-2024-CCO-0038",
      title: "Logistics delay",
      description:
        "Logistics job HL-LGS-0041 has been in transit for longer than estimated delivery window. Expected de...",
      responsible: "Logistics Partner",
    },
    {
      severity: "Medium",
      orderRef: "HL-2024-SES-0019",
      title: "Logistics job awaiting acceptance",
      description:
        "Job HL-LGS-0044 assigned to Chidi Okafor — not yet accepted.",
      responsible: "Logistics Partner",
    },
  ];

  const orders = [
    {
      id: "HL-2024-CCO-0041",
      flag: true,
      commodity: "Cocoa",
      buyer: "Agrofresh Processors Ltd",
      required: "50 MT",
      committed: "48 MT",
      verified: "47.8 MT",
      delivered: "47.8 MT",
      status: "delivered",
    },
    {
      id: "HL-2024-CSH-0028",
      flag: false,
      commodity: "Cashew",
      buyer: "Premiere Export Trading Co.",
      required: "50 MT",
      committed: "50 MT",
      verified: "50 MT",
      delivered: "50 MT",
      status: "settled",
    },
    {
      id: "HL-2024-SES-0019",
      flag: false,
      commodity: "Sesame",
      buyer: "Meridian Oils Nigeria Ltd",
      required: "100 MT",
      committed: "0 MT",
      verified: "0 MT",
      delivered: "0 MT",
      status: "matching",
    },
    {
      id: "HL-2024-CCO-0038",
      flag: true,
      commodity: "Cocoa",
      buyer: "Agrofresh Processors Ltd",
      required: "40 MT",
      committed: "40 MT",
      verified: "40 MT",
      delivered: "40 MT",
      status: "in-transit",
    },
  ];

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Operations Overview
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Chioma Obi · HarvestLink Operations · 27 Sept 2026
        </p>
      </div>

      {/* Exception Alert Banner */}
      <div className="bg-red-50 border border-red-200/90 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5 text-red-900 font-bold">
          <FiAlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span>1 exception require immediate attention.</span>
        </div>
        <Link
          href="/dashboard/operations/exceptions"
          className="bg-[#b91c1c] hover:bg-red-800 text-white font-extrabold px-4 py-2 rounded-xl text-xs transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
        >
          <span>View exceptions</span>
          <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs"
          >
            <span className="text-[10px] font-bold text-gray-400 block truncate">
              {card.label}
            </span>
            <span className={`text-xl font-black ${card.color}`}>
              {card.value}
            </span>
          </div>
        ))}
      </div>

      {/* Operational Health & Needs Attention Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Operational Health Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-4 shadow-2xs">
          <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
            OPERATIONAL HEALTH
          </h3>

          <div className="divide-y divide-gray-100 text-xs">
            {healthItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${item.color}`}
                  />
                  <span className="font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
                <span className="font-black text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Attention Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
              NEEDS ATTENTION
            </h3>
            <span className="text-xs font-black text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              3
            </span>
          </div>

          <div className="space-y-3">
            {needsAttention.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl p-3.5 space-y-2 bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md ${
                      item.severity === "High"
                        ? "bg-red-100 text-red-800"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    • {item.severity}
                  </span>
                  <span className="text-xs font-black text-gray-900">
                    {item.orderRef}
                  </span>
                </div>

                <p className="text-xs font-bold text-gray-900 leading-tight">
                  {item.title}
                </p>

                <p className="text-[11px] text-gray-500 font-medium line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-gray-400 font-bold">
                    Responsible:{" "}
                    <span className="text-gray-700">{item.responsible}</span>
                  </span>

                  <button className="bg-[#0c4a24] hover:bg-[#09381b] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1">
                    <span>Review</span>
                    <FiArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders At A Glance Table Card */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
            ORDERS AT A GLANCE
          </h3>
          <Link
            href="/dashboard/operations/orders"
            className="text-xs font-bold text-[#0c4a24] hover:underline inline-flex items-center gap-1"
          >
            <span>View all</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                <th className="py-2.5 px-2">ORDER</th>
                <th className="py-2.5 px-2">COMMODITY</th>
                <th className="py-2.5 px-2">BUYER</th>
                <th className="py-2.5 px-2">REQUIRED</th>
                <th className="py-2.5 px-2">COMMITTED</th>
                <th className="py-2.5 px-2">VERIFIED</th>
                <th className="py-2.5 px-2">DELIVERED</th>
                <th className="py-2.5 px-2 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3 px-2 font-black">
                    <div className="flex items-center gap-1.5">
                      <span>{ord.id}</span>
                      {ord.flag && (
                        <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-2 font-bold">{ord.commodity}</td>
                  <td className="py-3 px-2 text-gray-600 font-medium">
                    {ord.buyer}
                  </td>
                  <td className="py-3 px-2 font-extrabold">{ord.required}</td>
                  <td
                    className={`py-3 px-2 font-extrabold ${
                      ord.committed === "0 MT"
                        ? "text-amber-700"
                        : "text-amber-700"
                    }`}
                  >
                    {ord.committed}
                  </td>
                  <td className="py-3 px-2 font-extrabold text-blue-700">
                    {ord.verified}
                  </td>
                  <td className="py-3 px-2 font-extrabold text-emerald-700">
                    {ord.delivered}
                  </td>
                  <td className="py-3 px-2 text-right">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-block ${
                        ord.status === "delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : ord.status === "settled"
                          ? "bg-gray-100 text-gray-700"
                          : ord.status === "matching"
                          ? "bg-amber-100 text-amber-900"
                          : "bg-blue-100 text-blue-900"
                      }`}
                    >
                      {ord.status}
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