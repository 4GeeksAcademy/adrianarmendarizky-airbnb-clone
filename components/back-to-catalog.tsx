import Link from "next/link";

export const BackToCatalog = () => {
  return (
    <Link
      href="/catalog"
      className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-800"
    >
      ← Back to catalog
    </Link>
  );
};
