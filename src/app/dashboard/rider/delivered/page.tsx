"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export type DeliveredViewState = "form" | "success";

export default function RiderDeliveredPage() {
  const [view, setView] = useState<DeliveredViewState>("form");

  // Form inputs
  const [deliveredQty, setDeliveredQty] = useState<string>("62");
  const [deliveryDatetime, setDeliveryDatetime] = useState<string>("");
  const [recipientName, setRecipientName] = useState<string>("");
  const [deliverySlipRef, setDeliverySlipRef] = useState<string>("");
  const [deliveryNotes, setDeliveryNotes] = useState<string>("");

  const job = {
    id: "HL-LGS-0044",
    orderRef: "HL-2024-SES-0019",
    commodity: "Sesame",
    pickedUpQty: "62 MT",
    destination: "Apapa Container Terminal, Lagos",
    driver: "Chidi Okafor",
    vehicle: "Lagos — LSD 882 QRT (12-ton truck)",
    buyer: "Global Seed Exports Ltd",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setView("success");
  };

  return (
    <div className="font-sans text-gray-900 max-w-4xl mx-auto space-y-6 pb-12">
      {/* -------------------------------------------------------------
          VIEW 1: CONFIRM DELIVERY FORM (MOCKUP 13)
      ------------------------------------------------------------- */}
      {view === "form" && (
        <div className="space-y-6">
          <Link
            href="/dashboard/rider"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>

          {/* Banner Header */}
          <div className="bg-[#0a381b] text-white rounded-2xl p-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
              DELIVERY CONFIRMATION
            </span>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
              {job.id} — Confirm delivery
            </h1>
          </div>

          {/* Form Container */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-6 space-y-5 text-xs shadow-xs"
          >
            <h3 className="font-black text-gray-900 text-sm">Delivery details</h3>

            {/* Quantity and Datetime Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">
                  Quantity delivered (MT)
                </label>
                <input
                  type="number"
                  value={deliveredQty}
                  onChange={(e) => setDeliveredQty(e.target.value)}
                  className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
                  required
                />
                <span className="text-[10px] text-gray-400 block">
                  Picked up: {job.pickedUpQty}
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">
                  Delivery date/time
                </label>
                <input
                  type="datetime-local"
                  value={deliveryDatetime}
                  onChange={(e) => setDeliveryDatetime(e.target.value)}
                  className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
                />
              </div>
            </div>

            {/* Recipient Name */}
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">
                Recipient name / confirmation
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. John Adeyemi — Warehouse Manager"
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
                required
              />
            </div>

            {/* Delivery Slip Reference */}
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">
                Delivery slip reference (optional)
              </label>
              <input
                type="text"
                value={deliverySlipRef}
                onChange={(e) => setDeliverySlipRef(e.target.value)}
                placeholder="e.g. DS-2024-1106-001"
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
              />
            </div>

            {/* Delivery Notes */}
            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">
                Delivery notes
              </label>
              <textarea
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                placeholder="e.g. Delivery complete. All bags received and signed off by warehouse manager."
                rows={3}
                className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
              />
            </div>

            {/* Evidence Placeholder Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1 text-[11px] text-gray-500">
              <p className="font-bold text-gray-700">
                Evidence (prototype placeholder)
              </p>
              <p>
                Delivery photo and signed delivery note would be captured here in the live product.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-xs"
              >
                Confirm delivery — {deliveredQty} MT
              </button>
              <button
                type="button"
                onClick={() => alert("Redirecting to Report Issue form...")}
                className="w-full sm:w-auto bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold px-5 py-3.5 rounded-xl text-xs transition-colors"
              >
                Report issue instead
              </button>
            </div>
          </form>
        </div>
      )}

      {view === "success" && (
        <div className="space-y-6">
          {/* Green Top Banner */}
          <div className="bg-[#0a381b] text-white rounded-2xl p-6 flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                DELIVERY CONFIRMED
              </span>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                DELIVERED
              </h1>
              <p className="text-xs text-emerald-200/80 mt-1 font-medium leading-relaxed">
                {job.id} delivery confirmed. The cargo has reached its destination and the record has been updated.
              </p>
            </div>
          </div>

          {/* Delivery Record Table Card */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-6 space-y-3 text-xs divide-y divide-gray-100 shadow-xs">
            <h3 className="font-extrabold text-gray-400 uppercase text-[10px] tracking-wider pb-1">
              DELIVERY RECORD
            </h3>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Job reference</span>
              <span className="font-bold text-gray-900">{job.id}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Order</span>
              <span className="font-bold text-gray-900">{job.orderRef}</span>
            </div>

            <div className="flex justify-between pt-3 items-center">
              <span className="text-gray-400 font-medium">Status</span>
              <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-md font-extrabold text-[10px] inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Delivered
              </span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Delivered to</span>
              <span className="font-bold text-gray-900 text-right">{job.destination}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Recipient</span>
              <span className="font-bold text-gray-900">{recipientName || "—"}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Delivered at</span>
              <span className="font-bold text-gray-900">24 Sept 2026, 13:10</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Quantity delivered</span>
              <span className="font-bold text-gray-900">{deliveredQty} MT {job.commodity}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Driver</span>
              <span className="font-bold text-gray-900">{job.driver}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Vehicle</span>
              <span className="font-bold text-gray-900 text-right">{job.vehicle}</span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-gray-400 font-medium">Buyer</span>
              <span className="font-bold text-gray-900">{job.buyer}</span>
            </div>
          </div>

          {/* Bottom Next Step Callout */}
          <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 text-xs text-emerald-900 leading-relaxed">
            <span className="font-bold">What happens next:</span> The Order Passport will reflect delivery completion. Settlement process may be initiated through the licensed payment provider — this is a separate stage.
          </div>

          {/* Return Button */}
          <div>
            <Link
              href="/dashboard/rider"
              className="inline-block bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-xs"
            >
              Back to jobs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}