"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/src/components/logo";
import { BiChevronDown } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";
import CoordinationSection from "@/src/components/sectiontwo";
import AggregationFlowSection from "@/src/components/sectionthree";
import WhoWeServeSection from "@/src/components/sectionfour";
import CommodityVerificationSection from "@/src/components/sectionfive";
import ProductCapabilitiesCTA from "@/src/components/sectionsix";
import Header from "../components/header";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col overflow-x-hidden">
     <Header/>
      {/* Hero Banner Section with Animations */}
      <section className="relative w-full bg-[#14532d] text-white overflow-hidden h-full flex items-center mt-6">
        {/* Animated Glow Backlight Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

        {/* Right Side Background Image with Smooth Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          {/* Green Gradient overlay fading left-to-right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14532d] via-[#14532d]/90 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-[#14532d]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-24 relative z-10 w-full">
          <div className="max-w-2xl space-y-8">
            {/* Category Tag (Fade-In-Up) */}
            <div className="animate-fade-in-up inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase bg-emerald-900/80 border border-emerald-600/40 px-3 py-1 rounded-full backdrop-blur-sm">
                AGRICULTURAL COORDINATION PLATFORM
              </span>
            </div>

            {/* Main Title (Fade-In-Up Delay 100ms) */}
            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From buyer demand to{" "}
              <span className="text-amber-400  underline-offset-8">
                verified delivery.
              </span>
            </h1>

            {/* Subtitle Description (Fade-In-Up Delay 200ms) */}
            <p className="animate-fade-in-up delay-200 text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              HarvestLink helps commercial buyers source agricultural commodities by coordinating fragmented farmer supply through aggregation, verification, and logistics — with full visibility across every stage.
            </p>

            {/* CTA Buttons (Fade-In-Up Delay 300ms) */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/auth/signup"
                className="group relative bg-[#1b6b3b] hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Get Started</span>
                <HiSparkles className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-12" />
              </Link>

              <a
                href="#how-it-works"
                className="border border-emerald-500/50 hover:bg-emerald-800/60 text-white font-medium px-5 py-3.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-1.5 backdrop-blur-sm"
              >
                <span>See how it works</span>
                <BiChevronDown className="w-4 h-4 text-emerald-300 transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Floating Live Order Passport Card (Animated Float & Shimmer) */}
            <div className="animate-fade-in-up delay-400 pt-4">
              <div className="animate-float bg-[#0e3b20]/90 border border-emerald-500/40 rounded-2xl p-5 max-w-sm backdrop-blur-md shadow-2xl space-y-3 transition-transform duration-300 hover:scale-[1.02]">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase">
                    ORDER ORD-001
                  </span>
                  <span className="relative flex items-center gap-1.5 bg-emerald-800/90 text-emerald-200 border border-emerald-500/50 text-[10px] font-semibold px-2.5 py-0.5 rounded-full overflow-hidden">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                    <span>In transit</span>
                  </span>
                </div>

                {/* Commodity Info */}
                <h3 className="font-bold text-white text-sm tracking-wide">
                  Cocoa · Grade 1 · Lagos
                </h3>

                {/* Metrics Progress */}
                <div className="space-y-2 border-t border-emerald-700/50 pt-2.5 text-xs">
                  <div className="flex justify-between text-emerald-200/80">
                    <span>Required</span>
                    <span className="font-bold text-white">100 MT</span>
                  </div>
                  <div className="flex justify-between text-emerald-200/80">
                    <span>Verified</span>
                    <span className="font-bold text-amber-400">98 MT</span>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="w-full h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: "98%" }}
                    />
                  </div>
                </div>

                {/* Aggregation Footer */}
                <div className="pt-1 text-[11px] text-emerald-300/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-amber-400 rounded-full inline-block animate-pulse" />
                  <span>8 farmers committed · Aggregation: Ibadan North</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}

      <CoordinationSection />
      {/* section 3 */}
      <AggregationFlowSection />
      {/* section 4 */}
      <WhoWeServeSection/>
      {/* section 5 */}
      <CommodityVerificationSection/>
      {/* section 6 */}
      <ProductCapabilitiesCTA />
      {/* footer */}
       <Footer/>
    </div>
  );
}