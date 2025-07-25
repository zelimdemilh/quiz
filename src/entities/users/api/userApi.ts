import { userService } from '@shared/api';
import { buildSlice } from '@shared/lib/store';

import { IUserStateSchema } from '../lib/@types';
import { INITIAL_USER_STATE, USER_STORE_NAME } from '../lib/conts';

const userDataLocalStorage = localStorage.getItem('user');
const userData = userDataLocalStorage ? (JSON.parse(userDataLocalStorage) as IUserStateSchema) : null;

const initialState = userData || INITIAL_USER_STATE;

const userSlice = buildSlice({
  name: USER_STORE_NAME,
  initialState,
  reducers: {
    signOut: () => {
      localStorage.removeItem('user');
      return initialState;
    },
  },
  selectors: {
    getUser: state => state,
  },
  extraReducers: builder => {
    builder
      .addMatcher(userService.endpoints.userSignIn.matchFulfilled, (state, action) => {
        Object.assign(state, action.payload);
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addMatcher(userService.endpoints.getClientByToken.matchFulfilled, (state, action) => {
        Object.assign(state, action.payload);
      });
  },
});

export const { actions: userActions, reducer: userReducer, useActions: useUserActions } = userSlice;
