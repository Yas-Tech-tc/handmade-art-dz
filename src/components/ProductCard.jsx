import { Link } from "react-router-dom";
import Button from "./Button";
import ProductImage from "./ProductImage";
import { formatPrice } from "../utils/formatPrice";
import { getCategoryName } from "../data/categories";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, category, images, isNew, inStock } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-night/10 bg-cream">
      <Link to={`/produit/${product.id}`} className="relative block aspect-square bg-sand">
      <ProductImage src={images[0]} alt={name} className="h-full w-full" />
        {isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-bold   text-night">
            Nouveau
            </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-olive">
          {getCategoryName(category)}
        </p>
        <h3 className="text-base leading-snug">
          <Link to={`/produit/${product.id}`} className="hover:text-terracotta">{name}</Link>
        </h3>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <span className="font-bold">{formatPrice(price)}</span>
          <Button
            onClick={() => dispatch(addItem({ id: product.id, quantity: 1 }))}
            disabled={!inStock}
          >
            {inStock ? "Ajouter" : "Épuisé"}
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;