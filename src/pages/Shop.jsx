import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";

function Shop() {
  const [params, setParams] = useSearchParams();
  const selected = params.get("categorie") ?? "all";

  const list =
    selected === "all" ? products : products.filter((p) => p.category === selected);

  function choose(id) {
    if (id === "all") {
      setParams({});
    } else {
      setParams({ categorie: id });
    }
  }

  return (
    <Container className="py-10">
      <SectionTitle title="Notre boutique" subtitle={`${list.length} produit(s)`} />
      <CategoryFilter categories={categories} selected={selected} onSelect={choose} />
      <ProductGrid products={list} onAdd={(p) => console.log("Ajout :", p.name)} />
    </Container>
  );
}

export default Shop;