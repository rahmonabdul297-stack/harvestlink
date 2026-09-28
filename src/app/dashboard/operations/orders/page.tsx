"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export interface NetworkOrder {
  id: string;
  hasException?: boolean;
  buyer: string;
  commodity: string;
  grade: string;
  required: string;
  committed: string;
  verified: string;
  delivered: string;
  status: "delivered" | "settled" | "matching" | "in-transit";
  requiredBy: string;
}

export default function OperationsOrdersPage() {
  const [selectedCommodity, setSelectedCommodity] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [exceptionsOnly, setExceptionsOnly] = useState<boolean>(false);

  const [orders] = useState<NetworkOrder[]>([
    {
      id: "HL-2024-CCO-0041",
      hasException: true,
      buyer: "Agrofresh Processors Ltd",
      commodity: "Cocoa",
      grade: "Grade 1 — Fermented & Dried",
      required: "50 MT",
      committed: "48 MT",
      verified: "47.8 MT",
      delivered: "47.8 MT",
      status: "delivered",
      requiredBy: "15 Nov 2024",
    },
    {
      id: "HL-2024-CSH-0028",
      hasException: false,
      buyer: "Premiere Export Trading Co.",
      commodity: "Cashew",
      grade: "W240 — Whole White",
      required: "50 MT",
      committed: "50 MT",
      verified: "50 MT",
      delivered: "50 MT",
      status: "settled",
      requiredBy: "30 Sept 2024",
    },
    {
      id: "HL-2024-SES-0019",
      hasException: false,
      buyer: "Meridian Oils Nigeria Ltd",
      commodity: "Sesame",
      grade: "Whitish — 99.95% purity",
      required: "100 MT",
      committed: "0 MT",
      verified: "0 MT",
      delivered: "0 MT",
      status: "matching",
      requiredBy: "1 Dec 2024",
    },
    {
      id: "HL-2024-CCO-0038",
      hasException: true,
      buyer: "Agrofresh Processors Ltd",
      commodity: "Cocoa",
      grade: "Grade 2 — Sun Dried",
      required: "40 MT",
      committed: "40 MT",
      verified: "40 MT",
      delivered: "40 MT",
      status: "in-transit",
      requiredBy: "20 Oct 2024",
    },
  ]);

  const filteredOrders = orders.filter((ord) => {
    if (
      selectedCommodity !== "all" &&
      ord.commodity.toLowerCase() !== selectedCommodity.toLowerCase()
    ) {
      return false;
    }
    if (selectedStatus !== "all" && ord.status !== selectedStatus) {
      return false;
    }
    if (exceptionsOnly && !ord.hasException) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Orders
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          All orders across the HarvestLink network.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Commodity Dropdown */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase">
              Commodity
            </label>
            <select
              value={selectedCommodity}
              onChange={(e) => setSelectedCommodity(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
            >
              <option value="all">All commodities</option>
              <option value="cocoa">Cocoa</option>
              <option value="cashew">Cashew</option>
              <option value="sesame">Sesame</option>
            </select>
          </div>

          {/* Status Dropdown */}
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
              <option value="matching">Matching</option>
              <option value="in-transit">In-transit</option>
              <option value="delivered">Delivered</option>
              <option value="settled">Settled</option>
            </select>
          </div>

          {/* Exceptions Only Checkbox */}
          <div className="flex items-center gap-2 pt-4 sm:pt-4">
            <input
              type="checkbox"
              id="exceptions-only"
              checked={exceptionsOnly}
              onChange={(e) => setExceptionsOnly(e.target.checked)}
              className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-gray-300"
            />
            <label
              htmlFor="exceptions-only"
              className="text-xs font-bold text-red-600 cursor-pointer select-none"
            >
              Exceptions only
            </label>
          </div>
        </div>

        {/* Count Indicator */}
        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredOrders.length} orders
        </span>
      </div>

      {/* Orders Table Container */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-4">ORDER REF</th>
                <th className="py-3 px-3">BUYER</th>
                <th className="py-3 px-3">COMMODITY / GRADE</th>
                <th className="py-3 px-2">REQUIRED</th>
                <th className="py-3 px-2">COMMITTED</th>
                <th className="py-3 px-2">VERIFIED</th>
                <th className="py-3 px-2">DELIVERED</th>
                <th className="py-3 px-2">STATUS</th>
                <th className="py-3 px-2">REQUIRED BY</th>
                <th className="py-3 px-4 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {filteredOrders.map((ord) => (
                <tr
                  key={ord.id}
                  className="hover:bg-gray-50/80 transition-colors"
                >
                  {/* Order Ref & Exception Badge */}
                  <td className="py-4 px-4 font-black">
                    <div className="flex items-center gap-2">
                      <span>{ord.id}</span>
                      {ord.hasException && (
                        <span className="bg-red-100 text-red-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                          Exception
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Buyer */}
                  <td className="py-4 px-3 font-medium text-gray-600">
                    {ord.buyer}
                  </td>

                  {/* Commodity & Grade */}
                  <td className="py-4 px-3">
                    <p className="font-bold text-gray-900">{ord.commodity}</p>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {ord.grade}
                    </p>
                  </td>

                  {/* Required */}
                  <td className="py-4 px-2 font-black text-gray-900">
                    {ord.required}
                  </td>

                  {/* Committed */}
                  <td
                    className={`py-4 px-2 font-black ${
                      ord.committed === "0 MT"
                        ? "text-amber-700"
                        : "text-amber-700"
                    }`}
                  >
                    {ord.committed}
                  </td>

                  {/* Verified */}
                  <td className="py-4 px-2 font-black text-blue-700">
                    <div className="space-y-1">
                      <span>{ord.verified}</span>
                      {ord.verified !== "0 MT" && (
                        <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  </td>

                  {/* Delivered */}
                  <td className="py-4 px-2 font-black text-emerald-700">
                    {ord.delivered}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-2">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full inline-block ${
                        ord.status === "delivered"
                          ? "bg-emerald-100 text-emerald-800"
                          : ord.status === "settled"
                          ? "bg-emerald-100/60 text-emerald-900"
                          : ord.status === "matching"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {ord.status}
                    </span>
                  </td>

                  {/* Required By */}
                  <td className="py-4 px-2 text-gray-500 font-medium">
                    {ord.requiredBy}
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-4 text-right">
                    <Link
                      href={`/dashboard/operations/orders/${ord.id}`}
                      className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                    >
                      <span>View</span>
                      <FiArrowRight className="w-3 h-3 text-gray-400" />
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