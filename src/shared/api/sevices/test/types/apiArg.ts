import { ITest } from "../../../types";

export type TCreateTestApiArg = {
  title: string;
  description?: string;
  questions: string[];
};

export type TCreateTestApiResponse = ITest;

export type TGetAllTestsApiResponse = ITest[];

export type TGetOneTestApiArg = string;
export type TGetOneTestApiResponse = ITest;

export type TUpdateTestApiArg = {
  id: string;
  title?: string;
  description?: string;
  questions?: string[];
};

export type TUpdateTestApiResponse = ITest;

export type TDeleteTestApiArg = string;
export type TDeleteTestApiResponse = { message: string };
