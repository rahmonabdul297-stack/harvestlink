"use client";

import React from "react";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function FarmerHomePage() {
  const pastDeliveries = [
    {
      id: "HL-2023-SES-0007",
      title: "Sesame · 14 MT delivered",
      status: "Delivered",
    },
    {
      id: "HL-2024-CCO-0041",
      title: "Cocoa · 18 MT delivered",
      status: "Delivered",
    },
    {
      id: "HL-2024-CCO-0041",
      title: "Cocoa · 30 MT delivered",
      status: "Delivered",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-10">
      {/* SECTION 1: TOP GREETING HEADER CARD */}
      <div className="bg-[#0f4022] text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/80">
              FARMER ACCOUNT
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Good morning, Adamu
            </h1>
            <p className="text-xs text-emerald-200/80 font-medium">
              Yakubu Farms Enterprise · Makurdi, Benue State · Sesame
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop"
            alt="Sesame Crop"
            className="w-12 h-12 rounded-xl object-cover border border-emerald-600/50 shrink-0"
          />
        </div>

        {/* Embedded Metrics Row */}
        <div className="grid grid-cols-3 gap-4 border-t border-emerald-800/80 pt-4 text-xs">
          <div>
            <p className="text-[10px] text-emerald-300/70 font-bold uppercase">
              Open requests
            </p>
            <p className="text-2xl font-black text-amber-400 mt-0.5">1</p>
          </div>
          <div>
            <p className="text-[10px] text-emerald-300/70 font-bold uppercase">
              Active commitments
            </p>
            <p className="text-2xl font-black text-white mt-0.5">0</p>
          </div>
          <div>
            <p className="text-[10px] text-emerald-300/70 font-bold uppercase">
              Deliveries done
            </p>
            <p className="text-2xl font-black text-white mt-0.5">3</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: URGENT ACTION CALLOUT CARD */}
      <div className="border-2 border-amber-500 rounded-2xl overflow-hidden bg-[#fffdf5] shadow-xs">
        <div className="bg-[#d97706] text-white px-4 py-2 text-xs font-bold flex items-center gap-2">
          <span>⚠️</span>
          <span>Response needed — respond today</span>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-900/60 block">
              HL-2024-SES-0019
            </span>
            <h2 className="text-xl font-black text-gray-900 mt-0.5">Sesame</h2>
            <p className="text-xs text-gray-500 font-medium">
              Whitish — 99.95% purity
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-xs border-y border-amber-200/60 py-3">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Your proposed contribution
              </p>
              <p className="text-xl font-black text-emerald-800 mt-0.5">
                22 MT
              </p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Required by
              </p>
              <p className="text-xs font-extrabold text-gray-900 mt-1">
                1 December 2024
              </p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Respond by
              </p>
              <p className="text-xs font-black text-amber-700 mt-1">10 Nov</p>
            </div>
          </div>

          <Link
            href="/farmer/requests"
            className="w-full bg-[#0f4022] hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-xs inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>Review this request</span>
            <BiRightArrowAlt className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* SECTION 3: 3 SUMMARY METRIC CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Declared this season
          </p>
          <p className="text-2xl font-black text-gray-900">22 MT</p>
          <p className="text-[10px] text-gray-400">Sesame — not yet committed</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Deliveries completed
          </p>
          <p className="text-2xl font-black text-gray-900">3</p>
          <p className="text-[10px] text-gray-400">62 MT total delivered</p>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Open requests
          </p>
          <p className="text-2xl font-black text-amber-600">1</p>
          <p className="text-[10px] text-gray-400">Need your response</p>
        </div>
      </div>

      {/* SECTION 4: PAST DELIVERIES */}
      <div className="space-y-3">
        <h3 className="font-extrabold text-sm text-gray-900">Past deliveries</h3>

        <div className="space-y-2">
          {pastDeliveries.map((del, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-center justify-between text-xs shadow-2xs hover:border-gray-300 transition-colors"
            >
              <div>
                <p className="text-[10px] font-mono text-gray-400">{del.id}</p>
                <p className="font-bold text-gray-900 mt-0.5">{del.title}</p>
              </div>

              <span className="bg-emerald-100/80 text-emerald-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200">
                • {del.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: HOW HARVESTLINK WORKS EDUCATIONAL CARD */}
      <div className="bg-[#eaf4ee] border border-emerald-200/70 rounded-2xl p-6 space-y-4 text-xs">
        <h4 className="font-bold text-gray-900 text-xs">How HarvestLink works</h4>

        <div className="space-y-2.5 text-emerald-950 font-medium">
          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              1
            </span>
            <span>A buyer creates a demand for a commodity.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              2
            </span>
            <span>HarvestLink identifies eligible supply records and sends requests to farmers.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              3
            </span>
            <span>You review the request and commit how much you can supply.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              4
            </span>
            <span>You deliver your supply to the aggregation hub, where it is received and verified.</span>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0f4022] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
              5
            </span>
            <span>Once verified, your supply is included in the buyer&apos;s consolidated order.</span>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/farmer/requests"
            className="inline-block bg-white hover:bg-gray-50 border border-emerald-300 text-emerald-900 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
          >
            View all requests
          </Link>
        </div>
      </div>
    </div>
  );
}