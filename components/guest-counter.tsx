"use client";

import { useState } from "react";

interface GuestCounterProps {
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const GuestCounter = ({ min = 1, max = 6, onChange }: GuestCounterProps) => {
  const [count, setCount] = useState(min);

  const updateCount = (next: number) => {
    if (next < min || next > max) {
      return;
    }

    setCount(next);
    onChange(next);
  };

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
      <p className="text-sm text-slate-700">Guests</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => updateCount(count - 1)}
          disabled={count === min}
          className="h-8 w-8 rounded-full border border-slate-300 text-sm disabled:opacity-40"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-medium">{count}</span>
        <button
          type="button"
          onClick={() => updateCount(count + 1)}
          disabled={count === max}
          className="h-8 w-8 rounded-full border border-slate-300 text-sm disabled:opacity-40"
        >
          +
        </button>
      </div>
    </div>
  );
};
