"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AvailabilityCalendar } from "@/components/availability-calendar";
import { AmenitiesGrid } from "@/components/amenities-grid";
import { BackToCatalog } from "@/components/back-to-catalog";
import { BookingCard } from "@/components/booking-card";
import { DescriptionSection } from "@/components/description-section";
import { FeeDisclaimerBanner } from "@/components/fee-disclaimer-banner";
import { Footer } from "@/components/footer";
import { HighlightsList } from "@/components/highlights-list";
import { HostDetailsSection } from "@/components/host-details-section";
import { HostInfoRow } from "@/components/host-info-row";
import { HostProfileCard } from "@/components/host-profile-card";
import { LoadingState } from "@/components/loading-state";
import { LocationMap } from "@/components/location-map";
import { NeighborhoodHighlights } from "@/components/neighborhood-highlights";
import { PhotoGallery } from "@/components/photo-gallery";
import { RatingsSummary } from "@/components/ratings-summary";
import { RoomHeader } from "@/components/room-header";
import { SleepingArrangements } from "@/components/sleeping-arrangements";
import { ThingsToKnowSection } from "@/components/things-to-know-section";
import { rooms } from "@/data/mock-data";
import type { Room } from "@/types/models";

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const roomId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(rooms.find((item) => item.id === roomId) ?? null);
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [roomId]);

  if (isLoading) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <LoadingState label="Loading room details" />
      </main>
    );
  }

  if (!room) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <BackToCatalog />
        <p className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Room not found.
        </p>
      </main>
    );
  }

  return (
    <>
      <main className="bg-slate-50 pb-12">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-5 md:gap-10 md:px-6 md:py-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div className="space-y-4 md:space-y-6">
            <BackToCatalog />
            <PhotoGallery photos={room.photos} title={room.title} />
            <RoomHeader
              title={room.title}
              rating={room.rating}
              reviewCount={room.reviewCount}
              location={room.location}
              subtitle={`Entire cabin in ${room.location.split(",")[0]}`}
              statsLine="2 guests · 1 bedroom · 1 bed · 1 bath"
            />

            <FeeDisclaimerBanner />
            <HostInfoRow
              name={room.host.name}
              yearsHosting={room.host.yearsHosting}
              avatarUrl={room.host.avatarUrl}
            />
            <HighlightsList />
            <DescriptionSection location={room.location} />
            <SleepingArrangements photoUrl={room.photos[1] ?? room.photos[0]} />
            <AmenitiesGrid amenities={room.amenities} />
            <LocationMap location={room.location} />
            <NeighborhoodHighlights location={room.location} />
            <AvailabilityCalendar />
            <RatingsSummary rating={room.rating} reviewCount={room.reviewCount} />
            <HostProfileCard
              name={room.host.name}
              yearsHosting={room.host.yearsHosting}
              avatarUrl={room.host.avatarUrl}
              reviewCount={room.reviewCount}
              rating={room.rating}
            />
            <HostDetailsSection name={room.host.name} coHostAvatar={room.host.avatarUrl} />
            <ThingsToKnowSection />
          </div>

          <div>
            <BookingCard pricePerNight={room.pricePerNight} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RoomDetailPage;
