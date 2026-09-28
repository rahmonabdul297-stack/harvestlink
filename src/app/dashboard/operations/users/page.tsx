"use client";

import React, { useState } from "react";

export interface SystemUser {
  id: string;
  name: string;
  role: "Buyer" | "Farmer / Supplier" | "Aggregator" | "Logistics Partner" | "Operations";
  organization: string;
  email: string;
  verification: "Verified" | "Pending";
  status: "Active" | "Inactive";
  joinedDate: string;
}

export default function OperationsUsersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("all");

  const [users] = useState<SystemUser[]>([
    {
      id: "USR-001",
      name: "Chukwuemeka Adeyemi",
      role: "Buyer",
      organization: "West Africa Cocoa Merchants Ltd",
      email: "c.adeyemi@wacm.com",
      verification: "Verified",
      status: "Active",
      joinedDate: "12 Jan 2024",
    },
    {
      id: "USR-002",
      name: "Amaka Okonkwo",
      role: "Buyer",
      organization: "Continental Commodities Plc",
      email: "a.okonkwo@continentalcommodities.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "3 Feb 2024",
    },
    {
      id: "USR-003",
      name: "Ibrahim Musa Bello",
      role: "Farmer / Supplier",
      organization: "Independent — Benue State",
      email: "i.bello@harvestlink.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "20 Jan 2024",
    },
    {
      id: "USR-004",
      name: "Chidinma Okafor",
      role: "Farmer / Supplier",
      organization: "Oke-Igbo Farmers Cooperative",
      email: "c.okafor@okafor-farms.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "25 Jan 2024",
    },
    {
      id: "USR-005",
      name: "Yusuf Balogun",
      role: "Farmer / Supplier",
      organization: "Independent — Ondo State",
      email: "y.balogun@harvestlink.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "10 Feb 2024",
    },
    {
      id: "USR-006",
      name: "Taiwo Adewale",
      role: "Aggregator",
      organization: "Kogi Aggregation Hub",
      email: "t.adewale@kogiagghub.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "1 Nov 2023",
    },
    {
      id: "USR-007",
      name: "Ngozi Eze",
      role: "Aggregator",
      organization: "Ogun Commodities Aggregation Centre",
      email: "n.eze@oguncc.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "15 Nov 2023",
    },
    {
      id: "USR-008",
      name: "Emeka Nwosu",
      role: "Logistics Partner",
      organization: "SwiftHaul Transport Services",
      email: "e.nwosu@swifthaul.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "5 Jan 2024",
    },
    {
      id: "USR-009",
      name: "Alhaji Musa Tanko",
      role: "Logistics Partner",
      organization: "Northern Logistics Partners",
      email: "am.tanko@northernlogistics.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "8 Jan 2024",
    },
    {
      id: "USR-010",
      name: "Chidi Okafor",
      role: "Logistics Partner",
      organization: "SwiftHaul Transport Services",
      email: "ch.okafor@swifthaul.ng",
      verification: "Pending",
      status: "Inactive",
      joinedDate: "20 Aug 2024",
    },
    {
      id: "USR-011",
      name: "Fatima Al-Hassan",
      role: "Operations",
      organization: "HarvestLink Operations",
      email: "f.alhassan@harvestlink.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "1 Sept 2023",
    },
    {
      id: "USR-012",
      name: "Oluwaseun Oduola",
      role: "Operations",
      organization: "HarvestLink Operations",
      email: "o.oduola@harvestlink.ng",
      verification: "Verified",
      status: "Active",
      joinedDate: "1 Sept 2023",
    },
  ]);

  const filteredUsers = users.filter((u) => {
    if (selectedRole !== "all" && u.role.toLowerCase() !== selectedRole.toLowerCase()) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans text-gray-900 pb-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-black tracking-tight text-gray-900">
          Users
        </h1>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          All registered users by role.
        </p>
      </div>

      {/* Top Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Total users
          </span>
          <span className="text-xl font-black text-gray-900 block">12</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Active
          </span>
          <span className="text-xl font-black text-emerald-700 block">11</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Pending verification
          </span>
          <span className="text-xl font-black text-amber-700 block">1</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Buyers
          </span>
          <span className="text-xl font-black text-blue-600 block">2</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Suppliers
          </span>
          <span className="text-xl font-black text-emerald-700 block">3</span>
        </div>

        <div className="bg-white border border-gray-200/80 rounded-xl p-3.5 space-y-1 shadow-2xs">
          <span className="text-[10px] font-bold text-gray-400 block uppercase">
            Logistics
          </span>
          <span className="text-xl font-black text-purple-700 block">3</span>
        </div>
      </div>

      {/* Role Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="space-y-1">
          <label className="block text-[10px] font-bold text-gray-400 uppercase">
            Role
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0c4a24]"
          >
            <option value="all">All roles</option>
            <option value="buyer">Buyer</option>
            <option value="farmer / supplier">Farmer / Supplier</option>
            <option value="aggregator">Aggregator</option>
            <option value="logistics partner">Logistics Partner</option>
            <option value="operations">Operations</option>
          </select>
        </div>

        <span className="text-xs font-medium text-gray-400 self-end sm:self-auto">
          {filteredUsers.length} users
        </span>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-3">NAME</th>
                <th className="py-3.5 px-3">ROLE</th>
                <th className="py-3.5 px-3">ORGANISATION</th>
                <th className="py-3.5 px-3">EMAIL</th>
                <th className="py-3.5 px-3">VERIFICATION</th>
                <th className="py-3.5 px-3">STATUS</th>
                <th className="py-3.5 px-4 text-right">JOINED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-800">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50/80 transition-colors">
                  {/* ID */}
                  <td className="py-3.5 px-4 font-mono text-[11px] text-gray-400 font-bold">
                    {u.id}
                  </td>

                  {/* Name */}
                  <td className="py-3.5 px-3 font-black text-gray-900">
                    {u.name}
                  </td>

                  {/* Role Badge */}
                  <td className="py-3.5 px-3">
                    <span
                      className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md inline-block ${
                        u.role === "Buyer"
                          ? "bg-blue-100 text-blue-800"
                          : u.role === "Farmer / Supplier"
                          ? "bg-emerald-100 text-emerald-800"
                          : u.role === "Aggregator"
                          ? "bg-amber-100 text-amber-900"
                          : u.role === "Logistics Partner"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>

                  {/* Organisation */}
                  <td className="py-3.5 px-3 text-gray-600 font-medium">
                    {u.organization}
                  </td>

                  {/* Email */}
                  <td className="py-3.5 px-3 font-mono text-[11px] text-gray-500">
                    {u.email}
                  </td>

                  {/* Verification */}
                  <td className="py-3.5 px-3">
                    <span
                      className={`text-[10px] font-extrabold inline-flex items-center gap-1 ${
                        u.verification === "Verified"
                          ? "text-emerald-700"
                          : "text-amber-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          u.verification === "Verified"
                            ? "bg-emerald-600"
                            : "bg-amber-600"
                        }`}
                      ></span>
                      {u.verification}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-3.5 px-3">
                    <span
                      className={`text-[10px] font-extrabold inline-flex items-center gap-1 ${
                        u.status === "Active"
                          ? "text-emerald-700"
                          : "text-gray-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          u.status === "Active"
                            ? "bg-emerald-600"
                            : "bg-gray-400"
                        }`}
                      ></span>
                      {u.status}
                    </span>
                  </td>

                  {/* Joined Date */}
                  <td className="py-3.5 px-4 text-right text-[11px] text-gray-400 font-medium">
                    {u.joinedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}