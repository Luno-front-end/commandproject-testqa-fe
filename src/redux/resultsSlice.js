import { createSlice } from '@reduxjs/toolkit';

import { getResults } from './tetstOperaion';

const resultsTest = createSlice({
  name: 'results',
  initialState: {
    type: 'qa',
    answers: [],
  },
  extraReducers: builder => {
    builder
      .addCase(getResults.pending, (state, { payload }) => {
        return state;
      })
      .addCase(getResults.fulfilled, (state, { payload }) => {
        return (state = payload);
      })
      .addCase(getResults.rejected, (state, { payload }) => {
        return state;
      });
  },
});

export default resultsTest.reducer;
