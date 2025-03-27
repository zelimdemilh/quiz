import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
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
} from "../sevices";

const rootReducer = combineReducers({
  [userControllerReducerPath]: userControllerReducer,
  [questionControllerReducerPath]: questionControllerReducer,
  [testControllerReducerPath]: testControllerReducer,
  userSlice: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        userControllerMiddleware,
        questionControllerMiddleware,
        testControllerMiddleware,
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
