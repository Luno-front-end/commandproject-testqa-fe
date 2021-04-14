import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { saveUserData } from './auth-actions';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  refreshToken: null,
  error: {
    status: null,
    data: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [saveUserData](state, { payload }) {
      const { token, refreshToken, email } = payload;
      state.token = token;
      state.refreshToken = refreshToken;
      state.user.email = email;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      console.log('payload in reg', payload);
      state.user = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    [authOperations.register.rejected](state, { payload }) {
      console.log('payload in reg rejected', payload);
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      console.log('payload in log', payload);
      state.user = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      console.log('payload in log rejected', payload);
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      console.log('error payload', action);
      state.error = { ...state.error, ...action.payload };
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchWithRefreshToken.pending](state, action) {
      console.log('refresh pending', action);
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchWithRefreshToken.fulfilled](
      state,
      { payload: { data } },
    ) {
      console.log('refresh payload fullfilled');
      state.user.email = data.email;
      state.token = data.token;
      state.refreshToken = data.refreshToken;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
