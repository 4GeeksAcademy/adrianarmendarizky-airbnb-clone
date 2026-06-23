# Tech stack and constraints
Built in Next.js using React components. Design mobile-first for a 375px viewport, with adjustments at the 768px breakpoint for desktop. Navigation between all three pages uses Next.js client-side routing (<Link> / useRouter) — no full page reloads. Components are kept small and single-responsibility; shared UI (e.g. a listing card used on both Home and Catalog) should be built once and reused, not redefined per page.

