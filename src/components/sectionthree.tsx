"use client";

import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";

export default function AggregationFlowSection() {
  const [hoveredFarmer, setHoveredFarmer] = useState<number | null>(null);

  const farmers = [
    { name: "Farmer Afolabi", location: "Osun", quantity: "25 MT" },
    { name: "Cooperative Ogun", location: "Ogun", quantity: "30 MT" },
    { name: "Farmer Nwosu", location: "Anambra", quantity: "20 MT" },
    { name: "Farmer Yusuf", location: "Kwara", quantity: "25 MT" },
  ];

  return (
    <section className="w-full bg-[#0d3b1e] text-white py-20 px-6 font-sans relative overflow-hidden">
      {/* Background Radial Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-widest uppercase">
            ONE ORDER, MANY CONTRIBUTIONS
          </p>

          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-white">
            One buyer order. Multiple farmer contributions.  One verified delivery.
          
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
            HarvestLink coordinates fragmented supply into a single consolidated shipment - with every contribution tracked and verified at the aggregation point.
          </p>
        </div>

        {/* Aggregation Tree Flow Diagram */}
        <div className="pt-4 max-w-4xl mx-auto flex flex-col items-center">
          {/* Node 1: Buyer Requirement Header Box */}
          <div className="group relative bg-[#134726] border border-emerald-500/40 rounded-xl px-6 py-3.5 shadow-xl transition-all duration-300 hover:scale-105 hover:border-amber-400">
            <p className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
              BUYER REQUIREMENT
            </p>
            <p className="text-sm font-extrabold text-amber-400 mt-0.5">
              100 MT Cocoa · Grade 1
            </p>
          </div>

          {/* Vertical Connecting Line 1 */}
          <div className="w-[1.5px] h-8 bg-emerald-600/60 my-1 animate-pulse" />

          {/* Node 2: Smart Order Assembly Badge */}
          <div className="bg-emerald-950/80 border border-emerald-600/50 px-4 py-1.5 rounded-md text-[10px] font-bold text-white/80 tracking-wider uppercase">
            SMART ORDER ASSEMBLY
          </div>

          {/* Vertical Connecting Line 2 */}
          <div className="w-[1.5px] h-8 bg-emerald-600/60 my-1" />

          {/* Horizontal Branch Connector Line */}
          <div className="relative w-full max-w-2xl h-[1.5px] bg-emerald-600/60 hidden sm:block">
            {/* Pulsing indicator dots */}
            <div className="absolute -top-1 left-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <div className="absolute -top-1 right-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>

          {/* Node 3: 4 Farmer Contribution Batches */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5 w-full pt-4 sm:pt-0">
            {farmers.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredFarmer(idx)}
                onMouseLeave={() => setHoveredFarmer(null)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 transform cursor-pointer relative overflow-hidden ${
                  hoveredFarmer === idx
                    ? "bg-[#18532c] border-amber-400 shadow-xl -translate-y-1"
                    : "bg-[#134726]/80 border-emerald-600/40 hover:border-emerald-400/60"
                }`}
              >
                {/* Vertical Connector Line for Mobile */}
                <div className="w-[1.5px] h-4 bg-emerald-600/60 mx-auto -mt-4 mb-2 sm:hidden" />

                <h4 className="font-bold text-white text-xs tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[11px] text-white/80 mt-0.5">
                  {item.location}
                </p>

                <div className="mt-3">
                  <p className="text-base font-black text-white leading-none">
                    {item.quantity}
                  </p>
                  <p className="text-[10px] text-emerald-200/60 mt-0.5">
                    committed
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Connecting Line 3 */}
          <div className="w-[1.5px] h-8 bg-emerald-600/60 my-1" />

          {/* Node 4: Aggregation Point Card */}
          <div className="bg-[#134726] border border-emerald-500/50 rounded-xl p-5 w-full max-w-sm shadow-xl space-y-3 transition-transform duration-300 hover:scale-[1.02]">
            <p className="text-[10px] font-bold tracking-wider text-white/80 uppercase">
              AGGREGATION · IBADAN NORTH
            </p>

            <div className="grid grid-cols-3 gap-2 border-t border-emerald-700/50 pt-2.5 text-center">
              <div>
                <p className="text-[10px] text-emerald-200/80">Received</p>
                <p className="text-base font-extrabold text-white mt-0.5">
                  100 MT
                </p>
              </div>
              <div>
                <p className="text-[10px] text-emerald-200/80">Verified</p>
                <p className="text-base font-extrabold text-amber-400 mt-0.5">
                  98 MT
                </p>
              </div>
              <div>
                <p className="text-[10px] text-emerald-200/80">Batches</p>
                <p className="text-base font-extrabold text-amber-400 mt-0.5">
                  4
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Connecting Line 4 */}
          <div className="w-[1.5px] h-8 bg-emerald-600/60 my-1" />

          {/* Node 5: Confirmed Delivery Pill */}
          <div className="bg-emerald-950 border border-emerald-500/60 rounded-xl px-5 py-3 flex items-center gap-2.5 shadow-lg backdrop-blur-sm">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center font-bold">
              <BiCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-emerald-300 uppercase tracking-widest">
                DELIVERED
              </p>
              <p className="text-xs font-bold text-white">
                Buyer receives 98 MT · Lagos
              </p>
            </div>
          </div>

          {/* Disclaimer Footer */}
          <p className="text-[10px] text-emerald-300/50 italic mt-8">
            Illustrative product data. Actual orders are coordinated in the HarvestLink platform.
          </p>
        </div>
      </div>
    </section>
  );
}