interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

export const RoomHeader = ({ title, rating, reviewCount, location }: RoomHeaderProps) => {
  return (
    <section className="space-y-2 border-b border-slate-200 pb-5">
      <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-700">
        ★ {rating.toFixed(2)} · {reviewCount} reviews
      </p>
      <p className="text-sm text-slate-600">{location}</p>
    </section>
  );
};
