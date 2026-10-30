import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";

function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function Shop() {
  const [params, setParams] = useSearchParams();
  const selected = params.get("categorie") ?? "all";
  const query = params.get("q") ?? "";
  const sort = params.get("tri") ?? "default";

  function update(key, value, replace = false) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace });
  }

  let list = selected === "all" ? products : products.filter((p) => p.category === selected);

  if (query.trim()) {
    const q = normalize(query.trim());
    list = list.filter((p) => normalize(`${p.name} ${p.description}`).includes(q));
  }

  if (sort === "prix-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "prix-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "nouveau") list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));

  return (
    <Container className="py-10">
      <SectionTitle title="Notre boutique" subtitle={`${list.length} produit(s)`} />

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Rechercher un produit</span>
          <input
            type="search"
            value={query}
            onChange={(e) => update("q", e.target.value, true)}
            placeholder="Rechercher un produit..."
            className="min-h-11 w-full rounded-full border-2 border-night/30 bg-cream px-5"
          />
        </label>

        <label>
          <span className="sr-only">Trier les produits</span>
          <select
            value={sort}
            onChange={(e) => update("tri", e.target.value === "default" ? "" : e.target.value)}
            className="min-h-11 w-full rounded-full border-2 border-night/30 bg-cream px-4 sm:w-auto"
          >
            <option value="default">Trier par</option>
            <option value="nouveau">Nouveautés</option>
            <option value="prix-asc">Prix croissant</option>
            <option value="prix-desc">Prix décroissant</option>
          </select>
        </label>
      </div>

      <CategoryFilter
        categories={categories}
        selected={selected}
        onSelect={(id) => update("categorie", id === "all" ? "" : id)}
      />
      <ProductGrid products={list} />
    </Container>
  );
}

export default Shop;