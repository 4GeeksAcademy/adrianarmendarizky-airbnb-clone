interface ResultsHeaderProps {
  count: number;
  sortOrder: "asc" | "desc";
  onToggleSort: () => void;
}

export const ResultsHeader = ({
  count,
  sortOrder,
  onToggleSort,
}: ResultsHeaderProps) => {
  return (
    <section className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-700">{count} stays found</p>
      <button
        type="button"
        onClick={onToggleSort}
        className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-800"
      >
        Sort by price: {sortOrder === "asc" ? "Low to high" : "High to low"}
      </button>
    </section>
  );
};
