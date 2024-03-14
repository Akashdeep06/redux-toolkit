import { createSlice } from '@reduxjs/toolkit';
const initialState={
  cartnew:[]
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const {newItem,quantity} = action.payload;
      state.cartnew.push({...newItem,quantity});
    },
    removeItemFromCart(state, action) {
      const itemToRemove = action.payload;
      state.cartnew = state.cartnew.filter(item => item.id !== itemToRemove.id);
    },
  },
});

export const { addItem,removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
