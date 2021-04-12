import { configureStore } from '@reduxjs/toolkit';

import testSlice from './tests/testSlice';
import resultsPage from './tests/resultsPageSlice';
import results from './tests/resultsSlice';

export const store = configureStore({
  reducer: {
    allTestsR: testSlice,
    lolkek: resultsPage,
    results: results,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// ///////////////////////////////////////////////

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';

// import authUsersReducer from './auth/auth-reducer';

// import testReducer from './testSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authUsersReducer),
//   reducer: { allTests: testReducer },
//   devTools: process.env.NODE_ENV !== 'production',
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// export const persistor = persistStore(store);

// export default store;
