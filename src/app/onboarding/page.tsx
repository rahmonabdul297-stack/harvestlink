"use client";

import React from "react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import Header from "@/src/components/header";

export default function RoleSelectionPage() {
  const roles = [
    {
      initial: "B",
      initialBg: "bg-[#14532d] text-white",
      title: "Commercial Buyer",
      sub: "Processor · Exporter · Trader",
      desc: "Source agricultural commodities from coordinated, verified supply. Create requirements, review assembled supply and track fulfillment.",
      actionText: "Select Commercial Buyer",
      actionColor: "text-[#14532d] hover:text-emerald-800",
      route: "/buyer",
    },
    {
      initial: "F",
      initialBg: "bg-[#14532d] text-white",
      title: "Farmer / Cooperative",
      sub: "Smallholder · Cooperative Member",
      desc: "Connect your available commodity supply to real sourcing opportunities. Commit quantities and track your contribution and settlement.",
      actionText: "Select Farmer / Cooperative",
      actionColor: "text-[#14532d] hover:text-emerald-800",
      route: "/farmer",
    },
    {
      initial: "A",
      initialBg: "bg-amber-600 text-white",
      title: "Aggregation Agent",
      sub: "Hub Operator · Collection Point",
      desc: "Receive, weigh and verify farmer commodity batches. Consolidate verified supply and prepare orders for logistics dispatch.",
      actionText: "Select Aggregation Agent",
      actionColor: "text-amber-700 hover:text-amber-800",
      route: "/match-demo",
    },
    {
      initial: "L",
      initialBg: "bg-[#5c3a21] text-white",
      title: "Logistics Partner",
      sub: "Transport Operator",
      desc: "Manage pickup and delivery jobs for verified agricultural loads. Confirm collections, update transit status and record delivery.",
      actionText: "Select Logistics Partner",
      actionColor: "text-[#5c3a21] hover:text-[#3d2616]",
      route: "/rider",
    },
    {
      initial: "O",
      initialBg: "bg-[#123620] text-white",
      title: "HarvestLink Operations",
      sub: "Internal · Platform Admin",
      desc: "Monitor the full fulfillment network. Manage orders, supply, exceptions, logistics and settlement across all roles.",
      actionText: "Select HarvestLink Operations",
      actionColor: "text-[#123620] hover:text-emerald-950",
      route: "/buyer",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] font-sans py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-gray-900">
        <Header/>
      <div className="max-w-4xl w-full space-y-10 mt-7">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block">
            <span className="text-[10px] font-bold tracking-widest text-[#14532d] bg-emerald-100/70 border border-emerald-200/80 px-3 py-1 rounded-full uppercase">
              AGRICULTURAL PLATFORM
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What brings you to HarvestLink?
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Select your role to get started. Each role has its own workspace tailored to what you need to do.
          </p>
        </div>

        {/* Roles 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Header Row with Badge */}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl ${role.initialBg} font-black flex items-center justify-center text-base shrink-0 shadow-sm`}
                  >
                    {role.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-[#14532d] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {role.sub}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed pt-1">
                  {role.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  href={role.route}
                  className={`inline-flex items-center gap-1.5 text-xs font-extrabold transition-colors ${role.actionColor}`}
                >
                  <span>{role.actionText}</span>
                  <BiRightArrowAlt className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Product Flow Summary Card */}
        <div className="bg-[#eaf4ee] border border-emerald-200/70 rounded-2xl p-5 text-xs text-[#14532d] space-y-2">
          <p className="font-bold text-[11px] uppercase tracking-wider text-emerald-900">
            Core product flow
          </p>
          <p className="leading-relaxed text-[11px] font-medium text-emerald-800">
            Buyer creates demand <span className="mx-1">→</span> HarvestLink assembles supply <span className="mx-1">→</span> Farmers commit quantities <span className="mx-1">→</span> Aggregator verifies batches <span className="mx-1">→</span> Logistics dispatches <span className="mx-1">→</span> Buyer receives delivery <span className="mx-1">→</span> Order is settled.
          </p>
        </div>
      </div>
    </div>
  );
}