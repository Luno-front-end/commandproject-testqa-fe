import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { saveUserData } from './auth-actions';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  refreshToken: null,
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
      state.user = payload.email;
      state.token = payload.token;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.email;
      state.token = payload.token;
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
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
