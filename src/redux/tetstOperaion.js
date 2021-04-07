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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmExZjc4OTBiNzJhNGE5Y2MzZDc1NyIsImlhdCI6MTYxNzgyMTY2MiwiZXhwIjoxNjE3ODI4ODYyfQ.r-8ODdA1ikwwHNEAt1b2XbvVLORNh6WJWw-BoAUmYN0';
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
