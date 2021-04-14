import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-project-be.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/registration', credentials);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const operations = {
  axios,
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  token,
};
export default operations;
