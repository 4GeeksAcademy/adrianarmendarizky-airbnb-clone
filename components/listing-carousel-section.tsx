import { ListingCard } from "@/components/listing-card";
import type { Listing } from "@/types/models";

interface ListingCarouselSectionProps {
  title: string;
  subtitle?: string;
  listings: Listing[];
  experience?: boolean;
}

export const ListingCarouselSection = ({
  title,
  subtitle,
  listings,
  experience = false,
}: ListingCarouselSectionProps) => {
  return (
    <section className="space-y-3 md:space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        <button
          type="button"
          className="mt-1 h-8 w-8 rounded-full border border-slate-300 text-sm text-slate-700"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:gap-4 md:overflow-x-auto md:pb-1">
        {listings.map((listing) => (
          <div key={listing.id} className="md:min-w-[220px] md:max-w-[250px] md:shrink-0 lg:min-w-[240px] lg:max-w-[270px]">
            <ListingCard
              listing={listing}
              mode="grid"
              badgeLabel={experience ? "Popular" : "Guest favorite"}
              priceLabel={experience ? `From $${listing.pricePerNight} / guest` : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
