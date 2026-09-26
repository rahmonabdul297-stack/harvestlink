"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { FiEyeOff } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Logo from "@/src/components/logo";

type UserRole = "buyer" | "farmer" | "rider";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>("buyer");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // Role-specific fields
    farmLocation: "",
    cooperativeName: "",
    companyName: "",
    vehicleType: "Truck / Pickup",
    licenseNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      role,
      ...formData,
    };
    console.log("Signup Payload:", payload);
    // Submit payload or trigger OTP verification route
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

        {/* Hero Card & Feature List */}
        <div className="">
          {/* Card Image Thumbnail */}
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-emerald-600/40 shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D_gyHRIjkLY4NYZBY7G9Y5_p2Auk8rN2DeDcBhwiWQ&s=10"
              alt="Nigerian Farmer in field"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bullet Feature Highlights */}
          <ul className="space-y-3 text-xs font-medium text-emerald-100">
            <li className="flex items-center gap-2.5">
              <BiCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Verified sourcing from farmers and cooperatives</span>
            </li>
            <li className="flex items-center gap-2.5">
              <BiCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Physical batch verification at aggregation points</span>
            </li>
            <li className="flex items-center gap-2.5">
              <BiCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>End-to-end Order Passport traceability</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-2xl mx-auto w-full">
        <div className="w-full max-w-md mx-auto my-auto">
          {/* Form Title Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-emerald-800 tracking-tight uppercase">
              Create your account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Join HarvestLink to source, supply or coordinate agricultural
              commodities.
            </p>
          </div>

          {/* Role Selection Selector */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Select Your Role
            </label>
            <div className="grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setRole("buyer")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  role === "buyer"
                    ? "bg-[#14532d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Buyer / User
              </button>
              <button
                type="button"
                onClick={() => setRole("farmer")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  role === "farmer"
                    ? "bg-[#14532d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Farmer
              </button>
              <button
                type="button"
                onClick={() => setRole("rider")}
                className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                  role === "rider"
                    ? "bg-[#14532d] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Rider / Logistics
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Phone number{" "}
                {role === "buyer" && (
                  <span className="text-gray-400 font-normal">(optional)</span>
                )}
              </label>
              <input
                type="tel"
                name="phone"
                required={role !== "buyer"}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Role Specific Extra Fields */}
            {role === "farmer" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Farm Location / State
                  </label>
                  <input
                    type="text"
                    name="farmLocation"
                    required
                    value={formData.farmLocation}
                    onChange={handleChange}
                    placeholder="e.g. Kaduna or Kano"
                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Cooperative / Union Name{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cooperativeName"
                    value={formData.cooperativeName}
                    onChange={handleChange}
                    placeholder="e.g. Zaria Grain Farmers Union"
                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
              </>
            )}

            {role === "buyer" && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Company / Organization Name{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Northern Agro Processing Ltd"
                  className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
                />
              </div>
            )}

            {role === "rider" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    <option value="Truck / Pickup">Truck / Pickup</option>
                    <option value="Mini Van">Mini Van</option>
                    <option value="Motorcycle / Tricycle">
                      Motorcycle / Tricycle
                    </option>
                    <option value="Haulage Fleet Manager">
                      Haulage Fleet Manager
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Driver License / Plate Number
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    required
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder="e.g. ABC-123XY"
                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
                  />
                </div>
              </>
            )}

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all placeholder:text-gray-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#14532d] hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>
                Register as{" "}
                {role === "buyer"
                  ? "Buyer"
                  : role === "farmer"
                    ? "Farmer"
                    : "Rider"}
              </span>
              <BsArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-gray-900 underline hover:text-emerald-700"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Footer Back Link */}
        <div className="mt-8 text-center sm:text-left max-w-md mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-emerald-700 font-medium transition-colors"
          >
            <BsArrowLeft className="w-3.5 h-3.5" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
