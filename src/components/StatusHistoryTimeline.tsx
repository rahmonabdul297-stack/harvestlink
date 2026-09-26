"use client";

import React from "react";
import { BiCheck, BiErrorAlt } from "react-icons/bi";

export interface TimelineStep {
  title: string;
  sub?: string;
  completed: boolean;
  isFlagged?: boolean;
}

interface StatusHistoryTimelineProps {
  history: TimelineStep[];
}

export default function StatusHistoryTimeline({
  history,
}: StatusHistoryTimelineProps) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-xs">
      <h3 className="font-extrabold text-sm text-gray-900">Status history</h3>

      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-gray-100">
        {history.map((step, idx) => (
          <div key={idx} className="relative flex items-start gap-3 text-xs">
            {/* Step Icon */}
            <div
              className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white ring-4 ring-white ${
                step.isFlagged
                  ? "bg-amber-500 text-white"
                  : step.completed
                  ? "bg-emerald-600"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {step.isFlagged ? (
                <BiErrorAlt className="w-3.5 h-3.5" />
              ) : step.completed ? (
                <BiCheck className="w-4 h-4" />
              ) : (
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              )}
            </div>

            {/* Step Text */}
            <div className="space-y-0.5">
              <p
                className={`font-extrabold ${
                  step.isFlagged
                    ? "text-amber-900"
                    : step.completed
                    ? "text-gray-900"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </p>
              {step.sub && (
                <p className="text-[10px] text-gray-400 font-medium">
                  {step.sub}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}