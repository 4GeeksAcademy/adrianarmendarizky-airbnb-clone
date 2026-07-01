const tabs = ["Popular", "Arts & culture", "Beach", "Mountains", "Cabins", "Lake"];
const ideas = [
  { city: "Panama City Beach", type: "Villa rentals" },
  { city: "Asheville", type: "Cabin rentals" },
  { city: "Nashville", type: "Apartment rentals" },
  { city: "Slade", type: "Nature getaways" },
  { city: "Destin", type: "Beachfront stays" },
  { city: "Chicago", type: "Urban escapes" },
];

export const InspirationSection = () => {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
      <h2 className="text-xl font-semibold text-slate-900">Inspiration for future getaways</h2>
      <div className="flex flex-wrap gap-3 pb-1 md:flex-nowrap md:overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`shrink-0 border-b-2 pb-1 text-sm ${index === 0 ? "border-slate-900 font-semibold text-slate-900" : "border-transparent text-slate-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {ideas.map((idea) => (
          <div key={idea.city}>
            <p className="font-medium text-slate-900">{idea.city}</p>
            <p className="text-sm text-slate-600">{idea.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
