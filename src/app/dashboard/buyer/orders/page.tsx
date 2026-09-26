"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function BuyerOrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All Orders");

  const filters = [
    "All Orders",
    "Open",
    "Matching",
    "Committed",
    "In Transit",
    "Delivered",
    "Settled",
  ];

  const orders = [
    {
      id: "HL-2024-CCO-0043",
      commodity: "Cocoa",
      spec: "Grade 1 — Fermented & Dried",
      destination: "Apapa Export Terminal, Lagos",
      required: "50 MT",
      committed: "45 MT",
      committedBg: "bg-amber-600",
      status: "Delivered",
      statusBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      requiredBy: "15 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
      hasReviewMatch: false,
    },
    {
      id: "HL-2024-CSW-0028",
      commodity: "Cashew",
      spec: "W320 — Whole White",
      destination: "Tin Can Island Port, Lagos",
      required: "50 MT",
      committed: "50 MT",
      committedBg: "bg-emerald-600",
      status: "Settled",
      statusBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      requiredBy: "30 Sept 2024",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwPXO7DXJvwLTq1ODEUXL3Rv8y3v2_pxDOfgBxfhiCA&s=10",
      hasReviewMatch: false,
    },
    {
      id: "HL-2024-SES-0019",
      commodity: "Sesame",
      spec: "White — 99.5% purity",
      destination: "Onne Port, Rivers State",
      required: "100 MT",
      committed: "0 MT",
      committedBg: "bg-gray-300",
      status: "Matching",
      statusBg: "bg-purple-100 text-purple-900 border-purple-200",
      requiredBy: "1 Dec 2024",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop",
      hasReviewMatch: true,
    },
    {
      id: "HL-2024-CCO-0038",
      commodity: "Cocoa",
      spec: "Grade 2 — Sun Dried",
      destination: "Apapa Export Terminal, Lagos",
      required: "40 MT",
      committed: "40 MT",
      committedBg: "bg-emerald-600",
      status: "In transit",
      statusBg: "bg-blue-100 text-blue-900 border-blue-200",
      requiredBy: "20 Oct 2024",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop",
      hasReviewMatch: false,
    },
  ];

  const filteredOrders = orders.filter((ord) => {
    if (activeFilter === "All Orders") return true;
    return ord.status.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 font-sans text-gray-900">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Orders
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            All sourcing demands and their fulfillment status.
          </p>
        </div>

        <Link
          href="/dashboard/buyer/create-demand"
          className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs self-start sm:self-auto"
        >
          <BiPlus className="w-4 h-4" />
          <span>Create demand</span>
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {filters.map((f) => {
          const isSelected = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                isSelected
                  ? "bg-emerald-100/80 text-emerald-950 font-bold border border-emerald-300/80 shadow-2xs"
                  : "bg-white border border-gray-200/80 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Orders List Stack */}
      <div className="space-y-4">
        {filteredOrders.map((ord) => (
          <div
            key={ord.id}
            className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-sm transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left: Info & Commodity */}
            <div className="flex items-start gap-4">
              <img
                src={ord.image}
                alt={ord.commodity}
                className="w-12 h-12 rounded-xl object-cover border border-gray-100 shrink-0 mt-0.5"
              />

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xs text-gray-900">
                    {ord.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${ord.statusBg}`}
                  >
                    <span>•</span> {ord.status}
                  </span>
                </div>

                <p className="font-extrabold text-sm text-gray-900">
                  {ord.commodity}
                </p>
                <p className="text-xs text-gray-400 font-medium">{ord.spec}</p>

                <p className="text-[11px] text-gray-400 pt-1">
                  Destination:{" "}
                  <span className="text-gray-600 font-medium">
                    {ord.destination}
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Metrics & Actions */}
            <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
              {/* Required Metric */}
              <div className="text-left space-y-0.5">
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Required
                </p>
                <p className="text-base font-black text-gray-900">
                  {ord.required}
                </p>
              </div>

              {/* Committed Metric */}
              <div className="text-left space-y-0.5 min-w-[70px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Committed
                </p>
                <p
                  className={`text-base font-black ${
                    ord.committed === "0 MT"
                      ? "text-emerald-800"
                      : "text-emerald-700"
                  }`}
                >
                  {ord.committed}
                </p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${ord.committedBg} rounded-full`}
                    style={{
                      width:
                        ord.committed === "0 MT"
                          ? "0%"
                          : ord.committed === "45 MT"
                          ? "90%"
                          : "100%",
                    }}
                  />
                </div>
              </div>

              {/* Required By Date */}
              <div className="text-left space-y-0.5">
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Required by
                </p>
                <p className="text-xs font-bold text-gray-700">
                  {ord.requiredBy}
                </p>
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
                {ord.hasReviewMatch && (
                  <Link
                    href="/dashboard/buyer/order-passport"
                    className="w-full sm:w-auto bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs text-center transition-colors shadow-xs"
                  >
                    Review match
                  </Link>
                )}

                <Link
                  href="/dashboard/buyer/order-passport"
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-3.5 py-1.5 rounded-xl text-xs text-center transition-colors"
                >
                  View passport
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}