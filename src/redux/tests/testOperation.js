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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmExZjc4OTBiNzJhNGE5Y2MzZDc1NyIsInNlc3Npb25JZCI6IjYwNzQxMjFlZjU3NGI1MDA0ODM5Yzk3NiIsImlhdCI6MTYxODIxOTU1MSwiZXhwIjoxNjE4MjIzMTUxfQ.B2L8DZ-dNWkhgu50VU18VmAWNriJRrJcr1bE8OI6EVU';
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

export const getResults = createAsyncThunk(
  'getResults',

  async (arrayTest, { rejectWithValue }) => {
    console.log(arrayTest);
    try {
      const { data } = await axios.post('/test/answers', arrayTest, {});
      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
