import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";
import { loadFromStorage } from "../utils/storage";

const MAX_QUANTITY = 10;
function loadItems() {
  const saved = loadFromStorage("handmade-art-dz:cart", []);
  if (!Array.isArray(saved)) return [];

  return saved.filter(
    (item) =>
      Number.isInteger(item?.id) &&
      Number.isInteger(item?.quantity) &&
      item.quantity >= 1 &&
      item.quantity <= MAX_QUANTITY &&
      products.some((p) => p.id === item.id)
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: loadItems() },
  reducers: {
    addItem(state, action) {
      const { id, quantity } = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        existing.quantity = Math.min(existing.quantity + quantity, MAX_QUANTITY);
      } else {
        state.items.push({ id, quantity: Math.min(quantity, MAX_QUANTITY) });
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = Math.min(Math.max(quantity, 1), MAX_QUANTITY);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, setQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

export default cartSlice.reducer;