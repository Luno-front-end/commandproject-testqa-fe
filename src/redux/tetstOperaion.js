import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmExZjc4OTBiNzJhNGE5Y2MzZDc1NyIsImlhdCI6MTYxNzk4OTEzNSwiZXhwIjoxNjE3OTk2MzM1fQ.kG8JXfwWSQbnLsao4UUxoYMYrR-0NVvejkSTAQzl3CQ';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getAllTest = createAsyncThunk(
  'getAllTest',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/test/?test=${value}`);
      return data.data;
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
