import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ordersActions } from './thunks';

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, { payload }) => {
        state.items = payload.orders;
        state.isLoading = false;
        state.error = null;
      }),
});

export const ordersReducer = slice.reducer;
