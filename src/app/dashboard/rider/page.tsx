"use client";

import React, { useState } from "react";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiAlertCircle,
  FiFileText,
  FiTruck,
  FiMapPin,
  FiPackage,
  FiCreditCard,
} from "react-icons/fi";

export type ViewState =
  | "list"
  | "detail"
  | "confirm"
  | "success"
  | "issue"
  | "passport"
  | "payment-detail";

export interface LogisticsJob {
  id: string;
  orderRef: string;
  commodity: string;
  status: "in_transit" | "delivered" | "awaiting_acceptance";
  pickup: string;
  destination: string;
  quantity: string;
  spec: string;
  driver: string;
  vehicle: string;
  scheduledPickup: string;
  pickedUp?: string;
  estDelivery: string;
  deliveredAt?: string;
  buyer: string;
  recipientContact?: string;
  pickupContact?: string;
  instructions?: string;
}

export default function LogisticsRiderPage() {
  const [view, setView] = useState<ViewState>("list");
  const [selectedJobId, setSelectedJobId] = useState<string>("HL-LGS-0041");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Form states
  const [deliveredQty, setDeliveredQty] = useState<string>("40");
  const [deliveryDatetime, setDeliveryDatetime] = useState<string>("");
  const [recipientName, setRecipientName] = useState<string>("");
  const [deliverySlipRef, setDeliverySlipRef] = useState<string>("");
  const [deliveryNotes, setDeliveryNotes] = useState<string>("");

  // Exception form state
  const [issueType, setIssueType] = useState<string>("Quantity discrepancy");
  const [issueDesc, setIssueDesc] = useState<string>("");
  const [affectedQty, setAffectedQty] = useState<string>("");

  const [jobs, setJobs] = useState<LogisticsJob[]>([
    {
      id: "HL-LGS-0041",
      orderRef: "HL-2024-CCO-0038",
      commodity: "Cocoa — Grade 1 — Main Crop",
      status: "in_transit",
      pickup: "Ondo State Aggregation Hub — Akure",
      destination: "Apapa Export Terminal, Lagos",
      quantity: "40 MT",
      spec: "Cocoa · Grade 1 — Main Crop",
      driver: "Emeka Nwosu",
      vehicle: "Lagos — FO 347 AKM (10-ton truck)",
      scheduledPickup: "15 Oct 2024",
      pickedUp: "15 Oct 2024, 01:30",
      estDelivery: "16 Oct 2024",
      buyer: "Agrofresh Processors Ltd",
      pickupContact: "Emmanuel Adeyemi (Aggregation Agent) · +234 803 555 0191",
      recipientContact: "Agrofresh Processors Ltd — Receiving Manager · +234 801 444 0212",
      instructions: "Deliver to Warehouse II, Gate C. Obtain signed delivery note from receiving officer.",
    },
    {
      id: "HL-LGS-0039",
      orderRef: "HL-2024-CSH-0028",
      commodity: "Cashew — W240 — Whole White",
      status: "delivered",
      pickup: "Kwara Central Aggregation Hub — Ilorin",
      destination: "Tin Can Island Port, Lagos",
      quantity: "50 MT",
      spec: "Cashew · W240 — Whole White",
      driver: "Alhaji Musa Tanko",
      vehicle: "Lagos — FG 211 KJA (15-ton truck)",
      scheduledPickup: "27 Sept 2024",
      pickedUp: "27 Sept 2024, 22:45",
      estDelivery: "29 Sept 2024",
      deliveredAt: "29 Sept, 06:20",
      buyer: "Premiere Export Trading Co.",
    },
    {
      id: "HL-LGS-0042",
      orderRef: "HL-2024-CCO-0041",
      commodity: "Cocoa — Grade 1 — Main Crop",
      status: "delivered",
      pickup: "Ondo State Aggregation Hub — Akure",
      destination: "Apapa Export Terminal, Lagos",
      quantity: "47.8 MT",
      spec: "Cocoa · Grade 1 — Main Crop",
      driver: "Emeka Nwosu",
      vehicle: "Lagos — FO 347 AKM (10-ton truck)",
      scheduledPickup: "4 Nov 2024",
      pickedUp: "5 Nov, 00:15",
      estDelivery: "6 Nov 2024",
      deliveredAt: "6 Nov, 07:40",
      buyer: "Agrofresh Processors Ltd",
    },
    {
      id: "HL-LGS-0044",
      orderRef: "HL-2024-SES-0019",
      commodity: "Sesame — Whitish — 99.95% purity",
      status: "awaiting_acceptance",
      pickup: "Benue South Aggregation Hub — Makurdi",
      destination: "Apapa Container Terminal, Lagos",
      quantity: "62 MT",
      spec: "Sesame · Whitish — 99.95% purity",
      driver: "Chidi Okafor",
      vehicle: "Benue — MKD 882 XA (20-ton truck)",
      scheduledPickup: "9 Nov 2024",
      estDelivery: "11 Nov 2024",
      buyer: "Global Seed Exports Ltd",
    },
  ]);

  const activeJob = jobs.find((j) => j.id === selectedJobId) || jobs[0];

  const handleConfirmDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs((prev) =>
      prev.map((j) =>
        j.id === activeJob.id
          ? {
              ...j,
              status: "delivered",
              deliveredAt: "24 Sept 2026, 12:04",
            }
          : j
      )
    );
    setView("success");
  };

  return (
    <div className="font-sans text-gray-900 pb-12 max-w-5xl mx-auto space-y-6">
      {/* -------------------------------------------------------------
          VIEW 1: LIST VIEW (MOCKUP 1)
      ------------------------------------------------------------- */}
      {view === "list" && (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900">
              Logistics jobs
            </h1>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              Chidi Okafor & Emeka Nwosu · Lagos fleet · Prototype data
            </p>
          </div>

          {/* Metric Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">Total jobs</span>
              <span className="text-xl font-black text-gray-900">4</span>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">Awaiting acceptance</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-gray-900">1</span>
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
              </div>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">Ready for dispatch</span>
              <span className="text-xl font-black text-blue-600">0</span>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">In transit</span>
              <span className="text-xl font-black text-amber-700">1</span>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">Delivered</span>
              <span className="text-xl font-black text-emerald-700">2</span>
            </div>
            <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-xs">
              <span className="text-[10px] font-bold text-gray-400 block">Exceptions</span>
              <span className="text-xl font-black text-red-600">0</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeFilter === "all"
                  ? "bg-[#0c4a24] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              All jobs <span className="ml-1 text-[10px] opacity-80">4</span>
            </button>
            <button
              onClick={() => setActiveFilter("awaiting")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeFilter === "awaiting"
                  ? "bg-[#0c4a24] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Awaiting acceptance{" "}
              <span className="ml-1 px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded text-[10px]">
                1
              </span>
            </button>
            <button
              onClick={() => setActiveFilter("in_transit")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeFilter === "in_transit"
                  ? "bg-[#0c4a24] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              In transit{" "}
              <span className="ml-1 px-1.5 py-0.2 bg-amber-100 text-amber-900 rounded text-[10px]">
                1
              </span>
            </button>
            <button
              onClick={() => setActiveFilter("delivered")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeFilter === "delivered"
                  ? "bg-[#0c4a24] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Delivered{" "}
              <span className="ml-1 px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded text-[10px]">
                2
              </span>
            </button>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {jobs
              .filter((j) => {
                if (activeFilter === "awaiting") return j.status === "awaiting_acceptance";
                if (activeFilter === "in_transit") return j.status === "in_transit";
                if (activeFilter === "delivered") return j.status === "delivered";
                return true;
              })
              .map((job) => (
                <div
                  key={job.id}
                  className={`rounded-2xl border p-5 space-y-4 bg-white ${
                    job.status === "in_transit"
                      ? "border-amber-200/90 shadow-xs"
                      : job.status === "delivered"
                      ? "border-emerald-200/70"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-gray-900">
                        {job.id}
                      </span>
                      {job.status === "in_transit" && (
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                          In transit
                        </span>
                      )}
                      {job.status === "delivered" && (
                        <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          Delivered
                        </span>
                      )}
                      {job.status === "awaiting_acceptance" && (
                        <span className="bg-purple-100 text-purple-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                          Awaiting acceptance
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      Order: {job.orderRef} · {job.commodity.split("—")[0]}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3 relative pl-4 border-l-2 border-emerald-600">
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Pickup</span>
                        <p className="text-xs font-black text-gray-900">{job.pickup}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Destination</span>
                        <p className="text-xs font-black text-gray-900">{job.destination}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-2xl font-black text-gray-900 block leading-none">
                        {job.quantity}
                      </span>
                      <span className="text-[11px] font-medium text-gray-400 mt-1 block">
                        {job.spec}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50/80 rounded-xl p-3.5 grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Driver</span>
                      <p className="font-bold text-gray-900 mt-0.5">{job.driver}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Scheduled pickup</span>
                      <p className="font-bold text-gray-900 mt-0.5">{job.scheduledPickup}</p>
                    </div>
                    {job.pickedUp && (
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Picked up</span>
                        <p className="font-bold text-gray-900 mt-0.5">{job.pickedUp}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase block">Est. delivery</span>
                      <p className="font-bold text-gray-900 mt-0.5">{job.estDelivery}</p>
                    </div>
                    {job.deliveredAt && (
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Delivered</span>
                        <p className="font-bold text-emerald-700 mt-0.5">{job.deliveredAt}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-gray-400 font-medium">
                      Buyer: <span className="text-gray-700 font-bold">{job.buyer}</span>
                    </span>

                    {job.status === "in_transit" && (
                      <button
                        onClick={() => {
                          setSelectedJobId(job.id);
                          setView("detail");
                        }}
                        className="bg-[#0c4a24] hover:bg-[#09381b] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                      >
                        Confirm delivery →
                      </button>
                    )}

                    {job.status === "delivered" && (
                      <button
                        onClick={() => {
                          setSelectedJobId(job.id);
                          setView("detail");
                        }}
                        className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                      >
                        View record
                      </button>
                    )}

                    {job.status === "awaiting_acceptance" && (
                      <button
                        onClick={() => {
                          setSelectedJobId(job.id);
                          setView("detail");
                        }}
                        className="bg-[#0c4a24] hover:bg-[#09381b] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                      >
                        View — accept or decline
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 2: JOB DETAIL VIEW (MOCKUP 2)
      ------------------------------------------------------------- */}
      {view === "detail" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("list")}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to jobs</span>
          </button>

          {/* Banner Header */}
          <div className="bg-[#0a381b] text-white rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">Logistics job</p>
                <h1 className="text-2xl font-black tracking-tight">{activeJob.id}</h1>
                <p className="text-xs text-emerald-200/80 font-medium">Order: {activeJob.orderRef}</p>
              </div>
              <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                • In transit
              </span>
            </div>

            {/* Stepper */}
            <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold border-t border-emerald-800/60 pt-4">
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs">✓</div>
                <span>Assigned</span>
              </div>
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs">✓</div>
                <span>Accepted</span>
              </div>
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xs">✓</div>
                <span>Picked up</span>
              </div>
              <div className="text-emerald-300 space-y-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600/40 text-emerald-200 flex items-center justify-center mx-auto text-xs">•</div>
                <span>In transit</span>
              </div>
              <div className="text-emerald-500/60 space-y-1">
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center mx-auto text-xs"></div>
                <span>Delivered</span>
              </div>
            </div>

            <div className="bg-[#114524] rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                {activeJob.quantity}
              </div>
              <div>
                <p className="text-xs font-black text-white">{activeJob.quantity}</p>
                <p className="text-[11px] text-emerald-200/80">{activeJob.commodity}</p>
              </div>
            </div>
          </div>

          {/* Responsibility Bar */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs">
            <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 font-bold">!</span>
            <div>
              <p className="font-extrabold text-amber-950">Current responsibility</p>
              <p className="font-bold text-amber-900">Logistics Partner — confirm delivery to destination</p>
              <p className="text-amber-800/80 text-[11px]">Next: Complete journey to {activeJob.destination} and confirm delivery.</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4 text-xs divide-y divide-gray-100 bg-white border border-gray-200/80 rounded-2xl p-6">
            <h3 className="font-black text-gray-400 uppercase tracking-wider text-[10px]">Order Information</h3>
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div><span className="text-gray-400 block">Order reference</span><span className="font-bold text-gray-900">{activeJob.orderRef}</span></div>
              <div><span className="text-gray-400 block">Commodity</span><span className="font-bold text-gray-900">{activeJob.commodity}</span></div>
              <div><span className="text-gray-400 block">Required quantity</span><span className="font-bold text-gray-900">{activeJob.quantity}</span></div>
              <div><span className="text-gray-400 block">Buyer</span><span className="font-bold text-gray-900">{activeJob.buyer}</span></div>
              <div><span className="text-gray-400 block">Destination</span><span className="font-bold text-gray-900">{activeJob.destination}</span></div>
            </div>
          </div>

          <div className="space-y-4 text-xs bg-white border border-gray-200/80 rounded-2xl p-6">
            <h3 className="font-black text-gray-400 uppercase tracking-wider text-[10px]">Pickup Information</h3>
            <p className="font-extrabold text-gray-900">{activeJob.pickup}</p>
            <p className="text-gray-500">{activeJob.pickupContact}</p>
            <p className="text-gray-500 bg-gray-50 p-3 rounded-xl border">{activeJob.instructions}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setView("confirm")}
              className="w-full sm:w-auto bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3.5 rounded-xl text-xs"
            >
              Confirm delivery +
            </button>
            <button
              onClick={() => setView("issue")}
              className="w-full sm:w-auto bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold px-5 py-3.5 rounded-xl text-xs"
            >
              Report issue
            </button>
            <button
              onClick={() => setView("passport")}
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-xs inline-flex items-center justify-center gap-1.5"
            >
              <FiFileText className="w-4 h-4" />
              <span>View Order Passport</span>
            </button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 3: CONFIRM DELIVERY FORM (MOCKUP 3)
      ------------------------------------------------------------- */}
      {view === "confirm" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("detail")}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="bg-[#0a381b] text-white rounded-2xl p-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Delivery Confirmation</span>
            <h1 className="text-xl font-black">{activeJob.id} — Confirm delivery</h1>
          </div>

          <form onSubmit={handleConfirmDeliverySubmit} className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-5 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">Quantity delivered (MT)</label>
                <input
                  type="number"
                  value={deliveredQty}
                  onChange={(e) => setDeliveredQty(e.target.value)}
                  className="w-full p-3 border rounded-xl"
                  required
                />
                <span className="text-[10px] text-gray-400">Picked up: {activeJob.quantity}</span>
              </div>
              <div className="space-y-1.5">
                <label className="block font-bold text-gray-700">Delivery date/time</label>
                <input
                  type="datetime-local"
                  value={deliveryDatetime}
                  onChange={(e) => setDeliveryDatetime(e.target.value)}
                  className="w-full p-3 border rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Recipient name / confirmation</label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. John Adeyemi — Warehouse Manager"
                className="w-full p-3 border rounded-xl"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Delivery slip reference (optional)</label>
              <input
                type="text"
                value={deliverySlipRef}
                onChange={(e) => setDeliverySlipRef(e.target.value)}
                placeholder="e.g. DS-2024-1105-001"
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Delivery notes</label>
              <textarea
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                placeholder="e.g. Delivery complete. All bags received and signed off by warehouse manager."
                rows={3}
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="bg-[#0c4a24] hover:bg-[#09381b] text-white font-bold px-6 py-3.5 rounded-xl text-xs"
              >
                Confirm delivery — {deliveredQty} MT
              </button>
              <button
                type="button"
                onClick={() => setView("issue")}
                className="bg-white border border-red-200 text-red-600 font-bold px-5 py-3.5 rounded-xl text-xs"
              >
                Report issue instead
              </button>
            </div>
          </form>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 4: SUCCESS CONFIRMATION (MOCKUP 4)
      ------------------------------------------------------------- */}
      {view === "success" && (
        <div className="space-y-6">
          <div className="bg-[#0a381b] text-white rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Delivery Confirmed</span>
              <h1 className="text-xl font-black">DELIVERED</h1>
              <p className="text-xs text-emerald-200/80 mt-1">
                {activeJob.id} delivery confirmed. The cargo has reached its destination and the record has been updated.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-3 text-xs divide-y divide-gray-100">
            <h3 className="font-extrabold text-gray-400 uppercase text-[10px]">Delivery Record</h3>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Job reference</span>
              <span className="font-bold text-gray-900">{activeJob.id}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Order</span>
              <span className="font-bold text-gray-900">{activeJob.orderRef}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Status</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold text-[10px]">
                • Delivered
              </span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Delivered to</span>
              <span className="font-bold text-gray-900">{activeJob.destination}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Quantity delivered</span>
              <span className="font-bold text-gray-900">{deliveredQty} MT Cocoa</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="text-gray-400">Driver</span>
              <span className="font-bold text-gray-900">{activeJob.driver}</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900">
            <span className="font-bold">What happens next:</span> The Order Passport will reflect delivery completion. Settlement process may be initiated through the licensed payment provider — this is a separate stage.
          </div>

          <button
            onClick={() => setView("list")}
            className="bg-[#0c4a24] text-white font-bold px-6 py-3 rounded-xl text-xs"
          >
            Back to jobs
          </button>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 5: REPORT ISSUE / EXCEPTION (MOCKUP 5)
      ------------------------------------------------------------- */}
      {view === "issue" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("detail")}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="bg-[#7f1d1d] text-white rounded-2xl p-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-200">Exception Report</span>
            <h1 className="text-xl font-black">{activeJob.id} — Report issue</h1>
          </div>

          <div className="bg-red-50 border border-red-200 text-red-900 p-4 rounded-xl text-xs font-semibold">
            Important: Only use this form to record a genuine operational exception. HarvestLink operations will be notified immediately.
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-5 text-xs">
            <div className="space-y-2">
              <label className="block font-bold text-gray-700">Issue type</label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Quantity discrepancy",
                  "Damaged cargo",
                  "Destination issue",
                  "Recipient unavailable",
                  "Vehicle breakdown",
                  "Delay",
                  "Other",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setIssueType(type)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                      issueType === type
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Description</label>
              <textarea
                value={issueDesc}
                onChange={(e) => setIssueDesc(e.target.value)}
                placeholder="Describe the issue clearly and factually."
                rows={4}
                className="w-full p-3 border rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-bold text-gray-700">Affected quantity (MT) — if applicable</label>
              <input
                type="text"
                value={affectedQty}
                onChange={(e) => setAffectedQty(e.target.value)}
                placeholder="e.g. 2.5"
                className="w-full p-3 border rounded-xl max-w-xs"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setView("detail")}
                className="bg-[#7f1d1d] hover:bg-red-900 text-white font-bold px-6 py-3.5 rounded-xl text-xs"
              >
                Submit exception report
              </button>
              <button
                onClick={() => setView("detail")}
                className="bg-gray-100 text-gray-700 font-bold px-5 py-3.5 rounded-xl text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 6: ORDER PASSPORT (MOCKUP 6)
      ------------------------------------------------------------- */}
      {view === "passport" && (
        <div className="space-y-6">
          <button
            onClick={() => setView("detail")}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-semibold"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="bg-[#0a381b] text-white rounded-2xl p-6 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Order Passport</span>
              <h1 className="text-xl font-black">{activeJob.orderRef}</h1>
              <p className="text-xs text-emerald-200/80">Agrofresh Processors Ltd · Cocoa Grade 1</p>
            </div>
            <button
              onClick={() => setView("payment-detail")}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 inline-flex items-center gap-1.5"
            >
              <FiCreditCard className="w-3.5 h-3.5" />
              <span>Payments</span>
            </button>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 text-xs">
            <h3 className="font-extrabold text-gray-400 uppercase text-[10px]">Supply Chain Progress</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-50 p-3 rounded-xl"><span className="text-gray-400 block text-[10px]">Demand</span><span className="font-extrabold text-gray-900">40 MT</span></div>
              <div className="bg-gray-50 p-3 rounded-xl"><span className="text-gray-400 block text-[10px]">Committed</span><span className="font-extrabold text-gray-900">40 MT</span></div>
              <div className="bg-gray-50 p-3 rounded-xl"><span className="text-gray-400 block text-[10px]">Received</span><span className="font-extrabold text-emerald-700">35.2 MT</span></div>
              <div className="bg-gray-50 p-3 rounded-xl"><span className="text-gray-400 block text-[10px]">Verified</span><span className="font-extrabold text-emerald-700">35.2 MT</span></div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          VIEW 7: PAYMENT DETAIL PLACEHOLDER (MOCKUP 7)
      ------------------------------------------------------------- */}
      {view === "payment-detail" && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-3 p-8 bg-white border border-gray-200/80 rounded-2xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
            <FiCreditCard />
          </div>
          <h2 className="text-lg font-black text-gray-900">payment-detail</h2>
          <p className="text-xs text-gray-500 max-w-sm">This view is coming soon.</p>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full">
            Coming in next batch.
          </span>
          <div className="pt-4">
            <button
              onClick={() => setView("detail")}
              className="text-xs font-bold text-gray-600 hover:text-gray-900 underline"
            >
              Back to job details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}