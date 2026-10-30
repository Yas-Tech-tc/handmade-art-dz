import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="py-12 text-center text-night/70">Aucun produit trouvé.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;