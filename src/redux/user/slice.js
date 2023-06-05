import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ordersActions } from 'redux/orders/thunks';

const getActions = type => ordersActions.map(action => action[type]);

const initialState = {
  id: '',
  name: '',
  email: '',
  number: '',
  address: '',
  user_location: { latitude: null, longitude: null },
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLocation(state, { payload }) {
      state.user_location.latitude = payload.latitude;
      state.user_location.longitude = payload.longitude;
    },
  },
  extraReducers: builder =>
    builder.addMatcher(
      isAnyOf(...getActions('fulfilled')),
      (state, { payload }) => {
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.number = payload.number;
        state.address = payload.address;
        // state.user_location = payload.user_location;
      }
    ),
});

export const { setUserLocation } = slice.actions;

export const userReducer = slice.reducer;
