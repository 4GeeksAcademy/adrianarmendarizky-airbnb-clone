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

# Page Structures
The following describes the structure of each of the 3 pages, obtained via vision prompting.

## Home
Observed page structure (top to bottom)

- SearchBar — sticky pill-shaped button, full-width, magnifying-glass icon + "Start your search" placeholder text. Persists at the top during scroll.
- CategoryTabs — horizontally scrollable row of pill buttons directly below the search bar (All 🌐, Homes 🏠, Experiences 🎈, Services, +more off-screen). One tab is active at a time, shown bold/underlined.
- ListingCarouselSection (repeated ~8 times with different data) — a reusable section: a heading (e.g. "Popular homes in Panama City Beach"), an optional one-line subtitle (only present on some sections, e.g. the hotels row mentions an Airbnb-credit perk), a circular "see more" arrow button top-right of the heading, and a horizontally scrollable row of cards with a visible scroll-position indicator on the right edge.
- InspirationSection — a heading ("Inspiration for future getaways"), a horizontally scrollable tab list (Popular / Arts & culture / Beach / Mountains / …, first tab active/bold), followed by a two-column grid of plain text links: city name (bold) + category subtitle (e.g. "Villa rentals").
- BottomNavBar — sticky, mobile-only, three tabs: Explore (search icon, active/red), Wishlists (heart icon), Log in (person icon).
- Footer — reached at full scroll, while SearchBar/CategoryTabs stay pinned. Contains three stacked link columns (Support, Hosting, Airbnb), a language/currency row (globe icon "English (US)", "$ USD"), social icons (Facebook, X, Instagram), and a legal row (copyright + Privacy · Terms · Your Privacy Choices).

### Two card variants inside ListingCarouselSection
ListingCard: image, optional "Guest favorite" badge (top-left overlay), heart/favorite toggle button (top-right overlay), title (e.g. "Condo in Panama City"), price formatted as "$X for Y nights", star rating.
ExperienceCard: same image/heart/badge layout, but badge reads "Popular" instead of "Guest favorite", and price is formatted as "From $X / group" or "/ guest" instead of per-night.

