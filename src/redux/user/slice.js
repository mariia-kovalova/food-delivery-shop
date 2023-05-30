import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { sendFirstOrder, sendOrderWithUserId } from 'redux/orders/thunks';

const ordersActions = [sendFirstOrder, sendOrderWithUserId];

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  id: '',
  name: '',
  email: '',
  number: '',
  address: '',
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addMatcher(
      isAnyOf(...getActions('fulfilled')),
      (state, { payload }) => {
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.number = payload.number;
        state.address = payload.address;
      }
    ),
});

export const userReducer = slice.reducer;
