"use client";

import { useState } from "react";

const chips = ["Allows pets", "Hot tub", "Self check-in", "Free parking", "Pool", "Wifi"];

export const QuickFilterChips = () => {
  const [active, setActive] = useState<string[]>([]);

  const toggle = (chip: string) => {
    setActive((current) =>
      current.includes(chip) ? current.filter((item) => item !== chip) : [...current, chip],
    );
  };

  return (
    <div className="mb-4 flex flex-wrap gap-2 pb-1 md:flex-nowrap md:overflow-x-auto">
      {chips.map((chip) => {
        const isActive = active.includes(chip);
        return (
          <button
            key={chip}
            type="button"
            onClick={() => toggle(chip)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm ${isActive ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-700"}`}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
};
