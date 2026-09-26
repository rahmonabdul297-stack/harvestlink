"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiCheck, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function CreateDemandWizardPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    commodity: "Cocoa",
    quantity: "4 bags",
    grade: "Grade 1 — Fermented & Dried",
    additionalSpec: "",
    originState: "Ondo State",
    locality: "Ile-Oluji, Ondo State",
    hub: "Ondo State Aggregation Hub — Akure",
    destination: "Apapa Export Terminal, Lagos",
    deliveryDate: "25 September 2026",
  });

  const commodities = [
    {
      id: "Cocoa",
      title: "Cocoa",
      region: "West Africa",
      tags: ["Grade 1", "Grade 2", "Fermented", "Dried"],
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "Cashew",
      title: "Raw Cashew Nut",
      region: "Nigeria | West Africa",
      tags: ["Grade A", "Grade B", "Export grade", "Local grade"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwPXO7DXJvwLTq1ODEUXL3Rv8y3v2_pxDOfgBxfhiCA&s=10",
    },
    {
      id: "Sesame",
      title: "Sesame Seed",
      region: "Benue | Nigeria",
      tags: ["White", "Mixed", "Natural", "Cleaned"],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const steps = [
    { num: 1, label: "Commodity" },
    { num: 2, label: "Quality" },
    { num: 3, label: "Origin" },
    { num: 4, label: "Delivery" },
    { num: 5, label: "Review" },
  ];

  return (
    <div className="max-w-4xl mx-auto font-sans text-gray-900 py-6 px-4 space-y-6">
      {/* Top Header */}
      {currentStep <= 5 && (
        <div className="space-y-2">
          <Link
            href="/dashboard/buyer"
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors font-medium"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to dashboard</span>
          </Link>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Create sourcing demand
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            Define your commercial sourcing requirement. HarvestLink will identify and coordinate eligible supply for your review.
          </p>
        </div>
      )}

      {/* STEP PROGRESS BAR */}
      {currentStep <= 5 && (
        <div className="grid grid-cols-5 gap-2 bg-white border border-gray-200/80 rounded-2xl p-1.5 shadow-xs">
          {steps.map((st) => {
            const isCompleted = currentStep > st.num;
            const isCurrent = currentStep === st.num;

            return (
              <button
                key={st.num}
                onClick={() => isCompleted && setCurrentStep(st.num)}
                className={`py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isCurrent
                    ? "bg-[#14532d] text-white shadow-xs"
                    : isCompleted
                    ? "bg-emerald-100/70 text-emerald-900 hover:bg-emerald-200/70"
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-extrabold ${
                    isCurrent
                      ? "bg-emerald-800 text-white"
                      : isCompleted
                      ? "bg-emerald-700 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isCompleted ? <BiCheck className="w-3 h-3" /> : st.num}
                </span>
                <span className="hidden sm:inline">{st.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* STEP 1: COMMODITY & QUANTITY */}
      {currentStep === 1 && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs max-w-xl">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">What do you need?</h2>
            <p className="text-xs text-gray-500">
              Select the commodity and specify the total quantity required.
            </p>
          </div>

          {/* Commodity Cards */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700">Commodity</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {commodities.map((item) => {
                const isSelected = formData.commodity === item.title;
                return (
                  <div
                    key={item.id}
                    onClick={() => setFormData({ ...formData, commodity: item.title })}
                    className={`border rounded-2xl p-3 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "border-[#14532d] ring-2 ring-[#14532d]/20 bg-emerald-50/20"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-24 object-cover rounded-xl mb-2"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-gray-900">{item.title}</h4>
                      <p className="text-[10px] text-gray-400 mb-2">{item.region}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tg, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] bg-emerald-50 text-emerald-800 border border-emerald-100 px-1.5 py-0.5 rounded-md"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Required Quantity Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">Required quantity</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 50"
                className="flex-1 px-4 py-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
              />
              <div className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-500">
                MT (KG)
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <Link
              href="/dashboard/buyer"
              className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-900"
            >
              Cancel
            </Link>
            <button
              onClick={() => setCurrentStep(2)}
              className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: QUALITY & SPECIFICATION */}
      {currentStep === 2 && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs max-w-xl">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">Quality & specification</h2>
            <p className="text-xs text-gray-500">
              Specify the quality grade. Suppliers will be matched against this requirement.
            </p>
          </div>

          {/* Grade Selector */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-gray-700">Grade</label>
            {[
              "Grade 1 — Fermented & Dried",
              "Grade 2 — Sun Dried",
              "Grade 3 — Fair Average Quality",
            ].map((g) => (
              <label
                key={g}
                className={`flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer text-xs font-bold transition-all ${
                  formData.grade === g
                    ? "bg-emerald-50/60 border-emerald-600 text-emerald-950"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="grade"
                  checked={formData.grade === g}
                  onChange={() => setFormData({ ...formData, grade: g })}
                  className="accent-[#14532d]"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>

          {/* Additional Spec */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700">
              Additional specification <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={formData.additionalSpec}
              onChange={(e) => setFormData({ ...formData, additionalSpec: e.target.value })}
              placeholder="e.g. Moisture content below 8%, screen size minimum 6.5 mm, foreign matter below 0.5%"
              rows={3}
              className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
            />
            <p className="text-[10px] text-gray-400 leading-normal">
              Include any export standards, processor-specific requirements or certifications needed. This is your stated requirement — supply quality will be separately verified at the aggregation point.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 border border-gray-200 rounded-xl"
            >
              Back
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                Save draft
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-6 py-2 rounded-xl text-xs transition-colors shadow-xs"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: PREFERRED ORIGIN */}
      {currentStep === 3 && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs max-w-xl">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">Preferred origin</h2>
            <p className="text-xs text-gray-500">
              Specify where you prefer the supply to come from. This guides supplier matching.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-700">Preferred state of origin</label>
              <select
                value={formData.originState}
                onChange={(e) => setFormData({ ...formData, originState: e.target.value })}
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
              >
                <option value="Ondo State">Ondo State</option>
                <option value="Cross River State">Cross River State</option>
                <option value="Osun State">Osun State</option>
                <option value="Benue State">Benue State</option>
              </select>
              <p className="text-[10px] text-gray-400">
                Suppliers in this state or adjoining areas will be prioritized during matching. HarvestLink does not guarantee supply availability in any specific area.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-700">
                Preferred local area or locality <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                placeholder="e.g. Ile-Oluji, Ondo State"
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
              />
              <p className="text-[10px] text-gray-400">
                If you have a specific sourcing area preference, enter it here. This is optional and will be noted alongside the state preference.
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-3.5 text-[11px] text-emerald-950 leading-relaxed">
              <strong>Note:</strong> Preferred origin is a sourcing preference, not a guaranteed supply commitment. HarvestLink will match your demand with verified suppliers in or near your preferred area based on available supply.
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 border border-gray-200 rounded-xl"
            >
              Back
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                Save draft
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-6 py-2 rounded-xl text-xs transition-colors shadow-xs"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: REVIEW DEMAND */}
      {currentStep === 4 && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs max-w-xl">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">Review demand</h2>
            <p className="text-xs text-gray-500">
              Check all details before submitting. You can go back to edit any section.
            </p>
          </div>

          {/* Details Table */}
          <div className="border border-gray-200/80 rounded-xl overflow-hidden text-xs divide-y divide-gray-100">
            <div className="p-3 flex justify-between bg-gray-50/50">
              <span className="text-gray-500 font-medium">Commodity</span>
              <span className="font-extrabold text-gray-900">{formData.commodity}</span>
            </div>
            <div className="p-3 flex justify-between bg-white">
              <span className="text-gray-500 font-medium">Required quantity</span>
              <span className="font-extrabold text-gray-900">{formData.quantity}</span>
            </div>
            <div className="p-3 flex justify-between bg-gray-50/50">
              <span className="text-gray-500 font-medium">Grade</span>
              <span className="font-extrabold text-gray-900">{formData.grade}</span>
            </div>
            <div className="p-3 flex justify-between bg-white">
              <span className="text-gray-500 font-medium">Additional specification</span>
              <span className="font-extrabold text-gray-900">{formData.additionalSpec || "—"}</span>
            </div>
            <div className="p-3 flex justify-between bg-gray-50/50">
              <span className="text-gray-500 font-medium">Preferred origin</span>
              <span className="font-extrabold text-gray-900">{formData.originState}</span>
            </div>
            <div className="p-3 flex justify-between bg-white">
              <span className="text-gray-500 font-medium">Aggregation hub</span>
              <span className="font-extrabold text-gray-900">{formData.hub}</span>
            </div>
            <div className="p-3 flex justify-between bg-gray-50/50">
              <span className="text-gray-500 font-medium">Destination</span>
              <span className="font-extrabold text-gray-900">{formData.destination}</span>
            </div>
            <div className="p-3 flex justify-between bg-white">
              <span className="text-gray-500 font-medium">Required delivery date</span>
              <span className="font-extrabold text-gray-900">{formData.deliveryDate}</span>
            </div>
          </div>

          {/* Edit Shortcuts */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Edit commodity & quantity
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Edit quality
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Edit origin
            </button>
          </div>

          {/* Notice Callout */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 leading-relaxed">
            After submission, your demand enters <strong className="font-bold">Matching</strong> status. HarvestLink will identify eligible suppliers and prepare a recommended match for your review. No supply will be committed without your approval.
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep(3)}
              className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 border border-gray-200 rounded-xl"
            >
              Back
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                Save draft
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-6 py-2 rounded-xl text-xs transition-colors shadow-xs"
              >
                Submit demand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: SUBMISSION SUCCESS CONFIRMATION */}
      {currentStep === 6 && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs max-w-xl">
          {/* Green Check Icon Header */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
              <BiCheck />
            </div>
            <h2 className="text-2xl font-black text-gray-900">
              Sourcing demand submitted
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your request has been received. HarvestLink will now begin identifying eligible suppliers within the preferred origin corridor.
            </p>
          </div>

          {/* Submitted Demand Summary Box */}
          <div className="border border-emerald-800/30 rounded-2xl overflow-hidden">
            <div className="bg-[#14532d] text-white p-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-emerald-200 font-bold uppercase">
                  DEMAND REFERENCE
                </p>
                <p className="text-base font-black">HL-REQ-2524</p>
              </div>
              <span className="bg-white text-purple-900 text-[10px] font-black px-2.5 py-1 rounded-md">
                • Matching
              </span>
            </div>

            <div className="p-4 space-y-2.5 text-xs bg-white divide-y divide-gray-100">
              <div className="flex justify-between pt-1">
                <span className="text-gray-500">Commodity</span>
                <span className="font-extrabold text-gray-900">{formData.commodity}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Quantity</span>
                <span className="font-extrabold text-gray-900">{formData.quantity}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Grade</span>
                <span className="font-extrabold text-gray-900">{formData.grade}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Preferred origin</span>
                <span className="font-extrabold text-gray-900">{formData.originState}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Destination</span>
                <span className="font-extrabold text-gray-900">{formData.destination}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Required delivery date</span>
                <span className="font-extrabold text-gray-900">{formData.deliveryDate}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-500">Submitted</span>
                <span className="font-extrabold text-gray-900">{formData.deliveryDate}</span>
              </div>
            </div>
          </div>

          {/* What Happens Next Card */}
          <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-5 space-y-3 text-xs">
            <h4 className="font-bold text-gray-900">What happens next</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span>HarvestLink reviews your demand and identifies eligible suppliers within the preferred origin corridor.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span>A recommended supply match will be assembled for your review.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <span>You will be able to review, approve or adjust the proposed match before any supply is committed.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  4
                </span>
                <span>No supply has been committed or guaranteed at this stage.</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/dashboard/buyer/order-passport"
              className="w-full sm:w-auto bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Review Smart Order Assembly</span>
              <BiRightArrowAlt className="w-4 h-4" />
            </Link>

            <Link
              href="/dashboard/buyer"
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold px-5 py-2.5 rounded-xl text-xs text-center transition-colors"
            >
              Back to dashboard
            </Link>

            <button
              onClick={() => setCurrentStep(1)}
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold px-5 py-2.5 rounded-xl text-xs text-center transition-colors"
            >
              Create another demand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}