## Catalog
- TopFilterBar — sticky header replacing Home's SearchBar. Three elements: a back-arrow button (←, returns to Home), a centered two-line search summary button (e.g. "Homes in Red River Gorge" / "Jun 26–28 (±1) · 2 guests") that re-opens search when tapped, and a filter icon button (sliders) on the right that opens a full filter modal.
- QuickFilterChips — horizontally scrollable pill row directly below the TopFilterBar (e.g. "Allows pets," "Hot tub," "Self check-in," "Free parking," +more off-screen). Each is a toggle, distinct from the full filter modal opened by the sliders icon.
- MapPreview — a small static-looking map at the very top of the results list, showing price-bubble pins for nearby listings and one highlighted location pin with a name label. Likely tappable to expand into a full map view (can't confirm interaction from static screenshots — worth verifying on the live site).
- FeeDisclaimerBanner — a single-line callout ("🏷️ Prices include all fees") appearing once, between the map and the first listing card.
- MapToggleButton — a floating pill button ("Map" + grid icon) that stays fixed at the same position on screen while the list scrolls underneath it. Toggles between list view and full map view.

### Modified component: ListingResultCard (vertical-list variant, replaces Home's horizontal ListingCard)
- Image carousel: multiple swipeable photos per listing, with a dot-position indicator at the bottom of the image and explicit circular prev/next arrow buttons below the image (visible on tap, not just swipe).
- Optional "Guest favorite" trophy badge, top-left overlay.
- Heart/favorite toggle button, top-right overlay.
- Title + star rating with review count in parentheses (e.g. "★ 4.92 (107)"), right-aligned on the same line as the title.
- One-line tagline/subtitle (e.g. "Cozy Couples Cabin in the Best Part of RRG!").
- Room details line (e.g. "1 bedroom · 1 queen bed · 1 bath").
- Date line (e.g. "Jun 26 – 28").
- Price block: optional strikethrough original price + a discounted price, suffixed "for X nights." Some listings show only a single price with no strikethrough — so the strikethrough price must be optional/conditional, not assumed present.

### Reused from Home (no changes)
BottomNavBar (Explore / Wishlists / Log in) — identical, confirming it belongs in the shared layout, not rebuilt per page.

NOTE: Home uses horizontal carousels per section; Catalog uses a single vertical scrolling list.

## Room detail
Observed page structure (top to bottom)

- PhotoGallery — swipeable hero image with a photo-count badge overlay (e.g. "1/28"), implying a full gallery viewer exists behind it.
- GalleryActionButtons — floating circular back-arrow, share icon, and heart/favorite icon overlaid directly on the hero image (not a solid header bar).
- ListingHeader — title, subtitle (e.g. "Entire cabin in Slade, Kentucky"), stats line (e.g. "2 guests · 1 bedroom · 1 bed · 1 bath"), rating line (e.g. "★ 4.81 · 266 reviews").
- FeeDisclaimerBanner — reused from Catalog.
- HostMiniPreview — small "Hosted by [Name]" row with avatar/logo icon.
- StickyBookingBar — persists across the entire page scroll: price, "For X nights · [dates]" subtext, and a "Reserve" button. Page-level, not section-level.
- HighlightsList — repeated icon + bold title + one-line description rows (e.g. "Amazing outdoor space," "Designed for staying cool," "Self check-in").
- DescriptionSection — an italicized callout line (e.g. "*Fiber-optic Internet*"), a paragraph, truncated with a full-width "Show more" button.
- SleepingArrangements ("Where you'll sleep") — image thumbnail + room label (e.g. "Bedroom") + bed config (e.g. "1 queen bed"). Spec as a repeatable list item for multi-bedroom listings.
- AmenitiesList ("What this place offers") — icon + label rows; supports a "not included" strikethrough state (e.g. "Carbon monoxide alarm"); ends with a "Show all N amenities" button.
- LocationMap ("Where you'll be") — address text, an embedded map with custom POI icons (camping, photo spot, restaurant) plus one house-pin for the general listing area, a fullscreen-expand button, and a disclaimer below ("Exact location will be provided after booking").
- NeighborhoodHighlights — heading + paragraph, truncated with an inline "Show more →" link (text link with chevron, not the full-width gray button used elsewhere).
- AvailabilityCalendar ("X nights in [City]") — heading with date-range subtitle, month-navigable calendar grid, start/end dates highlighted solid, in-range dates highlighted lighter, "Clear dates" link.
- RatingsSummary — large rating + review count, "Show full ratings" link, a horizontally scrollable row of tag chips (e.g. "Hiking 34," "Location 90"), a horizontally scrollable row of review cards (avatar, name, location, stars, date, truncated text + "Show more"), "Show all X reviews" button.
- HostProfileCard ("Meet your host") — host logo/avatar, name, Superhost badge, three stats (reviews, rating, years hosting), bio paragraph.
- HostDetailsSection — "[Name] is a Superhost" blurb, a grid of co-host avatar+name pairs, response-rate/response-time text, "Message host" button, payment-safety disclaimer line.
- ThingsToKnowSection — three rows (Cancellation policy, House rules, Safety & property), each with icon + bold label + short preview + chevron, each opening a shared modal. Followed by a "Report this listing" link and a breadcrumb trail (Airbnb › Country › State › County).
- DetailModal (shared) — close button top-right, heading, structured content passed as props (e.g. refund tiers with date/time + description). Reused across all three "Things to know" rows rather than built three separate times.
- Footer — reused, identical to Home/Catalog.

NOTE: Room detail does NOT reuse BottomNavBar — it's replaced by StickyBookingBar. The shared layout should treat the bottom nav as page-specific (Home/Catalog only), not global.