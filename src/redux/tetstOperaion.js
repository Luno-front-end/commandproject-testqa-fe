import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import authOperations from './auth/auth-operations';

axios.defaults.baseURL = 'https://team-project-be.herokuapp.com';

// const token = {
//   set(token) {
//       axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// },
// unset() {
//     axios.defaults.headers.common.Authorization = '';
// },
// };
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmExZjc4OTBiNzJhNGE5Y2MzZDc1NyIsInNlc3Npb25JZCI6IjYwNzQ0N2E1OTNhMzZkMDA0ODVkZTQxYyIsImlhdCI6MTYxODIzMzI1MywiZXhwIjoxNjE4MjM2ODUzfQ.LwOG9ChGt9kKLnYceN0zg1oOSn-8eAXRz_lBGooA0ow';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

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
  'getResults',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/test/answers');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// export const getAllHotdogs = createAsyncThunk(
//   'getAllHotdogs',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/');
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const deleteHotdog = createAsyncThunk(
//   "deleteHotdog",
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(/${id});
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// [
//   type: qa
//   ans: 'eXPerience'

// ]
