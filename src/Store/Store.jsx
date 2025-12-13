// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
