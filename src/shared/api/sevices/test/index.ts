export {
  useGetAllTestsQuery,
  useGetOneTestQuery,
  useCreateTestMutation,
  useUpdateTestMutation,
  useDeleteTestMutation,
  testControllerReducerPath,
  testControllerReducer,
  testControllerMiddleware,
  testService,
} from "./endpoints";
export type {
  TCreateTestApiArg,
  TCreateTestApiResponse,
  TDeleteTestApiArg,
  TDeleteTestApiResponse,
  TGetAllTestsApiResponse,
  TGetOneTestApiArg,
  TGetOneTestApiResponse,
  TUpdateTestApiArg,
  TUpdateTestApiResponse,
} from "./types";
