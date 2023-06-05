import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { sendFirstOrder, sendOrderWithUserId } from 'redux/orders/thunks';

const ordersActions = [sendFirstOrder, sendOrderWithUserId];

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  user_id: '',
  store_name: '',
  store_location: { latitude: null, longitude: null },
  lotal_price: 0,
  items: [],
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setStore(state, { payload }) {
      state.store_name = payload.store_name;
      state.store_location = payload.location;
    },
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
    setTotalPrice(state, { payload }) {
      state.lotal_price = payload;
    },
  },
  extraReducers: builder =>
    builder.addMatcher(isAnyOf(...getActions('fulfilled')), state => {
      state.store_name = '';
      state.store_location = { latitude: null, longitude: null };
      state.lotal_price = 0;
      state.items = [];
    }),
});

export const { setStore, addToCart, removeFromCart, setAmount, setTotalPrice } =
  slice.actions;

export const cartReducer = slice.reducer;
