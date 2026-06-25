# Product Description
This project clones the core front-end experience of Airbnb as a reference for a component architecture for a vacation rental platform rebuild. The goal is to correctly identify what components exist, what data each one needs, and how they connect across views, before any custom design system gets built on top of this foundation.

# User Description
The end user is a traveler searching for short-term lodging. They arrive to the platform with a general intent (where am I going, when, how many guests) rather than a specific listing in mind. They will browse a set of options and narrow down to one listing before deciding whether to book. The interface needs to support that narrowing-down journey across three screens: discovery (Home), comparison (Catalog), and decision (Room detail).

# Page Descriptions
- Home: orient themselves and start a search — enter a destination, set dates/guests, and either browse curated listings or move straight into search results.
- Catalog: compare many listings at a glance against their search criteria (price, location, dates) and select one to learn more about.
- Room detail: get enough information about a single listing — photos, amenities, price breakdown, host info, reviews — to decide whether to book.

# Tech Stack & Constraints
Built in Next.js using React components. Design mobile-first for a 375px viewport, with adjustments at the 768px breakpoint for desktop. Navigation between all three pages uses Next.js client-side routing (`<Link>` / `useRouter`) — no full page reloads. Components are kept small and single-responsibility; shared UI (e.g. a listing card used on both Home and Catalog) should be built once and reused, not redefined per page.

