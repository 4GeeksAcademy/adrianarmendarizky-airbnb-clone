interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryTabsProps) => {
  return (
    <div className="mt-3 flex flex-wrap gap-2 pb-1 md:flex-nowrap md:overflow-x-auto">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`shrink-0 border-b-2 px-1 pb-2 text-sm font-medium transition ${
              isActive
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
