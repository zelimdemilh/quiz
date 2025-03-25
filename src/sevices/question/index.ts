export {
  useGetAllQuestionsQuery,
  useGetOneQuestionQuery,
  useCreateQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
  questionControllerReducerPath,
  questionControllerReducer,
  questionControllerMiddleware,
  questionService,
} from "./endpoints";
export type {
  TCreateQuestionApiArg,
  TUpdateQuestionApiArg,
  TDeleteQuestionApiArg,
  TGetOneQuestionApiArg,
  TCreateQuestionApiResponse,
  TDeleteQuestionApiResponse,
  TUpdateQuestionApiResponse,
  TGetOneQuestionApiResponse,
  TGetAllQuestionsApiResponse
} from "./types";
