function CategoryFilter({ categories, selected, onSelect }) {
  const all = [{ id: "all", name: "Tout" }, ...categories];

  return (
    <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
      {all.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          aria-pressed={selected === c.id}
          className={`min-h-11 shrink-0 cursor-pointer whitespace-nowrap rounded-full border-2 border-night px-4 font-medium ${
            selected === c.id ? "bg-night text-cream" : "hover:bg-night/10"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;