interface LocationMapProps {
  location: string;
}

export const LocationMap = ({ location }: LocationMapProps) => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <h2 className="text-xl font-semibold text-slate-900">Where you&apos;ll be</h2>
      <p className="text-sm text-slate-600">{location}</p>
      <div className="relative h-52 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-100 to-sky-100">
        <span className="absolute left-10 top-16 rounded-full bg-white px-3 py-1 text-xs shadow">🥾 Trail</span>
        <span className="absolute right-12 top-10 rounded-full bg-white px-3 py-1 text-xs shadow">🍴 Food</span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-3 py-1 text-xs text-white shadow">🏠 Stay</span>
      </div>
      <p className="text-xs text-slate-500">Exact location will be provided after booking.</p>
    </section>
  );
};
