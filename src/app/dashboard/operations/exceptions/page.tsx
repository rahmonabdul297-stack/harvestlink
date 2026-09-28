"use client";

import React, { useState } from "react";
import { FiAlertCircle, FiArrowRight } from "react-icons/fi";

export interface ExceptionItem {
  id: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  status: "action-required" | "under-review" | "resolved";
  statusLabel: string;
  title: string;
  description: string;
  orderRef: string;
  reportedBy: string;
  responsible: string;
  createdDate: string;
  affectedQty?: string;
  nextAction?: string;
  interventionLogged?: string;
}

export default function CentralExceptionsPage() {
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [hideResolved, setHideResolved] = useState<boolean>(false);

  const [exceptions] = useState<ExceptionItem[]>([
    {
      id: "HL-EXE-0041",
      severity: "HIGH",
      status: "action-required",
      statusLabel: "action required",
      title: "Supply delay — batch not received",
      description:
        "Batch BAT-003 from Chukwuemeka Farms (15 MT Cocoa Grade 1, committed) has not been received at the Ondo State Aggregation Hub. Scheduled delivery was 1 November 2024. The order has been partially fulfilled (47.8 MT of 60 MT target). The remaining 15 MT committed batch is 6 days overdue.",
      orderRef: "HL-2024-CCO-0041",
      reportedBy: "Emmanuel Adeyemi (Aggregation Agent)",
      responsible: "HarvestLink Operations",
      createdDate: "5 Nov 2024",
      affectedQty: "15 MT",
      nextAction:
        "Contact Chukwuemeka Farms to confirm supply status. Determine whether the 15 MT committed batch will be delivered or must be sourced from an alternative supplier to meet the buyer requirement.",
    },
    {
      id: "HL-EXE-0039",
      severity: "MEDIUM",
      status: "under-review",
      statusLabel: "under review",
      title: "Logistics delay",
      description:
        "Logistics job HL-LGS-0041 has been in transit for longer than estimated delivery window. Expected delivery was 16 Oct 2024. No delivery confirmation received.",
      orderRef: "HL-2024-CCO-0038",
      reportedBy: "Chioma Obi (HarvestLink Operations)",
      responsible: "Logistics Partner",
      createdDate: "17 Oct 2024",
      affectedQty: "40 MT",
      nextAction:
        "Contact logistics partner Emeka Nwosu to confirm delivery status. Update order status once confirmed.",
    },
    {
      id: "HL-EXE-0037",
      severity: "LOW",
      status: "resolved",
      statusLabel: "resolved",
      title: "Settlement issue",
      description:
        "Payment reference discrepancy noted during settlement. External payment reference provided by buyer did not match expected format. Resolved after manual verification.",
      orderRef: "HL-2024-CSH-0028",
      reportedBy: "Chioma Obi (HarvestLink Operations)",
      responsible: "Buyer",
      createdDate: "30 Sept 2024",
      interventionLogged: "1 intervention logged",
    },
  ]);

  const filteredExceptions = exceptions.filter((exc) => {
    if (
      selectedSeverity !== "all" &&
      exc.severity.toLowerCase() !== selectedSeverity.toLowerCase()
    ) {
      return false;
    }
    if (selectedStatus !== "all" && exc.status !== selectedStatus) {
      return false;
    }
    if (hideResolved && exc.status === "resolved") {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Exceptions
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          Central exception register. Human-in-the-loop intervention required.
        </p>
      </div>

      {/* Red Alert Banner */}
      <div className="bg-red-50 border border-red-200/90 rounded-2xl p-4 flex items-start gap-3.5 text-xs text-red-900 shadow-2xs">
        <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-base shrink-0">
          !
        </div>
        <div>
          <h3 className="font-extrabold text-sm text-red-950">
            1 exception require immediate action
          </h3>
          <p className="text-red-800/80 font-medium mt-0.5">
            Review below and intervene to unblock affected workflows.
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total exceptions
          </span>
          <span className="text-xl font-black text-gray-900 block">3</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Open
          </span>
          <span className="text-xl font-black text-red-600 block">0</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Action required
          </span>
          <span className="text-xl font-black text-amber-700 block">1</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Critical / High
          </span>
          <span className="text-xl font-black text-red-600 block">1</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Resolved
          </span>
          <span className="text-xl font-black text-emerald-700 block">1</span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Severity Dropdown */}
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-gray-400 uppercase">
              Severity
            </label>
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
            >
              <option value="all">All severities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Status Dropdown */}
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
              <option value="action-required">Action required</option>
              <option value="under-review">Under review</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          {/* Hide Resolved Toggle */}
          <div className="flex items-center gap-2 pt-4">
            <input
              type="checkbox"
              id="hide-resolved"
              checked={hideResolved}
              onChange={(e) => setHideResolved(e.target.checked)}
              className="w-4 h-4 rounded text-[#0c4a24] focus:ring-[#0c4a24] border-gray-300"
            />
            <label
              htmlFor="hide-resolved"
              className="text-xs font-bold text-gray-700 cursor-pointer select-none"
            >
              Hide resolved
            </label>
          </div>
        </div>

        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredExceptions.length} exceptions
        </span>
      </div>

      {/* Exception Cards List */}
      <div className="space-y-4">
        {filteredExceptions.map((exc) => {
          const isHigh = exc.severity === "HIGH";
          const isActionRequired = exc.status === "action-required";
          const isResolved = exc.status === "resolved";

          return (
            <div
              key={exc.id}
              className={`rounded-2xl border p-5 sm:p-6 space-y-4 bg-white transition-all shadow-2xs ${
                isHigh
                  ? "border-amber-300"
                  : isResolved
                  ? "border-gray-200/80 opacity-90"
                  : "border-gray-200/80"
              }`}
            >
              {/* Card Header & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-sm text-gray-900">
                    {exc.id}
                  </span>

                  <span
                    className={`text-[9px] font-black px-2 py-0.5 rounded-md ${
                      isHigh
                        ? "bg-red-100 text-red-800"
                        : exc.severity === "MEDIUM"
                        ? "bg-amber-100 text-amber-900"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    • {exc.severity}
                  </span>

                  <span
                    className={`text-[9px] font-black px-2 py-0.5 rounded-md ${
                      isActionRequired
                        ? "bg-amber-100 text-amber-900"
                        : isResolved
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    • {exc.statusLabel}
                  </span>
                </div>

                <button
                  onClick={() => alert(`Intervention triggered for ${exc.id}`)}
                  className="bg-[#0c4a24] hover:bg-[#09381b] text-white text-xs font-extrabold px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-2xs"
                >
                  <span>Intervene</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-gray-900">
                  {exc.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {exc.description}
                </p>
              </div>

              {/* Context Info Meta */}
              <div className="text-[11px] text-gray-500 font-medium space-y-1 border-t border-gray-100 pt-3">
                <p>
                  Order: <span className="font-bold text-gray-800">{exc.orderRef}</span> · Reported by:{" "}
                  <span className="font-bold text-gray-800">{exc.reportedBy}</span> · Responsible:{" "}
                  <span className="font-bold text-gray-800">{exc.responsible}</span> · Created:{" "}
                  <span className="font-bold text-gray-800">{exc.createdDate}</span>
                </p>
                {exc.affectedQty && (
                  <p>
                    Affected qty: <span className="font-bold text-gray-800">{exc.affectedQty}</span>
                  </p>
                )}
                {exc.interventionLogged && (
                  <p className="text-gray-400">{exc.interventionLogged}</p>
                )}
              </div>

              {/* Next Action Box */}
              {exc.nextAction && (
                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 font-medium leading-relaxed">
                  <span className="font-extrabold text-amber-900">Next action:</span>{" "}
                  {exc.nextAction}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}