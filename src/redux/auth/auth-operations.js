import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://team-project-be.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/registration', credentials);
    token.set(data.data.token);
    return data.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.data.token);
    console.log(
      '🚀 ~ file: auth-operations.js ~ line 39 ~ data.data.token',
      data.data.token,
    );
    return data.data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data.data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  token,
};
export default operations;
