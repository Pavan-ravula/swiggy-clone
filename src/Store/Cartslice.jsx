// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// helper: load/save to localStorage (optional but handy)
const CART_LS_KEY = 'my_app_cart_v1';
const loadCartFromLocal = () => {
  try {
    const raw = localStorage.getItem(CART_LS_KEY);
    if (!raw) return { items: [], totalQty: 0, totalPrice: 0 };
    return JSON.parse(raw);
  } catch (e) {
    return { items: [], totalQty: 0, totalPrice: 0 };
  }
};
const saveCartToLocal = (state) => {
  try {
    localStorage.setItem(CART_LS_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
};

const initialState = loadCartFromLocal();

const recalc = (state) => {
  state.totalQty = state.items.reduce((s, it) => s + it.quantity, 0);
  state.totalPrice = state.items.reduce((s, it) => s + it.quantity * Number(it.price || 0), 0);
};

const Cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload should be an item object { _id, name, price, img, serves, ... }
      const item = action.payload;
      const existing = state.items.find(i => i._id === item._id);
      if (existing) {
        existing.quantity += 1;
      } else {
        // default quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
      recalc(state);
      saveCartToLocal(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i._id !== id);
      recalc(state);
      saveCartToLocal(state);
    },
    incrementQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i._id === id);
      if (existing) existing.quantity += 1;
      recalc(state);
      saveCartToLocal(state);
    },
    decrementQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i._id === id);
      if (existing) {
        existing.quantity = Math.max(1, existing.quantity - 1);
      }
      recalc(state);
      saveCartToLocal(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      saveCartToLocal(state);
    },
    setCart: (state, action) => {
      // replace cart (useful for restoring from server)
      state.items = action.payload.items || [];
      recalc(state);
      saveCartToLocal(state);
    }
  }
});

export const { addItem, removeItem, incrementQty, decrementQty, clearCart, setCart } = Cartslice.actions;
export default Cartslice.reducer;
