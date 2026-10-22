import Button from "./Button";
import ProductImage from "./ProductImage";
import { formatPrice } from "../utils/formatPrice";
import { getCategoryName } from "../data/categories";

function ProductCard({ product, onAdd }) {
  const { name, price, category, images, isNew, inStock } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-night/10 bg-cream">
      <div className="relative aspect-square bg-sand">
        <ProductImage src={images[0]} alt={name} className="h-full w-full" />
        {isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-bold text-night">
            Nouveau
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-olive">
          {getCategoryName(category)}
        </p>
        <h3 className="text-base leading-snug">{name}</h3>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          <span className="font-bold">{formatPrice(price)}</span>
          <Button onClick={() => onAdd?.(product)} disabled={!inStock}>
            {inStock ? "Ajouter" : "Épuisé"}
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;