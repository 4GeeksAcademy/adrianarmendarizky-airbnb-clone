"use client";

import { useState } from "react";
import { GuestCounter } from "@/components/guest-counter";

interface BookingCardProps {
  pricePerNight: number;
}

export const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);

  return (
    <section className="sticky bottom-4 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold text-slate-900">${pricePerNight} / night</p>
      <div className="mt-3">
        <GuestCounter min={1} max={6} onChange={setGuests} />
      </div>
      <p className="mt-3 text-sm text-slate-600">Estimated total: ${pricePerNight * guests}</p>
      <button
        type="button"
        className="mt-3 w-full rounded-xl bg-rose-500 px-4 py-2 font-medium text-white transition hover:bg-rose-600"
      >
        Reserve
      </button>
    </section>
  );
};
