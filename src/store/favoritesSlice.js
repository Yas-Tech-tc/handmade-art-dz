import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";
import { loadFromStorage } from "../utils/storage";

function loadIds() {
  const saved = loadFromStorage("handmade-art-dz:favorites", []);
  if (!Array.isArray(saved)) return [];
  return saved.filter((id) => products.some((p) => p.id === id));
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { ids: loadIds() },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((i) => i !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavoriteIds = (state) => state.favorites.ids;
export default favoritesSlice.reducer;