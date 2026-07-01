interface MapPlaceholderProps {
  compact?: boolean;
}

export const MapPlaceholder = ({ compact = false }: MapPlaceholderProps) => {
  return (
    <div
      className={`relative mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 text-sm font-medium text-slate-700 ${
        compact ? "h-28 sm:h-32 md:h-36" : "h-52 sm:h-56 md:h-64"
      }`}
    >
      <span className="rounded-full bg-white px-3 py-1 shadow">Map</span>
      <span className="absolute left-6 top-6 rounded-full bg-white px-2 py-1 text-xs">$142</span>
      <span className="absolute right-8 top-10 rounded-full bg-white px-2 py-1 text-xs">$198</span>
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-2 py-1 text-xs text-white">
        Stay
      </span>
    </div>
  );
};
