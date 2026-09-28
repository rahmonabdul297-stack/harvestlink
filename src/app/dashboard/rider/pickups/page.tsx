"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiTruck, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

export type PickupViewState = "detail" | "record" | "confirmed";

export default function RiderPickupsPage() {
  const [view, setView] = useState<PickupViewState>("detail");

  // Form inputs
  const [pickedQty, setPickedQty] = useState<string>("62");
  const [pickupDatetime, setPickupDatetime] = useState<string>("");
  const [pickupNotes, setPickupNotes] = useState<string>("");

  const job = {
    id: "HL-LGS-0044",
    orderRef: "HL-2024-SES-0019",
    commodity: "Sesame — Whitish — 99.95% purity",
    cargoQty: "62 MT",
    cargoSpec: "Sesame — Whitish — 99.95% purity",
    status: "Ready for dispatch",
    hub: "Benue South Aggregation Hub — Makurdi",
    hubContact: "Aisha Mohammed (Aggregation Agent) · +234 805 333 0144",
    scheduledPickup: "9 Nov 2024",
    pickupInstructions: "Collect from Hub warehouse, Bay 3. 124 x 500 kg jumbo bags. Confirm count before loading.",
    buyer: "Global Seed Exports Ltd",
    destination: "Apapa Container Terminal, Lagos",
    deliveryContact: "Global Seed Exports Ltd — Logistics Manager · +234 807 222 0113",
    estDelivery: "11 Nov 2024",
    deliveryInstructions: "Deliver to shed 2, Apapa Container Terminal. Container booking ref CTR-2024-1107.",
    driver: "Chidi Okafor",
    vehicle: "Lagos — LSD 552 XBT (12-ton truck)",
    assignedAt: "8 Nov 2024, 09:00",
    acceptedAt: "24 Sept 2026, 08:11",
    batches: [
      { id: "HL-BAT-004", text: "38 MT verified · Tiv Sesame Farmers Cooperative" },
      { id: "HL-BAT-005", text: "24 MT verified · Lafia Sesame Growers Union" },
    ],
  };

  const handleRecordPickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setView("confirmed");
  };

  return (
    <div className="font-sans text-gray-900 max-w-5xl mx-auto space-y-6 pb-12">
      {/* -------------------------------------------------------------
          VIEW 1: PICKUP JOB DETAIL (MOCKUP 10)
      ------------------------------------------------------------- */}
      {view === "detail" && (
        <div className="space-y-6">
          <Link
            href="/dashboard/rider"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to jobs</span>
          </Link>

          {/* Header Banner */}
          <div className="bg-[#0a381b] text-white rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                  LOGISTICS JOB
                </p>
                <h1 className="text-2xl font-black tracking-tight">{job.id}</h1>
                <p className="text-xs text-emerald-200/80 font-medium">
                  Order: {job.orderRef} · {job.commodity.split("—")[0]}
                </p>
              </div>

              <span className="bg-blue-100 text-blue-900 text-xs font-extrabold px-3.5 py-1 rounded-full self-start sm:self-auto inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Ready for dispatch
              </span>
            </div>

            {/* Stepper Indicator */}
            <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold border-t border-emerald-800/60 pt-4">
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs">
                  ✓
                </div>
                <span>Assigned</span>
              </div>
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs">
                  ✓
                </div>
                <span>Dispatch</span>
              </div>
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-white/30 text-white flex items-center justify-center mx-auto text-xs">
                  •
                </div>
                <span>Picked up</span>
              </div>
              <div className="text-emerald-500/50 space-y-1">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto text-xs"></div>
                <span>In transit</span>
              </div>
              <div className="text-emerald-500/50 space-y-1">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto text-xs"></div>
                <span>Delivered</span>
              </div>
            </div>

            {/* Cargo Box */}
            <div className="bg-[#114524] rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-900/60 border border-emerald-600/40 text-amber-300 flex items-center justify-center font-bold text-lg shrink-0">
                📦
              </div>
              <div>
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">
                  Cargo
                </span>
                <p className="text-base font-black text-white">{job.cargoQty}</p>
                <p className="text-[11px] text-emerald-200/80">{job.cargoSpec}</p>
              </div>
            </div>
          </div>

          {/* Responsibility Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-blue-900">
            <FiTruck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-bold text-blue-700 uppercase">
                Current responsibility
              </p>
              <p className="font-extrabold text-blue-950">
                Logistics Partner — confirm pickup from aggregation hub
              </p>
              <p className="text-blue-800/80 text-[11px] mt-0.5">
                Next: Travel to {job.hub} and confirm cargo collection.
              </p>
            </div>
          </div>

          {/* Information Sections */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase tracking-wider text-[10px]">
              Order Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              <div>
                <span className="text-gray-400 block">Order reference</span>
                <span className="font-bold text-gray-900">{job.orderRef}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Commodity</span>
                <span className="font-bold text-gray-900">{job.commodity}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Required quantity</span>
                <span className="font-bold text-gray-900">100 MT</span>
              </div>
              <div>
                <span className="text-gray-400 block">Verified quantity</span>
                <span className="font-bold text-gray-900">{job.cargoQty}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Buyer</span>
                <span className="font-bold text-gray-900">{job.buyer}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Destination</span>
                <span className="font-bold text-gray-900">{job.destination}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase tracking-wider text-[10px]">
              Pickup Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              <div>
                <span className="text-gray-400 block">Aggregation point</span>
                <span className="font-bold text-gray-900">{job.hub}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Contact</span>
                <span className="font-bold text-gray-900">{job.hubContact}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Scheduled pickup</span>
                <span className="font-bold text-gray-900">{job.scheduledPickup}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Instructions</span>
                <span className="font-bold text-gray-900">{job.pickupInstructions}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs">
            <h3 className="font-extrabold text-gray-400 uppercase tracking-wider text-[10px]">
              Cargo Summary
            </h3>
            <div className="space-y-2">
              <p className="text-gray-500">
                Commodity: <span className="font-bold text-gray-900">{job.commodity}</span>
              </p>
              <p className="text-gray-500">
                Total quantity: <span className="font-bold text-gray-900">{job.cargoQty}</span>
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-gray-400">Batch IDs:</span>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                  HL-BAT-004
                </span>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                  HL-BAT-005
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase tracking-wider text-[10px]">
              Delivery Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              <div>
                <span className="text-gray-400 block">Destination</span>
                <span className="font-bold text-gray-900">{job.destination}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Contact</span>
                <span className="font-bold text-gray-900">{job.deliveryContact}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Est. delivery</span>
                <span className="font-bold text-gray-900">{job.estDelivery}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Instructions</span>
                <span className="font-bold text-gray-900">{job.deliveryInstructions}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase tracking-wider text-[10px]">
              Driver and Vehicle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
              <div>
                <span className="text-gray-400 block">Driver</span>
                <span className="font-bold text-gray-900">{job.driver}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Vehicle</span>
                <span className="font-bold text-gray-900">{job.vehicle}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Assigned</span>
                <span className="font-bold text-gray-900">{job.assignedAt}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Accepted</span>
                <span className="font-bold text-gray-900">{job.acceptedAt}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setView("record")}
              className="w-full sm:w-auto bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3.5 rounded-xl text-xs shadow-xs"
            >
              Confirm pickup →
            </button>
            <button
              onClick={() => alert("Report issue modal or view triggered")}
              className="w-full sm:w-auto bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold px-5 py-3.5 rounded-xl text-xs"
            >
              Report issue
            </button>
            <button
              onClick={() => alert("Order Passport view triggered")}
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-xs"
            >
              View Order Passport
            </button>
          </div>
        </div>
      )}


      {view === "record" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("detail")}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* Step Breadcrumbs */}
          <div className="flex items-center gap-3 text-xs font-bold">
            <span className="bg-[#0c4a24] text-white px-3 py-1 rounded-md flex items-center gap-1">
              <span>1</span> Record pickup
            </span>
            <span className="text-gray-400 font-medium">2 In transit</span>
            <span className="text-gray-400 font-medium">3 Confirm delivery</span>
          </div>

          <div className="bg-blue-50 border border-blue-200 text-blue-900 p-4 rounded-xl text-xs font-semibold">
            Confirm that you have collected the verified cargo from {job.hub}. This action records the pickup and moves the job to &quot;In transit&quot;.
          </div>

          <form onSubmit={handleRecordPickupSubmit} className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-5 text-xs">
            <h3 className="font-black text-gray-900 text-sm">Pickup details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">Quantity picked up (MT)</label>
                <input
                  type="number"
                  value={pickedQty}
                  onChange={(e) => setPickedQty(e.target.value)}
                  className="w-full p-3 border rounded-xl"
                  required
                />
                <span className="text-[10px] text-gray-400">Committed: {job.cargoQty}</span>
              </div>

              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">Pickup date/time</label>
                <input
                  type="datetime-local"
                  value={pickupDatetime}
                  onChange={(e) => setPickupDatetime(e.target.value)}
                  className="w-full p-3 border rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Pickup notes (optional)</label>
              <textarea
                value={pickupNotes}
                onChange={(e) => setPickupNotes(e.target.value)}
                placeholder="e.g. Cargo collected. All bags present. Hub supervisor confirmed count."
                rows={3}
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1 text-[11px] text-gray-500">
              <p className="font-bold text-gray-700">Evidence (prototype placeholder)</p>
              <p>Photos of loaded vehicle and hub sign-off would be captured here in the live product.</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3.5 rounded-xl text-xs"
              >
                Confirm pickup — {pickedQty} MT
              </button>
              <button
                type="button"
                onClick={() => setView("detail")}
                className="bg-white border border-red-200 text-red-600 font-bold px-5 py-3.5 rounded-xl text-xs"
              >
                Report issue instead
              </button>
            </div>
          </form>
        </div>
      )}

    
      {view === "confirmed" && (
        <div className="space-y-6">
          <div className="bg-[#0a381b] text-white rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                PICKUP CONFIRMED
              </span>
              <h1 className="text-xl font-black">{job.id} — Picked Up</h1>
              <p className="text-xs text-emerald-200/80 mt-1">
                Pickup has been recorded. The cargo is now in transit to {job.destination}. Confirm delivery when you arrive.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase text-[10px]">
              Pickup Record
            </h3>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Job</span>
              <span className="font-bold text-gray-900">{job.id}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Status</span>
              <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-bold text-[10px]">
                • In transit
              </span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Picked up at</span>
              <span className="font-bold text-gray-900">24 Sept 2026, 13:16</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Quantity</span>
              <span className="font-bold text-gray-900">{pickedQty} MT Sesame</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Driver</span>
              <span className="font-bold text-gray-900">{job.driver}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Vehicle</span>
              <span className="font-bold text-gray-900">{job.vehicle}</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 text-xs">
            <h3 className="font-extrabold text-gray-400 uppercase text-[10px]">
              NEXT STEP — DELIVER
            </h3>
            <p className="font-extrabold text-gray-900">
              Deliver to: {job.destination}
            </p>
            <p className="text-gray-500">{job.deliveryContact}</p>
            <div className="bg-blue-50 text-blue-900 p-3 rounded-xl border border-blue-200">
              {job.deliveryInstructions}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/rider/delivered"
              className="bg-[#0c4a24] text-white font-bold px-6 py-3 rounded-xl text-xs"
            >
              Confirm delivery →
            </Link>
            <button
              onClick={() => setView("detail")}
              className="bg-white border border-gray-200 text-gray-700 font-bold px-5 py-3 rounded-xl text-xs"
            >
              View job
            </button>
          </div>
        </div>
      )}
    </div>
  );
}