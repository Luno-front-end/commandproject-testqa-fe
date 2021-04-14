// import { configureStore } from '@reduxjs/toolkit';

// ///////////////////////////////////////////////

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
// import resultsTest from './testSlice';
import testSlice from './tests/testSlice';
import resultsPage from './tests/resultsPageSlice';
import results from './tests/resultsSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  // хранить рефреш токен

  // whitelist: ['token'],
  whitelist: ['refreshToken'],
};

export const store = configureStore({
  reducer: {
    allTests: testSlice,
    testResults: resultsPage,
    results: results,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
