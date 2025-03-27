import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../../../sevices";

interface UserState {
  id: string | null;
  role: "user" | "admin" | null;
  token: string | null;
}

const initialState: UserState = { id: null, role: null, token: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signOut: (state) => {
      state.id = null;
      state.role = null;
      state.token = null;
      localStorage.removeItem("user");
    },
  },
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

export const { signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
