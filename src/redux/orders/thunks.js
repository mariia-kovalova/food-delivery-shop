import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const sendFirstOrder = createAsyncThunk(
  'sendFirstOrder',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await API.orders.sendFirstOrder(formData);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const sendOrderWithUserId = createAsyncThunk(
  'sendOrderWithUserId',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await API.orders.sendOrderWithUserId(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOrdersByUserId = createAsyncThunk(
  'getOrdersByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await API.orders.getOrdersByUserId(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ordersActions = [
  sendFirstOrder,
  sendOrderWithUserId,
  getOrdersByUserId,
];
