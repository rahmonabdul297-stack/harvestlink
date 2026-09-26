"use client";

import React, { useState } from "react";

export default function CommodityVerificationSection() {
  const [activeStage, setActiveStage] = useState<number>(4);

  const commodities = [
    {
      title: "Cocoa",
      botanical: "Theobroma cacao",
      description:
        "Nigeria's cocoa belt spans Cross River, Ondo, and Osun states. HarvestLink coordinates cocoa sourcing from farms to export-ready aggregation.",
      tags: ["Grade 1", "Grade 2", "Fermented"],
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Cashew",
      botanical: "Anacardium occidentale",
      description:
        "Raw cashew nuts (RCN) are a major export commodity from Nigeria. HarvestLink supports cashew sourcing from farmers and processor cooperatives.",
      tags: ["Raw Nut (RCN)", "Grade A", "Grade B"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwPXO7DXJvwLTq1ODEUXL3Rv8y3v2_pxDOfgBxfhiCA&s=10",
    },
    {
      title: "Sesame",
      botanical: "Sesamum indicum",
      description:
        "Sesame (beniseed) is a growing export commodity from northern Nigeria. HarvestLink coordinates sesame aggregation and movement to international standards.",
      tags: ["White Sesame", "Natural", "Cleaned"],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const verificationStages = [
    {
      id: 1,
      title: "Supply declared",
      percentage: "20%",
      width: "20%",
      desc: "Farmer states their available quantity. This is an intent — it hasn't been physically verified.",
      dotColor: "bg-gray-400",
      barColor: "bg-gray-400",
    },
    {
      id: 2,
      title: "Supply committed",
      percentage: "40%",
      width: "40%",
      desc: "Farmer confirms they will supply the stated quantity against a specific order.",
      dotColor: "bg-amber-500",
      barColor: "bg-amber-500",
    },
    {
      id: 3,
      title: "Batch received",
      percentage: "60%",
      width: "60%",
      desc: "Aggregation partner physically receives the commodity at the collection point.",
      dotColor: "bg-blue-600",
      barColor: "bg-blue-600",
    },
    {
      id: 4,
      title: "Batch verified",
      percentage: "80%",
      width: "80%",
      desc: "Weight and quality are checked by the aggregation partner; verified quantity is recorded.",
      dotColor: "bg-emerald-600",
      barColor: "bg-emerald-600",
    },
    {
      id: 5,
      title: "Ready for delivery",
      percentage: "100%",
      width: "100%",
      desc: "Verified batches are consolidated and ready for logistics dispatch to the buyer.",
      dotColor: "bg-[#14532d]",
      barColor: "bg-[#14532d]",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-900 border-t border-gray-100">
      {/* SECTION 1: INITIAL COMMODITY FOCUS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[10px] font-bold tracking-widest text-[#14532d] uppercase">
              INITIAL COMMODITY FOCUS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Starting with Nigeria&apos;s key export crops.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              HarvestLink is being developed around three initial commodity categories for early-stage coordination.
            </p>
          </div>

          {/* 3 Commodity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commodities.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Thumbnail */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#14532d] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] italic text-gray-400 font-serif">
                        {item.botanical}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Quality Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: VERIFICATION AND TRUST */}
      <section className="bg-[#f9f7f5] py-20 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Pitch */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-[10px] font-bold tracking-widest text-[#14532d] uppercase">
                VERIFICATION AND TRUST
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Declared is not the same as verified.
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                HarvestLink distinguishes between what has been stated, committed, physically received, and independently verified — at every stage of the order.
              </p>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Aggregation partners record actual received and verified quantities. Buyers see the full picture — not just promises.
              </p>
            </div>

            {/* Right Column: Interactive 5-Stage Verification Progress Stack */}
            <div className="lg:col-span-7 space-y-3.5">
              {verificationStages.map((stage) => {
                const isSelected = activeStage === stage.id;

                return (
                  <div
                    key={stage.id}
                    onMouseEnter={() => setActiveStage(stage.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white border-emerald-600/40 shadow-md transform -translate-y-0.5"
                        : "bg-white/80 border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${stage.dotColor}`}
                        />
                        <span className="text-gray-900">{stage.title}</span>
                      </div>
                      <span className="text-gray-400 font-mono text-[11px]">
                        {stage.percentage}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] text-gray-500 leading-normal mb-2.5">
                      {stage.desc}
                    </p>

                    {/* Progress Track Bar */}
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stage.barColor} transition-all duration-500 ease-out`}
                        style={{ width: stage.width }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}