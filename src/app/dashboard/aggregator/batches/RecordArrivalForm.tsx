"use client";

import React, { useState } from "react";
import { BatchItem } from "./page";
import { BiLeftArrowAlt } from "react-icons/bi";

interface RecordArrivalFormProps {
  batch: BatchItem;
  onBack: () => void;
  onSuccess: (receivedAmount: number) => void;
}

export default function RecordArrivalForm({
  batch,
  onBack,
  onSuccess,
}: RecordArrivalFormProps) {
  const [receivedQty, setReceivedQty] = useState<number>(15);
  const [vehicleRef, setVehicleRef] = useState<string>("BEN 117 MVX");
  const [driverName, setDriverName] = useState<string>("Danlami Usman");
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(receivedQty);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 font-semibold"
      >
        <BiLeftArrowAlt className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Record batch arrival — {batch.id}
        </h1>
        <p className="text-xs text-gray-500 font-medium">
          {batch.supplier} · {batch.commodity} · {batch.spec}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">
            Committed quantity: {batch.committedQty}
          </span>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Enter the actual weighed quantity that arrived. The system will calculate the variance against the committed amount.
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-700">
            Received quantity (MT) <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={receivedQty}
              onChange={(e) => setReceivedQty(Number(e.target.value))}
              required
              className="w-32 p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
            />
            <span className="text-xs font-bold text-gray-600">MT</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">Vehicle reference</label>
            <input
              type="text"
              value={vehicleRef}
              onChange={(e) => setVehicleRef(e.target.value)}
              placeholder="e.g. BEN 117 MVX"
              className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">Driver name</label>
            <input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              placeholder="e.g. Danlami Usman"
              className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-700">Arrival notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any notes about the arrival condition — e.g. minor spillage noted, bags intact, delivery was late."
            rows={3}
            className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4022]"
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-[#0f4022] hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors shadow-xs"
          >
            Record arrival — {receivedQty} MT →
          </button>
          <button
            type="button"
            onClick={onBack}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold px-4 py-3 rounded-xl text-xs"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}