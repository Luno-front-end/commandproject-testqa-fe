import { createSlice } from '@reduxjs/toolkit';

import { cleanAnswers, addAnswer } from './testActions';

const initialState = {
  type: '',
  answers: [],
};

const resultsPage = createSlice({
  name: 'CurrenstAnswers',
  initialState,
  extraReducers: {
    // [arrayResults]: (state, { payload }) => {
    //   const id = payload.answers._id;
    //   const array = state.answers.filter(el => el._id !== id);

    //   return {
    //     type: payload.type,
    //     answers: [...array, payload.answers],
    //   };
    // },
    [addAnswer]: (state, { payload }) => {
      const id = payload.answers._id;
      const array = state.answers.filter(el => el._id !== id);
      return {
        type: payload.type,
        answers: [...array, payload.answers],
      };
    },
    [cleanAnswers]: (state, action) => initialState,
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
