const tags = ["Hiking 34", "Location 90", "Cleanliness 95", "Check-in 98"];
const reviews = [
  { name: "Jules", text: "Beautiful place and super easy check-in. The porch at sunset was perfect." },
  { name: "Sana", text: "Loved the location and how quiet the evenings were. Would absolutely return." },
];

interface RatingsSummaryProps {
  rating: number;
  reviewCount: number;
}

export const RatingsSummary = ({ rating, reviewCount }: RatingsSummaryProps) => {
  return (
    <section className="space-y-4 border-b border-slate-200 py-5">
      <div className="flex items-end justify-between">
        <p className="text-3xl font-semibold text-slate-900">{rating.toFixed(2)} ★</p>
        <button type="button" className="text-sm font-medium text-slate-700 underline">Show full ratings</button>
      </div>
      <p className="text-sm text-slate-600">{reviewCount} reviews</p>
      <div className="flex flex-wrap gap-2 pb-1 md:flex-nowrap md:overflow-x-auto">
        {tags.map((tag) => (
          <span key={tag} className="shrink-0 rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700">{tag}</span>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 pb-1 md:flex md:overflow-x-auto">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-4 md:min-w-[250px]">
            <p className="font-medium text-slate-900">{review.name}</p>
            <p className="mt-2 text-sm text-slate-600">{review.text}</p>
            <button type="button" className="mt-2 text-xs font-medium text-slate-700 underline">Show more</button>
          </article>
        ))}
      </div>
      <button type="button" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800">
        Show all {reviewCount} reviews
      </button>
    </section>
  );
};
