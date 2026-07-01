"use client";

import { useState } from "react";

const months = ["July 2026", "August 2026", "September 2026"];

export const AvailabilityCalendar = () => {
  const [monthIndex, setMonthIndex] = useState(0);
  const month = months[monthIndex];

  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <h2 className="text-xl font-semibold text-slate-900">2 nights in your next getaway</h2>
      <p className="text-sm text-slate-600">Select check-in and check-out dates</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            disabled={monthIndex === 0}
            onClick={() => setMonthIndex((current) => Math.max(0, current - 1))}
            className="rounded-full border border-slate-300 px-2 py-1 text-xs disabled:opacity-40"
          >
            ←
          </button>
          <p className="text-sm font-semibold text-slate-900">{month}</p>
          <button
            type="button"
            disabled={monthIndex === months.length - 1}
            onClick={() => setMonthIndex((current) => Math.min(months.length - 1, current + 1))}
            className="rounded-full border border-slate-300 px-2 py-1 text-xs disabled:opacity-40"
          >
            →
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-600">
          {Array.from({ length: 35 }, (_, index) => {
            const day = index + 1;
            const isRange = day >= 11 && day <= 16;
            const isEdge = day === 11 || day === 16;
            return (
              <span
                key={day}
                className={`rounded-md px-1 py-2 ${isEdge ? "bg-slate-900 text-white" : isRange ? "bg-slate-100 text-slate-900" : ""}`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
      <button type="button" className="text-sm font-medium text-slate-700 underline">Clear dates</button>
    </section>
  );
};
