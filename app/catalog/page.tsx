"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { ListingCard } from "@/components/listing-card";
import { LoadingState } from "@/components/loading-state";
import { MapPlaceholder } from "@/components/map-placeholder";
import { ResultsHeader } from "@/components/results-header";
import { listings } from "@/data/mock-data";
import type { Listing } from "@/types/models";

const CatalogContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() ?? "";
  const [results, setResults] = useState<Listing[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
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

    return filtered.sort((left, right) => {
      return sortOrder === "asc"
        ? left.pricePerNight - right.pricePerNight
        : right.pricePerNight - left.pricePerNight;
    });
  }, [query, results, sortOrder]);

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      <div className="mx-auto w-full max-w-6xl px-4 py-6">
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
            <ResultsHeader
              count={visibleResults.length}
              sortOrder={sortOrder}
              onToggleSort={() => setSortOrder((current) => (current === "asc" ? "desc" : "asc"))}
            />
            <div className="md:flex md:items-start md:gap-6">
              <div className="space-y-4 md:flex-1">
                {visibleResults.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} mode="list" />
                ))}
              </div>
              <div className="mt-4 md:mt-0 md:w-72 md:shrink-0">
                <MapPlaceholder />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

const CatalogPage = () => {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-6xl px-4 py-6"><LoadingState label="Loading catalog" /></main>}>
      <CatalogContent />
    </Suspense>
  );
};

export default CatalogPage;
