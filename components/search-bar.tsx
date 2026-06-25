interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <span aria-hidden className="text-slate-500">
        🔍
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Start your search"
        className="w-full bg-transparent text-sm text-slate-900 outline-none"
      />
    </label>
  );
};
