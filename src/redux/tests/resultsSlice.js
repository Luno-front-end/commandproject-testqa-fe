import { createSlice } from '@reduxjs/toolkit';
import { token } from '../auth/auth-operations';
import { fetchResults } from './testOperation';
import { cleanResults } from './testActions';

const results = createSlice({
  name: 'results',
  initialState: {},
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(cleanResults, (state, payload) => (state = {}))
      .addCase(fetchResults.pending, (state, { payload }) => {
        return state;
      })
      .addCase(fetchResults.fulfilled, (state, { payload }) => {
        return (state = payload);
      })
      .addCase(fetchResults.rejected, (state, { payload }) => {
        return state;
      });
  },
});
export default results.reducer;
