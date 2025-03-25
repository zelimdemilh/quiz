import { CreateQuestion, AllQuestions } from "../../pages";

export const adminRoutes = [
  { path: "questions/create", element: <CreateQuestion /> },
  { path: "questions", element: <AllQuestions /> },
];
