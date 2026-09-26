"use client";

import React from "react";
import Link from "next/link";
import {
  BiDesktop,
  BiUser,
  BiBox,
  BiRightArrowAlt,
  BiSolidTruck,
} from "react-icons/bi";

export default function WhoWeServeSection() {
  const participants = [
    {
      badge: "Commercial Buyers",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-200",
      icon: <BiDesktop className="w-3.5 h-3.5 text-amber-700" />,
      title: "Source with greater visibility",
      description:
        "Create commodity requirements and let HarvestLink coordinate the supply. Track aggregation progress, verify batches, and receive consolidated shipments.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", // Market / Commercial image
      link: "/dashboard/buyer",
    },
    {
      badge: "Farmers & Cooperatives",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-200",
      icon: <BiUser className="w-3.5 h-3.5 text-emerald-700" />,
      title: "Respond to real demand",
      description:
        "Receive supply requests from commercial buyers. Commit available quantities and participate in coordinated aggregation at your nearest collection point.",
      image:
        "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop", // Farmer in field image
      link: "/dashboard/farmer",
    },
    {
      badge: "Aggregation Partners",
      badgeBg: "bg-blue-100 text-blue-900 border-blue-200",
      icon: <BiBox className="w-3.5 h-3.5 text-blue-700" />,
      title: "Receive, weigh and verify",
      description:
        "Manage incoming farmer batches at your aggregation point. Record received quantities, verify commodity quality, and confirm batch readiness for dispatch.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Warehouse / Collection point image
      link: "/dashboard/match-demo",
    },
    {
      badge: "Logistics Partners",
      badgeBg: "bg-orange-100 text-orange-900 border-orange-200",
      icon: <BiSolidTruck className="w-3.5 h-3.5 text-orange-700" />,
      title: "Move verified loads",
      description:
        "Accept logistics jobs for verified commodity loads. Track pickup, transit, and delivery milestones. Confirm delivery at the buyer destination.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop", // Truck / Transit image
      link: "/rider",
    },
  ];

  return (
    <section className="w-full bg-[#fbfdfc] py-20 px-6 font-sans border-t border-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[10px] font-bold tracking-widest text-[#14532d] uppercase">
            WHO HARVESTLINK SERVES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            A platform for every participant <br /> in the supply chain.
          </h2>
        </div>

        {/* 2x2 Grid of Participant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {participants.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Participant Role Badge */}
                  <div className="inline-flex items-center gap-1.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${card.badgeBg}`}
                    >
                      {card.icon}
                      <span>{card.badge}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#14532d] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Get Started Action Link */}
                <div className="pt-2">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#14532d] hover:text-emerald-700 transition-colors group/link"
                  >
                    <span>Get started</span>
                    <BiRightArrowAlt className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}