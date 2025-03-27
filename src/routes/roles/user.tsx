import { AllTests, HomePage, QuizPage } from "../../pages";

export const userRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "tests", element: <AllTests /> },
  { path: "tests/:id", element: <QuizPage /> },
];
