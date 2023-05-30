import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'api';

export const getStores = createAsyncThunk(
  'getStores',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getStores();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
