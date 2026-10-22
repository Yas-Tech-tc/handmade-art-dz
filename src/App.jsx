import { useState } from "react";
import Container from "./components/Container";
import SectionTitle from "./components/SectionTitle";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/products";
import { categories } from "./data/categories";

function App() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all" ? products : products.filter((p) => p.category === selected);

  return (
    <main className="py-12">
      <Container>
        <SectionTitle title="Notre boutique" subtitle="Page de test de l'étape 3." />

        <label className="mb-6 block">
          <span className="mr-2 font-bold">Catégorie :</span>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="min-h-11 rounded-lg border border-night/30 bg-cream px-3"
          >
            <option value="all">Toutes</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>

        <ProductGrid
          products={filtered}
          onAdd={(product) => console.log("Ajout :", product.name)}
        />
      </Container>
    </main>
  );
}

export default App; 