import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";
import { saveToStorage } from "../utils/storage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveToStorage("art-dz:cart", state.cart.items);
  saveToStorage("art-dz:favorites", state.favorites.ids);
});