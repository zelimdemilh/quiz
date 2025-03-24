import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../../sevices";

interface UserState {
  id: string | null;
  role: "user" | "admin" | null;
  token: string | null;
}

const loadUserFromLocalStorage = (): UserState => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return { id: null, role: null, token: null };
};

const initialState: UserState = loadUserFromLocalStorage();

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userService.endpoints.userSignIn.matchFulfilled,
        (state, action) => {
          Object.assign(state, action.payload);
          localStorage.setItem("user", JSON.stringify(action.payload));
        },
      )
      .addMatcher(
        userService.endpoints.getClientByToken.matchFulfilled,
        (state, action) => {
          Object.assign(state, action.payload);
        },
      );
  },
});

export const userReducer = userSlice.reducer;
