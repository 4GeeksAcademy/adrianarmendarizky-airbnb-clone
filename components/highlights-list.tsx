const highlights = [
  { title: "Amazing outdoor space", description: "Enjoy a private patio and firepit views." },
  { title: "Designed for staying cool", description: "AC and ceiling fans in every room." },
  { title: "Self check-in", description: "Smart lock entry with personal code." },
];

export const HighlightsList = () => {
  return (
    <section className="space-y-3 border-b border-slate-200 py-5">
      {highlights.map((item) => (
        <article key={item.title} className="flex gap-3">
          <span aria-hidden className="mt-1 text-base">✨</span>
          <div>
            <p className="font-medium text-slate-900">{item.title}</p>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
