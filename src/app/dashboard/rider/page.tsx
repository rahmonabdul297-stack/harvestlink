"use client";

import React, { useState } from "react";
import {
  BiMapPin,
  BiCheckCircle,
  BiTimeFive,
  BiPackage,
  BiNavigation,
} from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";

interface IShipment {
  id: string;
  orderPassportId: string;
  commodity: string;
  weightKg: number;
  pickupLocation: string;
  deliveryLocation: string;
  buyerName: string;
  status: "ASSIGNED" | "IN_TRANSIT" | "DELIVERED";
  estimatedFare: number;
}

export default function RiderPortalPage() {
  const [shipments, setShipments] = useState<IShipment[]>([
    {
      id: "SHP-801",
      orderPassportId: "PASS-2026-901",
      commodity: "Sesame (Grade A)",
      weightKg: 5000,
      pickupLocation: "Makarfi Aggregation Hub, Kaduna",
      deliveryLocation: "Kano Commercial Grain Silo, Kano",
      buyerName: "AgroExport Nigeria Ltd",
      status: "IN_TRANSIT",
      estimatedFare: 185000,
    },
    {
      id: "SHP-802",
      orderPassportId: "PASS-2026-902",
      commodity: "Maize (Grade B)",
      weightKg: 8000,
      pickupLocation: "Zaria Processing Hub, Kaduna",
      deliveryLocation: "Apapa Export Terminal, Lagos",
      buyerName: "Northern Millers Enterprise",
      status: "ASSIGNED",
      estimatedFare: 420000,
    },
  ]);

  const updateStatus = (id: string, newStatus: "IN_TRANSIT" | "DELIVERED") => {
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Header Banner */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-emerald-950 uppercase tracking-tight">
          Rider & Logistics Dispatch Portal
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Coordinate produce collection from rural aggregation points to final commercial buyers.
        </p>
      </div>

      {/* Driver Status Card */}
      <div className="mb-8 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-700/60 rounded-xl flex items-center justify-center text-white shrink-0">
            <FaTruckMoving  className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Vehicle Status: Active Dispatch</h2>
            <p className="text-xs text-emerald-200 mt-0.5">
              Driver: Ibrahim Musa • Vehicle: Heavy Duty Haulage Truck (Plate: KAD-492-XY)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-emerald-950/40 px-4 py-2.5 rounded-xl border border-emerald-700/50">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-emerald-100">
            GPS Live Location Tracking
          </span>
        </div>
      </div>

      {/* Shipment Routes List */}
      <div className="space-y-4">
        <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
          <BiPackage className="w-5 h-5 text-emerald-700" />
          <span>Assigned Haulage Orders ({shipments.length})</span>
        </h2>

        <div className="space-y-4">
          {shipments.map((shipment) => (
            <div
              key={shipment.id}
              className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-4"
            >
              {/* Top Row Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-md">
                    {shipment.id}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    Order Passport: {shipment.orderPassportId}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-700">
                    Est. Fare: ₦{shipment.estimatedFare.toLocaleString()}
                  </span>
                  {shipment.status === "ASSIGNED" && (
                    <span className="flex items-center gap-1 text-[11px] bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-full">
                      <BiTimeFive className="w-3.5 h-3.5" /> Ready for Pickup
                    </span>
                  )}
                  {shipment.status === "IN_TRANSIT" && (
                    <span className="flex items-center gap-1 text-[11px] bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded-full">
                      <BiNavigation className="w-3.5 h-3.5" /> In Transit
                    </span>
                  )}
                  {shipment.status === "DELIVERED" && (
                    <span className="flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-900 font-bold px-2.5 py-0.5 rounded-full">
                      <BiCheckCircle className="w-3.5 h-3.5" /> Delivered
                    </span>
                  )}
                </div>
              </div>

              {/* Route Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Pickup Location */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-3">
                  <BiMapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-500 uppercase text-[10px]">
                      Pickup Point (Aggregation)
                    </p>
                    <p className="font-bold text-gray-900 text-sm mt-0.5">
                      {shipment.pickupLocation}
                    </p>
                    <p className="text-gray-500 mt-1">
                      Cargo: {shipment.commodity} • {shipment.weightKg.toLocaleString()} kg
                    </p>
                  </div>
                </div>

                {/* Delivery Location */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-3">
                  <BiMapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-500 uppercase text-[10px]">
                      Delivery Destination
                    </p>
                    <p className="font-bold text-gray-900 text-sm mt-0.5">
                      {shipment.deliveryLocation}
                    </p>
                    <p className="text-gray-500 mt-1">
                      Recipient: {shipment.buyerName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {shipment.status === "ASSIGNED" && (
                  <button
                    onClick={() => updateStatus(shipment.id, "IN_TRANSIT")}
                    className="bg-[#14532d] hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <BiNavigation className="w-4 h-4" />
                    <span>Start Transport Journey</span>
                  </button>
                )}

                {shipment.status === "IN_TRANSIT" && (
                  <button
                    onClick={() => updateStatus(shipment.id, "DELIVERED")}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <BiCheckCircle className="w-4 h-4" />
                    <span>Confirm Order Delivery</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}