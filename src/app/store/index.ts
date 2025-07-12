import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@entities/users';
import {
  userControllerReducer,
  userControllerReducerPath,
  userControllerMiddleware,
  questionControllerReducer,
  questionControllerReducerPath,
  questionControllerMiddleware,
  testControllerReducerPath,
  testControllerReducer,
  testControllerMiddleware,
} from '@shared/api';

const rootReducer = combineReducers({
  [userControllerReducerPath]: userControllerReducer,
  [questionControllerReducerPath]: questionControllerReducer,
  [testControllerReducerPath]: testControllerReducer,
  userSlice: userReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(userControllerMiddleware, questionControllerMiddleware, testControllerMiddleware),
  });
