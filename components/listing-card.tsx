"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/models";

interface ListingCardProps {
  listing: Listing;
  mode?: "grid" | "list";
  badgeLabel?: string;
  priceLabel?: string;
  subtitle?: string;
  roomDetails?: string;
  dateLabel?: string;
  originalPrice?: number;
  reviewCount?: number;
}

export const ListingCard = ({
  listing,
  mode = "grid",
  badgeLabel,
  priceLabel,
  subtitle,
  roomDetails,
  dateLabel,
  originalPrice,
  reviewCount,
}: ListingCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
        mode === "list" ? "md:flex" : ""
      }`}
    >
      <div className={`relative ${mode === "list" ? "md:w-72 lg:w-80" : ""}`}>
        <Image
          src={listing.photoUrl}
          alt={listing.title}
          width={900}
          height={600}
          className={`w-full object-cover ${mode === "list" ? "h-44 sm:h-48 md:h-full" : "h-44 sm:h-48 md:h-52"}`}
        />
        {badgeLabel ? (
          <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-800">
            {badgeLabel}
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => setIsFavorite((current) => !current)}
          aria-label="Toggle favorite"
          className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-sm shadow"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="space-y-1.5 p-3.5 sm:space-y-2 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900">{listing.title}</h3>
          <p className="shrink-0 text-sm text-slate-700">
            ★ {listing.rating.toFixed(2)}
            {reviewCount ? ` (${reviewCount})` : ""}
          </p>
        </div>

        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
        {roomDetails ? <p className="text-sm text-slate-600">{roomDetails}</p> : null}
        {dateLabel ? <p className="text-sm text-slate-600">{dateLabel}</p> : null}

        <p className="text-sm text-slate-700">
          {originalPrice ? <span className="mr-2 text-slate-500 line-through">${originalPrice}</span> : null}
          <span className="font-semibold text-slate-900">{priceLabel ?? `$${listing.pricePerNight} per night`}</span>
        </p>

        <Link
          href={`/rooms/${listing.id}`}
          className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-800 transition hover:border-slate-500"
        >
          View room
        </Link>
      </div>
    </article>
  );
};
