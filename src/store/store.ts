import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import {
  userControllerReducer,
  userControllerReducerPath,
  userControllerMiddleware,
  questionControllerReducer,
  questionControllerReducerPath,
  questionControllerMiddleware
} from "../sevices";

const rootReducer = combineReducers({
  [userControllerReducerPath]: userControllerReducer,
  [questionControllerReducerPath]: questionControllerReducer,
  userSlice: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userControllerMiddleware, questionControllerMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
