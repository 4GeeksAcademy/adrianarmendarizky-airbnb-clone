import Link from "next/link";

interface TopFilterBarProps {
  queryLabel: string;
  metaLabel: string;
}

export const TopFilterBar = ({ queryLabel, metaLabel }: TopFilterBarProps) => {
  return (
    <header className="sticky top-0 z-20 mb-3 flex items-center gap-2 border-b border-slate-200 bg-white/95 px-2 py-3 backdrop-blur">
      <Link
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
        aria-label="Back"
      >
        ←
      </Link>
      <button
        type="button"
        className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-left shadow-sm"
      >
        <p className="text-sm font-semibold text-slate-900">{queryLabel}</p>
        <p className="text-xs text-slate-500">{metaLabel}</p>
      </button>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700"
        aria-label="Filters"
      >
        ☰
      </button>
    </header>
  );
};
