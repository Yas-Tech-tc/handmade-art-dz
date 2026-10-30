import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProductGrid from "../components/ProductGrid";
import { selectFavoriteIds } from "../store/favoritesSlice";
import { products } from "../data/products";

function Favorites() {
  const ids = useSelector(selectFavoriteIds);
  const list = products.filter((p) => ids.includes(p.id));

  return (
    <Container className="py-10">
      <SectionTitle title="Mes favoris" subtitle={`${list.length} produit(s)`} />

      {list.length === 0 ? (
        <div className="py-8">
          <p>Vous n'avez pas encore de favoris. Cliquez sur le cœur d'un produit pour le retrouver ici.</p>
          <Link to="/boutique" className="mt-4 inline-block font-bold text-terracotta hover:underline">
            Voir la boutique
          </Link>
        </div>
      ) : (
        <ProductGrid products={list} />
      )}
    </Container>
  );
}

export default Favorites;