"use client";

import { useState } from "react";
import { DetailModal } from "@/components/detail-modal";

const items = [
  {
    key: "Cancellation policy",
    preview: "Free cancellation for 48 hours.",
    content: ["Cancel within 48 hours for full refund.", "After that, partial refunds may apply by date."],
  },
  {
    key: "House rules",
    preview: "Check-in after 3:00 PM.",
    content: ["No smoking.", "Quiet hours from 10 PM to 8 AM.", "No parties or events."],
  },
  {
    key: "Safety & property",
    preview: "Carbon monoxide alarm available.",
    content: ["Smoke alarm installed.", "Exterior camera at entry only.", "Fire extinguisher in kitchen."],
  },
];

export const ThingsToKnowSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = items.find((item) => item.key === active) ?? null;

  return (
    <section className="space-y-3 py-5">
      <h2 className="text-xl font-semibold text-slate-900">Things to know</h2>
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => setActive(item.key)}
          className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left"
        >
          <div>
            <p className="font-medium text-slate-900">{item.key}</p>
            <p className="text-sm text-slate-600">{item.preview}</p>
          </div>
          <span aria-hidden>›</span>
        </button>
      ))}
      <button type="button" className="text-sm font-medium text-slate-700 underline">Report this listing</button>
      <p className="text-xs text-slate-500">Airbnb › USA › Kentucky › Wolfe County</p>

      <DetailModal
        title={activeItem?.key ?? "Details"}
        isOpen={Boolean(activeItem)}
        onClose={() => setActive(null)}
        content={activeItem?.content ?? []}
      />
    </section>
  );
};
