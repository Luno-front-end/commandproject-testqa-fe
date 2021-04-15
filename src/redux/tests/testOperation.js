import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTest = createAsyncThunk(
  'getAllTest',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/test/?test=${value}`);
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchResults = createAsyncThunk(
  'fetchTestResults',
  async (_, { getState }) => {
    try {
      const state = getState();
      const { data } = await axios.post('/test/answers', state.testResults);
      return data;
    } catch (err) {
      throw err;
    }
  },
);
