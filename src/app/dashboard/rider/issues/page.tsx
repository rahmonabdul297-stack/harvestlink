"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function RiderReportIssuePage() {
  const router = useRouter();

  const [selectedIssueType, setSelectedIssueType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [affectedQty, setAffectedQty] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const issueTypes = [
    "Quantity discrepancy",
    "Damaged cargo",
    "Destination issue",
    "Recipient unavailable",
    "Vehicle breakdown",
    "Delay",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIssueType) return;
    setIsSubmitted(true);
  };

  return (
    <div className="font-sans text-gray-900 max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Back Link */}
      <div>
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Dark Red Header Card */}
      <div className="bg-[#7f1d1d] text-white rounded-2xl p-6 shadow-xs">
        <span className="text-[10px] font-bold uppercase tracking-wider text-red-200 block">
          EXCEPTION REPORT
        </span>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
          HL-LGS-0044 — Report issue
        </h1>
      </div>

      {/* Warning Alert Banner */}
      <div className="bg-red-50/90 border border-red-200/90 text-red-800 p-4 rounded-xl text-xs font-semibold leading-relaxed">
        <span className="font-extrabold text-red-900">Important:</span> Only use this form to record a genuine operational exception. HarvestLink operations will be notified immediately.
      </div>

      {/* Form or Confirmation Card */}
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-6 space-y-6 text-xs shadow-xs"
        >
          {/* Issue Type Selector */}
          <div className="space-y-2.5">
            <label className="block font-bold text-gray-700">Issue type</label>
            <div className="flex flex-wrap gap-2">
              {issueTypes.map((type) => {
                const isSelected = selectedIssueType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedIssueType(type)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      isSelected
                        ? "bg-gray-900 text-white border-gray-900 shadow-xs"
                        : "bg-gray-50 border-gray-200/90 text-gray-700 hover:bg-gray-100/80"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description Textarea */}
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue clearly and factually."
              rows={4}
              className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1d1d] placeholder:text-gray-400"
              required
            />
          </div>

          {/* Affected Quantity Input */}
          <div className="space-y-1.5">
            <label className="block font-bold text-gray-700">
              Affected quantity (MT) — if applicable
            </label>
            <input
              type="text"
              value={affectedQty}
              onChange={(e) => setAffectedQty(e.target.value)}
              placeholder="e.g. 2.5"
              className="w-full sm:w-48 p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7f1d1d] placeholder:text-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={!selectedIssueType}
              className={`w-full sm:w-auto font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-xs ${
                selectedIssueType
                  ? "bg-[#7f1d1d] hover:bg-red-900 text-white cursor-pointer"
                  : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
              }`}
            >
              Submit exception report
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-xs transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        /* Confirmation State */
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-4 text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-800 font-black text-xl flex items-center justify-center mx-auto">
            !
          </div>
          <h2 className="text-lg font-black text-gray-900">
            Exception Report Submitted
          </h2>
          <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            Operational team has been alerted for <span className="font-bold text-gray-800">{selectedIssueType}</span> regarding job <span className="font-bold text-gray-800">HL-LGS-0044</span>.
          </p>
          <div className="pt-2">
            <Link
              href="/dashboard/rider"
              className="inline-block bg-[#0a381b] hover:bg-[#09381b] text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Return to logistics jobs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}