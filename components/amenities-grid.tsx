interface Amenity {
  icon: string;
  label: string;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <h2 className="text-lg font-semibold text-slate-900">What this place offers</h2>
      <div className="grid grid-cols-2 gap-2">
        {amenities.map((amenity) => (
          <div
            key={`${amenity.icon}-${amenity.label}`}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
          >
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-xs font-semibold">
              {amenity.icon}
            </span>
            {amenity.label}
          </div>
        ))}
      </div>
    </section>
  );
};
