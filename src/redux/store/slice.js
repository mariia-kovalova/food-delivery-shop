import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  location: null,
  items: [],
};

export const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStore(state, { payload }) {
      state.id = payload.id;
      state.name = payload.store_name;
      state.location = payload.location;
      state.items = payload.items;
    },
  },
});

export const { setStore } = slice.actions;

export const storeReducer = slice.reducer;
