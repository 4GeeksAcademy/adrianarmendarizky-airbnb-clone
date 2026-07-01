interface DescriptionSectionProps {
  location: string;
}

export const DescriptionSection = ({ location }: DescriptionSectionProps) => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      <p className="italic text-slate-700">Fiber-optic internet and a restful, design-forward layout.</p>
      <p className="text-sm text-slate-600">
        This home in {location} is built for slow mornings and easy evenings, with a full kitchen,
        quality linens, and thoughtful lighting throughout.
      </p>
      <button
        type="button"
        className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800"
      >
        Show more
      </button>
    </section>
  );
};
