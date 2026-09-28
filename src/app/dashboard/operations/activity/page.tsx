"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export interface ActivityEvent {
  id: string;
  category: "order" | "supply" | "logistics" | "settlement" | "exception";
  title: string;
  description: string;
  performedBy: string;
  timestamp: string;
  linkRef?: string;
}

export default function OperationsActivityLogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [activities] = useState<ActivityEvent[]>([
    {
      id: "ACT-026",
      category: "logistics",
      title: "Logistics job assigned: HL-LGS-0044",
      description:
        "Driver: Chidi Okafor · Route: Benue South Aggregation Hub → Makurdi",
      performedBy: "HarvestLink Operations · System",
      timestamp: "9 Nov 2024, 09:00",
      linkRef: "",
    },
    {
      id: "ACT-025",
      category: "logistics",
      title: "Delivery confirmed: HL-LGS-0041",
      description:
        "40 MT delivered to Apapa Export Terminal · Recipient: Agrofresh Processors Ltd — Receiving Manager",
      performedBy: "Emeka Nwosu · Logistics Partner",
      timestamp: "6 Nov 2024, 07:40",
      linkRef: "",
    },
    {
      id: "ACT-024",
      category: "logistics",
      title: "Pickup confirmed: HL-LGS-0041",
      description: "40 MT collected from Ondo State Aggregation Hub — Akure",
      performedBy: "Emeka Nwosu · Logistics Partner",
      timestamp: "5 Nov 2024, 00:15",
      linkRef: "",
    },
    {
      id: "ACT-023",
      category: "exception",
      title: "Exception reported: HL-EXE-0041",
      description:
        "Supply delay — batch not received: 15 MT Cocoa Grade 1 overdue",
      performedBy: "Emmanuel Adeyemi · Aggregation Agent",
      timestamp: "5 Nov 2024, 08:30",
      linkRef: "",
    },
    {
      id: "ACT-022",
      category: "settlement",
      title: "Payment record created: HL-PAY-0041",
      description: "₦38,240,000 gross amount · Agrofresh Processors Ltd",
      performedBy: "HarvestLink Operations · System",
      timestamp: "4 Nov 2024, 18:00",
      linkRef: "",
    },
    {
      id: "ACT-021",
      category: "settlement",
      title: "Payment settled: HL-PAY-0020",
      description: "₦48,506,250 net settled to Premiere Export Trading Co.",
      performedBy: "Licensed Payment Provider · System",
      timestamp: "30 Sept 2024, 14:20",
      linkRef: "",
    },
    {
      id: "ACT-020",
      category: "order",
      title: "Order issued: HL-2024-SES-0019",
      description: "Sesame · Whitish — 99.95% purity · Target: 100 MT",
      performedBy: "Meridian Oils Nigeria Ltd · Buyer",
      timestamp: "28 Sept 2024, 10:15",
      linkRef: "",
    },
    {
      id: "ACT-019",
      category: "supply",
      title: "Batch verified: BAT-002",
      description:
        "30.2 MT Cocoa Grade 1 verified at Ondo State Aggregation Hub",
      performedBy: "Emmanuel Adeyemi · Aggregation Agent",
      timestamp: "24 Oct 2024, 11:30",
      linkRef: "",
    },
  ]);

  const filteredActivities = activities.filter((act) => {
    if (selectedCategory !== "all" && act.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Activity log
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Tested network audit trail and operational event record across all
          workflows.
        </p>
      </div>

      {/* Filter Toolbar & Legend Indicators */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="space-y-1">
          <label className="block text-[10px] font-bold text-gray-400 uppercase">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
          >
            <option value="all">All categories</option>
            <option value="order">Orders</option>
            <option value="supply">Supply</option>
            <option value="logistics">Logistics</option>
            <option value="settlement">Settlements</option>
            <option value="exception">Exceptions</option>
          </select>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-extrabold">
          <span className="flex items-center gap-1.5 text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Order
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Supply
          </span>
          <span className="flex items-center gap-1.5 text-purple-700">
            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            Logistics
          </span>
          <span className="flex items-center gap-1.5 text-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            Settlement
          </span>
          <span className="flex items-center gap-1.5 text-red-700">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Exception
          </span>
        </div>
      </div>

      {/* Activity Timeline List */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-6 space-y-3 shadow-2xs divide-y divide-gray-100">
        <div className="flex items-center justify-between pb-1">
          <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
            RECENT AUDIT EVENTS
          </span>
          <span className="text-xs font-medium text-gray-400">
            {filteredActivities.length} events
          </span>
        </div>

        {filteredActivities.map((act) => {
          const isOrder = act.category === "order";
          const isSupply = act.category === "supply";
          const isLogistics = act.category === "logistics";
          const isSettlement = act.category === "settlement";
          const isException = act.category === "exception";

          return (
            <div
              key={act.id}
              className="pt-3.5 first:pt-2 pb-1 flex flex-col sm:flex-row sm:items-start justify-between gap-3 hover:bg-gray-50/60 rounded-xl p-2 transition-colors"
            >
              {/* Left Details */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase ${
                      isOrder
                        ? "bg-blue-100 text-blue-800"
                        : isSupply
                          ? "bg-emerald-100 text-emerald-800"
                          : isLogistics
                            ? "bg-purple-100 text-purple-800"
                            : isSettlement
                              ? "bg-amber-100 text-amber-900"
                              : "bg-red-100 text-red-800"
                    }`}
                  >
                    • {act.category}
                  </span>
                  <h3 className="font-extrabold text-xs sm:text-sm text-gray-900">
                    {act.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {act.description}
                </p>

                <p className="text-[10px] text-gray-400 font-bold">
                  Performed by:{" "}
                  <span className="text-gray-700">{act.performedBy}</span>
                </p>
              </div>

              {/* Right Timestamp & Link */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                <span className="text-[11px] font-medium text-gray-400">
                  {act.timestamp}
                </span>

                {act.linkRef && (
                  <Link
                    href={`/dashboard/operations/activity`}
                    className="text-[11px] font-bold text-[#0c4a24] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View</span>
                    <FiArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
