import { CreateQuestion, AllQuestions, CreateTest } from "../../pages";

export const adminRoutes = [
  { path: "questions/create", element: <CreateQuestion /> },
  { path: "questions", element: <AllQuestions /> },
  { path: "test/create", element: <CreateTest /> },
];
