import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";

function FavoriteButton({ productId, name }) {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.favorites.ids.includes(productId));

  return (
    <button
      onClick={() => dispatch(toggleFavorite(productId))}
      aria-pressed={active}
      aria-label={active ? `Retirer ${name} des favoris` : `Ajouter ${name} aux favoris`}
      className={`absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-cream/90 hover:bg-cream ${
        active ? "text-terracotta" : "text-night"
      }`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"}
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default FavoriteButton;