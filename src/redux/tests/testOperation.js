import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authOperations from '../auth/auth-operations';

axios.defaults.baseURL = 'https://team-project-be.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3010';

// const token = {
//   set(token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// },
// unset() {
//     axios.defaults.headers.common.Authorization = '';
// },
// };

export const getAllTest = createAsyncThunk(
  'getAllTest',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/test/?test=${value}`);
      authOperations.token.set(data.token);
      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchResults = createAsyncThunk(
  'fetchTestResults',
  async (_, thunkApi) => {
    try {
      console.log(1111);
      const state = thunkApi.getState();
      const token = state.auth.token;
      const { data } = await axios.post('/test/answers', state.testResults, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return data;
    } catch (err) {
      throw err;
    }
  },
);
