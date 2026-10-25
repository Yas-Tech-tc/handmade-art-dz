import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

function Shop() {
  return (
    <Container className="py-10">
      <SectionTitle title="Notre boutique" />
      <ProductGrid products={products} onAdd={(p) => console.log("Ajout :", p.name)} />
    </Container>
  );
}

export default Shop;