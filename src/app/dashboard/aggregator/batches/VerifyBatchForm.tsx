"use client";

import React, { useState } from "react";
import { BatchItem } from "./page";
import { BiLeftArrowAlt } from "react-icons/bi";

interface VerifyBatchFormProps {
  batch: BatchItem;
  onBack: () => void;
  onFlag?: (reason?: string) => void;
  onComplete: (acceptedAmount: number) => void;
}

export default function VerifyBatchForm({
  batch,
  onBack,
  onFlag,
  onComplete,
}: VerifyBatchFormProps) {
  const [acceptedQty, setAcceptedQty] = useState<number>(24);
  const [weighingSlipRef, setWeighingSlipRef] =
    useState<string>("WS-BAT-005-OCT30");
  const [verificationNotes, setVerificationNotes] = useState<string>("");

  const [specChecks, setSpecChecks] = useState({
    grade: "pass",
    condition: "pass",
    moisture: "pass",
    packaging: "pass",
    contamination: "pass",
  });

  const toggleCheck = (
    field: keyof typeof specChecks,
    val: "pass" | "flag" | "not_checked",
  ) => {
    setSpecChecks((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(acceptedQty);
  };

  return (
    <div className="space-y-6 max-w-2xl font-sans text-gray-900">
      <button
        onClick={onBack}
        type="button"
        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
      >
        <BiLeftArrowAlt className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Verify batch — {batch.id}
        </h1>
        <p className="text-xs text-gray-500 font-medium">
          {batch.supplier} · {batch.commodity} · {batch.spec}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Quantity Verification */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
          <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
            1 · QUANTITY VERIFICATION
          </h3>

          <div className="grid grid-cols-3 gap-4 text-xs border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Committed
              </span>
              <p className="font-black text-gray-900 mt-0.5">
                {batch.committedQty}
              </p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Received
              </span>
              <p className="font-black text-blue-700 mt-0.5">
                {batch.receivedQty || "24 MT"}
              </p>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Variance
              </span>
              <p className="font-black text-amber-700 mt-0.5">-4.0%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700">
                Accepted quantity (MT)
              </label>
              <input
                type="number"
                value={acceptedQty}
                onChange={(e) => setAcceptedQty(Number(e.target.value))}
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-700">
                Rejected quantity (MT)
              </label>
              <input
                type="text"
                disabled
                value="0.0 MT"
                className="w-full p-3 text-xs bg-gray-50 border border-gray-200 rounded-xl text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Specification Checks */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
          <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
            2 · SPECIFICATION CHECKS
          </h3>

          {[
            {
              key: "grade",
              label: "Grade / specification",
              sub: "Does the physical product match the required grade?",
            },
            {
              key: "condition",
              label: "Product condition",
              sub: "General condition — no visible spoilage, breakage, or foreign matter.",
            },
            {
              key: "moisture",
              label: "Moisture / quality",
              sub: "Moisture or quality assessment (visual/instrument check if available).",
            },
            {
              key: "packaging",
              label: "Packaging & handling",
              sub: "Bags, sacks, or containers are intact and correctly handled.",
            },
            {
              key: "contamination",
              label: "Visible contamination",
              sub: "No visible pest damage, contamination, or mixed commodity.",
            },
          ].map((check) => (
            <div
              key={check.key}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 text-xs"
            >
              <div>
                <p className="font-bold text-gray-900">{check.label}</p>
                <p className="text-[11px] text-gray-400">{check.sub}</p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => toggleCheck(check.key as any, "pass")}
                  className={`px-3 py-1 rounded-lg border font-bold text-xs ${
                    specChecks[check.key as keyof typeof specChecks] === "pass"
                      ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                      : "bg-white text-gray-600 border-gray-200"
                  }`}
                >
                  Pass
                </button>
                <button
                  type="button"
                  onClick={() => toggleCheck(check.key as any, "flag")}
                  className={`px-3 py-1 rounded-lg border font-bold text-xs ${
                    specChecks[check.key as keyof typeof specChecks] === "flag"
                      ? "bg-amber-100 text-amber-900 border-amber-300"
                      : "bg-white text-gray-600 border-gray-200"
                  }`}
                >
                  Flag
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Step 3: Evidence & Notes */}
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
          <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
            3 · EVIDENCE & NOTES
          </h3>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">
              Weighing slip reference
            </label>
            <input
              type="text"
              value={weighingSlipRef}
              onChange={(e) => setWeighingSlipRef(e.target.value)}
              className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">
              Verification notes
            </label>
            <textarea
              value={verificationNotes}
              onChange={(e) => setVerificationNotes(e.target.value)}
              placeholder="Optional — any additional notes about this batch."
              rows={3}
              className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#0f4022] hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-colors shadow-xs"
          >
            Mark batch VERIFIED — {acceptedQty} MT
          </button>
          {onFlag && (
            <button
              type="button"
              onClick={() => onFlag(verificationNotes || "Flagged during verification inspection.")}
              className="w-full sm:w-auto bg-[#b45309] hover:bg-amber-800 text-white font-bold px-5 py-3.5 rounded-xl text-xs"
            >
              Flag for review instead
            </button>
          )}
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-xs"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}