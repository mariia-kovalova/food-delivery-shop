import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { sendFirstOrder, sendOrderWithUserId } from 'redux/orders/thunks';

const ordersActions = [sendFirstOrder, sendOrderWithUserId];

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  items: [],
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.items = [...state.items, { ...payload, amount: 1 }];
    },
    removeFromCart(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    setAmount(state, { payload }) {
      state.items = state.items.map(item =>
        item.id === payload.id ? { ...item, amount: payload.amount } : item
      );
    },
  },
  extraReducers: builder =>
    builder.addMatcher(isAnyOf(...getActions('fulfilled')), state => {
      state.items = [];
    }),
});

export const { addToCart, removeFromCart, setAmount } = slice.actions;
export const cartReducer = slice.reducer;
