import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  store_name: '',
  items: [],
};

export const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStore(state, { payload }) {
      state.id = payload.id;
      state.store_name = payload.store_name;
      state.items = payload.items;
    },
  },
});

export const { setStore } = slice.actions;

export const storeReducer = slice.reducer;
