"use client";

import { IMatchResult } from "@/src/types";
import React, { useState } from "react";
import {
  BiCheckCircle,
  BiMapPin,
  BiTrendingUp,
  BiBadgeCheck,
  BiGroup,
  BiLayer,
} from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";


export default function MatchDemoPage() {
  const [loading, setLoading] = useState(false);
  const [matchData, setMatchData] = useState<any>(null);

  const [form, setForm] = useState({
    buyerId: "DEMO-BUYER-99",
    buyerName: "Global Commodity Traders",
    commodity: "Sesame",
    requiredQuantityKg: 5000,
    maxBudgetPerKg: 1200,
    targetLocationState: "Kaduna",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRunMatch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMatchData(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header Banner */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <HiSparkles className="w-6 h-6 text-amber-500" />
            <h1 className="text-2xl font-extrabold text-emerald-950 uppercase tracking-tight">
              AI Matching Engine Playground
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Simulate real-time multi-factor supplier ranking, price evaluation, and greedy demand allocation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Input Parameters */}
        <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm space-y-4">
          <h2 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-3 flex items-center gap-2">
            <BiLayer className="w-5 h-5 text-emerald-700" />
            <span>Demand Criteria</span>
          </h2>

          <form onSubmit={handleRunMatch} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Commodity Type
              </label>
              <select
                name="commodity"
                value={form.commodity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="Sesame">Sesame</option>
                <option value="Maize">Maize</option>
                <option value="Soybeans">Soybeans</option>
                <option value="Sorghum">Sorghum</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Target Quantity (kg)
              </label>
              <input
                type="number"
                name="requiredQuantityKg"
                value={form.requiredQuantityKg}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Max Price Ceiling (₦/kg)
              </label>
              <input
                type="number"
                name="maxBudgetPerKg"
                value={form.maxBudgetPerKg}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Delivery / Destination Hub State
              </label>
              <select
                name="targetLocationState"
                value={form.targetLocationState}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Plateau">Plateau</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#14532d] hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
            >
              <HiSparkles className="w-5 h-5 text-amber-400" />
              <span>{loading ? "Calculating Matches..." : "Run Matching Algorithm"}</span>
            </button>
          </form>
        </div>

        {/* Right Column: Output Metrics & Score Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          {matchData ? (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase">
                    <BiCheckCircle className="w-4 h-4" />
                    <span>Fulfillment Rate</span>
                  </div>
                  <p className="text-2xl font-extrabold text-emerald-950 mt-1">
                    {matchData.summary.fulfillmentPercentage}%
                  </p>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    {matchData.summary.totalFulfilledKg.toLocaleString()} / {form.requiredQuantityKg.toLocaleString()} kg
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold uppercase">
                    <BiTrendingUp className="w-4 h-4" />
                    <span>Weighted Avg Cost</span>
                  </div>
                  <p className="text-2xl font-extrabold text-amber-950 mt-1">
                    ₦{matchData.summary.weightedAvgPricePerKg}/kg
                  </p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Target Ceiling: ₦{form.maxBudgetPerKg}/kg
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-blue-800 text-xs font-bold uppercase">
                    <BiGroup className="w-4 h-4" />
                    <span>Matched Batches</span>
                  </div>
                  <p className="text-2xl font-extrabold text-blue-950 mt-1">
                    {matchData.summary.matchedSuppliersCount}
                  </p>
                  <p className="text-xs text-blue-700 mt-0.5">Allocated Suppliers</p>
                </div>
              </div>

              {/* Matched Suppliers */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-sm">
                  Allocated Supplier Ranking Breakdown
                </h3>

                {matchData.matches.map((item: IMatchResult, idx: number) => (
                  <div
                    key={idx}
                    className="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-base">
                            {item.supplier.farmerName}
                          </h4>
                          <span className="flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                            <BiBadgeCheck className="w-4 h-4" /> Grade {item.supplier.qualityGrade}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <BiMapPin className="w-3.5 h-3.5" /> {item.supplier.locationState}
                          </span>
                          <span>•</span>
                          <span>₦{item.supplier.unitPricePerKg}/kg</span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-xl font-black text-emerald-700">
                          {item.matchScore}% Match
                        </span>
                        <p className="text-xs text-gray-500 font-medium">
                          Allocated: {item.allocatedQuantityKg.toLocaleString()} kg (₦{item.totalCost.toLocaleString()})
                        </p>
                      </div>
                    </div>

                    {/* Algorithmic Weight Matrix Sub-Scores */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-semibold text-gray-600">
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        Price Score (35%): <span className="text-emerald-700 font-bold">{item.scoreBreakdown.priceScore}%</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        Quality (25%): <span className="text-emerald-700 font-bold">{item.scoreBreakdown.qualityScore}%</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        Proximity (20%): <span className="text-emerald-700 font-bold">{item.scoreBreakdown.locationScore}%</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                        Reliability (20%): <span className="text-emerald-700 font-bold">{item.scoreBreakdown.reliabilityScore}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-64 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 text-center text-gray-400">
              <HiSparkles className="w-10 h-10 mb-2 text-amber-400" />
              <p className="font-medium text-sm">Engine Idle</p>
              <p className="text-xs text-gray-400 mt-1">
                Select your order parameters and run the matching algorithm to view scoring calculations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}