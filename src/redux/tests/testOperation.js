import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
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

export const getResults = createAsyncThunk(
  'getTestResults',

  async (arrayTest, { rejectWithValue }) => {
    console.log('arrayTest', arrayTest);
    const json = JSON.stringify(arrayTest);
    console.log('json', json);
    // console.log(json);
    try {
      const { data } = await axios.post('/test/answers', arrayTest);
      console.log(data);
      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
