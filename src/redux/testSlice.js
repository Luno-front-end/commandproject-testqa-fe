import { createSlice } from '@reduxjs/toolkit';

import { getAllTest } from './tetstOperaion';

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

// const hotdogSlice = createSlice({
//   name: 'allHotdogs',
//   initialState: {
//     allHotdogs: [],
//   },
//   extraReducers: {
//     [getAllHotdogs.fulfilled]: (state, { payload }) => {
//       return { allHotdogs: payload };
//     },
//     [addHotdog.fulfilled]: (state, { payload }) => {
//       return { allHotdogs: [...state.allHotdogs, payload] };
//     },
//     [deleteHotdog.fulfilled]: (state, { payload }) => {
//       return {
//         allHotdogs: state.allHotdogs.filter(hotdog => hotdog.id !== payload.id),
//       };
//     },
//     [updateHotdog.fulfilled]: (state, { payload }) => {
//       return {
//         allHotdogs: state.allHotdogs.map(hotdog =>
//           hotdog.id !== payload.id ? hotdog : payload,
//         ),
//       };
//     },
//   },
// });