# Build Scope & Evaluation Priorities
The component breakdowns below come from vision-prompting real Airbnb screenshots, so they're visually accurate — but the assignment rubric defines a smaller *required* surface. Each component below is tagged:
- **[REQUIRED]** — needed to pass evaluation, possibly in simplified form (noted inline where the rubric asks for less than what's visually observed).
- **[NICE-TO-HAVE]** — visually real, not evaluated. Build only after all [REQUIRED] items work, and only if a component stays under ~50 lines of JSX/logic.

Global constraints from the rubric (apply to all pages, not called out per-component below):
- No pre-built UI component library (no shadcn, MUI, Ant Design, Chakra) — Tailwind utility classes and custom components only.
- All components are `const` functional components, one per file in `/components`, no component exceeding ~50 lines of JSX + logic.
- All internal navigation uses `<Link>` — never a plain `<a>` tag.
- TypeScript interfaces required for the `Listing` and `Room` data shapes (see Data Models below).

Two intentional deviations from literal Airbnb behavior — follow the rubric over the screenshots here:
- **Home SearchBar**: rubric wants live client-side filtering of the listing grid as the user types (`useState`), not Airbnb's real destination-picker overlay.
- **Catalog map**: rubric wants a static placeholder box (gray box, text "Map") by default. A real interactive map is an *optional* challenge only, attempted after every [REQUIRED] item is done.

# Data Models
Starting TypeScript shapes for the two data types referenced across all three pages — keep these consistent rather than redefining shape per component.

```ts
interface Listing {
  id: string;
  title: string;
  pricePerNight: number;
  rating: number;
  photoUrl: string; // placeholder image for now
}

interface Room extends Listing {
  reviewCount: number;
  location: string;
  host: {
    name: string;
    yearsHosting: number;
    avatarUrl: string;
  };
  amenities: { icon: string; label: string }[];
  photos: string[]; // hardcoded array for the gallery's Previous/Next buttons
}
```

# Page Structures
The following describes the structure of each of the 3 pages, obtained via vision prompting.

## Home
Required by rubric (functional, not visible in screenshots): live search-filter via `useState`; category row active-state via `useState`; data loads via `useEffect` + simulated `setTimeout` delay with a visible loading state; card grid is 1 column on mobile, multi-column on desktop.

Observed page structure (top to bottom)

- SearchBar **[REQUIRED]** — sticky pill-shaped button, full-width, magnifying-glass icon + "Start your search" placeholder text. Persists at the top during scroll. Behavior note: implement as a live-filter text input per the rubric, not a destination-picker overlay.
- CategoryTabs **[REQUIRED]** — horizontally scrollable row of pill buttons directly below the search bar (All 🌐, Homes 🏠, Experiences 🎈, Services, +more off-screen). One tab is active at a time, shown bold/underlined.
- ListingCarouselSection **[NICE-TO-HAVE]** (repeated ~8 times with different data) — a reusable section: a heading (e.g. "Popular homes in Panama City Beach"), an optional one-line subtitle (only present on some sections, e.g. the hotels row mentions an Airbnb-credit perk), a circular "see more" arrow button top-right of the heading, and a horizontally scrollable row of cards with a visible scroll-position indicator on the right edge. Rubric only requires a single responsive grid of cards — build that first; this multi-carousel structure is visual fidelity on top.
- InspirationSection **[NICE-TO-HAVE]** — a heading ("Inspiration for future getaways"), a horizontally scrollable tab list (Popular / Arts & culture / Beach / Mountains / …, first tab active/bold), followed by a two-column grid of plain text links: city name (bold) + category subtitle (e.g. "Villa rentals").
- BottomNavBar **[NICE-TO-HAVE]** — sticky, mobile-only, three tabs: Explore (search icon, active/red), Wishlists (heart icon), Log in (person icon).
- Footer **[NICE-TO-HAVE]** — reached at full scroll, while SearchBar/CategoryTabs stay pinned. Contains three stacked link columns (Support, Hosting, Airbnb), a language/currency row (globe icon "English (US)", "$ USD"), social icons (Facebook, X, Instagram), and a legal row (copyright + Privacy · Terms · Your Privacy Choices).

### Two card variants inside ListingCarouselSection
ListingCard **[REQUIRED, simplified]**: rubric only requires a photo placeholder, title, price per night, and star rating. Full visual version — image, optional "Guest favorite" badge (top-left overlay), heart/favorite toggle button (top-right overlay), title (e.g. "Condo in Panama City"), price formatted as "$X for Y nights" — badge and heart are optional additions once the required fields work.
ExperienceCard **[NICE-TO-HAVE]**: same image/heart/badge layout, but badge reads "Popular" instead of "Guest favorite", and price is formatted as "From $X / group" or "/ guest" instead of per-night. Not distinguished in the rubric.

## Catalog
Required by rubric: results header with count + ascending/descending price sort via `useState`; reuse the same ListingCard from Home; map renders as a static placeholder box ("Map" text on a gray box) by default — a real interactive map is an optional challenge only, attempted after all required items are done.

- TopFilterBar **[NICE-TO-HAVE]** — sticky header replacing Home's SearchBar. Three elements: a back-arrow button (←, returns to Home), a centered two-line search summary button (e.g. "Homes in Red River Gorge" / "Jun 26–28 (±1) · 2 guests") that re-opens search when tapped, and a filter icon button (sliders) on the right that opens a full filter modal. Rubric only requires a results header (count + sort control), not the full search-summary bar.
- QuickFilterChips **[NICE-TO-HAVE]** — horizontally scrollable pill row directly below the TopFilterBar (e.g. "Allows pets," "Hot tub," "Self check-in," "Free parking," +more off-screen). Each is a toggle, distinct from the full filter modal opened by the sliders icon.
- MapPreview **[SUPERSEDED BY RUBRIC]** — a small static-looking map at the very top of the results list, showing price-bubble pins for nearby listings and one highlighted location pin with a name label. Rubric wants a simple static placeholder box instead of this — only build the real version as part of the optional map challenge.
- FeeDisclaimerBanner **[NICE-TO-HAVE]** — a single-line callout ("🏷️ Prices include all fees") appearing once, between the map and the first listing card.
- MapToggleButton **[OPTIONAL CHALLENGE ONLY]** — a floating pill button ("Map" + grid icon) that stays fixed at the same position on screen while the list scrolls underneath it. Toggles between list view and full map view. Only relevant if attempting the real interactive map.

### Modified component: ListingResultCard (vertical-list variant, replaces Home's horizontal ListingCard)
**[REQUIRED, simplified]** — same base fields as ListingCard (photo, title, price, rating). Full visual version below is optional polish:
- Image carousel: multiple swipeable photos per listing, with a dot-position indicator at the bottom of the image and explicit circular prev/next arrow buttons below the image (visible on tap, not just swipe).
- Optional "Guest favorite" trophy badge, top-left overlay.
- Heart/favorite toggle button, top-right overlay.
- Title + star rating with review count in parentheses (e.g. "★ 4.92 (107)"), right-aligned on the same line as the title.
- One-line tagline/subtitle (e.g. "Cozy Couples Cabin in the Best Part of RRG!").
- Room details line (e.g. "1 bedroom · 1 queen bed · 1 bath").
- Date line (e.g. "Jun 26 – 28").
- Price block: optional strikethrough original price + a discounted price, suffixed "for X nights." Some listings show only a single price with no strikethrough — so the strikethrough price must be optional/conditional, not assumed present.

### Reused from Home (no changes)
BottomNavBar **[NICE-TO-HAVE]** (Explore / Wishlists / Log in) — identical, confirming it belongs in the shared layout, not rebuilt per page.

NOTE: Home uses horizontal carousels per section; Catalog uses a single vertical scrolling list.

## Room detail
Required by rubric — only 5 sections, each simplified from the full visual breakdown below: photo gallery (with Previous/Next buttons via `useState`, cycling a hardcoded photo array), listing header, host info row, amenities grid, and booking card (price, a `useState` guest counter with min/max bounds, and a CTA button). Data loads via `useEffect` using the `id` from the URL, simulated with `setTimeout` and a visible loading state. Everything else below is real Airbnb fidelity, not evaluated — build only after the 5 required sections work.

Observed page structure (top to bottom)

- PhotoGallery **[REQUIRED, simplified]** — rubric wants explicit Previous/Next buttons cycling a hardcoded photo array, not swipe gestures. Visually: swipeable hero image with a photo-count badge overlay (e.g. "1/28").
- GalleryActionButtons **[NICE-TO-HAVE]** — floating circular back-arrow, share icon, and heart/favorite icon overlaid directly on the hero image (not a solid header bar).
- ListingHeader **[REQUIRED, simplified]** — rubric wants title, star rating, review count, and location. Visually also includes a subtitle (e.g. "Entire cabin in Slade, Kentucky") and stats line (e.g. "2 guests · 1 bedroom · 1 bed · 1 bath") — fine to keep as polish.
- FeeDisclaimerBanner **[NICE-TO-HAVE]** — reused from Catalog.
- HostMiniPreview / HostInfoRow **[REQUIRED, simplified]** — rubric wants avatar placeholder, host name, and years hosting only — this satisfies the "host info row" requirement on its own; the richer HostProfileCard/HostDetailsSection below are optional.
- BookingCard / StickyBookingBar **[REQUIRED]** — price per night, a new **GuestCounter** sub-component (`useState`, increment/decrement within a min/max range — not present in the real screenshots, add it now), and a CTA button ("Reserve"). Visually this persists across the entire page scroll.
- HighlightsList **[NICE-TO-HAVE]** — repeated icon + bold title + one-line description rows (e.g. "Amazing outdoor space," "Designed for staying cool," "Self check-in").
- DescriptionSection **[NICE-TO-HAVE]** — an italicized callout line (e.g. "*Fiber-optic Internet*"), a paragraph, truncated with a full-width "Show more" button.
- SleepingArrangements ("Where you'll sleep") **[NICE-TO-HAVE]** — image thumbnail + room label (e.g. "Bedroom") + bed config (e.g. "1 queen bed"). Spec as a repeatable list item for multi-bedroom listings.
- AmenitiesList ("What this place offers") **[REQUIRED, simplified]** — rubric wants a grid of icon + label pairs only. Visually also supports a "not included" strikethrough state (e.g. "Carbon monoxide alarm") and a "Show all N amenities" button — optional polish.
- LocationMap ("Where you'll be") **[NICE-TO-HAVE]** — address text, an embedded map with custom POI icons (camping, photo spot, restaurant) plus one house-pin for the general listing area, a fullscreen-expand button, and a disclaimer below ("Exact location will be provided after booking").
- NeighborhoodHighlights **[NICE-TO-HAVE]** — heading + paragraph, truncated with an inline "Show more →" link (text link with chevron, not the full-width gray button used elsewhere).
- AvailabilityCalendar ("X nights in [City]") **[NICE-TO-HAVE]** — heading with date-range subtitle, month-navigable calendar grid, start/end dates highlighted solid, in-range dates highlighted lighter, "Clear dates" link. (Functional date picker + price calc is the rubric's *optional challenge*, not required.)
- RatingsSummary **[NICE-TO-HAVE]** — large rating + review count, "Show full ratings" link, a horizontally scrollable row of tag chips (e.g. "Hiking 34," "Location 90"), a horizontally scrollable row of review cards (avatar, name, location, stars, date, truncated text + "Show more"), "Show all X reviews" button.
- HostProfileCard ("Meet your host") **[NICE-TO-HAVE]** — host logo/avatar, name, Superhost badge, three stats (reviews, rating, years hosting), bio paragraph.
- HostDetailsSection **[NICE-TO-HAVE]** — "[Name] is a Superhost" blurb, a grid of co-host avatar+name pairs, response-rate/response-time text, "Message host" button, payment-safety disclaimer line.
- ThingsToKnowSection **[NICE-TO-HAVE]** — three rows (Cancellation policy, House rules, Safety & property), each with icon + bold label + short preview + chevron, each opening a shared modal. Followed by a "Report this listing" link and a breadcrumb trail (Airbnb › Country › State › County).
- DetailModal (shared) **[NICE-TO-HAVE]** — close button top-right, heading, structured content passed as props (e.g. refund tiers with date/time + description). Reused across all three "Things to know" rows rather than built three separate times.
- Footer **[NICE-TO-HAVE]** — reused, identical to Home/Catalog.

NOTE: Room detail does NOT reuse BottomNavBar — it's replaced by StickyBookingBar. The shared layout should treat the bottom nav as page-specific (Home/Catalog only), not global.

NOTE: Per the rubric, a back button or breadcrumb returning to the Catalog page is **[REQUIRED]** here — the breadcrumb trail in ThingsToKnowSection above is visual fidelity, but a dedicated back-to-Catalog control needs to exist regardless of whether ThingsToKnowSection gets built.