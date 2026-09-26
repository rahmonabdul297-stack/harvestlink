import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export default function Logo({ className = "", lightMode = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-sm shrink-0">
        H
      </div>
      <div>
        <div
          className={`font-extrabold text-lg tracking-wide leading-none ${
            lightMode ? "text-gray-900" : "text-white"
          }`}
        >
          Harvest<span className="text-yellow-600">Link</span>
        </div>
      </div>
    </Link>
  );
}
