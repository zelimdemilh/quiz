import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants";
import {
  TCreateQuestionApiArg,
  TCreateQuestionApiResponse,
  TDeleteQuestionApiArg,
  TDeleteQuestionApiResponse,
  TGetAllQuestionsApiResponse,
  TGetOneQuestionApiArg,
  TGetOneQuestionApiResponse,
  TUpdateQuestionApiArg,
  TUpdateQuestionApiResponse,
} from "../types";
import { PrepareTypicalAuthUserHeaders } from "../../../lib";

export const questionService = createApi({
  reducerPath: "questionApi",
  tagTypes: ["question"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/question/`,
    prepareHeaders: PrepareTypicalAuthUserHeaders,
  }),
  endpoints: (build) => ({
    // Получить все вопросы
    getAllQuestions: build.query<TGetAllQuestionsApiResponse, void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["question"],
    }),
    getOneQuestion: build.query<
      TGetOneQuestionApiResponse,
      TGetOneQuestionApiArg
    >({
      query: (id) => ({
        url: `${id}`,
        method: "GET",
      }),
    }),
    createQuestion: build.mutation<
      TCreateQuestionApiResponse,
      TCreateQuestionApiArg
    >({
      query: (arg) => ({
        url: "",
        method: "POST",
        body: arg,
      }),
    }),
    updateQuestion: build.mutation<
      TUpdateQuestionApiResponse,
      TUpdateQuestionApiArg
    >({
      query: (arg) => ({
        url: `${arg.id}`,
        method: "PUT",
        body: arg,
      }),
    }),
    deleteQuestion: build.mutation<
      TDeleteQuestionApiResponse,
      TDeleteQuestionApiArg
    >({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["question"],
    }),
  }),
});

export const {
  reducerPath: questionControllerReducerPath,
  reducer: questionControllerReducer,
  middleware: questionControllerMiddleware,
} = questionService;

export const {
  useGetAllQuestionsQuery,
  useGetOneQuestionQuery,
  useCreateQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
} = questionService;
