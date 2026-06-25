import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/models";

interface ListingCardProps {
  listing: Listing;
  mode?: "grid" | "list";
}

export const ListingCard = ({ listing, mode = "grid" }: ListingCardProps) => {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
        mode === "list" ? "md:flex" : ""
      }`}
    >
      <Image
        src={listing.photoUrl}
        alt={listing.title}
        width={900}
        height={600}
        className={`h-52 w-full object-cover ${mode === "list" ? "md:w-72" : ""}`}
      />
      <div className="space-y-2 p-4">
        <h3 className="font-semibold text-slate-900">{listing.title}</h3>
        <p className="text-sm text-slate-600">${listing.pricePerNight} per night</p>
        <p className="text-sm text-slate-700">★ {listing.rating.toFixed(2)}</p>
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
