"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { FeeDisclaimerBanner } from "@/components/fee-disclaimer-banner";
import { Footer } from "@/components/footer";
import { ListingCard } from "@/components/listing-card";
import { LoadingState } from "@/components/loading-state";
import { MapToggleButton } from "@/components/map-toggle-button";
import { MapPlaceholder } from "@/components/map-placeholder";
import { QuickFilterChips } from "@/components/quick-filter-chips";
import { ResultsHeader } from "@/components/results-header";
import { TopFilterBar } from "@/components/top-filter-bar";
import { listings } from "@/data/mock-data";
import type { Listing } from "@/types/models";

const CatalogContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() ?? "";
  const [results, setResults] = useState<Listing[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [mapMode, setMapMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(listings);
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const visibleResults = useMemo(() => {
    const filtered = results.filter((listing) => listing.title.toLowerCase().includes(query));

    return filtered.sort((left, right) =>
      sortOrder === "asc"
        ? left.pricePerNight - right.pricePerNight
        : right.pricePerNight - left.pricePerNight,
    );
  }, [query, results, sortOrder]);

  return (
    <>
      <main className="min-h-screen bg-slate-50 pb-24 md:pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 md:px-6 lg:px-8">
          <TopFilterBar
            queryLabel={query ? `Homes matching \"${query}\"` : "Homes in Red River Gorge"}
            metaLabel="Jun 26-28 (+/-1) · 2 guests"
          />
          <QuickFilterChips />

          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-slate-900">Catalog</h1>
            <Link href="/" className="text-sm font-medium text-slate-600 underline">
              Back to home
            </Link>
          </div>

          {isLoading ? (
            <LoadingState label="Loading catalog" />
          ) : (
            <>
              <MapPlaceholder compact />
              <FeeDisclaimerBanner />
              <ResultsHeader
                count={visibleResults.length}
                sortOrder={sortOrder}
                onToggleSort={() => setSortOrder((current) => (current === "asc" ? "desc" : "asc"))}
              />

              {mapMode ? (
                <MapPlaceholder />
              ) : (
                <div className="md:flex md:items-start md:gap-8 lg:gap-10">
                  <div className="space-y-4 md:flex-1 md:space-y-5">
                    {visibleResults.map((listing, index) => (
                      <ListingCard
                        key={listing.id}
                        listing={listing}
                        mode="list"
                        badgeLabel={index % 3 === 0 ? "Guest favorite" : undefined}
                        reviewCount={Math.floor(70 + listing.rating * 10)}
                        subtitle="Cozy Couples Cabin in the Best Part of RRG!"
                        roomDetails="1 bedroom · 1 queen bed · 1 bath"
                        dateLabel="Jun 26 - 28"
                        originalPrice={index % 2 === 0 ? listing.pricePerNight + 60 : undefined}
                        priceLabel={`$${listing.pricePerNight * 2} for 2 nights`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 md:mt-0 md:w-80 md:shrink-0">
                    <MapPlaceholder />
                  </div>
                </div>
              )}

              <MapToggleButton active={mapMode} onToggle={() => setMapMode((current) => !current)} />
            </>
          )}
        </div>
      </main>

      <Footer />
      <BottomNavBar active="explore" />
    </>
  );
};

const CatalogPage = () => {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
          <LoadingState label="Loading catalog" />
        </main>
      }
    >
      <CatalogContent />
    </Suspense>
  );
};

export default CatalogPage;
