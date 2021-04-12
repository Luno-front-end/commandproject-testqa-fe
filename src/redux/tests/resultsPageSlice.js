import { createSlice } from '@reduxjs/toolkit';

import { arrayResults } from './testActions';

const options = {
  type: '',
  answers: [],
};

const resultsPage = createSlice({
  name: 'lolkek',
  initialState: options,
  extraReducers: {
    [arrayResults]: (state, { payload }) => {
      const id = payload.answers._id;

      const array = state.answers.filter(el => el._id !== id);

      return {
        type: payload.type,
        answers: [...array, payload.answers],
      };
    },
  },
});

export default resultsPage.reducer;

//   setArrayResults(prevState =>
//     prevState.answers
//       ? { type, answers: [...prevState.answers, { answer, id }] }
//       : { type, answers: [{ answer, id }] },
//   );

//   const { id, answer } = payload.answers[0];
//   return answers
//     ? { type, answers: [...answers, { answer, id }] }
//     : payload;
