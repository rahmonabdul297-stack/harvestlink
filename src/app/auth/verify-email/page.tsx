"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Mail, ArrowLeft } from "lucide-react";
import Logo from "@/src/components/logo";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle single character typing and auto-focus next
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-focus next input box
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle pasting full 6-digit code
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = otp.join("");
    console.log("Submitting Verification Code:", verificationCode);
    // Proceed with authentication flow
  };

  return (
    <div className="flex min-h-screen w-full font-sans antialiased bg-white">
      {/* Left Column: Brand Showcase Banner */}
      <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] bg-[#14532d] text-white p-10 flex-col justify-between relative overflow-hidden">
        {/* Brand Header */}
        <div>
          <Logo />

          {/* Heading Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              From farm to fulfilment
            </h2>
            <div className="w-10 h-1 bg-amber-500 rounded my-3" />
            <h2 className="text-3xl font-extrabold tracking-tight text-amber-500 leading-tight">
              every step traceable.
            </h2>

            <p className="mt-6 text-emerald-100/90 text-sm leading-relaxed max-w-sm">
              HarvestLink coordinates sourcing, aggregation, verification and
              delivery of agricultural commodities across Nigeria.
            </p>
          </div>
        </div>

        {/* Hero Thumbnail & Feature List */}
        <div className="space-y-6">
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-emerald-600/40 shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D_gyHRIjkLY4NYZBY7G9Y5_p2Auk8rN2DeDcBhwiWQ&s=10"
              alt="Nigerian Farmer in field"
              className="object-cover"
            />
          </div>

          <ul className="space-y-3 text-xs font-medium text-emerald-100">
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Verified sourcing from farmers and cooperatives</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Physical batch verification at aggregation points</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-amber-400 shrink-0" />
              <span>End-to-end Order Passport traceability</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Verify Email Form */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-2xl mx-auto w-full">
        <div className="w-full max-w-md mx-auto my-auto text-center sm:text-left">
          {/* Email Badge Icon */}
          <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
            <Mail className="w-6 h-6" />
          </div>

          {/* Header */}
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Verify your email
          </h2>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            A 6-digit code was sent to the email you provided{" "}
            <span className="font-semibold text-gray-900"></span>. Enter it
            below to verify your account.
          </p>

          {/* OTP Input Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className="w-11 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all shadow-sm"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-[#14532d] hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm text-sm"
            >
              Verify account
            </button>
          </form>

          {/* Resend Code Action */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Didn&apos;t receive it?{" "}
            <button
              type="button"
              className="font-semibold text-emerald-700 underline hover:text-emerald-900"
            >
              Resend code
            </button>
          </div>

          {/* Back Step Link */}
          <div className="mt-4 text-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
          </div>
        </div>

        {/* Footer Back Link */}
        <div className="mt-8 text-center sm:text-left max-w-md mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
