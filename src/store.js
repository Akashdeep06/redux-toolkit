// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import cartSlicereducer from './slices/cartSlice';
const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartSlicereducer
  },
});
export default store;
