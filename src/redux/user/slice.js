import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ordersActions } from 'redux/orders/thunks';

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  name: '',
  email: '',
  number: '',
  address: '',
  location: null,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLocation(state, { payload }) {
      state.location = payload;
    },
    setUserAddress(state, { payload }) {
      state.address = payload;
    },
  },
  extraReducers: builder =>
    builder.addMatcher(
      isAnyOf(...getActions('fulfilled')),
      (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.number = payload.number;
        state.address = payload.address;
        state.location = payload.location;
      }
    ),
});

export const { setUserLocation, setUserAddress } = slice.actions;

export const userReducer = slice.reducer;
