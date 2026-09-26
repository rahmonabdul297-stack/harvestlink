"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/src/components/logo";
import { BiCheck, BiLeftArrowAlt, BiSolidEyedropper } from "react-icons/bi";
import { BsFiletypeWoff } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Sign In request
    setTimeout(() => {
      setLoading(false);
      // Route based on role or to dashboard
      window.location.href = "/onboarding";
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col lg:flex-row text-gray-900">
      {/* LEFT BRANDING PANEL */}
      <div className="w-full lg:w-[42%] bg-[#14532d] text-white p-8 lg:p-12 xl:p-16 flex flex-col justify-between shrink-0 relative overflow-hidden">
        {/* Top Logo */}
        <div>
          <Logo lightMode={false} />
        </div>

        {/* Hero Pitch Content */}
        <div className="my-10 lg:my-0 space-y-6 max-w-md">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              From farm to fulfilment{" "}
              <span className="block border-b-2 border-amber-400/40 pb-2 text-amber-400 font-extrabold">
                every step traceable.
              </span>
            </h1>
          </div>

          <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed font-normal">
            HarvestLink coordinates sourcing, aggregation, verification and delivery of agricultural commodities across Nigeria.
          </p>

          {/* Featured Farmer Image Card */}
          <div className="relative rounded-2xl overflow-hidden border border-emerald-600/40 shadow-xl my-6">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop"
              alt="HarvestLink Farmer in Field"
              className="w-full h-44 sm:h-52 object-cover object-center"
            />
          </div>

          {/* Value Propositions List */}
          <div className="space-y-2.5 text-xs font-semibold text-emerald-100">
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-800 text-amber-400 flex items-center justify-center shrink-0">
                <BiCheck className="w-3.5 h-3.5" />
              </div>
              <span>Verified sourcing from farmers and cooperatives</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-800 text-amber-400 flex items-center justify-center shrink-0">
                <BiCheck className="w-3.5 h-3.5" />
              </div>
              <span>Physical batch verification at aggregation points</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-800 text-amber-400 flex items-center justify-center shrink-0">
                <BiCheck className="w-3.5 h-3.5" />
              </div>
              <span>End-to-end Order Passport traceability</span>
            </div>
          </div>
        </div>

        {/* Footer info for left panel */}
        <div className="hidden lg:block text-[11px] text-emerald-300/60">
          © 2026 HarvestLink · Agricultural coordination platform
        </div>
      </div>

      {/* RIGHT SIGN IN FORM PANEL */}
      <div className="flex-1 bg-white p-6 sm:p-12 lg:p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-8">
          {/* Header text */}
          <div className="space-y-1.5 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-tight">
              Sign in to HarvestLink
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal">
              Enter your credentials to access your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email or Phone Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="identifier"
                className="block text-xs font-bold text-gray-800"
              >
                Email or phone number
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                value={form.identifier}
                onChange={handleChange}
                placeholder="e.g. adamu@yakubufarms.ng"
                required
                className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d] focus:border-transparent transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-gray-800"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs font-bold text-[#14532d] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  required
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#14532d] focus:border-transparent transition-all placeholder:text-gray-300 pr-11"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <LuEyeClosed  className="w-5 h-5" />
                  ) : (
                    <FaRegEye  className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#14532d] hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-sm text-sm active:scale-[0.99] disabled:opacity-70 mt-2"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Create Account Link */}
          <div className="text-center text-xs text-gray-500 font-medium">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-bold text-[#14532d] underline hover:text-emerald-800"
            >
              Create account
            </Link>
          </div>

          {/* Back to Home Link */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 font-medium transition-colors"
            >
              <BiLeftArrowAlt className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}