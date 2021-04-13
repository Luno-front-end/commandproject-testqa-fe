import { createSlice } from '@reduxjs/toolkit';

import { getAllTest } from './testOperation';

const testSlice = createSlice({
  name: 'allTests',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getAllTest.pending, (state, { payload }) => {
        return state;
      })
      .addCase(getAllTest.fulfilled, (state, { payload }) => {
        return (state = payload);
      })
      .addCase(getAllTest.rejected, (state, { payload }) => {
        return state;
      });
  },
});
export default testSlice.reducer;
