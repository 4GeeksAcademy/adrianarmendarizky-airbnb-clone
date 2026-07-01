"use client";

interface MapToggleButtonProps {
  active: boolean;
  onToggle: () => void;
}

export const MapToggleButton = ({ active, onToggle }: MapToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-20 left-1/2 z-20 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg md:bottom-6"
    >
      {active ? "List" : "Map"} ▦
    </button>
  );
};
