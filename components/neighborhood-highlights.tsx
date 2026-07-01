interface NeighborhoodHighlightsProps {
  location: string;
}

export const NeighborhoodHighlights = ({ location }: NeighborhoodHighlightsProps) => {
  return (
    <section className="space-y-2 border-b border-slate-200 py-5">
      <h2 className="text-xl font-semibold text-slate-900">Neighborhood highlights</h2>
      <p className="text-sm text-slate-600">
        {location} combines easy trail access, local coffee spots, and a relaxed evening scene with
        fewer crowds than nearby tourist hubs.
      </p>
      <button type="button" className="text-sm font-medium text-slate-800 underline">
        Show more →
      </button>
    </section>
  );
};
