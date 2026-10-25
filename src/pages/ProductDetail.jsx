import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container className="py-16">
        <p>Produit introuvable.</p>
        <Link to="/boutique" className="font-bold text-terracotta">Retour à la boutique</Link>
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <h1 className="text-3xl">{product.name}</h1>
      <p className="mt-2">Page détail à construire à l'étape 6.</p>
    </Container>
  );
}

export default ProductDetail;