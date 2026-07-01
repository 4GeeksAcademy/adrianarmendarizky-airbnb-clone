import Link from "next/link";

interface BottomNavBarProps {
  active: "explore" | "wishlists" | "login";
}

export const BottomNavBar = ({ active }: BottomNavBarProps) => {
  const itemClass = (isActive: boolean) =>
    `flex flex-col items-center gap-1 text-xs ${isActive ? "text-rose-600" : "text-slate-500"}`;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-6 py-2 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-md items-center justify-between">
        <li>
          <Link href="/" className={itemClass(active === "explore")}>
            <span aria-hidden>🔎</span>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <button type="button" className={itemClass(active === "wishlists")}>
            <span aria-hidden>♡</span>
            <span>Wishlists</span>
          </button>
        </li>
        <li>
          <button type="button" className={itemClass(active === "login")}>
            <span aria-hidden>👤</span>
            <span>Log in</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
