"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { CategoryTabs } from "@/components/category-tabs";
import { Footer } from "@/components/footer";
import { InspirationSection } from "@/components/inspiration-section";
import { ListingCard } from "@/components/listing-card";
import { ListingCarouselSection } from "@/components/listing-carousel-section";
import { LoadingState } from "@/components/loading-state";
import { SearchBar } from "@/components/search-bar";
import { listings } from "@/data/mock-data";
import type { Listing } from "@/types/models";

const categoryByListingId: Record<string, string> = {
  "listing-1": "Homes", "listing-2": "Homes", "listing-3": "Experiences",
  "listing-4": "Homes", "listing-5": "Services", "listing-6": "Homes",
  "listing-7": "Homes", "listing-8": "Homes", "listing-9": "Homes",
  "listing-10": "Homes", "listing-11": "Homes", "listing-12": "Homes",
  "listing-13": "Homes", "listing-14": "Homes", "listing-15": "Homes",
  "listing-16": "Experiences", "listing-17": "Homes", "listing-18": "Homes",
  "listing-19": "Services", "listing-20": "Homes",
};

const categories = ["All", "Homes", "Experiences", "Services"];

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [homeListings, setHomeListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHomeListings(listings);
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => {
    return homeListings.filter((listing) => {
      const matchesQuery = listing.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || categoryByListingId[listing.id] === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, homeListings, query]);

  const sectionGroups = useMemo(
    () => [
      {
        title: "Popular homes in Panama City Beach",
        subtitle: "Perfect for waterfront weekends",
        listings: visibleListings.slice(0, 6),
      },
      {
        title: "Cabins near Red River Gorge",
        listings: visibleListings.slice(4, 10),
      },
      {
        title: "Experiences this week",
        subtitle: "Hosted activities with top ratings",
        listings: visibleListings.slice(10, 16),
        experience: true,
      },
    ],
    [visibleListings],
  );

  return (
    <>
      <main className="min-h-screen bg-slate-50 pb-24 md:pb-14">
        <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </div>

        <section className="mx-auto w-full max-w-7xl space-y-6 px-4 pt-5 md:space-y-10 md:px-6 md:pt-7 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-slate-600">Explore stays and open any card to see room details.</p>
            <Link
              href={{ pathname: "/catalog", query: query ? { query } : {} }}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Open catalog
            </Link>
          </div>

          {isLoading ? (
            <LoadingState label="Loading listings" />
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-900">Explore all stays</h2>
                <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3">
                  {visibleListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} mode="grid" />
                  ))}
                </div>
              </section>

              {sectionGroups.map((section) => (
                <ListingCarouselSection
                  key={section.title}
                  title={section.title}
                  subtitle={section.subtitle}
                  listings={section.listings}
                  experience={section.experience}
                />
              ))}

              <InspirationSection />
            </>
          )}
        </section>
      </main>

      <Footer />
      <BottomNavBar active="explore" />
    </>
  );
};

export default HomePage;
