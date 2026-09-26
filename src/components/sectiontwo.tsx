"use client";

import React, { useState } from "react";

export default function CoordinationSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: "01",
      title: "Buyer creates demand",
      desc: "A commercial buyer specifies the commodity, quantity, grade, and delivery requirements.",
    },
    {
      num: "02",
      title: "Supply is assembled",
      desc: "HarvestLink matches eligible farmers and cooperatives to the demand, recommending combinations.",
    },
    {
      num: "03",
      title: "Farmers commit supply",
      desc: "Each farmer or cooperative confirms their available quantity and commits to the order.",
    },
    {
      num: "04",
      title: "Aggregation & verification",
      desc: "Partners receive commodity batches at the aggregation point. Each batch is weighed and verified.",
    },
    {
      num: "05",
      title: "Logistics dispatch",
      desc: "Verified consolidated loads are handed to logistics partners for transport to the delivery point.",
    },
    {
      num: "06",
      title: "Delivery confirmed",
      desc: "The buyer receives the commodity. Delivery is recorded with confirmation at the destination.",
    },
    {
      num: "07",
      title: "Settlement completed",
      desc: "Settlement is processed through a licensed payment provider across all contributing parties.",
    },
  ];

  return (
    <div className="w-full bg-[#fcfdfd] py-20 font-sans text-gray-900 border-t border-gray-100 space-y-28">
      {/* SECTION 1: THE COORDINATION PROBLEM */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="text-[11px] font-bold tracking-widest text-[#14532d] uppercase">
            THE COORDINATION PROBLEM
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Turning fragmented supply into coordinated fulfillment.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Commercial buyers need specific commodities, quantities, specifications and delivery timelines. Farmers may have the supply — but it is distributed across many locations and parties. HarvestLink bridges that gap.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-amber-400 font-bold flex items-center justify-center text-base mb-6 group-hover:scale-110 transition-transform">
              H
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#14532d] transition-colors">
              One order, many sources
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Commercial buyers specify their commodity requirements. HarvestLink matches and coordinates supply across multiple farmers and cooperatives to build a complete, verified order.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-amber-400 font-bold flex items-center justify-center text-base mb-6 group-hover:scale-110 transition-transform">
              H
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#14532d] transition-colors">
              Aggregation with accountability
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Aggregation partners receive, weigh, and verify each farmer batch independently. Declared quantities are distinguished from physically verified quantities — no assumptions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-9 h-9 rounded-lg bg-[#14532d] text-amber-400 font-bold flex items-center justify-center text-base mb-6 group-hover:scale-110 transition-transform">
              H
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#14532d] transition-colors">
              Coordinated to delivery
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Verified loads move through logistics partners with full tracking. Settlement follows confirmed delivery — every stage of the journey is recorded.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE HARVESTLINK JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="text-[11px] font-bold tracking-widest text-[#14532d] uppercase">
            THE HARVESTLINK JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Every order follows the same path.
          </h2>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full">
          {/* Connector Background Line */}
          <div className="hidden lg:block absolute top-[18px] left-[4%] right-[4%] h-[2px] bg-gray-200 z-0" />

          {/* Active Connector Progress Line */}
          <div
            className="hidden lg:block absolute top-[18px] left-[4%] h-[2px] bg-[#14532d] transition-all duration-500 z-0"
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 92}%` }}
          />

          {/* 7 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const stepNumber = idx + 1;
              const isActive = stepNumber <= activeStep;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(stepNumber)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circle Badge */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm mb-4 ${
                      isActive
                        ? "bg-[#14532d] text-white scale-110 animate-pulse-ring"
                        : "bg-gray-200 text-gray-600 group-hover:bg-[#14532d] group-hover:text-white"
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Text Content */}
                  <h4 className="text-xs font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-[#14532d] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}