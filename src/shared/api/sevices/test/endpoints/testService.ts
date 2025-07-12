import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../constants';
import { PrepareTypicalAuthUserHeaders } from '../../../lib';

import {
  TCreateTestApiArg,
  TCreateTestApiResponse,
  TDeleteTestApiArg,
  TDeleteTestApiResponse,
  TGetAllTestsApiResponse,
  TGetOneTestApiArg,
  TGetOneTestApiResponse,
  TUpdateTestApiArg,
  TUpdateTestApiResponse,
} from '../types';

export const testService = createApi({
  reducerPath: 'testApi',
  tagTypes: ['test', 'question'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/test/`,
    prepareHeaders: PrepareTypicalAuthUserHeaders,
  }),
  endpoints: build => ({
    getAllTests: build.query<TGetAllTestsApiResponse, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['test', 'question'],
    }),
    getOneTest: build.query<TGetOneTestApiResponse, TGetOneTestApiArg>({
      query: id => ({
        url: `${id}`,
        method: 'GET',
      }),
      providesTags: ['test', 'question'],
    }),
    createTest: build.mutation<TCreateTestApiResponse, TCreateTestApiArg>({
      query: arg => ({
        url: '',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ['test'],
    }),
    updateTest: build.mutation<TUpdateTestApiResponse, TUpdateTestApiArg>({
      query: arg => ({
        url: `${arg.id}`,
        method: 'PUT',
        body: arg,
      }),
      invalidatesTags: ['test'],
    }),
    deleteTest: build.mutation<TDeleteTestApiResponse, TDeleteTestApiArg>({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['test'],
    }),
  }),
});

export const {
  reducerPath: testControllerReducerPath,
  reducer: testControllerReducer,
  middleware: testControllerMiddleware,
} = testService;

export const {
  useGetAllTestsQuery,
  useGetOneTestQuery,
  useCreateTestMutation,
  useUpdateTestMutation,
  useDeleteTestMutation,
} = testService;
