"use client";

import React, { useState } from "react";

export interface OperationsLogisticsJob {
  id: string;
  orderRef: string;
  commodity: string;
  grade: string;
  driver: string;
  vehicle: string;
  origin: string;
  destination: string;
  status: "in-transit" | "delivered" | "issue";
  qtyDelivered?: string;
  totalQty?: string;
}

export default function LogisticsMonitoringPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const [jobs] = useState<OperationsLogisticsJob[]>([
    {
      id: "HL-LGS-0041",
      orderRef: "HL-2024-CCO-0038",
      commodity: "Cocoa",
      grade: "Grade 1 — Main Crop",
      driver: "Emeka Nwosu",
      vehicle: "Lagos — FO 347 AKM (10-ton truck)",
      origin: "Ondo State Aggregation Hub — Akure",
      destination: "Apapa Export Terminal",
      status: "in-transit",
      totalQty: "40 MT",
    },
    {
      id: "HL-LGS-0039",
      orderRef: "HL-2024-CSH-0028",
      commodity: "Cashew",
      grade: "W240 — Whole White",
      driver: "Alhaji Musa Tanko",
      vehicle: "Lagos — KWS 221 GHJ (15-ton truck)",
      origin: "Kwara Central Aggregation Hub — Ilorin",
      destination: "Tin Can Island Port",
      status: "delivered",
      qtyDelivered: "50 MT",
      totalQty: "50 MT",
    },
    {
      id: "HL-LGS-0042",
      orderRef: "HL-2024-CCO-0041",
      commodity: "Cocoa",
      grade: "Grade 1 — Main Crop",
      driver: "Emeka Nwosu",
      vehicle: "Lagos — FO 347 AKM (10-ton truck)",
      origin: "Ondo State Aggregation Hub — Akure",
      destination: "Apapa Export Terminal",
      status: "delivered",
      qtyDelivered: "47.8 MT",
      totalQty: "47.8 MT",
    },
    {
      id: "HL-LGS-0044",
      orderRef: "HL-2024-SES-0019",
      commodity: "Sesame",
      grade: "Whitish — 99.95% purity",
      driver: "Chidi Okafor",
      vehicle: "Lagos — LSD 882 QRT (12-ton truck)",
      origin: "Benue South Aggregation Hub — Makurdi",
      destination: "Apapa Container Terminal",
      status: "in-transit",
      totalQty: "62 MT",
    },
  ]);

  const filteredJobs = jobs.filter((job) => {
    if (selectedStatus !== "all" && job.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Logistics monitoring
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          All logistics jobs and delivery status across active orders.
        </p>
      </div>

      {/* Top Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total jobs
          </span>
          <span className="text-xl font-black text-gray-900 block">4</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            In transit
          </span>
          <span className="text-xl font-black text-blue-600 block">1</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Delivered
          </span>
          <span className="text-xl font-black text-emerald-700 block">2</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Issues
          </span>
          <span className="text-xl font-black text-gray-900 block">0</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Qty delivered
          </span>
          <span className="text-xl font-black text-emerald-700 block">
            97.8 MT
          </span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total qty
          </span>
          <span className="text-xl font-black text-gray-900 block">
            199.8 MT
          </span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
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
            <option value="in-transit">In transit</option>
            <option value="delivered">Delivered</option>
            <option value="issue">Issues</option>
          </select>
        </div>

        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredJobs.length} jobs
        </span>
      </div>

      {/* Logistics Monitoring Table */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[768px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3.5 px-4">JOB REF.</th>
                <th className="py-3.5 px-3">ORDER</th>
                <th className="py-3.5 px-3">COMMODITY</th>
                <th className="py-3.5 px-3">DRIVER / VEHICLE</th>
                <th className="py-3.5 px-4">ORIGIN → DESTINATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50/80 transition-colors">
                  {/* Job Ref */}
                  <td className="py-4 px-4 font-black text-gray-900">
                    {job.id}
                  </td>

                  {/* Order */}
                  <td className="py-4 px-3 font-medium text-gray-500">
                    {job.orderRef}
                  </td>

                  {/* Commodity & Grade */}
                  <td className="py-4 px-3">
                    <p className="font-bold text-gray-900">{job.commodity}</p>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {job.grade}
                    </p>
                  </td>

                  {/* Driver / Vehicle */}
                  <td className="py-4 px-3">
                    <p className="font-extrabold text-gray-900">{job.driver}</p>
                    <p className="text-[10px] text-gray-400 font-medium">
                      {job.vehicle}
                    </p>
                  </td>

                  {/* Origin -> Destination */}
                  <td className="py-4 px-4 font-extrabold text-gray-900">
                    <span>{job.origin}</span>
                    <span className="text-gray-400 mx-1.5">→</span>
                    <span>{job.destination}</span>
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