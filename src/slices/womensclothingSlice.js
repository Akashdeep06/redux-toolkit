// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch data from the API
export const fetchData = createAsyncThunk(
  'data/fetchData', // Action type prefix
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      // The error will be automatically dispatched by Redux Toolkit
      throw error;
    }
  }
);

// Define the initial state for the slice
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create a slice with reducers and extra reducers
const dataSlice = createSlice({
  name: 'data', // Slice name
  initialState,
  reducers: {}, // You can add additional reducers here if needed
  extraReducers: (builder) => {
    builder
      // Handle pending state when the API request is in progress
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state when the API request is successful
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Handle rejected state when the API request fails
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer function generated by createSlice
export default dataSlice.reducer;