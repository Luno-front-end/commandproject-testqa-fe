import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authOperations from './auth-operations';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.email;
      state.token = payload.token;
    },
    [authOperations.register.rejected](state, { payload }) {
      toast.error(payload.message);
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      toast.error(payload.message);
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      toast.error(payload.message);
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      toast.error(payload?.message);
    },
  },
});

export default authSlice.reducer;
