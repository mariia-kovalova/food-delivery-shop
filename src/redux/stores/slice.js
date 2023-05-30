import { createSlice } from '@reduxjs/toolkit';
import { getStores } from './thunks';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'stores',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getStores.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStores.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getStores.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      }),
});
export const storesReducer = slice.reducer;
