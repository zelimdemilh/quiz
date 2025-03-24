import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import {
  userControllerReducer,
  userControllerReducerPath,
  userControllerMiddleware,
} from "../sevices";

const rootReducer = combineReducers({
  [userControllerReducerPath]: userControllerReducer,
  userSlice: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userControllerMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
