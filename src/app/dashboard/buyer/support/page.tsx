"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BiSearch,
  BiPlus,
  BiCheck,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiErrorAlt,
  BiFile,
  BiTimeFive,
} from "react-icons/bi";

export default function BuyerSupportPage() {
  const [activeTab, setActiveTab] = useState<"help" | "my-issues" | "report" | "exception-detail">("help");
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [reportForm, setReportForm] = useState({
    type: "Order quantity shortfall",
    order: "",
    description: "",
  });

  const faqs = [
    {
      q: "How does Smart Order Assembly work?",
      a: "Smart Order Assembly uses matching criteria to evaluate commodity specs, required delivery windows, origin corridors, and supplier verification status to aggregate smaller smallholder batches into a single commercial order.",
    },
    {
      q: "What does 'Supply Committed' mean?",
      a: "Supply Committed indicates that a farmer or cooperative has formally agreed to provide a specified quantity towards your sourcing demand.",
    },
    {
      q: "What does 'Batch Verified' mean?",
      a: "Batch Verified means the physical commodity was received at the aggregation hub, weighed, and passed moisture/quality checks by a HarvestLink agent.",
    },
    {
      q: "Why is an order not fully fulfilled?",
      a: "An order may show partial fulfillment if local aggregation is still ongoing or if a specific farmer batch is delayed or flagged during physical inspection.",
    },
    {
      q: "What happens when a batch is flagged?",
      a: "Flagged batches enter the exception queue. HarvestLink operations evaluates the variance (e.g., moisture or grade shortfall) and arranges replacement supply or price adjustments before settlement.",
    },
    {
      q: "Why is settlement pending?",
      a: "Settlement remains pending until final physical delivery is confirmed by the buyer or until any open order exceptions are resolved.",
    },
    {
      q: "What does the Order Passport show?",
      a: "The Order Passport provides an immutable audit trail from initial buyer demand, through farmer batch aggregation, verification weighing slips, logistics dispatch, to final escrow settlement.",
    },
    {
      q: "How are prices determined?",
      a: "Prices are aligned with transparent market benchmark corridors based on commodity grade, location, and aggregation processing requirements.",
    },
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIssueSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {/* Top Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Support</h1>
        <p className="text-xs text-gray-500 font-medium">
          Help topics, active issues and issue reporting for your orders.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200/80 text-xs font-bold gap-6">
        <button
          onClick={() => {
            setActiveTab("help");
            setIssueSubmitted(false);
          }}
          className={`pb-3 transition-colors ${
            activeTab === "help"
              ? "border-b-2 border-[#14532d] text-[#14532d]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Help
        </button>

        <button
          onClick={() => {
            setActiveTab("my-issues");
            setIssueSubmitted(false);
          }}
          className={`pb-3 transition-colors ${
            activeTab === "my-issues"
              ? "border-b-2 border-[#14532d] text-[#14532d]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          My issues (2)
        </button>

        <button
          onClick={() => {
            setActiveTab("report");
            setIssueSubmitted(false);
          }}
          className={`pb-3 transition-colors ${
            activeTab === "report"
              ? "border-b-2 border-[#14532d] text-[#14532d]"
              : "text-gray-400 hover:text-gray-700"
          }`}
        >
          Report an issue
        </button>
      </div>

      {/* TAB 1: HELP & COMMON QUESTIONS */}
      {activeTab === "help" && (
        <div className="space-y-6">
          {/* Search Box */}
          <div className="relative">
            <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search help topics..."
              className="w-full pl-11 pr-4 py-3 text-xs bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
            />
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-bold">
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
              Orders & Supply
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
              Aggregation
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
              Delivery
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
              Payments & Settlement
            </span>
            <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-gray-200">
              Getting started
            </span>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3 pt-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              COMMON QUESTIONS
            </p>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-gray-800 hover:text-emerald-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#14532d] text-base font-bold">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-gray-500 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div
              onClick={() => setActiveTab("my-issues")}
              className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 cursor-pointer hover:bg-emerald-100/50 transition-colors space-y-1"
            >
              <h4 className="font-bold text-xs text-emerald-950">View my issues</h4>
              <p className="text-[11px] text-emerald-800">Active and resolved issues</p>
            </div>

            <div
              onClick={() => setActiveTab("report")}
              className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 cursor-pointer hover:bg-emerald-100/50 transition-colors space-y-1"
            >
              <h4 className="font-bold text-xs text-emerald-950">Report an issue</h4>
              <p className="text-[11px] text-emerald-800">Supply, delivery, payment</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MY ISSUES LIST */}
      {activeTab === "my-issues" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
              OPEN — 2
            </p>

            {/* Issue Card 1 */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xs text-gray-900">HL-EXC-0041</span>
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Action required
                  </span>
                  <span className="text-red-700 font-mono text-[10px] font-bold">HIGH</span>
                </div>

                <button
                  onClick={() => setActiveTab("exception-detail")}
                  className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs inline-flex items-center gap-1 transition-colors shadow-xs"
                >
                  <span>View issue</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="font-extrabold text-sm text-gray-900">
                  Supply delay — batch not received
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  Batch BAT-003 from Chukwuemeka Farms (15 MT Cocoa Grade 1, committed) has not been received at the Ondo State Aggregation...
                </p>
              </div>

              <p className="text-[10px] text-gray-400">
                Order: <strong className="text-gray-700">HL-2024-CCO-0041</strong> · Next action: Contact Chukwuemeka Farms to confirm supply status. Determine whether the 15 MT committed batch will be delivered or must be sourced from an alternative supplier to meet the buyer requirement.
              </p>
            </div>

            {/* Issue Card 2 */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-black text-xs text-gray-900">HL-EXC-0039</span>
                  <span className="bg-blue-100 text-blue-900 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    • Under review
                  </span>
                  <span className="text-amber-700 font-mono text-[10px] font-bold">MEDIUM</span>
                </div>

                <button
                  onClick={() => setActiveTab("exception-detail")}
                  className="bg-[#14532d] hover:bg-emerald-800 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs inline-flex items-center gap-1 transition-colors shadow-xs"
                >
                  <span>View issue</span>
                  <BiRightArrowAlt className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="font-extrabold text-sm text-gray-900">Logistics delay</h3>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                  Logistics job HL-LGS-0041 has been in transit for longer than estimated delivery window. Expected delivery was 16 Oct 20...
                </p>
              </div>

              <p className="text-[10px] text-gray-400">
                Order: <strong className="text-gray-700">HL-2024-CCO-0038</strong> · Next action: Contact logistics partner Emeka Nwosu to confirm delivery status. Update order status once confirmed.
              </p>
            </div>
          </div>

          {/* Resolved Section */}
          <div className="space-y-3 pt-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              RESOLVED — 1
            </p>

            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-700">HL-EXC-0037</span>
                <span>Settlement issue</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <BiCheck /> Resolved
                </span>
              </div>
              <span className="font-mono text-[10px] text-gray-400">HL-2024-CSW-0028</span>
            </div>
          </div>

          <button
            onClick={() => setActiveTab("report")}
            className="border border-[#14532d] text-[#14532d] hover:bg-emerald-50 font-bold px-4 py-2 rounded-xl text-xs inline-flex items-center gap-1.5 transition-colors"
          >
            <BiPlus className="w-4 h-4" />
            <span>Report a new issue</span>
          </button>
        </div>
      )}

      {/* TAB 3: REPORT AN ISSUE FORM */}
      {activeTab === "report" && (
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs max-w-2xl">
          {!issueSubmitted ? (
            <form onSubmit={handleReportSubmit} className="space-y-5">
              <div className="space-y-1">
                <h2 className="text-lg font-extrabold text-gray-900">Report an issue</h2>
                <p className="text-xs text-gray-500">
                  Connect your issue to an existing order so HarvestLink operations can review the full context.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">
                  Issue type <span className="text-red-500">*</span>
                </label>
                <select
                  value={reportForm.type}
                  onChange={(e) => setReportForm({ ...reportForm, type: e.target.value })}
                  className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                >
                  <option value="Order quantity shortfall">Order quantity shortfall</option>
                  <option value="Quality discrepancy">Quality discrepancy</option>
                  <option value="Logistics delay">Logistics delay</option>
                  <option value="Payment / Escrow dispute">Payment / Escrow dispute</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">
                  Related order <span className="text-red-500">*</span>
                </label>
                <select
                  value={reportForm.order}
                  onChange={(e) => setReportForm({ ...reportForm, order: e.target.value })}
                  required
                  className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                >
                  <option value="">Select an order...</option>
                  <option value="HL-2024-CCO-0041">HL-2024-CCO-0041 (Cocoa · 80 MT)</option>
                  <option value="HL-2024-CSW-0028">HL-2024-CSW-0028 (Cashew · 50 MT)</option>
                  <option value="HL-2024-CCO-0038">HL-2024-CCO-0038 (Cocoa · 40 MT)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">
                  Describe the issue <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={reportForm.description}
                  onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })}
                  placeholder="For example: The verified quantity on ORD-001 is 10 MT below the contracted amount. I need clarification before approving settlement."
                  rows={4}
                  required
                  className="w-full p-3.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d]"
                />
              </div>

              <div className="bg-[#fffdf0] border border-amber-300/80 rounded-xl p-3.5 text-[11px] text-amber-900 leading-relaxed">
                If this issue involves a settlement, it may be flagged as settlement-blocking until resolved by HarvestLink operations. HarvestLink is not a bank or payment provider — settlement is processed via a licensed payment provider.
              </div>

              <button
                type="submit"
                className="w-full bg-[#14532d] hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
              >
                Submit issue
              </button>
            </form>
          ) : (
            /* SUBMITTED SUCCESS CARD */
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-8 text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#14532d] text-white flex items-center justify-center text-xl font-bold mx-auto">
                <BiCheck />
              </div>
              <h2 className="text-xl font-black text-gray-900">Issue submitted</h2>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Your issue has been received by HarvestLink support.
              </p>

              <div className="inline-block bg-white border border-gray-200 rounded-xl p-3.5 px-6 shadow-2xs">
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Support reference
                </p>
                <p className="text-base font-black text-gray-900 mt-0.5">
                  HL-SUP-2111
                </p>
              </div>

              <p className="text-[10px] text-gray-400 max-w-md mx-auto">
                A HarvestLink operations team member will review and follow up. This is a prototype interaction — no real ticket has been created.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
                <button
                  onClick={() => {
                    setActiveTab("my-issues");
                    setIssueSubmitted(false);
                  }}
                  className="bg-[#14532d] text-white font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-emerald-800 transition-colors"
                >
                  View my issues
                </button>
                <button
                  onClick={() => setIssueSubmitted(false)}
                  className="bg-white border border-gray-200 text-gray-800 font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-gray-50 transition-colors"
                >
                  Report another
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: EXCEPTION DETAIL VIEW */}
      {activeTab === "exception-detail" && (
        <div className="space-y-6">
          <button
            onClick={() => setActiveTab("my-issues")}
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors font-semibold"
          >
            <BiLeftArrowAlt className="w-4 h-4" />
            <span>Back to support</span>
          </button>

          {/* Banner */}
          <div className="bg-[#14532d] text-white rounded-2xl p-6 space-y-3 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase text-emerald-200 tracking-wider">
                EXCEPTION DETAIL
              </span>
            </div>
            <h1 className="text-xl font-black">HL-EXC-0039</h1>
            <p className="text-xs font-bold text-emerald-100">Logistics delay</p>
            <div className="flex items-center gap-2 pt-1">
              <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-amber-400/30">
                Medium
              </span>
              <span className="bg-blue-500/20 text-blue-200 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-blue-400/30">
                Under review
              </span>
              <span className="text-[10px] text-emerald-200/70">
                Order: HL-2024-CCO-0038
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="bg-[#14532d] text-white font-bold px-4 py-2 rounded-xl text-xs">
              Provide clarification
            </button>
            <Link
              href="/buyer/order-passport"
              className="bg-white border border-gray-200 text-gray-800 font-bold px-4 py-2 rounded-xl text-xs hover:bg-gray-50"
            >
              View Order Passport →
            </Link>
          </div>

          {/* Issue Section */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
              ISSUE
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs divide-y sm:divide-y-0 divide-gray-100">
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Exception ID</span>
                <p className="font-extrabold text-gray-900 mt-0.5">HL-EXC-0039</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Order</span>
                <p className="font-extrabold text-gray-900 mt-0.5">HL-2024-CCO-0038</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Type</span>
                <p className="font-extrabold text-gray-900 mt-0.5">Logistics delay</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Reported by</span>
                <p className="font-extrabold text-gray-900 mt-0.5">
                  Chizoba Oji (HarvestLink Operations)
                </p>
              </div>
            </div>

            <div className="text-xs pt-2 border-t border-gray-100 space-y-1">
              <span className="text-[10px] text-gray-400 font-bold">Description</span>
              <p className="text-gray-700 leading-relaxed">
                Logistics job HL-LGS-0042 has been in transit for longer than estimated delivery window. Expected delivery was 16 Oct 2024. No delivery confirmation received.
              </p>
            </div>
          </div>

          {/* Affected Section */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
              AFFECTED
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Affected quantity</span>
                <p className="font-extrabold text-gray-900 mt-0.5">40 MT</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold">Logistics job</span>
                <p className="font-extrabold text-gray-900 mt-0.5">HL-LGS-0042</p>
              </div>
            </div>
          </div>

          {/* Responsibility Section */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
              RESPONSIBILITY
            </h3>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold">Responsible actor</span>
                  <p className="font-extrabold text-gray-900 mt-0.5">Logistics Partner</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold">Next action</span>
                  <p className="font-bold text-amber-800 mt-0.5">
                    Contact logistics partner Emeka Nwosu to confirm delivery status. Update order status once confirmed.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 font-bold">Settlement</span>
                <p className="font-bold text-red-700 mt-0.5">
                  May be blocked pending resolution — review required
                </p>
              </div>
            </div>
          </div>

          {/* Evidence Section */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
              EVIDENCE
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                <BiFile className="w-5 h-5 text-emerald-800" />
                <div>
                  <p className="font-bold text-gray-900">Waybill photo / delivery photo</p>
                  <p className="text-[10px] text-gray-400">Prototype value — not stored</p>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                <BiFile className="w-5 h-5 text-emerald-800" />
                <div>
                  <p className="font-bold text-gray-900">Weighing slip / quantity record</p>
                  <p className="text-[10px] text-gray-400">Prototype value — not stored</p>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-3 border border-gray-100">
                <BiFile className="w-5 h-5 text-emerald-800" />
                <div>
                  <p className="font-bold text-gray-900">Verification notes from aggregation agent</p>
                  <p className="text-[10px] text-gray-400">Prototype value — not stored</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="font-extrabold text-xs text-gray-400 uppercase tracking-wider">
              ACTIVITY TIMELINE
            </h3>

            <div className="space-y-3 text-xs border-l-2 border-gray-100 pl-4 ml-1">
              <div className="relative space-y-0.5">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-emerald-700 rounded-full" />
                <p className="font-bold text-gray-900">Delivery delay exception raised</p>
                <p className="text-[11px] text-gray-500">Chizoba Oji — HarvestLink Operations</p>
                <p className="text-[10px] text-gray-400">17 Oct 2024, 12:00</p>
              </div>

              <div className="relative space-y-0.5 pt-2">
                <div className="absolute -left-[21px] top-3 w-2.5 h-2.5 bg-gray-300 rounded-full" />
                <p className="font-bold text-gray-900">Pickup confirmed — HL-LGS-0041</p>
                <p className="text-[11px] text-gray-500">Emeka Nwosu — Logistics Partner</p>
                <p className="text-[10px] text-gray-400">Auto-created mark</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}