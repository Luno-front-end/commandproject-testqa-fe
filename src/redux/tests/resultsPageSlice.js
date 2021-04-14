import { createSlice } from '@reduxjs/toolkit';
import { cleanAnswers, addAnswer } from './testActions';

const initialState = {
  type: '',
  answers: [],
};

const resultsPage = createSlice({
  name: 'CurrenstAnswers',
  initialState,
  reducers: {
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
