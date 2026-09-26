"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiSearch, BiPhone, BiMessageRoundedDetail, BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function FarmerHelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    "All",
    "Supply requests",
    "Aggregation",
    "Earnings & Payment",
    "Account",
  ];

  const faqs = [
    {
      category: "Supply requests",
      q: "How do I accept or decline a supply request?",
      a: "When a request appears in 'Your requests', click 'Review this request'. You can inspect the required quantity, deadline, and guide price. You can then accept, adjust your committed tonnage, or decline the request.",
    },
    {
      category: "Supply requests",
      q: "Can I use USSD if I don't have internet access?",
      a: "Yes! HarvestLink supports USSD shortcodes for offline farmers. Dial *384*77# on your mobile phone to view pending requests, confirm your committed tonnage, and receive drop-off code SMS alerts.",
    },
    {
      category: "Aggregation",
      q: "What happens when I deliver my crop to the aggregation hub?",
      a: "At the hub, a HarvestLink agent will weigh your batch and test moisture/purity levels against the required commodity specification. A digital weighing slip will be issued and linked to your Order Passport.",
    },
    {
      category: "Aggregation",
      q: "What if my delivered weight is different from my committed weight?",
      a: "Don't worry! Your actual weighed quantity at the hub determines your final verified contribution. Your payout is automatically calculated based on the verified weight recorded on your weighing slip.",
    },
    {
      category: "Earnings & Payment",
      q: "How and when do I get paid for my verified supply?",
      a: "Once the full order is verified and dispatched from the aggregation hub, payment is initiated directly to your registered bank account or mobile money wallet via our licensed payment partners.",
    },
    {
      category: "Account",
      q: "How do I update my registered farm location or bank details?",
      a: "You can update your profile information in your account settings or visit your nearest local HarvestLink aggregation hub agent for assistance.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 font-sans text-gray-900 pb-12">
      {/* Top Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Help & support
        </h1>
        <p className="text-xs text-gray-500 font-medium">
          Find answers to common questions about supply requests, hub drop-offs, and earnings.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search help articles (e.g. USSD, drop-off, payment)..."
          className="w-full pl-11 pr-4 py-3 text-xs bg-white border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0f4022] shadow-2xs"
        />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl border transition-colors ${
              activeCategory === cat
                ? "bg-[#0f4022] text-white border-[#0f4022]"
                : "bg-white text-gray-600 border-gray-200/80 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          FREQUENTLY ASKED QUESTIONS
        </p>

        {filteredFaqs.length > 0 ? (
          <div className="space-y-2.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4.5 text-left flex items-center justify-between text-xs font-bold text-gray-900 hover:text-emerald-900 transition-colors"
                  >
                    <span className="pr-2">{faq.q}</span>
                    {isOpen ? (
                      <BiChevronUp className="w-5 h-5 text-[#0f4022] shrink-0" />
                    ) : (
                      <BiChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4.5 pb-4.5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-emerald-50/20">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-200/80 rounded-2xl p-8 text-center text-xs text-gray-500">
            No help topics found matching your search term.
          </div>
        )}
      </div>

      {/* Need Direct Help Box */}
      <div className="bg-[#0f4022] text-white rounded-2xl p-6 space-y-4 shadow-xs">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
            NEED DIRECT ASSISTANCE?
          </span>
          <h3 className="text-lg font-black">Speak with a HarvestLink Agent</h3>
          <p className="text-xs text-emerald-100/80 leading-relaxed">
            Our local field agents are available at your nearest aggregation hub to assist with USSD registration, weigh-ins, and payment status checks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-[#185831] border border-emerald-600/40 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white shrink-0">
              <BiPhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-300 font-bold uppercase">Call Helpdesk</p>
              <p className="text-xs font-extrabold text-white">+234 (0) 800 HARVEST</p>
            </div>
          </div>

          <div className="bg-[#185831] border border-emerald-600/40 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white shrink-0">
              <BiMessageRoundedDetail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-300 font-bold uppercase">USSD Code</p>
              <p className="text-xs font-extrabold text-white">*384*77# (Toll Free)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}