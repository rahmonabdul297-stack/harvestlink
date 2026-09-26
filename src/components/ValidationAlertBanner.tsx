"use client";

import React from "react";

interface ValidationAlertBannerProps {
  message?: string;
}

export default function ValidationAlertBanner({
  message = "Please check the grade specification and enter accepted quantity before confirming.",
}: ValidationAlertBannerProps) {
  return (
    <div className="bg-[#fff1f2] border border-[#fecdd3] text-[#9f1239] rounded-xl p-3.5 text-xs font-bold leading-normal shadow-2xs">
      {message}
    </div>
  );
}