"use client";

import React from "react";
import Link from "next/link";
import {
  BiLeftArrowAlt,
  BiDownload,
  BiCheck,
  BiCreditCard,
  BiErrorAlt,
  BiRightArrowAlt,
  BiTimeFive,
  BiSolidTruck,
} from "react-icons/bi";

export default function OrderPassportPage() {
  const lifecycleStages = [
    { name: "Demand", completed: true },
    { name: "Matching", completed: true },
    { name: "Proposed", completed: true },
    { name: "Committed", completed: true },
    { name: "Awaiting", completed: true },
    { name: "Received", completed: true },
    { name: "Verified", completed: true },
    { name: "Dispatch", completed: true },
    { name: "Picked up", completed: true },
  ];

  const activityLogs = [
    {
      title: "Demand created",
      role: "Buyer",
      desc: "80 MT Cocoa — Grade 1 — Fermented & Dried",
      date: "8 Oct 2024",
    },
    {
      title: "Supply matching initiated",
      role: "HarvestLink",
      desc: "Matching algorithm evaluated available supply against demand specification.",
      date: "8 Oct 2024",
    },
    {
      title: "Supply committed — Balogun Adewale & Sons",
      role: "Farmer/Cooperative",
      desc: "18 MT committed from Ile-Oluji, Ondo.",
      date: "8 Oct 2024",
    },
    {
      title: "Supply committed — Oke-Igbo Cocoa Cooperative",
      role: "Farmer/Cooperative",
      desc: "30 MT committed from Oke-Igbo, Ondo.",
      date: "8 Oct 2024",
    },
    {
      title: "Batch arrived — BAT-002",
      role: "Aggregation Agent",
      desc: "30.2 MT received from Oke-Igbo Cocoa Cooperative at Akure. Vehicle: OND 203 KJG.",
      date: "24 Oct 2024, 15:00",
    },
    {
      title: "Batch verified — BAT-002",
      role: "Emmanuel Adeyemi",
      desc: "30.2 MT verified. Grade check: pass, Weighing slip: WS-BAT-002-OCT24.",
      date: "24 Oct 2024, 17:45",
      isGreenDot: true,
    },
    {
      title: "Batch arrived — BAT-001",
      role: "Aggregation Agent",
      desc: "17.6 MT received from Balogun Adewale & Sons at Akure. Vehicle: OND 418 HKY.",
      date: "26 Oct 2024, 10:14",
    },
    {
      title: "Batch verified — BAT-001",
      role: "Emmanuel Adeyemi",
      desc: "17.6 MT verified. Grade check: pass, Weighing slip: WS-BAT-001-OCT26.",
      date: "26 Oct 2024, 12:30",
      isGreenDot: true,
    },
    {
      title: "Shipment picked up",
      role: "Emeka Nwosu",
      desc: "47.8 MT dispatched. Vehicle: Lagos — FG 347 AKM (10-ton truck).",
      date: "5 Nov 2024, 09:15",
    },
    {
      title: "Delivery confirmed",
      role: "Agrofresh Processors Ltd",
      desc: "Shipment received at Apapa Export Terminal, Lagos.",
      date: "6 Nov 2024, 16:40",
      isGreenDot: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {/* Top Back Link */}
      <Link
        href="/buyer/orders"
        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors font-semibold"
      >
        <BiLeftArrowAlt className="w-4 h-4" />
        <span>Back to Orders</span>
      </Link>

      {/* SECTION 1: HEADER BANNER CARD */}
      <div className="bg-[#14532d] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        {/* Top Pills & Reference */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-700/60 pb-5">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop"
              alt="Cocoa"
              className="w-12 h-12 rounded-xl object-cover border border-emerald-600/60"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase border border-amber-400/30">
                  ORDER PASSPORT
                </span>
                <span className="text-emerald-200/80 text-[10px] font-medium">
                  Full audit trail
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                HL-2024-CCO-0041
              </h1>
              <p className="text-xs text-emerald-100 font-semibold">
                Cocoa · Grade 1 — Fermented & Dried
              </p>
              <p className="text-[11px] text-emerald-200/70">
                Agrofresh Processors Ltd → Apapa Export Terminal, Lagos
              </p>
            </div>
          </div>

          <div className="sm:text-right space-y-1">
            <span className="text-[10px] text-emerald-300 font-bold uppercase block">
              Current status
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-950 font-black px-3 py-1 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600" /> Delivered
            </span>
          </div>
        </div>

        {/* Quantities Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
          <div>
            <p className="text-emerald-300/80 font-bold uppercase text-[10px]">
              REQUIRED
            </p>
            <p className="text-2xl font-black text-white">80 MT</p>
          </div>
          <div>
            <p className="text-emerald-300/80 font-bold uppercase text-[10px]">
              COMMITTED
            </p>
            <p className="text-2xl font-black text-emerald-300">48 MT</p>
            <p className="text-[10px] text-emerald-300/60">60% of required</p>
          </div>
          <div>
            <p className="text-emerald-300/80 font-bold uppercase text-[10px]">
              VERIFIED
            </p>
            <p className="text-2xl font-black text-emerald-300">47.8 MT</p>
            <p className="text-[10px] text-emerald-300/60">60% of required</p>
          </div>
          <div>
            <p className="text-emerald-300/80 font-bold uppercase text-[10px]">
              DELIVERED
            </p>
            <p className="text-2xl font-black text-emerald-300">47.8 MT</p>
          </div>
        </div>

        {/* Definition Explanation Box */}
        <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-xl p-3.5 text-[11px] text-emerald-200 leading-relaxed">
          <strong>Committed vs Verified:</strong> Committed means a farmer or cooperative agreed to supply. Verified means the physical batch was received, weighed and checked at the aggregation hub.
        </div>

        <button className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors">
          <BiDownload className="w-4 h-4" />
          <span>Export PDF</span>
        </button>
      </div>

      {/* SECTION 2: ORDER LIFECYCLE TRACKER */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-6 shadow-xs">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-sm text-gray-900">Order lifecycle</h3>
          <button className="text-[11px] font-bold text-gray-500 hover:text-gray-800">
            Show all stages ↓
          </button>
        </div>

        {/* Horizontal Process Steps */}
        <div className="overflow-x-auto pb-2">
          <div className="flex items-center min-w-[650px] justify-between">
            {lifecycleStages.map((st, idx) => (
              <React.Fragment key={st.name}>
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="w-6 h-6 rounded-full bg-[#14532d] text-white flex items-center justify-center text-xs">
                    <BiCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-600">
                    {st.name}
                  </span>
                </div>
                {idx < lifecycleStages.length - 1 && (
                  <div className="flex-1 h-0.5 bg-[#14532d] mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:gap-12 text-xs">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase block">
              CURRENT STAGE
            </span>
            <span className="font-extrabold text-gray-900">Delivered</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase block">
              NEXT STEP
            </span>
            <span className="font-bold text-gray-600">Settlement pending</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: ORDER SUMMARY */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-6 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <span>📋</span> Order summary
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs border-b border-gray-100 pb-4">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Commodity
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">Cocoa</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Grade / specification
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Grade 1 — Fermented & Dried
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Buyer
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Agrofresh Processors Ltd
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Aggregation point
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Ondo State Aggregation Hub — Akure
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Destination
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Apapa Export Terminal, Lagos
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs border-b border-gray-100 pb-4">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Required delivery date
            </span>
            <p className="font-bold text-gray-900 mt-0.5">15 November 2024</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Order created
            </span>
            <p className="font-bold text-gray-900 mt-0.5">8 October 2024</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Order status
            </span>
            <span className="inline-block mt-0.5 bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded-md">
              • Delivered
            </span>
          </div>
        </div>

        {/* Progress bar metrics */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div>
              <span className="text-[10px] text-gray-400 font-bold">Required</span>
              <p className="font-black text-gray-900">80 MT</p>
              <p className="text-[9px] text-gray-400">buyer demand</p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold">Committed</span>
              <p className="font-black text-gray-900">48 MT</p>
              <p className="text-[9px] text-gray-400">not yet verified</p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold">Verified</span>
              <p className="font-black text-emerald-700">47.8 MT</p>
              <p className="text-[9px] text-emerald-600">physically checked</p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold">Remaining</span>
              <p className="font-black text-amber-600">32.2 MT</p>
              <p className="text-[9px] text-amber-600">to be verified</p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-gray-200/60 text-[10px]">
            <div className="space-y-1">
              <div className="flex justify-between text-gray-500 font-bold">
                <span>Committed (60%)</span>
                <span>48 / 80 MT</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-slate-800 rounded-full w-[60%]" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-gray-500 font-bold">
                <span>Verified (60%)</span>
                <span>47.8 / 80 MT</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-700 rounded-full w-[60%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: SUPPLIER CONTRIBUTIONS */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <span>👨‍🌾</span> Supplier contributions
        </h3>

        <div className="space-y-3 text-xs">
          {/* Supplier 1 */}
          <div className="border border-gray-200/80 rounded-xl p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-extrabold text-gray-900">
                  Balogun Adewale & Sons
                </span>{" "}
                <span className="text-gray-400 text-[11px]">
                  Ile-Oluji, Ondo · farmer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-400">
                  BAT-001
                </span>
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  • Batch verified
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 text-left pt-1 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Declared</p>
                <p className="font-extrabold text-gray-900">20 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                <p className="font-extrabold text-gray-900">18 MT</p>
                <p className="text-[9px] text-gray-400">not yet verified</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Received</p>
                <p className="font-extrabold text-blue-700">17.6 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verified</p>
                <p className="font-extrabold text-emerald-700">17.6 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verification</p>
                <p className="font-bold text-gray-600 flex items-center gap-1">
                  <BiCheck className="text-emerald-700" /> Verified supplier
                </p>
              </div>
            </div>
          </div>

          {/* Supplier 2 */}
          <div className="border border-gray-200/80 rounded-xl p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-extrabold text-gray-900">
                  Oke-Igbo Cocoa Cooperative
                </span>{" "}
                <span className="text-gray-400 text-[11px]">
                  Oke-Igbo, Ondo · cooperative
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-400">
                  BAT-002
                </span>
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  • Batch verified
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 text-left pt-1 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Declared</p>
                <p className="font-extrabold text-gray-900">35 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                <p className="font-extrabold text-gray-900">30 MT</p>
                <p className="text-[9px] text-gray-400">not yet verified</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Received</p>
                <p className="font-extrabold text-blue-700">30.2 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verified</p>
                <p className="font-extrabold text-emerald-700">30.2 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verification</p>
                <p className="font-bold text-gray-600 flex items-center gap-1">
                  <BiCheck className="text-emerald-700" /> Verified supplier
                </p>
              </div>
            </div>
          </div>

          {/* Supplier 3 */}
          <div className="border border-gray-200/80 rounded-xl p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-extrabold text-gray-900">
                  Chukwuemeka Farms
                </span>{" "}
                <span className="text-gray-400 text-[11px]">
                  Idanre, Ondo · farmer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gray-400">
                  BAT-003
                </span>
                <span className="bg-gray-100 text-gray-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  • Awaiting aggregation
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-left pt-1 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Declared</p>
                <p className="font-extrabold text-gray-900">15 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                <p className="font-extrabold text-gray-400">—</p>
                <p className="text-[9px] text-gray-400">not yet verified</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verification</p>
                <p className="font-bold text-amber-700">⏳ Verification pending</p>
              </div>
            </div>
          </div>

          {/* Supplier 4 */}
          <div className="border border-gray-200/80 rounded-xl p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-extrabold text-gray-900">
                  Adaeze Okafor Farms
                </span>{" "}
                <span className="text-gray-400 text-[11px]">
                  Owena, Ondo · farmer
                </span>
              </div>
              <span className="bg-gray-100 text-gray-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                • Awaiting aggregation
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-left pt-1 border-t border-gray-100">
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Declared</p>
                <p className="font-extrabold text-gray-900">12 MT</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                <p className="font-extrabold text-gray-400">—</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold">Verification</p>
                <p className="font-bold text-gray-500">⭕ Not verified</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-[11px] text-gray-600">
            <strong>Matched through HarvestLink supply matching.</strong> Matching factors considered: commodity specification, declared quantity, origin corridor, supplier verification status, and supply availability. Each match required buyer approval before supplier engagement.
          </div>
        </div>
      </div>

      {/* SECTION 5: BATCH VERIFICATION RECORDS */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <span>✓</span> Batch verification record (3 batches)
        </h3>

        <div className="space-y-4 text-xs">
          {/* Batch 1 */}
          <div className="border border-emerald-200/80 rounded-2xl overflow-hidden bg-white">
            <div className="bg-emerald-50/80 p-3 px-4 flex justify-between items-center border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="font-black text-gray-900">BAT-001</span>
                <span className="bg-emerald-200/80 text-emerald-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  • Batch verified
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium">
                Verified 26 Oct 2024 · Emmanuel Adeyemi
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-extrabold text-gray-900">
                  Balogun Adewale & Sons
                </h4>
                <p className="text-[11px] text-gray-400">
                  Ondo State Aggregation Hub — Akure · OND 418 HKY
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 border-y border-gray-100 py-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                  <p className="font-extrabold text-gray-900">18 MT</p>
                  <p className="text-[9px] text-gray-400">not verified</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Received</p>
                  <p className="font-extrabold text-blue-700">17.6 MT</p>
                  <p className="text-[9px] text-red-600 font-bold">-2.2%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Accepted</p>
                  <p className="font-extrabold text-emerald-700">17.6 MT</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Verified</p>
                  <p className="font-extrabold text-emerald-700">17.6 MT</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-emerald-800">
                <span>Grade: ✓ Pass</span>
                <span>Condition: ✓ Pass</span>
                <span>Moisture: ✓ Pass</span>
                <span>Packaging: ✓ Pass</span>
                <span>Contamination: ✓ Pass</span>
              </div>

              <p className="text-[10px] text-gray-400">
                Weighing slip: WS-BAT-001-OCT26 · Moisture content 7.2%. Grade confirmed. Minor weight variance (-0.4 MT) noted and accepted.
              </p>
            </div>
          </div>

          {/* Batch 2 */}
          <div className="border border-emerald-200/80 rounded-2xl overflow-hidden bg-white">
            <div className="bg-emerald-50/80 p-3 px-4 flex justify-between items-center border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="font-black text-gray-900">BAT-002</span>
                <span className="bg-emerald-200/80 text-emerald-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  • Batch verified
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium">
                Verified 24 Oct 2024 · Emmanuel Adeyemi
              </span>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-extrabold text-gray-900">
                  Oke-Igbo Cocoa Cooperative
                </h4>
                <p className="text-[11px] text-gray-400">
                  Ondo State Aggregation Hub — Akure · OND 203 KJG
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 border-y border-gray-100 py-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Committed</p>
                  <p className="font-extrabold text-gray-900">30 MT</p>
                  <p className="text-[9px] text-gray-400">not verified</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Received</p>
                  <p className="font-extrabold text-blue-700">30.2 MT</p>
                  <p className="text-[9px] text-emerald-600 font-bold">+0.7%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Accepted</p>
                  <p className="font-extrabold text-emerald-700">30.2 MT</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Verified</p>
                  <p className="font-extrabold text-emerald-700">30.2 MT</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-emerald-800">
                <span>Grade: ✓ Pass</span>
                <span>Condition: ✓ Pass</span>
                <span>Moisture: ✓ Pass</span>
                <span>Packaging: ✓ Pass</span>
                <span>Contamination: ✓ Pass</span>
              </div>

              <p className="text-[10px] text-gray-400">
                Weighing slip: WS-BAT-002-OCT24 · Grade 1 confirmed. Full quantity received. Slight over-delivery (+0.2 MT) recorded.
              </p>
            </div>
          </div>

          {/* Aggregation Totals Bar */}
          <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-4 grid grid-cols-4 gap-2 text-xs">
            <div>
              <p className="text-[10px] text-gray-400 font-bold">Total received</p>
              <p className="font-black text-gray-900">47.8 MT</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold">Total verified</p>
              <p className="font-black text-emerald-800">47.8 MT</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold">Total accepted</p>
              <p className="font-black text-emerald-800">47.8 MT</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold">Variance</p>
              <p className="font-black text-amber-600">-15.2 MT</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: AGGREGATION RECORD */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <span>⭕</span> Aggregation record
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs border-b border-gray-100 pb-4">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Aggregation point
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Ondo State Aggregation Hub — Akure
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Agent
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Emmanuel Adeyemi
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Supplier contributions
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">3</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Total committed
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">63 MT</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Total received
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">47.8 MT</p>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 leading-normal">
          HarvestLink coordinates aggregation through partner agents. The aggregation hub is a third-party facility — HarvestLink does not own or operate aggregation warehouses.
        </p>
      </div>

      {/* SECTION 7: LOGISTICS AND DELIVERY */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <BiSolidTruck className="w-5 h-5 text-emerald-800" />
          <span>Logistics and delivery</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Job reference
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">HL-LGS-0042</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Logistics status
            </span>
            <span className="inline-block mt-0.5 bg-emerald-100 text-emerald-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
              • Delivered
            </span>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Carrier / driver
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">Emeka Nwosu</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Vehicle
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Lagos — FG 347 AKM (10-ton truck)
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Quantity dispatched
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">47.8 MT</p>
          </div>
        </div>

        <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold px-3.5 py-1.5 rounded-xl text-xs inline-flex items-center gap-1 transition-colors">
          <span>View logistics job</span>
          <BiRightArrowAlt className="w-4 h-4" />
        </button>
      </div>

      {/* SECTION 8: SETTLEMENT */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
          <BiCreditCard className="w-5 h-5 text-emerald-800" />
          <span>Settlement</span>
        </h3>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs space-y-1">
          <h4 className="font-bold text-gray-900">Payment required</h4>
          <p className="text-[11px] text-gray-500">
            Payment is being coordinated through a licensed payment provider. HarvestLink does not hold funds.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs border-b border-gray-100 pb-4">
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Payment reference
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">HL-PAY-0042</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Payment provider
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">
              Simulated Payment Provider
            </p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Order amount (proto)
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">₦38,240,000</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Net settlement (proto)
            </span>
            <p className="font-extrabold text-gray-900 mt-0.5">₦37,284,000</p>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Settlement status
            </span>
            <p className="font-extrabold text-amber-700 mt-0.5">
              payment-required
            </p>
          </div>
        </div>

        {/* Supplier Settlements breakdown */}
        <div className="space-y-2 text-xs">
          <span className="text-[10px] font-bold text-gray-400 uppercase block">
            SUPPLIER SETTLEMENTS
          </span>
          <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl">
            <span className="font-bold text-gray-900">Balogun Adewale & Sons</span>
            <span className="font-extrabold text-gray-700">
              17.6 MT · <span className="text-amber-700">Pending</span>
            </span>
          </div>
          <div className="flex justify-between p-2.5 bg-gray-50 rounded-xl">
            <span className="font-bold text-gray-900">Oke-Igbo Cocoa Cooperative</span>
            <span className="font-extrabold text-gray-700">
              30.2 MT · <span className="text-amber-700">Pending</span>
            </span>
          </div>
        </div>

        <button className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors shadow-xs">
          <BiCreditCard className="w-4 h-4" />
          <span>Initiate payment</span>
        </button>
      </div>

      {/* SECTION 9: EXCEPTION RECORDS */}
      <div className="bg-white border border-red-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
        <h3 className="font-extrabold text-sm text-red-900 flex items-center gap-2">
          <BiErrorAlt className="w-5 h-5 text-red-600" />
          <span>Exception records (1)</span>
        </h3>

        <div className="bg-red-50/80 border border-red-200/80 rounded-xl p-3.5 text-xs text-red-900 font-bold">
          Settlement may be blocked — 1 unresolved exception on this order. Review and resolve before settlement can proceed.
        </div>

        <div className="border border-red-200/80 rounded-xl p-4 bg-red-50/20 space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-black text-gray-900">HL-EXC-0041</span>
              <span className="bg-red-100 text-red-900 font-bold px-2 py-0.5 rounded-md text-[10px]">
                action required
              </span>
              <span className="text-gray-400 font-mono text-[10px]">HIGH</span>
            </div>
            <button className="text-[#14532d] font-bold hover:underline">
              View issue →
            </button>
          </div>

          <p className="font-bold text-gray-900">Supply delay — batch not received</p>
          <p className="text-[11px] text-gray-500">
            Next action: Contact Chukwuemeka Farms to confirm supply status. Determine whether the 15 MT committed batch will be delivered or must be sourced from an alternative supplier to meet the buyer requirement.
          </p>
          <p className="text-[10px] text-red-700 font-bold">
            Settlement: Blocked pending resolution
          </p>
        </div>
      </div>

      {/* SECTION 10: ACTIVITY HISTORY TIMELINE */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
            <BiTimeFive className="w-5 h-5 text-gray-700" />
            <span>Activity history</span>
          </h3>
          <p className="text-[11px] text-gray-400">
            Chronological record of all events on this order. All events are prototype demonstration data.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-gray-100 ml-3 space-y-6 text-xs pl-6">
          {activityLogs.map((log, idx) => (
            <div key={idx} className="relative group">
              <div
                className={`absolute -left-[31px] top-0.5 w-3 h-3 rounded-full border-2 border-white ${
                  log.isGreenDot ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-bold text-gray-900">
                    {log.title}{" "}
                    <span className="text-[10px] text-gray-400 font-normal">
                      · {log.role}
                    </span>
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    {log.desc}
                  </p>
                </div>
                <span className="text-[10px] text-gray-400 font-mono shrink-0">
                  {log.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}