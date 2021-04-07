import { configureStore } from '@reduxjs/toolkit';

import testReducer from './testSlice';

export const store = configureStore({
  reducer: { allTestsR: testReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

// import { configureStore } from '@reduxjs/toolkit'
// const reducer = {
//   todos: todosReducer,
//   visibility: visibilityReducer,
// }
// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState,
//   enhancers: [reduxBatch],
// })
