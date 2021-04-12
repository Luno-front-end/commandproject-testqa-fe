// import { configureStore } from '@reduxjs/toolkit';

// import testSlice from './testSlice';
// import resultsTest from './testSlice';

// export const store = configureStore({
//   reducer: { allTestsR: testSlice, results: resultsTest },
//   devTools: process.env.NODE_ENV !== 'production',
// });

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
import testSlice from './testSlice';
import resultsTest from './testSlice';

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
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    allTestsR: testSlice,
    results: resultsTest,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
