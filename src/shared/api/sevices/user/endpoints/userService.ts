import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../../../constants';
import { PrepareTypicalAuthUserHeaders } from '../../../lib';
import {
  TUserByTokenApiArg,
  TUserByTokenApiResponse,
  TUserSignInApiArg,
  TUserSignInApiResponse,
  TUserSignUpApiArg,
  TUserSignUpResponse,
} from '../types';

export const userService = createApi({
  reducerPath: 'userApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/client/`,
    prepareHeaders: PrepareTypicalAuthUserHeaders,
  }),
  endpoints: build => ({
    userSignUp: build.mutation<TUserSignUpResponse, TUserSignUpApiArg>({
      query: arg => ({
        url: 'signup',
        method: 'POST',
        body: arg,
      }),
    }),
    userSignIn: build.mutation<TUserSignInApiResponse, TUserSignInApiArg>({
      query: arg => ({
        url: 'signIn',
        method: 'POST',
        body: arg,
      }),
    }),
    getClientByToken: build.query<TUserByTokenApiResponse, TUserByTokenApiArg>({
      query: arg => ({
        url: 'signIn/refetch',
        params: arg,
      }),
    }),
  }),
});

export const {
  reducerPath: userControllerReducerPath,
  reducer: userControllerReducer,
  middleware: userControllerMiddleware,
} = userService;

export const { useUserSignUpMutation, useUserSignInMutation, useLazyGetClientByTokenQuery } = userService;
