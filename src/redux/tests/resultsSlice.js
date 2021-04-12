import { createSlice } from '@reduxjs/toolkit';

import { getResults } from './testOperation';

const results = createSlice({
  name: 'results',
  initialState: {},
  extraReducers: builder => {
    builder
      .addCase(getResults.pending, (state, { payload }) => {
        return state;
      })
      .addCase(getResults.fulfilled, (state, { payload }) => {
        console.log('payload');
        return (state = payload);
      })
      .addCase(getResults.rejected, (state, { payload }) => {
        return state;
      });
  },
});
export default results.reducer;
