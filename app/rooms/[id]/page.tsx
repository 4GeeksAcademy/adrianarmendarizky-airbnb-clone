"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AmenitiesGrid } from "@/components/amenities-grid";
import { BackToCatalog } from "@/components/back-to-catalog";
import { BookingCard } from "@/components/booking-card";
import { HostInfoRow } from "@/components/host-info-row";
import { LoadingState } from "@/components/loading-state";
import { PhotoGallery } from "@/components/photo-gallery";
import { RoomHeader } from "@/components/room-header";
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
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <LoadingState label="Loading room details" />
      </main>
    );
  }

  if (!room) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <BackToCatalog />
        <p className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Room not found.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 md:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <BackToCatalog />
          <PhotoGallery photos={room.photos} title={room.title} />
          <RoomHeader
            title={room.title}
            rating={room.rating}
            reviewCount={room.reviewCount}
            location={room.location}
          />
          <HostInfoRow
            name={room.host.name}
            yearsHosting={room.host.yearsHosting}
            avatarUrl={room.host.avatarUrl}
          />
          <AmenitiesGrid amenities={room.amenities} />
        </div>

        <div>
          <BookingCard pricePerNight={room.pricePerNight} />
        </div>
      </div>
    </main>
  );
};

export default RoomDetailPage;
