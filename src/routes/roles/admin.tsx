import {
  CreateQuestion,
  AllQuestions,
  CreateTest,
  AllTests,
} from "../../pages";

export const adminRoutes = [
  { path: "questions/create", element: <CreateQuestion /> },
  { path: "questions", element: <AllQuestions /> },
  { path: "test/create", element: <CreateTest /> },
  { path: "tests", element: <AllTests /> },
];
